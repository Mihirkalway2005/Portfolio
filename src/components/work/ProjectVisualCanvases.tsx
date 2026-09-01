import React, { useState, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowUpRight,
  Sparkles,
  Zap,
  Layers,
  BookOpen,
  Flame,
  MessageSquare,
  CheckCircle2,
} from 'lucide-react';

import internEdgeLogo from '../../public/InternEdge.png';
import eduNexLogo from '../../public/EduNex.png';
import nexusLogo from '../../public/Nexus.png';
import lockinLogo from '../../public/Lockin-ai.png';
import noCapLogo from '../../public/noCap.png';

export {
  internEdgeLogo,
  eduNexLogo,
  nexusLogo,
  lockinLogo,
  noCapLogo,
};

// Smooth easing curve
const transitionEase = [0.16, 1, 0.3, 1] as const;

/**
 * Shared Hook for smooth cursor-following light coordinates
 */
function useInteractiveLighting() {
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePos({ x, y });
  }, []);

  const handleMouseEnter = useCallback(() => setIsHovered(true), []);
  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    setMousePos({ x: 50, y: 50 });
  }, []);

  return {
    containerRef,
    mousePos,
    isHovered,
    handleMouseMove,
    handleMouseEnter,
    handleMouseLeave,
  };
}

/* ========================================================================= */
/* 01 — INTEREDGE CINEMATIC ARTWORK CANVAS                                   */
/* AI + Opportunities + Connections                                          */
/* Deep obsidian space, warm orange orbital lighting, brushed titanium depth */
/* ========================================================================= */
export const InterEdgeVisual: React.FC = () => {
  const { containerRef, mousePos, isHovered, handleMouseMove, handleMouseEnter, handleMouseLeave } =
    useInteractiveLighting();

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative w-full h-full min-h-[380px] sm:min-h-[460px] md:min-h-[520px] lg:min-h-[560px] rounded-3xl md:rounded-[36px] overflow-hidden border border-white/[0.09] shadow-2xl flex flex-col justify-between p-6 sm:p-10 select-none transform-gpu group/canvas transition-all duration-700"
      style={{
        background: `
          radial-gradient(800px circle at ${mousePos.x}% ${mousePos.y}%, rgba(255, 90, 0, 0.14), transparent 50%),
          radial-gradient(600px circle at 85% 15%, rgba(255, 110, 20, 0.18), transparent 60%),
          radial-gradient(700px circle at 15% 85%, rgba(30, 41, 69, 0.4), transparent 60%),
          linear-gradient(135deg, #090b12 0%, #111522 45%, #080a10 100%)
        `,
      }}
    >
      {/* Subtle Network Matrix Texture & Vignette */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.6) 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(5,7,12,0.75)_100%)] pointer-events-none" />

      {/* Atmospheric Glow Orbs */}
      <div
        className="absolute w-[360px] h-[360px] rounded-full blur-[110px] pointer-events-none transition-transform duration-700 ease-out"
        style={{
          background: 'radial-gradient(circle, rgba(255, 90, 0, 0.28) 0%, rgba(255, 90, 0, 0) 70%)',
          left: `${mousePos.x * 0.4 + 30}%`,
          top: `${mousePos.y * 0.4 - 10}%`,
          transform: 'translate(-50%, -50%)',
        }}
      />
      <div className="absolute -bottom-16 -left-16 w-80 h-80 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Top Bar Metadata */}
      <div className="relative z-20 flex items-center justify-between">
        <div className="flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.06] backdrop-blur-md border border-white/[0.12] text-[11px] font-mono text-white/90 shadow-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
          </span>
          <span className="tracking-wide">INTEREDGE // AI TALENT ENGINE</span>
        </div>

        <div className="w-10 h-10 rounded-full bg-white/[0.08] backdrop-blur-md border border-white/[0.18] flex items-center justify-center text-white transition-all duration-500 group-hover/canvas:bg-accent group-hover/canvas:border-accent group-hover/canvas:scale-105 shadow-lg">
          <ArrowUpRight className="w-5 h-5 text-white transition-transform duration-300 group-hover/canvas:translate-x-0.5 group-hover/canvas:-translate-y-0.5" />
        </div>
      </div>

      {/* Center Cinematic Composition & Interactive Hover-to-Detail */}
      <div className="relative z-10 my-auto flex flex-col items-center justify-center w-full py-4 sm:py-6">
        {/* HERO LOGO: Recedes smoothly in 3D space on hover */}
        <motion.div
          animate={{
            scale: isHovered ? 0.74 : 1,
            y: isHovered ? -26 : 0,
            opacity: isHovered ? 0.22 : 1,
            filter: isHovered ? 'blur(1.5px)' : 'blur(0px)',
          }}
          transition={{ duration: 0.6, ease: transitionEase }}
          className="relative max-w-[280px] sm:max-w-[350px] md:max-w-[400px] w-full aspect-square flex items-center justify-center pointer-events-none"
        >
          {/* Environmental Backlight tuned to warm ambient light */}
          <div
            className="absolute inset-2 rounded-3xl blur-2xl transition-opacity duration-700"
            style={{
              background: 'radial-gradient(circle, rgba(255, 90, 0, 0.22) 0%, rgba(30, 41, 69, 0.2) 70%)',
              opacity: isHovered ? 0.15 : 0.8,
            }}
          />

          {/* Logo with Environmental Highlights & Titanium Material Texture */}
          <div className="relative w-full h-full flex items-center justify-center">
            <img
              src={internEdgeLogo}
              alt="InterEdge Logo Art Direction"
              className="relative z-10 w-full h-full object-contain drop-shadow-[0_25px_40px_rgba(0,0,0,0.85)] filter brightness-[1.04] contrast-[1.08]"
              loading="eager"
            />
            {/* Ambient orange light reflection on right edge */}
            <div className="absolute inset-0 bg-gradient-to-l from-accent/15 via-transparent to-blue-400/5 rounded-3xl mix-blend-overlay pointer-events-none" />
          </div>
        </motion.div>

        {/* FOREGROUND DETAIL LAYER: Unveils smoothly on hover */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.94 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 15, scale: 0.96 }}
                transition={{ duration: 0.45, ease: transitionEase }}
                className="w-full max-w-[420px] px-4 space-y-4"
              >
                {/* Highlight Badge */}
                <div className="flex items-center justify-center">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/20 border border-accent/40 text-[11px] font-mono text-white tracking-widest uppercase backdrop-blur-md shadow-lg">
                    <Zap className="w-3 h-3 text-accent" />
                    <span>Neural Matching Engine</span>
                  </span>
                </div>

                {/* Key Capabilities Glass Card */}
                <div className="p-4 sm:p-5 rounded-2xl bg-black/50 backdrop-blur-xl border border-white/15 shadow-2xl space-y-3">
                  <div className="text-[13px] font-semibold text-white/95 tracking-wide flex items-center justify-between border-b border-white/10 pb-2.5">
                    <span>Key Architecture Pillars</span>
                    <span className="text-[10px] font-mono text-accent">AI DEPLOYMENT</span>
                  </div>

                  <ul className="space-y-2 text-[12px] text-white/80 font-normal">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-accent flex-shrink-0" />
                      <span>Skill-to-opportunity semantic graph matching</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-accent flex-shrink-0" />
                      <span>Automated profile enrichment & vector indexing</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-accent flex-shrink-0" />
                      <span>Sub-120ms opportunity query latency</span>
                    </li>
                  </ul>

                  {/* Tech Stack Chips */}
                  <div className="pt-2 flex flex-wrap gap-1.5 border-t border-white/10">
                    {['Next.js', 'FastAPI', 'Pinecone', 'TypeScript', 'Tailwind'].map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded-md bg-white/[0.08] border border-white/[0.08] text-[10px] font-mono text-white/80"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Quick Hint */}
                <div className="text-center">
                  <span className="text-[11px] font-mono text-white/60 tracking-wider">
                    CLICK TO VIEW CASE STUDY →
                  </span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Bottom Bar: Clean Tag Strip */}
      <div className="relative z-20 flex items-center justify-between text-[11px] font-mono text-white/60 border-t border-white/[0.09] pt-4">
        <div className="flex items-center gap-2">
          <Sparkles className="w-3.5 h-3.5 text-accent" />
          <span className="hidden sm:inline">AI Opportunity Discovery · Product Architecture</span>
          <span className="sm:hidden">AI Opportunity Engine</span>
        </div>
        <span className="text-white/90 font-bold uppercase tracking-wider">01 // FEATURE</span>
      </div>
    </div>
  );
};

/* ========================================================================= */
/* 02 — EDUNEX CINEMATIC ARTWORK CANVAS                                      */
/* Education + Learning + Knowledge                                          */
/* Sapphire slate gradient, frosted glass crystal, soft luminous highlights  */
/* ========================================================================= */
export const EduNexVisual: React.FC = () => {
  const { containerRef, mousePos, isHovered, handleMouseMove, handleMouseEnter, handleMouseLeave } =
    useInteractiveLighting();

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative w-full h-full min-h-[380px] sm:min-h-[460px] md:min-h-[520px] lg:min-h-[560px] rounded-3xl md:rounded-[36px] overflow-hidden border border-white/[0.09] shadow-2xl flex flex-col justify-between p-6 sm:p-10 select-none transform-gpu group/canvas transition-all duration-700"
      style={{
        background: `
          radial-gradient(800px circle at ${mousePos.x}% ${mousePos.y}%, rgba(56, 189, 248, 0.16), transparent 50%),
          radial-gradient(650px circle at 20% 20%, rgba(37, 99, 235, 0.22), transparent 60%),
          radial-gradient(550px circle at 85% 85%, rgba(255, 90, 0, 0.1), transparent 55%),
          linear-gradient(140deg, #070e1e 0%, #101c36 50%, #060a14 100%)
        `,
      }}
    >
      {/* Soft Knowledge Waves / Caustics */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(147,197,253,0.08),transparent_65%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(3,7,15,0.75)_100%)] pointer-events-none" />

      {/* Atmospheric Luminous Blue Orb */}
      <div
        className="absolute w-[380px] h-[380px] rounded-full blur-[120px] pointer-events-none transition-transform duration-700 ease-out"
        style={{
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.28) 0%, rgba(59, 130, 246, 0) 70%)',
          left: `${mousePos.x * 0.4 + 30}%`,
          top: `${mousePos.y * 0.4 - 10}%`,
          transform: 'translate(-50%, -50%)',
        }}
      />
      <div className="absolute -top-12 -right-12 w-72 h-72 bg-cyan-400/10 rounded-full blur-[90px] pointer-events-none" />

      {/* Top Bar Metadata */}
      <div className="relative z-20 flex items-center justify-between">
        <div className="flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.06] backdrop-blur-md border border-white/[0.12] text-[11px] font-mono text-white/90 shadow-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-400" />
          </span>
          <span className="tracking-wide">EDUNEX // SMART LEARNING OS</span>
        </div>

        <div className="w-10 h-10 rounded-full bg-white/[0.08] backdrop-blur-md border border-white/[0.18] flex items-center justify-center text-white transition-all duration-500 group-hover/canvas:bg-sky-500 group-hover/canvas:border-sky-500 group-hover/canvas:scale-105 shadow-lg">
          <ArrowUpRight className="w-5 h-5 text-white transition-transform duration-300 group-hover/canvas:translate-x-0.5 group-hover/canvas:-translate-y-0.5" />
        </div>
      </div>

      {/* Center Cinematic Composition & Interactive Hover-to-Detail */}
      <div className="relative z-10 my-auto flex flex-col items-center justify-center w-full py-4 sm:py-6">
        {/* HERO LOGO: Frosted sapphire glass depth */}
        <motion.div
          animate={{
            scale: isHovered ? 0.74 : 1,
            y: isHovered ? -26 : 0,
            opacity: isHovered ? 0.22 : 1,
            filter: isHovered ? 'blur(1.5px)' : 'blur(0px)',
          }}
          transition={{ duration: 0.6, ease: transitionEase }}
          className="relative max-w-[280px] sm:max-w-[350px] md:max-w-[400px] w-full aspect-square flex items-center justify-center pointer-events-none"
        >
          {/* Soft backplate luminous aura */}
          <div
            className="absolute inset-2 rounded-3xl blur-2xl transition-opacity duration-700"
            style={{
              background: 'radial-gradient(circle, rgba(56, 189, 248, 0.22) 0%, rgba(37, 99, 235, 0.15) 70%)',
              opacity: isHovered ? 0.15 : 0.8,
            }}
          />

          <div className="relative w-full h-full flex items-center justify-center">
            <img
              src={eduNexLogo}
              alt="EduNex Logo Art Direction"
              className="relative z-10 w-full h-full object-contain drop-shadow-[0_25px_40px_rgba(0,0,0,0.8)] filter brightness-[1.03] contrast-[1.06]"
              loading="eager"
            />
            {/* Subtle frosted glass sheen overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-sky-400/10 via-transparent to-white/10 rounded-3xl mix-blend-screen pointer-events-none" />
          </div>
        </motion.div>

        {/* FOREGROUND DETAIL LAYER */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.94 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 15, scale: 0.96 }}
                transition={{ duration: 0.45, ease: transitionEase }}
                className="w-full max-w-[420px] px-4 space-y-4"
              >
                <div className="flex items-center justify-center">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/20 border border-sky-400/40 text-[11px] font-mono text-white tracking-widest uppercase backdrop-blur-md shadow-lg">
                    <BookOpen className="w-3 h-3 text-sky-400" />
                    <span>Adaptive Knowledge Graph</span>
                  </span>
                </div>

                <div className="p-4 sm:p-5 rounded-2xl bg-black/50 backdrop-blur-xl border border-white/15 shadow-2xl space-y-3">
                  <div className="text-[13px] font-semibold text-white/95 tracking-wide flex items-center justify-between border-b border-white/10 pb-2.5">
                    <span>Key Architecture Pillars</span>
                    <span className="text-[10px] font-mono text-sky-400">EDTECH STACK</span>
                  </div>

                  <ul className="space-y-2 text-[12px] text-white/80 font-normal">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 flex-shrink-0" />
                      <span>Intelligent curriculum synthesis & pacing</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 flex-shrink-0" />
                      <span>Interactive concept maps & active recall</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 flex-shrink-0" />
                      <span>Synchronous collaborative study spaces</span>
                    </li>
                  </ul>

                  <div className="pt-2 flex flex-wrap gap-1.5 border-t border-white/10">
                    {['React', 'Node.js', 'PostgreSQL', 'Tailwind', 'WebSockets'].map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded-md bg-white/[0.08] border border-white/[0.08] text-[10px] font-mono text-white/80"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="text-center">
                  <span className="text-[11px] font-mono text-white/60 tracking-wider">
                    CLICK TO VIEW CASE STUDY →
                  </span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Bottom Bar: Clean Tag Strip */}
      <div className="relative z-20 flex items-center justify-between text-[11px] font-mono text-white/60 border-t border-white/[0.09] pt-4">
        <div className="flex items-center gap-2">
          <Sparkles className="w-3.5 h-3.5 text-sky-400" />
          <span className="hidden sm:inline">Curriculum Intelligence · Adaptive Knowledge</span>
          <span className="sm:hidden">Adaptive Knowledge OS</span>
        </div>
        <span className="text-white/90 font-bold uppercase tracking-wider">02 // FEATURE</span>
      </div>
    </div>
  );
};

/* ========================================================================= */
/* 03 — NEXUS (STUDENT OS) CINEMATIC ARTWORK CANVAS                          */
/* Systems + Connectivity + Student Ecosystem                                */
/* Precision graphite slate, isometric grid lines, emerald core & laser trim */
/* ========================================================================= */
export const NexusVisual: React.FC = () => {
  const { containerRef, mousePos, isHovered, handleMouseMove, handleMouseEnter, handleMouseLeave } =
    useInteractiveLighting();

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative w-full h-full min-h-[380px] sm:min-h-[460px] md:min-h-[520px] lg:min-h-[560px] rounded-3xl md:rounded-[36px] overflow-hidden border border-white/[0.09] shadow-2xl flex flex-col justify-between p-6 sm:p-10 select-none transform-gpu group/canvas transition-all duration-700"
      style={{
        background: `
          radial-gradient(800px circle at ${mousePos.x}% ${mousePos.y}%, rgba(16, 185, 129, 0.14), transparent 50%),
          radial-gradient(600px circle at 80% 25%, rgba(6, 95, 70, 0.22), transparent 60%),
          radial-gradient(550px circle at 20% 80%, rgba(255, 90, 0, 0.09), transparent 55%),
          linear-gradient(135deg, #080b0f 0%, #0f171d 45%, #06090c 100%)
        `,
      }}
    >
      {/* Precision Geometric Grid Texture */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.2) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.2) 1px, transparent 1px)
          `,
          backgroundSize: '36px 36px',
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(4,6,9,0.8)_100%)] pointer-events-none" />

      {/* Atmospheric Emerald Light Source */}
      <div
        className="absolute w-[360px] h-[360px] rounded-full blur-[110px] pointer-events-none transition-transform duration-700 ease-out"
        style={{
          background: 'radial-gradient(circle, rgba(16, 185, 129, 0.25) 0%, rgba(16, 185, 129, 0) 70%)',
          left: `${mousePos.x * 0.4 + 30}%`,
          top: `${mousePos.y * 0.4 - 10}%`,
          transform: 'translate(-50%, -50%)',
        }}
      />

      {/* Top Bar Metadata */}
      <div className="relative z-20 flex items-center justify-between">
        <div className="flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.06] backdrop-blur-md border border-white/[0.12] text-[11px] font-mono text-white/90 shadow-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
          </span>
          <span className="tracking-wide">NEXUS // UNIFIED STUDENT OS</span>
        </div>

        <div className="w-10 h-10 rounded-full bg-white/[0.08] backdrop-blur-md border border-white/[0.18] flex items-center justify-center text-white transition-all duration-500 group-hover/canvas:bg-emerald-500 group-hover/canvas:border-emerald-500 group-hover/canvas:scale-105 shadow-lg">
          <ArrowUpRight className="w-5 h-5 text-white transition-transform duration-300 group-hover/canvas:translate-x-0.5 group-hover/canvas:-translate-y-0.5" />
        </div>
      </div>

      {/* Center Cinematic Composition & Interactive Hover-to-Detail */}
      <div className="relative z-10 my-auto flex flex-col items-center justify-center w-full py-4 sm:py-6">
        {/* HERO LOGO: Monolithic precision milled texture */}
        <motion.div
          animate={{
            scale: isHovered ? 0.74 : 1,
            y: isHovered ? -26 : 0,
            opacity: isHovered ? 0.22 : 1,
            filter: isHovered ? 'blur(1.5px)' : 'blur(0px)',
          }}
          transition={{ duration: 0.6, ease: transitionEase }}
          className="relative max-w-[280px] sm:max-w-[350px] md:max-w-[400px] w-full aspect-square flex items-center justify-center pointer-events-none"
        >
          <div
            className="absolute inset-2 rounded-3xl blur-2xl transition-opacity duration-700"
            style={{
              background: 'radial-gradient(circle, rgba(16, 185, 129, 0.2) 0%, rgba(6, 95, 70, 0.15) 70%)',
              opacity: isHovered ? 0.15 : 0.8,
            }}
          />

          <div className="relative w-full h-full flex items-center justify-center">
            <img
              src={nexusLogo}
              alt="Nexus Student OS Logo Art Direction"
              className="relative z-10 w-full h-full object-contain drop-shadow-[0_25px_40px_rgba(0,0,0,0.85)] filter brightness-[1.05] contrast-[1.06]"
              loading="eager"
            />
            {/* Precision metallic edge reflection */}
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/15 via-transparent to-accent/10 rounded-3xl mix-blend-overlay pointer-events-none" />
          </div>
        </motion.div>

        {/* FOREGROUND DETAIL LAYER */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.94 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 15, scale: 0.96 }}
                transition={{ duration: 0.45, ease: transitionEase }}
                className="w-full max-w-[420px] px-4 space-y-4"
              >
                <div className="flex items-center justify-center">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-[11px] font-mono text-white tracking-widest uppercase backdrop-blur-md shadow-lg">
                    <Layers className="w-3 h-3 text-emerald-400" />
                    <span>Unified Student Infrastructure</span>
                  </span>
                </div>

                <div className="p-4 sm:p-5 rounded-2xl bg-black/50 backdrop-blur-xl border border-white/15 shadow-2xl space-y-3">
                  <div className="text-[13px] font-semibold text-white/95 tracking-wide flex items-center justify-between border-b border-white/10 pb-2.5">
                    <span>Key Architecture Pillars</span>
                    <span className="text-[10px] font-mono text-emerald-400">SYSTEMS ARCH</span>
                  </div>

                  <ul className="space-y-2 text-[12px] text-white/80 font-normal">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                      <span>Single-pane timetable & deadline synchronization</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                      <span>Distributed workflow & student tool ecosystem</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                      <span>Local-first offline storage & instant sync</span>
                    </li>
                  </ul>

                  <div className="pt-2 flex flex-wrap gap-1.5 border-t border-white/10">
                    {['TypeScript', 'Electron', 'PostgreSQL', 'Redis', 'Tailwind'].map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded-md bg-white/[0.08] border border-white/[0.08] text-[10px] font-mono text-white/80"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="text-center">
                  <span className="text-[11px] font-mono text-white/60 tracking-wider">
                    CLICK TO VIEW CASE STUDY →
                  </span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Bottom Bar: Clean Tag Strip */}
      <div className="relative z-20 flex items-center justify-between text-[11px] font-mono text-white/60 border-t border-white/[0.09] pt-4">
        <div className="flex items-center gap-2">
          <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
          <span className="hidden sm:inline">Unified Tools · Systems · Student Life</span>
          <span className="sm:hidden">Student Life Systems</span>
        </div>
        <span className="text-white/90 font-bold uppercase tracking-wider">03 // FEATURE</span>
      </div>
    </div>
  );
};

/* ========================================================================= */
/* 04 — LOCKINAI CINEMATIC ARTWORK CANVAS                                    */
/* Focus + Productivity + AI                                                 */
/* Midnight carbon abyss, concentrated amber/ember core, laser contrast      */
/* ========================================================================= */
export const LockinAIVisual: React.FC = () => {
  const { containerRef, mousePos, isHovered, handleMouseMove, handleMouseEnter, handleMouseLeave } =
    useInteractiveLighting();

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative w-full h-full min-h-[380px] sm:min-h-[460px] md:min-h-[520px] lg:min-h-[560px] rounded-3xl md:rounded-[36px] overflow-hidden border border-white/[0.09] shadow-2xl flex flex-col justify-between p-6 sm:p-10 select-none transform-gpu group/canvas transition-all duration-700"
      style={{
        background: `
          radial-gradient(750px circle at ${mousePos.x}% ${mousePos.y}%, rgba(255, 90, 0, 0.22), transparent 48%),
          radial-gradient(600px circle at 50% 50%, rgba(234, 88, 12, 0.2), transparent 55%),
          radial-gradient(500px circle at 20% 20%, rgba(180, 83, 9, 0.15), transparent 50%),
          linear-gradient(145deg, #0a0604 0%, #170d07 50%, #060403 100%)
        `,
      }}
    >
      {/* Concentric Focus Rings in Background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-15">
        <div className="w-[320px] h-[320px] rounded-full border border-accent/40" />
        <div className="w-[480px] h-[480px] rounded-full border border-orange-500/20" />
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(5,3,2,0.85)_100%)] pointer-events-none" />

      {/* Atmospheric Ember Glow */}
      <div
        className="absolute w-[360px] h-[360px] rounded-full blur-[110px] pointer-events-none transition-transform duration-700 ease-out"
        style={{
          background: 'radial-gradient(circle, rgba(255, 90, 0, 0.32) 0%, rgba(255, 90, 0, 0) 70%)',
          left: `${mousePos.x * 0.4 + 30}%`,
          top: `${mousePos.y * 0.4 - 10}%`,
          transform: 'translate(-50%, -50%)',
        }}
      />

      {/* Top Bar Metadata */}
      <div className="relative z-20 flex items-center justify-between">
        <div className="flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.06] backdrop-blur-md border border-white/[0.12] text-[11px] font-mono text-white/90 shadow-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
          </span>
          <span className="tracking-wide">LOCKIN AI // FLOW STATE ENGINE</span>
        </div>

        <div className="w-10 h-10 rounded-full bg-white/[0.08] backdrop-blur-md border border-white/[0.18] flex items-center justify-center text-white transition-all duration-500 group-hover/canvas:bg-accent group-hover/canvas:border-accent group-hover/canvas:scale-105 shadow-lg">
          <ArrowUpRight className="w-5 h-5 text-white transition-transform duration-300 group-hover/canvas:translate-x-0.5 group-hover/canvas:-translate-y-0.5" />
        </div>
      </div>

      {/* Center Cinematic Composition & Interactive Hover-to-Detail */}
      <div className="relative z-10 my-auto flex flex-col items-center justify-center w-full py-4 sm:py-6">
        {/* HERO LOGO: Focused carbon & ember glow */}
        <motion.div
          animate={{
            scale: isHovered ? 0.74 : 1,
            y: isHovered ? -26 : 0,
            opacity: isHovered ? 0.22 : 1,
            filter: isHovered ? 'blur(1.5px)' : 'blur(0px)',
          }}
          transition={{ duration: 0.6, ease: transitionEase }}
          className="relative max-w-[280px] sm:max-w-[350px] md:max-w-[400px] w-full aspect-square flex items-center justify-center pointer-events-none"
        >
          <div
            className="absolute inset-2 rounded-3xl blur-2xl transition-opacity duration-700"
            style={{
              background: 'radial-gradient(circle, rgba(255, 90, 0, 0.28) 0%, rgba(234, 88, 12, 0.15) 70%)',
              opacity: isHovered ? 0.15 : 0.8,
            }}
          />

          <div className="relative w-full h-full flex items-center justify-center">
            <img
              src={lockinLogo}
              alt="LockinAI Logo Art Direction"
              className="relative z-10 w-full h-full object-contain drop-shadow-[0_25px_40px_rgba(0,0,0,0.9)] filter brightness-[1.04] contrast-[1.08]"
              loading="eager"
            />
            {/* Focused ambient amber rim light */}
            <div className="absolute inset-0 bg-gradient-to-t from-accent/20 via-transparent to-yellow-500/10 rounded-3xl mix-blend-overlay pointer-events-none" />
          </div>
        </motion.div>

        {/* FOREGROUND DETAIL LAYER */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.94 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 15, scale: 0.96 }}
                transition={{ duration: 0.45, ease: transitionEase }}
                className="w-full max-w-[420px] px-4 space-y-4"
              >
                <div className="flex items-center justify-center">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/20 border border-accent/40 text-[11px] font-mono text-white tracking-widest uppercase backdrop-blur-md shadow-lg">
                    <Flame className="w-3 h-3 text-accent" />
                    <span>Deep Flow Velocity Engine</span>
                  </span>
                </div>

                <div className="p-4 sm:p-5 rounded-2xl bg-black/50 backdrop-blur-xl border border-white/15 shadow-2xl space-y-3">
                  <div className="text-[13px] font-semibold text-white/95 tracking-wide flex items-center justify-between border-b border-white/10 pb-2.5">
                    <span>Key Architecture Pillars</span>
                    <span className="text-[10px] font-mono text-accent">PRODUCTIVITY AI</span>
                  </div>

                  <ul className="space-y-2 text-[12px] text-white/80 font-normal">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-accent flex-shrink-0" />
                      <span>Intelligent distraction interception & blocking</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-accent flex-shrink-0" />
                      <span>Autonomous AI accountability check-ins</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-accent flex-shrink-0" />
                      <span>Session telemetry & cognitive fatigue tracking</span>
                    </li>
                  </ul>

                  <div className="pt-2 flex flex-wrap gap-1.5 border-t border-white/10">
                    {['Next.js', 'Python', 'FastAPI', 'PostgreSQL', 'Tailwind'].map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded-md bg-white/[0.08] border border-white/[0.08] text-[10px] font-mono text-white/80"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="text-center">
                  <span className="text-[11px] font-mono text-white/60 tracking-wider">
                    CLICK TO VIEW CASE STUDY →
                  </span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Bottom Bar: Clean Tag Strip */}
      <div className="relative z-20 flex items-center justify-between text-[11px] font-mono text-white/60 border-t border-white/[0.09] pt-4">
        <div className="flex items-center gap-2">
          <Sparkles className="w-3.5 h-3.5 text-accent" />
          <span className="hidden sm:inline">AI Productivity · Accountability & Focus</span>
          <span className="sm:hidden">Focus & Flow Engine</span>
        </div>
        <span className="text-white/90 font-bold uppercase tracking-wider">04 // FEATURE</span>
      </div>
    </div>
  );
};

/* ========================================================================= */
/* 05 — NOCAP CINEMATIC ARTWORK CANVAS                                       */
/* Internet Culture + Context + Slang + Digital Language                     */
/* Electric violet & chromatic orchid gradient, sunset amber flare           */
/* ========================================================================= */
export const NoCapVisual: React.FC = () => {
  const { containerRef, mousePos, isHovered, handleMouseMove, handleMouseEnter, handleMouseLeave } =
    useInteractiveLighting();

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative w-full h-full min-h-[380px] sm:min-h-[460px] md:min-h-[520px] lg:min-h-[560px] rounded-3xl md:rounded-[36px] overflow-hidden border border-white/[0.09] shadow-2xl flex flex-col justify-between p-6 sm:p-10 select-none transform-gpu group/canvas transition-all duration-700"
      style={{
        background: `
          radial-gradient(800px circle at ${mousePos.x}% ${mousePos.y}%, rgba(168, 85, 247, 0.2), transparent 48%),
          radial-gradient(650px circle at 85% 20%, rgba(217, 70, 239, 0.22), transparent 58%),
          radial-gradient(600px circle at 15% 85%, rgba(255, 90, 0, 0.18), transparent 55%),
          linear-gradient(135deg, #0b0616 0%, #1a0f2e 45%, #080410 100%)
        `,
      }}
    >
      {/* Chromatic Iridescent Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(255,90,0,0.12),transparent_55%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(6,3,11,0.8)_100%)] pointer-events-none" />

      {/* Atmospheric High-Energy Violet Orb */}
      <div
        className="absolute w-[380px] h-[380px] rounded-full blur-[120px] pointer-events-none transition-transform duration-700 ease-out"
        style={{
          background: 'radial-gradient(circle, rgba(168, 85, 247, 0.3) 0%, rgba(168, 85, 247, 0) 70%)',
          left: `${mousePos.x * 0.4 + 30}%`,
          top: `${mousePos.y * 0.4 - 10}%`,
          transform: 'translate(-50%, -50%)',
        }}
      />
      <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-accent/20 rounded-full blur-[95px] pointer-events-none" />

      {/* Top Bar Metadata */}
      <div className="relative z-20 flex items-center justify-between">
        <div className="flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.06] backdrop-blur-md border border-white/[0.12] text-[11px] font-mono text-white/90 shadow-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-400" />
          </span>
          <span className="tracking-wide">NOCAP // INTERNET CONTEXT ENGINE</span>
        </div>

        <div className="w-10 h-10 rounded-full bg-white/[0.08] backdrop-blur-md border border-white/[0.18] flex items-center justify-center text-white transition-all duration-500 group-hover/canvas:bg-purple-600 group-hover/canvas:border-purple-600 group-hover/canvas:scale-105 shadow-lg">
          <ArrowUpRight className="w-5 h-5 text-white transition-transform duration-300 group-hover/canvas:translate-x-0.5 group-hover/canvas:-translate-y-0.5" />
        </div>
      </div>

      {/* Center Cinematic Composition & Interactive Hover-to-Detail */}
      <div className="relative z-10 my-auto flex flex-col items-center justify-center w-full py-4 sm:py-6">
        {/* HERO LOGO: Chromatic dimensional liquid sheen */}
        <motion.div
          animate={{
            scale: isHovered ? 0.74 : 1,
            y: isHovered ? -26 : 0,
            opacity: isHovered ? 0.22 : 1,
            filter: isHovered ? 'blur(1.5px)' : 'blur(0px)',
          }}
          transition={{ duration: 0.6, ease: transitionEase }}
          className="relative max-w-[280px] sm:max-w-[350px] md:max-w-[400px] w-full aspect-square flex items-center justify-center pointer-events-none"
        >
          <div
            className="absolute inset-2 rounded-3xl blur-2xl transition-opacity duration-700"
            style={{
              background: 'radial-gradient(circle, rgba(168, 85, 247, 0.26) 0%, rgba(255, 90, 0, 0.18) 70%)',
              opacity: isHovered ? 0.15 : 0.8,
            }}
          />

          <div className="relative w-full h-full flex items-center justify-center">
            <img
              src={noCapLogo}
              alt="noCap Logo Art Direction"
              className="relative z-10 w-full h-full object-contain drop-shadow-[0_25px_40px_rgba(0,0,0,0.85)] filter brightness-[1.05] contrast-[1.08]"
              loading="eager"
            />
            {/* Multi-spectral chromatic reflection */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/15 via-transparent to-accent/15 rounded-3xl mix-blend-color-dodge pointer-events-none" />
          </div>
        </motion.div>

        {/* FOREGROUND DETAIL LAYER */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.94 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 15, scale: 0.96 }}
                transition={{ duration: 0.45, ease: transitionEase }}
                className="w-full max-w-[420px] px-4 space-y-4"
              >
                <div className="flex items-center justify-center">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/20 border border-purple-400/40 text-[11px] font-mono text-white tracking-widest uppercase backdrop-blur-md shadow-lg">
                    <MessageSquare className="w-3 h-3 text-purple-400" />
                    <span>Multimodal Meme & Slang NLP</span>
                  </span>
                </div>

                <div className="p-4 sm:p-5 rounded-2xl bg-black/50 backdrop-blur-xl border border-white/15 shadow-2xl space-y-3">
                  <div className="text-[13px] font-semibold text-white/95 tracking-wide flex items-center justify-between border-b border-white/10 pb-2.5">
                    <span>Key Architecture Pillars</span>
                    <span className="text-[10px] font-mono text-purple-400">VISION + NLP</span>
                  </div>

                  <ul className="space-y-2 text-[12px] text-white/80 font-normal">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 flex-shrink-0" />
                      <span>Vision OCR + screenshot cultural context mapping</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 flex-shrink-0" />
                      <span>Real-time slang etymology & sentiment parsing</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 flex-shrink-0" />
                      <span>Dynamic internet lexicon vector embeddings</span>
                    </li>
                  </ul>

                  <div className="pt-2 flex flex-wrap gap-1.5 border-t border-white/10">
                    {['Next.js', 'Vision AI', 'FastAPI', 'Tailwind', 'Python'].map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded-md bg-white/[0.08] border border-white/[0.08] text-[10px] font-mono text-white/80"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="text-center">
                  <span className="text-[11px] font-mono text-white/60 tracking-wider">
                    CLICK TO VIEW CASE STUDY →
                  </span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Bottom Bar: Clean Tag Strip */}
      <div className="relative z-20 flex items-center justify-between text-[11px] font-mono text-white/60 border-t border-white/[0.09] pt-4">
        <div className="flex items-center gap-2">
          <Sparkles className="w-3.5 h-3.5 text-purple-400" />
          <span className="hidden sm:inline">Internet Culture · Slang & Meme Translation</span>
          <span className="sm:hidden">Internet Context Engine</span>
        </div>
        <span className="text-white/90 font-bold uppercase tracking-wider">05 // FEATURE</span>
      </div>
    </div>
  );
};
