"use client";
import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const TECH_STACK = [
  'React', 'Next.js', 'Node.js', 'TypeScript', 'AWS', 'Azure',
  'MongoDB', 'PostgreSQL', 'OpenAI', 'Firebase', 'Docker', 'Kotlin',
];

/* ── Circular Dial SVG ─────────────────────────────────── */
function CircularDial() {
  const RADIUS = 168;
  const CX = 200;
  const CY = 200;
  const CIRC = 2 * Math.PI * RADIUS; // ≈ 1055.6

  // Helper: arc dash (degrees, offsetDegrees)
  const arcDash = (spanDeg: number, startDeg: number) => {
    const span = (spanDeg / 360) * CIRC;
    const offset = -(startDeg / 360) * CIRC;
    return { strokeDasharray: `${span} ${CIRC - span}`, strokeDashoffset: offset };
  };

  // Top arc: centered at 270° (top), spanning 65°
  const topArc = arcDash(65, 240 - 2);   // starts at 240°
  // Left arc: centered at 180° (left), spanning 75°
  const leftArc = arcDash(75, 142);
  // Right arc: centered at 0°/360° (right), spanning 75°
  const rightArc = arcDash(75, -37 + 360);  // = 323°

  const ticks = Array.from({ length: 90 }, (_, i) => {
    const angle = (i / 90) * 360;
    const rad = (angle - 90) * (Math.PI / 180);
    const major = i % 5 === 0;
    const outerR = RADIUS + (major ? 14 : 8);
    const innerR = RADIUS + 2;
    return {
      x1: CX + innerR * Math.cos(rad),
      y1: CY + innerR * Math.sin(rad),
      x2: CX + outerR * Math.cos(rad),
      y2: CY + outerR * Math.sin(rad),
      opacity: major ? 0.25 : 0.1,
      strokeWidth: major ? 1.2 : 0.7,
    };
  });

  return (
    <div className="relative w-[320px] h-[320px] sm:w-[380px] sm:h-[380px] mx-auto flex items-center justify-center">
      {/* Outer ring + ticks — slowly rotates */}
      <svg
        className="absolute inset-0 w-full h-full spin-cw-anim"
        viewBox="0 0 400 400"
        fill="none"
      >
        <defs>
          <linearGradient id="grad-top" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#b44bff" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#ff4bab" stopOpacity="0.8" />
          </linearGradient>
          <linearGradient id="grad-left" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#4b8bff" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#4bffff" stopOpacity="0.7" />
          </linearGradient>
          <linearGradient id="grad-right" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#4bffdd" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#4b8bff" stopOpacity="0.7" />
          </linearGradient>
        </defs>

        {/* Tick marks */}
        {ticks.map((t, i) => (
          <line
            key={i}
            x1={t.x1} y1={t.y1}
            x2={t.x2} y2={t.y2}
            stroke="white"
            strokeWidth={t.strokeWidth}
            strokeOpacity={t.opacity}
          />
        ))}

        {/* Base ring - very faint */}
        <circle cx={CX} cy={CY} r={RADIUS} stroke="white" strokeOpacity="0.04" strokeWidth="1" />

        {/* Colored arc segments */}
        <circle
          cx={CX} cy={CY} r={RADIUS}
          stroke="url(#grad-top)" strokeWidth="3.5" strokeLinecap="round"
          {...topArc}
          className="arc-glow"
        />
        <circle
          cx={CX} cy={CY} r={RADIUS}
          stroke="url(#grad-left)" strokeWidth="3.5" strokeLinecap="round"
          {...leftArc}
          className="arc-glow"
          style={{ animationDelay: '1s' }}
        />
        <circle
          cx={CX} cy={CY} r={RADIUS}
          stroke="url(#grad-right)" strokeWidth="3.5" strokeLinecap="round"
          {...rightArc}
          className="arc-glow"
          style={{ animationDelay: '2s' }}
        />
      </svg>

      {/* Inner content — static / counter-rotates */}
      <div className="relative z-10 flex flex-col items-center text-center px-8">
        {/* Lightning / arrow icon */}
        <svg
          className="w-10 h-10 text-white mb-2 float-anim"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
        <p className="text-[8px] text-white/30 uppercase tracking-[0.3em] leading-relaxed mt-1">
          © Fauzan Habib
        </p>
        <p className="text-[9px] text-white/50 uppercase tracking-[0.25em]">
          Full-Stack Dev
        </p>
      </div>

      {/* Subtle inner glow */}
      <div
        className="absolute w-[130px] h-[130px] rounded-full pulse-ring-anim"
        style={{ background: 'radial-gradient(circle, rgba(140,80,255,0.12) 0%, transparent 70%)' }}
      />
    </div>
  );
}

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.15], [40, 0]);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="bg-black border-t border-white/[0.06] py-16 md:py-24 relative overflow-hidden"
    >
      {/* Ambient glow behind dial */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 50% 50%, rgba(80,40,200,0.06) 0%, transparent 60%)',
        }}
      />

      <div className="px-6 sm:px-10 md:px-14">

        {/* Header row */}
        <div className="flex items-start justify-between mb-12 md:mb-16">
          <div>
            <p className="text-[10px] text-white/25 uppercase tracking-[0.3em] leading-relaxed">
              About<br />Me
            </p>
          </div>
          <div className="text-right">
            <p className="text-[10px] text-white/25 uppercase tracking-[0.2em] leading-relaxed">
              Building production<br />software end to end
            </p>
          </div>
        </div>

        {/* Center: Logo + tagline */}
        <motion.div
          style={{ opacity, y }}
          className="flex flex-col items-center text-center mb-12 md:mb-16"
        >
          <p className="font-anton text-[52px] sm:text-[70px] md:text-[90px] text-white leading-none tracking-tight mb-2">
            fauzan.
          </p>
          <p className="text-[11px] text-white/30 uppercase tracking-[0.3em]">
            Strong & Unique Digital and Cloud Experience
          </p>
        </motion.div>

        {/* Circular dial */}
        <motion.div
          style={{ opacity }}
          className="mb-14 md:mb-20"
        >
          <CircularDial />
        </motion.div>

        {/* Description block */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            viewport={{ once: true, margin: '-60px' }}
          >
            <p className="text-[26px] sm:text-[32px] md:text-[38px] font-bold text-white text-center leading-[1.15] mb-6">
              Experienced full-stack developer building production-grade software that connects technology with measurable results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <p className="text-white/40 text-sm leading-relaxed">
                I&apos;m a full-stack developer and cloud consultant based in India, building production-grade software for businesses. I work across the entire stack — from database schema and API design to pixel-perfect frontends and cloud deployment on AWS, Azure, and Hostinger.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p className="text-white/40 text-sm leading-relaxed">
                I take full ownership of every project — architecture decisions, deployment pipeline, and business outcome. My clients are businesses that want software built right the first time, not patched indefinitely.
              </p>
            </motion.div>
          </div>

          {/* Tech stack pills */}
          <motion.div
            className="mt-10 flex flex-wrap gap-2 justify-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            {TECH_STACK.map((tech) => (
              <span
                key={tech}
                className="px-3.5 py-1.5 text-[10px] uppercase tracking-widest text-white/30 rounded-full border border-white/[0.08] hover:border-white/25 hover:text-white/60 transition-all duration-200 cursor-default"
              >
                {tech}
              </span>
            ))}
          </motion.div>

          {/* Links */}
          <motion.div
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <a
              href="https://github.com/Fauzan-coder"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white/40 hover:text-white text-xs uppercase tracking-widest transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.532 1.03 1.532 1.03.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.934.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12c0-5.523-4.477-10-10-10z" />
              </svg>
              GitHub
            </a>
            <span className="hidden sm:block w-px h-4 bg-white/10" />
            <a
              href="https://www.linkedin.com/in/fauzangolawala164/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white/40 hover:text-white text-xs uppercase tracking-widest transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
              LinkedIn
            </a>
            <span className="hidden sm:block w-px h-4 bg-white/10" />
            <span className="text-white/20 text-xs uppercase tracking-widest">
              Remote & On-site
            </span>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
