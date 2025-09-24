"use client";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/Dialog";
import { cn } from "lib/utils";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const videos = [
  {
    id: "jEh-cH3_QjU",
    title: "day in my life at home 🏠...",
    thumbnail: "https://img.youtube.com/vi/jEh-cH3_QjU/maxresdefault.jpg",
  },
  {
    id: "Ulkxn8x-DE0",
    title: "a day in my life home vlog 🌸✨...",
    thumbnail: "https://img.youtube.com/vi/Ulkxn8x-DE0/maxresdefault.jpg",
  },
  {
    id: "wWJ1nbhxwpA",
    title: "a productive day in my life 🌱",
    thumbnail: "https://img.youtube.com/vi/wWJ1nbhxwpA/maxresdefault.jpg",
  },
  {
    id: "dxx-XgCkduE",
    title: "weekend vlog🌷͙✧˚.🎀",
    thumbnail: "https://img.youtube.com/vi/dxx-XgCkduE/maxresdefault.jpg",
  },
  {
    id: "M9QtaGl0q2w",
    title: "a day at home🌿",
    thumbnail: "https://img.youtube.com/vi/M9QtaGl0q2w/maxresdefault.jpg",
  },
  {
    id: "yLBG6p3EfII",
    title: "flying home ✈️✨",
    thumbnail: "https://img.youtube.com/vi/yLBG6p3EfII/maxresdefault.jpg",
  },
];

export function Youtube() {
  return (
    <div className="">
      <div className="flex justify-end py-4">
        <div className="flex items-center gap-2 p-4 text-sm text-gray-600 bg-white/60 shadow-[0px_2px_4px_rgba(0,0,0,0.16)] overflow-hidden rounded-[10px]">
          <div className="flex items-center gap-1">
            <Image
              src="/icons/youtube.webp"
              alt="youtube"
              width={20}
              height={20}
            />
            <Link
              href="https://www.youtube.com/@mylittlebubbble"
              className="text-blue-600 hover:underline cursor-pointer font-semibold"
            >
              Visit YouTube
            </Link>
          </div>
          <ArrowRight className="h-5 w-5" />
        </div>
      </div>

      {/* Video Grid */}
      <div
        className="
      no-scrollbar
      flex flex-nowrap overflow-x-auto
      gap-4 w-full mx-auto
      scroll-smooth overscroll-x-contain
      snap-x snap-mandatory
      py-1
    "
      >
        {videos.map((video, index) => (
          <HeroVideoDialog
            key={`${video.id}-${index}`}
            videoId={video.id}
            thumbnailSrc={video.thumbnail}
            title={video.title}
            animationStyle="from-center"
            className="shrink-0 w-[280px] sm:w-[360px] snap-start"
          />
        ))}
      </div>
    </div>
  );
}

import { useState } from "react";

interface HeroVideoDialogProps {
  videoId: string;
  thumbnailSrc: string;
  title: string;
  animationStyle?: "from-center" | "from-bottom" | "from-top" | "fade";
  className?: string;
}

export function HeroVideoDialog({
  videoId,
  thumbnailSrc,
  title,
  animationStyle = "from-center",
  className,
}: HeroVideoDialogProps) {
  const [isOpen, setIsOpen] = useState(false);

  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <div
          className={cn(
            "group relative cursor-pointer overflow-hidden transition-all duration-300",
            className
          )}
        >
          {/* Video Thumbnail */}
          <div className="relative aspect-video bg-gray-100 rounded-lg overflow-hidden">
            <img
              src={thumbnailSrc || "/placeholder.svg?height=180&width=320"}
              alt={title}
              className="h-full w-full object-cover transition-transform duration-300 rounded-lg overflow-hidden"
              onError={(e) => {
                e.currentTarget.src =
                  "/placeholder.svg?height=180&width=320&text=Video+Thumbnail";
              }}
            />

            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="transition-transform duration-300 group-hover:scale-110">
                <Image
                  src="/icons/youtube.webp"
                  alt="youtube"
                  width={64}
                  height={64}
                />
              </div>
            </div>
          </div>

          {/* Video Title - Below thumbnail like YouTube */}
          <div className="p-3">
            <h3 className="text-sm font-normal text-gray-900 line-clamp-2 leading-5">
              {title}
            </h3>
          </div>
        </div>
      </DialogTrigger>

      <DialogContent className="max-w-4xl p-0 bg-black" showCloseButton={true}>
        {/* <DialogClose>X</DialogClose> */}
        <div className="aspect-video w-full">
          <iframe
            src={embedUrl}
            title={title}
            className="h-full w-full rounded-lg"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
