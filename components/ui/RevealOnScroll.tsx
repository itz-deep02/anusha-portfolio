"use client";

import { useAnimation, useInView, Variants, motion } from "framer-motion";
import { useEffect, useRef } from "react";

export function RevealOnScroll({
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
