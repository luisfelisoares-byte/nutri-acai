import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Tokens semânticos centrais da aplicação ligados a variáveis CSS.
        // Permite troca total de paleta quando o cliente fornecer os códigos oficiais, sem refatoração de código.
        brand: {
          50: 'var(--brand-50)',
          100: 'var(--brand-100)',
          200: 'var(--brand-200)',
          300: 'var(--brand-300)',
          400: 'var(--brand-400)',
          500: 'var(--brand-500)',
          600: 'var(--brand-600)',
          700: 'var(--brand-700)',
          800: 'var(--brand-800)',
          900: 'var(--brand-900)',
          950: 'var(--brand-950)',
        },
        primary: {
          DEFAULT: 'var(--color-primary)',
          hover: 'var(--color-primary-hover)',
          active: 'var(--color-primary-active)',
          foreground: 'var(--color-primary-foreground)',
          subtle: 'var(--color-primary-subtle)',
        },
        secondary: {
          DEFAULT: 'var(--color-secondary)',
          hover: 'var(--color-secondary-hover)',
          foreground: 'var(--color-secondary-foreground)',
          subtle: 'var(--color-secondary-subtle)',
        },
        accent: {
          DEFAULT: 'var(--color-accent)',
          hover: 'var(--color-accent-hover)',
          foreground: 'var(--color-accent-foreground)',
          subtle: 'var(--color-accent-subtle)',
        },
        surface: {
          DEFAULT: 'var(--color-surface)',
          elevated: 'var(--color-surface-elevated)',
          muted: 'var(--color-surface-muted)',
          alt: 'var(--color-surface-alt)',
          green: 'var(--color-surface-green)',
          dark: 'var(--color-surface-dark)',
        },
        border: {
          DEFAULT: 'var(--color-border)',
          muted: 'var(--color-border-muted)',
          focus: 'var(--color-border-focus)',
        },
        text: {
          primary: 'var(--color-text-primary)',
          secondary: 'var(--color-text-secondary)',
          muted: 'var(--color-text-muted)',
          inverted: 'var(--color-text-inverted)',
        },
        feedback: {
          success: 'var(--color-success)',
          warning: 'var(--color-warning)',
          error: 'var(--color-error)',
          info: 'var(--color-info)',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['var(--font-display)', 'var(--font-sans)', 'sans-serif'],
      },
      borderRadius: {
        'ds-sm': 'var(--radius-sm)',
        'ds-md': 'var(--radius-md)',
        'ds-lg': 'var(--radius-lg)',
        'ds-xl': 'var(--radius-xl)',
        'ds-full': 'var(--radius-full)',
      },
      boxShadow: {
        'ds-sm': 'var(--shadow-sm)',
        'ds-md': 'var(--shadow-md)',
        'ds-lg': 'var(--shadow-lg)',
        'ds-card': 'var(--shadow-card)',
        'ds-card-hover': 'var(--shadow-card-hover)',
        'ds-elevated': 'var(--shadow-elevated)',
        'ds-hero': 'var(--shadow-hero)',
      },
      maxWidth: {
        'container-sm': '640px',
        'container-md': '768px',
        'container-lg': '1024px',
        'container-xl': '1280px',
        'container-2xl': '1440px',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '112': '28rem',
      },
    },
  },
  plugins: [],
};

export default config;
