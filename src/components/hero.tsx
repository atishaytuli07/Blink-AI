import Image from "next/image"
import { AudioWaveformIcon, Star } from "lucide-react"
import Header from "@/components/common/header"
import Footer from "@/components/common/footer"
import { CustomerMarquee } from "./marquee"

export default function Home() {
  return (
    <div className=" bg-[#F5F5EB] flex flex-col">
      <div className="mt-2 md:mt-4 container mx-auto">
        <Header />
      </div>

      <section className="container mx-auto px-4 pt-8 md:pt-16 pb-16 md:pb-24 flex-grow">
        {/* Mobile View */}
        <div className="md:hidden">
          {/* Heading */}
          <div className="text-center mb-8">
            <h1 className="font-bold text-4xl tracking-tight text-gray-900 mb-4">
              Ai made summaries
              <br />
              simple clear and smarter
            </h1>
          </div>

          {/* Phone Mockup - Larger on mobile */}
          <div className="relative mx-auto w-[85%] max-w-[350px] mb-12">
            <Image
              src="/blink1.png"
              alt="BLINK AI App Interface"
              width={600}
              height={600}
              className="mx-auto"
              priority
            />

            {/* Mobile floating elements */}
            <div className="absolute -top-16 -left-16 bg-white rounded-xl px-3 py-2 shadow-md">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-gray-200 mr-2 overflow-hidden">
                  <Image src="/img3.svg" alt="Clear" width={32} height={32} />
                </div>
                <div>
                  <div className="font-medium text-sm">Clear</div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 bg-white rounded-xl px-3 py-2 shadow-md">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-gray-200 mr-2 overflow-hidden">
                  <Image src="/img1.svg" alt="Smarter" width={32} height={32} />
                </div>
                <div>
                  <div className="font-medium text-sm">Smarter</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop View */}
        <div className="hidden md:block">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 mb-4">
              Ai made summaries
              <br />
              simple clear and smarter
            </h1>
          </div>

          {/* Floating Elements */}
          <div className="relative max-w-6xl mx-auto">
            <div className="absolute left-[22%] -top-20 z-10 w-60 sm:w-64 md:w-72 lg:w-[45rem] overflow-hidden">
              <Image
                src="/blink1.png"
                alt="BLINK AI App Interface"
                width={500}
                height={800}
                className="mx-auto"
                priority
              />
            </div>

            <div
              className="absolute top-0 left-0 transform -translate-y-1/2 hidden md:block"
              style={{ left: "7%", top: "5%" }}
            >
              <div className="bg-white rounded-xl px-4 py-3 shadow-lg transition-transform hover:scale-105">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-[#a8e0f0] mr-3 overflow-hidden flex items-center justify-center">
                    <Image src="/img3.svg" alt="Clear" width={48} height={48} />
                  </div>
                  <div>
                    <div className="font-medium">Clear</div>
                    <div className="text-xs text-gray-500">Clear and Simple</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute hidden lg:block left-[17%] top-24">
              <div className="bg-[#a8e0f0] rounded-full px-3 py-1 shadow-md flex items-center gap-1">
                <AudioWaveformIcon size={13} />
                <span className="text-xs font-medium">Just takes 0.02 sec</span>
              </div>
            </div>

            {/* PDF to Summary Card */}
            <div className="absolute hidden lg:block left-[11%] top-44">
              <div className="bg-white rounded-xl p-4 w-64 shadow-lg transition-transform hover:scale-105">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-1"
                    >
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                      <polyline points="14 2 14 8 20 8"></polyline>
                      <line x1="16" y1="13" x2="8" y2="13"></line>
                      <line x1="16" y1="17" x2="8" y2="17"></line>
                      <polyline points="10 9 9 9 8 9"></polyline>
                    </svg>
                    <span className="text-xs font-medium">PDF Summary</span>
                  </div>
                  <div className="bg-[#CCFF00] text-xs px-2 py-0.5 rounded-full">Blink AI</div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-3xl font-bold">PDF</div>
                  <div className="px-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </div>
                  <div className="text-3xl font-bold">SMRY</div>
                </div>
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <div>
                    <div>10:05</div>
                    <div>Very Long</div>
                  </div>
                  <div className="text-center">
                    <div>0.02s</div>
                  </div>
                  <div className="text-right">
                    <div>10:05</div>
                    <div>Clear & Short</div>
                  </div>
                </div>
                <div className="bg-[#CCFF00] text-center py-2 rounded-md text-sm font-medium mt-3 cursor-pointer hover:bg-[#b8e600] transition-colors">
                  Generate Now
                </div>
              </div>
            </div>

            {/* Easiness Level Slider */}
            <div className="absolute hidden lg:block top-24 right-7">
              <div className="bg-white rounded-xl p-4 w-64 shadow-lg transition-transform hover:scale-105">
                <div className="text-sm font-medium mb-3">Set the easiness level</div>
                <div className="flex justify-center mb-4">
                  <div className="flex space-x-2">
                    <div className="w-10 h-10 rounded-full bg-[#a8e0f0] flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-[#f8c3b9] flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect x="1" y="3" width="15" height="13"></rect>
                        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
                        <circle cx="5.5" cy="18.5" r="2.5"></circle>
                        <circle cx="18.5" cy="18.5" r="2.5"></circle>
                      </svg>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-[#d4c5f9] flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                        <line x1="12" y1="18" x2="12.01" y2="18"></line>
                      </svg>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-[#c2e7b9] flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                        <circle cx="8.5" cy="7" r="4"></circle>
                        <polyline points="17 11 19 13 23 9"></polyline>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="relative h-1 bg-gray-200 rounded-full mb-2">
                  <div className="absolute left-0 top-0 h-1 w-1/2 bg-[#CCFF00] rounded-full"></div>
                  <div className="absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-black rounded-full"></div>
                </div>
                <div className="flex justify-between text-xs text-gray-500">
                  <span>0.02s</span>
                  <span>0.2s</span>
                  <span>2.0s</span>
                </div>
              </div>
            </div>

            {/* Smarter Card */}
            <div className="absolute hidden lg:block top-72 right-6">
              <div className="bg-white rounded-xl px-4 py-3 shadow-lg transition-transform hover:scale-105">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-[#f8c3b9] mr-3 overflow-hidden flex items-center justify-center">
                    <Image src="/img1.svg" alt="Smarter" width={48} height={48} />
                  </div>
                  <div>
                    <div className="font-medium">Smarter</div>
                    <div className="text-xs text-gray-500">Smarter summaries</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section - Moved to bottom for both mobile and desktop */}
      <section className="bg-[#F5F5EB] py-6">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <div className="bg-white rounded-xl px-6 py-3 shadow-md flex items-center transition-transform hover:scale-105">
              <div className="flex gap-1 text-zinc-700 items-center">
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current stroke-current" />
                <div className="text-sm font-semibold ml-1 mr-2">4.7</div>
                <div className="text-gray-700">|</div>
                <div className="ml-2 text-gray-700 text-sm">12+ reviews</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CustomerMarquee />

    </div>
  )
}
