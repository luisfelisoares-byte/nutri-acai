import type { Metadata, Viewport } from 'next';
import { fontSans, fontDisplay } from '@/lib/fonts';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { FloatingWhatsAppButton } from '@/components/whatsapp/FloatingWhatsAppButton';
import { JsonLd } from '@/components/seo/JsonLd';
import { getOrganizationSchema, getWebSiteSchema } from '@/lib/schema';
import './globals.css';

export const viewport: Viewport = {
  themeColor: '#583c6f',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://nutriacai.com.br'),
  title: {
    default: 'Nutri Açaí | Fábrica de Açaí, Cremes e Frozens no RS',
    template: '%s | Nutri Açaí',
  },
  description: 
    'Indústria fabricante de açaí, cremes, sorbets e frozens sediada em Gravataí/RS. Soluções para distribuidores, varejo e Food Service com sabor artesanal.',
  applicationName: 'Nutri Açaí',
  authors: [{ name: 'Nutri Açaí' }],
  creator: 'Nutri Açaí',
  publisher: 'Nutri Açaí Indústria de Alimentos',
  formatDetection: {
    telephone: true,
    date: false,
    address: true,
    email: true,
  },
  alternates: {
    canonical: 'https://nutriacai.com.br',
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://nutriacai.com.br',
    siteName: 'Nutri Açaí',
    title: 'Nutri Açaí | Fábrica de Açaí, Cremes e Frozens no RS',
    description: 
      'Indústria fabricante de açaí, cremes, sorbets e frozens sediada em Gravataí/RS. Soluções para distribuidores, varejo e Food Service com sabor artesanal.',
    images: [
      {
        url: '/images/brand/og-banner-1200x630.jpg',
        width: 1200,
        height: 630,
        alt: 'Nutri Açaí — Indústria de Açaí, Sorbets e Frozens em Gravataí/RS',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nutri Açaí | Fábrica de Açaí, Cremes e Frozens no RS',
    description: 
      'Indústria fabricante de açaí, cremes, sorbets e frozens sediada em Gravataí/RS. Soluções para distribuidores, varejo e Food Service com sabor artesanal.',
    images: ['/images/brand/og-banner-1200x630.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${fontSans.variable} ${fontDisplay.variable}`}>
      <body className="min-h-screen flex flex-col font-sans bg-surface text-text-primary antialiased">
        {/* Schema.org: Dados Estruturados Globais (Organization e WebSite) */}
        <JsonLd data={getOrganizationSchema()} />
        <JsonLd data={getWebSiteSchema()} />

        {/* Skip Link para leitores de tela e navegação por teclado */}
        <a href="#main-content" className="skip-link">
          Pular para o conteúdo principal
        </a>

        {/* Cabeçalho Global */}
        <Header />

        {/* Região Principal de Conteúdo */}
        <main id="main-content" className="flex-1">
          {children}
        </main>

        {/* Rodapé Institucional */}
        <Footer />

        {/* Botão Flutuante de WhatsApp Global */}
        <FloatingWhatsAppButton />
      </body>
    </html>
  );
}
