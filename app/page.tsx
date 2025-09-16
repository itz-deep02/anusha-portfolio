"use client";

import { useState } from "react";
// If you're on Framer Motion v10 or earlier, import from "framer-motion" instead.
import { motion, useScroll, useSpring } from "framer-motion";

import WelcomeScreen from "@/components/welcome-screen";
import Image from "next/image";
import SplitText from "@/components/ui/reactbits/SplitText";
import TextType from "@/components/ui/reactbits/TextType";
import Navigation from "@/components/navbar";
import { ExperienceSection } from "@/components/experience";
import { MovingTags } from "@/components/moving-tags";
import { ToolsSkills } from "@/components/tools-skills";
import { InstagramPortfolio } from "@/components/instagram-portfolio";
import { SmoothCursor } from "@/components/ui/magicui/SmoothCursor";
import Testimonials from "@/components/testimonial";
import FAQ from "@/components/faq";
import { FloatingDock } from "@/components/ui/aceternity/FloatingDock";
import {
  IconBrandGithub,
  IconBrandX,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
} from "@tabler/icons-react";
import { ProjectsSection } from "@/components/project";
const links = [
  {
    title: "Home",
    icon: (
      <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#",
  },

  {
    title: "Products",
    icon: (
      <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#",
  },
  {
    title: "Components",
    icon: (
      <IconNewSection className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#",
  },
  // {
  //   title: "Aceternity UI",
  //   icon: (
  //     <Image
  //       src="https://assets.aceternity.com/logo-dark.png"
  //       width={20}
  //       height={20}
  //       alt="Aceternity Logo"
  //     />
  //   ),
  //   href: "#",
  // },
  {
    title: "Changelog",
    icon: (
      <IconExchange className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#",
  },

  {
    title: "Twitter",
    icon: (
      <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#",
  },
  {
    title: "GitHub",
    icon: (
      <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#",
  },
];

export default function Home() {
  const { scrollYProgress } = useScroll();
  // Smooth the progress a bit (optional but nice)
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const [showWelcome, setShowWelcome] = useState(true);
  const handleWelcomeComplete = () => setShowWelcome(false);

  if (showWelcome) return <WelcomeScreen onComplete={handleWelcomeComplete} />;

  return (
    <>
      {/* TOP SCROLL PROGRESS BAR */}
      <motion.div
        className="fixed left-0 right-0 top-0 h-1 bg-green-400 origin-left z-[9999]"
        style={{ scaleX }}
      />
      {/* <SmoothCursor /> */}

      <main className="w-full">
        <Navigation />

        {/* HERO: background limited to first viewport */}
        <section className="relative h-[100svh] w-full overflow-hidden">
          <Image
            src="/images/Homepage.png"
            alt="Homepage background"
            fill
            priority
            sizes="100vw"
            className="object-cover -z-10 pointer-events-none"
          />

          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
            <SplitText
              text="I Design digital experiences that people trust, love, and return to."
              className="text-4xl font-bold mb-4 text-[#0C0C49]"
              delay={50}
              duration={3}
              ease="elastic.out(1, 0.7)"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"
            />

            <TextType
              text={[
                "Product Designer at Games24x7",
                "Crafting delightful user experiences",
                "Designing games millions love to play",
              ]}
              typingSpeed={75}
              pauseDuration={1000}
              showCursor={true}
              cursorCharacter="|"
              className="text-2xl text-[#0C0C49]"
              textColors={["text-[#0C0C49]"]}
            />
          </div>
        </section>

        {/* CONTENT BELOW HERO */}
        <section className="relative">
          <ExperienceSection />
        </section>

        <section className="relative">
          <MovingTags />
        </section>

        <section className="relative">
          <ProjectsSection />
        </section>

        <section className="relative">
          <ToolsSkills />
        </section>

        <section className="relative">
          <InstagramPortfolio />
        </section>

        <section
          style={{
            backgroundImage: "url('/images/testimonial.png')",
          }}
        >
          <Testimonials />
          <FAQ />
        </section>

        <section className="relative">
          <Image
            src="/images/footer.png"
            alt="footer"
            width={2400} // <-- use your image’s actual pixel width
            height={800} // <-- use your image’s actual pixel height
            sizes="100vw"
            priority
            style={{ width: "100%", height: "auto" }}
            className="pointer-events-none"
          />
          <div className=" absolute bottom-5 left-1/2 -translate-x-1/2 z-10">
            <FloatingDock
              mobileClassName="translate-y-20" // only for demo, remove for production
              items={links}
            />
          </div>
        </section>
      </main>
    </>
  );
}
