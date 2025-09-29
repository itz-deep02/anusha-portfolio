"use client";

import { PropsWithChildren } from "react";
import { motion } from "framer-motion";

type Direction = "left" | "right" | "up" | "down" | "none";

function getVariants(direction: Direction) {
  const distance = 60; // px
  const from =
    direction === "left"
      ? { x: -distance }
      : direction === "right"
      ? { x: distance }
      : direction === "up"
      ? { y: -distance }
      : direction === "down"
      ? { y: distance }
      : {};

  return {
    hidden: { opacity: 0, ...from },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { type: "spring", stiffness: 120, damping: 20 },
    },
  };
}

export function RevealOnScroll({
  children,
  direction = "left",
  delay = 0,
  as: Tag = "section",
  className,
  once = true,
}: PropsWithChildren<{
  direction?: Direction;
  delay?: number;
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  once?: boolean;
}>) {
  return (
    <motion.div
      className={className}
      variants={getVariants(direction)}
      initial="hidden"
      whileInView="show"
      viewport={{ once, margin: "0px 0px -10% 0px", amount: 0.2 }}
      transition={{ delay }}
    >
      {/* Use a semantic wrapper if you like; by default we just render children */}
      {children}
    </motion.div>
  );
}
