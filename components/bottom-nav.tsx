import Image from "next/image";
import React from "react";
import { FloatingDock } from "./ui/aceternity/FloatingDock";
import {
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBriefcase,
  IconBubbleText,
  IconHome,
  IconPhone,
} from "@tabler/icons-react";

const links = [
  {
    title: "Home",
    icon: (
      <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#",
  },

  {
    title: "Projects",
    icon: (
      <IconBriefcase className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#",
  },
  {
    title: "FAQ",
    icon: (
      <IconBubbleText className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "/#faq",
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
    title: "Contact",
    icon: (
      <IconPhone className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "/contact",
  },

  {
    title: "Instagram",
    icon: (
      <IconBrandInstagram className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "https://www.instagram.com/mylittlebubbble/",
  },
  {
    title: "LinkedIn",
    icon: (
      <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "https://www.linkedin.com/in/anusha-agrawal-951a0717b/",
  },
];

export function BottomNav() {
  return (
    <>
      <Image
        src="/images/footer.png"
        alt="footer"
        width={2400}
        height={800}
        sizes="100vw"
        priority
        style={{ width: "100%", height: "auto" }}
        className="pointer-events-none"
      />
      {/* <div className=" absolute bottom-5 left-1/2 -translate-x-1/2 z-10">
        <FloatingDock mobileClassName="translate-y-20" items={links} />
      </div> */}
    </>
  );
}
