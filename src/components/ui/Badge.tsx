import React from 'react';

export type BadgeVariant = 'primary' | 'secondary' | 'accent' | 'neutral' | 'outline';
export type BadgeSize = 'sm' | 'md';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  size?: BadgeSize;
  icon?: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'neutral',
  size = 'md',
  icon,
  className = '',
  ...props
}) => {
  const baseStyles = 'inline-flex items-center font-medium rounded-ds-full leading-none whitespace-nowrap';

  const variantStyles: Record<BadgeVariant, string> = {
    primary: 'bg-primary/10 text-primary border border-primary/20',
    secondary: 'bg-secondary/10 text-secondary border border-secondary/20',
    accent: 'bg-accent/10 text-accent border border-accent/20',
    neutral: 'bg-surface-muted text-text-secondary border border-border',
    outline: 'border border-border text-text-primary bg-transparent',
  };

  const sizeStyles: Record<BadgeSize, string> = {
    sm: 'text-xs px-2.5 py-1 gap-1',
    md: 'text-xs md:text-sm px-3 py-1.5 gap-1.5',
  };

  const combinedClasses = [
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    className,
  ].filter(Boolean).join(' ');

  return (
    <span className={combinedClasses} {...props}>
      {icon && <span className="inline-flex shrink-0" aria-hidden="true">{icon}</span>}
      <span>{children}</span>
    </span>
  );
};
