'use client';

import React, { useRef } from 'react';
import { useScroll, useTransform, motion, MotionValue } from 'motion/react';
import clsx from 'clsx';

type ContainerScrollProps = {
  titleComponent: React.ReactNode;
  children: React.ReactNode;
  /** Disable the gray frame + border; great when embedding real sections */
  frame?: boolean;
  /** Height classes for the outer viewport */
  heightClassName?: string;
  /** Extra classes for the inner content wrapper */
  contentClassName?: string;
};

export const ContainerScroll = ({
  titleComponent,
  children,
  frame = false,
  heightClassName = 'h-[120rem] md:h-[160rem]',
  contentClassName = '',
}: ContainerScrollProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });

  // gentle parallax
  const rotate = useTransform(scrollYProgress, [0, 1], [16, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.02, 1]);
  const translateTitle = useTransform(scrollYProgress, [0, 1], [0, -80]);

  return (
    <div
      ref={containerRef}
      className={clsx(
        'relative flex items-center justify-center p-2 md:p-20',
        heightClassName
      )}
    >
      <div className="w-full relative" style={{ perspective: '1000px' }}>
        <Header translate={translateTitle}>{titleComponent}</Header>
        <Card rotate={rotate} scale={scale} frame={frame} contentClassName={contentClassName}>
          {children}
        </Card>
      </div>
    </div>
  );
};

const Header = ({
  translate,
  children,
}: {
  translate: MotionValue<number>;
  children: React.ReactNode;
}) => (
  <motion.div style={{ translateY: translate }} className="max-w-7xl mx-auto text-center">
    {children}
  </motion.div>
);

const Card = ({
  rotate,
  scale,
  children,
  frame,
  contentClassName,
}: {
  rotate: MotionValue<number>;
  scale: MotionValue<number>;
  children: React.ReactNode;
  frame: boolean;
  contentClassName?: string;
}) => {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
        boxShadow:
          '0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003',
        willChange: 'transform',
      }}
      className={clsx(
        'mx-auto w-full max-w-7xl -mt-12 rounded-[30px]',
        // when frame=false we remove the dark backdrop + border + fixed heights
        frame
          ? 'h-[30rem] md:h-[40rem] border-4 border-[#6C6C6C] p-2 md:p-6 bg-[#222222]'
          : 'bg-transparent p-0'
      )}
    >
      <div
        className={clsx(
          // IMPORTANT: visible + auto height so your cards aren’t clipped
          'w-full h-auto overflow-visible rounded-[24px] md:rounded-[24px] bg-transparent',
          contentClassName
        )}
      >
        {children}
      </div>
    </motion.div>
  );
};
