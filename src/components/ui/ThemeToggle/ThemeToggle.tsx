import React from 'react';
import { useTheme } from '../../../utils/theme';
import './ThemeToggle.css';

export interface ThemeToggleProps {
  className?: string;
  showLabel?: boolean;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({
  className = '',
  showLabel = false,
}) => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  const labelText = isDark ? 'Mudar para Tema Claro' : 'Mudar para Tema Escuro';

  return (
    <button
      type="button"
      className={`theme-toggle ${className} ${isDark ? 'theme-toggle--dark' : 'theme-toggle--light'}`}
      onClick={toggleTheme}
      aria-label={labelText}
      title={labelText}
      aria-pressed={isDark}
    >
      <span className="theme-toggle__icon-wrapper" aria-hidden="true">
        {isDark ? (
          <svg
            className="theme-toggle__icon theme-toggle__icon--sun"
            width={19}
            height={19}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2" />
            <path d="M12 20v2" />
            <path d="m4.93 4.93 1.41 1.41" />
            <path d="m17.66 17.66 1.41 1.41" />
            <path d="M2 12h2" />
            <path d="M20 12h2" />
            <path d="m6.34 17.66-1.41 1.41" />
            <path d="m19.07 4.93-1.41 1.41" />
          </svg>
        ) : (
          <svg
            className="theme-toggle__icon theme-toggle__icon--moon"
            width={19}
            height={19}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
          </svg>
        )}
      </span>
      {showLabel && (
        <span className="theme-toggle__label">
          {isDark ? 'Tema Claro' : 'Tema Escuro'}
        </span>
      )}
    </button>
  );
};
