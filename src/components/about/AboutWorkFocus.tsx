import React, { useState } from 'react';
import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const transitionEase = [0.16, 1, 0.3, 1] as const;

interface WorkFocusItem {
  number: string;
  category: string;
  description: string;
  tags: string[];
}

const focusAreas: WorkFocusItem[] = [
  {
    number: '01',
    category: 'Software & Full-Stack Development',
    description:
      'Building performant web applications, modern architectures, resilient backends, and end-to-end digital solutions that scale cleanly.',
    tags: ['React & Next.js', 'TypeScript', 'Distributed Backends', 'Modern APIs'],
  },
  {
    number: '02',
    category: 'AI & Intelligent Systems',
    description:
      'Integrating machine intelligence, modern generative tools, and practical agentic workflows into tangible tools people can actually use.',
    tags: ['Agentic Workflows', 'LLM Integration', 'Generative Interfaces', 'Prompt Systems'],
  },
  {
    number: '03',
    category: 'Product Design & Experience',
    description:
      'Crafting human-first digital interfaces with obsessive typography, seamless interactions, intentional pacing, and cohesive aesthetics.',
    tags: ['Editorial UI', 'Interaction Design', 'Micro-Animations', 'Design Systems'],
  },
  {
    number: '04',
    category: 'Startups & Entrepreneurship',
    description:
      'Navigating 0-to-1 product discovery, venture ecosystems, cross-functional execution, and validating early concepts through real engagement.',
    tags: ['0 → 1 Discovery', 'Venture Programs', 'Student Innovation', 'Cross-Functional'],
  },
  {
    number: '05',
    category: 'Systems & Problem Solving',
    description:
      'Dissecting ambiguous problems down to fundamental principles, analyzing system architecture, and engineering simple, durable answers.',
    tags: ['First Principles', 'System Architecture', 'Modular Workflows', 'Performance'],
  },
];

export const AboutWorkFocus: React.FC = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const titleVariants: Variants = {
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

  const rowVariants: Variants = {
    hidden: { opacity: 0, y: 16 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.2 : 0.6,
        ease: transitionEase,
        delay: shouldReduceMotion ? 0 : 0.08 + custom * 0.06,
      },
    }),
  };

  return (
    <section
      aria-label="What I Like To Build"
      className="relative w-full py-20 sm:py-28 md:py-36 border-t border-border/70 select-none"
    >
      <div className="max-w-[1520px] mx-auto px-6 sm:px-10 md:px-14 lg:px-16 space-y-12 sm:space-y-16">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={titleVariants}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 sm:pb-8 border-b border-border/60"
        >
          <div className="space-y-3 max-w-[700px]">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse-subtle" />
              <span className="text-[12px] font-mono uppercase tracking-[0.2em] text-accent font-semibold">
                AREAS OF FOCUS
              </span>
            </div>
            <h2 className="text-[36px] sm:text-[50px] md:text-[64px] font-black text-primary tracking-tighter uppercase leading-[0.94]">
              WHAT I LIKE TO BUILD<span className="text-accent">.</span>
            </h2>
          </div>

          <div className="text-[11px] font-mono uppercase text-secondary-muted tracking-widest">
            <span>[ 05 CORE DISCIPLINES ]</span>
          </div>
        </motion.div>

        {/* Clean Editorial Rows (No harsh outer dividing lines or card outlines) */}
        <div className="space-y-4 sm:space-y-6">
          {focusAreas.map((item, idx) => {
            const isHovered = hoveredIdx === idx;

            return (
              <motion.div
                key={item.number}
                custom={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.05 }}
                variants={rowVariants}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                className={`group relative py-7 sm:py-9 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] cursor-default rounded-2xl ${
                  isHovered ? 'bg-surface sm:px-6 md:px-8 shadow-subtle' : 'px-0'
                }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
                  {/* Number & Category Name (5 cols) */}
                  <div className="lg:col-span-5 flex items-start gap-4 sm:gap-6">
                    <span className="font-mono text-[15px] sm:text-[17px] font-bold text-accent shrink-0 pt-0.5">
                      {item.number}
                    </span>
                    <div className="space-y-2">
                      <h3 className="text-[22px] sm:text-[25px] md:text-[28px] font-bold text-primary uppercase tracking-tight group-hover:text-accent transition-colors duration-300">
                        {item.category}
                      </h3>
                      {/* Tech Chips (No border strokes) */}
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] font-mono uppercase tracking-wider text-secondary-muted bg-surface-subtle/80 px-2.5 py-0.5 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Short Description (6 cols) */}
                  <div className="lg:col-span-6 pl-8 sm:pl-10 lg:pl-0">
                    <p className="text-[15px] sm:text-[16px] md:text-[17px] text-secondary leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>

                  {/* Orange Indicator Arrow (1 col) */}
                  <div className="lg:col-span-1 flex justify-end pl-8 sm:pl-10 lg:pl-0 pt-2 lg:pt-0">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                        isHovered
                          ? 'bg-accent text-white shadow-md translate-x-1 -translate-y-1'
                          : 'text-secondary-muted bg-surface-subtle/60'
                      }`}
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
