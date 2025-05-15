import React from 'react';
import { Button } from "@/components/ui/button";
import ComparisonCard from '../components/comparisoncards';

const page = () => {
  return (
    <div className="min-h-screen blue-gradient-bg overflow-hidden">
      {/* Logo Section */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-white text-xl font-semibold">Letters</span>
          </div>
          <div className="flex items-center space-x-6">
            <span className="text-white text-sm hover:underline cursor-pointer">Use cases</span>
            <span className="text-white text-sm hover:underline cursor-pointer">Our Clients</span>
            <Button variant="outline" className="bg-white text-black hover:bg-gray-100 rounded-full px-4 py-2 text-sm font-medium">
              Sign up
            </Button>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="container mx-auto px-4 pb-24 pt-12 md:pt-20">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-8">
            Patients, not paperwork
          </h1>
          
          <div className="space-y-4 mb-12">
            <p className="text-white text-lg md:text-xl">
              Enjoy unlimited, gold-standard transcriptions.
            </p>
            <p className="text-white text-lg md:text-xl">
              Write letters instantly that sound like you.
            </p>
            <p className="text-white text-lg md:text-xl">
              Save 5+ hours weekly on paperwork.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button className="bg-black text-white hover:bg-gray-800 rounded-full px-6 py-6 h-12 font-medium">
              Sign up for free
            </Button>
            <Button variant="outline" className="bg-white text-black hover:bg-gray-100 rounded-full px-6 py-6 h-12 font-medium">
              Book a demo
            </Button>
          </div>
        </div>

        {/* Comparison Cards */}
        <ComparisonCard 
          beforeContent={
            <div className="h-32 flex items-center justify-center">
              <p className="text-gray-400 italic text-sm leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          }
          afterContent={
            <div className="h-32">
              <p className="text-gray-800 text-sm leading-relaxed">
                Dear Dr Turner,<br /><br />
                I had the pleasure of meeting Thomas Richards on October for an initial consultation.<br />
                Thomas is a 4-year-old boy with...
              </p>
            </div>
          }
        />
      </div>
    </div>
  )
}

export default page