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
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 15]);

  // Define all transformations for geometric shapes
  const circleY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const circleRotate = useTransform(scrollYProgress, [0, 1], [0, 45]);
  const rectangleY = useTransform(scrollYProgress, [0, 1], [100, -80]);
  const rectangleScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.2, 0.9]);
  const diamondY = useTransform(scrollYProgress, [0, 1], [50, -30]);
  const diamondRotate = useTransform(scrollYProgress, [0, 1], [45, 90]);

  // Define transformations for the sides
  const leftSideX = useTransform(scrollYProgress, [0, 0.5], [-50, 0]);
  const leftSideOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const rightSideX = useTransform(scrollYProgress, [0, 0.5], [50, 0]);
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
      y: useTransform(scrollYProgress, [0.3, 0.4, 0.5], [50, 0, 0]),
      opacity: useTransform(scrollYProgress, [0.3, 0.4], [0, 1])
    },
    {
      y: useTransform(scrollYProgress, [0.3, 0.5, 0.6], [50, 0, 0]),
      opacity: useTransform(scrollYProgress, [0.3, 0.5], [0, 1])
    },
    {
      y: useTransform(scrollYProgress, [0.3, 0.6, 0.7], [50, 0, 0]),
      opacity: useTransform(scrollYProgress, [0.3, 0.6], [0, 1])
    },
    {
      y: useTransform(scrollYProgress, [0.3, 0.7, 0.8], [50, 0, 0]),
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

  // 3D tilt effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current || !mounted) return;

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
    <section ref={sectionRef} id="about" className="py-16 relative overflow-hidden min-h-screen flex items-center bg-transparent">
      {/* Dynamic background pattern */}
      <motion.div 
        className="absolute top-0 left-0 max-w-full h-full opacity-10"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%239333ea\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          backgroundSize: '60px 60px',
          y: backgroundY
        }}
      />

      {/* Animated geometric shapes */}
      <motion.div 
        className="absolute top-20 left-10 w-32 h-32 rounded-full bg-purple-700/20" 
        style={{ 
          y: circleY,
          rotate: circleRotate,
          opacity: mounted ? 1 : 0
        }} 
      />
      <motion.div 
        className="absolute bottom-40 right-20 w-40 h-40 rounded-lg bg-violet-600/10 rotate-12" 
        style={{ 
          y: rectangleY,
          scale: rectangleScale,
          opacity: mounted ? 1 : 0
        }} 
      />
      <motion.div 
        className="absolute top-1/3 right-1/4 w-24 h-24 bg-fuchsia-500/15 rotate-45" 
        style={{ 
          y: diamondY,
          rotate: diamondRotate,
          opacity: mounted ? 1 : 0
        }} 
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="flex flex-col items-center mb-12"
          style={{ opacity, scale }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-fuchsia-500 to-purple-800 bg-clip-text text-transparent">
            Freelance Services
          </h2>
          <p className="text-lg md:text-xl text-center max-w-2xl mb-4 text-gray-300">
            Transforming ideas into exceptional digital experiences
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-fuchsia-600 rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* 3D profile card with tilt effect */}
          <motion.div 
            className="flex justify-center"
            style={{ 
              x: leftSideX,
              opacity: leftSideOpacity
            }}
          >
            <div 
              ref={containerRef}
              className="relative rounded-2xl overflow-hidden transition-all duration-300 ease-out lg:w-full max-w-md"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 shadow-xl border border-purple-900/50">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-500/20 via-transparent to-transparent opacity-70"></div>

                <div className="flex flex-col items-center justify-center text-center relative z-10">
                  <motion.div 
                    className="w-28 h-28 rounded-full bg-gradient-to-br from-purple-600 to-fuchsia-700 flex items-center justify-center mb-4 shadow-lg shadow-purple-700/30"
                    style={{ rotate }}
                  >
                    <span className="text-5xl">👨‍💻</span>
                  </motion.div>

                  <h3 className="text-2xl font-bold mb-1 text-white">Fauzan Habib</h3>
                  <p className="text-purple-400 text-lg mb-2">Independent Developer & Consultant</p>
                  <p className="text-gray-300 text-sm mb-4">Available for freelance projects</p>

                  {/* Services carousel */}
                  <div className="w-full h-32 relative overflow-hidden">
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
                        <h4 className="font-semibold text-lg mb-2 flex items-center justify-center">
                          <span className="mr-2">{service.icon}</span>
                          {service.title}
                        </h4>
                        <div className="flex flex-wrap justify-center gap-2">
                          {service.items.map((item, i) => (
                            <span 
                              key={i} 
                              className="px-3 py-1 bg-purple-900/40 rounded-full text-sm border border-purple-500/30 hover:border-purple-400/70 transition-all"
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
            className="lg:pl-6 space-y-4"
            style={{ 
              x: rightSideX,
              opacity: rightSideOpacity
            }}
          >
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2 text-fuchsia-400">Why Work With Me?</h3>
              <p className="text-gray-300">I bring engineering precision and creative problem-solving to every project, delivering custom solutions that drive business growth.</p>
            </div>

            {keyPointsBase.map((item, i) => (
              <motion.div 
                key={i}
                style={keyPointTransforms[i]}
                className="bg-gray-900/40 p-4 rounded-lg border border-gray-800 hover:border-purple-500/40 transition-all shadow-md hover:shadow-purple-700/10"
              >
                <h3 className="text-lg font-semibold mb-1 flex items-center">
                  <span className="w-6 h-6 rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-600 flex items-center justify-center mr-3 flex-shrink-0 text-sm shadow-md shadow-purple-700/20">{item.num}</span>
                  <span className="text-white">{item.title}</span>
                </h3>
                <p className="text-gray-300 text-sm ml-9">
                  {item.desc}
                </p>
              </motion.div>
            ))}

            <motion.div
              style={{ 
                y: buttonY,
                opacity: buttonOpacity
              }}
              className="mt-8 flex flex-col sm:flex-row gap-4"
            >
              <a href="#contact" className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-purple-600 to-fuchsia-700 rounded-full text-sm font-medium hover:from-purple-700 hover:to-fuchsia-800 transition-all shadow-lg shadow-purple-600/20 hover:shadow-purple-700/30 group">
                <span>Hire Me Now</span>
                <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>  
              </a>
              <a href="#projects" className="inline-flex items-center justify-center px-6 py-3 bg-gray-900/70 border border-purple-500/30 rounded-full text-sm font-medium hover:bg-gray-800/70 transition-all shadow-lg hover:shadow-purple-500/20 group hover:border-purple-500/50">
                <span>View Projects</span>
                <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Additional decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black to-transparent"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-40 h-40 bg-fuchsia-600/5 rounded-full blur-2xl"></div>
    </section>
  );
}