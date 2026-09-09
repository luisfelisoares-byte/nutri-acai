import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { officialProductsCatalog } from '@/data/mock-products';
import { HeroCarousel } from '@/components/home/HeroCarousel';
import { ProductFeatureSection } from '@/components/home/ProductFeatureSection';
import { JsonLd } from '@/components/seo/JsonLd';
import { getWebPageSchema, getBreadcrumbSchema, SITE_URL } from '@/lib/schema';
import { 
  ShieldCheck, 
  MapPin, 
  ArrowRight, 
  Factory, 
  Truck, 
  Store, 
  ShoppingBag, 
  Sparkles, 
  FlaskConical, 
  Layers, 
  CheckCircle2, 
  ChevronRight,
  Package,
  Boxes,
  Users,
  MessageCircle
} from 'lucide-react';

export const metadata: Metadata = {
  title: {
    absolute: 'Nutri Açaí | Fábrica de Açaí, Sorbets e Frozens em Gravataí/RS',
  },
  description: 
    'Indústria fabricante de açaí, sorbets e frozens sediada em Gravataí/RS. Fornecimento direto para distribuidores, varejo, Food Service e marcas próprias.',
  alternates: {
    canonical: 'https://nutriacai.com.br',
  },
  openGraph: {
    title: 'Nutri Açaí | Fábrica de Açaí, Sorbets e Frozens em Gravataí/RS',
    description: 
      'Indústria fabricante de açaí, sorbets e frozens sediada em Gravataí/RS. Fornecimento direto para distribuidores, varejo, Food Service e marcas próprias.',
    url: 'https://nutriacai.com.br',
    siteName: 'Nutri Açaí',
    locale: 'pt_BR',
    type: 'website',
    images: [
      {
        url: '/images/brand/og-banner-1200x630.jpg',
        width: 1200,
        height: 630,
        alt: 'Nutri Açaí — Indústria de Alimentos em Gravataí/RS',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nutri Açaí | Fábrica de Açaí, Sorbets e Frozens em Gravataí/RS',
    description: 
      'Indústria fabricante de açaí, sorbets e frozens sediada em Gravataí/RS. Fornecimento direto para distribuidores, varejo, Food Service e marcas próprias.',
    images: ['/images/brand/og-banner-1200x630.jpg'],
  },
};

export default function HomePage() {
  // Vitrine em destaque na Home: Apresentação premium da linha Nutrinho com imagens reais
  const featuredShowcase = [
    officialProductsCatalog.find(p => p.id === 'nutrinho-acai-banana-220ml'),
    officialProductsCatalog.find(p => p.id === 'nutrinho-acai-morango-220ml'),
    officialProductsCatalog.find(p => p.id === 'nutrinho-trufado-avela-220ml'),
  ].filter((p): p is (typeof officialProductsCatalog)[0] => Boolean(p));

  const foodServiceFeatured = officialProductsCatalog
    .filter(p => p.category === 'food-service')
    .slice(0, 3);

  return (
    <div className="flex flex-col w-full bg-surface text-text-primary">
      {/* Schema.org: Dados Estruturados da Página Inicial */}
      <JsonLd 
        data={getWebPageSchema(
          SITE_URL,
          'Nutri Açaí | Fábrica de Açaí, Sorbets e Frozens em Gravataí/RS',
          'Indústria fabricante de açaí, sorbets e frozens sediada em Gravataí/RS. Fornecimento direto para distribuidores, varejo, Food Service e marcas próprias.'
        )} 
      />
      <JsonLd 
        data={getBreadcrumbSchema([
          { name: 'Início', url: SITE_URL }
        ])} 
      />
      
      {/* =====================================================================
          SEÇÃO 1 — HERO COM CARROSSEL AUTOMÁTICO PREMIUM
          ===================================================================== */}
      <HeroCarousel />

      {/* =====================================================================
          SEÇÃO 2 — BARRA DE AUTORIDADE
          ===================================================================== */}
      <section className="py-6 bg-brand-950 text-white border-y border-white/10" aria-label="Indicadores de Autoridade Industrial">
        <Container size="xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left">
            
            <div className="flex items-center justify-center md:justify-start gap-3">
              <div className="w-10 h-10 rounded-ds-md bg-white/10 flex items-center justify-center text-secondary shrink-0">
                <Factory className="w-5 h-5" aria-hidden="true" />
              </div>
              <div>
                <p className="font-display font-bold text-base text-white">Escala Industrial</p>
                <p className="text-white/60 text-xs">Capacidade produtiva contínua</p>
              </div>
            </div>

            <div className="flex items-center justify-center md:justify-start gap-3">
              <div className="w-10 h-10 rounded-ds-md bg-white/10 flex items-center justify-center text-secondary shrink-0">
                <ShieldCheck className="w-5 h-5" aria-hidden="true" />
              </div>
              <div>
                <p className="font-display font-bold text-base text-white">Produção Própria</p>
                <p className="text-white/60 text-xs">Indústria em Gravataí/RS</p>
              </div>
            </div>

            <div className="flex items-center justify-center md:justify-start gap-3">
              <div className="w-10 h-10 rounded-ds-md bg-white/10 flex items-center justify-center text-secondary shrink-0">
                <FlaskConical className="w-5 h-5" aria-hidden="true" />
              </div>
              <div>
                <p className="font-display font-bold text-base text-white">Laboratório Próprio</p>
                <p className="text-white/60 text-xs">Controle de qualidade</p>
              </div>
            </div>

            <div className="flex items-center justify-center md:justify-start gap-3">
              <div className="w-10 h-10 rounded-ds-md bg-white/10 flex items-center justify-center text-secondary shrink-0">
                <Truck className="w-5 h-5" aria-hidden="true" />
              </div>
              <div>
                <p className="font-display font-bold text-base text-white">Atendimento B2B</p>
                <p className="text-white/60 text-xs">Distribuidores e Food Service</p>
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* =====================================================================
          SEÇÃO 3 — ESCOLHA SEU CANAL (Fundo Sólido Lilás da Marca com Alto Contraste)
          ===================================================================== */}
      <section className="py-16 md:py-24 bg-surface-alt border-b border-brand-200/80" aria-labelledby="section-channels-heading">
        <Container size="xl" className="space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <Badge variant="primary" size="sm">Canais de Atendimento</Badge>
            <h2 id="section-channels-heading" className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-text-primary tracking-tight">
              Soluções Estruturadas para o Seu Negócio
            </h2>
            <p className="text-text-secondary text-sm sm:text-base">
              Conectamos nossa capacidade industrial à necessidade da sua operação comercial.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Card 1: Distribuidores */}
            <div className="group rounded-ds-xl border border-brand-200/80 bg-white hover:border-primary/60 hover:shadow-ds-card-hover hover:-translate-y-1.5 p-6 flex flex-col justify-between transition-all duration-300 shadow-ds-sm">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-ds-lg bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <Truck className="w-6 h-6" aria-hidden="true" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-display font-semibold text-lg text-text-primary group-hover:text-primary transition-colors">
                    Distribuidores Regionais e Atacado
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    Fornecimento contínuo direto da fábrica em escala industrial, com mix completo e suporte logístico.
                  </p>
                </div>
              </div>
              <div className="pt-6">
                <Link 
                  href="/seja-um-distribuidor" 
                  className="inline-flex items-center text-sm font-semibold text-primary hover:text-primary-hover gap-1.5 group-hover:translate-x-1 transition-transform focus-visible:outline-primary rounded-ds-sm"
                >
                  <span>Seja um Distribuidor</span>
                  <ChevronRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </div>
            </div>

            {/* Card 2: Food Service */}
            <div className="group rounded-ds-xl border border-brand-200/80 bg-white hover:border-secondary/60 hover:shadow-ds-card-hover hover:-translate-y-1.5 p-6 flex flex-col justify-between transition-all duration-300 shadow-ds-sm">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-ds-lg bg-secondary/10 flex items-center justify-center text-secondary group-hover:scale-110 group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                  <Store className="w-6 h-6" aria-hidden="true" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-display font-semibold text-lg text-text-primary group-hover:text-secondary transition-colors">
                    Food Service
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    Caixas de 5L e 10L e baldes vedados de alto rendimento para açaiterias, sorveterias, franquias e buffets.
                  </p>
                </div>
              </div>
              <div className="pt-6">
                <Link 
                  href="/food-service" 
                  className="inline-flex items-center text-sm font-semibold text-secondary hover:text-secondary-hover gap-1.5 group-hover:translate-x-1 transition-transform focus-visible:outline-secondary rounded-ds-sm"
                >
                  <span>Ver Linha Food Service</span>
                  <ChevronRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </div>
            </div>

            {/* Card 3: Redes de Varejo */}
            <div className="group rounded-ds-xl border border-brand-200/80 bg-white hover:border-accent/60 hover:shadow-ds-card-hover hover:-translate-y-1.5 p-6 flex flex-col justify-between transition-all duration-300 shadow-ds-sm">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-ds-lg bg-accent/10 flex items-center justify-center text-accent group-hover:scale-110 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                  <ShoppingBag className="w-6 h-6" aria-hidden="true" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-display font-semibold text-lg text-text-primary group-hover:text-accent transition-colors">
                    Redes de Varejo
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    Potes familiares de 1,5L e linha individual Nutrinho com toppings para alto giro e atratividade em gôndolas.
                  </p>
                </div>
              </div>
              <div className="pt-6">
                <Link 
                  href="/produtos" 
                  className="inline-flex items-center text-sm font-semibold text-accent hover:text-accent-hover gap-1.5 group-hover:translate-x-1 transition-transform focus-visible:outline-accent rounded-ds-sm"
                >
                  <span>Ver Linha Varejo</span>
                  <ChevronRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </div>
            </div>

            {/* Card 4: Marca Própria */}
            <div className="group rounded-ds-xl border border-brand-200/80 bg-white hover:border-brand-500/60 hover:shadow-ds-card-hover hover:-translate-y-1.5 p-6 flex flex-col justify-between transition-all duration-300 shadow-ds-sm">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-ds-lg bg-brand-500/10 flex items-center justify-center text-brand-600 group-hover:scale-110 group-hover:bg-brand-600 group-hover:text-white transition-all duration-300">
                  <Sparkles className="w-6 h-6" aria-hidden="true" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-display font-semibold text-lg text-text-primary group-hover:text-brand-600 transition-colors">
                    Marca Própria / Private Label
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    Terceirização de envase e co-packing para redes e marcas que necessitam de retaguarda fabril industrial.
                  </p>
                </div>
              </div>
              <div className="pt-6">
                <Link 
                  href="/marca-propria" 
                  className="inline-flex items-center text-sm font-semibold text-brand-600 hover:text-brand-700 gap-1.5 group-hover:translate-x-1 transition-transform focus-visible:outline-brand-600 rounded-ds-sm"
                >
                  <span>Consultar Marca Própria</span>
                  <ChevronRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </div>
            </div>

          </div>

        </Container>
      </section>

      {/* =====================================================================
          GRANDE SEÇÃO 1 — O VERDADEIRO AÇAÍ (IMPACTO PUBLICITÁRIO: ROXO PROFUNDO)
          Layout: Produto à Direita | Texto à Esquerda
          ===================================================================== */}
      <ProductFeatureSection
        id="destaque-acai"
        tag="Linha Açaí Autêntico"
        title="O Verdadeiro Sabor do Açaí com"
        titleHighlight="Padrão Industrial"
        description="Processamento rigoroso a partir de frutos selecionados da Amazônia. Formulação perfeita que equilibra cremosidade, estabilidade térmica e rendimento incomparável para quem exige o melhor em cada porção."
        theme={{
          bgGradient: 'bg-gradient-to-br from-[#1b0525] via-[#2f0c3d] to-[#14031a]',
          radialGlow: 'radial-gradient(ellipse at 70% 50%, rgba(168, 85, 247, 0.28) 0%, transparent 70%)',
          textMode: 'light',
          tagStyle: 'bg-purple-500/20 text-purple-200 border border-purple-400/30',
          primaryCtaStyle: 'bg-white text-brand-950 hover:bg-white/90 shadow-2xl font-semibold',
          secondaryCtaStyle: 'border-white/30 text-white hover:bg-white/10 font-medium',
        }}
        layoutDirection="product-right"
        products={[
          {
            src: '/images/products/balde-12l-acai-guarana.webp',
            alt: 'Balde de 12 litros de Açaí com Guaraná Nutri Açaí',
            width: 457,
            height: 555,
            className: 'w-[180px] sm:w-[240px] md:w-[290px] lg:w-[330px] drop-shadow-[0_35px_50px_rgba(0,0,0,0.75)] z-10',
            badge: 'Balde 12L',
          },
          {
            src: '/images/products/caixa-5l-acai-natural.webp',
            alt: 'Caixa de 5 litros de Açaí Natural Nutri Açaí',
            width: 449,
            height: 447,
            className: 'w-[160px] sm:w-[210px] md:w-[250px] lg:w-[280px] drop-shadow-[0_30px_40px_rgba(0,0,0,0.7)] z-20',
            badge: 'Caixa 5L',
          },
          {
            src: '/images/products/pote-1-5l-acai-guarana.webp',
            alt: 'Pote 1,5L de Açaí com Guaraná Nutri Açaí',
            width: 456,
            height: 409,
            className: 'w-[130px] sm:w-[170px] md:w-[200px] lg:w-[220px] drop-shadow-[0_25px_35px_rgba(0,0,0,0.65)] z-30',
            badge: 'Pote 1,5L',
          },
        ]}
        highlights={[
          'Alto teor de sólidos e polpa selecionada',
          'Textura aveludada sem cristais de gelo',
          'Estabilidade no descongelamento',
          'Laudos microbiológicos por lote',
        ]}
        primaryCta={{
          label: 'Explorar Linha de Açaí',
          href: '/produtos',
        }}
        secondaryCta={{
          label: 'Falar com Especialista',
          href: '/contato',
        }}
        captionText="Embalagens industriais e de varejo com selo de garantia de qualidade Nutri Açaí"
      />

      {/* =====================================================================
          SEÇÃO DE RESPIRO 1 — VITRINE ENXUTA DO PORTFÓLIO (Fundo Sólido Verde Botânico)
          ===================================================================== */}
      <section className="py-16 md:py-20 bg-surface-green border-y border-emerald-200/80" aria-labelledby="section-products-heading">
        <Container size="xl" className="space-y-10">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-2">
              <Badge variant="secondary" size="sm">Portfólio em Destaque • Linha Nutrinho To-Go</Badge>
              <h2 id="section-products-heading" className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-text-primary tracking-tight">
                Praticidade e Fruta Real em Doses Individuais
              </h2>
              <p className="text-text-secondary text-sm sm:text-base max-w-xl">
                Copinhos de 220ml com domo de acompanhamentos e sabor irresistível. Giro acelerado em pontos de venda, cantinas e conveniências.
              </p>
            </div>
            <div>
              <Button 
                href="/produtos" 
                variant="outline" 
                size="md"
                className="bg-white hover:bg-emerald-50 border-emerald-300 text-emerald-900 shadow-ds-xs"
                rightIcon={<ArrowRight className="w-4 h-4" aria-hidden="true" />}
              >
                Ver todas as 34 opções
              </Button>
            </div>
          </div>

          {/* Grid Compacto com Amostras Reais Nutrinho */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredShowcase.map((product) => (
              <div 
                key={product.id}
                className="rounded-ds-xl bg-white border border-emerald-200/80 p-5 flex flex-col justify-between space-y-4 shadow-ds-sm hover:shadow-ds-card-hover hover:border-emerald-500/50 hover:-translate-y-1.5 transition-all duration-300 group"
              >
                <div className="space-y-3">
                  <div className="aspect-square rounded-ds-lg bg-gradient-to-b from-white to-emerald-50/60 border border-emerald-100 flex items-center justify-center p-3 relative overflow-hidden shadow-inner">
                    {product.image && (
                      <Image
                        src={product.image.src}
                        alt={product.image.alt}
                        fill
                        className="object-contain p-2 drop-shadow-[0_12px_24px_rgba(0,0,0,0.16)] group-hover:scale-110 transition-transform duration-300"
                        loading="lazy"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
                      />
                    )}
                    {product.hasTopping && (
                      <span className="absolute top-2 right-2 px-2.5 py-1 rounded-full text-[10px] font-bold bg-white text-neutral-900 shadow-md backdrop-blur-sm z-10">
                        + Topping
                      </span>
                    )}
                  </div>
                  <div className="space-y-1">
                    <span className="text-[11px] font-semibold text-primary uppercase tracking-wider">
                      {product.packagingDisplay}
                    </span>
                    <h3 className="font-display font-semibold text-base text-text-primary group-hover:text-primary transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-text-secondary text-xs line-clamp-2 leading-relaxed">
                      {product.description}
                    </p>
                  </div>
                </div>

                <div className="pt-2 border-t border-border flex items-center justify-between text-xs">
                  <span className="text-text-muted">{product.application.split(',')[0]}</span>
                  <Link 
                    href="/produtos" 
                    className="font-medium text-primary hover:text-primary-hover group-hover:translate-x-0.5 transition-transform focus-visible:outline-primary rounded-ds-sm"
                  >
                    Ver Linha &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </Container>
      </section>

      {/* =====================================================================
          GRANDE SEÇÃO 2 — FOOD SERVICE DE ALTO RENDIMENTO (VERDE BOTÂNICO & AÇAÍ)
          Layout: Alternado (Produto à Esquerda | Texto à Direita)
          ===================================================================== */}
      <ProductFeatureSection
        id="destaque-foodservice"
        tag="Soluções Food Service"
        title="Rendimento Máximo e Padronização para"
        titleHighlight="a Sua Operação"
        description="Embalagens funcionais de 5L e 10L desenhadas para a rotina intensa de açaiterias, sorveterias e lanchonetes. Facilidade no manuseio, textura homogênea para boleamento ágil e desperdício zero na cuba."
        theme={{
          bgGradient: 'bg-gradient-to-br from-[#0c1e13] via-[#153420] to-[#0d161a]',
          radialGlow: 'radial-gradient(ellipse at 30% 50%, rgba(34, 197, 94, 0.22) 0%, transparent 70%)',
          textMode: 'light',
          tagStyle: 'bg-emerald-500/20 text-emerald-200 border border-emerald-400/30',
          primaryCtaStyle: 'bg-emerald-400 text-neutral-950 hover:bg-emerald-300 shadow-2xl font-semibold',
          secondaryCtaStyle: 'border-white/30 text-white hover:bg-white/10 font-medium',
        }}
        layoutDirection="product-left"
        products={[
          {
            src: '/images/products/caixa-5l-acai-banana.webp',
            alt: 'Caixa 5 Litros Açaí com Banana Nutri Açaí Food Service',
            width: 449,
            height: 447,
            className: 'w-[170px] sm:w-[220px] md:w-[270px] lg:w-[310px] drop-shadow-[0_35px_45px_rgba(0,0,0,0.7)] z-10',
            badge: 'Caixa 5L Banana',
          },
          {
            src: '/images/products/caixa-5l-creme-leitinho.webp',
            alt: 'Caixa 5 Litros Creme de Leitinho Nutri Açaí Food Service',
            width: 449,
            height: 447,
            className: 'w-[160px] sm:w-[210px] md:w-[250px] lg:w-[290px] drop-shadow-[0_30px_40px_rgba(0,0,0,0.65)] z-20',
            badge: 'Creme Leitinho 5L',
          },
        ]}
        highlights={[
          'Caixas modulares de 5L e 10L empilháveis',
          'Ponto de boleamento rápido sem esforço mecânico',
          'Sabor uniforme do primeiro ao último litro',
          'Previsibilidade de custo por porção servida',
        ]}
        primaryCta={{
          label: 'Seja um Distribuidor Food Service',
          href: '/seja-um-distribuidor',
        }}
        secondaryCta={{
          label: 'Linha Food Service',
          href: '/food-service',
        }}
        captionText="Projetado para buffets, quiosques, franquias e casas de açaí de alta demanda"
        supportingPhoto={{
          src: '/images/products/food-service-extracao-acai.webp',
          alt: 'Colher de sorvete retirando bola cremosa de açaí direto da caixa Food Service Nutri Açaí',
          badge: 'Prova Operacional',
          title: 'Ponto Perfeito de Boleamento',
          description: 'Textura homogênea e cremosa direto da cuba sem esforço mecânico, assegurando agilidade no atendimento e desperdício zero.',
        }}
      />

      {/* =====================================================================
          SEÇÃO DE RESPIRO 2 — PILARES INDUSTRIAIS (Fundo Sólido Lilás Institucional)
          ===================================================================== */}
      <section className="py-16 md:py-24 bg-surface-alt border-y border-brand-200/80" aria-labelledby="section-strength-heading">
        <Container size="xl" className="space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <Badge variant="primary" size="sm">Estrutura Industrial</Badge>
            <h2 id="section-strength-heading" className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-text-primary tracking-tight">
              A Força da Nutri Açaí
            </h2>
            <p className="text-text-secondary text-sm sm:text-base">
              Fundamentos industriais sólidos que asseguram confiabilidade aos nossos clientes e distribuidores.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Pilar 1 */}
            <div className="p-6 rounded-ds-xl border border-brand-200/80 bg-white shadow-ds-sm hover:shadow-ds-card-hover hover:border-primary/50 hover:-translate-y-1.5 transition-all duration-300 space-y-3 group">
              <div className="w-11 h-11 rounded-ds-md bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <Factory className="w-6 h-6" aria-hidden="true" />
              </div>
              <h3 className="font-display font-semibold text-lg text-text-primary group-hover:text-primary transition-colors">
                Produção Própria
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Indústria própria sediada em Gravataí/RS com operação ativa desde 2022 e controle direto de processamento.
              </p>
            </div>

            {/* Pilar 2 */}
            <div className="p-6 rounded-ds-xl border border-brand-200/80 bg-white shadow-ds-sm hover:shadow-ds-card-hover hover:border-secondary/50 hover:-translate-y-1.5 transition-all duration-300 space-y-3 group">
              <div className="w-11 h-11 rounded-ds-md bg-secondary/10 flex items-center justify-center text-secondary group-hover:scale-110 group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                <FlaskConical className="w-6 h-6" aria-hidden="true" />
              </div>
              <h3 className="font-display font-semibold text-lg text-text-primary group-hover:text-secondary transition-colors">
                Laboratório Próprio
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Equipes técnicas especializadas e estrutura laboratorial dedicada para controle de qualidade e laudos.
              </p>
            </div>

            {/* Pilar 3 */}
            <div className="p-6 rounded-ds-xl border border-brand-200/80 bg-white shadow-ds-sm hover:shadow-ds-card-hover hover:border-accent/50 hover:-translate-y-1.5 transition-all duration-300 space-y-3 group">
              <div className="w-11 h-11 rounded-ds-md bg-accent/10 flex items-center justify-center text-accent group-hover:scale-110 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                <ShieldCheck className="w-6 h-6" aria-hidden="true" />
              </div>
              <h3 className="font-display font-semibold text-lg text-text-primary group-hover:text-accent transition-colors">
                Escala Industrial Contínua
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Estrutura de fabricação dimensionada para garantir regularidade e escala contínua de fornecimento.
              </p>
            </div>

            {/* Pilar 4 */}
            <div className="p-6 rounded-ds-xl border border-brand-200/80 bg-white shadow-ds-sm hover:shadow-ds-card-hover hover:border-brand-500/50 hover:-translate-y-1.5 transition-all duration-300 space-y-3 group">
              <div className="w-11 h-11 rounded-ds-md bg-brand-500/10 flex items-center justify-center text-brand-600 group-hover:scale-110 group-hover:bg-brand-600 group-hover:text-white transition-all duration-300">
                <Truck className="w-6 h-6" aria-hidden="true" />
              </div>
              <h3 className="font-display font-semibold text-lg text-text-primary group-hover:text-brand-600 transition-colors">
                Distribuição e Logística
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Estrutura de expedição planejada para atendimento a distribuidores regionais e parceiros comerciais.
              </p>
            </div>

          </div>

        </Container>
      </section>

      {/* =====================================================================
          GRANDE SEÇÃO 3 — VAREJO & FAMÍLIA (GOURMET BORDÔ, AMBER & MAGENTA)
          Layout: Produto à Direita | Texto à Esquerda
          ===================================================================== */}
      <ProductFeatureSection
        id="destaque-varejo"
        tag="Linha Varejo &amp; Família"
        title="Sobremesas Irresistíveis que Conquistam"
        titleHighlight="a Gôndola e o Consumidor"
        description="Potes familiares de 1,5L trufados com recheios cremosos e a praticidade inovadora da linha individual Nutrinho 220ml com toppings crocantes. Alto impacto visual nas prateleiras e giro rápido nos pontos de venda."
        theme={{
          bgGradient: 'bg-gradient-to-br from-[#240a1b] via-[#481232] to-[#1a0515]',
          radialGlow: 'radial-gradient(ellipse at 75% 50%, rgba(244, 63, 94, 0.25) 0%, transparent 70%)',
          textMode: 'light',
          tagStyle: 'bg-rose-500/20 text-rose-200 border border-rose-400/30',
          primaryCtaStyle: 'bg-rose-400 text-neutral-950 hover:bg-rose-300 shadow-2xl font-semibold',
          secondaryCtaStyle: 'border-white/30 text-white hover:bg-white/10 font-medium',
        }}
        layoutDirection="product-right"
        products={[
          {
            src: '/images/products/pote-1-5l-acai-trufado-leitinho.webp',
            alt: 'Pote 1,5L de Açaí Trufado com Leitinho Nutri Açaí',
            width: 456,
            height: 409,
            className: 'w-[170px] sm:w-[220px] md:w-[270px] lg:w-[310px] drop-shadow-[0_35px_45px_rgba(0,0,0,0.7)] z-10',
            badge: 'Trufado Leitinho 1,5L',
          },
          {
            src: '/images/products/pote-1-5l-acai-trufado-avela.webp',
            alt: 'Pote 1,5L de Açaí Trufado com Creme de Avelã Nutri Açaí',
            width: 456,
            height: 409,
            className: 'w-[150px] sm:w-[190px] md:w-[230px] lg:w-[260px] drop-shadow-[0_30px_40px_rgba(0,0,0,0.65)] z-20',
            badge: 'Trufado Avelã 1,5L',
          },
          {
            src: '/images/products/nutrinho-trufado-leitinho-220ml.webp',
            alt: 'Nutrinho Trufado Leitinho 220ml com Topping na tampa',
            width: 456,
            height: 409,
            className: 'w-[120px] sm:w-[150px] md:w-[180px] lg:w-[200px] drop-shadow-[0_25px_35px_rgba(0,0,0,0.6)] z-30',
            badge: 'Nutrinho 220ml',
          },
        ]}
        highlights={[
          'Camadas generosas de recheios nobres trufados',
          'Design moderno de embalagem com alta conversão em gôndola',
          'Porcionamento ideal para consumo compartilhado ou individual',
          'Excelente margem e rotatividade para varejistas',
        ]}
        primaryCta={{
          label: 'Ver Linha Completa de Varejo',
          href: '/produtos',
        }}
        secondaryCta={{
          label: 'Encontre um Ponto de Venda',
          href: '/encontre-um-distribuidor',
        }}
        captionText="Disponível para redes de supermercados, empórios, conveniências e distribuidores regionais"
        supportingPhoto={{
          src: '/images/products/linha-potes-1-5l-composicao-frutas.webp',
          alt: 'Composição familiar de potes de 1,5L de açaí, frozens e cremes acompanhados de frutas frescas e granolas',
          badge: 'Experiência Gastronômica',
          title: 'Momento Familiar & Sobremesa Completa',
          description: 'Combinações de sabores nobres que enriquecem a mesa familiar e geram alto giro e fidelização no ponto de venda.',
        }}
      />

      {/* =====================================================================
          SEÇÃO DE APOIO & TALENTOS — TRABALHE CONOSCO (Chamada para a Página Dedicada)
          ===================================================================== */}
      <section className="py-12 md:py-16 bg-surface-green border-b border-emerald-200/80" aria-labelledby="section-careers-heading">
        <Container size="xl">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 p-6 sm:p-8 rounded-ds-xl bg-white border border-emerald-200/90 shadow-ds-sm hover:shadow-ds-card hover:border-emerald-400/50 transition-all duration-300">
            <div className="space-y-2 max-w-xl text-center lg:text-left">
              <span className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-emerald-100 text-emerald-800">
                <Users className="w-3.5 h-3.5" aria-hidden="true" />
                Oportunidades &amp; RH
              </span>
              <h2 id="section-careers-heading" className="font-display font-bold text-xl sm:text-2xl text-text-primary tracking-tight">
                Quer fazer parte da equipe Nutri Açaí?
              </h2>
              <p className="text-text-secondary text-sm leading-relaxed">
                Nossa indústria em Gravataí/RS está em contínuo crescimento. Conheça nossa área institucional de Recursos Humanos e envie seu currículo para o nosso banco de talentos.
              </p>
            </div>
            <div className="shrink-0 flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto">
              <Link
                href="/trabalhe-conosco"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-ds-md font-semibold text-sm bg-[#1a3644] text-white hover:bg-[#132934] hover:shadow-ds-md hover:-translate-y-0.5 active:translate-y-0 shadow-ds-sm transition-all duration-200 w-full sm:w-auto focus-visible:outline-[#1a3644] cursor-pointer"
              >
                <span>Conheça a área Trabalhe Conosco</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
              <a
                href="https://wa.me/5551992465908?text=Ol%C3%A1%2C%20gostaria%20de%20enviar%20meu%20curr%C3%ADculo%20para%20o%20banco%20de%20talentos%20da%20Nutri%20A%C3%A7a%C3%AD."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-ds-md font-semibold text-sm bg-white text-emerald-700 border border-emerald-300 hover:bg-emerald-50 hover:border-emerald-400 transition-all duration-200 w-full sm:w-auto focus-visible:outline-emerald-600 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" aria-hidden="true" />
                <span>Envio rápido via WhatsApp</span>
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* =====================================================================
          SEÇÃO 6 — INSTITUCIONAL & PROPÓSITO: NOSSA MISSÃO (Fundo Sólido Lilás Institucional)
          ===================================================================== */}
      <section className="py-16 md:py-24 bg-surface-alt border-y border-brand-200/80" aria-labelledby="section-mission-heading">
        <Container size="xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Coluna 1: Conteúdo Oficial da Missão & Pilares */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <Badge variant="primary" size="sm">Propósito &amp; Diretoria</Badge>
              </div>
              
              <div className="space-y-3">
                <h2 id="section-mission-heading" className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-text-primary tracking-tight">
                  Nossa Missão
                </h2>
                <p className="text-text-secondary text-base sm:text-lg leading-relaxed">
                  Na <strong className="text-text-primary font-semibold">Nutri Açaí</strong>, nossa missão é desenvolver e produzir açaí, sorbets e derivados com padrão industrial de excelência, levando sempre o sabor verdadeiro da fruta e a segurança alimentar que o mercado exige.
                </p>
                <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
                  Atendemos distribuidores, food services e marcas próprias que buscam produtos confiáveis, consistentes e com qualidade diferenciada. Tudo isso feito direto da nossa fábrica gaúcha com dedicação e padrão de excelência em cada etapa do processo.
                </p>
              </div>

              {/* 4 Pilares Institucionais Oficiais */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-ds-lg bg-white border border-brand-200/80 shadow-ds-xs hover:shadow-ds-sm hover:border-primary/50 hover:-translate-y-0.5 transition-all duration-200 space-y-1.5">
                  <div className="flex items-center gap-2 text-primary font-semibold text-sm">
                    <Factory className="w-4 h-4 text-primary shrink-0" aria-hidden="true" />
                    <span>Indústria Gaúcha</span>
                  </div>
                  <p className="text-text-muted text-xs leading-relaxed">
                    Fábrica própria em Gravataí/RS estruturada para atender demandas de Food Service, redes e distribuidores.
                  </p>
                </div>

                <div className="p-4 rounded-ds-lg bg-white border border-brand-200/80 shadow-ds-xs hover:shadow-ds-sm hover:border-emerald-500/50 hover:-translate-y-0.5 transition-all duration-200 space-y-1.5">
                  <div className="flex items-center gap-2 text-emerald-600 font-semibold text-sm">
                    <Truck className="w-4 h-4 text-emerald-600 shrink-0" aria-hidden="true" />
                    <span>Logística &amp; Entrega Refrigerada</span>
                  </div>
                  <p className="text-text-muted text-xs leading-relaxed">
                    Agilidade, pontualidade e controle rigoroso da cadeia de frio no transporte direto para sua empresa.
                  </p>
                </div>

                <div className="p-4 rounded-ds-lg bg-white border border-brand-200/80 shadow-ds-xs hover:shadow-ds-sm hover:border-secondary/50 hover:-translate-y-0.5 transition-all duration-200 space-y-1.5">
                  <div className="flex items-center gap-2 text-secondary font-semibold text-sm">
                    <Boxes className="w-4 h-4 text-secondary shrink-0" aria-hidden="true" />
                    <span>Atendimento B2B Estruturado</span>
                  </div>
                  <p className="text-text-muted text-xs leading-relaxed">
                    Fornecimento contínuo para Distribuidores Regionais, Food Service e Projetos de Marca Própria.
                  </p>
                </div>

                <div className="p-4 rounded-ds-lg bg-white border border-brand-200/80 shadow-ds-xs hover:shadow-ds-sm hover:border-brand-600/50 hover:-translate-y-0.5 transition-all duration-200 space-y-1.5">
                  <div className="flex items-center gap-2 text-brand-600 font-semibold text-sm">
                    <ShieldCheck className="w-4 h-4 text-brand-600 shrink-0" aria-hidden="true" />
                    <span>Qualidade &amp; Segurança Alimentar</span>
                  </div>
                  <p className="text-text-muted text-xs leading-relaxed">
                    Laboratório próprio integrado, laudos analíticos por lote e sabor autêntico sem concessões.
                  </p>
                </div>
              </div>

              {/* Ações Oficiais com WhatsApp Verificado */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a
                  href="https://wa.me/5551994281252?text=Ol%C3%A1%2C%20gostaria%20de%20conversar%20com%20o%20setor%20comercial%20da%20Nutri%20A%C3%A7a%C3%AD."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-ds-md font-semibold text-sm bg-emerald-600 text-white hover:bg-emerald-700 shadow-ds-sm hover:shadow-ds-md hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 focus-visible:outline-emerald-600"
                >
                  <MessageCircle className="w-4 h-4" aria-hidden="true" />
                  <span>Comercial Oficial: (51) 99428-1252</span>
                </a>
                <Button 
                  href="/a-fabrica" 
                  variant="outline" 
                  size="md"
                  className="bg-white hover:bg-brand-50 border-brand-300 text-brand-950 shadow-ds-xs"
                  rightIcon={<ArrowRight className="w-4 h-4" aria-hidden="true" />}
                >
                  Conheça nossa fábrica
                </Button>
              </div>
            </div>

            {/* Coluna 2: Apresentação Visual da Diretoria + Selo Tradição Gaúcha */}
            <div className="lg:col-span-5 space-y-4">
              {/* Card da Diretoria / Fundadores */}
              <div className="rounded-ds-2xl border border-brand-200/90 bg-white p-3.5 shadow-ds-card hover:shadow-ds-card-hover hover:border-primary/50 transition-all duration-300 overflow-hidden">
                <div className="relative aspect-[4/5] rounded-ds-xl overflow-hidden bg-brand-950">
                  <Image
                    src="/images/institutional/nossa-missao-institucional.webp"
                    alt="Diretoria da Nutri Açaí — Fundadores da Indústria em Gravataí/RS"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 420px"
                    loading="lazy"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-950/95 via-brand-950/50 to-transparent p-4 text-white">
                    <span className="inline-block px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-white/20 text-white backdrop-blur-sm mb-1">
                      Liderança Fabril
                    </span>
                    <p className="font-display font-semibold text-sm text-white">
                      Diretoria Nutri Açaí
                    </p>
                    <p className="text-white/70 text-xs">
                      Fábrica própria em Gravataí / RS
                    </p>
                  </div>
                </div>
              </div>

              {/* Card Selo Regional Gaúcho */}
              <div className="rounded-ds-xl border border-brand-200/90 bg-white p-4 shadow-ds-xs hover:shadow-ds-sm hover:border-secondary/50 transition-all duration-300 flex items-center gap-4">
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-ds-lg overflow-hidden shrink-0 border border-border/80">
                  <Image
                    src="/images/institutional/acai-tradicao-gaucha-chimarrao.webp"
                    alt="Açaí Nutri Açaí ao lado de Cuia de Chimarrão Gaúcho"
                    fill
                    className="object-cover"
                    sizes="80px"
                    loading="lazy"
                  />
                </div>
                <div className="space-y-1 min-w-0">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                    Tradição &amp; Origem
                  </span>
                  <p className="font-display font-semibold text-xs sm:text-sm text-text-primary leading-tight">
                    Do chimarrão ao açaí: Tradição gaúcha
                  </p>
                  <p className="text-[11px] text-text-muted leading-relaxed">
                    Tradição e energia que andam juntas, produzidas no RS com alto padrão de qualidade.
                  </p>
                </div>
              </div>

            </div>

          </div>
        </Container>
      </section>

      {/* =====================================================================
          SEÇÃO 7 — DISTRIBUIDOR (Fundo Sólido Verde Botânico Convidativo)
          ===================================================================== */}
      <section className="py-16 md:py-24 bg-surface-green border-b border-emerald-200/80" aria-labelledby="section-distributor-heading">
        <Container size="xl">
          <div className="rounded-ds-2xl border border-emerald-300/70 bg-white p-8 sm:p-12 md:p-16 shadow-ds-card hover:shadow-ds-card-hover transition-all duration-300">
            <div className="max-w-3xl space-y-6">
              <Badge variant="secondary" size="md">Expansão de Rede</Badge>
              <h2 id="section-distributor-heading" className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-text-primary tracking-tight">
                Expanda seu negócio com a Nutri Açaí
              </h2>
              <p className="text-text-secondary text-base sm:text-lg leading-relaxed">
                Buscamos parceiros comerciais para distribuição dos nossos produtos em diversas regiões do Brasil. 
                Tenha a segurança de trabalhar direto com uma indústria gaúcha com produção própria de açaí, cremes e frozens, 
                com mix diversificado para Food Service e varejo.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <Button 
                  href="/seja-um-distribuidor" 
                  variant="primary" 
                  size="lg"
                  rightIcon={<ArrowRight className="w-5 h-5" aria-hidden="true" />}
                >
                  Quero ser Distribuidor
                </Button>
                <Button 
                  href="/encontre-um-distribuidor" 
                  variant="outline" 
                  size="lg"
                  className="bg-white hover:bg-slate-50 border-slate-300 text-slate-800"
                >
                  Encontrar um Distribuidor
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =====================================================================
          SEÇÃO 8 — PRIVATE LABEL / MARCA PRÓPRIA
          ===================================================================== */}
      <section className="py-16 md:py-20 bg-surface-muted/50 border-t border-border" aria-labelledby="section-privatelabel-heading">
        <Container size="xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <Badge variant="neutral" size="sm">Co-Packing &amp; Terceirização</Badge>
              <h2 id="section-privatelabel-heading" className="font-display font-bold text-2xl sm:text-3xl text-text-primary tracking-tight">
                Sua marca. Nossa produção.
              </h2>
              <p className="text-text-secondary text-sm sm:text-base leading-relaxed max-w-2xl">
                Desenvolva a linha de açaí, cremes ou sorbets da sua marca com o respaldo fabril da Nutri Açaí. 
                Oferecemos estrutura industrial em Gravataí/RS e rigoroso controle de processos para a fabricação de marcas próprias.
              </p>
            </div>

            <div className="lg:col-span-4 flex lg:justify-end">
              <Button 
                href="/marca-propria" 
                variant="outline" 
                size="lg"
                rightIcon={<ArrowRight className="w-4 h-4" aria-hidden="true" />}
              >
                Conhecer Marca Própria
              </Button>
            </div>

          </div>
        </Container>
      </section>

      {/* =====================================================================
          SEÇÃO 9 — CTA FINAL DE CONVERSÃO
          ===================================================================== */}
      <section className="py-16 md:py-24 bg-brand-950 text-white" aria-labelledby="section-final-cta-heading">
        <Container size="xl">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <h2 id="section-final-cta-heading" className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
              Vamos conversar sobre o seu negócio?
            </h2>
            <p className="text-white/70 text-base sm:text-lg leading-relaxed">
              Entre em contato com nossa equipe comercial para cotações para Food Service, 
              informações sobre distribuição ou atendimento institucional.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                href="/contato" 
                variant="primary" 
                size="lg"
                className="bg-white text-brand-950 hover:bg-white/90 shadow-ds-md w-full sm:w-auto"
                rightIcon={<ArrowRight className="w-5 h-5" aria-hidden="true" />}
              >
                Fale com Nossa Equipe
              </Button>
              <Button 
                href="/produtos" 
                variant="outline" 
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 hover:border-white w-full sm:w-auto"
              >
                Explorar Produtos
              </Button>
            </div>
            <p className="text-xs text-white/50 pt-2">
              Gravataí / RS — Produção própria e fornecimento para negócios B2B
            </p>
          </div>
        </Container>
      </section>

    </div>
  );
}
