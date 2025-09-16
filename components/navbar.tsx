"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "./ui/Button";
import {
  IconBrandInstagram,
  IconBrandLinkedin,
  IconDownload,
} from "@tabler/icons-react";
import Link from "next/link";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ease-in-out ${
        isScrolled ? "w-[70%] max-w-4xl" : "w-[90%] max-w-6xl"
      }`}
    >
      <div
        className={`bg-transparent z-50 shadow-lg backdrop-blur-xl py-4 transition-all border border-white/20 duration-300 ease-in-out ${
          isScrolled ? "rounded-full px-4  " : "rounded-full px-8 "
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-1">
            {/* <div className="w-6 h-6 bg-orange-400 rounded-full flex items-center justify-center"> */}
            <Image src="/images/icon.png" alt="icon" width={24} height={24} />
            {/* </div> */}
            <span className="font-medium text-gray-800">anusha</span>
            <div className="w-1.5 h-1.5 bg-amber-400 rounded-full" />
          </Link>

          {/* Navigation Links */}
          <div
            className={`hidden md:flex items-center transition-all duration-300 ${
              isScrolled ? "space-x-6" : "space-x-8"
            }`}
          >
            <div className="group relative overflow-hidden">
              <Link
                href="/"
                className="block text-gray-700 font-medium translate-y-0 skew-y-0 transform-gpu transition-transform duration-500 group-hover:-translate-y-[110%] group-hover:skew-y-12"
              >
                Home
              </Link>
              <Link
                href="/"
                className="absolute top-0 left-0 text-gray-900 font-medium translate-y-[110%] skew-y-12 transform-gpu transition-transform duration-500 group-hover:translate-y-0 group-hover:skew-y-0"
              >
                Home
              </Link>
            </div>
            <div className="group relative overflow-hidden">
              <Link
                href="/about"
                className="block text-gray-700 font-medium translate-y-0 skew-y-0 transform-gpu transition-transform duration-500 group-hover:-translate-y-[110%] group-hover:skew-y-12"
              >
                About
              </Link>
              <Link
                href="/about"
                className="absolute top-0 left-0 text-gray-900 font-medium translate-y-[110%] skew-y-12 transform-gpu transition-transform duration-500 group-hover:translate-y-0 group-hover:skew-y-0"
              >
                About
              </Link>
            </div>
            <div className="group relative overflow-hidden">
              <Link
                href="#work"
                className="block text-gray-700 font-medium translate-y-0 skew-y-0 transform-gpu transition-transform duration-500 group-hover:-translate-y-[110%] group-hover:skew-y-12"
              >
                Work
              </Link>
              <Link
                href="#work"
                className="absolute top-0 left-0 text-gray-900 font-medium translate-y-[110%] skew-y-12 transform-gpu transition-transform duration-500 group-hover:translate-y-0 group-hover:skew-y-0"
              >
                Work
              </Link>
            </div>
            <div className="group relative overflow-hidden">
              <Link
                href="#contact"
                className="block text-gray-700 font-medium translate-y-0 skew-y-0 transform-gpu transition-transform duration-500 group-hover:-translate-y-[110%] group-hover:skew-y-12"
              >
                Contact
              </Link>
              <Link
                href="#contact"
                className="absolute top-0 left-0 text-gray-900 font-medium translate-y-[110%] skew-y-12 transform-gpu transition-transform duration-500 group-hover:translate-y-0 group-hover:skew-y-0"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Social Icons and Resume */}
          <div
            className={`flex items-center transition-all duration-300 ${
              isScrolled ? "space-x-2" : "space-x-3"
            }`}
          >
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className={` bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors`}
            >
              <IconBrandLinkedin className="w-8 h-8" />
            </Link>
            <Link
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className={` bg-pink-600 text-white rounded-md hover:bg-pink-700 transition-colors`}
            >
              <IconBrandInstagram className="w-8 h-8" />
            </Link>

            <Button
              variant="outline"
              size={isScrolled ? "sm" : "default"}
              className="bg-white/80 border-gray-300 text-gray-700 hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              <IconDownload
                className={`mr-2 ${isScrolled ? "w-3 h-3" : "w-4 h-4"}`}
              />
              <span className={isScrolled ? "text-sm" : ""}>Resume</span>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
