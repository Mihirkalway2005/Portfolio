import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { AboutIntro } from './AboutIntro';
import { AboutBio } from './AboutBio';
import { AboutWorkFocus } from './AboutWorkFocus';
import { AboutBeyondCode } from './AboutBeyondCode';
import { AboutPhilosophy } from './AboutPhilosophy';
import { AboutFinalCTA } from './AboutFinalCTA';

export const AboutPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.title = 'About — Mihir Kalway';
    return () => {
      document.title = 'Mihir Kalway — Portfolio';
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="flex-1 flex flex-col w-full"
    >
      <AboutIntro />
      <AboutBio />
      <AboutWorkFocus />
      <AboutBeyondCode />
      <AboutPhilosophy />
      <AboutFinalCTA />
    </motion.div>
  );
};
