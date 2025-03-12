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
  ];

  useEffect(() => {
    // Mark component as mounted to avoid hydration mismatch
    setMounted(true);
    
    // Text cycling animation - only start after mounting
    const textInterval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 3000); // Change text every 3 seconds
    
    return () => clearInterval(textInterval);
  }, []);

  // Generate particles with improved variety
  const particles = Array.from({ length: 20 }).map((_, index) => ({
    id: index,
    size: 4 + (index % 8),
    top: `${(index * 7) % 100}%`,
    left: `${(index * 13) % 100}%`,
    duration: 15 + (index % 15),
    delay: index * 0.2,
    opacity: 0.1 + (index % 5) * 0.02
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
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-transparent">
      {/* Animated background with blur effect */}
      <div className="absolute inset-0 z-0 bg-transparent">
        {mounted && particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-green-500"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: particle.opacity, scale: 1 }}
            transition={{ duration: 1.5, delay: particle.delay * 0.1 }}
            style={{
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              top: particle.top,
              left: particle.left,
              boxShadow: `0 0 ${particle.size * 2}px ${particle.size / 2}px rgba(74, 222, 128, 0.3)`,
            }}
          />
        ))}
      </div>
      
      {/* Animated gradient overlay */}
      <div 
        className="absolute inset-0 z-1 opacity-60 bg-gradient-radial from-transparent via-transparent to-gray-900"
        style={{
          transform: mounted ? `translateY(${scrollY * 0.1}px)` : 'translateY(0px)',
        }}
      />
      
      {/* 3D grid effect */}
      <div className="absolute inset-0 z-1 opacity-10">
        <div className="h-full w-full bg-grid-pattern" 
          style={{
            backgroundImage: 'linear-gradient(to right, rgba(74, 222, 128, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(74, 222, 128, 0.1) 1px, transparent 1px)',
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
            className="text-xl md:text-2xl font-medium text-green-300 tracking-wider"
            variants={itemVariants}
          >
            Hello, I'm Fauzan
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
              <span className="bg-gradient-to-r from-green-400 via-emerald-500 to-teal-400 bg-clip-text text-transparent inline-block">
                {roles[currentTextIndex]}
              </span>
            </motion.h1>
          </div>
          
          <motion.p 
            className="text-lg md:text-xl max-w-2xl text-gray-300 leading-relaxed"
            variants={itemVariants}
          >
            Building immersive digital experiences that blend creativity with technical excellence
          </motion.p>
          
          <motion.div 
            className="mt-8 flex space-x-4"
            variants={itemVariants}
          >
            <motion.a 
              href="#projects" 
              className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full font-medium text-white shadow-lg hover:shadow-green-500/40 transition-all duration-300 flex items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              View My Projects
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </motion.a>
            
            <motion.a 
              href="#contact" 
              className="px-8 py-4 border border-green-500/30 text-green-400 rounded-full font-medium hover:bg-green-500/10 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Get in Touch
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
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
          className="w-8 h-12 border-2 border-green-500/30 rounded-full flex justify-center p-2"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <div className="w-1 h-3 bg-green-500 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}