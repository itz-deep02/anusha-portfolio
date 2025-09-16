"use client";

import Navigation from "@/components/navbar";
import { motion, useScroll, useSpring } from "motion/react";
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

export default function AboutPage() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <>
      <motion.div
        className="fixed left-0 right-0 top-0 h-1 bg-green-400 origin-left z-[9999]"
        style={{ scaleX }}
      />
      <div className="w-full bg-white">
        <Navigation />
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
        {images.map((src, index) => (
          <div key={index} className="relative w-full h-auto">
            <Image
              src={src}
              alt={`About image ${index + 1}`}
              width={1920}
              height={1080}
              className="w-full object-cover"
            />
          </div>
        ))}
      </div>
    </>
  );
}
