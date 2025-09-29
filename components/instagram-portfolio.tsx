import { ArrowRight } from "lucide-react";
import { Marquee } from "./ui/magicui/Marique";
import Image from "next/image";
import Link from "next/link";

const leftMarqueePosts = [
  {
    title: "8 THINGS MOTHER'S HATE",
    views: "35 million views",
    illustration: "/images/reel-1.png",
    video: "/videos/greeting.mp4",
  },
  {
    title: "WHEN YOU HAVE A SIBLING",
    views: "12 million views",
    illustration: "/images/reel-2.png",
    video: "/videos/greeting.mp4",
  },
  {
    title: "WHICH PAPA BOUGHT",
    views: "12 million views",
    illustration: "/images/reel-3.png",
    video: "/videos/greeting.mp4",
  },
  {
    title: "8 THINGS MOTHER'S HATE",
    views: "35 million views",
    illustration: "/images/reel-4.png",
    video: "/videos/greeting.mp4",
  },
  {
    title: "WHEN YOU HAVE A SIBLING",
    views: "12 million views",
    illustration: "/images/reel-5.png",
    video: "/videos/greeting.mp4",
  },
  {
    title: "WHICH PAPA BOUGHT",
    views: "12 million views",
    illustration: "/images/reel-6.png",
    video: "/videos/greeting.mp4",
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
              <div className="relative text-6xl font-[fraunces] font-bold">
                Beyond the Portfolio
                <Image
                  src="/icons/star.svg"
                  alt="Flower"
                  width={40}
                  height={40}
                  className="w-8 h-8 absolute -left-[10px] -top-[10px]"
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

        <div className="relative overflow-hidden">
          <div className="flex gap-4 h-full">
            <div className="flex-1">
              <Marquee className="[--duration:25s]" pauseOnHover componentGap>
                {leftMarqueePosts.map((post, index) => (
                  <Image
                    key={index}
                    src={post.illustration}
                    alt="Instagram"
                    className="object-contain"
                    width={340}
                    height={604}
                  />
                  // <ReelTile key={index} item={post} />
                ))}
              </Marquee>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// import { useRef, useState, useEffect } from "react";

// type Reel = {
//   title: string;
//   views: string;
//   illustration: string; // poster
//   video?: string; // optional
// };

// function ReelTile({ item }: { item: Reel }) {
//   const videoRef = useRef<HTMLVideoElement | null>(null);
//   const [hovered, setHovered] = useState(false);
//   const [inView, setInView] = useState(false);

//   // Only “activate” the video when tile is on screen
//   const containerRef = useRef<HTMLDivElement | null>(null);
//   useEffect(() => {
//     const el = containerRef.current;
//     if (!el) return;
//     const io = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((e) => setInView(e.isIntersecting));
//       },
//       { rootMargin: "200px" } // pre-activate slightly before visible
//     );
//     io.observe(el);
//     return () => io.disconnect();
//   }, []);

//   useEffect(() => {
//     const v = videoRef.current;
//     if (!v) return;
//     if (hovered && inView) {
//       v.play().catch(() => {});
//     } else {
//       v.pause();
//       v.currentTime = 0; // rewind on leave
//     }
//   }, [hovered, inView]);

//   // For touch devices: toggle play/pause on tap
//   const onTap = () => {
//     const v = videoRef.current;
//     if (!v) return;
//     if (v.paused) {
//       setHovered(true);
//       v.play().catch(() => {});
//     } else {
//       setHovered(false);
//       v.pause();
//       v.currentTime = 0;
//     }
//   };

//   return (
//     <div
//       ref={containerRef}
//       className="relative w-[340px] h-[604px] rounded-xl overflow-hidden bg-black/5"
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//       onClick={onTap}
//     >
//       {/* Poster image (always rendered) */}
//       <Image
//         src={item.illustration}
//         alt={item.title}
//         fill
//         sizes="340px"
//         className={`object-contain transition-opacity duration-200 ${
//           hovered && item.video ? "opacity-0" : "opacity-100"
//         }`}
//         priority={false}
//       />

//       {/* Video (only if provided) */}
//       {item.video && (
//         <video
//           ref={videoRef}
//           // Don’t set src until inView to avoid preloading off-screen videos:
//           src={inView ? item.video : undefined}
//           className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-200 ${
//             hovered ? "opacity-100" : "opacity-0"
//           }`}
//           muted
//           loop
//           playsInline
//           preload="none" // keep bandwidth light
//           poster={item.illustration}
//           disablePictureInPicture
//         />
//       )}
//     </div>
//   );
// }
