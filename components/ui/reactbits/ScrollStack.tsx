import React, { ReactNode, useLayoutEffect, useRef, useCallback } from 'react';
import Lenis from 'lenis';

export interface ScrollStackItemProps {
  itemClassName?: string;
  children: ReactNode;
}

export const ScrollStackItem: React.FC<ScrollStackItemProps> = ({ children, itemClassName = '' }) => (
  <div
    className={`scroll-stack-card relative w-full my-8 box-border origin-top will-change-transform ${itemClassName}`.trim()}
    style={{
      backfaceVisibility: 'hidden',
      transformStyle: 'preserve-3d',
      // keep card height/content from this child, not the wrapper defaults
    }}
  >
    {children}
  </div>
);

interface ScrollStackProps {
  className?: string;
  children: ReactNode;
  itemDistance?: number;
  itemScale?: number;
  itemStackDistance?: number;
  stackPosition?: string;
  scaleEndPosition?: string;
  baseScale?: number;
  scaleDuration?: number;
  rotationAmount?: number;
  /** was causing text blur — now default 0; kept for API compat */
  blurAmount?: number;
  useWindowScroll?: boolean;
  onStackComplete?: () => void;
  /** control padding of inner wrapper */
  innerClassName?: string;
  /** how much of the last card remains visible when the stack finishes (0–1) */
  lastCardVisibleRatio?: number; // NEW
  /** fade depth (0–1) applied to cards behind the top one */
  depthDimOpacity?: number; // NEW
}

const ScrollStack: React.FC<ScrollStackProps> = ({
  children,
  className = '',
  itemDistance = 100,
  itemScale = 0.03,
  itemStackDistance = 30,
  stackPosition = '20%',
  scaleEndPosition = '10%',
  baseScale = 0.85,
  scaleDuration = 0.5,
  rotationAmount = 0,
  blurAmount = 0, // keep but unused
  useWindowScroll = false,
  onStackComplete,
  innerClassName = 'pt-[20vh] px-20 pb-[50rem] min-h-screen',
  lastCardVisibleRatio = 0.2, // NEW: 20% by default
  depthDimOpacity = 0.08, // NEW: subtle dim instead of blur
}) => {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const stackCompletedRef = useRef(false);
  const animationFrameRef = useRef<number | null>(null);
  const lenisRef = useRef<Lenis | null>(null);
  const cardsRef = useRef<HTMLElement[]>([]);
  const lastTransformsRef = useRef(new Map<number, any>());
  const isUpdatingRef = useRef(false);

  const calculateProgress = useCallback((scrollTop: number, start: number, end: number) => {
    if (scrollTop < start) return 0;
    if (scrollTop > end) return 1;
    return (scrollTop - start) / (end - start);
  }, []);

  const parsePercentage = useCallback((value: string | number, containerHeight: number) => {
    if (typeof value === 'string' && value.includes('%')) {
      return (parseFloat(value) / 100) * containerHeight;
    }
    return parseFloat(value as string);
  }, []);

  const getScrollData = useCallback(() => {
    if (useWindowScroll) {
      return {
        scrollTop: window.scrollY,
        containerHeight: window.innerHeight,
        scrollContainer: document.documentElement,
      };
    } else {
      const scroller = scrollerRef.current;
      return {
        scrollTop: scroller ? scroller.scrollTop : 0,
        containerHeight: scroller ? scroller.clientHeight : 0,
        scrollContainer: scroller,
      };
    }
  }, [useWindowScroll]);

  const getElementOffset = useCallback(
    (element: HTMLElement) => {
      if (useWindowScroll) {
        const rect = element.getBoundingClientRect();
        return rect.top + window.scrollY;
      }
      return element.offsetTop;
    },
    [useWindowScroll]
  );

  const updateCardTransforms = useCallback(() => {
    if (!cardsRef.current.length || isUpdatingRef.current) return;
    isUpdatingRef.current = true;

    const { scrollTop, containerHeight } = getScrollData();
    const stackPositionPx = parsePercentage(stackPosition, containerHeight);
    const scaleEndPositionPx = parsePercentage(scaleEndPosition, containerHeight);

    const lastCard = cardsRef.current[cardsRef.current.length - 1];
    const lastTop = getElementOffset(lastCard);
    const lastHeight = lastCard.offsetHeight;

    // All cards share the same pinEnd so the stack completes when only 20% of the last card is visible.
    const pinEndGlobal = lastTop + lastHeight * lastCardVisibleRatio - stackPositionPx; // NEW

    const dpr = typeof window !== 'undefined' ? window.devicePixelRatio || 1 : 1;
    const snap = (v: number) => Math.round(v * dpr) / dpr; // NEW: pixel snapping

    cardsRef.current.forEach((card, i) => {
      const cardTop = getElementOffset(card);

      const triggerStart = cardTop - stackPositionPx - itemStackDistance * i;
      const triggerEnd = cardTop - scaleEndPositionPx;

      const pinStart = cardTop - stackPositionPx - itemStackDistance * i;
      const pinEnd = pinEndGlobal;

      // Progress drives scaling down to target
      const scaleProgress = calculateProgress(scrollTop, triggerStart, triggerEnd);

      // NEW: deeper cards are smaller; clamp final one to >= 0.2
      const targetScale = Math.max(0.2, baseScale - i * itemScale);
      const scale = 1 - scaleProgress * (1 - targetScale);

      const rotation = rotationAmount ? (i * rotationAmount * scaleProgress) : 0;

      let translateY = 0;
      const isPinned = scrollTop >= pinStart && scrollTop <= pinEnd;

      if (isPinned) {
        translateY = scrollTop - cardTop + stackPositionPx + itemStackDistance * i;
      } else if (scrollTop > pinEnd) {
        translateY = pinEnd - cardTop + stackPositionPx + itemStackDistance * i;
      }

      // NEW: paint-order, no blur; dim depth a touch
      const topIndex = cardsRef.current.length - i;
      card.style.zIndex = String(1000 + topIndex);
      const dim = Math.max(0, Math.min(1, (i) * depthDimOpacity));
      card.style.opacity = 1 - dim; // subtle depth cue without text blur

      const newTransform = {
        translateY: snap(translateY),
        scale: Math.round(scale * 1000) / 1000,
        rotation: Math.round(rotation * 100) / 100,
      };

      const lastTransform = lastTransformsRef.current.get(i);
      const hasChanged =
        !lastTransform ||
        Math.abs(lastTransform.translateY - newTransform.translateY) > 0.01 ||
        Math.abs(lastTransform.scale - newTransform.scale) > 0.001 ||
        Math.abs(lastTransform.rotation - newTransform.rotation) > 0.1;

      if (hasChanged) {
        const transform = `translate3d(0, ${newTransform.translateY}px, 0) scale(${newTransform.scale}) rotate(${newTransform.rotation}deg)`;
        card.style.transform = transform;
        lastTransformsRef.current.set(i, newTransform);
      }

      // completion flag
      if (i === cardsRef.current.length - 1) {
        const inView = scrollTop >= pinStart && scrollTop <= pinEnd;
        if (inView && !stackCompletedRef.current) {
          stackCompletedRef.current = true;
          onStackComplete?.();
        } else if (!inView && stackCompletedRef.current) {
          stackCompletedRef.current = false;
        }
      }
    });

    isUpdatingRef.current = false;
  }, [
    baseScale,
    itemScale,
    itemStackDistance,
    stackPosition,
    scaleEndPosition,
    lastCardVisibleRatio,
    rotationAmount,
    depthDimOpacity,
    calculateProgress,
    parsePercentage,
    getScrollData,
    getElementOffset,
  ]);

  const handleScroll = useCallback(() => {
    updateCardTransforms();
  }, [updateCardTransforms]);

  const setupLenis = useCallback(() => {
    const common = {
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 2,
      infinite: false,
      wheelMultiplier: 1,
      lerp: 0.1,
      syncTouch: true,
      syncTouchLerp: 0.075,
    } as const;

    let lenis: Lenis | null = null;

    if (useWindowScroll) {
      lenis = new Lenis(common as any);
    } else {
      const scroller = scrollerRef.current!;
      lenis = new Lenis({
        ...(common as any),
        wrapper: scroller,
        content: scroller.querySelector('.scroll-stack-inner') as HTMLElement,
        gestureOrientation: 'vertical',
      });
    }

    if (!lenis) return null;

    lenis.on('scroll', handleScroll);

    const raf = (time: number) => {
      lenis!.raf(time);
      animationFrameRef.current = requestAnimationFrame(raf);
    };
    animationFrameRef.current = requestAnimationFrame(raf);

    lenisRef.current = lenis;
    return lenis;
  }, [handleScroll, useWindowScroll]);

  useLayoutEffect(() => {
    if (!useWindowScroll && !scrollerRef.current) return;

    const cards = Array.from(
      useWindowScroll
        ? document.querySelectorAll('.scroll-stack-card')
        : (scrollerRef.current?.querySelectorAll('.scroll-stack-card') ?? [])
    ) as HTMLElement[];

    cardsRef.current = cards;
    const transformsCache = lastTransformsRef.current;

    cards.forEach((card, i) => {
      if (i < cards.length - 1) {
        card.style.marginBottom = `${itemDistance}px`;
      }
      card.style.willChange = 'transform, opacity';
      card.style.transformOrigin = 'top center';
      card.style.backfaceVisibility = 'hidden';
      card.style.transform = 'translateZ(0)';
      (card.style as any).webkitTransform = 'translateZ(0)';
      // no filter → no raster blur flicker
    });

    setupLenis();
    updateCardTransforms();

    return () => {
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
      if (lenisRef.current) lenisRef.current.destroy();
      stackCompletedRef.current = false;
      cardsRef.current = [];
      transformsCache.clear();
      isUpdatingRef.current = false;
    };
  }, [
    itemDistance,
    itemScale,
    itemStackDistance,
    stackPosition,
    scaleEndPosition,
    baseScale,
    scaleDuration,
    rotationAmount,
    useWindowScroll,
    onStackComplete,
    setupLenis,
    updateCardTransforms,
  ]);

  return (
    <div
      ref={scrollerRef}
      className={`relative w-full h-full ${useWindowScroll ? 'overflow-visible' : 'overflow-y-auto'} overflow-x-visible ${className}`.trim()}
      style={{
        overscrollBehavior: 'contain',
        WebkitOverflowScrolling: 'touch',
        // REMOVED: scrollBehavior: 'smooth' (conflicts with Lenis)
        WebkitTransform: 'translateZ(0)',
        transform: 'translateZ(0)',
        willChange: 'scroll-position',
        contain: 'paint', // helps Chrome reduce flicker
      }}
    >
      <div className={`scroll-stack-inner ${innerClassName}`}>
        {children}
        <div className="scroll-stack-end w-full h-px" />
      </div>
    </div>
  );
};

export default ScrollStack;
