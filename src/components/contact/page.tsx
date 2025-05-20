"use client"
import { Button } from "@/components/ui/button"

const ContactSection = () => {
  return (
    <div className="min-h-screen bg-[#f8f6f1] relative overflow-hidden">
      {/* Dotted background pattern */}
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=20&width=20')] bg-repeat opacity-5"></div>

      {/* Paperclip top left with handwritten note */}
      <div className="absolute top-24 left-24 hidden md:block">
        <div className="relative">
          <div className="font-handwritten text-gray-500 text-xl rotate-[-5deg]">
            Interested?
            <br />- Ryan
          </div>
          <div className="absolute -top-4 -right-8 transform rotate-12">
            <svg width="40" height="80" viewBox="0 0 40 80" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M30 15C30 6.716 23.284 0 15 0C6.716 0 0 6.716 0 15V65C0 73.284 6.716 80 15 80C23.284 80 30 73.284 30 65V15Z"
                fill="none"
                stroke="#C0A58E"
                strokeWidth="2"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Paperclip bottom right */}
      <div className="absolute bottom-24 right-24 hidden md:block">
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M65 30C73.284 30 80 23.284 80 15C80 6.716 73.284 0 65 0C56.716 0 50 6.716 50 15V65C50 73.284 56.716 80 65 80C73.284 80 80 73.284 80 65C80 56.716 73.284 50 65 50C56.716 50 50 56.716 50 65"
            fill="none"
            stroke="#C0A58E"
            strokeWidth="2"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          {/* Main content */}
          <div className="flex flex-col items-center">
            {/* TRY FIRST TOUCH FOR FREE tag */}
            <div className="mb-8">
              <span className="inline-flex items-center gap-2 bg-white px-6 py-2 rounded-full text-sm font-medium shadow-sm">
                TRY FIRST TOUCH FOR FREE
              </span>
            </div>

            {/* Main heading */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-6xl font-medium text-[#333333] leading-tight">
                Create <span className="font-serif italic text-[#333333]">connection</span>.<br />
                not just <span className="font-serif italic text-[#666666]">contact</span>.
              </h1>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button className="bg-[#3e5c45] hover:bg-[#2e4c35] text-white rounded-full px-8 py-6 h-auto font-medium min-w-[180px] text-base">
                Sign up now
              </Button>
              <Button
                variant="outline"
                className="bg-white text-[#333333] hover:bg-gray-50 border border-gray-200 rounded-full px-8 py-6 h-auto font-medium min-w-[180px] text-base"
              >
                View pricing
              </Button>
            </div>

            {/* Person image on left */}
            <div className="flex justify-between items-center w-full max-w-3xl">
              <div className="relative w-32 h-32 md:w-40 md:h-40 overflow-hidden rounded-md">
                <div className="absolute inset-0 bg-[#e0ddd5] rounded-md"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-gray-400"
                  >
                    <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
                    <circle cx="9" cy="9" r="2"></circle>
                    <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path>
                  </svg>
                </div>
              </div>

              {/* Bottom text */}
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span>Get instant access</span>
                <span className="h-4 w-px bg-gray-300"></span>
                <span>No credit card needed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactSection
