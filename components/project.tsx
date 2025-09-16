// app/(site)/projects-section.tsx
// app/(site)/projects-section.tsx
"use client";

const projects = [
  {
    title: "Improving Verification For 120+ Million Users",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the",
    href: "/case-studies/verification",
    variant: "dark" as const,
    imageSide: "right" as const,
    image: {
      src: "/images/projects/verification.jpg",
      alt: "Verification app promo",
    },
  },
  {
    title: "Turbo Rummy: Enhancing Player Experience",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the",
    href: "/case-studies/turbo-rummy",
    variant: "light" as const,
    imageSide: "left" as const,
    image: {
      src: "/images/projects/rummy-experience.jpg",
      alt: "Rummy app on phone",
    },
    stats: [{ text: "8% revenue boost" }, { text: "12% increase in EFee" }],
  },
  {
    title: "Enhancing The Help & Support Of Rummy Circle",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the",
    href: "/case-studies/help-and-support",
    variant: "dark" as const,
    imageSide: "right" as const,
    image: { src: "/images/projects/help-center.jpg", alt: "Need help screen" },
  },
];

export function ProjectsSection() {
  return (
    <section className="relative">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-white to-white/0 pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Space above the first card so the tilt/scale feels natural */}
        <div className="mt-10 md:mt-14 grid gap-8 md:gap-10">
          {projects.map((p, index) => (
            <ContainerScroll
              frame={false}
              heightClassName="h-auto"
              contentClassName="p-0"
              key={p.title}
              titleComponent={
                index === 0 && (
                  <h2 className="text-center text-[28px] md:text-[34px] font-bold tracking-tight text-[#0d0f3a]">
                    Projects
                  </h2>
                )
              }
            >
              <ProjectCard {...p} />
            </ContainerScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { ArrowRightIcon } from "lucide-react";
import { Card } from "./ui/Card";
import { Button } from "./ui/Button";
import { ContainerScroll } from "./ui/aceternity/ContainerScrollAnimation";

type Stat = { icon?: React.ReactNode; text: string };

type ProjectCardProps = {
  title: string;
  description: string;
  href: string;
  cta?: string;
  image: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    priority?: boolean;
  };
  /** light = sand/peach panel, dark = indigo panel */
  variant?: "light" | "dark";
  /** put image on the left or right on ≥md */
  imageSide?: "left" | "right";
  stats?: Stat[];
  className?: string;
};

export function ProjectCard({
  title,
  description,
  href,
  cta = "View case study",
  image,
  variant = "dark",
  imageSide = "right",
  stats = [],
  className,
}: ProjectCardProps) {
  const isDark = variant === "dark";

  return (
    <Card
      className={clsx(
        "rounded-[28px] md:rounded-[36px] p-6 md:p-10",
        "shadow-[0_10px_40px_-10px_rgba(0,0,0,0.35)]",
        isDark ? "bg-[#0d0f3a] text-white" : "bg-[#fff1e2] text-[#0d0f3a]",
        className
      )}
    >
      <div
        className={clsx(
          "flex flex-col gap-8 md:gap-12 items-stretch",
          imageSide === "left" ? "md:flex-row" : "md:flex-row-reverse"
        )}
      >
        {/* Image */}
        <div className="relative w-full md:w-[44%] overflow-hidden rounded-2xl">
          <div className="relative aspect-[16/10] md:aspect-[10/12]">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(min-width: 1024px) 44vw, 100vw"
              priority={image.priority}
              className="object-cover will-change-transform"
            />
          </div>
        </div>

        {/* Text column */}
        <div className="md:w-[56%] flex flex-col justify-center">
          <h3 className="text-2xl md:text-[32px] leading-tight font-semibold tracking-[-0.01em]">
            {title}
          </h3>

          <p
            className={clsx(
              "mt-4 text-base md:text-[17px] leading-relaxed",
              isDark ? "text-white/80" : "text-black/70"
            )}
          >
            {description}
          </p>

          {stats.length > 0 && (
            <ul className="mt-5 grid gap-2">
              {stats.map((s, i) => (
                <li
                  key={i}
                  className="inline-flex items-center gap-2 text-sm md:text-[15px]"
                >
                  {/* simple green dot by default */}
                  <span
                    className={clsx(
                      "inline-block h-2 w-2 rounded-full",
                      isDark ? "bg-emerald-400" : "bg-emerald-600"
                    )}
                  />
                  {s.icon}
                  <span className={isDark ? "text-white/90" : "text-black/80"}>
                    {s.text}
                  </span>
                </li>
              ))}
            </ul>
          )}

          <div className="mt-7">
            <Button
              asChild
              //   size="3"
              //   radius="full"
              className={clsx(
                isDark
                  ? "bg-violet-500 hover:bg-violet-600"
                  : "bg-violet-600 hover:bg-violet-700"
              )}
            >
              <Link
                href={href}
                className="text-white inline-flex items-center gap-2 focus:outline-none focus-visible:ring-4 focus-visible:ring-violet-400/40"
              >
                {cta}
                <ArrowRightIcon />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
}
