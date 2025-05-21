"use client";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=20&width=20')] bg-repeat opacity-5"></div>

      <div className="absolute top-24 left-24 hidden md:block">
        <div className="relative">
          <div className="font-handwritten text-gray-500 text-xl rotate-[-5deg]">
            Interested?
            <br />- anyone
          </div>
        </div>
      </div>
      <div className="absolute bottom-24 right-24 hidden md:block">
        <div className="relative">
          <div className="font-handwritten text-gray-500 text-xl rotate-[-5deg]">
            Want to become?
            <br />- smater
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center">            <div className="mb-8">
              <span className="inline-flex items-center gap-2 bg-white px-6 py-2 rounded-full text-sm font-medium shadow-sm">
                TRY BLINK AI TODAY
              </span>
            </div>

            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-6xl font-medium text-[#333333] leading-tight">
                Read Beatiful{" "}
                <span className="font-serif italic text-[#666666]">
                  {" "}
                  Summaries
                </span>
                .<br />
                not just{" "}
                <span className="font-serif italic text-[#666666]">
                  whole
                </span>{" "}
                PDFs.
              </h1>
            </div>

            <div className="flex justify-center items-center w-full max-w-3xl">
              <div className="relative w-64 overflow-hidden rounded-md">
                <img
                  src="https://cdn.prod.website-files.com/6729ec93314d1a742cfeb184/6729ec93314d1a742cfeb217_hi-hello%202.gif"
                  alt=""
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-12">
              <Button className="bg-[#CCFF00] text-black rounded-full px-2 py-2 font-medium min-w-[160px] text-base">
                Sign up now
              </Button>
              <Button
                variant="outline"
                className="bg-white text-[#333333] hover:bg-gray-50 border border-gray-200 rounded-full px-2 py-2 font-medium min-w-[160px] text-base"
              >
                View pricing
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
