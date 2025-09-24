import { motion } from "framer-motion";
import { Marquee } from "./ui/magicui/Marique";

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
  "px-6 py-3 rounded-full border-2 whitespace-nowrap text-xl font-bold rounded-[120px] outline outline-4 outline-offset-[-4px] outline-purple-300",
  // light
  "border-purple-300 bg-white",
  // hover
  "hover:border-purple-400 hover:bg-purple-100",
  "transition-all duration-300",
].join(" ");

export function MovingTags() {
  return (
    <div className="relative w-full overflow-hidden py-4">
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-96 bg-gradient-to-r from-white to-transparent " />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-96 bg-gradient-to-l from-white to-transparent " />
      <Marquee className="[--duration:30s]" pauseOnHover>
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
      </Marquee>
    </div>
  );
}
