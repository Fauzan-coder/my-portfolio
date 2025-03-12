"use client";
import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface Skill {
  title: string;
  items: string[];
}

interface EnhancedAboutSectionProps {
    scrollY: number;
}
  
export default function EnhancedAboutSection({ scrollY }: EnhancedAboutSectionProps) {
  const [mounted, setMounted] = useState(false);
  const [activeCard, setActiveCard] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  
  // Skills to be displayed in the rotating cards
  const skills = [
    { title: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind"] },
    { title: "Backend", items: ["Node.js", "MongoDB", "AWS", "Express"] },
    { title: "Mobile", items: ["React Native", "Flutter", "Firebase"] },
    { title: "Tools", items: ["Git", "Docker", "CI/CD", "Figma"] }
  ];

  // Scroll animations using framer-motion - moved outside of conditional rendering
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  // Create transform values based on scroll position - define these regardless of mounted state
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
  
  // Define transformations for button
  const buttonY = useTransform(scrollYProgress, [0.7, 0.9], [30, 0]);
  const buttonOpacity = useTransform(scrollYProgress, [0.7, 0.9], [0, 1]);
  
  // Define transformations for each key point
  const keyPointsBase = [
    {
      num: 1,
      title: "Technical Expertise",
      desc: "Full-stack development expertise with a computer engineering background."
    },
    {
      num: 2,
      title: "Strategic Solutions",
      desc: "Cost-effective, high-performance solutions with exceptional attention to detail."
    },
    {
      num: 3,
      title: "Research & Development",
      desc: "Forward-thinking approaches to complex challenges through continuous learning."
    },
    {
      num: 4,
      title: "Partnership Approach",
      desc: "Building relationships through transparent communication and collaboration."
    }
  ];
  
  // Pre-define all transformations for key points
  const keyPointTransforms = keyPointsBase.map((_, i) => ({
    y: useTransform(scrollYProgress, 
      [0.3, 0.4 + (i * 0.1), 0.5 + (i * 0.1)], 
      [50, 0, 0]
    ),
    opacity: useTransform(scrollYProgress,
      [0.3, 0.4 + (i * 0.1)],
      [0, 1]
    )
  }));

  useEffect(() => {
    setMounted(true);
    
    const interval = setInterval(() => {
      setActiveCard(prev => (prev + 1) % skills.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [skills.length]);

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
    <section ref={sectionRef} id="about" className="py-16 relative overflow-hidden min-h-screen flex items-center">
      {/* Dynamic background pattern */}
      <motion.div 
        className="absolute top-0 left-0 w-full h-full opacity-10"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%2310b981\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          backgroundSize: '60px 60px',
          y: backgroundY
        }}
      />
      
      {/* Animated geometric shapes - always rendered */}
      <motion.div 
        className="absolute top-20 left-10 w-32 h-32 rounded-full bg-green-500/10" 
        style={{ 
          y: circleY,
          rotate: circleRotate,
          opacity: mounted ? 1 : 0
        }} 
      />
      <motion.div 
        className="absolute bottom-40 right-20 w-40 h-40 rounded-lg bg-emerald-500/5 rotate-12" 
        style={{ 
          y: rectangleY,
          scale: rectangleScale,
          opacity: mounted ? 1 : 0
        }} 
      />
      <motion.div 
        className="absolute top-1/3 right-1/4 w-24 h-24 bg-green-400/10 rotate-45" 
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
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-emerald-600 rounded-full"></div>
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
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 shadow-xl border border-gray-700">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-400/20 via-transparent to-transparent opacity-70"></div>
                
                <div className="flex flex-col items-center justify-center text-center relative z-10">
                  <motion.div 
                    className="w-28 h-28 rounded-full bg-gradient-to-br from-emerald-400 to-green-600 flex items-center justify-center mb-4"
                    style={{ rotate }}
                  >
                    <span className="text-5xl">👨‍💻</span>
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold mb-1">Fauzan Habib</h3>
                  <p className="text-emerald-400 text-lg mb-4">Computer Engineer</p>
                  
                  {/* Skills carousel */}
                  <div className="w-full h-28 relative overflow-hidden">
                    {skills.map((skill, index) => (
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
                        <h4 className="font-semibold text-lg mb-2">{skill.title}</h4>
                        <div className="flex flex-wrap justify-center gap-2">
                          {skill.items.map((item, i) => (
                            <span 
                              key={i} 
                              className="px-3 py-1 bg-gray-800/50 rounded-full text-sm border border-green-500/20"
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
            {keyPointsBase.map((item, i) => (
              <motion.div 
                key={i}
                style={keyPointTransforms[i]}
                className="bg-gray-800/30 p-4 rounded-lg border border-gray-700/50 hover:border-green-500/30 transition-all"
              >
                <h3 className="text-lg font-semibold mb-1 flex items-center">
                  <span className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center mr-3 flex-shrink-0 text-sm">{item.num}</span>
                  <span>{item.title}</span>
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
              className="mt-6 group"
            >
              <a href="#contact" className="inline-flex items-center px-5 py-2 bg-gradient-to-r from-green-500 to-emerald-700 rounded-full text-sm font-medium group-hover:from-green-600 group-hover:to-emerald-800 transition-all shadow-lg group-hover:shadow-green-500/20">
                <span>Let's Work Together</span>
                <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}