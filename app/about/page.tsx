// "use client";

// import Navigation from "@/components/navbar";
// import { motion, useScroll, useSpring } from "framer-motion";
// import Image from "next/image";

// const images = [
//   "/images/1.png",
//   "/images/2.png",
//   "/images/3.png",
//   "/images/4.png",
//   "/images/5.png",
//   "/images/6.png",
//   "/images/7.png",
//   "/images/8.png",
// ];

// export default function AboutPage() {
//   const { scrollYProgress } = useScroll();
//   const scaleX = useSpring(scrollYProgress, {
//     stiffness: 100,
//     damping: 30,
//     restDelta: 0.001,
//   });
//   return (
//     <>
//       <motion.div
//         className="fixed left-0 right-0 top-0 h-1 bg-green-400 origin-left z-[9999]"
//         style={{ scaleX }}
//       />
//       <div className="w-full bg-white">
//         <Navigation />
//         <section className="relative h-[100svh] w-full overflow-hidden">
//           <Image
//             src="/images/Homepage.png"
//             alt="Homepage background"
//             fill
//             priority
//             sizes="100vw"
//             className="object-cover pointer-events-none"
//           />
//         </section>
//         {images.map((src, index) => (
//           <div key={index} className="relative w-full h-auto">
//             <Image
//               src={src}
//               alt={`About image ${index + 1}`}
//               width={1920}
//               height={1080}
//               className="w-full object-cover"
//             />
//           </div>
//         ))}
//       </div>
//     </>
//   );
// }

"use client";

import Navigation from "@/components/navbar";
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

// Reusable wrapper: fades in when in view, fades out when leaving
function RevealOnScroll({
  children,
  amount = 0.35, // how much of the element must be visible to trigger
  y = 24, // initial offset
  duration = 0.6,
}: {
  children: React.ReactNode;
  amount?: number;
  y?: number;
  duration?: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { amount, margin: "0px 0px -15% 0px" }); // negative bottom margin = start a bit earlier
  const controls = useAnimation();

  const variants: Variants = {
    hidden: { opacity: 0, y },
    visible: { opacity: 1, y: 0, transition: { duration, ease: "easeOut" } },
  };

  useEffect(() => {
    controls.start(inView ? "visible" : "hidden");
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
        className="fixed left-0 right-0 top-0 h-1 bg-green-400 origin-left z-[9999]"
        style={{ scaleX }}
      />

      <div className="w-full bg-white">
        <Navigation />

        {/* Hero */}
        <section className="relative h-[100svh] w-full overflow-hidden">
          <Image
            src="/images/Homepage.png"
            alt="Homepage background"
            fill
            priority
            sizes="100vw"
            className="object-cover pointer-events-none"
          />
        </section>

        {/* Gallery with reveal on scroll */}
        <div className="space-y-0">
          {" "}
          {/* remove gaps so images butt up; change to space-y-8 for gaps */}
          {images.map((src, index) => (
            <RevealOnScroll key={index} amount={0.4} y={28} duration={0.55}>
              <div className="relative w-full">
                <Image
                  src={src}
                  alt={`About image ${index + 1}`}
                  width={1920}
                  height={1080}
                  className="w-full h-auto object-cover will-change-transform"
                  loading={index === 0 ? "eager" : "lazy"}
                />
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </>
  );
}
