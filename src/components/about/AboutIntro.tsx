import React from 'react';
import { motion, type Variants, useReducedMotion } from 'framer-motion';
import { MapPin, Sparkles, Terminal } from 'lucide-react';

const transitionEase = [0.16, 1, 0.3, 1] as const;

export const AboutIntro: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.1,
        delayChildren: shouldReduceMotion ? 0 : 0.05,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.3 : 0.8,
        ease: transitionEase,
      },
    },
  };

  const lineVariants: Variants = {
    hidden: { y: '100%', opacity: 0 },
    visible: {
      y: '0%',
      opacity: 1,
      transition: {
        duration: shouldReduceMotion ? 0.3 : 0.9,
        ease: transitionEase,
      },
    },
  };

  return (
    <section
      aria-label="About Introduction"
      className="relative w-full pt-8 sm:pt-12 md:pt-16 pb-16 sm:pb-24 select-none overflow-hidden"
    >
      {/* Subtle warm ambient glow in top corner */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none -mt-20" />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="max-w-[1520px] mx-auto px-6 sm:px-10 md:px-14 lg:px-16 space-y-8 md:space-y-12 relative z-10"
      >
        {/* Top Meta Bar: Eyebrow + Live Status Badge */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-border/50"
        >
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse-subtle" />
            <span className="text-[12px] md:text-[13px] font-mono font-semibold tracking-[0.2em] uppercase text-accent">
              ABOUT ME
            </span>
          </div>

          <div className="flex items-center gap-3 text-[11px] font-mono text-secondary-muted uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-secondary">AVAILABLE FOR COLLABORATION // 2026</span>
          </div>
        </motion.div>

        {/* Large Display Headline with Masked Reveals */}
        <div className="space-y-0 text-left">
          <div className="overflow-hidden block py-1">
            <motion.h1
              variants={lineVariants}
              className="text-[38px] sm:text-[56px] md:text-[76px] lg:text-[92px] xl:text-[104px] font-black text-primary tracking-tighter leading-[0.92] uppercase"
            >
              I’M INTERESTED IN
            </motion.h1>
          </div>

          <div className="overflow-hidden block py-1">
            <motion.h1
              variants={lineVariants}
              className="text-[38px] sm:text-[56px] md:text-[76px] lg:text-[92px] xl:text-[104px] font-black text-primary tracking-tighter leading-[0.92] uppercase"
            >
              HOW IDEAS BECOME
            </motion.h1>
          </div>

          <div className="overflow-hidden block py-1">
            <motion.h1
              variants={lineVariants}
              className="text-[38px] sm:text-[56px] md:text-[76px] lg:text-[92px] xl:text-[104px] font-black text-primary tracking-tighter leading-[0.92] uppercase"
            >
              REAL THINGS<span className="text-accent">.</span>
            </motion.h1>
          </div>
        </div>

        {/* Supporting Statement & Metadata Chips Grid */}
        <motion.div variants={itemVariants} className="space-y-8 pt-2">
          <p className="text-[20px] sm:text-[23px] md:text-[26px] text-secondary leading-relaxed font-normal tracking-tight max-w-[820px]">
            I build software, experiment with AI, and turn ideas into products that are useful, usable, and real.
          </p>

          {/* Editorial Pill Chips */}
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 pt-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface border border-border text-[11px] font-mono text-primary shadow-subtle">
              <MapPin className="w-3.5 h-3.5 text-accent" />
              <span>HYDERABAD, INDIA</span>
            </div>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface border border-border text-[11px] font-mono text-primary shadow-subtle">
              <Terminal className="w-3.5 h-3.5 text-accent" />
              <span>CS STUDENT & BUILDER</span>
            </div>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface border border-border text-[11px] font-mono text-primary shadow-subtle">
              <Sparkles className="w-3.5 h-3.5 text-accent" />
              <span>0 → 1 PRODUCT CRAFT</span>
            </div>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-subtle border border-border/70 text-[11px] font-mono text-secondary-muted">
              <span>WOXSEN UNIVERSITY</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};
