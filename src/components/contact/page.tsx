
import React from 'react';
import { Button } from '@/components/ui/button';

const ContactSection = () => {
  return (
    <div className="bg-gradient-to-b from-blue-200 to-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row">
            {/* Left side with image space */}
            <div className="w-full md:w-2/5 mb-8 md:mb-0 flex justify-center md:justify-end pr-0 md:pr-8">
              {/* Image placeholder with improved styling */}
              <div className="relative w-72 h-72 overflow-hidden">
                <div className="absolute inset-0 bg-blue-50/50 border-2 border-blue-200 rounded-xl flex items-center justify-center transform transition-transform hover:scale-105 duration-300">
                  <div className="text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mx-auto mb-2 text-blue-300 opacity-60">
                      <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
                      <circle cx="9" cy="9" r="2"></circle>
                      <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path>
                    </svg>
                    <span className="text-blue-400 font-medium">Image space</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right side with content */}
            <div className="w-full md:w-3/5 text-left md:pl-8">
              <div className="mb-2">
                <span className="inline-flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-full text-sm font-medium shadow-sm">
                  <span className="text-blue-500 font-bold">#</span>
                  TRY FIRST TOUCH FOR FREE
                </span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-4 mt-6 text-gray-800">
                Create <span className="font-serif italic text-blue-600">connection</span>,<br/>
                not just <span className="font-serif italic text-gray-500">contact</span>.
              </h2>
              
              <p className="text-gray-600 my-6 max-w-xl">
                Experience First Touch and unlock the power of meaningful patient relationships. 
                Start your journey today with our free trial.
              </p>
              
              <div className="flex flex-col sm:flex-row items-start gap-4 mt-12">
                <Button className="bg-blue-800 hover:bg-blue-700 text-white rounded-full px-8 py-3 h-12 font-medium min-w-[180px] shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  Sign up now
                </Button>
                <Button variant="outline" className="bg-white text-gray-800 hover:bg-gray-100 border border-gray-200 rounded-full px-8 py-3 h-12 font-medium min-w-[180px] transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                  View pricing
                </Button>
              </div>
              
              <div className="flex flex-wrap items-center gap-4 md:gap-6 mt-8 text-sm text-gray-600">
                <span className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500">
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                  Get instant access
                </span>
                <span className="h-4 w-px bg-gray-300 hidden sm:block"></span>
                <span className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500">
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                  No credit card needed
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
