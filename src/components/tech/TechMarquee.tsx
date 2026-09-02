import React from 'react';
import {
  PythonIcon,
  TypeScriptIcon,
  JavaScriptIcon,
  ReactIcon,
  NextJSIcon,
  TailwindIcon,
  NodeJSIcon,
  FastAPIIcon,
  PostgreSQLIcon,
  MongoDBIcon,
  OpenAIIcon,
  PyTorchIcon,
  DockerIcon,
  GitIcon,
  GitHubIcon,
  FigmaIcon,
  VercelIcon,
  SupabaseIcon,
  RedisIcon,
  GraphQLIcon,
  CppIcon,
} from './TechIcons';

export interface MarqueeTechItem {
  id: string;
  name: string;
  category: string;
  icon: React.ComponentType<{ className?: string }>;
}

export const marqueeTechList: MarqueeTechItem[] = [
  { id: 'python', name: 'Python', category: 'Language / AI', icon: PythonIcon },
  { id: 'typescript', name: 'TypeScript', category: 'Language', icon: TypeScriptIcon },
  { id: 'react', name: 'React', category: 'Frontend', icon: ReactIcon },
  { id: 'nextjs', name: 'Next.js', category: 'Framework', icon: NextJSIcon },
  { id: 'fastapi', name: 'FastAPI', category: 'Backend / API', icon: FastAPIIcon },
  { id: 'nodejs', name: 'Node.js', category: 'Runtime', icon: NodeJSIcon },
  { id: 'postgres', name: 'PostgreSQL', category: 'Database', icon: PostgreSQLIcon },
  { id: 'mongodb', name: 'MongoDB', category: 'Database', icon: MongoDBIcon },
  { id: 'openai', name: 'OpenAI', category: 'AI / LLMs', icon: OpenAIIcon },
  { id: 'pytorch', name: 'PyTorch', category: 'Deep Learning', icon: PyTorchIcon },
  { id: 'tailwind', name: 'Tailwind CSS', category: 'Styling', icon: TailwindIcon },
  { id: 'docker', name: 'Docker', category: 'Containers', icon: DockerIcon },
  { id: 'git', name: 'Git', category: 'Version Control', icon: GitIcon },
  { id: 'github', name: 'GitHub', category: 'Collaboration', icon: GitHubIcon },
  { id: 'figma', name: 'Figma', category: 'Product Design', icon: FigmaIcon },
  { id: 'vercel', name: 'Vercel', category: 'Cloud & Edge', icon: VercelIcon },
  { id: 'supabase', name: 'Supabase', category: 'Backend as a Service', icon: SupabaseIcon },
  { id: 'redis', name: 'Redis', category: 'Caching & Queues', icon: RedisIcon },
  { id: 'graphql', name: 'GraphQL', category: 'API Protocol', icon: GraphQLIcon },
  { id: 'cpp', name: 'C++', category: 'Systems Language', icon: CppIcon },
  { id: 'javascript', name: 'JavaScript', category: 'Language', icon: JavaScriptIcon },
];

export const TechMarquee: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div
      className={`w-full relative rounded-2xl bg-surface border border-border/80 shadow-subtle overflow-hidden ${className}`}
    >
      <div className="flex flex-col lg:flex-row items-stretch">
        {/* ========================================================================= */}
        {/* LEFT PINNED BRAND / LABEL (MATCHING THE VIDEO DESIGN)                     */}
        {/* ========================================================================= */}
        <div className="lg:w-[280px] xl:w-[320px] shrink-0 p-6 sm:p-7 md:p-8 flex lg:flex-col justify-between items-start border-b lg:border-b-0 lg:border-r border-border/70 bg-surface z-10">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse-subtle" />
              <span className="text-[11px] font-mono font-semibold tracking-[0.2em] uppercase text-accent">
                CORE ECOSYSTEM
              </span>
            </div>
            <h3 className="text-[20px] sm:text-[22px] md:text-[24px] font-black text-primary tracking-tight leading-[1.05] uppercase">
              Technologies<br className="hidden sm:inline" /> I work with
            </h3>
          </div>

          <div className="hidden lg:flex items-center gap-2 pt-4 text-[11px] font-mono text-secondary-muted uppercase tracking-wider">
            <span>20+ PRODUCTION TOOLS</span>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* RIGHT CONTINUOUS INFINITE TICKER (VIDEO SPEC)                            */}
        {/* ========================================================================= */}
        <div className="flex-1 relative overflow-hidden py-6 sm:py-8 flex items-center bg-surface-muted/60 mask-marquee">
          {/* Track 1: Smooth Continuous Loop */}
          <div className="animate-marquee flex items-center gap-12 sm:gap-16 pl-6">
            {marqueeTechList.concat(marqueeTechList).map((tech, idx) => {
              const Icon = tech.icon;
              return (
                <div
                  key={`${tech.id}-${idx}`}
                  className="group flex items-center gap-3.5 sm:gap-4 shrink-0 transition-transform duration-300 hover:scale-105 select-none cursor-default"
                >
                  {/* SVG Tech Logo Icon */}
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg flex items-center justify-center bg-surface p-1.5 border border-border/80 shadow-subtle group-hover:border-accent/60 group-hover:shadow-sm transition-all duration-300">
                    <Icon className="w-full h-full object-contain" />
                  </div>

                  {/* Tech Name Typography */}
                  <div className="flex flex-col">
                    <span className="text-[17px] sm:text-[19px] md:text-[20px] font-bold text-primary tracking-tight leading-none group-hover:text-accent transition-colors duration-200">
                      {tech.name}
                    </span>
                    <span className="text-[10px] font-mono uppercase text-secondary-muted tracking-wider pt-0.5">
                      {tech.category}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
