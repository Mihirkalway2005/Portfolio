import React, { useRef, useState, useEffect } from 'react';
import { ArrowRight, ArrowUpRight, type LucideIcon } from 'lucide-react';

export type ButtonVariant = 'primary' | 'secondary' | 'accent';
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
 * Exact 1:1 Recreation of Reference Recording:
 * - Rest State (Frame 30): Solid orange pill, white text on left, white circular disc with orange arrow on right.
 * - Expanding Capsule Hover (Frame 33 & 36): White capsule stretches horizontally from the right circle across to the left,
 *   with the orange arrow riding its leading left edge. Text transitions to orange and sits beside the docked arrow.
 * - Collapsing Exit (Frame 63): White capsule shrinks from left back to right, returning cleanly to the 34px right circle (0.8s).
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
  const innerRef = useRef<HTMLDivElement>(null);
  const [fullCapsuleWidth, setFullCapsuleWidth] = useState<number>(0);
  const [travelDist, setTravelDist] = useState<number>(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  // Directional icon
  const IconComponent = icon || (iconDirection === 'up-right' ? ArrowUpRight : ArrowRight);

  // Sizing configuration
  const sizeConfig = {
    sm: {
      outerPadding: 'p-[3px]',
      innerPadding: 'pl-4 pr-11 py-1 min-h-[36px] sm:min-h-[38px]',
      circlePx: 28,
      paddingPx: 4,
      circleHeight: 'h-7',
      circlePos: 'right-1',
      iconClass: 'w-3.5 h-3.5',
      textClass: 'text-[12px] sm:text-[12.5px]',
      textShift: 28,
    },
    md: {
      outerPadding: 'p-[3.5px] sm:p-1',
      innerPadding: 'pl-6 pr-14 py-1.5 sm:py-2 min-h-[46px] sm:min-h-[48px]',
      circlePx: 34,
      paddingPx: 6,
      circleHeight: 'h-[34px]',
      circlePos: 'right-1.5',
      iconClass: 'w-4 h-4',
      textClass: 'text-[13px] sm:text-[14px]',
      textShift: 36,
    },
    lg: {
      outerPadding: 'p-1 sm:p-[5px]',
      innerPadding: 'pl-7 pr-16 py-2 sm:py-2.5 min-h-[52px] sm:min-h-[54px]',
      circlePx: 38,
      paddingPx: 8,
      circleHeight: 'h-[38px]',
      circlePos: 'right-2',
      iconClass: 'w-4.5 h-4.5',
      textClass: 'text-[14px] sm:text-[15px]',
      textShift: 42,
    },
  }[size];

  // Dynamic measurement for synchronized capsule expansion and arrow glide
  useEffect(() => {
    const innerEl = innerRef.current;
    if (!innerEl) return;

    const measure = () => {
      const innerRect = innerEl.getBoundingClientRect();
      const capsuleW = Math.max(sizeConfig.circlePx, innerRect.width - sizeConfig.paddingPx * 2);
      const dist = Math.max(0, innerRect.width - sizeConfig.circlePx - sizeConfig.paddingPx * 2);
      setFullCapsuleWidth(capsuleW);
      setTravelDist(dist);
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(innerEl);
    return () => observer.disconnect();
  }, [size, sizeConfig.circlePx, sizeConfig.paddingPx, children]);

  // Variant styling
  const variantStyles = {
    // Primary: Signature Orange Pill
    primary: {
      outer: 'bg-accent text-white border border-transparent shadow-subtle hover:shadow-editorial',
      inner: 'bg-accent',
      expandingCapsule: 'bg-white',
      arrowColor: 'text-accent',
      textRest: 'text-white',
      textHover: 'group-hover/btn:text-accent',
    },
    // Secondary: Clean Warm Surface Pill
    secondary: {
      outer: 'bg-surface text-primary border border-border/80 shadow-subtle hover:shadow-editorial',
      inner: 'bg-surface border border-white',
      expandingCapsule: 'bg-accent',
      arrowColor: 'text-white',
      textRest: 'text-primary',
      textHover: 'group-hover/btn:text-white',
    },
    // Accent / Dark: Black Pill
    accent: {
      outer: 'bg-primary text-primary-foreground border border-transparent shadow-subtle hover:shadow-editorial',
      inner: 'bg-primary',
      expandingCapsule: 'bg-white',
      arrowColor: 'text-primary',
      textRest: 'text-primary-foreground',
      textHover: 'group-hover/btn:text-primary',
    },
  }[variant];

  // Root container styles
  const baseClasses = `
    group/btn relative inline-flex items-center justify-center
    rounded-full font-semibold tracking-wider uppercase select-none
    transition-[transform,box-shadow,border-color] duration-[800ms] ease-[cubic-bezier(0.22,1,0.36,1)] transform-gpu will-change-transform
    hover:scale-[1.015] active:scale-[0.975]
    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background
    disabled:opacity-50 disabled:pointer-events-none disabled:cursor-not-allowed
    ${variantStyles.outer}
    ${sizeConfig.outerPadding}
    ${className}
  `.replace(/\s+/g, ' ').trim();

  const content = (
    <div
      ref={innerRef}
      className={`
        relative w-full h-full flex items-center justify-between
        rounded-full overflow-hidden
        ${variantStyles.inner}
        ${sizeConfig.innerPadding}
      `}
    >
      {/* Button Label: Shifts smoothly to make room for arriving arrow & transitions color */}
      <span
        className={`
          relative z-10 tracking-[0.06em] whitespace-nowrap font-semibold
          transition-[transform,color] duration-[800ms] ease-[cubic-bezier(0.22,1,0.36,1)] transform-gpu will-change-transform
          ${sizeConfig.textClass}
          ${variantStyles.textRest}
          ${variantStyles.textHover}
        `}
        style={{
          transform: isHovered
            ? `translate3d(${sizeConfig.textShift}px, 0, 0)`
            : 'translate3d(0, 0, 0)',
        }}
      >
        {children}
      </span>

      {/* Expanding Capsule Layer: Stretches from right circle to full inner width */}
      <span
        aria-hidden="true"
        className={`
          absolute top-1/2 -translate-y-1/2 ${sizeConfig.circlePos}
          ${sizeConfig.circleHeight} rounded-full ${variantStyles.expandingCapsule}
          pointer-events-none z-0 shadow-sm
          transition-[width] duration-[800ms] ease-[cubic-bezier(0.22,1,0.36,1)] will-change-[width]
        `}
        style={{
          width: isHovered && fullCapsuleWidth > 0 ? `${fullCapsuleWidth}px` : `${sizeConfig.circlePx}px`,
        }}
      />

      {/* Arrow Icon: Sits inside the circle and rides the leading left edge of the expanding capsule */}
      <span
        aria-hidden="true"
        className={`
          absolute ${sizeConfig.circlePos} top-1/2 -translate-y-1/2
          rounded-full flex items-center justify-center shrink-0
          ${variantStyles.arrowColor} z-10 pointer-events-none
          transition-transform duration-[800ms] ease-[cubic-bezier(0.22,1,0.36,1)] transform-gpu will-change-transform
        `}
        style={{
          width: `${sizeConfig.circlePx}px`,
          height: `${sizeConfig.circlePx}px`,
          transform: isHovered && travelDist > 0
            ? `translate3d(-${travelDist}px, -50%, 0)`
            : 'translate3d(0, -50%, 0)',
        }}
      >
        <IconComponent
          className={`
            ${sizeConfig.iconClass}
            transition-transform duration-[800ms] ease-[cubic-bezier(0.22,1,0.36,1)]
            ${iconDirection === 'up-right' ? 'group-hover/btn:-translate-y-0.5' : ''}
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
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
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
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      className={baseClasses}
      {...rest}
    >
      {content}
    </button>
  );
};
