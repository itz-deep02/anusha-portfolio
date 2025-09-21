import { ArrowRight, Instagram, InstagramIcon } from "lucide-react";
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

// const rightMarqueePosts = [
//   {
//     title: "WHICH PAPA BOUGHT",
//     views: "12 million views",
//     illustration: "/mother-and-child-cartoon-illustration.jpg",
//   },
//   {
//     title: "8 THINGS MOTHER'S HATE",
//     views: "15 million views",
//     illustration: "/siblings-hugging-cartoon-illustration.jpg",
//   },
//   {
//     title: "HAPPY JANMASHTAMI",
//     views: "12 million views",
//     illustration: "/cartoon-characters-shopping-illustration.jpg",
//   },
// ];

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
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-2 rounded-lg">
                <Instagram className="w-5 h-5 text-white" />
              </div>
            </div>

            <p className="text-lg text-slate-700 leading-relaxed text-center">
              When I&apos;m not designing products, I bring everyday moments to
              life through doodles and reels on @mylittlebubbble followed by
              80k+ people who share the same love for humour and creativity.
            </p>
          </div>

          {/* Stats Card */}
          {/* <Card className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg"> */}
          <div className="flex justify-between">
            <div className="w-40" />
            <div className="flex gap-6">
              <div className="flex items-center gap-1 text-slate-700">
                <span className="text-xl">✏️</span>
                <span className="font-medium text-sm">200+ Reels created</span>
              </div>
              <div className="flex items-center gap-1 text-slate-700">
                <span className="text-xl">👥</span>
                <span className="font-medium text-sm">80k+ followers</span>
              </div>
              <div className="flex items-center gap-1 text-slate-700">
                <span className="text-xl">👀</span>
                <span className="font-medium text-sm">100M+ total views</span>
              </div>
            </div>
            <Link
              href="https://www.instagram.com/mylittlebubbble/"
              className="text-violet-400 px-6 py-4 font-semibold bg-[rgba(231,236,235,0.08)] shadow-[0px_2px_4px_rgba(0,0,0,0.16)] overflow-hidden rounded-[10px] border-0 text-sm flex gap-2 hover:underline"
            >
              <InstagramIcon className="h-5 w-5 " /> Visit Instagram{" "}
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>

          {/* </Card> */}
        </div>

        <div className="relative overflow-hidden">
          <div className="flex gap-4 h-full">
            {/* Left Marquee - Moving Up */}
            <div className="flex-1">
              <Marquee className="[--duration:25s]" pauseOnHover>
                {leftMarqueePosts.map((post, index) => (
                  <Image
                    key={index}
                    src={post.illustration}
                    alt="Instagram"
                    className="object-contain h-96 w-60"
                    width={240}
                    height={384}
                  />
                ))}
              </Marquee>
            </div>

            {/* Right Marquee - Moving Down (reverse direction) */}
            {/* <div className="flex-1">
              <Marquee
                vertical
                reverse
                className="h-full [--duration:25s]"
                pauseOnHover
              >
                {rightMarqueePosts.map((post, index) => (
                  <div key={index} className="mb-6 ">
                    <Card className="w-full max-w-[280px] bg-white/95 backdrop-blur-sm border-0 shadow-lg rounded-3xl overflow-hidden hover:bg-gray-950/[.05]">
                      <div className="p-4 space-y-3">
                        {post.title && (
                          <h3 className="font-bold text-slate-900 text-xs uppercase tracking-wide text-center">
                            {post.title}
                          </h3>
                        )}

                        <div className="flex items-center justify-center py-4">
                          <Image
                            src={post.illustration || "/placeholder.svg"}
                            alt="Instagram post illustration"
                            className="w-24 h-24 object-contain"
                            width={96}
                            height={96}
                          />
                        </div>

                        <div className="text-center">
                          <div className="text-xs text-slate-500 mb-1">
                            @mylittlebubbble
                          </div>
                          <div className="w-2 h-2 bg-slate-400 rounded-full mx-auto"></div>
                        </div>
                      </div>
                    </Card>

                    <div className="flex items-center gap-2 text-orange-500 font-semibold mt-3 justify-center">
                      <Flame className="w-4 h-4" />
                      <span className="text-sm">{post.views}</span>
                    </div>
                  </div>
                ))}
              </Marquee>
            </div> */}
            {/* <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-background"></div>
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background"></div> */}
          </div>
        </div>

        <div className="min-w-0 w-full">
          <Youtube />
        </div>
      </div>
    </div>
  );
}
