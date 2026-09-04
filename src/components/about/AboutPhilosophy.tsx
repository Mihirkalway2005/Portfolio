import React from 'react';
import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { Layers, Lightbulb, Workflow, Sparkles } from 'lucide-react';

const transitionEase = [0.16, 1, 0.3, 1] as const;

export const AboutPhilosophy: React.FC = () => {
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
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.2 : 0.7,
        ease: transitionEase,
      },
    },
  };

  return (
    <section
      aria-label="Personal Approach"
      className="relative w-full py-20 sm:py-28 md:py-36 border-t border-border/70 select-none overflow-hidden"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.05 }}
        variants={containerVariants}
        className="max-w-[1520px] mx-auto px-6 sm:px-10 md:px-14 lg:px-16 space-y-12 sm:space-y-16"
      >
        {/* Label */}
        <motion.div variants={itemVariants} className="flex items-center gap-2.5">
          <span className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse-subtle" />
          <span className="text-[12px] md:text-[13px] font-mono font-semibold tracking-[0.2em] uppercase text-accent">
            PERSONAL APPROACH // MINDSET
          </span>
        </motion.div>

        {/* Large Statement */}
        <motion.div variants={itemVariants} className="space-y-2 text-left">
          <h2 className="text-[34px] sm:text-[50px] md:text-[68px] lg:text-[80px] font-black text-primary tracking-tighter uppercase leading-[0.92]">
            I LIKE UNDERSTANDING THE PROBLEM
          </h2>
          <h2 className="text-[34px] sm:text-[50px] md:text-[68px] lg:text-[80px] font-black text-primary tracking-tighter uppercase leading-[0.92]">
            BEFORE I START BUILDING THE SOLUTION<span className="text-accent">.</span>
          </h2>
        </motion.div>

        {/* Narrative Paragraph */}
        <motion.div variants={itemVariants} className="max-w-[840px]">
          <p className="text-[19px] sm:text-[22px] md:text-[24px] text-secondary leading-relaxed font-normal tracking-tight">
            I enjoy understanding the problem, breaking complex ideas down into clear fundamental pieces, experimenting quickly, building with intention, testing rigorously, and continually refining until the solution feels intuitive, robust, and meaningful.
          </p>
        </motion.div>

        {/* 4 Architectural Process Steps: Making the Section Tangible & Full */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 pt-4">
          <div className="rounded-2xl bg-surface p-7 border border-border/70 shadow-subtle flex flex-col justify-between min-h-[200px] group hover:border-accent/50 transition-colors duration-300">
            <div className="flex items-center justify-between pb-3 border-b border-border/50">
              <span className="text-[12px] font-mono font-bold text-accent">01 // DECONSTRUCT</span>
              <Layers className="w-4 h-4 text-secondary-muted group-hover:text-accent transition-colors" />
            </div>
            <div className="space-y-1 pt-4">
              <h3 className="text-[16px] font-bold text-primary tracking-tight">First Principles</h3>
              <p className="text-[13px] text-secondary leading-relaxed">Breaking problems down to essential truths before jumping into code.</p>
            </div>
          </div>

          <div className="rounded-2xl bg-surface p-7 border border-border/70 shadow-subtle flex flex-col justify-between min-h-[200px] group hover:border-accent/50 transition-colors duration-300">
            <div className="flex items-center justify-between pb-3 border-b border-border/50">
              <span className="text-[12px] font-mono font-bold text-accent">02 // EXPERIMENT</span>
              <Lightbulb className="w-4 h-4 text-secondary-muted group-hover:text-accent transition-colors" />
            </div>
            <div className="space-y-1 pt-4">
              <h3 className="text-[16px] font-bold text-primary tracking-tight">Rapid Prototyping</h3>
              <p className="text-[13px] text-secondary leading-relaxed">Building working digital models quickly to test real behavior.</p>
            </div>
          </div>

          <div className="rounded-2xl bg-surface p-7 border border-border/70 shadow-subtle flex flex-col justify-between min-h-[200px] group hover:border-accent/50 transition-colors duration-300">
            <div className="flex items-center justify-between pb-3 border-b border-border/50">
              <span className="text-[12px] font-mono font-bold text-accent">03 // ARCHITECT</span>
              <Workflow className="w-4 h-4 text-secondary-muted group-hover:text-accent transition-colors" />
            </div>
            <div className="space-y-1 pt-4">
              <h3 className="text-[16px] font-bold text-primary tracking-tight">System Integrity</h3>
              <p className="text-[13px] text-secondary leading-relaxed">Engineering scalable, clean codebases that survive growth.</p>
            </div>
          </div>

          <div className="rounded-2xl bg-surface p-7 border border-border/70 shadow-subtle flex flex-col justify-between min-h-[200px] group hover:border-accent/50 transition-colors duration-300">
            <div className="flex items-center justify-between pb-3 border-b border-border/50">
              <span className="text-[12px] font-mono font-bold text-accent">04 // REFINE</span>
              <Sparkles className="w-4 h-4 text-secondary-muted group-hover:text-accent transition-colors" />
            </div>
            <div className="space-y-1 pt-4">
              <h3 className="text-[16px] font-bold text-primary tracking-tight">Obsessive Craft</h3>
              <p className="text-[13px] text-secondary leading-relaxed">Polishing micro-interactions, accessibility, and visual harmony.</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};
