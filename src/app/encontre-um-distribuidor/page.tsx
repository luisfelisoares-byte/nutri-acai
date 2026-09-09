import React from 'react';
import type { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';
import { mockDistributorsForTesting } from '@/data/mock-distributors';
import { DistributorLocatorView } from '@/components/distributors/DistributorLocatorView';
import { MapPin, ShieldCheck, Truck } from 'lucide-react';
import { JsonLd } from '@/components/seo/JsonLd';
import { getWebPageSchema, getBreadcrumbSchema, SITE_URL } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Encontre um Distribuidor',
  description: 
    'Localize distribuidores da Nutri Açaí por estado e cidade. Encontre pontos de fornecimento de açaí, cremes e frozens para seu comércio ou açaiteria.',
  alternates: {
    canonical: 'https://nutriacai.com.br/encontre-um-distribuidor',
  },
  openGraph: {
    title: 'Encontre um Distribuidor | Nutri Açaí',
    description: 
      'Localize distribuidores da Nutri Açaí por estado e cidade. Encontre pontos de fornecimento de açaí, cremes e frozens para seu comércio ou açaiteria.',
    url: 'https://nutriacai.com.br/encontre-um-distribuidor',
    siteName: 'Nutri Açaí',
    locale: 'pt_BR',
    type: 'website',
    images: [
      {
        url: '/images/brand/og-banner-1200x630.jpg',
        width: 1200,
        height: 630,
        alt: 'Encontre um Distribuidor Nutri Açaí',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Encontre um Distribuidor | Nutri Açaí',
    description: 
      'Localize distribuidores da Nutri Açaí por estado e cidade. Encontre pontos de fornecimento de açaí, cremes e frozens para seu comércio ou açaiteria.',
    images: ['/images/brand/og-banner-1200x630.jpg'],
  },
};

export default function EncontreUmDistribuidorPage() {
  return (
    <div className="flex flex-col w-full text-text-primary">
      {/* Schema.org: Dados Estruturados da Página Encontre um Distribuidor */}
      <JsonLd 
        data={getWebPageSchema(
          `${SITE_URL}/encontre-um-distribuidor`,
          'Encontre um Distribuidor | Nutri Açaí',
          'Localize distribuidores da Nutri Açaí por estado e cidade. Encontre pontos de fornecimento de açaí, cremes e frozens para seu comércio ou açaiteria.'
        )} 
      />
      <JsonLd 
        data={getBreadcrumbSchema([
          { name: 'Início', url: SITE_URL },
          { name: 'Encontre um Distribuidor', url: `${SITE_URL}/encontre-um-distribuidor` }
        ])} 
      />

      {/* Topo Institucional da Rede com 3 Indicadores Elevados */}
      <section className="py-12 md:py-16 bg-[#D9A441] border-b border-[#BF8A2E]">
        <Container size="xl" className="space-y-10">
          
          {/* Cabeçalho da Página */}
          <div className="space-y-4 max-w-3xl">
            <div className="inline-flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-ds-full text-xs md:text-sm font-semibold bg-white/95 text-[#2A1E0D] border border-[#BF8A2E]/50 shadow-ds-xs leading-none">
                <MapPin className="w-3.5 h-3.5 text-[#583c6f]" aria-hidden="true" />
                <span>Rede de Distribuição</span>
              </span>
            </div>

            <h1 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-[#171108] tracking-tight leading-tight">
              Encontre um Distribuidor de Açaí no Rio Grande do Sul e Região
            </h1>

            <p className="text-[#2B200F] text-base sm:text-lg leading-relaxed">
              Consulte distribuidores parceiros da <strong className="text-[#171108] font-bold">Nutri Açaí</strong> por estado e cidade para abastecer açaiterias, sorveterias, lanchonetes e pontos de venda. Conectamos o seu comércio a fornecedores regionais com produtos de açaí e cremes direto da fábrica em Gravataí/RS.
            </p>
          </div>

          {/* Três Indicadores de Apoio em Cards Brancos Elevados */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="p-5 rounded-ds-2xl border border-[#D5C29D] bg-white shadow-ds-sm hover:border-[#583c6f]/60 hover:shadow-ds-card-hover hover:-translate-y-1.5 transition-all duration-300 flex items-center gap-4">
              <div className="w-11 h-11 rounded-ds-lg bg-primary/10 flex items-center justify-center text-primary shrink-0 shadow-ds-xs">
                <MapPin className="w-5 h-5" aria-hidden="true" />
              </div>
              <div>
                <p className="font-bold text-sm text-[#171108]">Busca Regional</p>
                <p className="text-text-secondary text-xs mt-0.5">Filtros por Estado e Cidade</p>
              </div>
            </div>

            <div className="p-5 rounded-ds-2xl border border-[#D5C29D] bg-white shadow-ds-sm hover:border-[#2f6b3e]/60 hover:shadow-ds-card-hover hover:-translate-y-1.5 transition-all duration-300 flex items-center gap-4">
              <div className="w-11 h-11 rounded-ds-lg bg-secondary/10 flex items-center justify-center text-secondary shrink-0 shadow-ds-xs">
                <Truck className="w-5 h-5" aria-hidden="true" />
              </div>
              <div>
                <p className="font-bold text-sm text-[#171108]">Atendimento B2B</p>
                <p className="text-text-secondary text-xs mt-0.5">Food Service, varejo e lanchonetes</p>
              </div>
            </div>

            <div className="p-5 rounded-ds-2xl border border-[#D5C29D] bg-white shadow-ds-sm hover:border-[#2e7d32]/60 hover:shadow-ds-card-hover hover:-translate-y-1.5 transition-all duration-300 flex items-center gap-4">
              <div className="w-11 h-11 rounded-ds-lg bg-accent/10 flex items-center justify-center text-accent shrink-0 shadow-ds-xs">
                <ShieldCheck className="w-5 h-5" aria-hidden="true" />
              </div>
              <div>
                <p className="font-bold text-sm text-[#171108]">Origem Fabril</p>
                <p className="text-text-secondary text-xs mt-0.5">Produtos direto da fábrica em Gravataí/RS</p>
              </div>
            </div>
          </div>

        </Container>
      </section>

      {/* Seção do Localizador Interativo */}
      <section className="py-12 md:py-16 bg-[#F5ECDA]">
        <Container size="xl">
          <DistributorLocatorView distributors={mockDistributorsForTesting} />
        </Container>
      </section>
    </div>
  );
}
