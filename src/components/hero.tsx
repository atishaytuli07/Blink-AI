import React from "react";
import { Button } from "@/components/ui/button";
import ComparisonCard from "@/components/comparisoncards";

const Index = () => {
  return (
    <div className=" overflow-hidden">
      <div className="container mx-auto px-4 pb-24 pt-12 md:pt-44">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold max-w-lg mx-auto text-white mb-6">
            From PDF to Insight In a Blink.
          </h1>

          <div className="space-y-4 mb-10">
            <p className="text-white max-w-2xl mx-auto text-lg md:text-xl">
              Summarize long PDFs instantly with AI-powered clarity. Save hours,
              skip the fluff, and get beautiful, smart & simple summaries in seconds.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button className="bg-black text-white hover:bg-gray-800 rounded-full px-6 py-6 h-12 font-medium">
              Try Blink AI
            </Button>
            <Button
              variant="outline"
              className="bg-white text-black hover:bg-gray-100 rounded-full px-6 py-6 h-12 font-medium"
            >
              Watch Demo
            </Button>
          </div>
        </div>

        {/* Comparison Cards */}
        <ComparisonCard
          beforeContent={
            <div className="h-64 overflow-hidden px-4 flex items-center justify-center">
              <p className="text-gray-400 italic text-sm leading-relaxed font-script text-center">
                Chapter 4 explores the relationship between photosynthesis and
                cellular respiration in autotrophic organisms, emphasizing the
                complex interaction of chloroplast and mitochondrial functions.
                The Krebs cycle, glycolysis, and electron transport chain are
                examined in detail to show their roles in energy transfer...
                <br />
                <br />
                <span className="font-medium">
                (8 more pages of dense academic language)
                </span>
              </p>
            </div>
          }
          afterContent={
            <div className="h-64 overflow-hidden px-4">
              <p className="text-gray-800 text-sm leading-relaxed">
                ✅ Topic: Photosynthesis & Respiration in plants
                <br />
                ✅ Photosynthesis creates glucose using sunlight in chloroplasts
                🌿
                <br />
                ✅ Respiration breaks glucose into ATP inside mitochondria ⚡
                <br />
                ✅ Both processes work together to manage energy in plant cells
                <br />✅ Summary created from 12-page science chapter in
                seconds!
              </p>
            </div>
          }
        />
      </div>
    </div>
  );
};

export default Index;
