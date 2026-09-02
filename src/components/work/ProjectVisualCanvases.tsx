import React, { useState, useCallback } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

import internEdgeLogo from '../../public/InternEdge.png';
import eduNexLogo from '../../public/EduNex-2.png';
import nexusLogo from '../../public/Nexus.png';
import lockinLogo from '../../public/Lockin-ai -2.png';
import noCapLogo from '../../public/nocap -2.png';

export {
  internEdgeLogo,
  eduNexLogo,
  nexusLogo,
  lockinLogo,
  noCapLogo,
};

// Smooth GPU-friendly easing curve
const transitionEase = [0.16, 1, 0.3, 1] as const;

export interface ProjectVisualConfig {
  id: string;
  title: string;
  category: string;
  description: string;
  features: string[];
  logo: string;
  backgroundGradient: string;
  glowGradient: string;
  accentColor?: string;
}

interface ProjectVisualCanvasProps {
  config: ProjectVisualConfig;
}

export const ProjectVisualCanvas: React.FC<ProjectVisualCanvasProps> = ({ config }) => {
  const [isHovered, setIsHovered] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const handleMouseEnter = useCallback(() => setIsHovered(true), []);
  const handleMouseLeave = useCallback(() => setIsHovered(false), []);

  const handleTouchToggle = useCallback((e: React.MouseEvent) => {
    // Enable seamless tap toggle on touch devices without blocking link navigation if already open
    if (window.matchMedia('(pointer: coarse)').matches) {
      if (!isHovered) {
        e.preventDefault();
        setIsHovered(true);
      }
    }
  }, [isHovered]);

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleTouchToggle}
      className="relative w-full h-full min-h-[400px] sm:min-h-[460px] md:min-h-[520px] lg:min-h-[560px] xl:min-h-[580px] rounded-3xl md:rounded-[36px] overflow-hidden border border-white/[0.08] shadow-2xl flex flex-col justify-between p-7 sm:p-10 md:p-12 lg:p-14 select-none transform-gpu group/canvas transition-colors duration-700"
      style={{ background: config.backgroundGradient }}
    >
      {/* Subtle Network Matrix Texture & Vignette */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.6) 1px, transparent 1px)`,
          backgroundSize: '28px 28px',
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(4,6,12,0.75)_100%)] pointer-events-none" />

      {/* Atmospheric Ambient Glow Orb */}
      <div
        className="absolute w-[420px] h-[420px] rounded-full blur-[120px] pointer-events-none top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-opacity duration-700"
        style={{
          background: config.glowGradient,
          opacity: isHovered ? 0.35 : 0.75,
        }}
      />

      {/* ========================================================================= */}
      {/* 1. NORMAL STATE: LARGE PROJECT LOGO (DISSOLVES COMPLETELY ON HOVER)       */}
      {/* ========================================================================= */}
      <motion.div
        animate={{
          opacity: isHovered ? 0 : 1,
          scale: shouldReduceMotion ? 1 : isHovered ? 0.96 : 1,
          filter: shouldReduceMotion ? 'none' : isHovered ? 'blur(4px)' : 'blur(0px)',
        }}
        transition={{
          duration: isHovered ? 0.35 : 0.45,
          ease: transitionEase,
        }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none p-8 sm:p-12 z-10"
      >
        <div className="relative max-w-[280px] sm:max-w-[340px] md:max-w-[390px] w-full aspect-square flex items-center justify-center">
          {/* Ambient luminous aura directly behind artwork */}
          <div
            className="absolute inset-2 rounded-3xl blur-2xl transition-opacity duration-500"
            style={{
              background: config.glowGradient,
              opacity: isHovered ? 0 : 0.85,
            }}
          />

          <img
            src={config.logo}
            alt={`${config.title} Identity`}
            className="relative z-10 w-full h-full object-contain drop-shadow-[0_25px_45px_rgba(0,0,0,0.85)] filter brightness-[1.04] contrast-[1.08]"
            loading="eager"
          />
        </div>
      </motion.div>

      {/* Calm Backdrop Transition Layer for Maximum Contrast */}
      <motion.div
        animate={{ opacity: isHovered ? 0.65 : 0 }}
        transition={{ duration: 0.35, ease: transitionEase }}
        className="absolute inset-0 bg-[#06080E]/75 pointer-events-none z-10"
      />

      {/* ========================================================================= */}
      {/* 2. HOVER STATE: CLEAN EDITORIAL PROJECT DETAIL VIEW                       */}
      {/* ========================================================================= */}
      <div
        className={`relative z-20 w-full h-full flex flex-col justify-between pointer-events-none transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {/* UPPER-LEFT: Project Title & Category */}
        <div className="space-y-2 sm:space-y-2.5">
          <motion.h3
            animate={
              isHovered
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: shouldReduceMotion ? 0 : 15 }
            }
            transition={{
              duration: 0.35,
              delay: isHovered ? 0.12 : 0,
              ease: transitionEase,
            }}
            className="text-[32px] sm:text-[40px] md:text-[46px] lg:text-[52px] font-black text-white uppercase tracking-tight leading-[1.04]"
          >
            {config.title}
          </motion.h3>

          <motion.div
            animate={
              isHovered
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: shouldReduceMotion ? 0 : 12 }
            }
            transition={{
              duration: 0.35,
              delay: isHovered ? 0.16 : 0,
              ease: transitionEase,
            }}
            className="text-[12px] sm:text-[13px] md:text-[14px] font-mono tracking-[0.2em] uppercase text-accent font-semibold"
          >
            {config.category}
          </motion.div>
        </div>

        {/* MIDDLE-LEFT: Short Narrative Description */}
        <motion.div
          animate={
            isHovered
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: shouldReduceMotion ? 0 : 18 }
          }
          transition={{
            duration: 0.35,
            delay: isHovered ? 0.22 : 0,
            ease: transitionEase,
          }}
          className="my-auto py-5 sm:py-8"
        >
          <p className="text-[17px] sm:text-[19px] md:text-[21px] lg:text-[22px] text-white/90 leading-[1.45] font-normal tracking-tight max-w-[560px]">
            {config.description}
          </p>
        </motion.div>

        {/* LOWER AREA: Lower-Left Features + Lower-Right CTA */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pt-4 border-t border-white/[0.09]">
          {/* Lower-Left: Key Features */}
          <motion.div
            animate={
              isHovered
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: shouldReduceMotion ? 0 : 15 }
            }
            transition={{
              duration: 0.35,
              delay: isHovered ? 0.3 : 0,
              ease: transitionEase,
            }}
            className="space-y-1.5 sm:space-y-2"
          >
            {config.features.map((feature) => (
              <div
                key={feature}
                className="text-[12px] sm:text-[13px] md:text-[14px] font-mono uppercase tracking-wider text-white/75 flex items-center gap-2.5"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                <span>{feature}</span>
              </div>
            ))}
          </motion.div>

          {/* Lower-Right: View Project CTA */}
          <motion.div
            animate={
              isHovered
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: shouldReduceMotion ? 0 : 15 }
            }
            transition={{
              duration: 0.35,
              delay: isHovered ? 0.38 : 0,
              ease: transitionEase,
            }}
            className="flex items-center gap-2 self-end sm:self-auto text-[13px] sm:text-[14px] md:text-[15px] font-mono font-bold tracking-widest text-white group-hover/canvas:text-accent transition-colors duration-200"
          >
            <span>VIEW PROJECT</span>
            <span className="text-accent text-base transition-transform duration-300 group-hover/canvas:translate-x-1">
              →
            </span>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

/* ========================================================================= */
/* 01 — INTERNEDGE VISUAL                                                    */
/* ========================================================================= */
export const InternEdgeVisual: React.FC = () => {
  const config: ProjectVisualConfig = {
    id: 'internedge',
    title: 'INTERNEDGE',
    category: 'AI · PRODUCT · FULL STACK',
    description:
      'An AI-powered internship discovery platform designed to help students discover relevant opportunities faster.',
    features: [
      'AI-powered opportunity discovery',
      'Internship matching',
      'Student-focused experience',
    ],
    logo: internEdgeLogo,
    backgroundGradient: `
      radial-gradient(850px circle at 85% 15%, rgba(255, 90, 0, 0.22), transparent 55%),
      radial-gradient(750px circle at 15% 85%, rgba(30, 41, 69, 0.45), transparent 60%),
      linear-gradient(135deg, #090b12 0%, #111522 45%, #080a10 100%)
    `,
    glowGradient:
      'radial-gradient(circle, rgba(255, 90, 0, 0.3) 0%, rgba(30, 41, 69, 0.2) 70%)',
    accentColor: '#FF5A00',
  };

  return <ProjectVisualCanvas config={config} />;
};

export const InterEdgeVisual = InternEdgeVisual;

/* ========================================================================= */
/* 02 — EDUNEX VISUAL                                                        */
/* ========================================================================= */
export const EduNexVisual: React.FC = () => {
  const config: ProjectVisualConfig = {
    id: 'edunex',
    title: 'EDUNEX',
    category: 'AI · EDUCATION · PRODUCT',
    description:
      'A digital education platform focused on creating a smarter and more connected learning experience.',
    features: [
      'Learning',
      'Education',
      'Student experience',
    ],
    logo: eduNexLogo,
    backgroundGradient: `
      radial-gradient(850px circle at 20% 20%, rgba(37, 99, 235, 0.26), transparent 60%),
      radial-gradient(750px circle at 85% 85%, rgba(56, 189, 248, 0.16), transparent 55%),
      linear-gradient(140deg, #070e1e 0%, #101c36 50%, #060a14 100%)
    `,
    glowGradient:
      'radial-gradient(circle, rgba(56, 189, 248, 0.28) 0%, rgba(37, 99, 235, 0.18) 70%)',
    accentColor: '#38BDF8',
  };

  return <ProjectVisualCanvas config={config} />;
};

/* ========================================================================= */
/* 03 — NEXUS (STUDENT OS) VISUAL                                            */
/* ========================================================================= */
export const NexusVisual: React.FC = () => {
  const config: ProjectVisualConfig = {
    id: 'nexus',
    title: 'NEXUS — STUDENT OS',
    category: 'PRODUCT · SYSTEMS · STUDENT TECH',
    description:
      'A unified student operating system designed to bring the tools, workflows and information of student life into one connected system.',
    features: [
      'Student workflows',
      'Connected tools',
      'Unified student experience',
    ],
    logo: nexusLogo,
    backgroundGradient: `
      radial-gradient(850px circle at 80% 25%, rgba(16, 185, 129, 0.22), transparent 58%),
      radial-gradient(750px circle at 20% 80%, rgba(6, 95, 70, 0.25), transparent 55%),
      linear-gradient(135deg, #080b0f 0%, #0f171d 45%, #06090c 100%)
    `,
    glowGradient:
      'radial-gradient(circle, rgba(16, 185, 129, 0.26) 0%, rgba(6, 95, 70, 0.18) 70%)',
    accentColor: '#10B981',
  };

  return <ProjectVisualCanvas config={config} />;
};

/* ========================================================================= */
/* 04 — LOCKINAI VISUAL                                                      */
/* ========================================================================= */
export const LockinAIVisual: React.FC = () => {
  const config: ProjectVisualConfig = {
    id: 'lockinai',
    title: 'LOCKINAI',
    category: 'AI · PRODUCTIVITY · AI SYSTEMS',
    description:
      'An AI-powered productivity and accountability system designed to help users stay focused, consistent and locked in.',
    features: [
      'Focus',
      'Accountability',
      'Productivity',
    ],
    logo: lockinLogo,
    backgroundGradient: `
      radial-gradient(850px circle at 50% 50%, rgba(255, 90, 0, 0.24), transparent 55%),
      radial-gradient(750px circle at 20% 20%, rgba(234, 88, 12, 0.22), transparent 50%),
      linear-gradient(145deg, #0a0604 0%, #170d07 50%, #060403 100%)
    `,
    glowGradient:
      'radial-gradient(circle, rgba(255, 90, 0, 0.32) 0%, rgba(234, 88, 12, 0.18) 70%)',
    accentColor: '#FF5A00',
  };

  return <ProjectVisualCanvas config={config} />;
};

/* ========================================================================= */
/* 05 — NOCAP VISUAL                                                         */
/* ========================================================================= */
export const NoCapVisual: React.FC = () => {
  const config: ProjectVisualConfig = {
    id: 'nocap',
    title: 'NOCAP',
    category: 'AI · NLP · COMPUTER VISION · PRODUCT',
    description:
      'An AI-powered internet context translator that explains slang, screenshots, memes, references and the meaning behind online language.',
    features: [
      'Slang interpretation',
      'Screenshot understanding',
      'Internet context',
    ],
    logo: noCapLogo,
    backgroundGradient: `
      radial-gradient(850px circle at 85% 20%, rgba(168, 85, 247, 0.24), transparent 55%),
      radial-gradient(750px circle at 15% 85%, rgba(217, 70, 239, 0.22), transparent 55%),
      linear-gradient(135deg, #0b0616 0%, #1a0f2e 45%, #080410 100%)
    `,
    glowGradient:
      'radial-gradient(circle, rgba(168, 85, 247, 0.3) 0%, rgba(217, 70, 239, 0.18) 70%)',
    accentColor: '#C084FC',
  };

  return <ProjectVisualCanvas config={config} />;
};
