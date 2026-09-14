import React from 'react';
import './Container.css';

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'default' | 'narrow' | 'full';
  children: React.ReactNode;
}

export const Container: React.FC<ContainerProps> = ({
  size = 'default',
  className = '',
  children,
  ...props
}) => {
  return (
    <div className={`container container--${size} ${className}`.trim()} {...props}>
      {children}
    </div>
  );
};
