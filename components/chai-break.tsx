import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function StorySection() {
  return (
    <div className="p-8 py-32 flex items-center justify-center">
      <div className="max-w-6xl w-full relative">
        <div className="flex items-center gap-12">
          {/* Photo Section */}
          <div className="relative">
            {/* Photo card */}
            <div className="bg-white rounded-3xl p-6 shadow-sm">
              <div className="w-80 h-96 rounded-2xl overflow-hidden">
                <Image
                  src="/images/anusha-photo.png"
                  alt="Anusha"
                  width={320}
                  height={384}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="flex-1 max-w-2xl">
            {/* Heading with icons */}
            <div className="flex items-center gap-3 mb-8 relative w-fit">
              <Image
                src="/icons/cupcake-icon.svg"
                alt="Cupcake"
                width={32}
                height={32}
                className="w-8 h-8 absolute -left-5 -top-3"
              />
              <h1 className="text-4xl font-bold text-indigo-900">
                Chai break for my <span className="text-purple-400">Story</span>
              </h1>
              <Image
                src="/icons/flower-icon.svg"
                alt="Flower"
                width={32}
                height={32}
                className="w-8 h-8 absolute -right-5 -bottom-3"
              />
            </div>

            {/* Content paragraphs */}
            <div className="space-y-6 text-gray-700 text-lg leading-relaxed mb-8">
              <p>
                I&apos;m Anusha, a product designer who loves turning ideas into
                experiences that feel simple, intuitive, and a little bit fun.
                Over the last couple of years, I&apos;ve worked on projects in
                Gaming and enterprise, where I&apos;ve learned that good design
                isn&apos;t just about pixels on a screen, it&apos;s about
                solving real problems and building trust with people ✨
              </p>

              <p>
                I like to think of design as a conversation. It should be clear,
                thoughtful, and leave you with something memorable. I always aim
                to strike that balance between what the business needs and what
                feels natural for the user ❤️
              </p>
            </div>

            {/* CTA Button */}
            <Link
              href="/about"
              className="bg-violet-600 hover:bg-violet-700 text-slate-50 px-8 py-4 rounded-xl font-medium text-lg transition-colors flex items-center gap-2 w-fit"
            >
              Read my full story
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
