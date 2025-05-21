"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import CircularButton from "../circularbutton";
import Sparkle from "../icons/sparke";
import AngularBracket from "../icons/angular";
import { TextMarquee } from "../text-marquee";

const FeaturesSection = () => {
  const pillColors = ["bg-blue-400", "bg-[#CCFF00]", "bg-[#77C6B3]"];

  const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * pillColors.length);
    return pillColors[randomIndex];
  };

  const sectionRef = useRef(null);

  const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  const card3Ref = useRef(null);

  const communityGridRef = useRef(null);

  const isCard1InView = useInView(card1Ref, { once: true, amount: 0.3 });
  const isCard2InView = useInView(card2Ref, { once: true, amount: 0.3 });
  const isCard3InView = useInView(card3Ref, { once: true, amount: 0.3 });
  const isGridInView = useInView(communityGridRef, { once: true, amount: 0.3 });

  const quizOptionsRef = useRef(null);
  const isQuizOptionsInView = useInView(quizOptionsRef, {
    once: true,
    amount: 0.3,
  });

  const featureTagsRef = useRef(null);
  const isFeatureTagsInView = useInView(featureTagsRef, {
    once: true,
    amount: 0.3,
  });

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const gridContainerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.1,
      },
    },
  };

  const gridItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const quizOptionVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
      },
    }),
  };

  const tagContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.07,
      },
    },
  };

  const tagVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    },
  };

  const { scrollYProgress } = useScroll({
    target: sectionRef,
  });

  const xPosition = useTransform(scrollYProgress, [0, 1], ["0vh", "-130vh"]);

  return (
    <section
      ref={sectionRef}
      className="bg-white relative h-[300vh] flex flex-col"
    >
      <TextMarquee />
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <motion.div
          style={{ x: xPosition }}
          className="w-[250vh] flex justify-around items-center absolute left-0 p-12 text-black"
        >
          <div className="">
            <span className="inline-block text-orange-400 font-bold font-bm text-9xl rotate-[30deg]">
              <AngularBracket />
            </span>
            <h2 className="text-4xl font-bold leading-tight font-bm">
              What's is
              <br />
              the Blink Ai?
            </h2>
          </div>

          <motion.div
            ref={card1Ref}
            variants={cardVariants}
            initial="hidden"
            animate={isCard1InView ? "visible" : "hidden"}
            className="h-[60vh] w-[50vh] p-8 bg-[#212121] text-white border-none rounded-xl flex flex-col gap-3"
          >
            <h3 className="text-2xl font-bold font-bm mb-4">
              Smarter Learning, Powered by AI
            </h3>
            <p className="text-gray-300 text-base font-medium">
              Get crystal-clear takeaways from complex content in seconds. Our
              AI breaks down dense PDFs, research, and strategy docs into
              practical insights— tailored for marketers, strategists, and
              creators who want to move fast and think deeper.
            </p>
            <motion.div
              ref={featureTagsRef}
              variants={tagContainerVariants}
              initial="hidden"
              animate={isFeatureTagsInView ? "visible" : "hidden"}
              className="mt-6 flex flex-wrap gap-2"
            >
              {[
                "AI-Powered Summaries",
                "Hinglish + English",
                "Clarity-First Design",
                "Made for Creatives",
              ].map((tag) => (
                <motion.span
                  key={tag}
                  variants={tagVariants}
                  className={`px-3 py-1 rounded-lg text-md text-black font-medium ${getRandomColor()}`}
                >
                  {tag}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            ref={card2Ref}
            variants={cardVariants}
            initial="hidden"
            animate={isCard2InView ? "visible" : "hidden"}
            className="h-[60vh] w-[50vh] p-8 bg-[#212121] text-white border-none rounded-xl flex flex-col gap-3"
          >
            <h3 className="text-2xl font-bold font-bm mb-4">
              Lightning-fast Summaries
            </h3>
            <p className="text-gray-300 text-base font-medium">
              Blink AI delivers ultra-fast, clear, and concise summaries from
              any document or article, letting you grasp key insights instantly.
              Designed for busy professionals and learners, it cuts through the
              noise to bring you the core message — saving time while enhancing
              understanding.
            </p>
            <div className="mt-6 relative w-full flex items-center justify-center">
              <motion.div
                ref={communityGridRef}
                variants={gridContainerVariants}
                initial="hidden"
                animate={isGridInView ? "visible" : "hidden"}
                className="relative w-60 h-60 grid grid-cols-3"
              >
                <motion.div variants={gridItemVariants} className="relative">
                  <img
                    src="/05.svg"
                    alt="Community member"
                    className="w-20 h-20 rounded-full object-cover"
                  />
                </motion.div>
                <motion.div
                  variants={gridItemVariants}
                  className="flex items-center justify-center"
                >
                  <Sparkle fill="#FFD37D" width={35} height={35} />
                </motion.div>
                <motion.div variants={gridItemVariants} className="relative">
                  <img
                    src="/06.svg"
                    alt="Community member"
                    className="w-20 h-20 rounded-full object-cover"
                  />
                </motion.div>

                <motion.div
                  variants={gridItemVariants}
                  className="flex items-center justify-center"
                >
                  <Sparkle fill="#FFD37D" width={35} height={35} />
                </motion.div>
                <motion.div
                  variants={gridItemVariants}
                  className="flex items-center justify-center"
                >
                  <div className="relative w-20 h-20 rounded-full bg-[#CCFF00] flex items-center justify-center">
                    <img src="/eyes.gif" alt="" />
                  </div>
                </motion.div>
                <motion.div
                  variants={gridItemVariants}
                  className="flex items-center justify-center"
                >
                  <Sparkle fill="#FFD37D" width={35} height={35} />
                </motion.div>

                <motion.div variants={gridItemVariants} className="relative">
                  <img
                    src="/07.svg"
                    alt="Community member"
                    className="w-20 h-20 rounded-full object-cover"
                  />
                </motion.div>
                <motion.div
                  variants={gridItemVariants}
                  className="flex items-center justify-center"
                >
                  <Sparkle fill="#FFD37D" width={35} height={35} />
                </motion.div>
                <motion.div variants={gridItemVariants} className="relative">
                  <img
                    src="/08.svg"
                    alt="Community member"
                    className="w-20 h-20 rounded-full object-cover overflow-hidden"
                  />
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            ref={card3Ref}
            variants={cardVariants}
            initial="hidden"
            animate={isCard3InView ? "visible" : "hidden"}
            className="h-[60vh] w-[50vh] p-8 bg-[#212121] text-white border-none rounded-xl flex flex-col gap-3"
          >
            <h3 className="text-2xl font-bold font-bm mb-4">
              Beautiful Summary
            </h3>
            <p className="text-gray-300 mb-8 text-base font-medium">
              Instantly generate beautiful, simple, and clear summaries from
              long PDF files. Powered by AI, our summaries are designed to be
              smarter — helping you understand key points faster without losing
              context or depth.
            </p>
            <div className="relative">
              <motion.div
                ref={quizOptionsRef}
                className="space-y-3 font-medium text-lg"
              >
                <motion.div
                  custom={0}
                  variants={quizOptionVariants}
                  initial="hidden"
                  animate={isQuizOptionsInView ? "visible" : "hidden"}
                  className="bg-[#CCFF00] text-black px-6 py-2 rounded-lg w-3/4"
                >
                  Simple Summary
                </motion.div>
                <motion.div
                  custom={1}
                  variants={quizOptionVariants}
                  initial="hidden"
                  animate={isQuizOptionsInView ? "visible" : "hidden"}
                  className="bg-white text-black px-6 py-2 rounded-lg w-3/4"
                >
                  Clear Insights
                </motion.div>
                <motion.div
                  custom={2}
                  variants={quizOptionVariants}
                  initial="hidden"
                  animate={isQuizOptionsInView ? "visible" : "hidden"}
                  className="bg-[#CCFF00] text-black px-6 py-2 rounded-lg w-3/4"
                >
                  Smarter Takeaways
                </motion.div>
              </motion.div>

              <svg
                width="209"
                height="209"
                viewBox="0 0 209 209"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute right-0 top-1/2 -translate-y-1/2 w-48 h-48"
              >
                <path
                  d="M209 104.5C209 112.604 205.838 120.229 200.114 125.953L187.277 138.789V156.932C187.277 173.652 173.666 187.271 156.952 187.271H138.803L125.973 200.107C120.229 205.838 112.611 209 104.5 209C96.3895 209 88.7711 205.838 83.0337 200.101L70.2173 187.298H52.068C43.9574 187.298 36.3458 184.129 30.6084 178.412C24.871 172.661 21.7293 165.07 21.7293 156.959V138.796L8.89261 125.973C3.16197 120.229 0 112.604 0 104.5C0 96.3962 3.16197 88.7711 8.88587 83.0472L21.7225 70.2173V52.0747C21.7225 35.348 35.3345 21.736 52.0477 21.736H70.197L83.0404 8.89261C88.7711 3.16197 96.3895 0 104.5 0C112.611 0 120.229 3.16197 125.966 8.89935L138.783 21.7158H156.932C165.029 21.7158 172.654 24.871 178.385 30.5949C184.129 36.339 187.271 43.9507 187.271 52.0545V70.2038L200.107 83.0404C205.838 88.7711 209 96.3962 209 104.5Z"
                  fill="#FFFFFF"
                />
                <img src="/06.svg" alt="" className="z-20" />
                <defs>
                  <clipPath id="clip0_150_220">
                    <rect
                      width="76"
                      height="76"
                      fill="white"
                      transform="translate(66 66)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </motion.div>

          <CircularButton variant="yellow" foreground="black" size="lg" />
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
