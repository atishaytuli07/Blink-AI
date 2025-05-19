import Link from "next/link"
import Image from "next/image"
import { Github, Linkedin } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#F5F5EB] py-8 border-t border-gray-200 max-w-7xl mx-auto rounded-t-3xl ">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="flex items-center justify-center gap-2">
              <Image src="/moving.gif" alt="Blink AI" width={30} height={30} />
              <span className="font-roboto font-semibold text-xl text-black">
                Blink AI <sup>+</sup>
              </span>
            </Link>
            <p className="text-sm text-gray-600 mt-2">Simple, clear, and smarter PDF summaries</p>
          </div>

          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex flex-col items-center md:items-start gap-2">
              <h3 className="font-medium text-sm">Links</h3>
              <Link href="/#features" className="text-sm text-gray-600 hover:text-black transition-colors">
                Features
              </Link>
              <Link href="/#pricing" className="text-sm text-gray-600 hover:text-black transition-colors">
                Pricing
              </Link>
              <Link href="/#contact" className="text-sm text-gray-600 hover:text-black transition-colors">
                Contact
              </Link>
            </div>

            <div className="flex flex-col items-center md:items-start gap-2">
              <h3 className="font-medium text-sm">Legal</h3>
              <Link href="/privacy" className="text-sm text-gray-600 hover:text-black transition-colors">
                Privacy
              </Link>
              <Link href="/terms" className="text-sm text-gray-600 hover:text-black transition-colors">
                Terms
              </Link>
            </div>
          </div>

          <div className="mt-6 md:mt-0">
            <div className="flex gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-black transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-black transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-gray-600">© {currentYear} Blink AI. All rights reserved.</div>
      </div>
    </footer>
  )
}
