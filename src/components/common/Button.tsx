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
 * Physical Micro-Interaction Architecture:
 * - Rest: The orange circular action element rests on the right side containing the arrow.
 * - Hover: The single orange circular element scales fluidly from the right across the pill,
 *   washing over the background while the text subtly glides and the arrow glides right.
 * - Exit: The orange disc smoothly collapses back into the right circular action area (450ms).
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

  // Variant base styles
  const variantStyles = {
    primary: {
      container:
        'bg-primary border border-transparent hover:border-accent/30 shadow-subtle hover:shadow-editorial',
      text: 'text-primary-foreground',
    },
    secondary: {
      container:
        'bg-surface border border-border hover:border-accent/90 shadow-subtle hover:shadow-editorial',
      text: 'text-primary group-hover:text-white',
    },
  }[variant];

  // Sizing scale: [Container padding & text, Action circle size & offset, Icon size]
  const sizeConfig = {
    sm: {
      container: 'pl-5 pr-1.5 py-1.5 text-[12px] sm:text-[13px] gap-4 min-h-[36px] sm:min-h-[38px]',
      circle: 'w-7 h-7 sm:w-8 sm:h-8',
      circlePos: 'right-1.5',
      icon: 'w-3.5 h-3.5 sm:w-4 sm:h-4',
    },
    md: {
      container: 'pl-7 pr-2 py-2 sm:py-2.5 text-[13px] sm:text-[14px] gap-6 sm:gap-7 min-h-[46px] sm:min-h-[48px]',
      circle: 'w-8 h-8 sm:w-9 sm:h-9',
      circlePos: 'right-2',
      icon: 'w-4 h-4',
    },
    lg: {
      container: 'pl-8 pr-2.5 py-2.5 sm:py-3 text-[14px] sm:text-[15px] gap-7 sm:gap-8 min-h-[52px] sm:min-h-[54px]',
      circle: 'w-9 h-9 sm:w-10 sm:h-10',
      circlePos: 'right-2.5',
      icon: 'w-4 h-4 sm:w-4.5 sm:h-4.5',
    },
  }[size];

  // Root container classes with hardware-accelerated transforms and smooth easing
  const baseClasses = `
    group relative inline-flex items-center justify-between
    overflow-hidden rounded-full font-semibold tracking-wider uppercase select-none
    transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] transform-gpu
    hover:scale-[1.015] active:scale-[0.975]
    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background
    disabled:opacity-50 disabled:pointer-events-none disabled:cursor-not-allowed
    ${variantStyles.container}
    ${sizeConfig.container}
    ${className}
  `.replace(/\s+/g, ' ').trim();

  const content = (
    <>
      {/* Expanding Orange Action Disc: Single continuous physical element */}
      <span
        aria-hidden="true"
        className={`
          absolute ${sizeConfig.circlePos} top-1/2 -translate-y-1/2
          ${sizeConfig.circle}
          rounded-full bg-accent pointer-events-none z-0
          transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] transform-gpu
          group-hover:scale-[18]
        `}
        style={{ transformOrigin: 'center center' }}
      />

      {/* Button Label: Glides subtly and transitions color smoothly */}
      <span
        className={`
          relative z-10 tracking-[0.06em] whitespace-nowrap
          transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]
          group-hover:translate-x-1
          ${variantStyles.text}
        `}
      >
        {children}
      </span>

      {/* Action Area Container & Arrow Icon: Anchored on the right with smooth forward glide */}
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
            transition-transform duration-450 ease-[cubic-bezier(0.16,1,0.3,1)]
            ${
              iconDirection === 'up-right'
                ? 'group-hover:translate-x-1 group-hover:-translate-y-1'
                : 'group-hover:translate-x-1.5'
            }
          `}
        />
      </span>
    </>
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
