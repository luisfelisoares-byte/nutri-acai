import React from 'react';
import './Section.css';

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  as?: 'section' | 'div' | 'article' | 'aside';
  padding?: 'sm' | 'md' | 'lg' | 'none';
  background?: 'default' | 'surface' | 'subtle' | 'alt' | 'purple';
  children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({
  as = 'section',
  padding = 'md',
  background = 'default',
  className = '',
  children,
  ...props
}) => {
  const classes = `section section--padding-${padding} section--bg-${background} ${className}`.trim();

  if (as === 'div') {
    return (
      <div className={classes} {...props}>
        {children}
      </div>
    );
  }

  if (as === 'article') {
    return (
      <article className={classes} {...props}>
        {children}
      </article>
    );
  }

  if (as === 'aside') {
    return (
      <aside className={classes} {...props}>
        {children}
      </aside>
    );
  }

  return (
    <section className={classes} {...props}>
      {children}
    </section>
  );
};
