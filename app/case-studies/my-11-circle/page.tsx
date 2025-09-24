"use client";

import { BottomNav } from "components/bottom-nav";
import { Navigation } from "components/navbar";
import { useScroll, useSpring, motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const images = [
  "/images/project-3/1.webp",
  "/images/project-3/2.webp",
  "/images/project-3/3.mp4",
  "/images/project-3/4.webp",
  "/images/project-3/5.webp",
  "/images/project-3/6.webp",
  "/images/project-3/7.webp",
  "/images/project-3/8.webp",
  "/images/project-3/9.webp",
  "/images/project-3/10.webp",
  "/images/project-3/11.webp",
];

export default function RummyCircleSupportTransparency() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <div className="bg-white">
      <Navigation fullWidth />
      <motion.div
        className="fixed left-0 right-0 top-0 h-1 bg-gradient-to-r from-[#A97CF8] via-[#F38CB8] to-[#FDCC92] origin-left z-[9999]"
        style={{ scaleX }}
      />
      {images.map((src, index) => (
        // <RevealOnScroll key={src} amount={0.4} y={28} duration={0.55}>
        <div className="relative w-full" key={src}>
          {src.endsWith(".mp4") ? (
            <video
              src={src}
              // controls
              playsInline
              autoPlay
              muted
              loop
              className="w-full h-auto object-cover"
            />
          ) : (
            <Image
              src={src}
              alt={`Project image ${index + 1}`}
              width={1920}
              height={1080}
              className="w-full h-auto object-cover will-change-transform"
              loading="lazy"
            />
          )}
        </div>
      ))}

      <section className="relative">
        <BottomNav />
      </section>
    </div>
  );
}
