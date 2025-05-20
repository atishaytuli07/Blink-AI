"use client"

import React from "react"
import Link from "next/link"
import { motion } from "framer-motion"

// Simple Marquee implementation since react-fast-marquee isn't available in Next.js
const SimpleMarquee = ({
  children,
  direction = "left",
  speed = 40,
  pauseOnHover = true,
}: {
  children: React.ReactNode
  direction?: "left" | "right"
  speed?: number
  pauseOnHover?: boolean
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null)
  const [contentWidth, setContentWidth] = React.useState(0)
  const [isPaused, setIsPaused] = React.useState(false)

  React.useEffect(() => {
    if (containerRef.current) {
      const firstChild = containerRef.current.firstChild as HTMLElement
      if (firstChild) {
        setContentWidth(firstChild.offsetWidth)
      }
    }
  }, [])

  const duration = contentWidth > 0 ? (contentWidth / speed) * 1000 : 20000
  const directionFactor = direction === "right" ? 1 : -1

  return (
    <div
      className="overflow-hidden whitespace-nowrap"
      onMouseEnter={() => pauseOnHover && setIsPaused(true)}
      onMouseLeave={() => pauseOnHover && setIsPaused(false)}
    >
      <div className="flex" ref={containerRef}>
        <motion.div
          className="flex min-w-full"
          animate={
            isPaused
              ? { x: 0 }
              : {
                  x: directionFactor * -contentWidth,
                }
          }
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
            duration: duration / 1000,
            ease: "linear",
            repeatDelay: 0,
          }}
          style={{ paddingRight: "1rem" }}
        >
          {children}
        </motion.div>
        <motion.div
          className="flex min-w-full"
          animate={
            isPaused
              ? { x: 0 }
              : {
                  x: directionFactor * -contentWidth,
                }
          }
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
            duration: duration / 1000,
            ease: "linear",
            repeatDelay: 0,
          }}
          style={{ paddingRight: "1rem" }}
        >
          {children}
        </motion.div>
      </div>
    </div>
  )
}

// Simple Sparkle component
const Sparkle = ({ fill = "#FFD37D", width = 64, height = 64, className = "" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M12 2L14.4 9.6H22L15.8 14.4L18.2 22L12 17.2L5.8 22L8.2 14.4L2 9.6H9.6L12 2Z" fill={fill} />
    </svg>
  )
}

const Footer = () => {
  return (
    <footer className="bg-[#212121] text-white rounded-tr-[100px]">
      <div className="container mx-auto py-8 md:py-16 font-mono px-4">
        <nav className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-8 md:mb-16">
          <div>
            <h3 className="font-sans font-bold text-sm mb-3 md:mb-4 text-zinc-500">COURSE</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-[#CCFF00] transition-colors">
                  WHATS INCLUDED
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-[#CCFF00] transition-colors">
                  THE JOURNEY
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-sans font-bold text-sm mb-3 md:mb-4 text-zinc-500">ABOUT</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-[#CCFF00] transition-colors">
                  PRACTICAL
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-[#CCFF00] transition-colors">
                  MEET URVASHI
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-sans font-bold text-sm mb-3 md:mb-4 text-zinc-500">REVIEWS</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-[#CCFF00] transition-colors">
                  TESTIMONIALS
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-sans font-bold text-sm mb-3 md:mb-4 text-zinc-500">LEGAL</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-[#CCFF00] transition-colors">
                  COOKIES POLICY
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-[#CCFF00] transition-colors">
                  LEGAL TERMS
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-[#CCFF00] transition-colors">
                  PRIVACY POLICY
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div className="bg-[#212121]">
        <div className="relative overflow-hidden">
          {/* First marquee - moving right to left */}
          <div className="py-4 md:py-6">
            <SimpleMarquee speed={40}>
              <div className="flex items-center">
                <span className="font-extrabold text-5xl md:text-6xl lg:text-8xl text-white mx-4">
                  Blink AI <sup>👀</sup>
                </span>
                <Sparkle fill={"#FFD37D"} width={48} height={48} className="mx-4" />
                <span className="font-extrabold text-5xl md:text-6xl lg:text-8xl text-white mx-4">
                  Blink AI <sup className="text-[#CCFF00]">*</sup>
                </span>
                <Sparkle fill={"#FFD37D"} width={48} height={48} className="mx-4" />
              </div>
            </SimpleMarquee>
          </div>
          {/* Second marquee - moving left to right */}
          <div className="text-white font-bold">
            <SimpleMarquee direction="right" speed={30}>
              <div className="flex items-center py-3 lg:py-6">
                <span className="text-xl md:text-2xl lg:text-3xl font-extrabold mx-4">
                  The best <span className="text-[#CCFF00]"> PDF </span> Summarizer.
                </span>
                <Sparkle fill={"#3658D3"} width={32} height={32} className="mx-4" />
                <span className="text-xl md:text-2xl lg:text-3xl font-extrabold mx-4">👀 Blink AI</span>
                <Sparkle fill={"#3658D3"} width={32} height={32} className="mx-4" />
              </div>
            </SimpleMarquee>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
