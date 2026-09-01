import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../common/Button';

export const Navbar: React.FC = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="w-full border-b border-border/80 bg-background/90 backdrop-blur-md sticky top-0 z-40"
    >
      <div className="max-w-[1520px] mx-auto px-6 md:px-12 lg:px-16 h-20 flex items-center justify-between">
        {/* Brand / Name */}
        <div className="flex items-center gap-3">
          <a
            href="#"
            className="text-[15px] font-bold tracking-tight text-primary uppercase hover:opacity-75 transition-opacity"
          >
            Mihir Kalway<span className="text-secondary-muted font-normal text-xs ml-0.5">®</span>
          </a>
        </div>

        {/* Availability Badge - Center */}
        <div className="hidden md:flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-surface/60 border border-border/60 text-[12px] font-medium text-secondary">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="tracking-wide uppercase text-[11px] font-mono">Available for select projects</span>
        </div>

        {/* Minimal Navigation Items */}
        <nav className="flex items-center gap-6 md:gap-8">
          <a
            href="#work"
            className="text-[13px] font-medium tracking-wide uppercase text-secondary hover:text-primary transition-colors"
          >
            Work
          </a>
          <a
            href="#about"
            className="text-[13px] font-medium tracking-wide uppercase text-secondary hover:text-primary transition-colors"
          >
            About
          </a>
          <Button
            variant="primary"
            size="sm"
            href="#contact"
          >
            Let's Talk
          </Button>
        </nav>
      </div>
    </motion.header>
  );
};
