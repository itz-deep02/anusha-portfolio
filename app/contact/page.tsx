import { Navigation } from "components/navbar";
import TextType from "components/ui/reactbits/TextType";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Contact() {
  return (
    <>
      <Navigation />

      <section className="relative h-screen w-full overflow-hidden">
        <Image
          src="/images/contact.png"
          alt="Homepage background"
          fill
          priority
          sizes="100vw"
          className="object-cover pointer-events-none"
        />
        <div className="flex gap-8 flex-col justify-center px-20 items-start h-full z-10 relative">
          <TextType
            text={["Say Hello!"]}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="|"
            loop={false}
            className="text-neutral-900 text-6xl  underline underline-offset-16 decoration-[#FEBC18]"
            textColors={["text-neutral-900"]}
          />
          <div className="text-neutral-900 text-2xl w-2/3">
            Thanks for stopping by! I’d love to hear from you. Whether it’s
            about design opportunities, collaborations, or just a friendly
            hello. Feel free to reach out.
          </div>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Image
                src="/icons/contact-email.svg"
                alt="email"
                height={20}
                width={20}
              />
              <Link
                href="mailto:anushagarwal98@gmail.com"
                className="text-indigo-950 hover:text-blue-700 transition-colors"
              >
                anushagarwal98@gmail.com
              </Link>
            </div>

            <div className="flex items-center gap-3">
              <Image
                src="/icons/contact-linkedin.svg"
                alt="email"
                height={20}
                width={20}
              />
              <Link
                href="https://www.linkedin.com/in/anusha-agrawal-951a0717b/"
                className="text-indigo-950 hover:text-blue-700 transition-colors underline underline-offset-4"
              >
                LinkedIn
              </Link>
            </div>
          </div>
        </div>

        <Image
          src="/images/greeting-image.png"
          alt="greeting"
          height={400}
          width={400}
          className="object-cover pointer-events-none absolute bottom-0 right-[10%]"
        />
      </section>
    </>
  );
}

export default Contact;
