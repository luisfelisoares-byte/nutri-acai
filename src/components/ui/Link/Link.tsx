import React from 'react';
import { useRouter } from '../../../utils/router';

export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}

export const Link: React.FC<LinkProps> = ({
  href,
  target,
  rel,
  onClick,
  children,
  ...props
}) => {
  const { navigate } = useRouter();
  const isExternal = target === '_blank' || href.startsWith('http') || href.startsWith('https://wa.me');
  const safeRel = isExternal ? (rel || 'noopener noreferrer') : rel;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!isExternal && !e.ctrlKey && !e.metaKey && !e.shiftKey) {
      e.preventDefault();
      navigate(href);
    }
    onClick?.(e);
  };

  return (
    <a href={href} target={target} rel={safeRel} onClick={handleClick} {...props}>
      {children}
    </a>
  );
};
