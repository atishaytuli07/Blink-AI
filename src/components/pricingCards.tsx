import React from 'react';
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const PricingCards = () => {
  return (
    <div className="relative min-h-screen w-full bg-gradient-to-b from-blue-300 to-blue-200 flex flex-col items-center justify-center px-4 py-16">
      {/* Heading Section */}
      <div className="text-center mb-12">
        <h2 className="text-5xl font-bold text-white mb-4">Flexible pricing</h2>
        <div className="inline-flex items-center bg-white/30 rounded-full px-4 py-1">
          <span className="text-white/70 px-4 py-1">Monthly</span>
          <span className="bg-white text-blue-600 px-4 py-1 rounded-full">Yearly</span>
        </div>
      </div>
      
      {/* All Features Banner */}
      <div className="text-center mb-8">
        <span className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full text-sm font-medium">
          <span className="text-blue-400 font-bold">#</span>
          All features included
        </span>
      </div>
      
      {/* Pricing Cards Container with position adjustments */}
      <div className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 relative">
        {/* Free Plan - Lowered */}
        <div className="bg-white rounded-3xl p-6 shadow-lg mt-10 md:mt-12">
          <div className="mb-6">
            <p className="text-gray-600 mb-1">Letters Basic</p>
            <h3 className="text-3xl font-bold">Free</h3>
          </div>
          
          <p className="text-gray-600 text-sm mb-6">For solo doctors and small practices.</p>
          
          <ul className="space-y-3 mb-8">
            <li className="flex items-start gap-2">
              <Check className="h-5 w-5 text-black mt-0.5" />
              <span>3 transcriptions a day</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="h-5 w-5 text-black mt-0.5" />
              <span>3 letters a day</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="h-5 w-5 text-black mt-0.5" />
              <span>1 type of personalised letter</span>
            </li>
          </ul>
          
          <Button className="w-full bg-gray-100 hover:bg-gray-200 text-black rounded-full py-6">
            Sign up for free
          </Button>
        </div>
        
        {/* Pro Plan - Taller */}
        <div className="bg-white rounded-3xl p-6 shadow-lg relative md:-mt-6">
          <div className="mb-6">
            <p className="text-gray-600 mb-1">Letters Pro</p>
            <div className="flex items-end gap-1">
              <h3 className="text-3xl font-bold">$66</h3>
              <span className="text-gray-500 text-sm mb-1">/month</span>
            </div>
          </div>
          
          <p className="text-gray-600 text-sm mb-6">Ideal for medium-sized practices.</p>
          
          <ul className="space-y-3 mb-8">
            <li className="flex items-start gap-2">
              <Check className="h-5 w-5 text-black mt-0.5" />
              <span>Unlimited transcriptions</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="h-5 w-5 text-black mt-0.5" />
              <span>Unlimited letters</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="h-5 w-5 text-black mt-0.5" />
              <span>AI assistant</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="h-5 w-5 text-black mt-0.5" />
              <span>Practices: <strong>$60</strong>/user</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="h-5 w-5 text-black mt-0.5" />
              <span>Priority support</span>
            </li>
          </ul>
          
          <p className="text-xs text-center text-gray-400 mb-4">No credit card required</p>
          
          <Button className="w-full bg-black hover:bg-gray-800 text-white rounded-full py-6">
            Start 2-week free trial
          </Button>
        </div>
        
        {/* Enterprise Plan - Lowered */}
        <div className="bg-white rounded-3xl p-6 shadow-lg mt-10 md:mt-12">
          <div className="mb-6">
            <p className="text-gray-600 mb-1">Letters Enterprise</p>
            <h3 className="text-3xl font-bold">Custom</h3>
          </div>
          
          <p className="text-gray-600 text-sm mb-6">For large practices and clinics.</p>
          
          <ul className="space-y-3 mb-8">
            <li className="flex items-start gap-2">
              <Check className="h-5 w-5 text-black mt-0.5" />
              <span>Flexible pricing</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="h-5 w-5 text-black mt-0.5" />
              <span>Custom features</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="h-5 w-5 text-black mt-0.5" />
              <span>Custom integrations</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="h-5 w-5 text-black mt-0.5" />
              <span>Priority support</span>
            </li>
          </ul>
          
          <Button className="w-full bg-gray-100 hover:bg-gray-200 text-black rounded-full py-6">
            Book a discovery call
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PricingCards;