import React, { Suspense } from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';
import { officialProductsCatalog } from '@/data/mock-products';
import { ProductsCatalogView } from '@/components/products/ProductsCatalogView';
import { Package, Store, ShoppingBag, Sparkles } from 'lucide-react';
import { JsonLd } from '@/components/seo/JsonLd';
import { getWebPageSchema, getBreadcrumbSchema, getCatalogItemListSchema, SITE_URL } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Produtos & Catálogo Industrial',
  description: 
    'Catálogo de açaí, cremes, sorbets e frozens: caixas de 5L e 10L e baldes para Food Service, potes 1,5L para varejo e linha individual Nutrinho.',
  alternates: {
    canonical: 'https://nutriacai.com.br/produtos',
  },
  openGraph: {
    title: 'Produtos & Catálogo Industrial | Nutri Açaí',
    description: 
      'Catálogo de açaí, cremes, sorbets e frozens: caixas de 5L e 10L e baldes para Food Service, potes 1,5L para varejo e linha individual Nutrinho.',
    url: 'https://nutriacai.com.br/produtos',
    siteName: 'Nutri Açaí',
    locale: 'pt_BR',
    type: 'website',
    images: [
      {
        url: '/images/brand/og-banner-1200x630.jpg',
        width: 1200,
        height: 630,
        alt: 'Catálogo de Produtos Nutri Açaí',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Produtos & Catálogo Industrial | Nutri Açaí',
    description: 
      'Catálogo de açaí, cremes, sorbets e frozens: caixas de 5L e 10L e baldes para Food Service, potes 1,5L para varejo e linha individual Nutrinho.',
    images: ['/images/brand/og-banner-1200x630.jpg'],
  },
};

export default function ProdutosPage() {
  return (
    <div className="flex flex-col w-full text-text-primary">
      {/* Schema.org: Dados Estruturados do Catálogo de Produtos */}
      <JsonLd 
        data={getWebPageSchema(
          `${SITE_URL}/produtos`,
          'Produtos & Catálogo Industrial | Nutri Açaí',
          'Catálogo de açaí, cremes, sorbets e frozens: caixas de 5L e 10L e baldes para Food Service, potes 1,5L para varejo e linha individual Nutrinho.',
          'CollectionPage'
        )} 
      />
      <JsonLd 
        data={getBreadcrumbSchema([
          { name: 'Início', url: SITE_URL },
          { name: 'Produtos', url: `${SITE_URL}/produtos` }
        ])} 
      />
      <JsonLd 
        data={getCatalogItemListSchema(officialProductsCatalog)} 
      />

      {/* Topo Institucional e Destaque Comercial de Canais */}
      <section className="py-12 md:py-16 bg-surface-alt border-b border-brand-200/80">
        <Container size="xl" className="space-y-10">
          
          {/* Cabeçalho da Página e Destaque Comercial */}
          <div className="space-y-4 max-w-3xl">
            <div className="inline-flex items-center gap-2">
              <Badge variant="primary" size="md" icon={<Package className="w-3.5 h-3.5 text-primary" />}>
                Portfólio Oficial de Produtos
              </Badge>
            </div>

            <h1 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-text-primary tracking-tight leading-tight">
              Catálogo Industrial de Açaí: Food Service, Varejo e Linha Individual
            </h1>

            <p className="text-text-secondary text-base sm:text-lg leading-relaxed">
              A <strong className="text-text-primary font-semibold">Nutri Açaí</strong> é fabricante de açaí no atacado, cremes e frozens estruturados para abastecer desde operações profissionais de alta demanda no <strong className="text-text-primary">Food Service</strong> (caixas de 5L e 10L e baldes de alto rendimento) até gôndolas de <strong className="text-text-primary">Varejo</strong> (potes 1,5L) e pontos de conveniência com a linha <strong className="text-text-primary">Nutrinho</strong>. Produção própria com rigoroso padrão de qualidade em nossa indústria em Gravataí/RS.
            </p>
          </div>

          {/* Três Pilares Rápidos do Portfólio em Cards Brancos Elevados */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="p-6 rounded-ds-2xl border border-brand-200/80 bg-white shadow-ds-sm hover:border-primary/60 hover:shadow-ds-card-hover hover:-translate-y-1.5 transition-all duration-300 flex items-start gap-4">
              <div className="w-11 h-11 rounded-ds-lg bg-primary/10 flex items-center justify-center text-primary shrink-0 shadow-ds-xs">
                <Store className="w-5 h-5" aria-hidden="true" />
              </div>
              <div className="space-y-1.5 flex-1">
                <div className="flex items-center justify-between">
                  <h2 className="font-display font-bold text-base text-text-primary">
                    Food Service
                  </h2>
                  <Link
                    href="/food-service"
                    className="text-xs font-semibold text-primary hover:underline inline-flex items-center gap-0.5"
                  >
                    Ver Soluções &rarr;
                  </Link>
                </div>
                <p className="text-text-secondary text-xs leading-relaxed">
                  Caixas de 5L e 10L e baldes de 3,6L e 12L para açaiterias, sorveterias e buffets.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-ds-2xl border border-brand-200/80 bg-white shadow-ds-sm hover:border-secondary/60 hover:shadow-ds-card-hover hover:-translate-y-1.5 transition-all duration-300 flex items-start gap-4">
              <div className="w-11 h-11 rounded-ds-lg bg-secondary/10 flex items-center justify-center text-secondary shrink-0 shadow-ds-xs">
                <ShoppingBag className="w-5 h-5" aria-hidden="true" />
              </div>
              <div className="space-y-1.5 flex-1">
                <h2 className="font-display font-bold text-base text-text-primary">
                  Varejo Familiar
                </h2>
                <p className="text-text-secondary text-xs leading-relaxed">
                  Potes retangulares de 1,5L de alta atratividade de gôndola e giro rápido em mercados.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-ds-2xl border border-brand-200/80 bg-white shadow-ds-sm hover:border-accent/60 hover:shadow-ds-card-hover hover:-translate-y-1.5 transition-all duration-300 flex items-start gap-4">
              <div className="w-11 h-11 rounded-ds-lg bg-accent/10 flex items-center justify-center text-accent shrink-0 shadow-ds-xs">
                <Sparkles className="w-5 h-5" aria-hidden="true" />
              </div>
              <div className="space-y-1.5 flex-1">
                <h2 className="font-display font-bold text-base text-text-primary">
                  Linha Nutrinho
                </h2>
                <p className="text-text-secondary text-xs leading-relaxed">
                  Potes individuais de 220ml com domo de toppings na tampa e versões de 200ml on-the-go.
                </p>
              </div>
            </div>

          </div>

        </Container>
      </section>

      {/* Seção do Catálogo Interativo */}
      <section className="py-12 md:py-16 bg-surface-muted/60">
        <Container size="xl">
          <Suspense fallback={
            <div className="p-12 text-center text-text-muted">
              Carregando catálogo de produtos...
            </div>
          }>
            <ProductsCatalogView initialProducts={officialProductsCatalog} />
          </Suspense>
        </Container>
      </section>
    </div>
  );
}
