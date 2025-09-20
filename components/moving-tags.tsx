"use client";

import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useTransform,
  wrap,
} from "framer-motion";
import { useRef } from "react";

const tags = [
  "Design Strategy",
  "A/B testing",
  "Design System",
  "User Research",
  "UX Design",
  "UI Design",
  "Prototype",
  "Wireframing",
  "User Testing",
  "Information Architecture",
  "Interaction Design",
  "Visual Design",
];

const tagClass = [
  "flex items-center justify-center",
  "px-6 py-3 rounded-full border-2 whitespace-nowrap text-sm font-medium rounded-[120px] outline outline-4 outline-offset-[-4px] outline-purple-300",
  // light
  "border-purple-300 text-purple-700 bg-white",
  // dark
  "dark:border-purple-600 dark:text-indigo-950 dark:bg-white",
  // hover (both themes)
  "hover:border-purple-400 hover:bg-purple-100",
  "dark:hover:border-purple-500 dark:hover:bg-purple-900/50",
  "transition-all duration-300",
].join(" ");

export function MovingTags() {
  // continuously increasing base position (as a percentage)
  const baseX = useMotionValue(0);

  // Wrap so it loops between 0% and -50% seamlessly (two copies => 200% width)
  const x = useTransform(baseX, (v) => `${wrap(-50, 0, v)}%`);

  // Tune speeds here (percentage-of-width per second; negative = move left)
  const NORMAL_SPEED = -6; // slow initial speed
  const HOVER_SPEED = -2; // even slower on hover

  const speedRef = useRef(NORMAL_SPEED);

  useAnimationFrame((_, delta) => {
    const moveBy = (speedRef.current * delta) / 1000; // delta ms -> seconds
    baseX.set(baseX.get() + moveBy);
  });

  const onHoverStart = () => {
    speedRef.current = HOVER_SPEED; // slow down further, no reset
  };
  const onHoverEnd = () => {
    speedRef.current = NORMAL_SPEED; // back to slow cruising, no reset
  };

  return (
    <div className="relative w-full overflow-hidden py-4">
      {/* edge fades */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-96 bg-gradient-to-r from-white to-transparent " />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-96 bg-gradient-to-l from-white to-transparent " />

      <motion.div
        className="flex whitespace-nowrap will-change-transform" // helps smoothness
        style={{ x }}
        onHoverStart={onHoverStart}
        onHoverEnd={onHoverEnd}
      >
        {/* first set */}
        <div className="flex shrink-0 gap-4 px-2">
          {tags.map((tag, i) => (
            <motion.div
              key={`first-${i}`}
              className={tagClass}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {tag}
            </motion.div>
          ))}
        </div>

        {/* duplicate set for seamless loop */}
        <div className="flex shrink-0 gap-4 px-2">
          {tags.map((tag, i) => (
            <motion.div
              key={`second-${i}`}
              className={tagClass}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {tag}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
