// import { Button } from "@/components/ui/Button";
// import { ArrowRight } from "lucide-react";

// export function FeaturedProjects() {
//   return (
//     <div className="min-h-screen bg-white py-16 px-4">
//       <div className="max-w-4xl mx-auto">
//         <h1 className="text-4xl font-bold text-center text-slate-900 mb-16">
//           Featured Projects
//         </h1>

//         <div className="space-y-8">
//           {/* Project 1 - Support Load */}
//           <div
//             className="rounded-3xl overflow-hidden"
//             style={{
//               backgroundImage: "url('/images/project-purple-gradient.png')",
//               backgroundSize: "cover",
//               backgroundPosition: "center",
//             }}
//           >
//             <div className="p-8 flex flex-col lg:flex-row items-center gap-8 min-h-[400px]">
//               <div className="flex-1 text-white">
//                 <h2 className="text-3xl font-bold mb-4 text-balance">
//                   Reducing Support Load & Improving Transparency
//                 </h2>
//                 <p className="text-lg mb-8 opacity-90 leading-relaxed">
//                   How we redesigned the Help & Support section by allowing users
//                   to easily view and track their support tickets within the app.
//                 </p>

//                 <div className="flex gap-8 mb-8">
//                   <div>
//                     <div className="text-3xl font-bold">7%</div>
//                     <div className="text-sm opacity-80">ARPU Uplift</div>
//                   </div>
//                   <div>
//                     <div className="text-3xl font-bold">40%</div>
//                     <div className="text-sm opacity-80">Improvement in CSS</div>
//                   </div>
//                 </div>

//                 <Button
//                   variant="secondary"
//                   className="bg-slate-800 hover:bg-slate-700 text-white border-0"
//                 >
//                   View case study
//                   <ArrowRight className="ml-2 h-4 w-4" />
//                 </Button>
//               </div>

//               <div className="flex-1 flex justify-center">
//                 <img
//                   src="/mobile-app-support-interface-mockup-with-help-tick.jpg"
//                   alt="Support app interface mockup"
//                   className="rounded-2xl shadow-2xl max-w-sm"
//                 />
//               </div>
//             </div>
//             <div className="px-8 pb-6">
//               <div className="flex justify-end gap-6 text-white text-sm opacity-80">
//                 <span className="px-4 py-1.5 rounded-full text-sm font-semibold bg-white/20 text-orange-50">
//                   Real Money Gaming App
//                 </span>
//                 <span className="px-4 py-1.5 rounded-full text-sm font-semibold bg-white/20 text-orange-50">
//                   B2C
//                 </span>
//                 <span className="px-4 py-1.5 rounded-full text-sm font-semibold bg-white/20 text-orange-50">
//                   UX Case Study
//                 </span>
//               </div>
//             </div>
//           </div>

//           {/* Project 2 - Players Trust */}
//           <div
//             className="rounded-3xl overflow-hidden"
//             style={{
//               backgroundImage: "url('/images/project-beige-gradient.png')",
//               backgroundSize: "cover",
//               backgroundPosition: "center",
//             }}
//           >
//             <div className="p-8 flex flex-col lg:flex-row items-center gap-8 min-h-[400px]">
//               <div className="flex-1 flex justify-center lg:order-1">
//                 <img
//                   src="/rummy-circle-mobile-app-profile-interface-with-mul.jpg"
//                   alt="RummyCircle app profile interface"
//                   className="rounded-2xl shadow-2xl max-w-sm"
//                 />
//               </div>

//               <div className="flex-1 text-slate-800 lg:order-2">
//                 <h2 className="text-3xl font-bold mb-4 text-balance">
//                   Building Players Trust Through Redesigning Profile Experience
//                 </h2>
//                 <p className="text-lg mb-8 opacity-80 leading-relaxed">
//                   Focused on reducing fraudulent behavior and complaints while
//                   boosting player authenticity and trust-driven engagement.
//                 </p>

//                 <div className="flex gap-8 mb-8">
//                   <div>
//                     <div className="text-3xl font-bold">9%</div>
//                     <div className="text-sm opacity-70">ARPU Uplift</div>
//                   </div>
//                   <div>
//                     <div className="text-3xl font-bold">20%</div>
//                     <div className="text-sm opacity-70">
//                       Less Fraud Complaints
//                     </div>
//                   </div>
//                 </div>

//                 <Button
//                   variant="secondary"
//                   className="bg-slate-600 hover:bg-slate-500 text-white border-0"
//                 >
//                   Coming Soon
//                   <ArrowRight className="ml-2 h-4 w-4" />
//                 </Button>
//               </div>
//             </div>
//             <div className="px-8 pb-6">
//               <div className="flex gap-6 text-slate-700 text-sm">
//                 <span className="px-4 py-1.5 rounded-full text-sm font-semibold bg-black/10">
//                   Player First Design
//                 </span>
//                 <span className="px-4 py-1.5 rounded-full text-sm font-semibold bg-black/10">
//                   B2C App
//                 </span>
//                 <span className="px-4 py-1.5 rounded-full text-sm font-semibold bg-black/10">
//                   App Case Study
//                 </span>
//               </div>
//             </div>
//           </div>

//           {/* Project 3 - Verification */}
//           <div
//             className="rounded-3xl overflow-hidden"
//             style={{
//               backgroundImage: "url('/images/project-purple-gradient.png')",
//               backgroundSize: "cover",
//               backgroundPosition: "center",
//             }}
//           >
//             <div className="p-8 flex flex-col lg:flex-row items-center gap-8 min-h-[400px]">
//               <div className="flex-1 text-white">
//                 <h2 className="text-3xl font-bold mb-4 text-balance">
//                   Improving Verification For 120+ Million Users
//                 </h2>
//                 <p className="text-lg mb-8 opacity-90 leading-relaxed">
//                   Designing a Seamless KYC Journey for My11Circle: Reducing User
//                   Frustration, Increasing Completion Rates.
//                 </p>

//                 <div className="flex gap-8 mb-8">
//                   <div>
//                     <div className="text-3xl font-bold">40%</div>
//                     <div className="text-sm opacity-80">Faster KYC</div>
//                   </div>
//                   <div>
//                     <div className="text-3xl font-bold">12%</div>
//                     <div className="text-sm opacity-80">
//                       Increase in Paid Games
//                     </div>
//                   </div>
//                 </div>

//                 <Button
//                   variant="secondary"
//                   className="bg-slate-800 hover:bg-slate-700 text-white border-0"
//                 >
//                   Coming Soon
//                   <ArrowRight className="ml-2 h-4 w-4" />
//                 </Button>
//               </div>

//               <div className="flex-1 flex justify-center">
//                 <img
//                   src="/my11circle-mobile-app-kyc-verification-interface.jpg"
//                   alt="My11Circle KYC verification interface"
//                   className="rounded-2xl shadow-2xl max-w-sm"
//                 />
//               </div>
//             </div>
//             <div className="px-8 pb-6">
//               <div className="flex justify-end gap-6 text-white text-sm opacity-80">
//                 <span className="px-4 py-1.5 rounded-full text-sm font-semibold bg-white/20 text-orange-50">
//                   Real Money Gaming App
//                 </span>
//                 <span className="px-4 py-1.5 rounded-full text-sm font-semibold bg-white/20 text-orange-50">
//                   B2C
//                 </span>
//                 <span className="px-4 py-1.5 rounded-full text-sm font-semibold bg-white/20 text-orange-50">
//                   KYC Case Study
//                 </span>
//               </div>
//             </div>
//           </div>

//           {/* Project 4 - Turbo Rummy */}
//           <div
//             className="rounded-3xl overflow-hidden"
//             style={{
//               backgroundImage: "url('/images/project-beige-gradient.png')",
//               backgroundSize: "cover",
//               backgroundPosition: "center",
//             }}
//           >
//             <div className="p-8 flex flex-col lg:flex-row items-center gap-8 min-h-[400px]">
//               <div className="flex-1 flex justify-center lg:order-1">
//                 <img
//                   src="/turbo-rummy-mobile-game-interface-with-cards-and-p.jpg"
//                   alt="Turbo Rummy game interface"
//                   className="rounded-2xl shadow-2xl max-w-sm"
//                 />
//               </div>

//               <div className="flex-1 text-slate-800 lg:order-2">
//                 <h2 className="text-3xl font-bold mb-4 text-balance">
//                   Turbo Rummy: Enhancing Player Experience
//                 </h2>
//                 <p className="text-lg mb-8 opacity-80 leading-relaxed">
//                   A feature introduced in Rummy Circle, adds a dynamic twist to
//                   the classic Deals Rummy by integrating whitegoods as prizes
//                 </p>

//                 <div className="flex gap-8 mb-8">
//                   <div>
//                     <div className="text-3xl font-bold">8%</div>
//                     <div className="text-sm opacity-70">Revenue Lift</div>
//                   </div>
//                   <div>
//                     <div className="text-3xl font-bold">12%</div>
//                     <div className="text-sm opacity-70">Increase in E-Fee</div>
//                   </div>
//                 </div>

//                 <Button
//                   variant="secondary"
//                   className="bg-slate-600 hover:bg-slate-500 text-white border-0"
//                 >
//                   Coming Soon
//                   <ArrowRight className="ml-2 h-4 w-4" />
//                 </Button>
//               </div>
//             </div>
//             <div className="px-8 pb-6">
//               <div className="flex gap-6 text-slate-700 text-sm">
//                 <span className="px-4 py-1.5 rounded-full text-sm font-semibold bg-black/10">
//                   New Feature
//                 </span>
//                 <span className="px-4 py-1.5 rounded-full text-sm font-semibold bg-black/10">
//                   B2C App
//                 </span>
//                 <span className="px-4 py-1.5 rounded-full text-sm font-semibold bg-black/10">
//                   Game Mechanics UX
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";
// If you keep JSON in a file:
// import projects from "@/data/projects.json";
// For now, inline to keep it self-contained:
const projects = [
  {
    id: "support-load",
    title: "Reducing Support Load & Improving Transparency",
    description:
      "How we redesigned the Help & Support section by allowing users to easily view and track their support tickets within the app.",
    image: {
      src: "/mobile-app-support-interface-mockup-with-help-tick.jpg",
      alt: "Support app interface mockup",
    },
    stats: [
      { value: "7%", label: "ARPU Uplift" },
      { value: "40%", label: "Improvement in CSS" },
    ],
    cta: {
      label: "View case study",
      href: "/case-studies/support-load",
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
    image: {
      src: "/rummy-circle-mobile-app-profile-interface-with-mul.jpg",
      alt: "RummyCircle app profile interface",
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
      src: "/my11circle-mobile-app-kyc-verification-interface.jpg",
      alt: "My11Circle KYC verification interface",
    },
    stats: [
      { value: "40%", label: "Faster KYC" },
      { value: "12%", label: "Increase in Paid Games" },
    ],
    cta: { label: "Coming Soon", href: "#", variant: "dark" },
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
      src: "/turbo-rummy-mobile-game-interface-with-cards-and-p.jpg",
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
    pillWrap: "justify-end text-white opacity-80",
    pill: "bg-white/5 text-orange-50 shadow-[0px_1.340000033378601px_4.336996555328369px_0px_rgba(0,0,0,0.25)]",
    cta: "bg-slate-800 text-white border-0",
    ctaHover: "hover:bg-slate-700",
  },
  beige: {
    bg: "url('/images/project-beige-gradient.png')",
    textMain: "text-slate-800",
    textSub: "opacity-80",
    pillWrap: "text-slate-700",
    pill: "bg-white/5 shadow-[0px_1.340000033378601px_4.336996555328369px_0px_rgba(0,0,0,0.25)]",
    cta: "bg-slate-600 text-white border-0",
    ctaHover: "hover:bg-slate-500",
  },
};

const CtaButton: React.FC<{
  label: string;
  href?: string;
  theme: ThemeKey;
}> = ({ label, href = "#", theme }) => (
  <Button
    asChild
    variant="secondary"
    className={`${themeStyles[theme].cta} ${themeStyles[theme].ctaHover}`}
  >
    <a href={href}>
      {label}
      <ArrowRight className="ml-2 h-4 w-4" />
    </a>
  </Button>
);

function ProjectCard({
  title,
  description,
  image,
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
        className={`p-8 flex ${
          theme === "purple" ? "flex-row-reverse" : "flex-row"
        } items-center gap-8 min-h-[400px]`}
      >
        {/* image column */}
        <div
          className={`flex-1 flex justify-center ${
            isImageLeft ? "lg:order-1" : ""
          }`}
        >
          <img
            src={image.src}
            alt={image.alt}
            className="rounded-2xl shadow-2xl max-w-sm"
          />
        </div>

        {/* text column */}
        <div
          className={`flex-1 ${t.textMain} ${isImageLeft ? "lg:order-2" : ""}`}
        >
          <h2 className="text-3xl font-bold mb-4 text-balance">{title}</h2>
          <p className={`text-lg mb-8 leading-relaxed ${t.textSub}`}>
            {description}
          </p>

          <div className="flex gap-8 mb-8">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-3xl font-bold">{s.value}</div>
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

          <CtaButton
            label={cta.label}
            href={cta.href}
            theme={theme as ThemeKey}
          />
        </div>
      </div>

      <div className="px-8 pb-6">
        <div className={`flex gap-6 text-sm ${t.pillWrap}`}>
          {/* align right only for purple (to match original) */}
          <div className={`flex gap-2 ${theme === "purple" ? "ml-auto" : ""}`}>
            {tags.map((tag) => (
              <span
                key={tag}
                className={`px-4 py-1.5 rounded-full text-sm font-semibold ${t.pill}`}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function FeaturedProjects() {
  return (
    <div className="bg-white py-16 px-4" id="work">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-slate-900 mb-16">
          Featured Projects
        </h1>

        <div className="space-y-8">
          {projects.map((p) => (
            <ProjectCard key={p.id} {...p} />
          ))}
        </div>
      </div>
    </div>
  );
}
