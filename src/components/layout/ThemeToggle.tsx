import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

interface ThemeToggleProps {
  className?: string;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ className = '' }) => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';
  const shouldReduceMotion = useReducedMotion();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      role="switch"
      aria-checked={isDark}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className={`
        group/toggle relative inline-flex items-center justify-between
        w-[58px] h-[28px] p-[2.5px] rounded-full
        bg-surface/80 hover:bg-surface border border-border/80 hover:border-accent/40
        shadow-subtle transition-colors duration-300 cursor-pointer select-none
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background
        ${className}
      `.trim()}
    >
      {/* Smooth Sliding Indicator Pill */}
      <motion.div
        animate={{
          x: isDark ? 28 : 0,
        }}
        transition={{
          duration: shouldReduceMotion ? 0.01 : 0.45,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="absolute left-[3px] top-[2.5px] w-[22px] h-[21px] rounded-full bg-background border border-border/80 shadow-sm flex items-center justify-center pointer-events-none z-0"
      >
        <span className="w-1 h-1 rounded-full bg-accent" />
      </motion.div>

      {/* Sun Icon (Light Mode) */}
      <div className="relative z-10 w-[22px] h-[22px] flex items-center justify-center pointer-events-none">
        <Sun
          className={`w-3.5 h-3.5 transition-colors duration-300 ${
            !isDark ? 'text-accent' : 'text-secondary-muted/50 group-hover/toggle:text-secondary'
          }`}
          strokeWidth={!isDark ? 2.2 : 1.8}
        />
      </div>

      {/* Moon Icon (Dark Mode) */}
      <div className="relative z-10 w-[22px] h-[22px] flex items-center justify-center pointer-events-none">
        <Moon
          className={`w-3.5 h-3.5 transition-colors duration-300 ${
            isDark ? 'text-accent' : 'text-secondary-muted/50 group-hover/toggle:text-secondary'
          }`}
          strokeWidth={isDark ? 2.2 : 1.8}
        />
      </div>
    </button>
  );
};
