
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

type CircularButtonProps = {
  variant?: 'yellow' | 'blue';
  foreground?: 'white' | 'black';
  size?: 'sm' | 'md' | 'lg';
};

const CircularButton: React.FC<CircularButtonProps> = ({ 
  variant = 'yellow', 
  foreground = 'black',
  size = 'md' 
}) => {
  // Reference for the animation trigger
  const buttonRef = useRef(null);
  const isInView = useInView(buttonRef, { once: true, amount: 0.3 });
  
  const bgColorClass = variant === 'blue' 
    ? "bg-[#3658D3] hover:bg-[#3658D3]/90" 
    : "bg-[#CCFF00] hover:bg-[#CCFF00]/90";
    
  const textColorClass = foreground === 'white' ? 'text-white' : 'text-black';
  
  // Size classes for the main container
  const sizeClasses = {
    sm: 'w-20 h-20',
    md: 'w-32 h-32',
    lg: 'w-40 h-40',
  }[size];
  
  // Size classes for the SVG icon
  const iconSizeClasses = {
    sm: 'w-5 h-5',
    md: 'w-7 h-7',
    lg: 'w-9 h-9',
  }[size];
  
  // Font size classes for the text
  const textSizeClasses = {
    sm: 'text-[10px]',
    md: 'text-[12px]',
    lg: 'text-[14px]',
  }[size];

  // Animation variants for pop-in effect
  const popInVariants = {
    hidden: { 
      scale: 0,
      opacity: 0,
      rotate: -90
    },
    visible: { 
      scale: 1,
      opacity: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
        duration: 0.7
      }
    }
  };

  return (
    <motion.div 
      ref={buttonRef}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={popInVariants}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`group relative ${sizeClasses} cursor-pointer`}
    >
      <div className={`absolute inset-0 ${bgColorClass} transition-colors rounded-full`}>
        {/* Center Icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <svg width="28" height="28" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${textColorClass} ${iconSizeClasses}`}>
            <g clipPath="url(#clip0_179_329)">
              <path d="M6.6084 24.5003H12.5723" stroke="currentColor" strokeWidth="2.38554" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M24.5 6.60876V12.5726" stroke="currentColor" strokeWidth="2.38554" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M16.1504 16.1511L11.7769 11.7776" stroke="currentColor" strokeWidth="2.38554" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M32.8496 16.1511L37.2231 11.7776" stroke="currentColor" strokeWidth="2.38554" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M16.1504 32.8501L11.7769 37.2236" stroke="currentColor" strokeWidth="2.38554" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M24.5 24.5003L42.3916 30.4642L34.4398 34.4401L30.4639 42.3919L24.5 24.5003Z" stroke="currentColor" strokeWidth="2.38554" strokeLinecap="round" strokeLinejoin="round"/>
            </g>
            <defs>
              <clipPath id="clip0_179_329">
                <rect width="47.7108" height="47.7108" fill="white" transform="translate(0.644531 0.644531)"/>
              </clipPath>
            </defs>
          </svg>
        </div>
        
        {/* Curved Text */}
        <svg className={`absolute inset-0 w-full h-full ${textColorClass}`} viewBox="0 0 100 100">
          {/* Updated path with larger radius (from 32 to 34) to position text */}
          <path id="curve" fill="none" d="M 50,50 m -34,0 a 34,34 0 1,1 68,0 a 34,34 0 1,1 -68,0" />
          <text className={`${textSizeClasses} uppercase font-bm fill-current p-2`}>
            <textPath href="#curve" startOffset="5%">
             • Blink AI • Blink Ai  • Blink AI • Blink Ai •
            </textPath>
          </text>
        </svg>
      </div>
    </motion.div>
  );
};

export default CircularButton;