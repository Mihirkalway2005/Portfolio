import React, { useState } from 'react';
import { motion, type Variants, useReducedMotion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import {
  IscbVisual,
  JapanCenterVisual,
  CotdVisual,
  ECellVisual,
} from './ExperienceVisuals';

const transitionEase = [0.16, 1, 0.3, 1] as const;

export interface ExperienceItem {
  number: string;
  id: string;
  title: string;
  subtitle?: string;
  role: string;
  period: string;
  category: string;
  quote?: string;
  description: string;
  pillars: string[];
  visualComponent: React.FC<{ isActive?: boolean }>;
}

const experiences: ExperienceItem[] = [
  {
    number: '01',
    id: 'iscb',
    title: 'ISCB',
    subtitle: 'International Strategy Consulting Board',
    role: 'Startup Consulting & Global Collaboration',
    period: '2024 — Present',
    category: 'Global Strategy & Consulting',
    quote: '“I work at the intersection of startups, students and opportunity.”',
    description:
      'I collaborate with startups across different parts of the world, understand their challenges, contribute to their initiatives, and connect them with students who can create real-world value.',
    pillars: [
      'Startup Consulting',
      'Global Collaboration',
      'Student Opportunities',
      'Cross-Functional Work',
    ],
    visualComponent: IscbVisual,
  },
  {
    number: '02',
    id: 'japan-center',
    title: 'Woxsen Japan Centre',
    subtitle: 'Academic & Cultural Exchange',
    role: 'Student Coordination · Cross-Cultural Engagement',
    period: '2024 — Present',
    category: 'Global & Academic Initiatives',
    description:
      'Facilitating cross-cultural student engagement, coordinating academic and cultural initiatives, and fostering collaborative international connections.',
    pillars: ['Cross-Cultural Programs', 'Student Coordination', 'Global Outlook'],
    visualComponent: JapanCenterVisual,
  },
  {
    number: '03',
    id: 'cotd',
    title: 'COTD',
    subtitle: 'Centre of Talent Development',
    role: 'L&D Ambassador',
    period: '2024 — Present',
    category: 'Talent Development & Career Readiness',
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
    visualComponent: CotdVisual,
  },
  {
    number: '04',
    id: 'e-cell',
    title: 'E-Cell',
    subtitle: 'Venture & Incubation Cell',
    role: 'Entrepreneurship Cell · Ecosystem & Innovation',
    period: '2023 — 2025',
    category: 'Venture & Student Innovation',
    description:
      'Driving student entrepreneurship programs, organizing venture initiatives, and fostering a collaborative ecosystem for early-stage builders and innovators.',
    pillars: ['Venture Ecosystem', 'Student Innovation', 'Initiative Leadership'],
    visualComponent: ECellVisual,
  },
];

export const ExperienceSection: React.FC = () => {
  const [activeId, setActiveId] = useState<string>(experiences[0].id);
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

  const rowVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.3 : 0.75,
        ease: transitionEase,
        delay: shouldReduceMotion ? 0 : 0.15 + index * 0.08,
      },
    }),
  };

  return (
    <section
      id="experience"
      aria-label="Experience"
      className="relative w-full border-t border-border/80 bg-background py-24 sm:py-32 md:py-44 select-none"
    >
      <div className="max-w-[1520px] mx-auto px-6 sm:px-10 md:px-14 lg:px-16 space-y-16 sm:space-y-20 md:space-y-28">
        {/* ========================================================================= */}
        {/* SECTION INTRO & EDITORIAL HEADLINE                                        */}
        {/* ========================================================================= */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05, margin: '0px 0px -40px 0px' }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end pb-8 sm:pb-12 border-b border-border/60"
        >
          {/* Left Column: Label + Masked Display Headline (7 cols) */}
          <div className="lg:col-span-7 space-y-5 md:space-y-7">
            {/* Editorial Label: 05 / EXPERIENCE */}
            <motion.div variants={supportingVariants} className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse-subtle" />
              <span className="text-[12px] md:text-[13px] font-mono font-semibold tracking-[0.2em] uppercase text-accent">
                05 / EXPERIENCE
              </span>
            </motion.div>

            {/* Display Headline */}
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
        {/* MAIN EDITORIAL EXPERIENCE LIST & VISUAL PREVIEW ZONE                     */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
          {/* Left / Main Column: Editorial Experience Rows (7 or 8 cols on desktop) */}
          <div className="lg:col-span-7 xl:col-span-8 flex flex-col">
            {experiences.map((item, index) => {
              const isSelected = item.id === activeId;

              return (
                <motion.article
                  key={item.id}
                  custom={index}
                  variants={rowVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.1 }}
                  onMouseEnter={() => setActiveId(item.id)}
                  onClick={() => setActiveId(item.id)}
                  tabIndex={0}
                  onFocus={() => setActiveId(item.id)}
                  className={`group relative w-full py-10 sm:py-14 md:py-16 border-t border-border/70 last:border-b transition-colors duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] cursor-pointer outline-none focus-visible:ring-1 focus-visible:ring-accent ${
                    isSelected ? 'bg-surface/30' : 'hover:bg-surface/20'
                  }`}
                >
                  <div className="flex flex-col space-y-5 sm:space-y-6">
                    {/* Top Row: Index number + Category + Active Indicator */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span
                          className={`font-mono text-[13px] sm:text-[14px] font-bold transition-colors duration-300 ${
                            isSelected ? 'text-accent' : 'text-secondary-muted group-hover:text-accent'
                          }`}
                        >
                          {item.number}
                        </span>
                        <span className="text-[11px] font-mono tracking-[0.18em] uppercase text-secondary-muted bg-surface-subtle px-2.5 py-0.5 rounded border border-border/60">
                          {item.category}
                        </span>
                      </div>

                      <div className="flex items-center gap-3">
                        <span className="text-[11px] font-mono text-secondary-muted uppercase tracking-wider hidden sm:inline-block">
                          {item.period}
                        </span>
                        {/* Hover Arrow Icon */}
                        <div
                          className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${
                            isSelected
                              ? 'border-accent bg-accent text-white shadow-sm'
                              : 'border-border/80 text-secondary group-hover:border-accent group-hover:text-accent group-hover:translate-x-1'
                          }`}
                        >
                          <ArrowUpRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>

                    {/* Middle Row: Large Title with Orange Dot on Hover */}
                    <div className="flex items-baseline gap-3">
                      <span
                        className={`w-2 h-2 rounded-full bg-accent transition-all duration-300 shrink-0 self-center ${
                          isSelected ? 'opacity-100 scale-100' : 'opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100'
                        }`}
                      />
                      <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                        <h3
                          className={`text-[28px] sm:text-[38px] md:text-[46px] lg:text-[52px] xl:text-[58px] font-black tracking-tight uppercase leading-[1.02] transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                            isSelected
                              ? 'text-primary translate-x-1.5 sm:translate-x-2'
                              : 'text-primary/90 group-hover:text-primary group-hover:translate-x-1.5 sm:group-hover:translate-x-2'
                          }`}
                        >
                          {item.title}
                        </h3>
                        {item.subtitle && (
                          <span className="text-[12px] sm:text-[13px] md:text-[14px] font-mono uppercase tracking-wider text-secondary-muted">
                            // {item.subtitle}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Sub-Headline: Role & Context */}
                    <div className="pl-5 sm:pl-5 space-y-3">
                      <div className="text-[12px] sm:text-[13px] font-mono tracking-[0.15em] uppercase text-accent font-semibold">
                        {item.role}
                      </div>

                      {/* Positioning Quote (if present) */}
                      {item.quote && (
                        <p className="text-[13px] sm:text-[14px] font-mono uppercase tracking-wider text-primary/80 font-medium">
                          {item.quote}
                        </p>
                      )}

                      {/* Description */}
                      <p className="text-[15px] sm:text-[16px] md:text-[17px] text-secondary leading-relaxed font-normal max-w-[640px]">
                        {item.description}
                      </p>

                      {/* Editorial Focus Tags */}
                      <div className="flex flex-wrap items-center gap-2 pt-1">
                        {item.pillars.map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] sm:text-[11px] font-mono tracking-wider uppercase text-secondary bg-surface px-2.5 py-1 rounded border border-border/70 shadow-subtle"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Mobile Inline Visual preview (rendered only on small screens for easy tap exploration) */}
                      <div className="pt-4 lg:hidden block">
                        {isSelected && (
                          <div className="pt-2">
                            <item.visualComponent isActive={true} />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>

          {/* Right Column: Sticky Contextual Visual Preview (Desktop Only) */}
          <div className="hidden lg:block lg:col-span-5 xl:col-span-4 sticky top-28 pt-2">
            <div className="relative w-full min-h-[440px] sm:min-h-[480px] md:min-h-[500px]">
              {experiences.map((item) => {
                const isCurrent = item.id === activeId;
                return (
                  <motion.div
                    key={item.id}
                    initial={false}
                    animate={{
                      opacity: isCurrent ? 1 : 0,
                      scale: isCurrent ? 1 : 0.98,
                    }}
                    transition={{
                      duration: shouldReduceMotion ? 0.15 : 0.35,
                      ease: transitionEase,
                    }}
                    className={`absolute inset-0 w-full h-full transform-gpu ${
                      isCurrent ? 'pointer-events-auto z-10' : 'pointer-events-none z-0'
                    }`}
                  >
                    <item.visualComponent isActive={isCurrent} />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
