"use client";
import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    num: '01',
    title: 'Full-Stack Development',
    description:
      'From pixel-perfect frontends to robust backends and databases — if it runs in a browser, on a server, or in the cloud, it gets built right. Scalable SaaS platforms, internal tools, dashboards, landing pages, APIs, and everything in between.',
    tags: ['React', 'Next.js', 'Node.js', 'FastAPI', 'TypeScript', 'PostgreSQL'],
    bg: '#00000f',
    accent: '#3b82f6',
  },
  {
    num: '02',
    title: 'Cloud & DevOps',
    description:
      'End-to-end infrastructure — from first deploy to enterprise-grade setup. Cloud architecture, zero-downtime pipelines, container orchestration, monitoring, and auto-scaling. Any cloud, any stack, any scale.',
    tags: ['AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes', 'CI/CD'],
    bg: '#00080f',
    accent: '#06b6d4',
  },
  {
    num: '03',
    title: 'AI & ML Integration',
    description:
      'Embed intelligence anywhere in your product. Chatbots, document pipelines, recommendation engines, custom LLM workflows, computer vision, and autonomous agents — production-ready AI that actually ships.',
    tags: ['OpenAI', 'LangChain', 'RAG', 'Vector DBs', 'Fine-tuning', 'Agents'],
    bg: '#08000f',
    accent: '#a855f7',
  },
  {
    num: '04',
    title: 'Mobile Development',
    description:
      'Native and cross-platform apps that feel at home on any device. iOS, Android, or both — from rapid prototype to App Store-ready, with real-time backends, offline support, and smooth 60fps UIs.',
    tags: ['React Native', 'Flutter', 'Android / Kotlin', 'Swift', 'Firebase'],
    bg: '#001208',
    accent: '#10b981',
  },
  {
    num: '05',
    title: 'Workflow Automation',
    description:
      'Turn hours of manual work into zero-click pipelines. CRM sync, email sequences, document generation, multi-tool integrations, scheduled jobs, and event-driven systems — anything repetitive gets automated.',
    tags: ['n8n', 'Zapier', 'REST APIs', 'Webhooks', 'Python Scripts', 'Cron'],
    bg: '#100800',
    accent: '#f97316',
  },
  {
    num: '06',
    title: 'Tech Consulting & Audits',
    description:
      'Clear-eyed technical strategy from someone who builds. Architecture design, stack selection, performance bottlenecks, security vulnerabilities, code quality — thorough audits and actionable roadmaps, not vague advice.',
    tags: ['Architecture', 'Performance', 'Security', 'Code Review', 'Roadmapping'],
    bg: '#080808',
    accent: '#94a3b8',
  },
];

export default function ServicesSection() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const scrollTo = (index: number) => {
    if (!sliderRef.current) return;
    const cards = sliderRef.current.querySelectorAll<HTMLElement>('[data-card]');
    if (cards[index]) {
      cards[index].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
    }
    setActive(index);
  };

  return (
    <section id="services" className="bg-black border-t border-white/[0.06] py-16 md:py-20">
      <div className="px-6 sm:px-10 md:px-14">

        {/* Header */}
        <div className="flex items-end justify-between mb-10 md:mb-14">
          <div>
            <p className="text-[10px] text-white/25 uppercase tracking-[0.3em] mb-3">
              Types of Activities
            </p>
            <h2
              className="text-[40px] sm:text-[52px] md:text-[64px] font-bold text-white leading-[0.88] tracking-tight"
            >
              What I Build
            </h2>
          </div>

          {/* Navigation */}
          <div className="flex gap-2 mb-1">
            <button
              onClick={() => scrollTo(Math.max(0, active - 1))}
              disabled={active === 0}
              className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center hover:border-white/50 transition-all duration-200 disabled:opacity-20 disabled:cursor-not-allowed"
            >
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => scrollTo(Math.min(services.length - 1, active + 1))}
              disabled={active === services.length - 1}
              className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center hover:border-white/50 transition-all duration-200 disabled:opacity-20 disabled:cursor-not-allowed"
            >
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Slider */}
        <div
          ref={sliderRef}
          className="flex gap-4 overflow-x-auto no-scrollbar pb-2"
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {services.map((svc, i) => (
            <motion.div
              key={i}
              data-card
              className="flex-shrink-0 relative rounded-2xl overflow-hidden cursor-pointer"
              style={{
                width: 'clamp(260px, 30vw, 340px)',
                height: 'clamp(380px, 50vh, 460px)',
                background: svc.bg,
                border: `1px solid ${svc.accent}12`,
                scrollSnapAlign: 'start',
              }}
              onMouseEnter={() => setActive(i)}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
            >
              {/* Gradient glow */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: `radial-gradient(ellipse at 30% 25%, ${svc.accent}22 0%, transparent 60%)`,
                }}
              />

              {/* Watermark number */}
              <div
                className="absolute top-2 right-4 font-bold leading-none select-none pointer-events-none opacity-10"
                style={{
                  fontSize: '90px',
                  color: svc.accent,
                  fontFamily: 'var(--font-anton, Anton, sans-serif)',
                }}
              >
                {svc.num}
              </div>

              {/* Card content */}
              <div className="absolute inset-0 p-7 flex flex-col justify-between">
                {/* Top badge */}
                <span
                  className="inline-block self-start text-[9px] uppercase tracking-widest px-2.5 py-1 rounded-full"
                  style={{
                    background: `${svc.accent}15`,
                    border: `1px solid ${svc.accent}25`,
                    color: svc.accent,
                  }}
                >
                  {svc.num}
                </span>

                {/* Bottom content */}
                <div>
                  <h3 className="text-white text-[20px] font-bold leading-tight mb-3">
                    {svc.title}
                  </h3>
                  <p className="text-white/35 text-xs leading-relaxed mb-5">
                    {svc.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {svc.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 text-[9px] uppercase tracking-wider rounded-full"
                        style={{
                          background: `${svc.accent}10`,
                          border: `1px solid ${svc.accent}18`,
                          color: `${svc.accent}70`,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer row */}
        <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 pt-8 border-t border-white/[0.06]">
          <p className="text-white/20 text-sm leading-relaxed max-w-md">
            I build production-grade software that meets and exceeds expectations — from architecture to deployment.
          </p>
          <a
            href="#contact"
            className="flex items-center gap-2 text-white/40 hover:text-white transition-colors text-sm group"
          >
            Discuss your project
            <svg
              className="w-4 h-4 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
}
