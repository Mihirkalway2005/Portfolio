import React from 'react';
import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { AboutPortraitPlaceholder } from './AboutPortraitPlaceholder';
import { Cpu, Compass, Users } from 'lucide-react';
import mihirPhoto from '../../../public/mihir-kalway.jpg';

const transitionEase = [0.16, 1, 0.3, 1] as const;

export const AboutBio: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.08,
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
        duration: shouldReduceMotion ? 0.3 : 0.7,
        ease: transitionEase,
      },
    },
  };

  return (
    <section
      aria-label="About Biography"
      className="relative w-full py-16 sm:py-24 md:py-32 border-t border-border/70 select-none"
    >
      <div className="max-w-[1520px] mx-auto px-6 sm:px-10 md:px-14 lg:px-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-20 items-start"
        >
          {/* ================================================================= */}
          {/* LEFT COLUMN: Large Rectangular Editorial Portrait (5 cols)         */}
          {/* ================================================================= */}
          <motion.div variants={itemVariants} className="lg:col-span-5 w-full">
            <div className="lg:sticky lg:top-28">
              <AboutPortraitPlaceholder imageSrc={mihirPhoto} />
            </div>
          </motion.div>

          {/* ================================================================= */}
          {/* RIGHT COLUMN: Strong Editorial Narrative Block (7 cols)           */}
          {/* ================================================================= */}
          <motion.div variants={itemVariants} className="lg:col-span-7 flex flex-col space-y-8 md:space-y-10">
            {/* Editorial Sub-Label */}
            <div className="flex items-center pb-4 border-b border-border/60">
              <span className="text-[12px] font-mono uppercase tracking-[0.2em] text-accent font-semibold flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                BACKGROUND // PERSPECTIVE
              </span>
            </div>

            {/* Editorial Text Paragraphs */}
            <div className="space-y-6 sm:space-y-7">
              {/* Paragraph 1: High-Contrast Lead */}
              <p className="text-[19px] sm:text-[21px] md:text-[23px] text-primary leading-relaxed font-medium tracking-tight">
                I’m Mihir Kalway, a computer science student and builder interested in software, artificial intelligence, product design, and the systems behind the things people use every day.
              </p>

              {/* Paragraph 2 */}
              <p className="text-[16px] sm:text-[18px] md:text-[19px] text-secondary leading-relaxed font-normal tracking-tight">
                I enjoy taking ideas from an early concept and turning them into something real — whether that means building a product from scratch, designing a better user experience, experimenting with AI, or understanding how different pieces of a system work together.
              </p>

              {/* Paragraph 3 */}
              <p className="text-[16px] sm:text-[18px] md:text-[19px] text-secondary leading-relaxed font-normal tracking-tight">
                A lot of what I do sits between technology and people. I’m interested not only in how something works technically, but also in why it should exist, who it helps, and how it can be made simpler and more useful.
              </p>

              {/* Paragraph 4 */}
              <p className="text-[16px] sm:text-[18px] md:text-[19px] text-secondary leading-relaxed font-normal tracking-tight">
                Alongside my projects, I’ve worked across student development, entrepreneurship, and international collaboration. These experiences have helped me understand that building is not just about writing code — it’s about understanding problems, working with people, and actually taking an idea through to execution.
              </p>
            </div>

            {/* Editorial Highlight Cards: Filling the Space with Intentional Craft */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="rounded-2xl bg-surface p-5 border border-border/70 shadow-subtle flex flex-col justify-between space-y-3">
                <div className="flex items-center justify-between text-secondary-muted">
                  <span className="text-[11px] font-mono font-bold text-accent">01</span>
                  <Cpu className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <h4 className="text-[14px] font-bold text-primary tracking-tight">0 → 1 Execution</h4>
                  <p className="text-[12px] text-secondary leading-normal pt-1">Turning concepts into testable, usable digital tools.</p>
                </div>
              </div>

              <div className="rounded-2xl bg-surface p-5 border border-border/70 shadow-subtle flex flex-col justify-between space-y-3">
                <div className="flex items-center justify-between text-secondary-muted">
                  <span className="text-[11px] font-mono font-bold text-accent">02</span>
                  <Compass className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <h4 className="text-[14px] font-bold text-primary tracking-tight">Human Centric</h4>
                  <p className="text-[12px] text-secondary leading-normal pt-1">Balancing technical depth with simple user experience.</p>
                </div>
              </div>

              <div className="rounded-2xl bg-surface p-5 border border-border/70 shadow-subtle flex flex-col justify-between space-y-3">
                <div className="flex items-center justify-between text-secondary-muted">
                  <span className="text-[11px] font-mono font-bold text-accent">03</span>
                  <Users className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <h4 className="text-[14px] font-bold text-primary tracking-tight">Collaborative</h4>
                  <p className="text-[12px] text-secondary leading-normal pt-1">Engaging across global startups, students, and ventures.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
