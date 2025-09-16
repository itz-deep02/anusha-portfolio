"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const tools = [
  { name: "AE", image: "/images/ae.png" },
  { name: "AI", image: "/images/ai.png" },
  { name: "DOTS", image: "/images/dots.png" },
  { name: "FIGMA", image: "/images/figma.png" },
  { name: "FRAME", image: "/images/frame.png" },
  { name: "FRAMER", image: "/images/framer.png" },
  { name: "ID", image: "/images/id.png" },
  { name: "INSTAGRAM", image: "/images/instagram.png" },
  { name: "JIRA", image: "/images/jira.png" },
  { name: "MIRO", image: "/images/miro.png" },
  { name: "PS", image: "/images/ps.png" },
  { name: "SLACK", image: "/images/slack.png" },
  { name: "VN", image: "/images/vn.png" },
  { name: "XD", image: "/images/xd.png" },
];

const duplicatedTools = [...tools, ...tools];

export function ToolsSkills() {
  return (
    <section className="py-20">
      <div className="absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-background to-transparent" />
      <div className="absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-background to-transparent" />
      <div className=" mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold text-foreground mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Tools & Skills
        </motion.h2>

        <motion.p
          className="text-lg text-muted-foreground mb-12"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          The software, tools and technologies I am really good at:
        </motion.p>

        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-6"
            animate={{
              x: [0, -1320], // Move by width of all original tools
            }}
            transition={{
              x: {
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
            style={{
              width: `${duplicatedTools.length * 104}px`, // 80px width + 24px gap
            }}
          >
            {duplicatedTools.map((tool, index) => (
              <motion.div
                key={index}
                className={`w-20 h-20 rounded-2xl flex items-center justify-center text-2xl cursor-pointer shadow-lg flex-shrink-0`}
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 10,
                }}
              >
                <Image src={tool.image} alt={tool.name} width={80} height={80} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
