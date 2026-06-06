"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
  {
    id: '01',
    name: 'Integrated Logistics Platform',
    type: 'Enterprise · Multi-platform',
    description:
      'Full-stack supply chain solution — web order management with real-time inventory & a native Android field app with QR challan signing and instant sync.',
    tags: ['Next.js', 'Node.js', 'AWS', 'PostgreSQL', 'Kotlin', 'Firebase'],
    outcome: '60% reduction in order processing time',
    bg: '#0c0600',
    accent: '#ff6b00',
  },
  {
    id: '02',
    name: 'E-Commerce Solutions',
    type: 'E-Commerce · Full-Service',
    description:
      'End-to-end storefronts across Shopify, WordPress/WooCommerce, and custom Next.js. Payment gateways (Razorpay, Stripe), cloud hosting, SEO-ready architecture.',
    tags: ['Shopify', 'Next.js', 'Razorpay', 'Stripe', 'AWS', 'WooCommerce'],
    outcome: '₹10L+ monthly transactions across live stores',
    bg: '#00050f',
    accent: '#2563eb',
  },
  {
    id: '03',
    name: 'Employee Task Manager',
    type: 'Internal Tool · Enterprise',
    description:
      'Enterprise task platform for a 50+ person org. RBAC, priority-based assignment, deadline tracking, performance dashboards, automated weekly PDF reports.',
    tags: ['React', 'Node.js', 'MongoDB', 'RBAC', 'PDF Generation'],
    outcome: 'Adopted org-wide — 50+ active users',
    bg: '#06000f',
    accent: '#7c3aed',
  },
  {
    id: '04',
    name: 'CashSnap',
    type: 'Proprietary Product · Live',
    description:
      'Retail finance tracker built from scratch and taken to market. Daily cash/UPI/card sales, expense tracking, salary advances, auto balance reports.',
    tags: ['Next.js', 'Node.js', 'MongoDB', 'Vercel'],
    outcome: 'Live with paying clients — try the demo',
    bg: '#001208',
    accent: '#10b981',
    link: 'https://cashsnap-gold.vercel.app/',
  },
];

function ProjectVisual({ project }: { project: (typeof projects)[0] }) {
  return (
    <div className="w-full h-full relative overflow-hidden" style={{ background: project.bg }}>
      {/* Gradient glow */}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse at 55% 40%, ${project.accent}25 0%, transparent 65%)`,
        }}
      />

      {/* Large project number — watermark */}
      <div
        className="absolute bottom-4 right-6 font-bold leading-none select-none pointer-events-none"
        style={{
          fontSize: 'clamp(100px, 18vw, 180px)',
          color: `${project.accent}0e`,
          fontFamily: 'var(--font-anton, Anton, sans-serif)',
        }}
      >
        {project.id}
      </div>

      {/* Abstract geometric lines */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 500 500"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        <line x1="0" y1="80" x2="500" y2="80" stroke={`${project.accent}08`} strokeWidth="0.5" />
        <line x1="0" y1="160" x2="500" y2="160" stroke={`${project.accent}06`} strokeWidth="0.5" />
        <line x1="80" y1="0" x2="80" y2="500" stroke={`${project.accent}06`} strokeWidth="0.5" />
        <line x1="200" y1="0" x2="200" y2="500" stroke={`${project.accent}05`} strokeWidth="0.5" />
        <line x1="350" y1="0" x2="350" y2="500" stroke={`${project.accent}04`} strokeWidth="0.5" />
        <circle cx="250" cy="250" r="150" stroke={`${project.accent}08`} strokeWidth="0.5" strokeDasharray="6 4" />
        <circle cx="250" cy="250" r="80" stroke={`${project.accent}06`} strokeWidth="0.5" />
      </svg>

      {/* Content */}
      <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between">
        {/* Top: type tag */}
        <div>
          <span
            className="inline-block text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-full"
            style={{
              background: `${project.accent}12`,
              border: `1px solid ${project.accent}20`,
              color: `${project.accent}80`,
            }}
          >
            {project.type}
          </span>
        </div>

        {/* Bottom: details */}
        <div>
          <div className="w-8 h-px mb-4" style={{ background: `${project.accent}50` }} />
          <h3
            className="text-2xl md:text-3xl font-bold leading-tight mb-3"
            style={{ color: '#fff' }}
          >
            {project.name}
          </h3>
          <p className="text-white/40 text-sm leading-relaxed mb-5 max-w-sm">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.slice(0, 4).map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 text-[9px] uppercase tracking-wider rounded-full"
                style={{
                  background: `${project.accent}12`,
                  border: `1px solid ${project.accent}20`,
                  color: `${project.accent}80`,
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between">
            <p className="text-[10px] uppercase tracking-wider" style={{ color: `${project.accent}60` }}>
              ↗ {project.outcome}
            </p>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] uppercase tracking-wider transition-colors"
                style={{ color: project.accent }}
                onClick={(e) => e.stopPropagation()}
              >
                Live Demo →
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="projects" className="bg-black border-t border-white/[0.06]">
      {/* Header row */}
      <div className="px-6 sm:px-10 md:px-14 flex items-center justify-between py-7 border-b border-white/[0.06]">
        <p className="text-[10px] text-white/25 uppercase tracking-[0.3em] leading-relaxed">
          Best<br />Cases
        </p>
        <p className="text-[10px] text-white/25 uppercase tracking-[0.3em] text-right leading-relaxed">
          My<br />Projects
        </p>
      </div>

      {/* Main: list + visual */}
      <div className="flex flex-col md:flex-row min-h-[560px]">

        {/* Left — project list */}
        <div className="w-full md:w-[48%] px-6 sm:px-10 md:px-14 py-10 md:py-14 border-b md:border-b-0 md:border-r border-white/[0.06] flex flex-col justify-center">
          {projects.map((project, i) => (
            <motion.button
              key={i}
              className="group w-full text-left py-5 border-b border-white/[0.05] last:border-0"
              onMouseEnter={() => setActiveIndex(i)}
              onClick={() => setActiveIndex(i)}
              whileHover={{}}
            >
              <div className="flex items-baseline gap-4">
                <span
                  className="text-[10px] tracking-wider transition-colors duration-200 flex-shrink-0 font-mono"
                  style={{ color: activeIndex === i ? projects[i].accent : 'rgba(255,255,255,0.18)' }}
                >
                  {project.id}
                </span>
                <motion.span
                  className="text-2xl sm:text-3xl md:text-[28px] lg:text-[34px] font-bold leading-tight transition-colors duration-200"
                  style={{ color: activeIndex === i ? '#ffffff' : 'rgba(255,255,255,0.22)' }}
                  animate={{ x: activeIndex === i ? 6 : 0 }}
                  transition={{ duration: 0.2, ease: 'easeOut' }}
                >
                  {project.name}
                </motion.span>
              </div>

              {/* Expanded type label */}
              <AnimatePresence>
                {activeIndex === i && (
                  <motion.p
                    className="text-[10px] uppercase tracking-[0.2em] pl-10 mt-1.5"
                    style={{ color: project.accent + '60' }}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {project.type}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.button>
          ))}
        </div>

        {/* Right — project visual */}
        <div className="w-full md:w-[52%] relative" style={{ minHeight: '420px' }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
            >
              <ProjectVisual project={projects[activeIndex]} />
            </motion.div>
          </AnimatePresence>
        </div>

      </div>

      {/* Bottom tagline */}
      <div className="px-6 sm:px-10 md:px-14 py-6 border-t border-white/[0.06]">
        <p className="text-[11px] text-white/20 leading-relaxed">
          Full-stack solutions from concept<br />to production deployment.
        </p>
      </div>
    </section>
  );
}
