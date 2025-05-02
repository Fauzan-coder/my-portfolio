"use client";
import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// Define types outside the component
interface KeyPoint {
  num: number;
  title: string;
  desc: string;
}

interface ServiceCard {
  title: string;
  icon: string;
  items: string[];
}

export default function EnhancedAboutSection() {
  const [mounted, setMounted] = useState(false);
  const [activeCard, setActiveCard] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  // Services offered as a freelancer
  const services: ServiceCard[] = [
    { 
      title: "Web Development", 
      icon: "🌐",
      items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] 
    },
    { 
      title: "Backend Solutions", 
      icon: "⚙️",
      items: ["Node.js", "MongoDB", "AWS", "Express"] 
    },
    { 
      title: "Mobile Apps", 
      icon: "📱",
      items: ["React Native", "Flutter", "Firebase", "Cross-platform"] 
    },
    { 
      title: "Tech Consulting", 
      icon: "💡",
      items: ["Architecture", "Tech Stack", "Performance", "Security"] 
    }
  ];

  // Scroll animations using framer-motion
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Create transform values based on scroll position
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.95, 1, 1, 0.95]);

  // Define transformations for the sides - adjusted for mobile
  const leftSideX = useTransform(scrollYProgress, [0, 0.5], [-20, 0]);
  const leftSideOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const rightSideX = useTransform(scrollYProgress, [0, 0.5], [20, 0]);
  const rightSideOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  // Define transformations for CTA buttons
  const buttonY = useTransform(scrollYProgress, [0.7, 0.9], [30, 0]);
  const buttonOpacity = useTransform(scrollYProgress, [0.7, 0.9], [0, 1]);

  // Define key points - freelance focused
  const keyPointsBase: KeyPoint[] = [
    {
      num: 1,
      title: "Premium Solutions",
      desc: "Delivering custom-tailored, high-quality digital products that exceed client expectations."
    },
    {
      num: 2,
      title: "End-to-End Service",
      desc: "Comprehensive development from concept to deployment with ongoing support and maintenance."
    },
    {
      num: 3,
      title: "Flexible Engagement",
      desc: "Project-based, hourly, or retainer options to suit your business needs and budget."
    },
    {
      num: 4,
      title: "Proven Expertise",
      desc: "Engineering background with a track record of delivering complex, high-performance solutions."
    }
  ];

  // Pre-calculate all transformations for key points
  const keyPointTransforms = [
    {
      y: useTransform(scrollYProgress, [0.3, 0.4, 0.5], [30, 0, 0]),
      opacity: useTransform(scrollYProgress, [0.3, 0.4], [0, 1])
    },
    {
      y: useTransform(scrollYProgress, [0.3, 0.5, 0.6], [30, 0, 0]),
      opacity: useTransform(scrollYProgress, [0.3, 0.5], [0, 1])
    },
    {
      y: useTransform(scrollYProgress, [0.3, 0.6, 0.7], [30, 0, 0]),
      opacity: useTransform(scrollYProgress, [0.3, 0.6], [0, 1])
    },
    {
      y: useTransform(scrollYProgress, [0.3, 0.7, 0.8], [30, 0, 0]),
      opacity: useTransform(scrollYProgress, [0.3, 0.7], [0, 1])
    }
  ];

  useEffect(() => {
    setMounted(true);

    const interval = setInterval(() => {
      setActiveCard(prev => (prev + 1) % services.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [services.length]);

  // 3D tilt effect - disable on mobile for better UX
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current || !mounted || window.innerWidth < 768) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 25;
    const rotateY = (centerX - x) / 25;

    containerRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = () => {
    if (containerRef.current) {
      containerRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
    }
  };

  return (
    <section ref={sectionRef} id="about" className="py-8 md:py-16 relative overflow-hidden min-h-screen flex items-center bg-white">
      {/* Subtle grid background */}
      <div 
        className="absolute top-0 left-0 w-full h-full opacity-5"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23000000\' fill-opacity=\'1\'%3E%3Crect width=\'1\' height=\'1\' x=\'0\' y=\'0\'/%3E%3C/g%3E%3C/svg%3E")',
          backgroundSize: '20px 20px',
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div 
          className="flex flex-col items-center mb-8 md:mb-16"
          style={{ opacity, scale }}
        >
          <h1 className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 md:mb-12 text-transparent bg-clip-text bg-gradient-to-r from-gray-700 via-gray-900 to-black font-['Anton'] text-center" 
          style={{
            textShadow: '0 0 15px rgba(255, 255, 255, 0.5), 0 0 30px rgba(255, 255, 255, 0.2)'
          }}>
            Custom Software Solutions
          </h1>
          <p className="font-poppins text-sm sm:text-base md:text-lg text-center max-w-2xl mb-4 md:mb-6 text-gray-900 px-2">
            Transforming ideas into exceptional digital experiences
          </p>
          <div className="w-12 md:w-16 h-1 bg-gradient-to-r from-gray-300 via-gray-100 to-gray-300 rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Profile card with tilt effect */}
          <motion.div 
            className="flex justify-center"
            style={{ 
              x: leftSideX,
              opacity: leftSideOpacity
            }}
          >
            <div 
              ref={containerRef}
              className="relative rounded-lg overflow-hidden transition-all duration-300 ease-out w-full max-w-sm sm:max-w-md"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <div className="bg-gradient-to-r from-white via-gray-200 to-white rounded-3xl p-4 sm:p-6 md:p-8 shadow-xl border border-black">
                <div className="flex flex-col items-center justify-center text-center relative z-10">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full bg-white flex items-center justify-center mb-4 md:mb-6 shadow-lg border border-black"
                       style={{
                         background: 'linear-gradient(135deg, white, #f5f5f5, #e0e0e0, #f5f5f5, white)'
                       }}>
                    <span className="text-2xl sm:text-3xl md:text-4xl">👨‍💻</span>
                  </div>

                  <h3 className="font-anton text-xl sm:text-2xl uppercase tracking-wide mb-1 text-transparent bg-clip-text bg-gradient-to-r from-gray-700 to-black">Fauzan Habib</h3>
                  <p className="font-poppins text-gray-800 text-base sm:text-lg mb-1 sm:mb-2">Developer & Consultant</p>
                  <p className="font-poppins text-gray-600 text-xs sm:text-sm mb-4 sm:mb-6">Available for freelance projects</p>

                  {/* Services carousel */}
                  <div className="w-full h-24 sm:h-28 md:h-32 relative overflow-hidden">
                    {services.map((service, index) => (
                      <motion.div 
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ 
                          opacity: index === activeCard ? 1 : 0,
                          y: index === activeCard ? 0 : 20
                        }}
                        transition={{ duration: 0.5 }}
                        className="absolute inset-x-0"
                      >
                        <h4 className="font-poppins font-medium text-base sm:text-lg mb-2 sm:mb-3 flex items-center justify-center text-gray-800">
                          <span className="mr-2">{service.icon}</span>
                          {service.title}
                        </h4>
                        <div className="flex flex-wrap justify-center gap-1 sm:gap-2">
                          {service.items.map((item, i) => (
                            <span 
                              key={i} 
                              className="px-2 sm:px-3 py-1 bg-white rounded-full text-xs sm:text-sm border border-black hover:border-black transition-all font-poppins shadow-sm"
                              style={{
                                background: 'linear-gradient(135deg, white, #fafafa)'
                              }}
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Key points with scroll-based reveal */}
          <motion.div 
            className="space-y-3 sm:space-y-4 md:space-y-5 mt-4 md:mt-0"
            style={{ 
              x: rightSideX,
              opacity: rightSideOpacity
            }}
          >
            <div className="mb-4 sm:mb-6">
              <h3 className="font-anton text-xl sm:text-2xl uppercase tracking-wide mb-2 sm:mb-3 text-transparent bg-clip-text bg-gradient-to-r from-gray-700 to-black text-center md:text-left"
                  style={{
                    textShadow: '0 0 10px rgba(200, 200, 200, 0.3)'
                  }}>
                Why Work With Me?
              </h3>
              <p className="font-poppins text-sm sm:text-base text-gray-800 text-center md:text-left">I bring engineering precision and creative problem-solving to every project, delivering custom solutions that drive business growth.</p>
            </div>

            {keyPointsBase.map((item, i) => (
              <motion.div 
                key={i}
                className="p-3 sm:p-4 md:p-5 rounded-lg border border-black hover:border-black transition-all shadow-md"
                style={{
                  y: keyPointTransforms[i].y,
                  opacity: keyPointTransforms[i].opacity,
                  background: `linear-gradient(135deg, white, #f5f5f5${i % 2 === 0 ? ', #fafafa' : ', #f0f0f0'}, white)`,
                  borderRadius: '1rem',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)'
                }}
              >
                <h3 className="text-base sm:text-lg font-medium mb-1 sm:mb-2 flex items-center">
                  <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white text-gray-800 flex items-center justify-center mr-2 sm:mr-3 flex-shrink-0 text-xs sm:text-sm font-anton border border-gray-300 shadow-sm">
                    {item.num}
                  </span>
                  <span className="text-gray-800 font-anton tracking-wide uppercase">{item.title}</span>
                </h3>
                <p className="text-xs sm:text-sm text-gray-700 ml-8 sm:ml-10 font-poppins">
                  {item.desc}
                </p>
              </motion.div>
            ))}

            <motion.div
              style={{ 
                y: buttonY,
                opacity: buttonOpacity
              }}
              className="mt-6 sm:mt-8 md:mt-10 flex flex-col xs:flex-row gap-3 sm:gap-4"
            >
              <a href="#contact" 
                 className="inline-flex items-center justify-center px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-medium transition-all shadow-lg group font-poppins border border-gray-300"
                 style={{
                   background: 'linear-gradient(135deg, white, #f5f5f5, #e8e8e8, #f5f5f5, white)',
                   color: '#000',
                   boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(0, 0, 0, 0.05)'
                 }}>
                <span>HIRE ME NOW</span>
                <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </a>
              <a href="#projects" 
                 className="inline-flex items-center justify-center px-4 sm:px-6 md:px-8 py-2 sm:py-3 bg-transparent border border-black rounded-full text-xs sm:text-sm font-medium hover:bg-white/5 transition-all group font-poppins text-gray-800 mt-2 xs:mt-0"
                 style={{
                   boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)'
                 }}>
                <span>VIEW PROJECTS</span>
                <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Subtle gradient orbs - adjusted for mobile */}
      <div className="absolute top-0 right-0 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 rounded-full opacity-20 blur-3xl"
           style={{
             background: 'radial-gradient(circle, rgba(220,220,220,1) 0%, rgba(255,255,255,0) 70%)'
           }}></div>
      <div className="absolute bottom-10 sm:bottom-20 left-10 sm:left-20 w-24 sm:w-32 md:w-40 h-24 sm:h-32 md:h-40 rounded-full opacity-20 blur-2xl"
           style={{
             background: 'radial-gradient(circle, rgba(200,200,200,1) 0%, rgba(255,255,255,0) 70%)'
           }}></div>
    </section>
  );
}