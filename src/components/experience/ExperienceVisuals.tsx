import React from 'react';

import iscbLogo from '../../public/ISCB-2.png';
import wjcLogo from '../../public/WJC2.png';
import cotdLogo from '../../public/COTD-2.png';
import ecellLogo from '../../public/ECELL-2.png';

export { iscbLogo, wjcLogo, cotdLogo, ecellLogo };

export interface ExperienceVisualConfig {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  tag: string;
  logo: string;
  alt: string;
  backgroundGradient: string;
  glowGradient: string;
  accentColor: string;
  logoClassName?: string;
}

interface ExperienceLogoShowcaseProps {
  config: ExperienceVisualConfig;
  isActive?: boolean;
}

export const ExperienceLogoShowcase: React.FC<ExperienceLogoShowcaseProps> = ({
  config,
}) => {
  return (
    <div
      className="relative w-full h-full min-h-[420px] sm:min-h-[460px] md:min-h-[500px] rounded-3xl overflow-hidden border border-white/[0.08] shadow-2xl flex flex-col justify-between p-7 sm:p-9 select-none transition-colors duration-700 group/showcase"
      style={{ background: config.backgroundGradient }}
    >
      {/* Calm, Tailored Ambient Glow directly behind the logo */}
      <div
        className="absolute w-[360px] h-[360px] rounded-full blur-[100px] pointer-events-none top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-opacity duration-700 opacity-60 group-hover/showcase:opacity-85"
        style={{ background: config.glowGradient }}
      />

      {/* ========================================================================= */}
      {/* TOP HEADER: Minimal Meta Label & Category Tag                             */}
      {/* ========================================================================= */}
      <div className="relative z-10 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span
            className="w-1.5 h-1.5 rounded-full animate-pulse-subtle"
            style={{ backgroundColor: config.accentColor }}
          />
          <span
            className="text-[11px] font-mono tracking-[0.2em] uppercase font-bold"
            style={{ color: config.accentColor }}
          >
            {config.number} // {config.title}
          </span>
        </div>
        <span className="text-[10px] font-mono tracking-widest text-white/50 uppercase border border-white/10 px-2.5 py-1 rounded-full bg-white/[0.03] backdrop-blur-sm">
          {config.tag}
        </span>
      </div>

      {/* ========================================================================= */}
      {/* HERO LOGO: Floating High-Resolution Transparent Logo                      */}
      {/* ========================================================================= */}
      <div className="relative z-10 flex-1 flex items-center justify-center my-4 sm:my-6">
        <div className="relative max-w-[260px] sm:max-w-[300px] md:max-w-[330px] max-h-[220px] sm:max-h-[250px] md:max-h-[270px] w-full aspect-auto flex items-center justify-center transition-transform duration-500 hover:scale-[1.03]">
          <img
            src={config.logo}
            alt={config.alt}
            className={`w-full h-full object-contain ${
              config.logoClassName || ''
            }`}
            loading="eager"
          />
        </div>
      </div>

      {/* ========================================================================= */}
      {/* BOTTOM FOOTER: Clean Organization Name                                    */}
      {/* ========================================================================= */}
      <div className="relative z-10 text-center pt-2">
        <p className="text-[13px] sm:text-[14px] md:text-[15px] font-medium text-white/90 tracking-tight">
          {config.subtitle}
        </p>
      </div>
    </div>
  );
};

/* ========================================================================= */
/* 01 — ISCB LOGO SHOWCASE                                                   */
/* ========================================================================= */
export const IscbVisual: React.FC<{ isActive?: boolean }> = (props) => {
  const config: ExperienceVisualConfig = {
    id: 'iscb',
    number: '01',
    title: 'ISCB',
    subtitle: 'International Strategy Consulting Board',
    tag: 'GLOBAL STRATEGY',
    logo: iscbLogo,
    alt: 'ISCB — International Strategy Consulting Board logo',
    backgroundGradient:
      'radial-gradient(ellipse at 65% 30%, rgba(255, 90, 0, 0.16) 0%, rgba(139, 26, 68, 0.25) 40%, #08070C 85%)',
    glowGradient:
      'radial-gradient(circle, rgba(255, 90, 0, 0.4) 0%, rgba(180, 30, 80, 0.25) 60%, transparent 80%)',
    accentColor: '#FF5A00',
    logoClassName: 'filter drop-shadow-[0_18px_38px_rgba(255,90,0,0.22)] brightness-[1.12] contrast-[1.04]',
  };

  return <ExperienceLogoShowcase config={config} {...props} />;
};

/* ========================================================================= */
/* 02 — WOXSEN JAPAN CENTRE (WJC) LOGO SHOWCASE                              */
/* ========================================================================= */
export const JapanCenterVisual: React.FC<{ isActive?: boolean }> = (props) => {
  const config: ExperienceVisualConfig = {
    id: 'japan-center',
    number: '02',
    title: 'WOXSEN JAPAN CENTRE',
    subtitle: 'Woxsen Japan Centre',
    tag: 'CULTURAL EXCHANGE',
    logo: wjcLogo,
    alt: 'Woxsen Japan Centre logo',
    backgroundGradient:
      'radial-gradient(ellipse at 50% 35%, rgba(255, 90, 0, 0.1) 0%, rgba(18, 20, 28, 0.5) 50%, #060609 88%)',
    glowGradient:
      'radial-gradient(circle, rgba(255, 90, 0, 0.18) 0%, rgba(30, 32, 45, 0.15) 50%, transparent 75%)',
    accentColor: '#FF5A00',
    logoClassName: 'filter drop-shadow-[0_16px_32px_rgba(0,0,0,0.6)] brightness-[1.02]',
  };

  return <ExperienceLogoShowcase config={config} {...props} />;
};

/* ========================================================================= */
/* 03 — COTD LOGO SHOWCASE                                                   */
/* ========================================================================= */
export const CotdVisual: React.FC<{ isActive?: boolean }> = (props) => {
  const config: ExperienceVisualConfig = {
    id: 'cotd',
    number: '03',
    title: 'COTD',
    subtitle: 'Centre of Talent Development',
    tag: 'TALENT DEVELOPMENT',
    logo: cotdLogo,
    alt: 'Centre of Talent Development — Woxsen University logo',
    backgroundGradient:
      'radial-gradient(ellipse at 50% 35%, rgba(245, 158, 11, 0.22) 0%, rgba(23, 37, 84, 0.45) 45%, #040813 85%)',
    glowGradient:
      'radial-gradient(circle, rgba(245, 158, 11, 0.38) 0%, rgba(30, 58, 138, 0.3) 60%, transparent 80%)',
    accentColor: '#F59E0B',
    logoClassName: 'filter drop-shadow-[0_22px_45px_rgba(245,158,11,0.28)] contrast-[1.03]',
  };

  return <ExperienceLogoShowcase config={config} {...props} />;
};

/* ========================================================================= */
/* 04 — E-CELL LOGO SHOWCASE                                                 */
/* ========================================================================= */
export const ECellVisual: React.FC<{ isActive?: boolean }> = (props) => {
  const config: ExperienceVisualConfig = {
    id: 'e-cell',
    number: '04',
    title: 'E-CELL',
    subtitle: 'Woxsen E-Cell · Venture & Incubation',
    tag: 'VENTURE ECOSYSTEM',
    logo: ecellLogo,
    alt: 'E-Cell — Woxsen University logo',
    backgroundGradient:
      'radial-gradient(ellipse at 50% 35%, rgba(16, 185, 129, 0.2) 0%, rgba(15, 23, 42, 0.45) 45%, #040A0D 85%)',
    glowGradient:
      'radial-gradient(circle, rgba(16, 185, 129, 0.32) 0%, rgba(6, 182, 212, 0.2) 60%, transparent 80%)',
    accentColor: '#10B981',
    logoClassName: 'filter drop-shadow-[0_20px_42px_rgba(16,185,129,0.25)] brightness-[1.06] contrast-[1.04]',
  };

  return <ExperienceLogoShowcase config={config} {...props} />;
};
