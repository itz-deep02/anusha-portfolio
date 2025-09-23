"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import Image from "next/image";
import { Navigation } from "components/navbar";
import { RevealOnScroll } from "components/ui/RevealOnScroll";

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
      {/* top progress bar */}
      <motion.div
        className="fixed left-0 right-0 top-0 h-1 bg-gradient-to-r from-[#A97CF8] via-[#F38CB8] to-[#FDCC92] origin-left z-[9999]"
        style={{ scaleX }}
      />

      <div className="w-full bg-white">
        <Navigation />

        {/* Hero */}
        <section className="relative h-[80svh] w-full overflow-hidden">
          <Image
            src="/images/about-bg.png"
            alt="bg"
            fill
            priority
            sizes="80vw"
            className="object-cover pointer-events-none"
          />

          {/* <video
            src="/videos/about.mp4" // 👉 put your file in /public/videos
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 m-auto h-[60%] w-[60%] object-contain z-10"
          /> */}
          <Image
            src="/images/giffffff.mov-ezgif.com-optimize.gif"
            alt="Animated GIF"
            width={550} // adjust to your design
            height={350} // adjust to your design
            className="absolute inset-0 m-auto object-contain z-10"
            unoptimized // ⚡ important for GIFs, so Next.js doesn’t try to optimize
          />
        </section>

        {/* Gallery with reveal on scroll */}
        <div className="space-y-0">
          {/* First image: show immediately */}
          <div className="relative w-full">
            <Image
              src={images[0]}
              alt="About image 1"
              width={1920}
              height={1080}
              className="w-full h-auto object-cover"
              loading="eager"
              priority
            />
          </div>

          {/* Remaining images: reveal on scroll */}
          {images.slice(1).map((src, index) => (
            <RevealOnScroll key={src} amount={0.4} y={28} duration={0.55}>
              <div className="relative w-full">
                <Image
                  src={src}
                  alt={`About image ${index + 2}`}
                  width={1920}
                  height={1080}
                  className="w-full h-auto object-cover will-change-transform"
                  loading="lazy"
                />
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </>
  );
}
