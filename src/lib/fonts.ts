import { Inter, Plus_Jakarta_Sans } from 'next/font/google';

/**
 * Tipografia Primária: Inter
 * Altamente legível para textos técnicos, números de catálogo e leitura móvel.
 */
export const fontSans = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
  fallback: ['system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
});

/**
 * Tipografia de Destaque/Display: Plus Jakarta Sans
 * Visual premium, limpo e corporativo para títulos institucionais e comerciais.
 */
export const fontDisplay = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-display',
  fallback: ['system-ui', '-apple-system', 'sans-serif'],
});
