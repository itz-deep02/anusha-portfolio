"use client";

import { useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

import WelcomeScreen from "components/welcome-screen";
import { Navigation } from "components/navbar";
import Image from "next/image";
import { ExperienceSection } from "components/experience";
import { MovingTags } from "components/moving-tags";
import { ToolsSkills } from "components/tools-skills";
import { Testimonials } from "components/testimonial";
import { FAQ } from "components/faq";
import { CharacterShowcase } from "components/character-showcase";
import { BehanceProject } from "components/behance-project-card";
import { FeaturedProjects } from "components/new-project";
import { StorySection } from "components/chai-break";
import Link from "next/link";
import { BeyondPortfolio } from "components/beyond-portfolio";
import { Footer } from "components/Footer";

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
        className="fixed left-0 right-0 top-0 h-1 bg-gradient-to-r from-[#A97CF8] via-[#F38CB8] to-[#FDCC92] origin-left z-[9999]"
        style={{ scaleX }}
      />
      {/* <SmoothCursor /> */}

      <main className="w-full bg-white">
        <Navigation />

        {/* HERO: background limited to first viewport */}
        <section className="relative h-screen w-full overflow-hidden">
          <Image
            src="/images/Homebanner.webp"
            alt="Homepage bg"
            fill
            priority
            sizes="100vw"
            className="object-cover z-0 pointer-events-none"
          />

          {/* <div className="absolute z-10 gap-4 h-full text-center top-[27%] left-[4%]">
            <TextType
              text={[
                "Design digital experiences that people trust, love, and return to!",
                "Design digital experiences that people trust, love, and return to!",
              ]}
              typingSpeed={50}
              pauseDuration={1000}
              showCursor={true}
              cursorCharacter="|"
              className="text-2xl text-[#0C0C49]"
              textColors={["text-[#0C0C49]"]}
              loop={true}
            /> */}
          {/* <SplitText
              text="SOLVING PROBLEMS THROUGH DESIGN"
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
            /> */}
          {/* </div> */}
          <Link
            href="#instagram"
            className="absolute bottom-[22%] left-[30%] w-40 h-10 bg-gradient-to-r from-indigo-600 via-pink-600 to-orange-300 rounded-3xl shadow-[0px_2.777604103088379px_2.777604103088379px_0px_rgba(0,0,0,0.25)]"
          >
            <div className="left-[16.67px] top-[8.33px] absolute inline-flex justify-start items-center gap-2">
              <div className="justify-start text-violet-50 text-base font-semibold font-['Geist'] leading-normal">
                What’s that? 🤔
              </div>
            </div>
          </Link>
          {/* <video
            src="/videos/anusha-greeting.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="absolute bottom-[8.5%] right-[0%] max-w-[450px]"
          /> */}
          {/* <Image
            src="/images/white-bg.png"
            alt="bg"
            height={0}
            width={0}
            className="h-fit w-full absolute bottom-[40%]"
          /> */}
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

        <section className="relative py-28">
          <ToolsSkills />
        </section>

        <section
          style={{
            backgroundImage: "url('/images/beyond-portfolio.png')",
          }}
          className="relative py-20"
        >
          <BeyondPortfolio />
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
          <Footer />
        </section>
      </main>
    </>
  );
}
