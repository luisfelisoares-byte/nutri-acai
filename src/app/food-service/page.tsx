import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { JsonLd } from '@/components/seo/JsonLd';
import { 
  getWebPageSchema, 
  getBreadcrumbSchema, 
  getCatalogItemListSchema, 
  SITE_URL, 
  OFFICIAL_PHONE_E164 
} from '@/lib/schema';
import { officialProductsCatalog } from '@/data/mock-products';
import { 
  Store, 
  Package, 
  MessageCircle, 
  ArrowRight, 
  CheckCircle2, 
  Factory, 
  Truck, 
  Boxes, 
  ChevronRight, 
  HelpCircle,
  Phone,
  Building2,
  Layers,
  Sparkles
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Açaí para Food Service',
  description: 
    'Produtos de açaí, cremes e sorbets para operações de Food Service, açaiterias e sorveterias. Produção própria com fábrica em Gravataí/RS. Atendimento B2B.',
  alternates: {
    canonical: 'https://nutriacai.com.br/food-service',
  },
  openGraph: {
    title: 'Açaí para Food Service | Nutri Açaí',
    description: 
      'Produtos de açaí, cremes e sorbets para operações de Food Service, açaiterias e sorveterias. Produção própria com fábrica em Gravataí/RS. Atendimento B2B.',
    url: 'https://nutriacai.com.br/food-service',
    siteName: 'Nutri Açaí',
    locale: 'pt_BR',
    type: 'website',
    images: [
      {
        url: '/images/brand/og-banner-1200x630.jpg',
        width: 1200,
        height: 630,
        alt: 'Açaí para Food Service Nutri Açaí — Operações Profissionais',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Açaí para Food Service | Nutri Açaí',
    description: 
      'Produtos de açaí, cremes e sorbets para operações de Food Service, açaiterias e sorveterias. Produção própria com fábrica em Gravataí/RS. Atendimento B2B.',
    images: ['/images/brand/og-banner-1200x630.jpg'],
  },
};

const WHATSAPP_FOOD_SERVICE_URL = 
  'https://wa.me/5551994281252?text=Ol%C3%A1!%20Tenho%20interesse%20nas%20solu%C3%A7%C3%B5es%20Food%20Service%20da%20Nutri%20A%C3%A7a%C3%AD%20e%20gostaria%20de%20falar%20com%20a%20equipe%20comercial.';

export default function FoodServicePage() {
  // Filtra rigorosamente os produtos Food Service confirmados no catálogo oficial
  const foodServiceProducts = officialProductsCatalog.filter(
    (product) => product.category === 'food-service'
  );

  return (
    <div className="flex flex-col w-full bg-surface text-text-primary">
      {/* =====================================================================
          DADOS ESTRUTURADOS (SCHEMA.ORG JSON-LD)
          ===================================================================== */}
      <JsonLd 
        data={getWebPageSchema(
          `${SITE_URL}/food-service`,
          'Açaí para Food Service | Nutri Açaí',
          'Produtos de açaí, cremes e sorbets para operações de Food Service, açaiterias e sorveterias. Produção própria com fábrica em Gravataí/RS. Atendimento B2B.'
        )} 
      />
      <JsonLd 
        data={getBreadcrumbSchema([
          { name: 'Início', url: SITE_URL },
          { name: 'Food Service', url: `${SITE_URL}/food-service` }
        ])} 
      />
      <JsonLd 
        data={getCatalogItemListSchema(foodServiceProducts)} 
      />

      {/* =====================================================================
          SEÇÃO 1 — HERO COMERCIAL
          ===================================================================== */}
      <section className="relative overflow-hidden pt-12 pb-16 md:pt-20 md:pb-24 bg-surface-alt border-b border-brand-200/80">
        <Container size="xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2">
                <Badge variant="primary" size="md" icon={<Store className="w-3.5 h-3.5 text-primary" />}>
                  Linha Profissional • Food Service
                </Badge>
              </div>

              <h1 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] text-text-primary tracking-tight leading-[1.15]">
                Açaí para Food Service
              </h1>

              <p className="text-text-secondary text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0">
                A <strong className="text-text-primary font-semibold">Nutri Açaí</strong> é fabricante de açaí, cremes, sorbets e frozens para operações comerciais de alimentação. 
                Produção própria em nossa indústria em Gravataí/RS com embalagens em caixas de 5L e 10L e baldes para atender açaiterias, sorveterias e lanchonetes no atacado.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <a
                  href={WHATSAPP_FOOD_SERVICE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-ds-md font-semibold text-sm sm:text-base bg-emerald-600 hover:bg-emerald-700 text-white shadow-ds-sm hover:shadow-ds-md transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 select-none active:scale-[0.98]"
                >
                  <MessageCircle className="w-5 h-5" aria-hidden="true" />
                  <span>Solicitar Atendimento Food Service</span>
                </a>

                <Button 
                  href="#embalagens" 
                  variant="outline" 
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  Ver Embalagens e Formatos
                </Button>
              </div>

              {/* Indicadores Fatuais Confirmados */}
              <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-text-muted">
                <span className="flex items-center gap-1.5 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-feedback-success" />
                  Fábrica Própria em Gravataí/RS
                </span>
                <span className="flex items-center gap-1.5 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-feedback-success" />
                  Formatos de 5L, 10L, 3,6L e 12L
                </span>
                <span className="flex items-center gap-1.5 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-feedback-success" />
                  Atendimento B2B
                </span>
              </div>
            </div>

            {/* Imagem Oficial Food Service (WA0018) */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-md aspect-[4/3] rounded-ds-2xl overflow-hidden border border-brand-200/80 shadow-ds-card bg-white">
                <Image
                  src="/images/products/food-service-extracao-acai.webp"
                  alt="Açaí Food Service Nutri Açaí — Operação profissional para açaiterias e sorveterias"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 480px"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-950/70 via-transparent to-transparent flex items-end p-5">
                  <p className="text-white text-xs sm:text-sm font-medium">
                    Aplicação profissional para operações de alto giro
                  </p>
                </div>
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* =====================================================================
          SEÇÃO 2 — PROPOSTA DE VALOR
          ===================================================================== */}
      <section className="py-14 md:py-20 bg-surface-green border-b border-emerald-200/80" aria-labelledby="section-value-heading">
        <Container size="xl" className="space-y-10">
          <div className="max-w-3xl space-y-3 text-center md:text-left">
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-800">
              Estrutura para Negócios
            </span>
            <h2 id="section-value-heading" className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-text-primary tracking-tight">
              Fornecimento Direto da Fábrica para Operações Comerciais
            </h2>
            <p className="text-text-secondary text-base leading-relaxed">
              Desenvolvemos produtos pensados para o dia a dia de cozinhas comerciais, buffets e balcões de atendimento, 
              garantindo que sua empresa trabalhe com linhas completas e padronizadas.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-ds-2xl border border-emerald-200/80 bg-white shadow-ds-sm hover:border-emerald-600/50 hover:shadow-ds-card-hover hover:-translate-y-1.5 transition-all duration-300 space-y-3">
              <div className="w-10 h-10 rounded-ds-md bg-emerald-100 flex items-center justify-center text-emerald-700 shadow-ds-xs">
                <Factory className="w-5 h-5" aria-hidden="true" />
              </div>
              <h3 className="font-display font-semibold text-lg text-text-primary">
                Produção Própria
              </h3>
              <p className="text-text-secondary text-xs sm:text-sm leading-relaxed">
                Fabricação e envase realizados em nossa própria unidade fabril em Gravataí/RS.
              </p>
            </div>

            <div className="p-6 rounded-ds-2xl border border-emerald-200/80 bg-white shadow-ds-sm hover:border-emerald-600/50 hover:shadow-ds-card-hover hover:-translate-y-1.5 transition-all duration-300 space-y-3">
              <div className="w-10 h-10 rounded-ds-md bg-emerald-100 flex items-center justify-center text-emerald-700 shadow-ds-xs">
                <Boxes className="w-5 h-5" aria-hidden="true" />
              </div>
              <h3 className="font-display font-semibold text-lg text-text-primary">
                Formatos Food Service
              </h3>
              <p className="text-text-secondary text-xs sm:text-sm leading-relaxed">
                Opções em caixas de 5L e 10L e baldes plásticos vedados de 3,6L e 12L para atender diferentes fluxos.
              </p>
            </div>

            <div className="p-6 rounded-ds-2xl border border-emerald-200/80 bg-white shadow-ds-sm hover:border-emerald-600/50 hover:shadow-ds-card-hover hover:-translate-y-1.5 transition-all duration-300 space-y-3">
              <div className="w-10 h-10 rounded-ds-md bg-emerald-100 flex items-center justify-center text-emerald-700 shadow-ds-xs">
                <Layers className="w-5 h-5" aria-hidden="true" />
              </div>
              <h3 className="font-display font-semibold text-lg text-text-primary">
                Mix Completo
              </h3>
              <p className="text-text-secondary text-xs sm:text-sm leading-relaxed">
                Açaí tradicional e zero açúcar, além de cremes, sorbets e frozens para enriquecer o cardápio.
              </p>
            </div>

            <div className="p-6 rounded-ds-2xl border border-emerald-200/80 bg-white shadow-ds-sm hover:border-emerald-600/50 hover:shadow-ds-card-hover hover:-translate-y-1.5 transition-all duration-300 space-y-3">
              <div className="w-10 h-10 rounded-ds-md bg-emerald-100 flex items-center justify-center text-emerald-700 shadow-ds-xs">
                <Building2 className="w-5 h-5" aria-hidden="true" />
              </div>
              <h3 className="font-display font-semibold text-lg text-text-primary">
                Canal B2B Dedicado
              </h3>
              <p className="text-text-secondary text-xs sm:text-sm leading-relaxed">
                Atendimento estruturado para estabelecimentos de alimentação e distribuidores regionais.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* =====================================================================
          SEÇÃO 3 — EMBALAGENS E FORMATOS
          ===================================================================== */}
      <section id="embalagens" className="py-14 md:py-20 bg-surface-alt border-b border-brand-200/80" aria-labelledby="section-packaging-heading">
        <Container size="xl" className="space-y-10">
          <div className="max-w-3xl space-y-3">
            <Badge variant="primary" size="sm">Embalagens Oficiais</Badge>
            <h2 id="section-packaging-heading" className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-text-primary tracking-tight">
              Formatos Disponíveis para Food Service
            </h2>
            <p className="text-text-secondary text-base leading-relaxed">
              Consulte as opções de embalagens industriais do portfólio Nutri Açaí desenvolvidas para o armazenamento e uso profissional.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Card 1: Caixa 5L */}
            <div className="rounded-ds-2xl border border-brand-200/80 bg-white p-6 space-y-4 shadow-ds-sm hover:shadow-ds-card-hover hover:border-primary/60 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group">
              <div className="space-y-3">
                <div className="aspect-square rounded-ds-xl bg-gradient-to-b from-slate-50 to-slate-100/70 border border-slate-200/70 p-4 flex items-center justify-center relative overflow-hidden shadow-[inset_0_1px_3px_rgba(0,0,0,0.03)]">
                  <Image
                    src="/images/products/caixa-5l-acai-guarana.webp"
                    alt="Caixa de 5 litros de Açaí com Guaraná Nutri Açaí para Food Service"
                    width={220}
                    height={220}
                    className="object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.15)] group-hover:scale-108 transition-all duration-300"
                  />
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-bold text-primary uppercase tracking-wider">Formato Caixa</span>
                  <h3 className="font-display font-bold text-lg text-text-primary">Caixa de 5 Litros</h3>
                  <p className="text-xs text-text-muted">
                    Peso bruto: aprox. 4,7 kg para açaí e aprox. 4,0 kg para cremes e sorbets.
                  </p>
                </div>
              </div>
              <p className="text-text-secondary text-xs leading-relaxed border-t border-brand-100 pt-3">
                Utilizada amplamente em açaiterias, sorveterias e lanchonetes para armazenamento em freezers comerciais.
              </p>
            </div>

            {/* Card 2: Caixa 10L */}
            <div className="rounded-ds-2xl border border-brand-200/80 bg-white p-6 space-y-4 shadow-ds-sm hover:shadow-ds-card-hover hover:border-primary/60 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group">
              <div className="space-y-3">
                <div className="aspect-square rounded-ds-xl bg-gradient-to-b from-slate-50 to-slate-100/70 border border-slate-200/70 p-4 flex items-center justify-center relative overflow-hidden shadow-[inset_0_1px_3px_rgba(0,0,0,0.03)]">
                  <Image
                    src="/images/products/caixa-10l-acai-guarana.webp"
                    alt="Caixa de 10 litros de Açaí com Guaraná Nutri Açaí para Food Service"
                    width={220}
                    height={220}
                    className="object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.15)] group-hover:scale-108 transition-all duration-300"
                  />
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-bold text-primary uppercase tracking-wider">Alta Litragem</span>
                  <h3 className="font-display font-bold text-lg text-text-primary">Caixa de 10 Litros</h3>
                  <p className="text-xs text-text-muted">
                    Embalagem de 10 litros de alta capacidade para operações de grande consumo.
                  </p>
                </div>
              </div>
              <p className="text-text-secondary text-xs leading-relaxed border-t border-brand-100 pt-3">
                Indicada para operações de alto giro e redes que demandam volume contínuo de açaí com guaraná.
              </p>
            </div>

            {/* Card 3: Balde 3,6L */}
            <div className="rounded-ds-2xl border border-brand-200/80 bg-white p-6 space-y-4 shadow-ds-sm hover:shadow-ds-card-hover hover:border-primary/60 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group">
              <div className="space-y-3">
                <div className="aspect-square rounded-ds-xl bg-gradient-to-b from-slate-50 to-slate-100/70 border border-slate-200/70 p-4 flex items-center justify-center relative overflow-hidden shadow-[inset_0_1px_3px_rgba(0,0,0,0.03)]">
                  <Image
                    src="/images/products/balde-3-6l-acai-guarana.webp"
                    alt="Balde de 3,6 litros de Açaí com Guaraná Nutri Açaí para Food Service"
                    width={220}
                    height={220}
                    className="object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.15)] group-hover:scale-108 transition-all duration-300"
                  />
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-bold text-primary uppercase tracking-wider">Balde Plástico</span>
                  <h3 className="font-display font-bold text-lg text-text-primary">Balde de 3,6 Litros</h3>
                  <p className="text-xs text-text-muted">
                    Balde com tampa de vedação segura e alça plástica resistente.
                  </p>
                </div>
              </div>
              <p className="text-text-secondary text-xs leading-relaxed border-t border-brand-100 pt-3">
                Prático para cozinhas profissionais, pequenos buffets e operações com espaço de freezer compacto.
              </p>
            </div>

            {/* Card 4: Balde 12L */}
            <div className="rounded-ds-2xl border border-brand-200/80 bg-white p-6 space-y-4 shadow-ds-sm hover:shadow-ds-card-hover hover:border-primary/60 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group">
              <div className="space-y-3">
                <div className="aspect-square rounded-ds-xl bg-gradient-to-b from-slate-50 to-slate-100/70 border border-slate-200/70 p-4 flex items-center justify-center relative overflow-hidden shadow-[inset_0_1px_3px_rgba(0,0,0,0.03)]">
                  <Image
                    src="/images/products/balde-12l-acai-guarana.webp"
                    alt="Balde industrial de 12 litros de Açaí com Guaraná Nutri Açaí"
                    width={220}
                    height={220}
                    className="object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.15)] group-hover:scale-108 transition-all duration-300"
                  />
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-bold text-primary uppercase tracking-wider">Balde Industrial</span>
                  <h3 className="font-display font-bold text-lg text-text-primary">Balde de 12 Litros</h3>
                  <p className="text-xs text-text-muted">
                    Balde industrial vedado para cozinhas e buffets de sobremesas.
                  </p>
                </div>
              </div>
              <p className="text-text-secondary text-xs leading-relaxed border-t border-brand-100 pt-3">
                Embalagem sanitária resistente para cozinhas industriais, pistas de buffet e grandes estabelecimentos.
              </p>
            </div>

          </div>
        </Container>
      </section>

      {/* =====================================================================
          SEÇÃO 4 — VITRINE DE PRODUTOS FOOD SERVICE (15 PRODUTOS REAIS)
          ===================================================================== */}
      <section id="produtos" className="py-14 md:py-20 bg-surface-muted border-b border-border" aria-labelledby="section-catalog-heading">
        <Container size="xl" className="space-y-10">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-2">
              <Badge variant="primary" size="sm">Linha de Produtos</Badge>
              <h2 id="section-catalog-heading" className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-text-primary tracking-tight">
                Produtos Food Service do Catálogo Oficial
              </h2>
              <p className="text-text-secondary text-sm sm:text-base max-w-2xl">
                Confira os produtos disponíveis nas categorias de Açaí, Cremes, Sorbets e Frozens para o setor de alimentação comercial.
              </p>
            </div>
            <div>
              <Button 
                href="/produtos?cat=food-service" 
                variant="outline" 
                size="md"
                rightIcon={<ChevronRight className="w-4 h-4" aria-hidden="true" />}
              >
                Ver no Catálogo Completo
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {foodServiceProducts.map((product) => (
              <div 
                key={product.id}
                className="rounded-ds-2xl bg-white border border-slate-200/90 p-5 flex flex-col justify-between space-y-4 shadow-ds-sm hover:border-primary/60 hover:shadow-ds-card-hover hover:-translate-y-1.5 transition-all duration-300"
              >
                <div className="space-y-3">
                  <div className="aspect-square rounded-ds-xl bg-gradient-to-b from-slate-50 to-slate-100/70 border border-slate-200/70 flex items-center justify-center p-3 relative overflow-hidden shadow-[inset_0_1px_3px_rgba(0,0,0,0.03)] group">
                    {product.image && (
                      <Image
                        src={product.image.src}
                        alt={product.image.alt}
                        width={240}
                        height={240}
                        className="object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.15)] group-hover:scale-108 transition-all duration-300"
                      />
                    )}
                    <span className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded text-[10px] font-bold bg-brand-950 text-white uppercase tracking-wider shadow-xs">
                      {product.packagingDisplay}
                    </span>
                  </div>

                  <div className="space-y-1.5">
                    <h3 className="font-display font-bold text-base text-text-primary">
                      {product.name}
                    </h3>
                    <p className="text-text-secondary text-xs leading-relaxed line-clamp-2">
                      {product.description}
                    </p>
                  </div>
                </div>

                <div className="space-y-3 pt-3 border-t border-slate-100">
                  <div className="flex items-center justify-between text-xs text-text-muted">
                    <span>{product.volume ? `Volume: ${product.volume}` : ''}</span>
                    {product.weight && <span>{product.weight}</span>}
                  </div>
                  <a
                    href={`https://wa.me/5551994281252?text=${encodeURIComponent(`Olá! Gostaria de cotar o produto Food Service: ${product.name} (${product.packagingDisplay}).`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 w-full py-2.5 px-3 rounded-ds-md text-xs font-semibold text-text-primary bg-surface-muted hover:bg-emerald-600/10 hover:text-emerald-700 border border-border hover:border-emerald-600/40 transition-all duration-200 focus-visible:outline-primary active:scale-[0.98]"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" aria-hidden="true" />
                    <span>Cotar no WhatsApp</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

        </Container>
      </section>

      {/* =====================================================================
          SEÇÃO 5 — PARA QUEM É
          ===================================================================== */}
      <section className="py-14 md:py-20 bg-surface-alt border-b border-brand-200/80" aria-labelledby="section-audience-heading">
        <Container size="xl" className="space-y-8">
          <div className="max-w-3xl space-y-3 text-center md:text-left">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">
              Canais de Atendimento
            </span>
            <h2 id="section-audience-heading" className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-text-primary tracking-tight">
              Para Quem é a Linha Food Service da Nutri Açaí?
            </h2>
            <p className="text-text-secondary text-base leading-relaxed">
              Atendemos operações comerciais e compradores profissionais que utilizam açaí e produtos congelados no preparo e venda ao consumidor final.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-ds-2xl border border-brand-200/80 bg-white shadow-ds-sm hover:shadow-ds-card-hover hover:border-primary/60 hover:-translate-y-1.5 transition-all duration-300 space-y-3">
              <h3 className="font-display font-bold text-base text-text-primary flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-ds-md bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Store className="w-4 h-4" />
                </div>
                Açaiterias &amp; Sorveterias
              </h3>
              <p className="text-text-secondary text-xs sm:text-sm leading-relaxed">
                Estabelecimentos focados na venda de açaí na tigela, copos montados e taças, com demanda por caixas e baldes de alto giro.
              </p>
            </div>

            <div className="p-6 rounded-ds-2xl border border-brand-200/80 bg-white shadow-ds-sm hover:shadow-ds-card-hover hover:border-secondary/60 hover:-translate-y-1.5 transition-all duration-300 space-y-3">
              <h3 className="font-display font-bold text-base text-text-primary flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-ds-md bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
                  <Building2 className="w-4 h-4" />
                </div>
                Restaurantes &amp; Lanchonetes
              </h3>
              <p className="text-text-secondary text-xs sm:text-sm leading-relaxed">
                Operações de alimentação que incluem açaí e cremes no cardápio de sobremesas ou como item de lanches rápidos.
              </p>
            </div>

            <div className="p-6 rounded-ds-2xl border border-brand-200/80 bg-white shadow-ds-sm hover:shadow-ds-card-hover hover:border-accent/60 hover:-translate-y-1.5 transition-all duration-300 space-y-3">
              <h3 className="font-display font-bold text-base text-text-primary flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-ds-md bg-accent/10 flex items-center justify-center text-accent shrink-0">
                  <Boxes className="w-4 h-4" />
                </div>
                Buffets &amp; Cozinhas Comerciais
              </h3>
              <p className="text-text-secondary text-xs sm:text-sm leading-relaxed">
                Pistas de sobremesa self-service e cozinhas industriais que utilizam embalagens de 5L, 10L e baldes vedados.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* =====================================================================
          SEÇÃO 6 — POR QUE NUTRI AÇAÍ
          ===================================================================== */}
      <section className="py-14 md:py-20 bg-surface-green border-b border-emerald-200/80" aria-labelledby="section-why-heading">
        <Container size="xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-emerald-800">
                  Origem Fabril
                </span>
                <h2 id="section-why-heading" className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-text-primary tracking-tight">
                  Fabricação Própria em Gravataí / RS
                </h2>
                <p className="text-text-secondary text-base leading-relaxed">
                  A Nutri Açaí iniciou suas atividades industriais em 2022 no município de Gravataí, no Rio Grande do Sul. 
                  Toda a nossa linha de açaí, cremes, sorbets e frozens é produzida e envasada diretamente em nossa planta industrial.
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-3.5 p-4 rounded-ds-xl bg-white border border-emerald-200/80 shadow-ds-xs">
                  <CheckCircle2 className="w-5 h-5 text-feedback-success shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="font-bold text-sm text-text-primary">Parque Fabril Próprio</p>
                    <p className="text-text-secondary text-xs mt-0.5">
                      Controle direto das etapas de processamento e envase em instalações industriais em Gravataí/RS.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4 rounded-ds-xl bg-white border border-emerald-200/80 shadow-ds-xs">
                  <CheckCircle2 className="w-5 h-5 text-feedback-success shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="font-bold text-sm text-text-primary">Portfólio Estruturado</p>
                    <p className="text-text-secondary text-xs mt-0.5">
                      Variedade de sabores tradicionais, versões zero açúcar e cremes complementares de frutas.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4 rounded-ds-xl bg-white border border-emerald-200/80 shadow-ds-xs">
                  <CheckCircle2 className="w-5 h-5 text-feedback-success shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="font-bold text-sm text-text-primary">Conexão Direta B2B</p>
                    <p className="text-text-secondary text-xs mt-0.5">
                      Atendimento comercial direto com a equipe da indústria para apoiar sua operação.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <Link 
                  href="/a-fabrica" 
                  className="inline-flex items-center text-sm font-semibold text-primary hover:text-primary-hover gap-1.5 focus-visible:outline-primary rounded-ds-sm"
                >
                  <span>Conheça nossa infraestrutura fabril</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="p-6 sm:p-8 rounded-ds-2xl bg-brand-950 text-white space-y-4 shadow-ds-md">
                <h3 className="font-display font-bold text-xl text-white">
                  Precisa de Marca Própria?
                </h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  Além do portfólio oficial Nutri Açaí, nossa indústria oferece estrutura de envase e terceirização fabril para redes e marcas que desejam ter sua própria linha de produtos.
                </p>
                <div className="pt-2">
                  <Button 
                    href="/marca-propria" 
                    variant="outline" 
                    size="md"
                    className="border-white/30 text-white hover:bg-white/10"
                  >
                    Conhecer Marca Própria (Private Label)
                  </Button>
                </div>
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* =====================================================================
          SEÇÃO 7 — COMO ENTRAR EM CONTATO
          ===================================================================== */}
      <section className="py-14 md:py-20 bg-surface-alt border-b border-brand-200/80" aria-labelledby="section-process-heading">
        <Container size="xl" className="space-y-10">
          <div className="max-w-3xl space-y-3 text-center md:text-left">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">
              Fluxo de Atendimento
            </span>
            <h2 id="section-process-heading" className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-text-primary tracking-tight">
              Como Solicitar Atendimento para Food Service
            </h2>
            <p className="text-text-secondary text-base leading-relaxed">
              O processo para iniciar o relacionamento comercial com a Nutri Açaí é direto e conduzido pela nossa equipe comercial.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-ds-2xl border border-brand-200/80 bg-white shadow-ds-sm hover:border-primary/60 hover:shadow-ds-card-hover hover:-translate-y-1.5 transition-all duration-300 space-y-3">
              <div className="w-9 h-9 rounded-full bg-primary text-white font-bold text-sm flex items-center justify-center shadow-ds-xs">
                1
              </div>
              <h3 className="font-display font-bold text-lg text-text-primary">
                Entre em Contato
              </h3>
              <p className="text-text-secondary text-xs sm:text-sm leading-relaxed">
                Fale com a Nutri Açaí pelo WhatsApp comercial oficial ou preencha nosso formulário de contato.
              </p>
            </div>

            <div className="p-6 rounded-ds-2xl border border-brand-200/80 bg-white shadow-ds-sm hover:border-primary/60 hover:shadow-ds-card-hover hover:-translate-y-1.5 transition-all duration-300 space-y-3">
              <div className="w-9 h-9 rounded-full bg-primary text-white font-bold text-sm flex items-center justify-center shadow-ds-xs">
                2
              </div>
              <h3 className="font-display font-bold text-lg text-text-primary">
                Informe sua Necessidade
              </h3>
              <p className="text-text-secondary text-xs sm:text-sm leading-relaxed">
                Conte-nos sobre o tipo de estabelecimento, a cidade onde atua e as linhas de produtos de seu interesse.
              </p>
            </div>

            <div className="p-6 rounded-ds-2xl border border-brand-200/80 bg-white shadow-ds-sm hover:border-primary/60 hover:shadow-ds-card-hover hover:-translate-y-1.5 transition-all duration-300 space-y-3">
              <div className="w-9 h-9 rounded-full bg-primary text-white font-bold text-sm flex items-center justify-center shadow-ds-xs">
                3
              </div>
              <h3 className="font-display font-bold text-lg text-text-primary">
                Receba o Atendimento
              </h3>
              <p className="text-text-secondary text-xs sm:text-sm leading-relaxed">
                A equipe comercial da Nutri Açaí orientará as informações sobre produtos e o próximo passo para o fornecimento.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* =====================================================================
          SEÇÃO 8 — FAQ (PERGUNTAS FREQUENTES B2B)
          ===================================================================== */}
      <section className="py-14 md:py-20 bg-surface-muted border-b border-border" aria-labelledby="section-faq-heading">
        <Container size="xl" className="space-y-10">
          <div className="max-w-3xl space-y-3 text-center md:text-left">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">
              Tire Suas Dúvidas
            </span>
            <h2 id="section-faq-heading" className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-text-primary tracking-tight">
              Perguntas Frequentes sobre Food Service
            </h2>
            <p className="text-text-secondary text-base leading-relaxed">
              Respostas objetivas sobre a atuação e o fornecimento de produtos Food Service da Nutri Açaí.
            </p>
          </div>

          <div className="max-w-4xl space-y-4">
            
            <div className="p-6 rounded-ds-2xl border border-slate-200/90 bg-white shadow-ds-xs space-y-2">
              <h3 className="font-display font-bold text-base text-text-primary flex items-start gap-3">
                <HelpCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                <span>Quem pode solicitar atendimento Food Service com a Nutri Açaí?</span>
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed pl-8">
                Atendemos estabelecimentos comerciais e compradores B2B, como açaiterias, sorveterias, lanchonetes, restaurantes, buffets e redes de alimentação que utilizam produtos no atacado.
              </p>
            </div>

            <div className="p-6 rounded-ds-2xl border border-slate-200/90 bg-white shadow-ds-xs space-y-2">
              <h3 className="font-display font-bold text-base text-text-primary flex items-start gap-3">
                <HelpCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                <span>Quais produtos e embalagens compõem a linha Food Service da Nutri Açaí?</span>
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed pl-8">
                Disponibilizamos caixas de 5 litros (açaí com guaraná, natural, banana, morango, zero açúcar e cremes), caixas de 10 litros e baldes plásticos vedados de 3,6 litros e 12 litros.
              </p>
            </div>

            <div className="p-6 rounded-ds-2xl border border-slate-200/90 bg-white shadow-ds-xs space-y-2">
              <h3 className="font-display font-bold text-base text-text-primary flex items-start gap-3">
                <HelpCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                <span>Onde fica localizada a fábrica da Nutri Açaí?</span>
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed pl-8">
                Nossa indústria está sediada no município de Gravataí, no Rio Grande do Sul, onde realizamos a fabricação própria e o envase de todas as linhas do catálogo.
              </p>
            </div>

            <div className="p-6 rounded-ds-2xl border border-slate-200/90 bg-white shadow-ds-xs space-y-2">
              <h3 className="font-display font-bold text-base text-text-primary flex items-start gap-3">
                <HelpCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                <span>A empresa também oferece produtos complementares além do açaí tradicional?</span>
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed pl-8">
                Sim. A linha Food Service inclui também cremes (Leitinho, Avelã, Maracujá), sorbets de frutas (Cupuaçu e Pitaya) e frozens (Natural e Morango).
              </p>
            </div>

            <div className="p-6 rounded-ds-2xl border border-slate-200/90 bg-white shadow-ds-xs space-y-2">
              <h3 className="font-display font-bold text-base text-text-primary flex items-start gap-3">
                <HelpCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                <span>Como entrar em contato com a equipe comercial?</span>
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed pl-8">
                Você pode entrar em contato diretamente pelo WhatsApp comercial oficial (+55 51 99428-1252) ou pelos canais disponíveis na nossa página de contato.
              </p>
            </div>

          </div>
        </Container>
      </section>

      {/* =====================================================================
          SEÇÃO 9 — CTA FINAL DE CONVERSÃO
          ===================================================================== */}
      <section className="py-16 md:py-24 bg-brand-950 text-white" aria-labelledby="foodservice-cta-heading">
        <Container size="xl">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <h2 id="foodservice-cta-heading" className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
              Falar com a Nutri Açaí
            </h2>
            <p className="text-white/70 text-base sm:text-lg leading-relaxed">
              Converse com a nossa equipe comercial e conheça as opções de fornecimento de açaí, cremes, sorbets e frozens para a sua empresa.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={WHATSAPP_FOOD_SERVICE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-ds-md font-semibold text-base bg-emerald-600 hover:bg-emerald-700 text-white shadow-ds-md transition-all duration-200 select-none"
              >
                <MessageCircle className="w-5 h-5" aria-hidden="true" />
                <span>Falar no WhatsApp Oficial</span>
              </a>
              <Button 
                href="/produtos?cat=food-service" 
                variant="outline" 
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 hover:border-white w-full sm:w-auto"
              >
                Consultar Catálogo Food Service
              </Button>
            </div>
            <p className="text-xs text-white/50 pt-2">
              Gravataí / RS — Atendimento comercial para estabelecimentos de alimentação
            </p>
          </div>
        </Container>
      </section>

    </div>
  );
}
