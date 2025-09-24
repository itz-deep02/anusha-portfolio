import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
const projects = [
  {
    id: "support-load",
    title: "Reducing Support Load & Improving Transparency",
    description:
      "How we redesigned the Help & Support section by allowing users to easily view and track their support tickets within the app.",
    video: {
      src: "/videos/project-1.mp4",
    },
    stats: [
      { value: "7%", label: "ARPU Uplift" },
      { value: "40%", label: "Improvement in CSS" },
    ],
    cta: {
      label: "View case study",
      href: "/case-studies/rummycircle-support-transparency",
      variant: "dark",
    },
    tags: ["Real Money Gaming App", "B2C", "UX Case Study"],
    theme: "purple",
    layout: "text-left",
  },
  {
    id: "players-trust",
    title: "Building Players Trust Through Redesigning Profile Experience",
    description:
      "Focused on reducing fraudulent behavior and complaints while boosting player authenticity and trust-driven engagement.",
    video: {
      src: "/videos/project-2.mp4",
    },
    stats: [
      { value: "9%", label: "ARPU Uplift" },
      { value: "20%", label: "Less Fraud Complaints" },
    ],
    cta: { label: "Coming Soon", href: "#", variant: "medium" },
    tags: ["Player First Design", "B2C App", "App Case Study"],
    theme: "beige",
    layout: "image-left",
  },
  {
    id: "kyc-verification",
    title: "Improving Verification For 120+ Million Users",
    description:
      "Designing a Seamless KYC Journey for My11Circle: Reducing User Frustration, Increasing Completion Rates.",
    image: {
      src: "/images/project-3.png",
      alt: "My11Circle KYC verification interface",
    },
    stats: [
      { value: "40%", label: "Faster KYC" },
      { value: "12%", label: "Increase in Paid Games" },
    ],
    cta: {
      label: "View case study",
      href: "/case-studies/my-11-circle",
      variant: "dark",
    },
    tags: ["Real Money Gaming App", "B2C", "KYC Case Study"],
    theme: "purple",
    layout: "text-left",
  },
  {
    id: "turbo-rummy",
    title: "Turbo Rummy: Enhancing Player Experience",
    description:
      "A feature introduced in Rummy Circle, adds a dynamic twist to the classic Deals Rummy by integrating whitegoods as prizes",
    image: {
      src: "/images/project-4.png",
      alt: "Turbo Rummy game interface",
    },
    stats: [
      { value: "8%", label: "Revenue Lift" },
      { value: "12%", label: "Increase in E-Fee" },
    ],
    cta: { label: "Coming Soon", href: "#", variant: "medium" },
    tags: ["New Feature", "B2C App", "Game Mechanics UX"],
    theme: "beige",
    layout: "image-left",
  },
];

type ThemeKey = "purple" | "beige";
const themeStyles: Record<
  ThemeKey,
  {
    bg: string;
    textMain: string;
    textSub: string;
    pillWrap: string;
    pill: string;
    cta: string;
    ctaHover: string;
  }
> = {
  purple: {
    bg: "url('/images/project-purple-gradient.png')",
    textMain: "text-white",
    textSub: "opacity-90",
    pillWrap: "justify-end text-white",
    pill: "bg-white/5 text-orange-50 shadow-[0px_1.340000033378601px_4.336996555328369px_0px_rgba(0,0,0,0.25)]",
    cta: "bg-indigo-950 text-white border-0",
    ctaHover: "hover:bg-slate-700",
  },
  beige: {
    bg: "url('/images/project-beige-gradient.png')",
    textMain: "text-slate-800",
    textSub: "",
    pillWrap: "text-slate-700",
    pill: "bg-white/5 shadow-[0px_1.340000033378601px_4.336996555328369px_0px_rgba(0,0,0,0.25)]",
    cta: "bg-[#0C0C49] text-white border-0",
    ctaHover: "hover:bg-slate-500",
  },
};

function ProjectCard({
  title,
  description,
  image,
  video,
  stats,
  cta,
  tags,
  theme,
  layout,
}: (typeof projects)[number]) {
  const t = themeStyles[theme as ThemeKey];
  const isImageLeft = layout === "image-left";

  return (
    <div
      className="rounded-3xl overflow-hidden"
      style={{
        backgroundImage: t.bg,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className={`px-16 py-8 flex ${
          theme === "purple" ? "flex-row-reverse" : "flex-row"
        } items-center gap-10 min-h-[400px]`}
      >
        {/* image column */}
        <div
          className={`flex-1 flex flex-col gap-4 ${
            isImageLeft ? "lg:order-1 justify-start" : "justify-end"
          }`}
        >
          {video ? (
            <video
              src={video.src}
              autoPlay
              loop
              muted
              playsInline
              className="rounded-[43px] max-w-full"
            />
          ) : (
            <img
              src={image.src}
              alt={image.alt}
              className="rounded-3xl max-w-full"
            />
          )}

          <div className={`flex gap-4`}>
            {tags.map((tag) => (
              <span
                key={tag}
                className={`px-6 py-3 rounded-full text-sm font-semibold ${t.pill}`}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* text column */}
        <div
          className={`flex-1 ${t.textMain} ${isImageLeft ? "lg:order-2" : ""}`}
        >
          <div className="font-medium text-[40px] mb-4 text-balance leading-12">
            {title}
          </div>
          <p className={`text-base mb-10 leading-relaxed ${t.textSub}`}>
            {description}
          </p>

          <div className="flex gap-12 mb-10 bg-white/20 py-4 px-12 rounded-lg shadow-[0px_4.336996555328369px_4.336996555328369px_0px_rgba(0,0,0,0.25)] w-fit">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-3xl font-bold text-center">{s.value}</div>
                <div
                  className={`text-sm ${
                    theme === "purple" ? "opacity-80" : "opacity-70"
                  }`}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>

          {cta.label === "View case study" ? (
            <Link href={cta.href}>
              <div className="group relative bg-indigo-950 text-sm text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 ease-out w-fit">
                <span className="flex items-center gap-2">
                  View case study
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 ease-out group-hover:translate-x-2" />
                </span>
              </div>
            </Link>
          ) : (
            <div className="group relative bg-indigo-950/40 text-slate-50 px-6 py-3 rounded-lg font-medium text-base transition-all duration-300 ease-out w-fit">
              <span className="flex items-center gap-2">
                Coming Soon
                <ArrowRight className="w-5 h-5 transition-transform duration-300 ease-out" />
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export function FeaturedProjects() {
  return (
    <div className="bg-white py-16 px-4" id="work">
      <div className="max-w-[1218px] mx-auto">
        <h1 className="text-4xl font-bold text-center text-slate-900 mb-16">
          Featured Projects
        </h1>

        <div className="space-y-16">
          {projects.map((p) => (
            <ProjectCard key={p.id} {...p} />
          ))}
        </div>
      </div>
    </div>
  );
}
