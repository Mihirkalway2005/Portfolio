import React, { useState } from 'react';
import { motion, type Variants } from 'framer-motion';
import { Code2, Cpu, Palette, Zap, ArrowUpRight } from 'lucide-react';
import { Button } from '../common/Button';

// Easing curve matching Folioblox premium editorial pacing
const transitionEase = [0.16, 1, 0.3, 1] as const;

interface CorePillar {
  number: string;
  title: string;
  category: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

const pillars: CorePillar[] = [
  {
    number: '01',
    title: 'Software Engineering',
    category: 'Full-Stack Systems',
    description: 'Crafting high-performance web applications, robust distributed backends, and resilient infrastructure built to scale.',
    icon: Code2,
  },
  {
    number: '02',
    title: 'Intelligent Systems',
    category: 'AI & Autonomy',
    description: 'Integrating modern machine intelligence, generative workflows, and agentic pipelines into practical software tools.',
    icon: Cpu,
  },
  {
    number: '03',
    title: 'Product & Design Craft',
    category: 'Interaction Design',
    description: 'Designing human-centric digital interfaces with editorial typography, obsessive micro-interactions, and visual harmony.',
    icon: Palette,
  },
  {
    number: '04',
    title: 'Rapid Prototyping',
    category: '0 → 1 Execution',
    description: 'Taking rough concepts and speculative ideas from whiteboard to functioning, testable digital reality at high velocity.',
    icon: Zap,
  },
];

export const IntroSection: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Label reveal animation
  const labelVariants: Variants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: transitionEase,
        delay: 0.05,
      },
    },
  };

  // Main statement line mask animation variants
  const statementLineVariants: Variants = {
    hidden: { y: '105%', opacity: 0.1 },
    visible: (custom: number) => ({
      y: '0%',
      opacity: 1,
      transition: {
        duration: 0.9,
        ease: transitionEase,
        delay: 0.18 + custom * 0.12,
      },
    }),
  };

  // Right-side supporting paragraph reveal
  const paragraphVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.85,
        ease: transitionEase,
        delay: 0.45,
      },
    },
  };

  // Pillar card staggered reveals
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 32 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: transitionEase,
        delay: 0.55 + custom * 0.1,
      },
    }),
  };

  // Quote banner reveal
  const quoteVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.85,
        ease: transitionEase,
        delay: 0.95,
      },
    },
  };

  return (
    <section
      id="about"
      aria-label="Who I Am"
      className="relative w-full border-t border-border/70 bg-background py-24 sm:py-32 md:py-40 select-none"
    >
      <div className="max-w-[1520px] mx-auto px-6 sm:px-10 md:px-14 lg:px-16 space-y-20 md:space-y-28">
        {/* ========================================================================= */}
        {/* TOP BLOCK: STATEMENT & PERSONAL NARRATIVE                                 */}
        {/* ========================================================================= */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start"
        >
          {/* Left Column: Label + Large 3-Line Statement (7 cols) */}
          <div className="lg:col-span-7 space-y-6 md:space-y-8">
            {/* Step 1: Small Section Label (WHO I AM) with Orange Accent */}
            <motion.div
              variants={labelVariants}
              className="flex items-center gap-2.5"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse-subtle" />
              <span className="text-[12px] md:text-[13px] font-mono font-semibold tracking-[0.2em] uppercase text-accent">
                WHO I AM
              </span>
            </motion.div>

            {/* Step 2: Main Statement with Line-by-Line Mask Reveal */}
            <div className="space-y-0 text-left">
              {/* Line 1: I BUILD THINGS */}
              <div className="text-mask-wrapper">
                <motion.h2
                  custom={0}
                  variants={statementLineVariants}
                  className="text-[36px] sm:text-[52px] md:text-[68px] lg:text-[78px] xl:text-[88px] font-black text-primary tracking-tighter leading-[0.92] uppercase"
                >
                  I BUILD THINGS
                </motion.h2>
              </div>

              {/* Line 2: THAT TURN IDEAS */}
              <div className="text-mask-wrapper">
                <motion.h2
                  custom={1}
                  variants={statementLineVariants}
                  className="text-[36px] sm:text-[52px] md:text-[68px] lg:text-[78px] xl:text-[88px] font-black text-primary tracking-tighter leading-[0.92] uppercase"
                >
                  THAT TURN IDEAS
                </motion.h2>
              </div>

              {/* Line 3: INTO REALITY. */}
              <div className="text-mask-wrapper">
                <motion.h2
                  custom={2}
                  variants={statementLineVariants}
                  className="text-[36px] sm:text-[52px] md:text-[68px] lg:text-[78px] xl:text-[88px] font-black text-primary tracking-tighter leading-[0.92] uppercase"
                >
                  INTO REALITY<span className="text-accent">.</span>
                </motion.h2>
              </div>
            </div>
          </div>

          {/* Right Column: Short Personal Statement & CTAs (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8 md:space-y-10 lg:pt-14">
            {/* Step 3: Supporting narrative paragraph */}
            <motion.p
              variants={paragraphVariants}
              className="text-[17px] sm:text-[19px] md:text-[21px] text-secondary leading-relaxed font-normal tracking-tight max-w-[480px]"
            >
              I’m a computer science student and builder interested in software, AI, product design, and the systems behind the things people use. I like taking ideas from a rough concept to something real, usable, and meaningful.
            </motion.p>

            {/* Step 4: Refined CTA Buttons */}
            <motion.div
              variants={paragraphVariants}
              className="flex flex-wrap items-center gap-4 pt-1"
            >
              <Button
                variant="primary"
                size="md"
                href="#contact"
              >
                LET'S BUILD SOMETHING
              </Button>

              <Button
                variant="secondary"
                size="md"
                href="#contact"
              >
                GET IN TOUCH
              </Button>
            </motion.div>
          </div>
        </motion.div>

        {/* ========================================================================= */}
        {/* EXTENDED PILLARS GRID: CORE EXPERTISE & BUILDING PHILOSOPHY                */}
        {/* ========================================================================= */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="space-y-8"
        >
          {/* Subtle Section Divider & Subheader */}
          <div className="flex items-center justify-between pb-4 border-b border-border/60">
            <span className="text-[12px] font-mono uppercase tracking-[0.2em] text-secondary">
              CORE PILLARS // HOW I THINK & BUILD
            </span>
            <span className="text-[11px] font-mono text-accent uppercase tracking-widest hidden sm:inline-block">
              [ 04 FOCUS AREAS ]
            </span>
          </div>

          {/* 4-Pillar Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              const isHovered = hoveredIndex === idx;

              return (
                <motion.div
                  key={pillar.number}
                  custom={idx}
                  variants={cardVariants}
                  onMouseEnter={() => setHoveredIndex(idx)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className={`group relative rounded-2xl bg-surface p-7 md:p-8 border transition-all duration-300 flex flex-col justify-between min-h-[260px] ${
                    isHovered
                      ? 'border-accent/60 shadow-card-hover -translate-y-1.5'
                      : 'border-border/80 shadow-editorial'
                  }`}
                >
                  {/* Card Header: Numeral & Category Tag */}
                  <div>
                    <div className="flex items-center justify-between pb-4 border-b border-border/50">
                      <span className="font-mono text-[14px] font-bold text-accent">
                        {pillar.number}
                      </span>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-secondary-muted bg-surface-subtle px-2 py-0.5 rounded border border-border/60">
                          {pillar.category}
                        </span>
                        <ArrowUpRight
                          className={`w-4 h-4 transition-transform duration-300 ${
                            isHovered ? 'text-accent translate-x-0.5 -translate-y-0.5' : 'text-secondary-muted'
                          }`}
                        />
                      </div>
                    </div>

                    {/* Card Title */}
                    <div className="pt-5 flex items-center gap-2.5">
                      <Icon className="w-5 h-5 text-primary shrink-0 group-hover:text-accent transition-colors duration-300" />
                      <h3 className="text-[18px] md:text-[19px] font-bold text-primary tracking-tight">
                        {pillar.title}
                      </h3>
                    </div>

                    {/* Card Description */}
                    <p className="text-[14px] md:text-[15px] text-secondary leading-relaxed font-normal pt-3">
                      {pillar.description}
                    </p>
                  </div>

                  {/* Card Footer Micro Bar */}
                  <div className="pt-6 mt-4 border-t border-border/40 flex items-center justify-between text-[11px] font-mono text-secondary-muted">
                    <span className="uppercase">ENGINEERING DISCIPLINE</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* ========================================================================= */}
        {/* EDITORIAL QUOTE / PRINCIPLE BANNER                                        */}
        {/* ========================================================================= */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={quoteVariants}
          className="relative rounded-2xl bg-surface-muted border border-border/80 p-8 sm:p-10 md:p-12 shadow-subtle overflow-hidden"
        >
          {/* Subtle warm orange corner highlight */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6 md:gap-12">
            <div className="space-y-2 max-w-[800px]">
              <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-accent font-semibold flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                BUILDING PHILOSOPHY
              </span>
              <p className="text-[20px] sm:text-[24px] md:text-[28px] font-bold text-primary tracking-tight leading-snug">
                "Good software should feel intuitive. Good engineering should feel invisible."
              </p>
            </div>

            <div className="shrink-0 flex items-center gap-3 border-t md:border-t-0 md:border-l border-border/70 pt-4 md:pt-0 md:pl-8 text-[12px] font-mono uppercase text-secondary">
              <span className="w-2 h-2 rounded-full bg-accent" />
              <span>MIHIR KALWAY // PERSPECTIVE</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
