import { ArrowRight, Instagram } from "lucide-react";
import { Marquee } from "./ui/magicui/Marique";
import Image from "next/image";
import { Youtube } from "./youtube";
import Link from "next/link";

const leftMarqueePosts = [
  {
    title: "8 THINGS MOTHER'S HATE",
    views: "35 million views",
    illustration: "/images/reel-1.png",
  },
  {
    title: "WHEN YOU HAVE A SIBLING",
    views: "12 million views",
    illustration: "/images/reel-2.png",
  },
  {
    title: "WHICH PAPA BOUGHT",
    views: "12 million views",
    illustration: "/images/reel-3.png",
  },
  {
    title: "8 THINGS MOTHER'S HATE",
    views: "35 million views",
    illustration: "/images/reel-4.png",
  },
  {
    title: "WHEN YOU HAVE A SIBLING",
    views: "12 million views",
    illustration: "/images/reel-5.png",
  },
  {
    title: "WHICH PAPA BOUGHT",
    views: "12 million views",
    illustration: "/images/reel-6.png",
  },
];

export function InstagramPortfolio() {
  return (
    <div
      className="relative bg-no-repeat bg-top py-4"
      style={{
        backgroundImage: "url('/images/beyond-portfolio.png')",
        backgroundSize: "100% auto",
      }}
      id="instagram"
    >
      <div className="container mx-auto px-6 grid gap-8 place-items-center min-h-[calc(100svh)] py-8">
        {/* Left Side - Portfolio Content */}
        <div className="space-y-8 flex flex-col w-full">
          <div className="space-y-6">
            <div className="flex items-center gap-3 justify-center">
              <h1 className="text-4xl font-bold text-slate-900">
                Beyond the Portfolio
              </h1>
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
                className="h-5 w-5 "
              />
              Visit Instagram <ArrowRight className="h-5 w-5" />
            </Link>
          </div>

          {/* </Card> */}
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
                ))}
              </Marquee>
            </div>
          </div>
        </div>

        <div className="min-w-0 w-full">
          <Youtube />
        </div>
      </div>
    </div>
  );
}
