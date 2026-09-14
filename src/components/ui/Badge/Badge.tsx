import React from 'react';
import './Badge.css';

export type BadgeVariant =
  | 'food-service'
  | 'varejo'
  | 'nutrinho'
  | 'primary'
  | 'neutral'
  | 'success'
  | 'info'
  | 'accent';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  icon?: React.ReactNode;
  children: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  variant = 'neutral',
  icon,
  className = '',
  children,
  ...props
}) => {
  return (
    <span className={`badge badge--${variant} ${className}`.trim()} {...props}>
      {icon && <span className="badge__icon">{icon}</span>}
      <span className="badge__label">{children}</span>
    </span>
  );
};
