import React from 'react';
import { useRouter } from '../../../utils/router';
import './Button.css';

export type ButtonVariant = 
  | 'primary' 
  | 'whatsapp' 
  | 'accent' 
  | 'secondary' 
  | 'outline' 
  | 'outline-white'
  | 'ghost';

export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  href?: string;
  target?: string;
  rel?: string;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  leftIcon,
  rightIcon,
  href,
  target,
  rel,
  className = '',
  children,
  disabled,
  onClick,
  ...props
}) => {
  const { navigate } = useRouter();

  const classes = [
    'btn',
    `btn--${variant}`,
    `btn--${size}`,
    fullWidth ? 'btn--full-width' : '',
    disabled ? 'btn--disabled' : '',
    className
  ].filter(Boolean).join(' ');

  // Se href for fornecido, renderiza como link âncora acessível
  if (href) {
    const isExternal = target === '_blank' || href.startsWith('http') || href.startsWith('https://wa.me');
    const safeRel = isExternal ? (rel || 'noopener noreferrer') : rel;

    const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (!isExternal && !e.ctrlKey && !e.metaKey && !e.shiftKey) {
        e.preventDefault();
        navigate(href);
      }
      onClick?.(e as unknown as React.MouseEvent<HTMLButtonElement>);
    };

    return (
      <a
        href={href}
        target={target}
        rel={safeRel}
        className={classes}
        role="button"
        tabIndex={disabled ? -1 : 0}
        aria-disabled={disabled}
        onClick={handleAnchorClick}
      >
        {leftIcon && <span className="btn__icon btn__icon--left">{leftIcon}</span>}
        <span className="btn__text">{children}</span>
        {rightIcon && <span className="btn__icon btn__icon--right">{rightIcon}</span>}
      </a>
    );
  }

  return (
    <button
      className={classes}
      disabled={disabled}
      {...props}
    >
      {leftIcon && <span className="btn__icon btn__icon--left">{leftIcon}</span>}
      <span className="btn__text">{children}</span>
      {rightIcon && <span className="btn__icon btn__icon--right">{rightIcon}</span>}
    </button>
  );
};
