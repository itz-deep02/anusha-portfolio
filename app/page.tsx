"use client";

import { useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

import WelcomeScreen from "components/welcome-screen";
import Navigation from "components/navbar";
import Image from "next/image";
import SplitText from "components/ui/reactbits/SplitText";
import TextType from "components/ui/reactbits/TextType";
import { ExperienceSection } from "components/experience";
import { MovingTags } from "components/moving-tags";
import { ToolsSkills } from "components/tools-skills";
import { InstagramPortfolio } from "components/instagram-portfolio";
import Testimonials from "components/testimonial";
import FAQ from "components/faq";
import { CharacterShowcase } from "components/character-showcase";
import { BehanceProject } from "components/behance-project-card";
import { FeaturedProjects } from "components/new-project";
import { StorySection } from "components/chai-break";
import { BottomNav } from "components/bottom-nav";

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

  // if (showWelcome) return <WelcomeScreen onComplete={handleWelcomeComplete} />;

  return (
    <>
      {/* TOP SCROLL PROGRESS BAR */}
      <motion.div
        className="fixed left-0 right-0 top-0 h-1 bg-gradient-to-r from-[#A97CF8] via-[#F38CB8] to-[#FDCC92] origin-left z-[9999]"
        style={{ scaleX }}
      />
      {/* <SmoothCursor /> */}

      <main className="w-full bg-white">
        <Navigation />

        {/* HERO: background limited to first viewport */}
        <section className="relative h-[100svh] w-full overflow-hidden">
          <Image
            src="/images/homepage.png"
            alt="Homepage background"
            fill
            priority
            sizes="100vw"
            className="object-cover z-0 pointer-events-none"
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

        <section className="relative py-8">
          <ExperienceSection />
        </section>

        <section className="relative py-8">
          <MovingTags />
        </section>

        <section className="relative">
          <FeaturedProjects />
        </section>

        <BehanceProject />

        <section className="relative py-8">
          <ToolsSkills />
        </section>

        <section className="relative pt-20">
          <InstagramPortfolio />
        </section>

        <section className="relative">
          <StorySection />
        </section>

        <section
          style={{
            backgroundImage: "url('/images/testimonial.png')",
          }}
        >
          <Testimonials />
          <FAQ />
        </section>

        <section>
          <CharacterShowcase />
        </section>

        <section className="relative">
          <BottomNav />
        </section>
      </main>
    </>
  );
}
