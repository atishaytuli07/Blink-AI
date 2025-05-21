"use client";

import Image from "next/image";
import { AudioWaveformIcon, Star } from "lucide-react";
import { Zap, FileText, BookOpen, Brain } from "lucide-react";
import Header from "@/components/common/header";
import { motion } from "framer-motion";
import { useMediaQuery } from "@/hooks/use-mobile";

export default function Home() {
  // Check for tablet screen size
  const isTablet = useMediaQuery("(min-width: 768px) and (max-width: 1023px)");

  // Animation variants for floating elements
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 0 },
    visible: {
      opacity: 1,
      x: ({ xOffset }) => xOffset || 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <div className="h-screen overflow-hidden bg-[#F5F5EB] flex flex-col">
      <div className="mt-2 md:mt-4 container mx-auto">
        <Header />
      </div>

      <section className="container mx-auto px-4 pt-8 md:pt-12 lg:pt-16 pb-16 flex-grow">
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
          <motion.div
            className="relative mx-auto w-[90%] max-w-[380px] mb-16"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src="/blink1.png"
              alt="BLINK AI App Interface"
              width={700}
              height={700}
              className="mx-auto"
              priority
            />

            <motion.div
              className="absolute -top-12 -left-8 bg-white rounded-xl px-3 py-2 shadow-md"
              initial={{ opacity: 0, x: 0 }}
              animate={{ opacity: 1, x: -30 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-[#a8e0f0] mr-2 overflow-hidden flex items-center justify-center">
                  <Image src="/img3.svg" alt="Clear" width={40} height={40} />
                </div>
                <div>
                  <div className="font-medium">Clear</div>
                  <div className="text-xs text-gray-500">
                    Easy to understand
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="absolute -bottom-8 -right-4 bg-white rounded-xl px-3 py-2 shadow-md"
              initial={{ opacity: 0, x: 0 }}
              animate={{ opacity: 1, x: 30 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-[#f8c3b9] mr-2 overflow-hidden flex items-center justify-center">
                  <Image src="/img1.svg" alt="Smarter" width={40} height={40} />
                </div>
                <div>
                  <div className="font-medium">Smarter</div>
                  <div className="text-xs text-gray-500">
                    AI-powered & accurate
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 bg-[#a8e0f0] rounded-full px-3 py-1 shadow-md flex items-center gap-1"
              initial={{ opacity: 0, x: 0 }}
              animate={{ opacity: 1, x: 20 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              <AudioWaveformIcon size={13} />
              <span className="text-xs font-medium">Only 0.02 sec 🚀</span>
            </motion.div>
          </motion.div>
        </div>

        {/* Tablet View */}
        <div className="hidden md:block lg:hidden">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h1 className="text-5xl font-bold tracking-tight text-gray-900 mb-6">
              Ai made summaries
              <br />
              simple clear and smarter
            </h1>
          </div>

          {/* Main Content with Tablet Positioning */}
          <motion.div
            className="relative mx-auto"
            style={{ height: "650px" }}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Phone Image - Centered */}
            <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
              <Image
                src="/blink1.png"
                alt="BLINK AI App Interface"
                width={400}
                height={800}
                className="mx-auto"
                priority
              />
            </div>

            {/* Clear Card - Left Side */}
            <motion.div
              className="absolute left-[5%] top-[80px]"
              custom={{ xOffset: -50 }}
            >
              <div className="bg-white rounded-xl px-4 py-3 shadow-lg transition-transform hover:scale-105">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-[#a8e0f0] mr-3 overflow-hidden flex items-center justify-center">
                    <Image src="/img3.svg" alt="Clear" width={48} height={48} />
                  </div>
                  <div>
                    <div className="font-medium">Clear</div>
                    <div className="text-xs text-gray-500">
                      Easy to understand
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Just takes 0.02 sec Badge */}
            <motion.div
              className="absolute left-[10%] top-[180px]"
              custom={{ xOffset: -30 }}
            >
              <div className="bg-[#a8e0f0] rounded-full px-3 py-1 shadow-md flex items-center gap-1">
                <AudioWaveformIcon size={13} />
                <span className="text-xs font-medium">Only 0.02 sec 🚀</span>
              </div>
            </motion.div>

            {/* PDF to Summary Card */}
            <motion.div
              className="absolute left-[5%] top-[230px]"
              custom={{ xOffset: -50 }}
            >
              <div className="bg-white rounded-xl p-4 w-56 shadow-lg transition-transform hover:scale-105">
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
                    <span className="text-xs font-medium"> PDF Summary</span>
                  </div>
                  <div className="bg-yellow-300 text-xs px-2 py-0.5 rounded-full">
                    Blink AI
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold">PDF</div>
                  <div className="px-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
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
                  <div className="text-2xl font-bold">SMRY</div>
                </div>

                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <div>
                    <div>10:05</div>
                    <div>Full PDF</div>
                  </div>
                  <div className="text-center">
                    <div>0.02s</div>
                  </div>
                  <div className="text-right">
                    <div>10:05</div>
                    <div>Smart Summary</div>
                  </div>
                </div>

                <div className="bg-[#CCFF00] text-center py-2 rounded-md text-sm font-medium mt-3 cursor-pointer hover:bg-[#b8e600] transition-colors">
                  Try It Now
                </div>
              </div>
            </motion.div>

            {/* summary Level Slider */}
            <motion.div
              className="absolute right-[5%] top-[80px]"
              custom={{ xOffset: 50 }}
            >
              <div className="bg-white rounded-xl p-4 w-56 shadow-lg transition-transform hover:scale-105">
                <div className="text-sm font-medium mb-3">
                  Set the summary level
                </div>
                <div className="flex justify-center mb-4">
                  <div className="flex space-x-2">
                    <div className="w-10 h-10 rounded-full bg-[#a8e0f0] flex items-center justify-center">
                      <Zap className="w-4 h-4 text-black" />
                    </div>
                    <div className="w-10 h-10 rounded-full bg-[#f8c3b9] flex items-center justify-center">
                      <FileText className="w-4 h-4 text-black" />
                    </div>
                    <div className="w-10 h-10 rounded-full bg-[#d4c5f9] flex items-center justify-center">
                      <BookOpen className="w-4 h-4 text-black" />
                    </div>
                    <div className="w-10 h-10 rounded-full bg-[#c2e7b9] flex items-center justify-center">
                      <Brain className="w-4 h-4 text-black" />
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
            </motion.div>

            {/* Smarter Card */}
            <motion.div
              className="absolute right-[5%] top-[270px]"
              custom={{ xOffset: 50 }}
            >
              <div className="bg-white rounded-xl px-4 py-3 shadow-lg transition-transform hover:scale-105">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-[#f8c3b9] mr-3 overflow-hidden flex items-center justify-center">
                    <Image
                      src="/img1.svg"
                      alt="Smarter"
                      width={48}
                      height={48}
                    />
                  </div>
                  <div>
                    <div className="font-medium">Smarter</div>
                    <div className="text-xs text-gray-500">
                      AI-powered & accurate
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Trusted by section */}
            <motion.div
              className="absolute right-[10%] top-[370px]"
              custom={{ xOffset: 30 }}
            >
              <div className="bg-white rounded-xl px-6 py-3 shadow-md flex items-center transition-transform hover:scale-105">
                <div className="flex gap-1 text-zinc-700 items-center">
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current stroke-current" />
                  <div className="text-sm font-bold font-bm ml-1 mr-2">4.7</div>
                  <div className="text-gray-700">|</div>
                  <div className="ml-2 text-gray-700 text-sm">12+ reviews</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Desktop View */}
        <div className="hidden lg:block overflow-hidden">
          <div className="text-center max-w-4xl mx-auto mb-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 mb-4">
              Ai made summaries
              <br />
              simple clear and smarter
            </h1>
          </div>

          {/* Main Content with Proper Positioning */}
          <motion.div
            className="relative mx-auto"
            style={{ height: "600px" }}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Phone Image - Centered */}
            <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
              <Image
                src="/blink1.png"
                alt="BLINK AI App Interface"
                width={470}
                height={940}
                className="mx-auto"
                priority
              />
            </div>

            {/* Clear Card - Left Side */}
            <motion.div
              className="absolute left-[15%] top-[50px]"
              custom={{ xOffset: -50 }}
            >
              <div className="bg-white rounded-xl px-4 py-3 shadow-lg transition-transform hover:scale-105">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-[#a8e0f0] mr-3 overflow-hidden flex items-center justify-center">
                    <Image src="/img3.svg" alt="Clear" width={48} height={48} />
                  </div>
                  <div>
                    <div className="font-medium">Clear</div>
                    <div className="text-xs text-gray-500">
                      Easy to understand
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Just takes 0.02 sec Badge */}
            <motion.div
              className="absolute left-[25%] top-[150px]"
              custom={{ xOffset: -30 }}
            >
              <div className="bg-[#a8e0f0] rounded-full px-3 py-1 shadow-md flex items-center gap-1">
                <AudioWaveformIcon size={13} />
                <span className="text-xs font-medium">Only 0.02 sec 🚀</span>
              </div>
            </motion.div>

            {/* PDF to Summary Card */}
            <motion.div
              className="absolute left-[15%] top-[200px]"
              custom={{ xOffset: -50 }}
            >
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
                  <div className="bg-yellow-300 text-xs px-2 py-0.5 rounded-full">
                    Blink AI
                  </div>
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
            </motion.div>

            {/* summary Level Slider */}
            <motion.div
              className="absolute right-[15%] top-[100px]"
              custom={{ xOffset: 50 }}
            >
              <div className="bg-white rounded-xl p-4 w-64 shadow-lg transition-transform hover:scale-105">
                <div className="text-sm font-medium mb-3">
                  Set the summary level
                </div>
                <div className="flex justify-center mb-4">
                  <div className="flex space-x-2">
                    <div className="w-10 h-10 rounded-full bg-[#a8e0f0] flex items-center justify-center">
                      <Zap className="w-4 h-4 text-black" />
                    </div>
                    <div className="w-10 h-10 rounded-full bg-[#f8c3b9] flex items-center justify-center">
                      <FileText className="w-4 h-4 text-black" />
                    </div>
                    <div className="w-10 h-10 rounded-full bg-[#d4c5f9] flex items-center justify-center">
                      <BookOpen className="w-4 h-4 text-black" />
                    </div>
                    <div className="w-10 h-10 rounded-full bg-[#c2e7b9] flex items-center justify-center">
                      <Brain className="w-4 h-4 text-black" />
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
            </motion.div>

            {/* Smarter Card */}
            <motion.div
              className="absolute right-[15%] top-[270px]"
              custom={{ xOffset: 50 }}
            >
              <div className="bg-white rounded-xl px-4 py-3 shadow-lg transition-transform hover:scale-105">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-[#f8c3b9] mr-3 overflow-hidden flex items-center justify-center">
                    <Image
                      src="/img1.svg"
                      alt="Smarter"
                      width={48}
                      height={48}
                    />
                  </div>
                  <div>
                    <div className="font-medium">Smarter</div>
                    <div className="text-xs text-gray-500">
                      AI-powered & accurate
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Trusted by section */}
            <motion.div
              className="absolute right-[20%] top-[370px]"
              custom={{ xOffset: 30 }}
            >
              <div className="bg-white rounded-xl px-6 py-3 shadow-md flex items-center transition-transform hover:scale-105">
                <div className="flex gap-1 text-zinc-700 items-center">
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current stroke-current" />
                  <div className="text-sm font-bold font-bm ml-1 mr-2">4.7</div>
                  <div className="text-gray-700">|</div>
                  <div className="ml-2 text-gray-700 text-sm">12+ reviews</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
