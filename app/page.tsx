"use client";
import { useState, useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import { motion, AnimatePresence } from 'framer-motion';
import ServicesSection from './components/Services';
import ContactSection from './components/contactSection';
import Projects from './components/Projects';

const Hero = dynamic(() => import('./components/hero'), { ssr: false });
const AboutSection = dynamic(() => import('./components/AboutUs'), { ssr: false });

const TECH_MARQUEE = [
  'React', 'Next.js', 'Node.js', 'TypeScript', 'AWS', 'Azure',
  'MongoDB', 'PostgreSQL', 'OpenAI', 'Firebase', 'Docker', 'Kotlin',
  'Shopify', 'WordPress', 'React Native', 'Redis', 'LangChain', 'n8n',
];

/* ── Cursor glow ────────────────────────────────────────── */
function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (glowRef.current) {
        glowRef.current.style.left = `${e.clientX}px`;
        glowRef.current.style.top = `${e.clientY}px`;
      }
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  return (
    <div
      ref={glowRef}
      className="pointer-events-none fixed z-[9997] hidden md:block"
      style={{
        width: '500px',
        height: '500px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(255,255,255,0.025) 0%, transparent 65%)',
        transform: 'translate(-50%, -50%)',
        transition: 'left 0.25s ease, top 0.25s ease',
      }}
    />
  );
}

/* ── Scroll progress bar ────────────────────────────────── */
function ScrollProgress({ scrollY }: { scrollY: number }) {
  const total =
    typeof document !== 'undefined'
      ? document.documentElement.scrollHeight - window.innerHeight
      : 0;
  const height = total > 0 ? (scrollY / total) * 100 : 0;

  return (
    <div className="fixed top-0 left-0 right-0 h-[1px] z-[100] bg-white/[0.06]">
      <div
        className="h-full bg-white/30 transition-all duration-100"
        style={{ width: `${height}%` }}
      />
    </div>
  );
}

/* ── Right fixed sidebar ────────────────────────────────── */
function RightSidebar({ scrollY }: { scrollY: number }) {
  return (
    <div
      className="fixed right-0 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col items-center gap-3 pr-4"
      style={{ opacity: scrollY > 60 ? 1 : 0, transition: 'opacity 0.4s ease' }}
    >
      <a
        href="#"
        className="w-8 h-8 border border-white/15 rounded flex items-center justify-center hover:border-white/50 transition-all duration-200"
      >
        <span className="font-anton text-[11px] text-white/50 leading-none">F.</span>
      </a>
      <div className="w-px h-14 bg-white/[0.08]" />
      <span className="text-vertical text-[8px] text-white/20 uppercase tracking-[0.3em]">
        Portfolio
      </span>
    </div>
  );
}

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Work', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden">
      <CursorGlow />
      <ScrollProgress scrollY={scrollY} />
      <RightSidebar scrollY={scrollY} />

      {/* ── Fixed Navigation ──────────────────────────────── */}
      <header
        className="fixed top-0 left-0 right-0 z-50 px-6 sm:px-10 md:px-14 py-5 flex items-center justify-between"
        style={{
          background: scrollY > 80 ? 'rgba(0,0,0,0.85)' : 'transparent',
          backdropFilter: scrollY > 80 ? 'blur(20px)' : 'none',
          borderBottom: scrollY > 80 ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
          transition: 'background 0.3s ease, border-color 0.3s ease',
        }}
      >
        {/* Logo */}
        <a
          href="#"
          className="font-anton text-white text-[15px] tracking-[0.12em] uppercase hover:opacity-50 transition-opacity"
        >
          fauzan.
        </a>

        {/* Desktop nav — single centered link like atomic.black */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[10px] text-white/40 uppercase tracking-[0.22em] hover:text-white transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right labels */}
        <div className="hidden md:flex flex-col items-end gap-0.5">
          <span className="text-[9px] text-white/25 uppercase tracking-widest">© Fauzan Habib</span>
          <span className="text-[9px] text-white/25 uppercase tracking-widest">Full-Stack Dev</span>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden relative z-50 w-9 h-9 flex flex-col items-center justify-center gap-1.5"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          <span
            className={`block w-5 h-px bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[5px]' : ''}`}
          />
          <span
            className={`block w-5 h-px bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}
          />
          <span
            className={`block w-5 h-px bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[5px]' : ''}`}
          />
        </button>
      </header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-black flex flex-col items-center justify-center gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-[28px] font-bold text-white/60 hover:text-white uppercase tracking-widest transition-colors"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: i * 0.07, duration: 0.3 }}
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Main content ──────────────────────────────────── */}
      <main>
        {/* Hero */}
        <Hero />

        {/* Tech stack marquee separator */}
        <div className="border-t border-b border-white/[0.06] py-4 overflow-hidden bg-black">
          <div className="marquee-track">
            {[...TECH_MARQUEE, ...TECH_MARQUEE].map((tech, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-5 text-[10px] text-white/20 uppercase tracking-[0.25em] px-5"
              >
                {tech}
                <span className="w-1 h-1 rounded-full bg-white/15 flex-shrink-0" />
              </span>
            ))}
          </div>
        </div>

        {/* Projects */}
        <Projects />

        {/* Services */}
        <ServicesSection />

        {/* About */}
        <AboutSection />

        {/* Contact + Footer */}
        <ContactSection />
      </main>
    </div>
  );
}
