import Link from "next/link"
import Image from "next/image"
import { ArrowRight} from "lucide-react"

export default function EcommercePage() {
  return (
    <div>

      {/* E-Commerce AI Section */}
      <section className="container bg-white mx-auto px-4 py-12 md:py-24">
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start">
          {/* Right Column */}
          <div className="w-full md:w-7/12 relative">
            <div className="bg-[#FFEB3B] rounded-3xl p-8 relative overflow-hidden">
            <Image></Image>
            </div>
          </div>

                    {/* Left Column */}
          <div className="w-full md:w-5/12">
            <div className="inline-block bg-[#9C6AFF] rounded-full px-4 py-2 mb-6">
              <span className="font-bold text-white">E-COMMERCE AI</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-black mb-6 leading-tight">
              Improve conversion
              <br />
              rates of your product
              <br />
              page on Amazon
            </h1>

            <p className="text-base text-gray-800 mb-8">
              This tool improves your ecommerce PDP conversion rate by boosting discovery and persuasion of the text and
              visual content on Amazon & on your D2C website. We've just helped a global CPG brand make an incremental
              sale of $11000 in one month on a single SKU!
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
