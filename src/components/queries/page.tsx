"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

type FaqItem = {
  question: string
  answer: string
}

const faqData: FaqItem[] = [
  {
    question: "Custom model for insights + creativity data (Effies + Cannes + more)",
    answer:
      "Our custom model analyzes award-winning campaigns from Effies, Cannes Lions, and other industry benchmarks to extract patterns and insights. This data powers our AI to generate creative strategies that have a higher likelihood of success based on historical performance.",
  },
  {
    question: "BYOD + Category + Consumer Data (open source + syndicated)",
    answer:
      "Bring Your Own Data (BYOD) capability allows you to integrate your proprietary data with our platform. We also incorporate category-specific trends and consumer behavior data from both open source and syndicated research to provide comprehensive market context for your strategies.",
  },
  {
    question: "Our proprietary algorithm that creates new recipes",
    answer:
      "Unlike generic AI tools, our algorithm specifically combines successful marketing patterns with your unique brand parameters to generate novel strategic approaches we call 'recipes.' These recipes are tailored combinations of messaging, channel strategy, and creative direction designed to achieve your specific marketing objectives.",
  },
  {
    question: "Nuanced refinement by experts (think Harvey AI for Marketing)",
    answer:
      "Our platform doesn't stop at algorithmic outputs. Every generated strategy is reviewed and refined by our team of marketing experts who bring human creativity and practical experience to the process. This human-in-the-loop approach ensures that all recommendations are not just data-driven but also practically implementable.",
  },
]

export default function QueriesPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Main Section */}
      <section className="container mx-auto px-4 py-12 md:py-24 relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row gap-8 md:gap-24 items-start">
          {/* Left Column - Heading */}
          <div className="w-full md:w-5/12">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-black leading-none">
              NOT JUST A
              <br />
              WRAPPER
            </h1>
          </div>

          {/* Right Column - FAQs */}
          <div className="w-full md:w-7/12 pt-12">
            <div className="space-y-8">
              {faqData.map((item, index) => (
                <div key={index} className="pb-6 border-b border-gray-200">
                  <button
                    className="flex justify-between items-center w-full text-left"
                    onClick={() => toggleFaq(index)}
                  >
                    <p className="text-xl text-black font-normal">{item.question}</p>
                    <ChevronDown
                      className={`h-5 w-5 ml-2 flex-shrink-0 transition-transform ${
                        openIndex === index ? "transform rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openIndex === index && (
                    <div className="mt-3 text-gray-600">
                      <p>{item.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Background Shapes */}
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute top-0 right-0 w-3/4 h-3/4 bg-pink-100 rounded-full transform translate-x-1/4 -translate-y-1/4"></div>
          <div className="absolute bottom-0 left-0 w-2/3 h-2/3 bg-pink-100 rounded-full transform -translate-x-1/4 translate-y-1/4"></div>
        </div>
      </section>
    </div>
  )
}
