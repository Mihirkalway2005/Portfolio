import React from 'react';
import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { ArrowUp, ArrowUpRight, Mail, Clock } from 'lucide-react';
import { Button } from '../common/Button';
import { useRouter } from '../../context/RouterContext';

const LinkedinIcon: React.FC<{ className?: string }> = ({ className = 'w-3.5 h-3.5' }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.63 1.63 0 1 0 1.63 1.63 1.63 1.63 0 0 0-1.63-1.63Z" />
  </svg>
);

const GithubIcon: React.FC<{ className?: string }> = ({ className = 'w-3.5 h-3.5' }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const transitionEase = [0.16, 1, 0.3, 1] as const;

export const AboutFinalCTA: React.FC = () => {
  const { navigate } = useRouter();
  const shouldReduceMotion = useReducedMotion();

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/#contact');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
        duration: shouldReduceMotion ? 0.2 : 0.7,
        ease: transitionEase,
      },
    },
  };

  return (
    <section
      aria-label="Closing Statement and Contact"
      className="relative w-full pt-20 sm:pt-28 md:pt-36 pb-14 sm:pb-18 border-t border-border/80 bg-background select-none overflow-hidden"
    >
      {/* Subtle warm corner ambient glow */}
      <div className="absolute top-0 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.05 }}
        variants={containerVariants}
        className="max-w-[1520px] mx-auto px-6 sm:px-10 md:px-14 lg:px-16 space-y-14 sm:space-y-18 md:space-y-20 relative z-10"
      >
        {/* Editorial Closing Statement */}
        <div className="space-y-6 md:space-y-8">
          {/* Eyebrow */}
          <motion.div variants={itemVariants} className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse-subtle" />
            <span className="text-[12px] md:text-[13px] font-mono font-semibold tracking-[0.2em] uppercase text-accent">
              COLLABORATION // GET IN TOUCH
            </span>
          </motion.div>

          {/* Large Punchy Display Statement */}
          <motion.div variants={itemVariants} className="space-y-1 text-left">
            <h2 className="text-[38px] sm:text-[56px] md:text-[76px] lg:text-[90px] xl:text-[100px] font-black text-primary tracking-tighter uppercase leading-[0.92]">
              LET’S BUILD SOMETHING
            </h2>
            <h2 className="text-[38px] sm:text-[56px] md:text-[76px] lg:text-[90px] xl:text-[100px] font-black text-primary tracking-tighter uppercase leading-[0.92]">
              WORTH TALKING ABOUT<span className="text-accent">.</span>
            </h2>
          </motion.div>

          {/* Supporting Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-[18px] sm:text-[20px] md:text-[22px] text-secondary font-normal leading-relaxed max-w-[700px] tracking-tight"
          >
            I'm always open to early-stage products, challenging engineering problems, intelligent systems, and meaningful collaborations.
          </motion.p>

          {/* Action Row: Global Button Component + Direct Communication Channels */}
          <motion.div
            variants={itemVariants}
            className="pt-4 flex flex-col lg:flex-row lg:items-center justify-between gap-8"
          >
            {/* Existing Global Button */}
            <div className="flex items-center gap-4">
              <Button
                variant="primary"
                size="lg"
                href="/#contact"
                iconDirection="up-right"
                onClick={handleContactClick}
              >
                LET’S TALK
              </Button>
            </div>

            {/* Direct Channels Quick Bar */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-2 lg:pt-0">
              <a
                href="mailto:mihirkalway@gmail.com"
                className="group flex items-center gap-2 text-[12px] font-mono text-secondary hover:text-accent transition-colors duration-200"
              >
                <Mail className="w-3.5 h-3.5 text-accent" />
                <span>mihirkalway@gmail.com</span>
                <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <a
                href="https://www.linkedin.com/in/mihir-kalway-734248314"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-[12px] font-mono text-secondary hover:text-accent transition-colors duration-200"
              >
                <LinkedinIcon className="w-3.5 h-3.5 text-accent" />
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <a
                href="https://github.com/Mihirkalway2005"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-[12px] font-mono text-secondary hover:text-accent transition-colors duration-200"
              >
                <GithubIcon className="w-3.5 h-3.5 text-accent" />
                <span>GitHub</span>
                <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Minimal Footer & Copyright Metadata Bar */}
        <div className="pt-8 border-t border-border/70 flex flex-col sm:flex-row items-center justify-between gap-6 text-[12px] font-mono uppercase text-secondary-muted tracking-wider">
          <div className="flex items-center gap-3">
            <span className="font-bold text-primary">MIHIR KALWAY</span>
            <span>//</span>
            <span>HYDERABAD, INDIA</span>
            <span className="hidden md:inline">//</span>
            <span className="hidden md:flex items-center gap-1.5">
              <Clock className="w-3 h-3 text-accent" />
              <span>IST (UTC +5:30)</span>
            </span>
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
      </motion.div>
    </section>
  );
};
