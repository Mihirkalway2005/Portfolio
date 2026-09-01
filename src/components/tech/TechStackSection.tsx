import React, { useState } from 'react';
import { motion, type Variants, useReducedMotion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Button } from '../common/Button';
import {
  JavaScriptIcon,
  TypeScriptIcon,
  PythonIcon,
  SQLIcon,
  ReactIcon,
  NextJSIcon,
  TailwindIcon,
  HTMLCSSIcon,
  NodeJSIcon,
  FastAPIIcon,
  PostgreSQLIcon,
  MongoDBIcon,
  OpenAIIcon,
  ComputerVisionIcon,
  NLPIcon,
  GitIcon,
  GitHubIcon,
  FigmaIcon,
  VercelIcon,
  RestAPIIcon,
} from './TechIcons';

const transitionEase = [0.16, 1, 0.3, 1] as const;

interface TechItem {
  id: string;
  name: string;
  categoryName?: string;
  description: string;
  projects?: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface TechCategory {
  number: string;
  title: string;
  subtitle: string;
  items: TechItem[];
}

const techCategories: TechCategory[] = [
  {
    number: '01',
    title: 'LANGUAGES',
    subtitle: 'Core application logic & typed computation',
    items: [
      {
        id: 'js',
        name: 'JavaScript',
        description: 'Core web runtime, event handling & dynamic logic',
        projects: 'InterEdge · noCap · Nexus',
        icon: JavaScriptIcon,
      },
      {
        id: 'ts',
        name: 'TypeScript',
        description: 'Strict type safety & scalable full-stack codebases',
        projects: 'Nexus · LockinAI · EduNex',
        icon: TypeScriptIcon,
      },
      {
        id: 'py',
        name: 'Python',
        description: 'AI model pipelines, machine intelligence & services',
        projects: 'LockinAI · noCap · InterEdge',
        icon: PythonIcon,
      },
      {
        id: 'sql',
        name: 'SQL',
        description: 'Relational data modeling, queries & migrations',
        projects: 'Nexus · InterEdge',
        icon: SQLIcon,
      },
    ],
  },
  {
    number: '02',
    title: 'FRONTEND',
    subtitle: 'High-craft interfaces & performant client architecture',
    items: [
      {
        id: 'react',
        name: 'React',
        description: 'Component architecture, hooks & reactive interfaces',
        projects: 'InterEdge · EduNex · LockinAI',
        icon: ReactIcon,
      },
      {
        id: 'nextjs',
        name: 'Next.js',
        description: 'Production SSR, edge rendering & hybrid web apps',
        projects: 'noCap · Nexus',
        icon: NextJSIcon,
      },
      {
        id: 'tailwind',
        name: 'Tailwind CSS',
        description: 'Systematic utility styling & responsive design tokens',
        projects: 'All Portfolio Projects',
        icon: TailwindIcon,
      },
      {
        id: 'html-css',
        name: 'HTML & CSS',
        description: 'Semantic DOM standards & modern CSS transitions',
        projects: 'Core Design Systems',
        icon: HTMLCSSIcon,
      },
    ],
  },
  {
    number: '03',
    title: 'BACKEND',
    subtitle: 'High-throughput APIs & asynchronous server runtimes',
    items: [
      {
        id: 'nodejs',
        name: 'Node.js',
        description: 'Asynchronous event-driven services & API micro-layers',
        projects: 'Nexus · InterEdge',
        icon: NodeJSIcon,
      },
      {
        id: 'fastapi',
        name: 'FastAPI',
        description: 'High-performance async Python REST endpoints',
        projects: 'LockinAI · noCap',
        icon: FastAPIIcon,
      },
    ],
  },
  {
    number: '04',
    title: 'DATABASE',
    subtitle: 'Structured persistence & distributed data stores',
    items: [
      {
        id: 'postgres',
        name: 'PostgreSQL',
        description: 'Relational schemas, foreign keys & ACID compliance',
        projects: 'Nexus · InterEdge',
        icon: PostgreSQLIcon,
      },
      {
        id: 'mongodb',
        name: 'MongoDB',
        description: 'Flexible document stores & rapid schema iteration',
        projects: 'LockinAI · EduNex',
        icon: MongoDBIcon,
      },
    ],
  },
  {
    number: '05',
    title: 'AI / ML',
    subtitle: 'Intelligent systems, vision pipelines & language models',
    items: [
      {
        id: 'openai',
        name: 'OpenAI APIs',
        description: 'LLM reasoning pipelines, function calling & agent loops',
        projects: 'LockinAI · noCap · InterEdge',
        icon: OpenAIIcon,
      },
      {
        id: 'vision',
        name: 'Computer Vision',
        description: 'OCR parsing, image context & multimodal inference',
        projects: 'noCap Engine',
        icon: ComputerVisionIcon,
      },
      {
        id: 'nlp',
        name: 'NLP & Embeddings',
        description: 'Semantic vector similarity & linguistic context',
        projects: 'noCap · LockinAI',
        icon: NLPIcon,
      },
    ],
  },
  {
    number: '06',
    title: 'TOOLS & WORKFLOW',
    subtitle: 'Developer ergonomics, interface design & cloud hosting',
    items: [
      {
        id: 'git',
        name: 'Git',
        description: 'Version control, atomic commits & branch workflows',
        projects: 'All Codebases',
        icon: GitIcon,
      },
      {
        id: 'github',
        name: 'GitHub',
        description: 'Pull requests, CI/CD automation & code collaboration',
        projects: 'All Repositories',
        icon: GitHubIcon,
      },
      {
        id: 'figma',
        name: 'Figma',
        description: 'Wireframing, typography exploration & design systems',
        projects: 'All Interface Designs',
        icon: FigmaIcon,
      },
      {
        id: 'vercel',
        name: 'Vercel',
        description: 'Edge network deployment, previews & production CDN',
        projects: 'Cloud Deployments',
        icon: VercelIcon,
      },
      {
        id: 'rest',
        name: 'REST APIs',
        description: 'Contract-first endpoint design & system interop',
        projects: 'Full-Stack Integrations',
        icon: RestAPIIcon,
      },
    ],
  },
];

export const TechStackSection: React.FC = () => {
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const shouldReduceMotion = useReducedMotion();

  // Reveal animation variants
  const labelVariants: Variants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: transitionEase,
        delay: 0.05,
      },
    },
  };

  const headlineLineVariants: Variants = {
    hidden: { y: '105%', opacity: 0.1 },
    visible: (custom: number) => ({
      y: '0%',
      opacity: 1,
      transition: {
        duration: 0.9,
        ease: transitionEase,
        delay: 0.12 + custom * 0.12,
      },
    }),
  };

  const supportingVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: transitionEase,
        delay: 0.35,
      },
    },
  };

  const categoryVariants: Variants = {
    hidden: { opacity: 0, y: 28 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.85,
        ease: transitionEase,
        delay: 0.2 + custom * 0.1,
      },
    }),
  };

  return (
    <section
      id="tech"
      aria-label="Tech Stack"
      className="relative w-full border-t border-border/80 bg-background py-24 sm:py-32 md:py-44 select-none"
    >
      <div className="max-w-[1520px] mx-auto px-6 sm:px-10 md:px-14 lg:px-16 space-y-16 sm:space-y-20 md:space-y-28">
        {/* ========================================================================= */}
        {/* SECTION HEADER: EDITORIAL LABEL & OVERSIZED STATEMENT                     */}
        {/* ========================================================================= */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.08, margin: '0px 0px -40px 0px' }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end pb-8 sm:pb-12 border-b border-border/60"
        >
          {/* Left Column: Label + Headline (7 cols) */}
          <div className="lg:col-span-7 space-y-5 md:space-y-7">
            {/* Editorial Label: 04 / TECH STACK */}
            <motion.div
              variants={labelVariants}
              className="flex items-center gap-2.5"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse-subtle" />
              <span className="text-[12px] md:text-[13px] font-mono font-semibold tracking-[0.2em] uppercase text-accent">
                04 / TECH STACK
              </span>
            </motion.div>

            {/* Display Headline: Line-by-Line Mask Reveal */}
            <div className="space-y-0 text-left">
              <div className="text-mask-wrapper">
                <motion.h2
                  custom={0}
                  variants={headlineLineVariants}
                  className="text-[44px] sm:text-[62px] md:text-[80px] lg:text-[96px] xl:text-[108px] font-black text-primary tracking-tighter leading-[0.9] uppercase"
                >
                  TOOLS I USE
                </motion.h2>
              </div>

              <div className="text-mask-wrapper">
                <motion.h2
                  custom={1}
                  variants={headlineLineVariants}
                  className="text-[44px] sm:text-[62px] md:text-[80px] lg:text-[96px] xl:text-[108px] font-black text-primary tracking-tighter leading-[0.9] uppercase"
                >
                  TO BUILD THINGS<span className="text-accent">.</span>
                </motion.h2>
              </div>
            </div>
          </div>

          {/* Right Column: Supporting Statement & Metadata Strip (5 cols) */}
          <motion.div
            variants={supportingVariants}
            className="lg:col-span-5 flex flex-col justify-between space-y-6 lg:pb-3"
          >
            <p className="text-[17px] sm:text-[19px] md:text-[21px] text-secondary leading-relaxed font-normal tracking-tight max-w-[520px]">
              The technologies I use across product development, AI, interfaces and systems.
            </p>

            <div className="flex items-center justify-between pt-2 border-t border-border/50 text-[11px] font-mono uppercase text-secondary tracking-widest">
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                <span>06 CHAPTERS // 20 TECHNOLOGIES</span>
              </span>
              <span>2024 — 2026</span>
            </div>
          </motion.div>
        </motion.div>

        {/* ========================================================================= */}
        {/* EDITORIAL CHAPTERS: CATEGORIES & INTERACTIVE TECH ITEMS                   */}
        {/* ========================================================================= */}
        <div className="space-y-16 sm:space-y-20 md:space-y-24">
          {techCategories.map((category, catIdx) => (
            <motion.div
              key={category.number}
              custom={catIdx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.08, margin: '0px 0px -30px 0px' }}
              variants={categoryVariants}
              className="space-y-6 sm:space-y-8"
            >
              {/* Category Header Strip */}
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-4 border-b border-border/70">
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-[14px] sm:text-[15px] font-bold text-accent">
                    {category.number}
                  </span>
                  <span className="text-secondary font-mono text-xs">/</span>
                  <h3 className="text-[18px] sm:text-[20px] md:text-[22px] font-bold text-primary tracking-tight uppercase">
                    {category.title}
                  </h3>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-[12px] sm:text-[13px] text-secondary-muted font-normal">
                    {category.subtitle}
                  </span>
                  <span className="hidden md:inline-block text-[11px] font-mono text-secondary-muted bg-surface-subtle px-2 py-0.5 rounded border border-border/60">
                    {category.items.length} TOOLS
                  </span>
                </div>
              </div>

              {/* Items Grid */}
              <div
                className={`grid grid-cols-1 gap-4 sm:gap-5 ${
                  category.items.length === 5
                    ? 'sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5'
                    : category.items.length === 4
                    ? 'sm:grid-cols-2 lg:grid-cols-4'
                    : category.items.length === 3
                    ? 'sm:grid-cols-2 lg:grid-cols-3'
                    : 'sm:grid-cols-2'
                }`}
              >
                {category.items.map((tech) => {
                  const Icon = tech.icon;
                  const isHovered = activeItem === tech.id;

                  return (
                    <div
                      key={tech.id}
                      onMouseEnter={() => setActiveItem(tech.id)}
                      onMouseLeave={() => setActiveItem(null)}
                      className={`group relative rounded-2xl p-6 sm:p-7 md:p-8 border transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col justify-between min-h-[190px] sm:min-h-[210px] cursor-default select-none ${
                        isHovered
                          ? 'bg-surface border-accent/60 shadow-card-hover -translate-y-1.5'
                          : 'bg-surface/75 border-border/80 shadow-subtle hover:bg-surface'
                      }`}
                    >
                      {/* Top Row: Icon + Indicator / Arrow */}
                      <div className="flex items-start justify-between">
                        {/* Icon Container with subtle scaling on hover */}
                        <div
                          className={`w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 border ${
                            isHovered
                              ? 'bg-surface-muted border-border/90 scale-105 shadow-sm'
                              : 'bg-surface-subtle border-border/60'
                          }`}
                        >
                          <Icon className="w-5 h-5 transition-transform duration-300" />
                        </div>

                        {/* Top-Right: Active State Accent Dot & Arrow */}
                        <div className="flex items-center gap-1.5 pt-1">
                          <span
                            className={`w-1.5 h-1.5 rounded-full bg-accent transition-all duration-300 ${
                              isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
                            }`}
                          />
                          <ArrowUpRight
                            className={`w-4 h-4 transition-all duration-300 ${
                              isHovered
                                ? 'text-accent translate-x-0.5 -translate-y-0.5 opacity-100'
                                : 'text-secondary-muted/40 opacity-0 group-hover:opacity-100'
                            }`}
                          />
                        </div>
                      </div>

                      {/* Middle Area: Tech Name & Contextual Description */}
                      <div className="pt-5 space-y-1.5">
                        <div className="flex items-center gap-2">
                          <h4
                            className={`text-[17px] sm:text-[18px] md:text-[19px] font-bold text-primary tracking-tight transition-transform duration-300 ${
                              isHovered && !shouldReduceMotion ? 'translate-x-1 text-primary' : ''
                            }`}
                          >
                            {tech.name}
                          </h4>
                        </div>

                        <p className="text-[13px] sm:text-[13.5px] text-secondary leading-snug font-normal">
                          {tech.description}
                        </p>
                      </div>

                      {/* Bottom Strip: Project Association Metadata (Reveals on hover) */}
                      <div className="pt-4 mt-3 border-t border-border/40 flex items-center justify-between text-[11px] font-mono">
                        <span
                          className={`tracking-wider uppercase transition-colors duration-300 ${
                            isHovered ? 'text-accent font-semibold' : 'text-secondary-muted'
                          }`}
                        >
                          {isHovered && tech.projects ? (
                            <span>USED IN // {tech.projects}</span>
                          ) : (
                            <span className="text-secondary-muted">PRODUCTION READY</span>
                          )}
                        </span>

                        <span
                          className={`w-1 h-1 rounded-full transition-colors duration-300 ${
                            isHovered ? 'bg-accent' : 'bg-border'
                          }`}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* ========================================================================= */}
        {/* BOTTOM PHILOSOPHY STRIP & UNIFIED CTA ROW                                 */}
        {/* ========================================================================= */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={supportingVariants}
          className="relative rounded-2xl bg-surface-muted border border-border/80 p-8 sm:p-10 md:p-12 shadow-subtle overflow-hidden"
        >
          {/* Ambient Glow */}
          <div className="absolute top-0 right-0 w-36 h-36 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8 lg:gap-12">
            <div className="space-y-2 max-w-[720px]">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-accent font-semibold">
                  INTEGRATED TOOLKIT
                </span>
              </div>
              <p className="text-[18px] sm:text-[22px] md:text-[24px] font-bold text-primary tracking-tight leading-snug">
                "Modern tools don't replace craft — they amplify the ability to build with precision and speed."
              </p>
            </div>

            {/* Action Buttons using unified Button component */}
            <div className="flex flex-wrap items-center gap-4 shrink-0">
              <Button variant="secondary" size="md" href="#work">
                EXPLORE SELECTED WORK
              </Button>
              <Button variant="primary" size="md" href="#contact">
                LET'S TALK
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
