"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

type FaqItem = {
  question: string;
  answer: string;
};

const faqData: FaqItem[] = [
  {
    question: "What is the custom model trained on?",
    answer:
      "It’s trained on award-winning campaigns like Effies and Cannes to uncover patterns that inspire smarter, high-performing ideas.",
  },
  {
    question: "Can I use my own data?",
    answer:
      "Yes! You can bring your own data (BYOD), and we blend it with category trends and consumer insights for deeper context.",
  },
  {
    question: "How does the AI generate strategies?",
    answer:
      "Our proprietary algorithm creates tailored 'recipes' — unique mixes of messages, channels, and creative angles just for your brand.",
  },
  {
    question: "Is there expert input involved?",
    answer:
      "Absolutely. Marketing experts review and fine-tune every AI suggestion so it’s both smart and usable — like Harvey AI, but for marketers.",
  },
];

export default function QueriesPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className=" bg-white">
      <section className="max-w-7xl mx-auto px-4 py-12 md:py-24 relative overflow-hidden">
        <div className="relative z-10 flex flex-col gap-8 md:gap-24 items-start">
          <div className="w-full">
            <h1 className="text-5xl font-bm font-semibold text-black leading-none">
              We are Not Just a Simple
              <br />
              PDF Summarizer.
            </h1>
          </div>

          <div className="w-full flex">
            <div className="hidden md:block w-1/2"></div>
            <div className="w-full md:w-1/2 space-y-8">
              {faqData.map((item, index) => (
                <div key={index} className="pb-4 border-b border-gray-200">
                  <button
                    className="flex justify-between items-center w-full text-left"
                    onClick={() => toggleFaq(index)}
                  >
                    <p className="text-base text-black font-normal">
                      {item.question}
                    </p>
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

        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute top-0 right-0 w-3/4 h-3/4 bg-pink-100 rounded-full transform translate-x-1/4 -translate-y-1/4"></div>
          <div className="absolute bottom-0 left-0 w-2/3 h-2/3 bg-pink-100 rounded-full transform -translate-x-1/4 translate-y-1/4"></div>
        </div>
      </section>
    </div>
  );
}
