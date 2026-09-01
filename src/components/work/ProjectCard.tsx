import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { Button } from '../common/Button';

const transitionEase = [0.16, 1, 0.3, 1] as const;

export interface ProjectData {
  number: string;
  id: string;
  title: string;
  category: string;
  description: string;
  quote?: string;
  href: string;
  logo: string;
  visualComponent: React.ComponentType;
}

interface ProjectCardProps {
  project: ProjectData;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const VisualComponent = project.visualComponent;
  // Projects 0, 2, 4 (01, 03, 05) -> Text Left, Image Right
  // Projects 1, 3 (02, 04) -> Image Left, Text Right
  const isImageRight = index % 2 === 0;

  // Parent container variants to orchestrate child staggered animations
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.05,
      },
    },
  };

  // Staggered reveal animations
  const textVariants: Variants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: transitionEase,
      },
    },
  };

  const visualVariants: Variants = {
    hidden: { opacity: 0, scale: 1.04, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.9,
        ease: transitionEase,
      },
    },
  };

  return (
    <motion.article
      id={project.id}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.05, margin: "0px 0px -40px 0px" }}
      className="group/card relative w-full py-16 sm:py-24 md:py-32 lg:py-40 first:pt-8"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-14 lg:gap-16 items-center">
        {/* ========================================================================= */}
        {/* TEXT COLUMN (FOLIOBLOX SIGNATURE EDITORIAL LAYOUT)                        */}
        {/* ========================================================================= */}
        <motion.div
          variants={textVariants}
          className={`lg:col-span-5 flex flex-col justify-center space-y-6 sm:space-y-8 ${
            isImageRight ? 'order-2 lg:order-1' : 'order-2 lg:order-2'
          }`}
        >
          {/* Folioblox Signature Orange Accent Line */}
          <div className="h-[3px] bg-accent w-28 sm:w-36 rounded-full" />

          {/* Project Title & Category */}
          <div className="space-y-2">
            <div className="text-[12px] font-mono uppercase tracking-[0.2em] text-secondary font-semibold">
              {project.number} // {project.category}
            </div>

            <a href={project.href} className="inline-block group/title text-left">
              <h3 className="text-[32px] sm:text-[42px] md:text-[48px] lg:text-[54px] font-black text-primary tracking-tight leading-[1.04] transition-colors duration-300 group-hover/title:text-accent">
                {project.title}
              </h3>
            </a>
          </div>

          {/* Short Narrative Description */}
          <p className="text-[16px] sm:text-[18px] text-secondary leading-relaxed font-normal max-w-[460px]">
            {project.description}
          </p>

          {/* Secondary statement for noCap if provided */}
          {project.quote && (
            <p className="text-[12px] sm:text-[13px] font-mono uppercase tracking-wider text-accent font-semibold leading-relaxed max-w-[460px]">
              {project.quote}
            </p>
          )}

          {/* Unified Signature Rounded Pill View Button */}
          <div className="pt-2">
            <Button
              variant="secondary"
              size="sm"
              href={project.href}
            >
              VIEW PROJECT
            </Button>
          </div>
        </motion.div>

        {/* ========================================================================= */}
        {/* LARGE VISUAL COLUMN (58–62% OF CONTENT AREA)                              */}
        {/* ========================================================================= */}
        <motion.div
          variants={visualVariants}
          className={`lg:col-span-7 w-full ${
            isImageRight ? 'order-1 lg:order-2' : 'order-1 lg:order-1'
          }`}
          data-cursor="VIEW ↗"
        >
          <a
            href={project.href}
            className="block w-full h-full cursor-pointer transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/card:scale-[1.015]"
            aria-label={`View ${project.title}`}
          >
            <VisualComponent />
          </a>
        </motion.div>
      </div>
    </motion.article>
  );
};
