import React from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const PricingCards = () => {
  return (
    <div className="relative w-full flex flex-col items-center justify-center px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-5xl font-bold font-bm text-black mb-4">
          Simple, Clear Pricing
        </h2>
        <p className="text-gray-600 text-lg">
          Choose the plan that suits your reading style best
        </p>
      </div>

      <div className="text-center z-20 mb-2">
        <span className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full text-sm font-medium">
          <span className="text-blue-400 font-bold font-bm">#</span>
          Instant summaries, all features included
        </span>
      </div>

      <div className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 relative">
        {/* Single PDF Plan */}
        <div className="bg-white rounded-3xl p-6 shadow-lg mt-10 md:mt-12">
          <div className="mb-6">
            <p className="text-gray-600 mb-1">Single PDF</p>
            <h3 className="text-3xl font-bold font-bm">₹20</h3>
          </div>

          <p className="text-gray-600 text-sm mb-6">
            One-time summary at the price of chips 🍟
          </p>

          <ul className="space-y-3 mb-8">
            <li className="flex items-start gap-2">
              <Check className="h-5 w-5 text-black mt-0.5" />
              <span>Summarize 1 PDF instantly</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="h-5 w-5 text-black mt-0.5" />
              <span>Smart, clear, and beautiful summary</span>
            </li>
          </ul>

          <Button className="w-full bg-gray-100 hover:bg-gray-200 text-black rounded-full py-6">
            Try Now
          </Button>
        </div>

        {/* Weekly Plan */}
        <div className="bg-white rounded-3xl p-6 shadow-lg relative md:-mt-6 border-2 border-black">
          <div className="mb-6">
            <p className="text-gray-600 mb-1">Weekly Plan</p>
            <div className="flex items-end gap-1">
              <h3 className="text-3xl font-bold font-bm">₹199</h3>
              <span className="text-gray-500 text-sm mb-1">/week</span>
            </div>
          </div>

          <p className="text-gray-600 text-sm mb-6">
            Great for students, researchers, and fast readers.
          </p>

          <ul className="space-y-3 mb-8">
            <li className="flex items-start gap-2">
              <Check className="h-5 w-5 text-black mt-0.5" />
              <span>Unlimited PDF summaries</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="h-5 w-5 text-black mt-0.5" />
              <span>Instant delivery</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="h-5 w-5 text-black mt-0.5" />
              <span>Clear, smart breakdowns</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="h-5 w-5 text-black mt-0.5" />
              <span>Support via WhatsApp & Email</span>
            </li>
          </ul>

          <Button className="w-full bg-black hover:bg-gray-800 text-white rounded-full py-6">
            Get Weekly Access
          </Button>
        </div>

        {/* Yearly Plan */}
        <div className="bg-white rounded-3xl p-6 shadow-lg mt-10 md:mt-12">
          <div className="mb-6">
            <p className="text-gray-600 mb-1">Monthly Plan</p>
            <h3 className="text-3xl font-bold font-bm">₹599</h3>
          </div>

          <p className="text-gray-600 text-sm mb-6">
            Best value for avid readers & lifelong learners.
          </p>

          <ul className="space-y-3 mb-8">
            <li className="flex items-start gap-2">
              <Check className="h-5 w-5 text-black mt-0.5" />
              <span>Unlimited summaries all year</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="h-5 w-5 text-black mt-0.5" />
              <span>Priority processing</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="h-5 w-5 text-black mt-0.5" />
              <span>Exclusive early features</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="h-5 w-5 text-black mt-0.5" />
              <span>Premium support</span>
            </li>
          </ul>

          <Button className="w-full bg-gray-100 hover:bg-gray-200 text-black rounded-full py-6">
            Upgrade to Pro
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PricingCards;
