import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Sparkles, Sliders, ShieldCheck } from 'lucide-react';

interface AboutPortraitPlaceholderProps {
  imageSrc?: string;
  className?: string;
}

export const AboutPortraitPlaceholder: React.FC<AboutPortraitPlaceholderProps> = ({
  imageSrc,
  className = '',
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`relative w-full aspect-[4/5] max-w-[540px] mx-auto rounded-3xl overflow-hidden border border-border/80 bg-surface shadow-editorial select-none group/portrait ${className}`}
    >
      {/* If a real photo is provided, render it cleanly with no distracting overlays */}
      {imageSrc ? (
        <img
          src={imageSrc}
          alt="Mihir Kalway"
          className="w-full h-full object-cover rounded-3xl transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/portrait:scale-[1.02]"
        />
      ) : (
        <div className="w-full h-full p-6 sm:p-8 flex flex-col justify-between relative">
          {/* Subtle architectural ambient background glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20" />

          {/* Technical Corner Markers (Editorial L-brackets) */}
          <div className="absolute top-4 left-4 w-3.5 h-3.5 border-t-2 border-l-2 border-accent/60 pointer-events-none" />
          <div className="absolute top-4 right-4 w-3.5 h-3.5 border-t-2 border-r-2 border-accent/60 pointer-events-none" />
          <div className="absolute bottom-4 left-4 w-3.5 h-3.5 border-b-2 border-l-2 border-accent/60 pointer-events-none" />
          <div className="absolute bottom-4 right-4 w-3.5 h-3.5 border-b-2 border-r-2 border-accent/60 pointer-events-none" />

          {/* Top Metadata Row */}
          <div className="relative z-10 flex items-center justify-between border-b border-border/60 pb-4">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse-subtle" />
              <span className="text-[11px] font-mono tracking-[0.2em] uppercase text-accent font-bold">
                PORTRAIT // ARCHIVE
              </span>
            </div>
            <div className="flex items-center gap-2 text-[10px] font-mono text-secondary-muted tracking-wider uppercase bg-surface-subtle px-2.5 py-1 rounded-full border border-border/70">
              <ShieldCheck className="w-3 h-3 text-accent" />
              <span>SPECIMEN MK-26</span>
            </div>
          </div>

          {/* Central Editorial Monogram & Placeholder Structure */}
          <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center my-6 space-y-5">
            <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-3xl bg-surface-subtle border border-border/80 flex flex-col items-center justify-center text-primary group-hover/portrait:border-accent/60 transition-all duration-500 shadow-md">
              <span className="text-[32px] sm:text-[40px] font-black tracking-tighter">
                MK<span className="text-accent">.</span>
              </span>
              <div className="flex items-center gap-1.5 text-[9px] font-mono text-secondary-muted tracking-wider uppercase mt-1">
                <Camera className="w-3.5 h-3.5 text-accent" />
                <span>PHOTO AREA</span>
              </div>
            </div>

            <div className="space-y-1.5 max-w-[280px]">
              <p className="text-[14px] font-mono text-primary font-bold tracking-tight">
                Mihir Kalway
              </p>
              <p className="text-[12px] font-mono text-secondary leading-snug">
                Computer Science Student & Builder
              </p>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="relative z-10 pt-4 border-t border-border/60 flex items-center justify-between text-[10px] sm:text-[11px] font-mono text-secondary-muted uppercase tracking-wider">
            <span className="flex items-center gap-1.5 text-secondary">
              <Sparkles className="w-3 h-3 text-accent" />
              <span>EDITORIAL PORTRAIT</span>
            </span>
            <div className="flex items-center gap-2">
              <Sliders className="w-3 h-3 text-secondary-muted" />
              <span>RATIO 4:5</span>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
};
