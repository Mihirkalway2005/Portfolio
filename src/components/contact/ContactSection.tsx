import React from 'react';
import { motion, type Variants, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, ArrowUp, Mail } from 'lucide-react';
import { Button } from '../common/Button';

// Easing curve matching Folioblox premium editorial pacing
const transitionEase = [0.16, 1, 0.3, 1] as const;

// Minimal Brand Icon SVGs
const LinkedinIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.63 1.63 0 1 0 1.63 1.63 1.63 1.63 0 0 0-1.63-1.63Z" />
  </svg>
);

const GithubIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

interface ContactChannel {
  label: string;
  value: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  isExternal?: boolean;
}

const contactChannels: ContactChannel[] = [
  {
    label: 'EMAIL',
    value: 'mihirkalway@gmail.com',
    href: 'mailto:mihirkalway@gmail.com',
    icon: Mail,
    isExternal: false,
  },
  {
    label: 'LINKEDIN',
    value: 'linkedin.com/in/mihir-kalway-734248314',
    href: 'https://www.linkedin.com/in/mihir-kalway-734248314',
    icon: LinkedinIcon,
    isExternal: true,
  },
  {
    label: 'GITHUB',
    value: 'github.com/Mihirkalway2005',
    href: 'https://github.com/Mihirkalway2005',
    icon: GithubIcon,
    isExternal: true,
  },
];

export const ContactSection: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  // Scroll to top handler
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Section label reveal
  const labelVariants: Variants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.2 : 0.6,
        ease: transitionEase,
        delay: shouldReduceMotion ? 0 : 0.05,
      },
    },
  };

  // Headline line-by-line mask variants
  const headlineLineVariants: Variants = {
    hidden: { y: '105%', opacity: 0.1 },
    visible: (custom: number) => ({
      y: '0%',
      opacity: 1,
      transition: {
        duration: shouldReduceMotion ? 0.3 : 0.9,
        ease: transitionEase,
        delay: shouldReduceMotion ? 0 : 0.15 + custom * 0.12,
      },
    }),
  };

  // Right column supporting content reveal
  const supportingVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.3 : 0.85,
        ease: transitionEase,
        delay: shouldReduceMotion ? 0 : 0.4,
      },
    },
  };

  // Contact links sequential reveal
  const linkItemVariants: Variants = {
    hidden: { opacity: 0, y: 18 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.3 : 0.7,
        ease: transitionEase,
        delay: shouldReduceMotion ? 0 : 0.55 + custom * 0.08,
      },
    }),
  };

  return (
    <section
      id="contact"
      aria-label="Contact"
      className="relative w-full border-t border-border/80 bg-background pt-24 sm:pt-32 md:pt-44 pb-14 sm:pb-18 select-none"
    >
      <div className="max-w-[1520px] mx-auto px-6 sm:px-10 md:px-14 lg:px-16 space-y-20 sm:space-y-24 md:space-y-32">
        {/* ========================================================================= */}
        {/* 1. ASYMMETRIC EDITORIAL STATEMENT & PRIMARY CTA GRID                      */}
        {/* ========================================================================= */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1, margin: '0px 0px -40px 0px' }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start"
        >
          {/* Left Column: Section Label + Oversized Display Headline (7 cols) */}
          <div className="lg:col-span-7 space-y-6 md:space-y-8">
            {/* Label: LET'S CONNECT */}
            <motion.div variants={labelVariants} className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse-subtle" />
              <span className="text-[12px] md:text-[13px] font-mono font-semibold tracking-[0.2em] uppercase text-accent">
                LET'S CONNECT
              </span>
            </motion.div>

            {/* Display Headline with Line Mask Reveal */}
            <div className="space-y-0 text-left">
              <div className="text-mask-wrapper">
                <motion.h2
                  custom={0}
                  variants={headlineLineVariants}
                  className="text-[44px] sm:text-[62px] md:text-[80px] lg:text-[96px] xl:text-[108px] font-black text-primary tracking-tighter leading-[0.9] uppercase"
                >
                  LET'S BUILD
                </motion.h2>
              </div>

              <div className="text-mask-wrapper">
                <motion.h2
                  custom={1}
                  variants={headlineLineVariants}
                  className="text-[44px] sm:text-[62px] md:text-[80px] lg:text-[96px] xl:text-[108px] font-black text-primary tracking-tighter leading-[0.9] uppercase"
                >
                  SOMETHING
                </motion.h2>
              </div>

              <div className="text-mask-wrapper">
                <motion.h2
                  custom={2}
                  variants={headlineLineVariants}
                  className="text-[44px] sm:text-[62px] md:text-[80px] lg:text-[96px] xl:text-[108px] font-black text-primary tracking-tighter leading-[0.9] uppercase"
                >
                  WORTH BUILDING<span className="text-accent">.</span>
                </motion.h2>
              </div>
            </div>
          </div>

          {/* Right Column: Supporting Statement + Primary CTA + Direct Details (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-10 lg:pt-14">
            {/* Personal invitation copy */}
            <motion.div variants={supportingVariants}>
              <p className="text-[18px] sm:text-[20px] md:text-[22px] text-secondary leading-relaxed font-normal tracking-tight max-w-[500px]">
                I'm always open to interesting ideas, ambitious projects, collaborations and conversations.
              </p>
            </motion.div>

            {/* Primary Action Button */}
            <motion.div variants={supportingVariants} className="pt-2">
              <Button
                variant="primary"
                size="lg"
                href="mailto:mihirkalway@gmail.com"
                iconDirection="up-right"
              >
                LET'S TALK
              </Button>
            </motion.div>

            {/* Direct Contact Channels List */}
            <div className="pt-4 border-t border-border/60 space-y-4">
              <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-secondary-muted block">
                DIRECT CHANNELS //
              </span>

              <div className="flex flex-col space-y-3">
                {contactChannels.map((channel, idx) => (
                  <motion.a
                    key={channel.label}
                    custom={idx}
                    variants={linkItemVariants}
                    href={channel.href}
                    target={channel.isExternal ? '_blank' : undefined}
                    rel={channel.isExternal ? 'noopener noreferrer' : undefined}
                    className="group/link flex items-center justify-between py-2 border-b border-border/40 hover:border-accent/40 transition-colors duration-300"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-[12px] font-mono tracking-wider font-bold text-primary group-hover/link:text-accent transition-colors duration-300">
                        {channel.label}
                      </span>
                      <span className="text-[13px] font-sans text-secondary-muted group-hover/link:text-secondary transition-colors duration-300 hidden sm:inline-block">
                        {channel.value}
                      </span>
                    </div>

                    <div className="w-7 h-7 rounded-full border border-border/60 flex items-center justify-center text-secondary group-hover/link:text-accent group-hover/link:border-accent group-hover/link:translate-x-1 group-hover/link:-translate-y-0.5 transition-all duration-300">
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* ========================================================================= */}
        {/* 2. MINIMAL FOOTER & COPYRIGHT METADATA BAR                                */}
        {/* ========================================================================= */}
        <div className="pt-10 border-t border-border/70 flex flex-col sm:flex-row items-center justify-between gap-6 text-[12px] font-mono uppercase text-secondary-muted tracking-wider">
          <div className="flex items-center gap-3">
            <span className="font-bold text-primary">MIHIR KALWAY</span>
            <span>//</span>
            <span>© {new Date().getFullYear()}</span>
          </div>

          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="group flex items-center gap-2 hover:text-primary transition-colors text-[11px] uppercase tracking-widest outline-none focus-visible:ring-1 focus-visible:ring-accent rounded px-2 py-1"
          >
            <span>BACK TO TOP</span>
            <div className="w-6 h-6 rounded-full border border-border/60 flex items-center justify-center group-hover:border-accent group-hover:text-accent group-hover:-translate-y-0.5 transition-all duration-300">
              <ArrowUp className="w-3 h-3" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};
