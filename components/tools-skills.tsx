"use client";

import { motion } from "framer-motion";
import LogoLoop from "./ui/reactbits/Looplogo";
import Image from "next/image";

const tools = [
  { alt: "AE", src: "/images/ae.png" },
  { alt: "AI", src: "/images/ai.png" },
  { alt: "DOTS", src: "/images/dots.png" },
  { alt: "FIGMA", src: "/images/figma.png" },
  { alt: "FRAME", src: "/images/frame.png" },
  { alt: "FRAMER", src: "/images/framer.png" },
  { alt: "ID", src: "/images/id.png" },
  { alt: "INSTAGRAM", src: "/images/instagram.png" },
  { alt: "JIRA", src: "/images/jira.png" },
  { alt: "MIRO", src: "/images/miro.png" },
  { alt: "PS", src: "/images/ps.png" },
  { alt: "SLACK", src: "/images/slack.png" },
  { alt: "VN", src: "/images/vn.png" },
  { alt: "XD", src: "/images/xd.png" },
];

const duplicatedTools = [...tools, ...tools];

export function ToolsSkills() {
  return (
    <>
      <div className="absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-white to-transparent" />
      <div className="absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-white to-transparent" />
      <div className="mx-auto text-center">
        <motion.div
          className="relative text-6xl font-bold font-['FONTSPRING_DEMO_-_Recoleta_Alt_Bold'] mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Tools & Skills
          {/* <Image
            src="/icons/pencil.svg"
            alt="Flower"
            width={40}
            height={40}
            className="w-8 h-8 absolute -left-[10px] -top-[10px]"
          /> */}
        </motion.div>
        <motion.p
          className="text-2xl text-indigo-950 mb-12"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          The software, tools and technologies I am really good at:
        </motion.p>
        {/* <div className="relative overflow-hidden">
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
                <Image
                  src={tool.src}
                  alt={tool.alt}
                  width={80}
                  height={80}
                />
              </motion.div>
            ))}
          </motion.div>
        </div> */}
        <div className="py-4">
          <LogoLoop
            logos={tools}
            speed={120}
            direction="left"
            logoHeight={80}
            gap={52}
            pauseOnHover
            scaleOnHover
            fadeOut
            fadeOutColor="#ffffff"
            ariaLabel="Technology partners"
          />
        </div>
      </div>
    </>
  );
}
