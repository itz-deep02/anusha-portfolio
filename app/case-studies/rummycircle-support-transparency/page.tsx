"use client";

import { BottomNav } from "components/bottom-nav";
import { Navigation } from "components/navbar";
import CountUp from "components/ui/reactbits/CountUp";
// import { RevealOnScroll } from "components/ui/RevealOnScroll";
import { useScroll, useSpring, motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const images = [
  "/images/project-1/project-1.png",
  "/images/project-1/project-2.png",
  "/images/project-1/project-3.mp4", // video
  "/images/project-1/project-4.png",
  "/images/project-1/project-5.png",
  "/images/project-1/project-6.png",
  "/images/project-1/project-7.png",
  "/images/project-1/project-8.png",
  "/images/project-1/project-9.png",
  "/images/project-1/project-10.png",
  "/images/project-1/project-11.png",
  "/images/project-1/project-12.png",
  "/images/project-1/project-13.png",
  "/images/project-1/project-14.png",
  "/images/project-1/project-15.png",
  "/images/project-1/project-16.png",
];

const metrics = [
  {
    value: 30,
    description: "drop in duplicate tickets raised",
  },
  {
    value: 70,
    description: "faster resolution",
  },
  {
    value: 40,
    description: "improvement in CSS",
  },
  {
    value: 7,
    description: "uplift in ARPU",
  },
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
        // </RevealOnScroll>
      ))}
      <div className="flex items-center flex-col justify-between py-16 gap-24 mx-60">
        <div className="self-start text-left">
          <h2 className="text-6xl font-bold text-neutral-900 mb-2">Impact</h2>
          <div className="w-44 h-1 bg-orange-400 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center lg:text-left">
              <div className="text-5xl text-center lg:text-6xl font-bold text-red-950 mb-3">
                <CountUp
                  from={0}
                  to={metric.value}
                  separator=","
                  direction="up"
                  duration={2}
                  className="inline"
                  startWhen
                />
                <span>%</span>
              </div>
              <div className="text-lg font-medium text-center text-muted-foreground leading-relaxed mx-auto lg:mx-0">
                {metric.description}
              </div>
            </div>
          ))}
        </div>
      </div>
      <section className="relative">
        <BottomNav />
      </section>
    </div>
  );
}
