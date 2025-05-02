"use client";
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface DynamicHeroSectionProps {
  scrollY?: number;
}

export default function DynamicHeroSection({ scrollY = 0 }: DynamicHeroSectionProps) {
  // Add CSS animation for gradient
  useEffect(() => {
    if (typeof document !== 'undefined') {
      const style = document.createElement('style');
      style.innerHTML = `
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        @keyframes buttonGradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `;
      document.head.appendChild(style);
      return () => {
        document.head.removeChild(style);
      };
    }
  }, []);
  
  const [mounted, setMounted] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  
  const roles = [
    "Creative Developer",
    "Fullstack Engineer",
    "Web Craftsman",
    "Freelancer"
  ];

  useEffect(() => {
    setMounted(true);
    
    const textInterval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 3000);
    
    return () => clearInterval(textInterval);
  }, [roles.length]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        mass: 0.5
      }
    }
  };

  interface TextAnimationVariants {
    [key: string]: { y: number; opacity: number; transition?: { duration: number; ease: string } };
    enter: { y: number; opacity: number };
    center: { y: number; opacity: number; transition: { duration: number; ease: string } };
    exit: { y: number; opacity: number; transition: { duration: number; ease: string } };
  }

  const textVariants: TextAnimationVariants = {
    enter: { y: 20, opacity: 0 },
    center: {
      y: 0,
      opacity: 1,
      transition: { 
        duration: 0.5,
        ease: "easeOut"
      }
    },
    exit: {
      y: -20,
      opacity: 0,
      transition: { 
        duration: 0.5,
        ease: "easeIn"
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: 0.4
      }
    }
  };

  return (
    <section 
      className="min-h-screen w-full flex items-center justify-center overflow-hidden bg-white relative py-5 sm:py-5 pt-20 sm:pt-5 -mt-7"
      aria-label="Hero Section"
    >
      <motion.div 
        className="relative z-10 w-full max-w-7xl px-4 sm:px-6 md:px-8 lg:px-12 mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex flex-col md:flex-row items-center justify-between w-full mx-auto gap-8">
          {/* Left Side - Text Content */}
          <motion.div 
            className="flex flex-col items-start justify-center w-full md:w-1/2 space-y-6"
            style={{
              transform: mounted ? `translateY(${scrollY * -0.2}px)` : 'translateY(0px)',
            }}
          >
            <motion.h2 
              className="text-xl md:text-2xl font-medium text-black tracking-wider w-full"
              variants={itemVariants}
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Hello, I&apos;m Fauzan
            </motion.h2>
            
            <div className="w-full h-auto overflow-visible" aria-live="polite">
              <motion.h1 
                key={currentTextIndex}
                className="text-5xl md:text-7xl lg:text-8xl font-bold text-left bg-clip-text text-transparent w-full break-words"
                initial="enter"
                animate="center"
                exit="exit"
                variants={textVariants}
                style={{ 
                  fontFamily: "'Anton', sans-serif",
                  background: "linear-gradient(90deg, #000000, #1f2937, #000000, #4b5563, #000000, #1f2937)",
                  backgroundSize: "400% 100%",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  animation: "gradient 8s linear infinite"
                }}
              >
                {roles[currentTextIndex]}
              </motion.h1>
            </div>
            
            <motion.p 
              className="text-lg md:text-xl w-full text-black leading-relaxed"
              variants={itemVariants}
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Crafting stunning digital experiences that merge artistic vision with technical precision
            </motion.p>
            
            <motion.div 
              className="mt-8 flex flex-wrap gap-4 w-full"
              variants={itemVariants}
            >
              <motion.a 
                href="#projects" 
                className="px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium text-black border-2 border-black transition-all duration-300 flex items-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                style={{ 
                  fontFamily: "'Poppins', sans-serif",
                  background: "linear-gradient(90deg, #ffffff, #f3f4f6, #ffffff)",
                  backgroundSize: "200% 100%",
                  animation: "buttonGradient 5s ease infinite"
                }}
                aria-label="View my projects"
              >
                View My Projects
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </motion.a>
              
              <motion.a 
                href="#contact" 
                className="px-8 py-4 bg-black text-white rounded-full font-medium border-2 border-black hover:bg-white hover:text-black transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                style={{ fontFamily: "'Poppins', sans-serif" }}
                aria-label="Get in touch"
              >
                Get in Touch
              </motion.a>
            </motion.div>
          </motion.div>
          
          {/* Right Side - Card with SVGs */}
          <motion.div 
            className="w-full md:w-2/5"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200 relative overflow-hidden">
              {/* Code SVG */}
              <motion.div 
                className="absolute top-10 right-10"
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              >
                <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 10L4 14L8 18" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 10L20 14L16 18" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M14 8L10 20" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </motion.div>
              
              {/* Money SVG */}
              <motion.div 
                className="absolute bottom-10 left-10"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
              >
                <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 9H3C6 9 7 8 7 5V4" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M22 9H21C18 9 17 8 17 5V4" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 15H3C6 15 7 16 7 19V20" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M22 15H21C18 15 17 16 17 19V20" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </motion.div>
              
              {/* Additional decorative elements */}
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-gray-100 rounded-full opacity-20"></div>
              <div className="absolute -bottom-20 -right-10 w-60 h-60 bg-gray-100 rounded-full opacity-30"></div>
              
              {/* Card content - center illustration */}
              <div className="flex justify-center items-center h-64 md:h-80">
                <motion.div 
                  className="w-32 h-32 rounded-full bg-gray-50 flex items-center justify-center"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ repeat: Infinity, duration: 3 }}
                >
                  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.67188 14.3298C8.67188 15.6198 9.66188 16.6598 10.8919 16.6598H13.4019C14.4719 16.6598 15.3419 15.7498 15.3419 14.6298C15.3419 13.4098 14.8119 12.9798 14.0219 12.6998L9.99187 11.2998C9.20187 11.0198 8.67188 10.5898 8.67188 9.36984C8.67188 8.24984 9.54187 7.33984 10.6119 7.33984H13.1219C14.3519 7.33984 15.3419 8.37984 15.3419 9.66984" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 6V18" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <motion.div 
        className="absolute bottom-8 left-0 w-full flex justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1 }}
        style={{
          transform: mounted ? `translateY(${scrollY * -0.1}px)` : 'translateY(0px)',
        }}
        aria-hidden="true"
      >
        <motion.div 
          className="w-8 h-12 border-2 border-black rounded-full flex justify-center p-2"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <div className="w-1 h-3 bg-black rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}