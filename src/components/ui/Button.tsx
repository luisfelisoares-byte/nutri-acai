import React from 'react';
import Link from 'next/link';

export type ButtonVariant = 'primary' | 'secondary' | 'accent' | 'outline' | 'ghost' | 'white';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  isExternal?: boolean;
  isLoading?: boolean;
  fullWidth?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  isExternal = false,
  isLoading = false,
  fullWidth = false,
  leftIcon,
  rightIcon,
  className = '',
  disabled,
  ...props
}) => {
  // Base acessível com foco visível de alto contraste, transição fluida e elevação suave
  const baseStyles = 
    'inline-flex items-center justify-center font-medium transition-all duration-200 ' +
    'rounded-ds-md focus-visible:outline-2 focus-visible:outline-offset-2 ' +
    'disabled:opacity-60 disabled:cursor-not-allowed select-none ' +
    'hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]';

  // Variantes baseadas nos tokens do Design System com feedback nítido
  const variantStyles: Record<ButtonVariant, string> = {
    primary: 
      'bg-primary text-primary-foreground hover:bg-primary-hover active:bg-primary-active ' +
      'focus-visible:outline-primary shadow-ds-sm hover:shadow-ds-md',
    secondary: 
      'bg-secondary text-secondary-foreground hover:bg-secondary-hover ' +
      'focus-visible:outline-secondary shadow-ds-sm hover:shadow-ds-md',
    accent: 
      'bg-accent text-accent-foreground hover:bg-accent-hover ' +
      'focus-visible:outline-accent shadow-ds-sm hover:shadow-ds-md',
    outline: 
      'border-2 border-border text-text-primary hover:border-primary hover:text-primary ' +
      'bg-surface hover:bg-surface-alt/60 shadow-ds-sm hover:shadow-ds-md focus-visible:outline-primary',
    ghost: 
      'bg-transparent text-text-primary hover:bg-surface-alt/70 hover:text-primary ' +
      'hover:translate-y-0 focus-visible:outline-primary',
    white: 
      'bg-white text-brand-950 hover:bg-white/95 active:bg-white/90 ' +
      'border border-black/5 focus-visible:outline-white shadow-ds-sm hover:shadow-ds-lg',
  };

  // Escala de tamanhos ergonômicos para desktop e touch mobile
  const sizeStyles: Record<ButtonSize, string> = {
    sm: 'text-xs px-3 py-1.5 gap-1.5 min-h-[36px]',
    md: 'text-sm px-4 py-2.5 gap-2 min-h-[44px]', // Atende o alvo de toque mínimo de 44px
    lg: 'text-base px-6 py-3.5 gap-2.5 min-h-[48px]',
  };

  const combinedClasses = [
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    fullWidth ? 'w-full' : '',
    className,
  ].filter(Boolean).join(' ');

  const content = (
    <>
      {isLoading && (
        <span 
          aria-hidden="true" 
          className="inline-block w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" 
        />
      )}
      {!isLoading && leftIcon && <span className="inline-flex shrink-0">{leftIcon}</span>}
      <span>{children}</span>
      {!isLoading && rightIcon && <span className="inline-flex shrink-0">{rightIcon}</span>}
    </>
  );

  if (href) {
    if (isExternal) {
      return (
        <a
          href={href}
          className={combinedClasses}
          target="_blank"
          rel="noopener noreferrer"
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type="button"
      className={combinedClasses}
      disabled={disabled || isLoading}
      {...props}
    >
      {content}
    </button>
  );
};
