// "use client";

// const tags = [
//   "Design Strategy",
//   "A/B testing",
//   "Design System",
//   "User Research",
//   "UX Design",
//   "UI Design",
//   "Prototype",
//   "Wireframing",
//   "User Testing",
//   "Information Architecture",
//   "Interaction Design",
//   "Visual Design",
// ];

// export function MovingTags() {
//   const tagClass =
//     "flex items-center justify-center px-6 py-3 rounded-full border-2 whitespace-nowrap text-sm font-medium transition-all duration-300 " +
//     "border-purple-300 text-purple-700 bg-purple-50 " +
//     "dark:border-purple-600 dark:text-purple-300 dark:bg-purple-950/30 " +
//     "hover:border-purple-400 hover:bg-purple-100 dark:hover:border-purple-500 dark:hover:bg-purple-900/50";

//   return (
//     <div className="relative w-full overflow-hidden bg-gradient-to-r from-background via-transparent to-background">
//       {/* Gradient overlays for fade effect */}
//       <div className="absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-background to-transparent" />
//       <div className="absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-background to-transparent" />

//       {/* Moving tags container */}
//       <div className="flex animate-scroll">
//         {/* First set of tags */}
//         <div className="flex shrink-0 gap-4 px-4">
//           {tags.map((tag, index) => (
//             <div key={`first-${index}`} className={tagClass}>
//               {tag}
//             </div>
//           ))}
//         </div>

//         {/* Duplicate set for seamless loop */}
//         <div className="flex shrink-0 gap-4 px-4">
//           {tags.map((tag, index) => (
//             <div key={`second-${index}`} className={tagClass}>
//               {tag}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import { motion } from "framer-motion";

const tagClass =
  "flex items-center justify-center px-6 py-3 rounded-full border-2 whitespace-nowrap text-sm font-medium" +
  "border-purple-300 text-purple-700 bg-purple-50" +
  "dark:border-purple-600 dark:text-purple-300 dark:bg-purple-950/30";

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

export function MovingTags() {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Gradient overlays for fade effect */}
      <div className="absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-background to-transparent" />
      <div className="absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-background to-transparent" />

      <motion.div
        className="flex"
        animate={{
          x: [0, -50 + "%"],
        }}
        transition={{
          duration: 30,
          ease: "linear",
          repeat: Number.POSITIVE_INFINITY,
        }}
        whileHover={{ animationPlayState: "paused" }}
      >
        {/* First set of tags */}
        <div className="flex shrink-0 gap-4 px-4">
          {tags.map((tag, index) => (
            <motion.div
              key={`first-${index}`}
              className={tagClass}
              whileHover={{
                scale: 1.05,
                borderColor: "#a855f7",
                backgroundColor: "#f3e8ff",
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.95 }}
            >
              {tag}
            </motion.div>
          ))}
        </div>

        {/* Duplicate set for seamless loop */}
        <div className="flex shrink-0 gap-4 px-4">
          {tags.map((tag, index) => (
            <motion.div
              key={`second-${index}`}
              className={tagClass}
              whileHover={{
                scale: 1.05,
                borderColor: "#a855f7",
                backgroundColor: "#f3e8ff",
                transition: { duration: 0.2 },
              }}
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
