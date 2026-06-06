"use client";
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useFormik } from 'formik';
import * as Yup from 'yup';

/* ── Animated Wave Canvas ───────────────────────────────── */
function WaveCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let t = 0;

    const waves = [
      { amp: 42, freq: 0.009, phase: 0.0, color: 'rgba(100,220,255,0.55)', width: 1.2 },
      { amp: 34, freq: 0.011, phase: 0.5, color: 'rgba(80,170,255,0.45)', width: 1.0 },
      { amp: 26, freq: 0.008, phase: 1.1, color: 'rgba(120,100,255,0.40)', width: 1.0 },
      { amp: 18, freq: 0.013, phase: 1.8, color: 'rgba(160,80,220,0.30)', width: 0.8 },
      { amp: 12, freq: 0.010, phase: 2.5, color: 'rgba(180,60,200,0.25)', width: 0.8 },
      { amp:  6, freq: 0.014, phase: 3.2, color: 'rgba(100,220,255,0.20)', width: 0.6 },
    ];

    function draw() {
      if (!canvas || !ctx) return;
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);

      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      const cy = h / 2;

      ctx.clearRect(0, 0, w, h);

      waves.forEach((wave) => {
        ctx.beginPath();
        ctx.lineWidth = wave.width;

        // Gradient: transparent → color → transparent (taper at ends)
        const grad = ctx.createLinearGradient(0, 0, w, 0);
        grad.addColorStop(0, 'transparent');
        grad.addColorStop(0.08, wave.color);
        grad.addColorStop(0.92, wave.color);
        grad.addColorStop(1, 'transparent');
        ctx.strokeStyle = grad;

        for (let x = 0; x <= w; x++) {
          // Gaussian envelope: max amplitude at center, zero at edges
          const norm = x / w;
          const envelope = Math.sin(Math.PI * norm);
          const y = cy + wave.amp * envelope * Math.sin(wave.freq * x + t + wave.phase);
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      });

      t += 0.018;
      animId = requestAnimationFrame(draw);
    }

    draw();
    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full"
      style={{ display: 'block' }}
    />
  );
}

/* ── Contact Section ────────────────────────────────────── */
export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const formik = useFormik({
    initialValues: { name: '', email: '', message: '' },
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required'),
      email: Yup.string().email('Invalid email').required('Email is required'),
      message: Yup.string().required('Message is required'),
    }),
    onSubmit: async (values, { resetForm }) => {
      setSubmitError(null);
      try {
        const res = await fetch('/api/send-email', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(values),
        });

        const data = await res.json().catch(() => ({}));

        if (!res.ok) {
          setSubmitError(
            data.message ||
              'Failed to send message. Please email fauzangolawala164@gmail.com directly.'
          );
          return;
        }

        setSubmitted(true);
        resetForm();
        setTimeout(() => setSubmitted(false), 5000);
      } catch {
        setSubmitError(
          'Network error. Please try again or email fauzangolawala164@gmail.com directly.'
        );
      }
    },
  });

  return (
    <section id="contact" className="bg-black border-t border-white/[0.06]">

      {/* Wave animation zone */}
      <div className="w-full h-[200px] md:h-[240px] relative overflow-hidden">
        <WaveCanvas />
      </div>

      {/* CTA block */}
      <div className="px-6 sm:px-10 md:px-14 py-14 md:py-20 border-t border-white/[0.06]">
        <div className="max-w-6xl mx-auto">

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 md:gap-20 mb-16 md:mb-20">
            {/* Left: small text */}
            <div className="md:max-w-[280px]">
              <p className="text-[10px] text-white/20 uppercase tracking-[0.2em] leading-relaxed">
                I work in a wide range of fields: from complex SaaS products to cloud infrastructure and AI integrations
              </p>
            </div>

            {/* Right: main CTA heading */}
            <div className="flex-1 md:text-right">
              <p className="text-[10px] text-white/30 uppercase tracking-[0.3em] mb-3">Contacts</p>
              <h2 className="text-[34px] sm:text-[44px] md:text-[56px] font-bold text-white leading-[0.9] tracking-tight">
                Ready to discuss<br />your project
              </h2>
            </div>
          </div>

          {/* Email + socials */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-8 pb-14 border-b border-white/[0.06]">
            <a
              href="mailto:fauzangolawala164@gmail.com"
              className="text-[22px] sm:text-[28px] md:text-[36px] font-bold text-white hover:text-white/60 transition-colors tracking-tight leading-none"
            >
              fauzangolawala164@gmail.com
            </a>

            <div className="flex gap-3">
              <a
                href="https://github.com/Fauzan-coder"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full border border-white/15 flex items-center justify-center text-white/40 hover:text-white hover:border-white/50 transition-all"
                aria-label="GitHub"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.532 1.03 1.532 1.03.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.934.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12c0-5.523-4.477-10-10-10z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/fauzangolawala164/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full border border-white/15 flex items-center justify-center text-white/40 hover:text-white hover:border-white/50 transition-all"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href="tel:+918320445493"
                className="w-11 h-11 rounded-full border border-white/15 flex items-center justify-center text-white/40 hover:text-white hover:border-white/50 transition-all"
                aria-label="Phone"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">

            {/* Left info */}
            <div>
              <p className="text-[10px] text-white/25 uppercase tracking-[0.3em] mb-6">
                We are open from:
              </p>
              <div className="mb-6">
                <p className="text-white text-lg font-bold leading-none">
                  09<sup className="text-[9px] text-white/40 font-normal ml-0.5">AM</sup>
                  <span className="text-white/20 mx-2">—</span>
                  07<sup className="text-[9px] text-white/40 font-normal ml-0.5">PM</sup>
                </p>
                <p className="text-[10px] text-white/25 uppercase tracking-wider mt-2">
                  Monday to Friday IST
                </p>
              </div>

              <div className="mt-8 pt-8 border-t border-white/[0.06]">
                <p className="text-[10px] text-white/25 uppercase tracking-[0.25em] mb-3">Location</p>
                <p className="text-sm text-white/50">India</p>
                <p className="text-[10px] text-white/25 uppercase tracking-wider mt-0.5">
                  UTC/IST +5:30 hours
                </p>
              </div>
            </div>

            {/* Right: form */}
            <div className="relative">
              {submitted && (
                <motion.div
                  className="absolute inset-0 flex items-center justify-center rounded-xl z-20 bg-black/95"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <div className="text-center">
                    <div className="w-12 h-12 rounded-full border border-white/20 mx-auto flex items-center justify-center mb-4">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-sm text-white font-bold uppercase tracking-widest">Message Sent</p>
                    <p className="text-xs text-white/30 mt-1">I&apos;ll respond within 24 hours.</p>
                  </div>
                </motion.div>
              )}

              <form onSubmit={formik.handleSubmit} className="flex flex-col gap-0">
                {[
                  { id: 'name', placeholder: 'What is your name?', type: 'text' },
                  { id: 'email', placeholder: 'Your email', type: 'email' },
                ].map(({ id, placeholder, type }) => (
                  <div key={id} className="border-b border-white/[0.08]">
                    <input
                      id={id}
                      name={id}
                      type={type}
                      value={formik.values[id as 'name' | 'email']}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      placeholder={placeholder}
                      className="w-full bg-transparent text-white text-sm placeholder:text-white/20 py-4 focus:outline-none focus:placeholder:text-white/10 transition-colors"
                    />
                    {formik.touched[id as 'name' | 'email'] && formik.errors[id as 'name' | 'email'] && (
                      <p className="text-[10px] text-red-400/70 pb-2">{formik.errors[id as 'name' | 'email']}</p>
                    )}
                  </div>
                ))}

                <div className="border-b border-white/[0.08]">
                  <textarea
                    id="message"
                    name="message"
                    value={formik.values.message}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    rows={4}
                    placeholder="Tell us about your project"
                    className="w-full bg-transparent text-white text-sm placeholder:text-white/20 py-4 focus:outline-none resize-none transition-colors"
                  />
                  {formik.touched.message && formik.errors.message && (
                    <p className="text-[10px] text-red-400/70 pb-2">{formik.errors.message}</p>
                  )}
                </div>

                {submitError && (
                  <p className="mt-4 text-xs text-red-400/80 leading-relaxed">{submitError}</p>
                )}

                <div className="flex justify-end mt-6">
                  <motion.button
                    type="submit"
                    disabled={formik.isSubmitting}
                    className="flex items-center gap-3 text-white text-sm font-bold uppercase tracking-[0.2em] hover:text-white/60 transition-colors disabled:opacity-40"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.15 }}
                  >
                    {formik.isSubmitting ? 'Sending...' : 'Send'}
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </motion.button>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>

      {/* Footer bar */}
      <div className="border-t border-white/[0.06] px-6 sm:px-10 md:px-14 py-5">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">

          <p className="text-[10px] text-white/20 uppercase tracking-widest">
            India — Remote & On-site
          </p>

          <a
            href="#"
            className="flex items-center gap-2 text-[10px] text-white/20 hover:text-white/60 uppercase tracking-widest transition-colors"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" strokeWidth="1" />
              <line x1="12" y1="8" x2="12" y2="16" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M8 11l4-4 4 4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Go Top
          </a>

          <p className="text-[10px] text-white/20 uppercase tracking-widest">
            2026 © Copyright
          </p>

        </div>
      </div>

    </section>
  );
}
