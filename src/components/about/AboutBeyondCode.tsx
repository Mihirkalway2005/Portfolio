import React, { useState } from 'react';
import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

import iscbLogo from '../../../public/ISCB-2.png';
import wjcLogo from '../../../public/WJC2.png';
import cotdLogo from '../../../public/COTD-2.png';
import ecellLogo from '../../../public/ECELL-2.png';

const transitionEase = [0.16, 1, 0.3, 1] as const;

interface BeyondCodeItem {
  number: string;
  id: string;
  title: string;
  organization: string;
  role: string;
  tag: string;
  description: string;
  pillars: string[];
  logo: string;
}

const beyondItems: BeyondCodeItem[] = [
  {
    number: '01',
    id: 'iscb',
    title: 'ISCB',
    organization: 'International Strategy Consulting Board',
    role: 'Startup Consulting & Global Collaboration',
    tag: 'GLOBAL STRATEGY',
    description:
      'Collaborating with startups across different parts of the world, understanding their challenges, contributing to initiatives, and connecting them with students who can create real-world value.',
    pillars: ['Global Consulting', 'Cross-Functional Work', 'Startup Growth'],
    logo: iscbLogo,
  },
  {
    number: '02',
    id: 'japan-center',
    title: 'Woxsen Japan Centre',
    organization: 'Woxsen Japan Centre',
    role: 'Student Coordination · Cross-Cultural Engagement',
    tag: 'CULTURAL EXCHANGE',
    description:
      'Facilitating cross-cultural student engagement, coordinating academic and cultural initiatives, and fostering collaborative international connections.',
    pillars: ['Cross-Cultural Programs', 'Student Coordination', 'Global Outlook'],
    logo: wjcLogo,
  },
  {
    number: '03',
    id: 'cotd',
    title: 'COTD',
    organization: 'Centre of Talent Development',
    role: 'L&D Ambassador',
    tag: 'TALENT DEVELOPMENT',
    description:
      'Working with peers to make learning more engaging and helping students become better prepared for placements, internships, and professional career opportunities.',
    pillars: ['Placement Prep', 'Resume Building', 'Peer Mentorship'],
    logo: cotdLogo,
  },
  {
    number: '04',
    id: 'e-cell',
    title: 'E-Cell',
    organization: 'Woxsen E-Cell · Venture & Incubation',
    role: 'Entrepreneurship Cell · Ecosystem & Innovation',
    tag: 'VENTURE ECOSYSTEM',
    description:
      'Driving student entrepreneurship programs, organizing venture initiatives, and fostering a collaborative ecosystem for early-stage builders and innovators.',
    pillars: ['Venture Incubation', 'Early-Stage Builders', 'Event Leadership'],
    logo: ecellLogo,
  },
];

export const AboutBeyondCode: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const titleVariants: Variants = {
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

  const rowVariants: Variants = {
    hidden: { opacity: 0, y: 16 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.2 : 0.6,
        ease: transitionEase,
        delay: shouldReduceMotion ? 0 : 0.08 + custom * 0.06,
      },
    }),
  };

  return (
    <section
      aria-label="Beyond The Code"
      className="relative w-full py-20 sm:py-28 md:py-36 border-t border-border/70 select-none"
    >
      <div className="max-w-[1520px] mx-auto px-6 sm:px-10 md:px-14 lg:px-16 space-y-12 sm:space-y-16">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={titleVariants}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-end pb-6 sm:pb-8 border-b border-border/60"
        >
          <div className="lg:col-span-8 space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse-subtle" />
              <span className="text-[12px] font-mono uppercase tracking-[0.2em] text-accent font-semibold">
                EXPERIENCES & COLLABORATIONS
              </span>
            </div>
            <h2 className="text-[34px] sm:text-[48px] md:text-[60px] font-black text-primary tracking-tighter uppercase leading-[0.94]">
              THERE’S MORE TO BUILDING THAN CODE<span className="text-accent">.</span>
            </h2>
          </div>

          <div className="lg:col-span-4 lg:text-right">
            <p className="text-[15px] sm:text-[16px] text-secondary font-normal leading-relaxed max-w-[420px] lg:ml-auto">
              Building isn't just about syntax. It's about people, strategy, cross-cultural environments, and taking initiatives through to completion.
            </p>
          </div>
        </motion.div>

        {/* Clean Editorial Rows (No harsh outer dividing lines or boxes) */}
        <div className="space-y-4 sm:space-y-6">
          {beyondItems.map((item, idx) => {
            const isHovered = hoveredId === item.id;

            return (
              <motion.div
                key={item.id}
                custom={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.05 }}
                variants={rowVariants}
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
                className={`group relative py-7 sm:py-9 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] cursor-default rounded-2xl ${
                  isHovered ? 'bg-surface sm:px-6 md:px-8 shadow-subtle' : 'px-0'
                }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
                  {/* Left: Number + Floating Transparent Logo + Title + Subtitle (5 cols) */}
                  <div className="lg:col-span-5 flex items-start gap-4 sm:gap-5">
                    <span className="font-mono text-[15px] sm:text-[17px] font-bold text-accent shrink-0 pt-1">
                      {item.number}
                    </span>

                    {/* Floating Logo (No outer border box) */}
                    <div className="w-12 h-12 sm:w-14 sm:h-14 shrink-0 flex items-center justify-center">
                      <img
                        src={item.logo}
                        alt={item.title}
                        className="w-full h-full object-contain filter brightness-[1.04]"
                      />
                    </div>

                    <div className="space-y-1">
                      <div className="flex items-center gap-2.5">
                        <h3 className="text-[22px] sm:text-[26px] font-black text-primary uppercase tracking-tight group-hover:text-accent transition-colors duration-300">
                          {item.title}
                        </h3>
                        <span className="text-[10px] font-mono tracking-widest text-secondary-muted uppercase bg-surface-subtle/80 px-2 py-0.5 rounded">
                          {item.tag}
                        </span>
                      </div>
                      <p className="text-[12px] sm:text-[13px] font-mono uppercase tracking-wider text-secondary-muted">
                        // {item.organization}
                      </p>
                      <p className="text-[12px] sm:text-[13px] font-mono uppercase tracking-wider text-accent font-medium">
                        {item.role}
                      </p>
                    </div>
                  </div>

                  {/* Middle: Narrative + Pillar Tags (6 cols) */}
                  <div className="lg:col-span-6 pl-8 sm:pl-10 lg:pl-0 space-y-3">
                    <p className="text-[15px] sm:text-[16px] text-secondary leading-relaxed font-normal">
                      {item.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {item.pillars.map((pill) => (
                        <span
                          key={pill}
                          className="text-[10px] font-mono uppercase tracking-wider text-secondary-muted bg-surface-subtle/80 px-2.5 py-0.5 rounded-full"
                        >
                          {pill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right: Arrow Indicator (1 col) */}
                  <div className="lg:col-span-1 flex items-center justify-end pl-8 sm:pl-10 lg:pl-0">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                        isHovered
                          ? 'bg-accent text-white shadow-md translate-x-1 -translate-y-1'
                          : 'text-secondary-muted bg-surface-subtle/60'
                      }`}
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
