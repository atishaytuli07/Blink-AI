"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="bg-[#CCFF00] rounded-md w-8 h-8 flex items-center justify-center">
              <span className="text-black font-bold">B</span>
            </div>
            <span className="font-bold text-xl">BLINK AI</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/features" className="font-medium hover:text-[#CCFF00] transition-colors">
              Features
            </Link>
            <Link href="/pricing" className="font-medium hover:text-[#CCFF00] transition-colors">
              Pricing
            </Link>
            <Link href="/about" className="font-medium hover:text-[#CCFF00] transition-colors">
              About
            </Link>
            <Link href="/contact" className="font-medium hover:text-[#CCFF00] transition-colors">
              Contact
            </Link>
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="outline" asChild>
              <Link href="/login">Log in</Link>
            </Button>
            <Button className="bg-[#CCFF00] hover:bg-[#b8e600] text-black" asChild>
              <Link href="/signup">Sign up</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 right-0 shadow-lg">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col gap-4 mb-6">
              <Link
                href="/features"
                className="font-medium py-2 hover:text-[#CCFF00] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </Link>
              <Link
                href="/pricing"
                className="font-medium py-2 hover:text-[#CCFF00] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link
                href="/about"
                className="font-medium py-2 hover:text-[#CCFF00] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="font-medium py-2 hover:text-[#CCFF00] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>
            <div className="flex flex-col gap-3">
              <Button variant="outline" className="w-full" asChild>
                <Link href="/login" onClick={() => setIsMenuOpen(false)}>
                  Log in
                </Link>
              </Button>
              <Button className="w-full bg-[#CCFF00] hover:bg-[#b8e600] text-black" asChild>
                <Link href="/signup" onClick={() => setIsMenuOpen(false)}>
                  Sign up
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
