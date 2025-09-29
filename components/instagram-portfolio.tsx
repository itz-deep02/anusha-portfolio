import { ArrowRight } from "lucide-react";
import { Marquee } from "./ui/magicui/Marique";
import Image from "next/image";
import Link from "next/link";

const leftMarqueePosts = [
  {
    title: "8 THINGS MOTHER'S HATE",
    views: "35 million views",
    illustration: "/images/reel-1.png",
    video: "/videos/reel-1.mp4",
  },
  {
    title: "WHEN YOU HAVE A SIBLING",
    views: "12 million views",
    illustration: "/images/reel-2.png",
    video: "/videos/reel-2.mp4",
  },
  {
    title: "WHICH PAPA BOUGHT",
    views: "12 million views",
    illustration: "/images/reel-3.png",
    video: "/videos/reel-3.mp4",
  },
  {
    title: "8 THINGS MOTHER'S HATE",
    views: "35 million views",
    illustration: "/images/reel-4.png",
    video: "/videos/reel-4.mp4",
  },
  {
    title: "WHEN YOU HAVE A SIBLING",
    views: "12 million views",
    illustration: "/images/reel-5.png",
    video: "/videos/reel-5.mp4",
  },
  {
    title: "WHICH PAPA BOUGHT",
    views: "12 million views",
    illustration: "/images/reel-6.png",
    video: "/videos/reel-6.mp4",
  },
];

export function InstagramPortfolio() {
  return (
    <div className="relative bg-no-repeat bg-top py-8" id="instagram">
      <div className="grid gap-8 place-items-center">
        {/* Left Side - Portfolio Content */}
        <div className="space-y-8 flex flex-col w-full">
          <div className="space-y-6">
            <div className=" flex items-center gap-3 justify-center">
              <div className="relative text-[56px] font-[fraunces] font-bold">
                Beyond the Portfolio
                <Image
                  src="/icons/star.svg"
                  alt="Flower"
                  width={40}
                  height={40}
                  className="w-8 h-8 absolute -left-[10px] top-0"
                />
              </div>
            </div>

            <p className="text-2xl text-slate-700 leading-relaxed text-center">
              When I&apos;m not designing products, I bring everyday moments to
              life through doodles and reels on @mylittlebubbble followed by
              80k+ people who share the same love for humour and creativity.
            </p>
          </div>

          {/* Stats Card */}
          <div className="flex justify-between">
            <div className="w-40" />
            <div className="flex gap-6">
              <div className="flex items-center gap-1 text-slate-700">
                <span className="text-xl">✏️</span>
                <span className="font-medium text-[22px]">
                  200+ Reels created
                </span>
              </div>
              <div className="flex items-center gap-1 text-slate-700">
                <span className="text-xl">👥</span>
                <span className="font-medium text-[22px]">80k+ followers</span>
              </div>
              <div className="flex items-center gap-1 text-slate-700">
                <span className="text-xl">👀</span>
                <span className="font-medium text-[22px]">
                  100M+ total views
                </span>
              </div>
            </div>
            <Link
              href="https://www.instagram.com/mylittlebubbble/"
              className="text-violet-400 px-6 py-4 font-semibold bg-white/60 shadow-[0px_2px_4px_rgba(0,0,0,0.16)] overflow-hidden rounded-[10px] border-0 text-sm flex gap-2 hover:underline"
            >
              <Image
                src="/icons/instagram-png-logo.png"
                alt="insta"
                height={20}
                width={20}
                className="h-5 w-5"
              />
              Visit Instagram <ArrowRight color="#9583F9" className="h-5 w-5" />
            </Link>
          </div>
        </div>

        <div className="relative overflow-hidden w-full">
          <div className="flex gap-4 h-full">
            <div className="flex-1 min-w-0">
              <Marquee className="[--duration:25s]" pauseOnHover componentGap>
                {leftMarqueePosts.map((post, index) => (
                  // <Image
                  //   key={index}
                  //   src={post.illustration}
                  //   alt="Instagram"
                  //   className="object-contain"
                  //   width={340}
                  //   height={604}
                  // />
                  <ReelTile key={index} item={post} />
                ))}
              </Marquee>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import { useRef, useState, useEffect } from "react";

type Reel = {
  title: string;
  views: string;
  illustration: string;
  video?: string;
};

export function ReelTile({ item }: { item: Reel }) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [hovered, setHovered] = useState(false);
  const [inView, setInView] = useState(false);
  const [audioUnlocked, setAudioUnlocked] = useState(true); // after a click/tap

  // Observe visibility to avoid preloading off-screen
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => setInView(e.isIntersecting)),
      { rootMargin: "200px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Hover behavior
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    // Ensure we have a src only when on screen
    if (inView && item.video && !v.src) v.src = item.video;

    if (hovered && inView && item.video) {
      // If sound not unlocked yet, we must start muted (policy).
      v.muted = !audioUnlocked;
      if (v.readyState === 0) v.load();
      v.play().catch(() => {});
    } else {
      v.pause();
      v.currentTime = 0;
    }
  }, [hovered, inView, audioUnlocked, item.video]);

  // One-time unlock: click/tap enables sound for future hovers
  const enableSound = () => {
    const v = videoRef.current;
    if (!v) return;
    setAudioUnlocked(true);
    v.muted = false;
    v.volume = 1;
    // play with sound due to this user gesture
    v.play().catch(() => {});
  };

  // Touch: first tap unlocks + plays; subsequent taps toggle
  const onTap = () => {
    const v = videoRef.current;
    if (!v) return;
    if (!audioUnlocked) {
      enableSound();
      return;
    }
    if (v.paused) {
      v.muted = false;
      v.play().catch(() => {});
    } else {
      v.pause();
      v.currentTime = 0;
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative w-[340px] h-[604px] rounded-3xl overflow-hidden bg-black/5"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onTap}
    >
      {/* Poster */}
      <Image
        src={item.illustration}
        alt={item.title}
        fill
        sizes="340px"
        className={`object-contain rounded-3xl transition-opacity duration-200 ${
          hovered && item.video ? "opacity-0" : "opacity-100"
        }`}
        priority={false}
      />

      {/* Video */}
      {item.video && (
        <video
          ref={videoRef}
          className={`absolute inset-0 rounded-3xl w-full h-full object-contain transition-opacity duration-200 ${
            hovered ? "opacity-100" : "opacity-0"
          }`}
          // src is set lazily in the effect once inView (saves bandwidth)
          loop
          playsInline
          preload="metadata"
          poster={item.illustration}
          disablePictureInPicture
        />
      )}

      {/* “Enable sound” hint (shows when hovered and not yet unlocked) */}
      {!audioUnlocked && hovered && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-black/70 text-white text-xs pointer-events-none">
          Click to enable sound
        </div>
      )}
    </div>
  );
}
