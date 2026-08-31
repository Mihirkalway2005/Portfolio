import React from 'react';
import { motion, type Variants } from 'framer-motion';

// Easing curve matching Folioblox premium editorial pacing
const transitionEase = [0.16, 1, 0.3, 1] as const;

export const HeroSection: React.FC = () => {
  // Staggered line mask animation for the stacked name
  const nameLineVariants: Variants = {
    hidden: { y: '105%', opacity: 0.1 },
    visible: (custom: number) => ({
      y: '0%',
      opacity: 1,
      transition: {
        duration: 0.95,
        ease: transitionEase,
        delay: 0.15 + custom * 0.14,
      },
    }),
  };

  // Secondary descriptors reveal (Builder / Engineer / Explorer)
  const descriptorVariants: Variants = {
    hidden: { opacity: 0, y: 22 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.85,
        ease: transitionEase,
        delay: 0.55,
      },
    },
  };

  // Supporting statement reveal
  const statementVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: transitionEase,
        delay: 0.78,
      },
    },
  };

  // Buttons reveal
  const buttonsVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: transitionEase,
        delay: 0.95,
      },
    },
  };

  const handleScrollToWork = (e: React.MouseEvent) => {
    e.preventDefault();
    const workElem = document.getElementById('work');
    if (workElem) {
      workElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      aria-label="Hero"
      className="relative min-h-[calc(100vh-5rem)] w-full flex flex-col justify-between px-6 sm:px-10 md:px-14 lg:px-16 pt-6 sm:pt-8 md:pt-12 pb-10 max-w-[1520px] mx-auto select-none"
    >
      {/* ========================================================================= */}
      {/* PRIMARY DISPLAY: STACKED NAME (MIHIR / KALWAY.)                           */}
      {/* Line 1: MIHIR (Black) | Line 2: KALWAY. (Editorial Grey + Orange Dot)     */}
      {/* ========================================================================= */}
      <div className="w-full pt-2 md:pt-4 space-y-6 md:space-y-8">
        <div className="space-y-0 text-left">
          {/* Line 1: First Name in High-Contrast Black */}
          <div className="text-mask-wrapper">
            <motion.h1
              custom={0}
              initial="hidden"
              animate="visible"
              variants={nameLineVariants}
              className="display-headline text-primary font-black tracking-tighter"
            >
              MIHIR
            </motion.h1>
          </div>

          {/* Line 2: Surname in High-Contrast Black with Signature Orange Accent Period */}
          <div className="text-mask-wrapper">
            <motion.h1
              custom={1}
              initial="hidden"
              animate="visible"
              variants={nameLineVariants}
              className="display-headline text-primary font-black tracking-tighter"
            >
              KALWAY<span className="text-accent">.</span>
            </motion.h1>
          </div>
        </div>

        {/* Step 2: Supporting Descriptors — Builder / Engineer / Explorer */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={descriptorVariants}
          className="flex flex-wrap items-center gap-x-3 sm:gap-x-4 gap-y-2 text-[20px] sm:text-[26px] md:text-[32px] lg:text-[36px] font-bold tracking-tight text-secondary uppercase pt-1"
        >
          <span className="hover:text-primary transition-colors duration-200">Builder</span>
          <span className="text-accent font-normal select-none">/</span>
          <span className="hover:text-primary transition-colors duration-200">Engineer</span>
          <span className="text-accent font-normal select-none">/</span>
          <span className="hover:text-primary transition-colors duration-200">Explorer</span>
        </motion.div>
      </div>

      {/* ========================================================================= */}
      {/* SUPPORTING CONTENT & CTAs                                                 */}
      {/* ========================================================================= */}
      <div className="pt-10 md:pt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
        {/* Left Column: Short Personal Statement */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={statementVariants}
          className="lg:col-span-7 max-w-[580px]"
        >
          <p className="text-[18px] sm:text-[20px] md:text-[22px] text-secondary leading-relaxed font-normal tracking-tight">
            I build products, intelligent systems and experiences at the intersection of technology, design and ideas.
          </p>
        </motion.div>

        {/* Right Column: Refined CTA Buttons with Folioblox Orange Interactions */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={buttonsVariants}
          className="lg:col-span-5 flex flex-wrap items-center gap-4 lg:justify-end"
        >
          {/* Primary CTA */}
          <a
            href="#work"
            onClick={handleScrollToWork}
            className="group relative inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-primary text-primary-foreground text-[13px] md:text-[14px] font-semibold tracking-wide uppercase shadow-sm transition-all duration-300 hover:bg-accent hover:text-white hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>EXPLORE MY WORK</span>
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1 font-mono text-base">
              ↘
            </span>
          </a>

          {/* Secondary CTA */}
          <a
            href="#contact"
            className="group inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-surface text-primary border border-border text-[13px] md:text-[14px] font-medium tracking-wide uppercase hover:bg-surface-subtle hover:border-accent hover:text-accent transition-all duration-300 active:scale-[0.98]"
          >
            <span>LET'S CONNECT</span>
            <span className="inline-block transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 font-mono text-base text-secondary group-hover:text-accent">
              ↗
            </span>
          </a>
        </motion.div>
      </div>

      {/* ========================================================================= */}
      {/* BOTTOM SCROLL INDICATOR & METADATA BAR                                    */}
      {/* ========================================================================= */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.8, ease: transitionEase }}
        className="w-full flex items-center justify-between pt-10 md:pt-12 border-t border-border/50 mt-8"
      >
        <div className="flex items-center gap-2 text-[11px] font-mono uppercase text-secondary tracking-widest">
          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
          <span>MIHIR KALWAY</span>
        </div>

        <a
          href="#work"
          onClick={handleScrollToWork}
          className="group flex items-center gap-2 text-[11px] md:text-[12px] font-mono uppercase text-secondary hover:text-accent tracking-widest transition-colors duration-300"
        >
          <span>SCROLL TO EXPLORE</span>
          <span className="inline-block animate-scroll-bounce font-mono text-xs group-hover:text-accent">
            ↓
          </span>
        </a>
      </motion.div>
    </section>
  );
};
