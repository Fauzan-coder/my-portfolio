"use client";
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface DynamicHeroSectionProps {
  scrollY?: number;
}

export default function DynamicHeroSection({ scrollY = 0 }: DynamicHeroSectionProps) {
  const [mounted, setMounted] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  
  // Array of professional titles/roles to cycle through
  const roles = [
    "Creative Developer",
    "Fullstack Engineer",
    "Web Craftsman",
    "Freelancer"
  ];

  useEffect(() => {
    // Mark component as mounted to avoid hydration mismatch
    setMounted(true);
    
    // Text cycling animation - only start after mounting
    const textInterval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 3000); // Change text every 3 seconds
    
    return () => clearInterval(textInterval);
  }, [roles.length]);

  // Generate particles with improved variety and enhanced glow
  const particles = Array.from({ length: 30 }).map((_, index) => ({
    id: index,
    size: 4 + (index % 10),
    top: `${(index * 7) % 100}%`,
    left: `${(index * 13) % 100}%`,
    duration: 15 + (index % 20),
    delay: index * 0.2,
    opacity: 0.2 + (index % 5) * 0.04, // Increased base opacity
    color: index % 3 === 0 ? 'rgba(186, 104, 200, 0.8)' : 'rgba(139, 92, 246, 0.8)' // Mix of purple shades
  }));

  // Animation variants for text elements
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
        damping: 10
      }
    }
  };

  // Text animation variants
  const textVariants = {
    enter: { y: 20, opacity: 0 },
    center: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    },
    exit: {
      y: -20,
      opacity: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className=" h-screen w-full flex items-center justify-center overflow-hidden bg-transparent relative">
      {/* Animated background with enhanced blur and glow effect */}
      <div className="absolute inset-0 z-0 bg-transparent"> 
        {mounted && particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: particle.opacity, scale: 1 }}
            transition={{ duration: 1.5, delay: particle.delay * 0.1 }}
            style={{
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              top: particle.top,
              left: particle.left,
              backgroundColor: particle.color,
              boxShadow: `0 0 ${particle.size * 3}px ${particle.size}px ${particle.color}`,
            }}
          />
        ))}
      </div>
      
      {/* Animated gradient overlay with slight glow */}
      <div 
        className="absolute inset-0 z-1 opacity-80 bg-gradient-radial from-transparent via-transparent to-black"
        style={{
          transform: mounted ? `translateY(${scrollY * 0.1}px)` : 'translateY(0px)',
        }}
      />
      
      {/* 3D grid effect with enhanced glow */}
      <div className="absolute inset-0 z-1 opacity-20">
        <div className="h-full w-full bg-grid-pattern" 
          style={{
            backgroundImage: 'linear-gradient(to right, rgba(139, 92, 246, 0.3) 1px, transparent 1px), linear-gradient(to bottom, rgba(139, 92, 246, 0.3) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
            transform: mounted ? `translateY(${scrollY * 0.05}px)` : 'translateY(0px)',
          }}
        />
      </div>

      {/* Main content */}
      <motion.div 
        className="relative z-10 w-full px-6 md:px-12 lg:px-24"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div 
          className="flex flex-col items-start max-w-6xl mx-auto space-y-6"
          style={{
            transform: mounted ? `translateY(${scrollY * -0.2}px)` : 'translateY(0px)',
          }}
        >
          <motion.h2 
            className="text-xl md:text-2xl font-medium text-purple-300 tracking-wider filter drop-shadow-lg"
            variants={itemVariants}
          >
            Hello, I&apos;m Fauzan
          </motion.h2>
          
          <div className="h-24 overflow-hidden">
            <motion.h1 
              key={currentTextIndex}
              className="text-5xl md:text-7xl lg:text-8xl font-bold text-left"
              initial="enter"
              animate="center"
              exit="exit"
              variants={textVariants}
            >
              <span className="bg-gradient-to-r from-purple-500 via-violet-500 to-fuchsia-400 bg-clip-text text-transparent inline-block filter drop-shadow-xl" style={{
                textShadow: '0 0 20px rgba(139, 92, 246, 0.8)'
              }}>
                {roles[currentTextIndex]}
              </span>
            </motion.h1>
          </div>
          
          <motion.p 
            className="text-lg md:text-xl max-w-2xl text-gray-300 leading-relaxed filter drop-shadow-md"
            variants={itemVariants}
          >
            Crafting stunning digital experiences that merge artistic vision with technical precision
          </motion.p>
          
          <motion.div 
            className="mt-8 flex space-x-4"
            variants={itemVariants}
          >
            <motion.a 
              href="#projects" 
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-violet-700 rounded-full font-medium text-white shadow-xl hover:shadow-purple-500/60 transition-all duration-300 flex items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              style={{
                boxShadow: '0 0 25px rgba(139, 92, 246, 0.5)'
              }}
            >
              View My Projects
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </motion.a>
            
            <motion.a 
              href="#contact" 
              className="px-8 py-4 border border-purple-500/50 text-purple-300 rounded-full font-medium hover:bg-purple-500/15 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              style={{
                boxShadow: '0 0 20px rgba(139, 92, 246, 0.3)'
              }}
            >
              Get in Touch
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator with enhanced glow */}
      <motion.div 
        className="absolute bottom-8 left-0 w-full flex justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1 }}
        style={{
          transform: mounted ? `translateY(${scrollY * -0.1}px)` : 'translateY(0px)',
        }}
      >
        <motion.div 
          className="w-8 h-12 border-2 border-purple-500/50 rounded-full flex justify-center p-2"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          style={{
            boxShadow: '0 0 15px rgba(139, 92, 246, 0.4)'
          }}
        >
          <div className="w-1 h-3 bg-purple-400 rounded-full" 
            style={{
              boxShadow: '0 0 10px rgba(139, 92, 246, 0.9)'
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}