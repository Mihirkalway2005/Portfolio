import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { ProjectCard, type ProjectData } from './ProjectCard';
import {
  InterEdgeVisual,
  EduNexVisual,
  NexusVisual,
  LockinAIVisual,
  NoCapVisual,
  internEdgeLogo,
  eduNexLogo,
  nexusLogo,
  lockinLogo,
  noCapLogo,
} from './ProjectVisualCanvases';

const transitionEase = [0.16, 1, 0.3, 1] as const;

const projects: ProjectData[] = [
  {
    number: '01',
    id: 'interedge',
    title: 'InterEdge',
    category: 'AI · PRODUCT · FULL STACK',
    description:
      'An AI-powered internship discovery platform designed to help students discover relevant opportunities faster.',
    href: '#interedge',
    logo: internEdgeLogo,
    visualComponent: InterEdgeVisual,
  },
  {
    number: '02',
    id: 'edunex',
    title: 'Edunex',
    category: 'AI · EDUCATION · PRODUCT',
    description:
      'A digital education platform focused on creating a smarter and more connected learning experience.',
    href: '#edunex',
    logo: eduNexLogo,
    visualComponent: EduNexVisual,
  },
  {
    number: '03',
    id: 'nexus',
    title: 'Nexus — Student OS',
    category: 'PRODUCT · SYSTEMS · STUDENT TECH',
    description:
      'A unified student operating system designed to bring the tools, workflows and information of student life into one connected system.',
    href: '#nexus',
    logo: nexusLogo,
    visualComponent: NexusVisual,
  },
  {
    number: '04',
    id: 'lockinai',
    title: 'LockinAI',
    category: 'AI · PRODUCTIVITY · AI SYSTEMS',
    description:
      'An AI-powered productivity and accountability system designed to help users stay focused, consistent and locked in.',
    href: '#lockinai',
    logo: lockinLogo,
    visualComponent: LockinAIVisual,
  },
  {
    number: '05',
    id: 'nocap',
    title: 'noCap',
    category: 'AI · NLP · COMPUTER VISION · PRODUCT',
    description:
      'An AI-powered internet context translator that explains slang, screenshots, memes, references and the meaning behind online language.',
    quote: 'THE INTERNET MOVES FASTER THAN PEOPLE DO. NOCAP CLOSES THAT GAP.',
    href: '#nocap',
    logo: noCapLogo,
    visualComponent: NoCapVisual,
  },
];

export const SelectedWorkSection: React.FC = () => {
  // Line mask animation variants for the section headline
  const headlineLineVariants: Variants = {
    hidden: { y: '105%', opacity: 0.1 },
    visible: (custom: number) => ({
      y: '0%',
      opacity: 1,
      transition: {
        duration: 0.9,
        ease: transitionEase,
        delay: 0.12 + custom * 0.12,
      },
    }),
  };

  const supportingVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: transitionEase,
        delay: 0.35,
      },
    },
  };

  return (
    <section
      id="work"
      aria-label="Selected Work"
      className="relative w-full border-t border-border/80 bg-background py-24 sm:py-32 md:py-44 select-none"
    >
      <div className="max-w-[1520px] mx-auto px-6 sm:px-10 md:px-14 lg:px-16 space-y-16 sm:space-y-20 md:space-y-28">
        {/* ========================================================================= */}
        {/* SECTION INTRO & EDITORIAL HEADLINE                                        */}
        {/* ========================================================================= */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05, margin: "0px 0px -40px 0px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end pb-8 sm:pb-12 border-b border-border/60"
        >
          {/* Left Column: Label + Huge Stacked Title (7 cols) */}
          <div className="lg:col-span-7 space-y-5 md:space-y-7">
            {/* Editorial Label: 03 / SELECTED WORK */}
            <motion.div
              variants={supportingVariants}
              className="flex items-center gap-2.5"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse-subtle" />
              <span className="text-[12px] md:text-[13px] font-mono font-semibold tracking-[0.2em] uppercase text-accent">
                03 / SELECTED WORK
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
                  SELECTED
                </motion.h2>
              </div>

              <div className="text-mask-wrapper">
                <motion.h2
                  custom={1}
                  variants={headlineLineVariants}
                  className="text-[44px] sm:text-[62px] md:text-[80px] lg:text-[96px] xl:text-[108px] font-black text-primary tracking-tighter leading-[0.9] uppercase"
                >
                  WORK<span className="text-accent">.</span>
                </motion.h2>
              </div>
            </div>
          </div>

          {/* Right Column: Supporting Statement & Total Count (5 cols) */}
          <motion.div
            variants={supportingVariants}
            className="lg:col-span-5 flex flex-col justify-between space-y-6 lg:pb-3"
          >
            <p className="text-[17px] sm:text-[19px] md:text-[21px] text-secondary leading-relaxed font-normal tracking-tight max-w-[500px]">
              A collection of products, systems and experiments I've built from idea to execution.
            </p>

            <div className="flex items-center justify-between pt-2 border-t border-border/50 text-[11px] font-mono uppercase text-secondary tracking-widest">
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                <span>05 FEATURED PRODUCTS</span>
              </span>
              <span>2024 — 2026</span>
            </div>
          </motion.div>
        </motion.div>

        {/* ========================================================================= */}
        {/* STACKED FEATURED PROJECTS GALLERY                                         */}
        {/* ========================================================================= */}
        <div className="space-y-0">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
