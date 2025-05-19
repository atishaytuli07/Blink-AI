import React, { useRef } from "react"
import { Card } from "./ui/card"
import AngularBracket from "./icons/AngularBracket"
import Sparkle from "./icons/Sparkle"
import DiscordIcon from "./icons/DiscordIcon"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import CircularButton from "./CircularButton"

const FeaturesSection = () => {
  // Define a set of colors from our theme that work well for pills
  const pillColors = [
    "bg-blue-light",
    "bg-yellow-mango",
    "bg-[#77C6B3]"
  ]

  // Function to get a random color from our array
  const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * pillColors.length)
    return pillColors[randomIndex]
  }

  // References for our parallax container
  const sectionRef = useRef(null)
  
  // Card animation references
  const card1Ref = useRef(null)
  const card2Ref = useRef(null)
  const card3Ref = useRef(null)
  
  // Grid animation reference
  const communityGridRef = useRef(null)
  
  // Use InView hooks for each card
  const isCard1InView = useInView(card1Ref, { once: true, amount: 0.3 })
  const isCard2InView = useInView(card2Ref, { once: true, amount: 0.3 })
  const isCard3InView = useInView(card3Ref, { once: true, amount: 0.3 })
  const isGridInView = useInView(communityGridRef, { once: true, amount: 0.3 })

  // New ref for quiz options
  const quizOptionsRef = useRef(null)
  const isQuizOptionsInView = useInView(quizOptionsRef, { once: true, amount: 0.3 })

  // New ref for feature tags
  const featureTagsRef = useRef(null)
  const isFeatureTagsInView = useInView(featureTagsRef, { once: true, amount: 0.3 })

  // Card animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1] 
      }
    }
  }
  
  // Grid container animation variants
  const gridContainerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.1,
      }
    }
  }
  
  // Grid item animation variants
  const gridItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  // Quiz option animation variants
  const quizOptionVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1]
      }
    })
  }

  // Feature tags animation variants
  const tagContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.07
      }
    }
  }

  const tagVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        type: "spring",
        stiffness: 260,
        damping: 20
      }
    }
  }

  // Use the scroll hook from framer-motion to track scroll position
  const { scrollYProgress } = useScroll({
    target: sectionRef,
  })

  // Transform the scroll progress to horizontal movement
  const xPosition = useTransform(scrollYProgress, [0, 1], ["0vh", "-130vh"])

  return (
    <section
      ref={sectionRef}
      className='bg-black relative h-[300vh] flex flex-col'
    >
      {/* Sticky container to maintain position during scroll */}
      <div className='sticky top-0 h-screen flex items-center overflow-hidden'>
        {/* Title with fixed position */}
        <motion.div
          style={{ x: xPosition }}
          className='w-[300vh] h-screen flex justify-around items-center absolute left-0 p-16 text-white'
        >
          <div className=''>
            <span className='inline-block text-orange font-bold text-9xl rotate-[30deg]'>
              <AngularBracket />
            </span>
            <h2 className='text-7xl lg:text-9xl font-bold leading-tight'>
              What's in
              <br />
              the box?
            </h2>
          </div>
          {/* Feature Cards */}
          <motion.div
            ref={card1Ref}
            variants={cardVariants}
            initial="hidden"
            animate={isCard1InView ? "visible" : "hidden"}
            className='h-[70vh] w-[60vh] p-16 bg-[#212121] text-white border-none rounded-xl flex flex-col gap-3'
          >
            <h3 className='text-4xl font-bold mb-4'>Exclusive Content</h3>
            <p className='text-gray-300 text-xl font-medium'>
              Gain access to exclusive video tutorials structured into various
              modules that build upon each other. Each module also includes
              practice questions and weekly live doubt sessions along with live
              webinars.
            </p>
            <motion.div 
              ref={featureTagsRef}
              variants={tagContainerVariants}
              initial="hidden"
              animate={isFeatureTagsInView ? "visible" : "hidden"}
              className='mt-6 flex flex-wrap gap-2'
            >
              {[
                "Video tutorials",
                "Practice Questions",
                "JS Guides",
                "Webinars",
                "Doubt Sessions",
                "Exclusive content",
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
            className='h-[70vh] w-[60vh] p-16 bg-[#212121] text-white border-none rounded-xl flex flex-col gap-3'
          >
            <h3 className='text-4xl font-bold mb-4'>Private Community</h3>
            <p className='text-gray-300 text-xl font-medium'>
              Join a supportive and interactive community of fellow JavaScript
              developers on Discord
            </p>
            <div className='mt-6 relative w-full flex items-center justify-center'>
              {/* 3x3 Grid with Discord in center and alternating images/sparkles */}
              <motion.div 
                ref={communityGridRef}
                variants={gridContainerVariants}
                initial="hidden"
                animate={isGridInView ? "visible" : "hidden"}
                className='relative w-60 h-60 grid grid-cols-3'
              >
                {/* Top Row */}
                <motion.div variants={gridItemVariants} className='relative'>
                  <img
                    src="/lovable-uploads/dde4d0d8-ac1a-4071-b2cc-037a902d456f.png"
                    alt="Community member"
                    className='w-20 h-20 rounded-full object-cover'
                  />
                </motion.div>
                <motion.div variants={gridItemVariants} className='flex items-center justify-center'>
                  <Sparkle fill='#FFD37D' width={75} height={75} />
                </motion.div>
                <motion.div variants={gridItemVariants} className='relative'>
                  <img
                    src="/lovable-uploads/community-member-2.png"
                    alt="Community member"
                    className='w-20 h-20 rounded-full object-cover'
                  />
                </motion.div>

                {/* Middle Row */}
                <motion.div variants={gridItemVariants} className='flex items-center justify-center'>
                  <Sparkle fill='#FFD37D' width={75} height={75} />
                </motion.div>
                <motion.div variants={gridItemVariants} className='flex items-center justify-center'>
                  <div className='relative w-20 h-20 rounded-full bg-[#5865F2] flex items-center justify-center'>
                    <DiscordIcon className='text-white w-20 h-20' />
                  </div>
                </motion.div>
                <motion.div variants={gridItemVariants} className='flex items-center justify-center'>
                  <Sparkle fill='#FFD37D' width={75} height={75} />
                </motion.div>

                {/* Bottom Row */}
                <motion.div variants={gridItemVariants} className='relative'>
                  <img
                    src="/lovable-uploads/community-member-3.png"
                    alt="Community member"
                    className='w-20 h-20 rounded-full object-cover'
                  />
                </motion.div>
                <motion.div variants={gridItemVariants} className='flex items-center justify-center'>
                  <Sparkle fill='#FFD37D' width={75} height={75} />
                </motion.div>
                <motion.div variants={gridItemVariants} className='relative'>
                  <img
                    src="/lovable-uploads/community-member-4.png"
                    alt="Community member"
                    className='w-20 h-20 rounded-full object-cover'
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
            className='h-[70vh] w-[60vh] p-16 bg-[#212121] text-white border-none rounded-xl flex flex-col gap-3'
          >
            <h3 className='text-4xl font-bold mb-4'>Weekly Quizzes & Gifts</h3>
            <p className='text-gray-300 mb-8 text-xl font-medium'>
              Weekly quizzes to earn exclusive rewards and gifts to celebrate
              your progress.
            </p>
            <div className='relative'>
              {/* Option Bars - now animated */}
              <motion.div 
                ref={quizOptionsRef}
                className='space-y-3 font-medium text-lg'
              >
                <motion.div 
                  custom={0}
                  variants={quizOptionVariants}
                  initial="hidden"
                  animate={isQuizOptionsInView ? "visible" : "hidden"}
                  className='bg-[#70A2E1] text-black px-6 py-3 rounded-lg w-3/4'
                >
                  Option A
                </motion.div>
                <motion.div 
                  custom={1}
                  variants={quizOptionVariants}
                  initial="hidden"
                  animate={isQuizOptionsInView ? "visible" : "hidden"}
                  className='bg-[#FFBABA] text-black px-6 py-3 rounded-lg w-3/4'
                >
                  Option B
                </motion.div>
                <motion.div 
                  custom={2}
                  variants={quizOptionVariants}
                  initial="hidden"
                  animate={isQuizOptionsInView ? "visible" : "hidden"}
                  className='bg-[#FFD37D] text-black px-6 py-3 rounded-lg w-3/4'
                >
                  Option C
                </motion.div>
              </motion.div>

              {/* SVG Gift Badge */}
              <svg
                width='209'
                height='209'
                viewBox='0 0 209 209'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                className='absolute right-0 top-1/2 -translate-y-1/2 w-48 h-48'
              >
                <path
                  d='M209 104.5C209 112.604 205.838 120.229 200.114 125.953L187.277 138.789V156.932C187.277 173.652 173.666 187.271 156.952 187.271H138.803L125.973 200.107C120.229 205.838 112.611 209 104.5 209C96.3895 209 88.7711 205.838 83.0337 200.101L70.2173 187.298H52.068C43.9574 187.298 36.3458 184.129 30.6084 178.412C24.871 172.661 21.7293 165.07 21.7293 156.959V138.796L8.89261 125.973C3.16197 120.229 0 112.604 0 104.5C0 96.3962 3.16197 88.7711 8.88587 83.0472L21.7225 70.2173V52.0747C21.7225 35.348 35.3345 21.736 52.0477 21.736H70.197L83.0404 8.89261C88.7711 3.16197 96.3895 0 104.5 0C112.611 0 120.229 3.16197 125.966 8.89935L138.783 21.7158H156.932C165.029 21.7158 172.654 24.871 178.385 30.5949C184.129 36.339 187.271 43.9507 187.271 52.0545V70.2038L200.107 83.0404C205.838 88.7711 209 96.3962 209 104.5Z'
                  fill='#D9DFF8'
                />
                <g clipPath='url(#clip0_150_220)'>
                  <path
                    d='M68.375 86.1875L104 104L139.625 86.1875V124.188L104 142L68.375 124.188V86.1875Z'
                    fill='#DB5449'
                  />
                  <path
                    d='M68.375 89.75V100.853L103.881 118.25L139.625 100.794V89.75L104 107.206L68.375 89.75Z'
                    fill='#C54B42'
                  />
                  <path
                    d='M104 142V104L70.75 87.375H68.375V124.188L104 142Z'
                    fill='#D05045'
                  />
                  <path
                    d='M68.375 89.75V100.853L103.881 118.25L104 118.191V107.147V107.206L68.375 89.75Z'
                    fill='#BB483E'
                  />
                  <path
                    d='M66 84.9406L104 66L142 84.9406V87.4344L104 106.375L66 87.4937V84.9406Z'
                    fill='#EB6258'
                  />
                  <path
                    d='M125.791 71.9969C124.544 69.7406 121.872 68.375 118.725 68.375C111.541 68.375 106.494 75.0844 104 79.3594C101.506 75.0844 96.4 68.4344 89.275 68.4344C84.7031 68.4344 81.4375 71.225 81.4375 75.025C81.4375 81.7937 88.8594 86.1875 103.762 86.1875C118.666 86.1875 126.562 80.5469 126.562 75.0844C126.562 74.0156 126.325 72.9469 125.791 71.9969ZM90.8187 79.3C89.1562 78.1719 88.5625 76.925 88.5625 76.0938C88.5625 75.0844 89.5125 74.3125 90.8781 74.3125C94.0844 74.3125 96.6375 78.5281 98.0625 81.4375C94.3219 81.1406 92.125 80.1312 90.8187 79.3ZM117.181 79.3C115.875 80.1312 113.678 81.1406 109.938 81.4375C111.303 78.5281 113.856 74.3125 117.122 74.3125C118.487 74.3125 119.438 75.0844 119.438 76.0938C119.438 76.925 118.844 78.1719 117.181 79.3Z'
                    fill='#EFEFEF'
                  />
                  <path
                    d='M66 85L104 103.584L142 85V97.2906L103.881 115.875L66 97.2906V85Z'
                    fill='#E2574C'
                  />
                  <path
                    d='M118.25 98.2407V96.875L104 89.1563L89.75 96.875V98.2407L80.25 94.0844V92.1844L103.525 79.8938L104 80.1313L104.475 79.8938L127.75 92.125V94.025L118.25 98.2407Z'
                    fill='#EFEFEF'
                  />
                  <path
                    d='M118.25 96.875V134.816L127.75 130.066V92.125L118.25 96.875Z'
                    fill='#DCDCDC'
                  />
                  <path
                    d='M80.25 130.125L89.75 134.875V96.9344L80.25 92.125V130.125Z'
                    fill='#D1D1D1'
                  />
                </g>
                <defs>
                  <clipPath id='clip0_150_220'>
                    <rect
                      width='76'
                      height='76'
                      fill='white'
                      transform='translate(66 66)'
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </motion.div>

          <CircularButton variant='blue' foreground='white' size="lg" />
        </motion.div>
      </div>
    </section>
  )
}

export default FeaturesSection