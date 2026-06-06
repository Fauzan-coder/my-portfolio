"use client";
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ROLES = ["Full-Stack Developer", "Cloud Architect", "AI Engineer"];

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const [roleIdx, setRoleIdx] = useState(0);

  useEffect(() => {
    setMounted(true);
    const t = setInterval(() => setRoleIdx(i => (i + 1) % ROLES.length), 3200);
    return () => clearInterval(t);
  }, []);

  return (
    <section
      id="home"
      className="relative w-full min-h-screen bg-black flex flex-col overflow-hidden"
    >
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-1/4 right-1/3 w-[700px] h-[700px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(80,40,200,0.07) 0%, transparent 65%)' }}
        />
        <div
          className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(0,100,200,0.05) 0%, transparent 65%)' }}
        />
      </div>

      {/* Filler to push content to bottom */}
      <div className="flex-1" />

      {/* Bottom content */}
      <div className="relative z-10 w-full px-6 sm:px-10 md:px-14 pb-12 md:pb-20">
        {/* Thin separator */}
        <div className="w-full h-px bg-white/[0.07] mb-10 md:mb-14" />

        <div className="flex flex-col md:flex-row items-start md:items-end gap-8 md:gap-0">

          {/* Left — CTA button */}
          <motion.div
            className="flex-shrink-0 md:w-[160px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 20 }}
            transition={{ delay: 1.0, duration: 0.7, ease: 'easeOut' }}
          >
            <a href="#projects" className="group flex flex-row md:flex-col items-center md:items-start gap-4 md:gap-3">
              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center flex-shrink-0 group-hover:bg-white group-hover:border-white transition-all duration-300">
                <svg className="w-4 h-4 ml-0.5 text-white group-hover:text-black transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <div>
                <p className="text-[10px] text-white/40 uppercase tracking-[0.22em] leading-relaxed">
                  View<br />Work
                </p>
              </div>
            </a>
          </motion.div>

          {/* Center — Main heading */}
          <motion.div
            className="flex-1 md:px-10 lg:px-16"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 60 }}
            transition={{ delay: 0.1, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-[40px] sm:text-[54px] md:text-[64px] lg:text-[76px] xl:text-[90px] font-bold text-white leading-[0.88] tracking-[-0.02em]">
              Full-Stack<br />
              software &<br />
              cloud that<br />
              <span className="text-white/30">scales revenue</span>
            </h1>

            {/* Animated role ticker */}
            <div className="mt-5 flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-green-400 flex-shrink-0"
                style={{ boxShadow: '0 0 0 4px rgba(74,222,128,0.15)' }} />
              <div className="overflow-hidden h-5">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={roleIdx}
                    className="text-xs text-white/40 uppercase tracking-[0.22em]"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.35, ease: 'easeOut' }}
                  >
                    {ROLES[roleIdx]}
                  </motion.p>
                </AnimatePresence>
              </div>
            </div>
          </motion.div>

          {/* Right — Stats */}
          <motion.div
            className="flex-shrink-0 md:w-[220px] flex flex-row md:flex-col items-start gap-8 md:gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 20 }}
            transition={{ delay: 1.2, duration: 0.7, ease: 'easeOut' }}
          >
            <div>
              <p className="text-[38px] md:text-[48px] font-bold text-white leading-none tracking-tight">15+</p>
              <p className="text-[10px] text-white/35 uppercase tracking-[0.18em] mt-1.5 leading-relaxed">
                Projects<br />Delivered
              </p>
            </div>
            <div>
              <p className="text-[38px] md:text-[48px] font-bold text-white leading-none tracking-tight">3+</p>
              <p className="text-[10px] text-white/35 uppercase tracking-[0.18em] mt-1.5 leading-relaxed">
                Years of<br />Experience
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
