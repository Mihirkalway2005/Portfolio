import React, { useState } from 'react';
import { motion, AnimatePresence, type Variants, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, Sparkles } from 'lucide-react';

import iscbLogo from '../../public/ISCB-2.png';
import wjcLogo from '../../public/WJC2.png';
import cotdLogo from '../../public/COTD-2.png';
import ecellLogo from '../../public/ECELL-2.png';

const transitionEase = [0.16, 1, 0.3, 1] as const;

export interface ExperienceData {
  number: string;
  id: string;
  title: string;
  subtitle: string;
  role: string;
  period: string;
  category: string;
  tag: string;
  quote?: string;
  description: string;
  pillars: string[];
  logo: string;
  alt: string;
  backgroundGradient: string;
  glowGradient: string;
  accentColor: string;
  logoClassName?: string;
}

const experiences: ExperienceData[] = [
  {
    number: '01',
    id: 'iscb',
    title: 'ISCB',
    subtitle: 'International Strategy Consulting Board',
    role: 'Startup Consulting & Global Collaboration',
    period: '2024 — Present',
    category: 'Global Strategy & Consulting',
    tag: 'GLOBAL STRATEGY',
    quote: '“I work at the intersection of startups, students and opportunity.”',
    description:
      'I collaborate with startups across different parts of the world, understand their challenges, contribute to their initiatives, and connect them with students who can create real-world value.',
    pillars: [
      'Startup Consulting',
      'Global Collaboration',
      'Student Opportunities',
      'Cross-Functional Work',
    ],
    logo: iscbLogo,
    alt: 'ISCB — International Strategy Consulting Board logo',
    backgroundGradient:
      'radial-gradient(ellipse at 65% 30%, rgba(255, 90, 0, 0.16) 0%, rgba(139, 26, 68, 0.22) 40%, #09080E 85%)',
    glowGradient:
      'radial-gradient(circle, rgba(255, 90, 0, 0.35) 0%, rgba(180, 30, 80, 0.2) 60%, transparent 80%)',
    accentColor: '#FF5A00',
    logoClassName: 'filter drop-shadow-[0_16px_32px_rgba(255,90,0,0.22)] brightness-[1.1] contrast-[1.04]',
  },
  {
    number: '02',
    id: 'japan-center',
    title: 'Woxsen Japan Centre',
    subtitle: 'Woxsen Japan Centre',
    role: 'Student Coordination · Cross-Cultural Engagement',
    period: '2024 — Present',
    category: 'Global & Academic Initiatives',
    tag: 'CULTURAL EXCHANGE',
    quote: '“Facilitating cross-cultural student coordination & global initiatives.”',
    description:
      'Facilitating cross-cultural student engagement, coordinating academic and cultural initiatives, and fostering collaborative international connections.',
    pillars: ['Cross-Cultural Programs', 'Student Coordination', 'Global Outlook'],
    logo: wjcLogo,
    alt: 'Woxsen Japan Centre logo',
    backgroundGradient:
      'radial-gradient(ellipse at 50% 35%, rgba(255, 90, 0, 0.08) 0%, rgba(22, 24, 34, 0.5) 50%, #07070B 88%)',
    glowGradient:
      'radial-gradient(circle, rgba(255, 90, 0, 0.18) 0%, rgba(30, 32, 45, 0.12) 50%, transparent 75%)',
    accentColor: '#FF5A00',
    logoClassName: 'filter drop-shadow-[0_16px_28px_rgba(0,0,0,0.5)] brightness-[1.02]',
  },
  {
    number: '03',
    id: 'cotd',
    title: 'COTD',
    subtitle: 'Centre of Talent Development',
    role: 'L&D Ambassador',
    period: '2024 — Present',
    category: 'Talent Development & Career Readiness',
    tag: 'TALENT DEVELOPMENT',
    quote: '“Helping students become more career-ready.”',
    description:
      'As an L&D Ambassador, I work with peers to make learning more engaging and help students become better prepared for placements, internships and professional opportunities.',
    pillars: [
      'Placement Preparation',
      'Resume Building',
      'Interview Preparation',
      'Soft Skills',
      'Learning & Development',
    ],
    logo: cotdLogo,
    alt: 'Centre of Talent Development — Woxsen University logo',
    backgroundGradient:
      'radial-gradient(ellipse at 50% 35%, rgba(245, 158, 11, 0.2) 0%, rgba(23, 37, 84, 0.4) 45%, #050814 85%)',
    glowGradient:
      'radial-gradient(circle, rgba(245, 158, 11, 0.32) 0%, rgba(30, 58, 138, 0.25) 60%, transparent 80%)',
    accentColor: '#F59E0B',
    logoClassName: 'filter drop-shadow-[0_20px_40px_rgba(245,158,11,0.25)] contrast-[1.03]',
  },
  {
    number: '04',
    id: 'e-cell',
    title: 'E-Cell',
    subtitle: 'Woxsen E-Cell · Venture & Incubation',
    role: 'Entrepreneurship Cell · Ecosystem & Innovation',
    period: '2023 — 2025',
    category: 'Venture & Student Innovation',
    tag: 'VENTURE ECOSYSTEM',
    quote: '“Fostering student entrepreneurship & early-stage builders.”',
    description:
      'Driving student entrepreneurship programs, organizing venture initiatives, and fostering a collaborative ecosystem for early-stage builders and innovators.',
    pillars: ['Venture Ecosystem', 'Student Innovation', 'Initiative Leadership'],
    logo: ecellLogo,
    alt: 'E-Cell — Woxsen University logo',
    backgroundGradient:
      'radial-gradient(ellipse at 50% 35%, rgba(16, 185, 129, 0.18) 0%, rgba(15, 23, 42, 0.4) 45%, #050B0E 85%)',
    glowGradient:
      'radial-gradient(circle, rgba(16, 185, 129, 0.28) 0%, rgba(6, 182, 212, 0.18) 60%, transparent 80%)',
    accentColor: '#10B981',
    logoClassName: 'filter drop-shadow-[0_18px_36px_rgba(16,185,129,0.22)] brightness-[1.06] contrast-[1.04]',
  },
];

export const ExperienceSection: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const shouldReduceMotion = useReducedMotion();

  // Editorial headline animation variants
  const headlineLineVariants: Variants = {
    hidden: { y: '105%', opacity: 0.1 },
    visible: (custom: number) => ({
      y: '0%',
      opacity: 1,
      transition: {
        duration: shouldReduceMotion ? 0.3 : 0.9,
        ease: transitionEase,
        delay: shouldReduceMotion ? 0 : 0.12 + custom * 0.12,
      },
    }),
  };

  const supportingVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.3 : 0.8,
        ease: transitionEase,
        delay: shouldReduceMotion ? 0 : 0.35,
      },
    },
  };

  return (
    <section
      id="experience"
      aria-label="Experience"
      className="relative w-full border-t border-border/80 bg-background py-20 sm:py-28 md:py-36 select-none overflow-hidden"
    >
      <div className="w-[94vw] max-w-[1680px] mx-auto space-y-16 sm:space-y-20 md:space-y-28">
        {/* ========================================================================= */}
        {/* 1. SECTION INTRO & EDITORIAL HEADLINE                                     */}
        {/* ========================================================================= */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05, margin: '0px 0px -40px 0px' }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end pb-8 sm:pb-12 border-b border-border/60"
        >
          {/* Left Column: Label + Masked Display Headline (7 cols) */}
          <div className="lg:col-span-7 space-y-5 md:space-y-7">
            <motion.div variants={supportingVariants} className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse-subtle" />
              <span className="text-[12px] md:text-[13px] font-mono font-semibold tracking-[0.2em] uppercase text-accent">
                05 / EXPERIENCE
              </span>
            </motion.div>

            <div className="space-y-0 text-left">
              <div className="text-mask-wrapper">
                <motion.h2
                  custom={0}
                  variants={headlineLineVariants}
                  className="text-[44px] sm:text-[62px] md:text-[80px] lg:text-[96px] xl:text-[108px] font-black text-primary tracking-tighter leading-[0.9] uppercase"
                >
                  WHERE I
                </motion.h2>
              </div>

              <div className="text-mask-wrapper">
                <motion.h2
                  custom={1}
                  variants={headlineLineVariants}
                  className="text-[44px] sm:text-[62px] md:text-[80px] lg:text-[96px] xl:text-[108px] font-black text-primary tracking-tighter leading-[0.9] uppercase"
                >
                  GAINED EXPERIENCE<span className="text-accent">.</span>
                </motion.h2>
              </div>
            </div>
          </div>

          {/* Right Column: Supporting Statement & Meta Count (5 cols) */}
          <motion.div
            variants={supportingVariants}
            className="lg:col-span-5 flex flex-col justify-between space-y-6 lg:pb-3"
          >
            <p className="text-[17px] sm:text-[19px] md:text-[21px] text-secondary leading-relaxed font-normal tracking-tight max-w-[500px]">
              Beyond writing standalone code, my journey spans global startup consulting, cross-cultural coordination, and active innovation ecosystems.
            </p>

            <div className="flex items-center justify-between pt-2 border-t border-border/50 text-[11px] font-mono uppercase text-secondary tracking-widest">
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                <span>04 ROLES & ENGAGEMENTS</span>
              </span>
              <span>2023 — 2026</span>
            </div>
          </motion.div>
        </motion.div>

        {/* ========================================================================= */}
        {/* 2. FULL-WIDTH EXPERIENCE CARDS LIST (EXPANSIVE 94VW FOOTPRINT)           */}
        {/* ========================================================================= */}
        <div className="space-y-12 sm:space-y-16 md:space-y-20">
          {experiences.map((item) => {
            const isHovered = hoveredId === item.id;

            return (
              <div
                key={item.id}
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
                tabIndex={0}
                onFocus={() => setHoveredId(item.id)}
                onBlur={() => setHoveredId(null)}
                onClick={() => setHoveredId(isHovered ? null : item.id)}
                className="relative w-full lg:h-[540px] xl:h-[580px] cursor-pointer outline-none select-none"
              >
                {/* ----------------------------------------------------------------- */}
                {/* DESKTOP VIEWPORT: 60FPS GPU COMPOSITED TWO-CARD UNFOLDING         */}
                {/* ----------------------------------------------------------------- */}
                <div className="hidden lg:block relative w-full h-full">
                  {/* CARD 1: DETAILS CARD (Hidden initially at opacity: 0, reveals on hover) */}
                  <motion.div
                    initial={false}
                    animate={{
                      x: shouldReduceMotion
                        ? '0%'
                        : isHovered
                        ? '0%'
                        : 'calc(50% + 14px)',
                      opacity: isHovered ? 1 : 0,
                    }}
                    transition={{
                      duration: shouldReduceMotion ? 0.2 : 0.65,
                      ease: transitionEase,
                    }}
                    className="absolute top-0 bottom-0 left-0 w-[calc(50%-14px)] z-10 will-change-transform"
                    style={{
                      transform: 'translateZ(0)',
                      pointerEvents: isHovered ? 'auto' : 'none',
                    }}
                  >
                    <div
                      className={`relative w-full h-full p-8 sm:p-10 md:p-12 xl:p-14 flex flex-col justify-between rounded-3xl bg-[#0D0E13] border transition-colors duration-300 shadow-2xl ${
                        isHovered
                          ? 'border-white/20'
                          : 'border-white/[0.09]'
                      }`}
                    >
                      {/* Top Row: Index + Category + Period + Arrow */}
                      <div className="flex items-center justify-between border-b border-white/[0.08] pb-6">
                        <div className="flex items-center gap-3.5">
                          <span className="font-mono text-[14px] sm:text-[15px] font-bold text-accent">
                            {item.number}
                          </span>
                          <span className="text-[11px] sm:text-[12px] font-mono tracking-[0.18em] uppercase text-white/70 bg-white/[0.05] px-3.5 py-1 rounded-full border border-white/10">
                            {item.category}
                          </span>
                        </div>

                        <div className="flex items-center gap-4">
                          <span className="text-[12px] sm:text-[13px] font-mono text-white/50 uppercase tracking-wider hidden sm:inline-block">
                            {item.period}
                          </span>
                          <div
                            className={`w-9 h-9 rounded-full border flex items-center justify-center transition-all duration-300 ${
                              isHovered
                                ? 'border-accent bg-accent text-white shadow-md'
                                : 'border-white/20 text-white/60'
                            }`}
                          >
                            <ArrowUpRight className="w-4 h-4" />
                          </div>
                        </div>
                      </div>

                      {/* Middle Content: Large Typography & Narrative */}
                      <div className="space-y-4 sm:space-y-5 my-auto py-4">
                        <div className="flex items-baseline gap-3.5">
                          <span
                            className={`w-2.5 h-2.5 rounded-full bg-accent transition-all duration-300 shrink-0 self-center ${
                              isHovered
                                ? 'opacity-100 scale-100'
                                : 'opacity-0 scale-0'
                            }`}
                          />
                          <div className="space-y-1.5">
                            <h3
                              className={`text-[36px] sm:text-[48px] md:text-[56px] lg:text-[64px] xl:text-[72px] font-black uppercase tracking-tight text-white leading-[0.98] transition-transform duration-300 ${
                                isHovered ? 'translate-x-1' : ''
                              }`}
                            >
                              {item.title}
                            </h3>
                            {item.subtitle && (
                              <p className="text-[13px] sm:text-[14px] md:text-[15px] font-mono uppercase tracking-wider text-white/50">
                                // {item.subtitle}
                              </p>
                            )}
                          </div>
                        </div>

                        <div className="pl-6 text-[13px] sm:text-[14px] md:text-[15px] font-mono tracking-[0.15em] uppercase text-accent font-semibold">
                          {item.role}
                        </div>

                        {item.quote && (
                          <p className="pl-6 text-[14px] sm:text-[15px] md:text-[16px] font-mono uppercase tracking-wider text-white/85 font-medium">
                            {item.quote}
                          </p>
                        )}

                        <p className="pl-6 text-[15px] sm:text-[16px] md:text-[17px] xl:text-[18px] text-secondary leading-relaxed font-normal max-w-[680px]">
                          {item.description}
                        </p>
                      </div>

                      {/* Bottom Row: Key Focus Pillars */}
                      <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 pt-5 border-t border-white/[0.08]">
                        {item.pillars.map((tag) => (
                          <span
                            key={tag}
                            className="text-[11px] sm:text-[12px] font-mono tracking-wider uppercase text-white/70 bg-white/[0.04] px-3.5 py-1.5 rounded-lg border border-white/10 shadow-subtle"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>

                  {/* CARD 2: LOGO CARD (Visible by default in center, slides right on hover) */}
                  <motion.div
                    initial={false}
                    animate={{
                      x: shouldReduceMotion
                        ? '0%'
                        : isHovered
                        ? '0%'
                        : 'calc(-50% - 14px)',
                    }}
                    transition={{
                      duration: shouldReduceMotion ? 0.2 : 0.65,
                      ease: transitionEase,
                    }}
                    className="absolute top-0 bottom-0 right-0 w-[calc(50%-14px)] z-20 will-change-transform"
                    style={{ transform: 'translateZ(0)' }}
                  >
                    <div
                      className="relative w-full h-full p-8 sm:p-10 md:p-12 xl:p-14 flex flex-col justify-between rounded-3xl bg-[#09080E] border border-white/[0.1] shadow-2xl overflow-hidden select-none"
                      style={{ background: item.backgroundGradient }}
                    >
                      {/* Top Row: Meta Label & Category Tag */}
                      <div className="relative z-10 flex items-center justify-between border-b border-white/[0.08] pb-6">
                        <div className="flex items-center gap-2.5">
                          <span
                            className="w-2 h-2 rounded-full animate-pulse-subtle"
                            style={{ backgroundColor: item.accentColor }}
                          />
                          <span
                            className="text-[12px] font-mono tracking-[0.2em] uppercase font-bold"
                            style={{ color: item.accentColor }}
                          >
                            {item.number} // {item.title}
                          </span>
                        </div>
                        <span className="text-[11px] font-mono tracking-widest text-white/60 uppercase border border-white/10 px-3 py-1 rounded-full bg-white/[0.04] backdrop-blur-sm">
                          {item.tag}
                        </span>
                      </div>

                      {/* Hero Transparent Logo (Large, Centered) */}
                      <div className="relative z-10 flex-1 flex items-center justify-center my-6">
                        <div className="relative max-w-[320px] sm:max-w-[380px] md:max-w-[440px] lg:max-w-[480px] max-h-[280px] sm:max-h-[320px] md:max-h-[360px] w-full aspect-auto flex items-center justify-center">
                          <img
                            src={item.logo}
                            alt={item.alt}
                            className={`w-full h-full object-contain ${item.logoClassName || ''}`}
                            loading="eager"
                          />
                        </div>
                      </div>

                      {/* Bottom Row: Full Organization Subtitle */}
                      <div className="relative z-10 text-center border-t border-white/[0.08] pt-5">
                        <p className="text-[14px] sm:text-[15px] md:text-[16px] font-medium text-white/90 tracking-tight">
                          {item.subtitle}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* ----------------------------------------------------------------- */}
                {/* MOBILE / TABLET VIEWPORT: STACKED REVEAL                          */}
                {/* ----------------------------------------------------------------- */}
                <div className="block lg:hidden space-y-4">
                  {/* Mobile Logo Card (Shown First / Always Visible) */}
                  <div
                    className="w-full p-8 sm:p-10 rounded-3xl bg-[#09080E] border border-white/[0.1] shadow-2xl flex flex-col items-center justify-center space-y-4"
                    style={{ background: item.backgroundGradient }}
                  >
                    <div className="max-w-[260px] sm:max-w-[320px] h-[190px] flex items-center justify-center">
                      <img
                        src={item.logo}
                        alt={item.alt}
                        className={`w-full h-full object-contain ${item.logoClassName || ''}`}
                      />
                    </div>
                    <p className="text-[14px] font-medium text-white/90 text-center">
                      {item.subtitle}
                    </p>
                    <div className="pt-1 text-center">
                      <span className="text-[11px] font-mono uppercase tracking-widest text-accent flex items-center justify-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>{isHovered ? 'Tap to hide details' : 'Tap for details'}</span>
                      </span>
                    </div>
                  </div>

                  {/* Mobile Details Card (Revealed on Tap) */}
                  <AnimatePresence>
                    {isHovered && (
                      <motion.div
                        initial={{ opacity: 0, height: 0, y: -10 }}
                        animate={{ opacity: 1, height: 'auto', y: 0 }}
                        exit={{ opacity: 0, height: 0, y: -10 }}
                        transition={{ duration: 0.35, ease: transitionEase }}
                        className="w-full overflow-hidden"
                      >
                        <div className="relative w-full p-7 sm:p-9 rounded-3xl bg-[#0D0E13] border border-white/[0.1] shadow-2xl space-y-6">
                          <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
                            <div className="flex items-center gap-2.5">
                              <span className="font-mono text-[14px] font-bold text-accent">
                                {item.number}
                              </span>
                              <span className="text-[11px] font-mono tracking-wider uppercase text-white/70 bg-white/[0.05] px-3.5 py-1 rounded-full border border-white/10">
                                {item.category}
                              </span>
                            </div>
                            <span className="text-[12px] font-mono text-white/50 uppercase">
                              {item.period}
                            </span>
                          </div>

                          <div className="space-y-3">
                            <h3 className="text-[32px] sm:text-[40px] font-black tracking-tight text-white uppercase leading-tight">
                              {item.title}
                            </h3>
                            <div className="text-[13px] font-mono tracking-wider uppercase text-accent font-semibold">
                              {item.role}
                            </div>
                            {item.quote && (
                              <p className="text-[13px] font-mono uppercase text-white/80">
                                {item.quote}
                              </p>
                            )}
                            <p className="text-[15px] text-secondary leading-relaxed">
                              {item.description}
                            </p>
                          </div>

                          <div className="flex flex-wrap gap-2 pt-3 border-t border-white/[0.08]">
                            {item.pillars.map((tag) => (
                              <span
                                key={tag}
                                className="text-[11px] font-mono uppercase text-white/70 bg-white/[0.04] px-3 py-1 rounded border border-white/10"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
