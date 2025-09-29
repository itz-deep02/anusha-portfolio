"use client";

import { useState } from "react";
import Image from "next/image";

const characterImages = [
  "/images/character-1.webp", // peaceful with wand
  "/images/character-2.webp", // drinking coffee
  "/images/character-3.webp", // working at desk
  "/images/character-4.webp", // relaxing in bed
  "/images/character-5.webp", // thinking about food
];

export function CharacterShowcase() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [cursorPos, setCursorPos] = useState<{ x: number; y: number } | null>(
    null
  );

  const handleClick = () => {
    setCurrentImageIndex((prev) => (prev + 1) % characterImages.length);
  };

  return (
    <div className="flex flex-col items-center justify-center bg-[#fff] py-20">
      <div className="flex flex-col items-center space-y-6">
        <div
          className="relative cursor-pointer transition-transform duration-200 hover:scale-105"
          onClick={handleClick}
          onMouseMove={(e) => {
            const rect = (
              e.currentTarget as HTMLElement
            ).getBoundingClientRect();
            setCursorPos({
              x: e.clientX - rect.left,
              y: e.clientY - rect.top,
            });
          }}
          onMouseLeave={() => setCursorPos(null)}
        >
          <div className="w-64 h-64 relative">
            <Image
              src={characterImages[currentImageIndex] || "/placeholder.svg"}
              alt="Character illustration"
              fill
              className="object-contain"
              priority
            />

            {/* Floating "Click me" text */}
            {cursorPos && (
              <span
                className="absolute rounded-2xl bg-white/40 p-2 border text-indigo-950/70 text-sm font-semibold pointer-events-none select-none"
                style={{
                  left: cursorPos.x + 10, // offset so text doesn’t overlap cursor
                  top: cursorPos.y + 10,
                }}
              >
                Click me
              </span>
            )}
          </div>
        </div>

        <p className="font-semibold text-indigo-950/60 text-3xl">
          Click to see what I&apos;m up to
        </p>
      </div>
    </div>
  );
}
