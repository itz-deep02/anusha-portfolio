"use client";

import {
  motion,
  useScroll,
  useSpring,
  useAnimation,
  Variants,
} from "framer-motion";
import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import Image from "next/image";
import Navigation from "components/navbar";

const images = [
  "/images/1.png",
  "/images/2.png",
  "/images/3.png",
  "/images/4.png",
  "/images/5.png",
  "/images/6.png",
  "/images/7.png",
  "/images/8.png",
];

function RevealOnScroll({
  children,
  amount = 0.15, // how much of the element must be visible to trigger
  y = 24, // initial offset
  duration = 0.6,
}: {
  children: React.ReactNode;
  amount?: number;
  y?: number;
  duration?: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);

  // 👇 Reveal once and never hide again
  const inView = useInView(ref, {
    amount,
    margin: "0px 0px -15% 0px", // negative bottom margin = start a bit earlier
    once: true,
  });

  const controls = useAnimation();

  const variants: Variants = {
    hidden: { opacity: 0, y },
    visible: { opacity: 1, y: 0, transition: { duration, ease: "easeOut" } },
  };

  useEffect(() => {
    if (inView) controls.start("visible"); // only go visible; never go back to hidden
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={controls}
    >
      {children}
    </motion.div>
  );
}

export default function AboutPage() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      {/* top progress bar */}
      <motion.div
        className="fixed left-0 right-0 top-0 h-1 bg-gradient-to-r from-[#A97CF8] via-[#F38CB8] to-[#FDCC92] origin-left z-[9999]"
        style={{ scaleX }}
      />

      <div className="w-full bg-white">
        <Navigation />

        {/* Hero */}
        <section className="relative h-[80svh] w-full overflow-hidden">
          <Image
            src="/images/about-bg.png"
            alt="bg"
            fill
            priority
            sizes="80vw"
            className="object-cover pointer-events-none"
          />

          {/* <video
            src="/videos/about.mp4" // 👉 put your file in /public/videos
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 m-auto h-[60%] w-[60%] object-contain z-10"
          /> */}
          <Image
            src="/images/giffffff.mov-ezgif.com-optimize.gif"
            alt="Animated GIF"
            width={550} // adjust to your design
            height={350} // adjust to your design
            className="absolute inset-0 m-auto object-contain z-10"
            unoptimized // ⚡ important for GIFs, so Next.js doesn’t try to optimize
          />
        </section>

        {/* Gallery with reveal on scroll */}
        <div className="space-y-0">
          {/* First image: show immediately */}
          <div className="relative w-full">
            <Image
              src={images[0]}
              alt="About image 1"
              width={1920}
              height={1080}
              className="w-full h-auto object-cover"
              loading="eager"
              priority
            />
          </div>

          {/* Remaining images: reveal on scroll */}
          {images.slice(1).map((src, index) => (
            <RevealOnScroll key={src} amount={0.4} y={28} duration={0.55}>
              <div className="relative w-full">
                <Image
                  src={src}
                  alt={`About image ${index + 2}`}
                  width={1920}
                  height={1080}
                  className="w-full h-auto object-cover will-change-transform"
                  loading="lazy"
                />
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </>
  );
}
