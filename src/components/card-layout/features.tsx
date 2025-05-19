import Link from "next/link"
import { ArrowRight, Instagram, ExternalLink, RotateCw, LightbulbIcon } from "lucide-react"
import Image from "next/image"

export default function FeaturesPage() {
  return (
    <div>
      <section className="container bg-white mx-auto px-4 py-12 md:py-24">
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start">
          {/* Left Column */}
          <div className="w-full md:w-5/12">
            <div className="inline-block bg-[#FFEB3B] rounded-full px-4 py-2 mb-6">
              <span className="font-bold text-black">CREATIVE AI</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-black mb-6 leading-tight">
              Create best in class
              <br />
              Ad Campaigns in
              <br />
              minutes
            </h1>

            <p className="text-base text-gray-800 mb-8">
              This is a Creative Jamming Tool that generates epic ads that can be benchmarked against the best. Our
              algorithm is a unique cocktail of behavioural design data, Effies & Cannes case studies along with other
              secret ingredients that churn out BIG Ideas that are effective and deliver a better ROAS. All you have to
              do is enter the brief and sample freshly squeezed ideas in minutes.
            </p>

          </div>

          {/* Right Column */}
          <div className="w-full md:w-7/12 relative">
            <div className="bg-[#FFEB3B] rounded-3xl p-8 relative overflow-hidden">
            <Image></Image>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
