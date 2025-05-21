"use client";

import React from "react";
import Link from "next/link";
import Marquee from "react-fast-marquee";

const Sparkle = ({
  fill = "#FFD37D",
  width = 64,
  height = 64,
  className = "",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M12 2L14.4 9.6H22L15.8 14.4L18.2 22L12 17.2L5.8 22L8.2 14.4L2 9.6H9.6L12 2Z"
        fill={fill}
      />
    </svg>
  );
};

const Footer = () => {
  return (
    <footer className="bg-[#212121] text-white rounded-tr-[100px]">
      <div className="container mx-auto py-8 md:py-16 font-mono px-4">
        <nav className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-8 md:mb-16">
          <div>
            <h3 className="font-bold font-br text-sm mb-3 md:mb-4 text-zinc-500">
              PROGRAM
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="#"
                  className="hover:text-[#CCFF00] transition-colors"
                >
                  What You Get
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#CCFF00] transition-colors"
                >
                  Learning Path
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold font-br text-sm mb-3 md:mb-4 text-zinc-500">
              INSIDE
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="#"
                  className="hover:text-[#CCFF00] transition-colors"
                >
                  Real-World Skills
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#CCFF00] transition-colors"
                >
                  Atishay Tuli
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold font-br text-sm mb-3 md:mb-4 text-zinc-500">
              PROOF
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="#"
                  className="hover:text-[#CCFF00] transition-colors"
                >
                  Student Stories
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold font-br text-sm mb-3 md:mb-4 text-zinc-500">
              POLICIES
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="#"
                  className="hover:text-[#CCFF00] transition-colors"
                >
                  Cookies
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#CCFF00] transition-colors"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#CCFF00] transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div className="bg-[#212121]">
        <div className="relative overflow-hidden">
          <div className="py-4 md:py-6">
            <Marquee
              speed={40}
              gradient={false}
              autoFill
              pauseOnHover
              className="overflow-hidden pt-2"
            >
              <span className="font-bold font-bm text-5xl text-white mx-4">
                Blink AI <sup>👀</sup>
              </span>
              <Sparkle
                fill={"#FFD37D"}
                width={48}
                height={48}
                className="mx-4"
              />
              <span className="font-bold font-bm text-5xl text-white mx-4">
                Blink AI <sup className="text-[#CCFF00]">*</sup>
              </span>
              <Sparkle
                fill={"#FFD37D"}
                width={48}
                height={48}
                className="mx-4"
              />
            </Marquee>
          </div>
          <div className="text-white font-bold font-bm">
            <Marquee
              direction="right"
              speed={30}
              gradient={false}
              autoFill
              pauseOnHover
            >
              <div className="flex items-center py-3 lg:py-6">
                <span className="text-xl md:text-2xl lg:text-3xl font-bold font-bm mx-4">
                  The best <span className="text-[#CCFF00]">PDF</span>{" "}
                  Summarizer.
                </span>
                <Sparkle
                  fill={"#3658D3"}
                  width={32}
                  height={32}
                  className="mx-4"
                />
                <span className="text-xl md:text-2xl lg:text-3xl font-bold font-bm mx-4">
                  👀 Blink AI
                </span>
                <Sparkle
                  fill={"#3658D3"}
                  width={32}
                  height={32}
                  className="mx-4"
                />
              </div>
            </Marquee>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
