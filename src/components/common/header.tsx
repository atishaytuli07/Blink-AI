"use client"

import { SignedIn, SignedOut, UserButton, useAuth, useClerk } from "@clerk/nextjs"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState, useEffect } from "react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const router = useRouter()
  const { signOut } = useClerk()
  const { isSignedIn } = useAuth()

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMenuOpen) {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [isMenuOpen])

  return (
    <nav className="w-full py-4 bg-[#F5F5EB]">
      <div className="container mx-auto flex justify-between items-center px-4 lg:px-10">
        <Link href="/" className="flex items-center justify-center gap-2">
          <Image src="/moving.gif" alt="Blink AI" width={40} height={40} />
          <span className="font-roboto font-semibold text-2xl text-black">
            Blink AI <sup>+</sup>
          </span>
        </Link>

        <div className="hidden md:flex md:items-center md:gap-12">
          <Link href="/#features" className="text-black hover:text-gray-700 transition-colors">
            Features
          </Link>
          <Link href="/#pricing" className="text-black hover:text-gray-700 transition-colors">
            Pricing
          </Link>
          <Link href="/#contact" className="text-black hover:text-gray-700 transition-colors">
            Contact
          </Link>
        </div>

        <div className="flex">
          <SignedOut>
            <Link
              href="/sign-up"
              className="bg-black text-white px-5 py-2 rounded-full transition duration-300 hover:bg-gray-800 ml-2"
            >
              Get Started
            </Link>
          </SignedOut>

          <SignedIn>
            <div className="flex items-center gap-4">
              <Link href="/dashboard" className="text-black hover:text-gray-700 transition-colors">
                Your Summaries
              </Link>
              <UserButton
                afterSignOutUrl="/"
                appearance={{
                  elements: {
                    userButtonAvatarBox: "w-10 h-10",
                  },
                }}
              />
            </div>
          </SignedIn>
        </div>
      </div>
    </nav>
  )
}
