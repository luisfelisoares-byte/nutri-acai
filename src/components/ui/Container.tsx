import React from 'react';

export type ContainerSize = 'sm' | 'md' | 'lg' | 'xl' | 'full';

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType;
  size?: ContainerSize;
}

export const Container: React.FC<ContainerProps> = ({
  as: Component = 'div',
  size = 'xl',
  children,
  className = '',
  ...props
}) => {
  const sizeStyles: Record<ContainerSize, string> = {
    sm: 'max-w-container-sm',
    md: 'max-w-container-md',
    lg: 'max-w-container-lg',
    xl: 'max-w-container-xl',
    full: 'max-w-full',
  };

  const combinedClasses = [
    'w-full mx-auto px-4 sm:px-6 lg:px-8',
    sizeStyles[size],
    className,
  ].filter(Boolean).join(' ');

  return (
    <Component className={combinedClasses} {...props}>
      {children}
    </Component>
  );
};
