import { RevealOnScroll } from "app/about/page";
import Navigation from "components/navbar";
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

export default function RummyCircleSupportTransparency() {
  return (
    <div>
      <Navigation />
      {images.map((src, index) => (
        <RevealOnScroll key={src} amount={0.4} y={28} duration={0.55}>
          <div className="relative w-full">
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
        </RevealOnScroll>
      ))}
    </div>
  );
}
