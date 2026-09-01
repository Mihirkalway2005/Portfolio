import React from 'react';
import { ArrowRight, ArrowUpRight, type LucideIcon } from 'lucide-react';

export type ButtonVariant = 'primary' | 'secondary';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  target?: string;
  rel?: string;
  icon?: LucideIcon | React.ComponentType<{ className?: string }>;
  iconDirection?: 'right' | 'up-right';
  className?: string;
  children: React.ReactNode;
}

/**
 * Unified Premium Portfolio Button
 *
 * Framed Physical Micro-Interaction (GPU-Accelerated & Smooth):
 * - Outer container provides structured pill geometry and subtle outer elevation.
 * - Inner white border & padding track encloses the expanding orange action disc.
 * - Slower, ultra-smooth radial expansion (850ms) using hardware-composited matrix transforms
 *   and silk-smooth easing `cubic-bezier(0.22, 1, 0.36, 1)`.
 */
export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  href,
  target,
  rel,
  icon,
  iconDirection = 'right',
  className = '',
  children,
  onClick,
  disabled,
  type = 'button',
  ...rest
}) => {
  // Directional icon
  const IconComponent = icon || (iconDirection === 'up-right' ? ArrowUpRight : ArrowRight);

  // Variant styling
  const variantStyles = {
    primary: {
      outer: 'bg-primary text-primary-foreground border border-black/10 shadow-subtle hover:shadow-editorial',
      inner: 'bg-primary border border-white/40 group-hover/btn:border-white/90',
      text: 'text-primary-foreground',
    },
    secondary: {
      outer: 'bg-surface text-primary border border-border/80 shadow-subtle hover:shadow-editorial',
      inner: 'bg-surface border border-white group-hover/btn:border-white',
      text: 'text-primary group-hover/btn:text-white',
    },
  }[variant];

  // Sizing configuration
  const sizeConfig = {
    sm: {
      outerPadding: 'p-[3px]',
      innerPadding: 'pl-4 pr-1 py-1 min-h-[34px] sm:min-h-[36px] gap-3.5',
      circle: 'w-7 h-7',
      circlePos: 'right-1',
      icon: 'w-3.5 h-3.5',
      text: 'text-[11.5px] sm:text-[12px]',
    },
    md: {
      outerPadding: 'p-[3.5px] sm:p-1',
      innerPadding: 'pl-6 pr-1.5 py-1.5 sm:py-2 min-h-[44px] sm:min-h-[46px] gap-5 sm:gap-6',
      circle: 'w-8 h-8 sm:w-8.5 sm:h-8.5',
      circlePos: 'right-1.5',
      icon: 'w-4 h-4',
      text: 'text-[13px] sm:text-[13.5px]',
    },
    lg: {
      outerPadding: 'p-1 sm:p-[5px]',
      innerPadding: 'pl-7 pr-2 py-2 sm:py-2.5 min-h-[50px] sm:min-h-[52px] gap-6 sm:gap-7',
      circle: 'w-9 h-9 sm:w-9.5 sm:h-9.5',
      circlePos: 'right-2',
      icon: 'w-4.5 h-4.5',
      text: 'text-[14px] sm:text-[14.5px]',
    },
  }[size];

  // Root container styles - hardware-accelerated transforms only (no layout recalculations)
  const baseClasses = `
    group/btn relative inline-flex items-center justify-center
    rounded-full font-semibold tracking-wider uppercase select-none
    transition-[transform,box-shadow,border-color] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] transform-gpu will-change-transform
    hover:scale-[1.015] active:scale-[0.975]
    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background
    disabled:opacity-50 disabled:pointer-events-none disabled:cursor-not-allowed
    ${variantStyles.outer}
    ${sizeConfig.outerPadding}
    ${className}
  `.replace(/\s+/g, ' ').trim();

  const content = (
    <div
      className={`
        relative w-full h-full flex items-center justify-between
        rounded-full overflow-hidden
        ${variantStyles.inner}
        ${sizeConfig.innerPadding}
      `}
    >
      {/* Expanding Orange Action Disc: Zero-lag hardware-accelerated smooth fill */}
      <span
        aria-hidden="true"
        className={`
          absolute ${sizeConfig.circlePos} top-1/2 -translate-y-1/2
          ${sizeConfig.circle}
          rounded-full bg-accent pointer-events-none z-0
          transition-transform duration-[850ms] ease-[cubic-bezier(0.22,1,0.36,1)] transform-gpu will-change-transform
          group-hover/btn:scale-[16]
        `}
        style={{ transformOrigin: 'center center' }}
      />

      {/* Button Label: Glides smoothly and transitions text color with zero layout recalculation */}
      <span
        className={`
          relative z-10 tracking-[0.06em] whitespace-nowrap font-semibold
          transition-[transform,color] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform
          group-hover/btn:translate-x-1
          ${sizeConfig.text}
          ${variantStyles.text}
        `}
      >
        {children}
      </span>

      {/* Action Area Container & Arrow Icon: Anchored with silky glide */}
      <span
        aria-hidden="true"
        className={`
          relative z-10 ${sizeConfig.circle}
          rounded-full flex items-center justify-center shrink-0
          text-white
        `}
      >
        <IconComponent
          className={`
            ${sizeConfig.icon}
            transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] transform-gpu will-change-transform
            ${
              iconDirection === 'up-right'
                ? 'group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1'
                : 'group-hover/btn:translate-x-1.5'
            }
          `}
        />
      </span>
    </div>
  );

  // If href is provided, render as semantic anchor link
  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={target === '_blank' ? (rel || 'noopener noreferrer') : rel}
        onClick={onClick as unknown as React.MouseEventHandler<HTMLAnchorElement>}
        className={baseClasses}
        {...(rest as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {content}
      </a>
    );
  }

  // Otherwise render as button
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={baseClasses}
      {...rest}
    >
      {content}
    </button>
  );
};
