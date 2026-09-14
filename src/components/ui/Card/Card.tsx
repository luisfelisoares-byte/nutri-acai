import React from 'react';
import './Card.css';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  interactive?: boolean;
  lineAccent?: 'food-service' | 'varejo' | 'nutrinho' | 'none';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({
  interactive = false,
  lineAccent = 'none',
  padding = 'md',
  className = '',
  children,
  ...props
}) => {
  const classes = [
    'card',
    interactive ? 'card--interactive' : '',
    lineAccent !== 'none' ? `card--line-${lineAccent}` : '',
    `card--padding-${padding}`,
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};
