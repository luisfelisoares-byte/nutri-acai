import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { JsonLd } from '@/components/seo/JsonLd';
import { getWebPageSchema, getBreadcrumbSchema, SITE_URL } from '@/lib/schema';
import { 
  Factory, 
  ShieldCheck, 
  FlaskConical, 
  Layers, 
  Box, 
  Building2, 
  ArrowRight, 
  CheckCircle2, 
  Store, 
  ShoppingBag, 
  TrendingUp, 
  Sparkles,
  Scale,
  Info,
  MessageCircle
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Marca Própria & Terceirização (Private Label)',
  description: 
    'Terceirização e Co-Packing de açaí, cremes, sorbets e frozens para marcas próprias. Fabricação própria em Gravataí/RS com rigoroso padrão de envase.',
  alternates: {
    canonical: 'https://nutriacai.com.br/marca-propria',
  },
  openGraph: {
    title: 'Marca Própria & Terceirização (Private Label) | Nutri Açaí',
    description: 
      'Terceirização e Co-Packing de açaí, cremes, sorbets e frozens para marcas próprias. Fabricação própria em Gravataí/RS com rigoroso padrão de envase.',
    url: 'https://nutriacai.com.br/marca-propria',
    siteName: 'Nutri Açaí',
    locale: 'pt_BR',
    type: 'website',
    images: [
      {
        url: '/images/brand/og-banner-1200x630.jpg',
        width: 1200,
        height: 630,
        alt: 'Marca Própria e Private Label Nutri Açaí',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Marca Própria & Terceirização (Private Label) | Nutri Açaí',
    description: 
      'Terceirização e Co-Packing de açaí, cremes, sorbets e frozens para marcas próprias. Fabricação própria em Gravataí/RS com rigoroso padrão de envase.',
    images: ['/images/brand/og-banner-1200x630.jpg'],
  },
};

export default function MarcaPropriaPage() {
  return (
    <div className="flex flex-col w-full bg-surface text-text-primary">
      {/* Schema.org: Dados Estruturados da Página Marca Própria */}
      <JsonLd 
        data={getWebPageSchema(
          `${SITE_URL}/marca-propria`,
          'Marca Própria & Terceirização (Private Label) | Nutri Açaí',
          'Terceirização e Co-Packing de açaí, cremes, sorbets e frozens para marcas próprias. Fabricação própria em Gravataí/RS com rigoroso padrão de envase.'
        )} 
      />
      <JsonLd 
        data={getBreadcrumbSchema([
          { name: 'Início', url: SITE_URL },
          { name: 'Marca Própria', url: `${SITE_URL}/marca-propria` }
        ])} 
      />

      {/* =====================================================================
          SEÇÃO 1 — HERO DA CENTRAL PRIVATE LABEL
          ===================================================================== */}
      <section className="relative overflow-hidden pt-12 pb-16 md:pt-20 md:pb-24 bg-surface-alt border-b border-brand-200/80">
        <Container size="xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Mensagem Principal */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2">
                <Badge variant="primary" size="md" icon={<Factory className="w-3.5 h-3.5 text-primary" />}>
                  Marca Própria • Private Label &amp; Co-Packing
                </Badge>
              </div>

              <h1 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] text-text-primary tracking-tight leading-[1.15]">
                Marca Própria de Açaí &amp; Terceirização (Private Label)
              </h1>

              <p className="text-text-secondary text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Sua marca com a nossa estrutura fabril em Gravataí/RS. A <strong className="text-text-primary font-semibold">Nutri Açaí</strong> oferece soluções industriais de envase e fabricação de açaí, cremes e frozens para redes, franquias e empresas que buscam padrão gastronômico, segurança técnica e regularidade de fornecimento.
              </p>

              {/* CTAs Principais */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Button 
                  href="/contato" 
                  variant="primary" 
                  size="lg"
                  rightIcon={<ArrowRight className="w-4 h-4" />}
                  className="w-full sm:w-auto shadow-sm"
                >
                  Quero desenvolver minha marca
                </Button>
                <Button 
                  href="/produtos" 
                  variant="outline" 
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  Conhecer nossos produtos
                </Button>
              </div>

              {/* Indicadores Resumidos de Autoridade Fabril */}
              <div className="pt-6 border-t border-border grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
                <div>
                  <div className="text-xl sm:text-2xl font-display font-bold text-primary">Escala</div>
                  <div className="text-xs text-text-secondary font-medium">Capacidade fabril</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-display font-bold text-text-primary">Própria</div>
                  <div className="text-xs text-text-secondary font-medium">Produção industrial</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-display font-bold text-text-primary">Rigoroso</div>
                  <div className="text-xs text-text-secondary font-medium">Controle sanitário</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-display font-bold text-text-primary">RS &amp; Sul</div>
                  <div className="text-xs text-text-secondary font-medium">Fornecimento B2B</div>
                </div>
              </div>
            </div>

            {/* Painel Visual / Card Conceitual */}
            <div className="lg:col-span-5">
              <div className="relative rounded-ds-2xl bg-white border border-brand-200/80 p-6 sm:p-8 shadow-ds-card space-y-6">
                <div className="flex items-center justify-between border-b border-border pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-text-primary">Modelo de Terceirização B2B</p>
                      <p className="text-xs text-text-secondary">Viabilização fabril sob demanda</p>
                    </div>
                  </div>
                  <Badge variant="outline" size="sm">Industrial</Badge>
                </div>

                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-surface-muted border border-border/80 flex items-start gap-3">
                    <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0 mt-0.5">
                      <Building2 className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-text-primary">A Sua Empresa</h3>
                      <p className="text-xs text-text-secondary mt-0.5">
                        Define a marca, a identidade visual, o posicionamento comercial e os canais de distribuição.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-surface-muted border border-border/80 flex items-start gap-3">
                    <div className="w-7 h-7 rounded-lg bg-brand-light/20 flex items-center justify-center text-primary shrink-0 mt-0.5">
                      <Factory className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-text-primary">A Nutri Açaí</h3>
                      <p className="text-xs text-text-secondary mt-0.5">
                        Entra com a fábrica em Gravataí/RS, escala industrial contínua, controle de qualidade e envase padronizado.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-surface-muted border border-border/80 flex items-start gap-3">
                    <div className="w-7 h-7 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary shrink-0 mt-0.5">
                      <TrendingUp className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-text-primary">O Resultado Comercial</h3>
                      <p className="text-xs text-text-secondary mt-0.5">
                        Sua linha própria no mercado com rapidez de implantação e sem o investimento de capital em uma planta fabril.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-brand-50 border border-brand-200/60 text-xs text-brand-dark leading-relaxed flex items-center gap-2.5">
                  <Info className="w-4 h-4 text-primary shrink-0" />
                  <span>Projetos sujeitos a análise de viabilidade técnica e parâmetros operacionais.</span>
                </div>
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* =====================================================================
          SEÇÃO 2 — O QUE É MARCA PRÓPRIA?
          ===================================================================== */}
      <section className="py-16 md:py-24 bg-surface-green border-b border-emerald-200/80">
        <Container size="lg">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-12 md:mb-16">
            <Badge variant="outline" size="sm">Entenda o Conceito</Badge>
            <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-text-primary">
              O que é Marca Própria (Private Label)?
            </h2>
            <p className="text-text-secondary text-base sm:text-lg leading-relaxed">
              Marca Própria é o modelo que permite à sua empresa comercializar produtos sob sua marca e identidade comercial, utilizando a infraestrutura fabril e o rigor operacional de uma indústria parceira.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            <div className="p-6 rounded-ds-2xl bg-white border border-emerald-200/80 shadow-ds-sm hover:border-emerald-600/50 hover:shadow-ds-card-hover hover:-translate-y-1.5 transition-all duration-300 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700 shadow-ds-xs">
                <Store className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-lg text-text-primary">
                Sua Identidade Comercial
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Sua marca estampa a embalagem, constrói fidelidade com o cliente final e consolida presença estratégica nos pontos de venda ou em sua rede de lojas.
              </p>
            </div>

            <div className="p-6 rounded-ds-2xl bg-white border border-emerald-200/80 shadow-ds-sm hover:border-emerald-600/50 hover:shadow-ds-card-hover hover:-translate-y-1.5 transition-all duration-300 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700 shadow-ds-xs">
                <Factory className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-lg text-text-primary">
                Infraestrutura Industrial Parceira
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                A Nutri Açaí assume a fabricação seriada, manutenção técnica, gestão de insumos e controle de qualidade, sem exigir que você monte uma fábrica própria.
              </p>
            </div>

            <div className="p-6 rounded-ds-2xl bg-white border border-emerald-200/80 shadow-ds-sm hover:border-emerald-600/50 hover:shadow-ds-card-hover hover:-translate-y-1.5 transition-all duration-300 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700 shadow-ds-xs">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-lg text-text-primary">
                Segurança e Padronização
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Lotes monitorados com laudos microbiológicos, repetibilidade de cremosidade e atendimento às normas sanitárias vigentes para salvaguarda da sua marca.
              </p>
            </div>
          </div>

          {/* Nota de Transparência Técnica */}
          <div className="mt-10 p-5 rounded-2xl bg-surface-alt border border-border/80 flex flex-col sm:flex-row items-start sm:items-center gap-4 text-sm text-text-secondary">
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
              <Info className="w-4 h-4" />
            </div>
            <p className="leading-relaxed">
              <strong className="text-text-primary font-semibold">Critério de transparência:</strong> Nem todos os produtos do portfólio da fábrica estão automaticamente disponíveis para Private Label. Cada projeto, personalização ou formato de embalagem exige alinhamento técnico e comercial prévio com nossa equipe técnica.
            </p>
          </div>
        </Container>
      </section>

      {/* =====================================================================
          SEÇÃO 3 — POR QUE A NUTRI AÇAÍ
          ===================================================================== */}
      <section className="py-16 md:py-24 bg-surface-alt border-b border-brand-200/80">
        <Container size="xl">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-12 md:mb-16">
            <Badge variant="primary" size="sm">Capacidade e Confiança</Badge>
            <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-text-primary">
              Por que desenvolver seu projeto com a Nutri Açaí?
            </h2>
            <p className="text-text-secondary text-base sm:text-lg leading-relaxed">
              Estrutura física instalada em Gravataí/RS com números e processos industriais confirmados, pronta para dar suporte ao crescimento da sua operação.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Pilar 1 */}
            <div className="p-6 rounded-ds-2xl bg-white border border-brand-200/80 shadow-ds-sm hover:border-primary/60 hover:shadow-ds-card-hover hover:-translate-y-1.5 transition-all duration-300 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                <Factory className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-lg text-text-primary">
                Produção Própria
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Parque fabril próprio instalado em Gravataí/RS atuando desde 2022, garantindo total autonomia e controle sobre os processos de fabricação.
              </p>
            </div>

            {/* Pilar 2 */}
            <div className="p-6 rounded-ds-2xl bg-white border border-brand-200/80 shadow-ds-sm hover:border-primary/60 hover:shadow-ds-card-hover hover:-translate-y-1.5 transition-all duration-300 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                <Scale className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-lg text-text-primary">
                Escala Industrial Contínua
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Escala industrial estruturada para atender desde volumes sazonais até demandas contínuas de grandes operações sem risco de desabastecimento.
              </p>
            </div>

            {/* Pilar 3 */}
            <div className="p-6 rounded-ds-2xl bg-white border border-brand-200/80 shadow-ds-sm hover:border-primary/60 hover:shadow-ds-card-hover hover:-translate-y-1.5 transition-all duration-300 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                <FlaskConical className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-lg text-text-primary">
                Laboratório Próprio
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Estrutura de controle com análises de lote e emissão de laudos de qualidade, assegurando padrão físico-químico e segurança microbiológica.
              </p>
            </div>

            {/* Pilar 4 */}
            <div className="p-6 rounded-ds-2xl bg-white border border-brand-200/80 shadow-ds-sm hover:border-primary/60 hover:shadow-ds-card-hover hover:-translate-y-1.5 transition-all duration-300 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-lg text-text-primary">
                Equipe Técnica Especializada
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Profissionais qualificados acompanhando a formulação, homogeneização, textura e pasteurização em todas as etapas da cadeia produtiva.
              </p>
            </div>

            {/* Pilar 5 */}
            <div className="p-6 rounded-ds-2xl bg-white border border-brand-200/80 shadow-ds-sm hover:border-primary/60 hover:shadow-ds-card-hover hover:-translate-y-1.5 transition-all duration-300 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-lg text-text-primary">
                Portfólio Diversificado
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Domínio produtivo em linhas completas de açaí, cremes especiais, sorbets e frozens para diferentes segmentos e faixas de temperatura.
              </p>
            </div>

            {/* Pilar 6 */}
            <div className="p-6 rounded-ds-2xl bg-white border border-brand-200/80 shadow-ds-sm hover:border-primary/60 hover:shadow-ds-card-hover hover:-translate-y-1.5 transition-all duration-300 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                <Building2 className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-lg text-text-primary">
                Estrutura para Atendimento B2B
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Atendimento corporativo focado em construir relações duradouras com redes de varejo, distribuidores atacadistas, franquias e parceiros comerciais.
              </p>
            </div>

          </div>
        </Container>
      </section>

      {/* =====================================================================
          SEÇÃO 4 — PORTFÓLIO COMO REFERÊNCIA
          ===================================================================== */}
      <section className="py-16 md:py-24 bg-surface-green border-b border-emerald-200/80">
        <Container size="xl">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-12 md:mb-16">
            <Badge variant="outline" size="sm">Amplitude Fabril</Badge>
            <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-text-primary">
              Portfólio como Referência de Produção
            </h2>
            <p className="text-text-secondary text-base sm:text-lg leading-relaxed">
              O catálogo oficial da Nutri Açaí demonstra a versatilidade de linhas e formatos industriais que servem de base para o estudo da sua marca própria.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Categoria 1: Food Service */}
            <div className="rounded-ds-2xl bg-white border border-emerald-200/80 p-6 sm:p-8 flex flex-col justify-between space-y-6 shadow-ds-sm hover:border-emerald-600/60 hover:shadow-ds-card-hover hover:-translate-y-1.5 transition-all duration-300">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700 shadow-ds-xs">
                  <Box className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider font-semibold text-emerald-800">Alto Giro &amp; Operações</span>
                  <h3 className="font-display font-bold text-xl text-text-primary mt-1">Food Service</h3>
                </div>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Formatos de alto rendimento voltados para açaiterias, sorveterias, redes de franquias e buffets.
                </p>
                <div className="pt-2 space-y-2 border-t border-emerald-100 text-xs text-text-secondary">
                  <div className="flex items-center gap-2 font-medium text-text-primary">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span><strong>Açaí:</strong> Caixas 5L e 10L • Baldes 3,6L e 12L</span>
                  </div>
                  <div className="flex items-center gap-2 font-medium text-text-primary">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span><strong>Cremes &amp; Sorbet:</strong> Caixas 5L (Leitinho, Cupuaçu, Pitaya)</span>
                  </div>
                  <div className="flex items-center gap-2 font-medium text-text-primary">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span><strong>Frozen:</strong> Caixas 5L (Natural e Morango)</span>
                  </div>
                </div>
              </div>
              <div className="text-xs text-text-muted italic">
                Embalagens pensadas para manuseio comercial e conservação em freezers industriais.
              </div>
            </div>

            {/* Categoria 2: Varejo */}
            <div className="rounded-ds-2xl bg-white border border-emerald-200/80 p-6 sm:p-8 flex flex-col justify-between space-y-6 shadow-ds-sm hover:border-emerald-600/60 hover:shadow-ds-card-hover hover:-translate-y-1.5 transition-all duration-300">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700 shadow-ds-xs">
                  <ShoppingBag className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider font-semibold text-emerald-800">Consumo Familiar &amp; Gôndola</span>
                  <h3 className="font-display font-bold text-xl text-text-primary mt-1">Linha Varejo</h3>
                </div>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Potes retangulares de 1,5 Litros com visual atraente para gôndolas de supermercados e atacarejos.
                </p>
                <div className="pt-2 space-y-2 border-t border-emerald-100 text-xs text-text-secondary">
                  <div className="flex items-center gap-2 font-medium text-text-primary">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span><strong>Açaí 1,5L:</strong> Tradicional, Natural, Zero Açúcar, Morango, Banana</span>
                  </div>
                  <div className="flex items-center gap-2 font-medium text-text-primary">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span><strong>Trufados 1,5L:</strong> Trufado Leitinho e Trufado Avelã</span>
                  </div>
                  <div className="flex items-center gap-2 font-medium text-text-primary">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span><strong>Cremes, Sorbets &amp; Frozen:</strong> Pitaya, Cupuaçu e Frozens</span>
                  </div>
                </div>
              </div>
              <div className="text-xs text-text-muted italic">
                Potes com tampa de vedação hermética adequados para freezers residenciais e comerciais.
              </div>
            </div>

            {/* Categoria 3: Nutrinho */}
            <div className="rounded-ds-2xl bg-white border border-emerald-200/80 p-6 sm:p-8 flex flex-col justify-between space-y-6 shadow-ds-sm hover:border-emerald-600/60 hover:shadow-ds-card-hover hover:-translate-y-1.5 transition-all duration-300">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700 shadow-ds-xs">
                  <Store className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider font-semibold text-emerald-800">Consumo Rápido &amp; On-the-Go</span>
                  <h3 className="font-display font-bold text-xl text-text-primary mt-1">Linha Nutrinho</h3>
                </div>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Potes individuais de 220ml e 200ml para consumo imediato em lojas de conveniência, lanchonetes e eventos.
                </p>
                <div className="pt-2 space-y-2 border-t border-emerald-100 text-xs text-text-secondary">
                  <div className="flex items-center gap-2 font-medium text-text-primary">
                    <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
                    <span><strong>Potes 220ml:</strong> Com tampa domo contendo paçoca ou leite em pó</span>
                  </div>
                  <div className="flex items-center gap-2 font-medium text-text-primary">
                    <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
                    <span><strong>Sabores 220ml:</strong> Guaraná, Banana, Morango, Trufados, Cupuaçu</span>
                  </div>
                  <div className="flex items-center gap-2 font-medium text-text-primary">
                    <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
                    <span><strong>Potes 200ml:</strong> Zero Açúcar, Sorbet de Pitaya e Creme Cupuaçu</span>
                  </div>
                </div>
              </div>
              <div className="text-xs text-text-muted italic">
                Formato individual prático com alto apelo de compra por impulso.
              </div>
            </div>

          </div>

          {/* Banner Comercial e Disclaimer Oficial */}
          <div className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-brand-50 to-surface-alt border border-brand-200/80 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <h3 className="font-display font-bold text-lg text-text-primary">
                Consulte nossa equipe sobre as possibilidades para o seu projeto.
              </h3>
              <p className="text-text-secondary text-sm max-w-2xl">
                Os produtos acima representam o portfólio oficial de referência da Nutri Açaí. A disponibilidade para produção sob marca própria depende de alinhamento prévio sobre formatos, embalagens e volumes estimados.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full md:w-auto">
              <Button 
                href="/contato?assunto=marca-propria" 
                variant="primary" 
                size="md"
                rightIcon={<ArrowRight className="w-4 h-4" />}
                className="w-full sm:w-auto shadow-sm"
              >
                Falar sobre meu projeto
              </Button>
              <a
                href={`https://wa.me/5551994281252?text=${encodeURIComponent('Olá! Gostaria de conversar com a equipe comercial sobre desenvolvimento de Marca Própria na Nutri Açaí.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-ds-md text-xs font-semibold text-text-primary bg-surface hover:bg-[#25D366]/10 hover:text-[#128C7E] border border-border hover:border-[#25D366]/40 transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#25D366] shrink-0" aria-hidden="true" />
                <span>WhatsApp Comercial</span>
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* =====================================================================
          SEÇÃO 5 — PROCESSO DE DESENVOLVIMENTO (COMO FUNCIONA O PRIMEIRO CONTATO)
          ===================================================================== */}
      <section className="py-16 md:py-24 bg-surface-alt border-b border-border">
        <Container size="xl">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-12 md:mb-16">
            <Badge variant="primary" size="sm">Fluxo de Atendimento</Badge>
            <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-text-primary">
              Etapas Iniciais do Projeto
            </h2>
            <p className="text-text-secondary text-base sm:text-lg leading-relaxed">
              Como funciona o primeiro contato e as etapas preliminares para estruturar a viabilidade da sua linha terceirizada.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 lg:gap-6">
            
            {/* Passo 1 */}
            <div className="relative p-6 rounded-2xl bg-surface border border-border flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="w-8 h-8 rounded-full bg-primary/10 text-primary font-bold text-sm flex items-center justify-center">
                  1
                </div>
                <h3 className="font-display font-bold text-base text-text-primary">
                  Entendimento do Projeto
                </h3>
                <p className="text-text-secondary text-xs leading-relaxed">
                  Compreensão dos objetivos da sua empresa, perfil de público, canal de distribuição e expectativas de mercado.
                </p>
              </div>
              <div className="pt-2 border-t border-border/80 text-[11px] text-text-muted font-medium">
                Alinhamento de premissas
              </div>
            </div>

            {/* Passo 2 */}
            <div className="relative p-6 rounded-2xl bg-surface border border-border flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="w-8 h-8 rounded-full bg-primary/10 text-primary font-bold text-sm flex items-center justify-center">
                  2
                </div>
                <h3 className="font-display font-bold text-base text-text-primary">
                  Avaliação da Necessidade
                </h3>
                <p className="text-text-secondary text-xs leading-relaxed">
                  Mapeamento dos formatos pretendidos (Food Service, Potes 1,5L ou individuais) e estimativa de volumes operacionais.
                </p>
              </div>
              <div className="pt-2 border-t border-border/80 text-[11px] text-text-muted font-medium">
                Dimensionamento de demanda
              </div>
            </div>

            {/* Passo 3 */}
            <div className="relative p-6 rounded-2xl bg-surface border border-border flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="w-8 h-8 rounded-full bg-primary/10 text-primary font-bold text-sm flex items-center justify-center">
                  3
                </div>
                <h3 className="font-display font-bold text-base text-text-primary">
                  Alinhamento Técnico &amp; Comercial
                </h3>
                <p className="text-text-secondary text-xs leading-relaxed">
                  Avaliação da viabilidade técnica por nosso time fabril, validação laboratorial e apresentação das diretrizes comerciais.
                </p>
              </div>
              <div className="pt-2 border-t border-border/80 text-[11px] text-text-muted font-medium">
                Segurança fabril &amp; laudos
              </div>
            </div>

            {/* Passo 4 */}
            <div className="relative p-6 rounded-2xl bg-surface border border-border flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="w-8 h-8 rounded-full bg-primary/10 text-primary font-bold text-sm flex items-center justify-center">
                  4
                </div>
                <h3 className="font-display font-bold text-base text-text-primary">
                  Definição da Solução
                </h3>
                <p className="text-text-secondary text-xs leading-relaxed">
                  Parametrização final do produto, especificação de rotulagem regulatória, cronograma e programação de fornecimento.
                </p>
              </div>
              <div className="pt-2 border-t border-border/80 text-[11px] text-text-muted font-medium">
                Formalização do projeto
              </div>
            </div>

            {/* Passo 5 */}
            <div className="relative p-6 rounded-2xl bg-surface border border-border flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="w-8 h-8 rounded-full bg-primary/10 text-primary font-bold text-sm flex items-center justify-center">
                  5
                </div>
                <h3 className="font-display font-bold text-base text-text-primary">
                  Produção &amp; Entrega
                </h3>
                <p className="text-text-secondary text-xs leading-relaxed">
                  Fabricação em escala industrial própria, controle de lotes, emissão de laudos e logística de expedição.
                </p>
              </div>
              <div className="pt-2 border-t border-border/80 text-[11px] text-text-muted font-medium">
                Escala &amp; regularidade
              </div>
            </div>

          </div>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
            <p className="text-xs text-text-muted max-w-xl">
              * O fluxo acima reflete as etapas de aproximação comercial e diagnóstico técnico preliminar.
            </p>
            <Link
              href="/contato?assunto=marca-propria"
              className="inline-flex items-center text-xs font-semibold text-primary hover:text-primary-hover gap-1 transition-colors"
            >
              <span>Iniciar diagnóstico do seu projeto</span>
              <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
            </Link>
          </div>
        </Container>
      </section>

      {/* =====================================================================
          SEÇÃO 6 — PERFIL IDEAL: PARA QUEM É A SOLUÇÃO?
          ===================================================================== */}
      <section className="py-16 md:py-24 bg-surface border-b border-border">
        <Container size="xl">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-12 md:mb-16">
            <Badge variant="outline" size="sm">Segmentos de Mercado</Badge>
            <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-text-primary">
              Para quem é a solução de Marca Própria?
            </h2>
            <p className="text-text-secondary text-base sm:text-lg leading-relaxed">
              Modelos de negócio que encontram na terceirização fabril o caminho ideal para expandir seu portfólio sem os custos de uma fábrica.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Card 1 */}
            <div className="p-6 rounded-2xl bg-surface-alt border border-border space-y-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                <Store className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-lg text-text-primary">
                Redes de Varejo
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Supermercados e redes de autosserviço que buscam reforçar sua própria marca nas gôndolas de congelados com um açaí de alta cremosidade e aceitação.
              </p>
            </div>

            {/* Card 2 */}
            <div className="p-6 rounded-2xl bg-surface-alt border border-border space-y-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                <Building2 className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-lg text-text-primary">
                Franquias &amp; Redes de Alimentação
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Operações de alimentação que exigem padrão homogêneo, estabilidade sensorial e fornecimento ininterrupto para suas dezenas ou centenas de unidades.
              </p>
            </div>

            {/* Card 3 */}
            <div className="p-6 rounded-2xl bg-surface-alt border border-border space-y-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-lg text-text-primary">
                Supermercados &amp; Atacarejos
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Empresas que desejam produtos com design de embalagem exclusivo, alta margem de rentabilidade e giro comprovado no setor de sobremesas geladas.
              </p>
            </div>

            {/* Card 4 */}
            <div className="p-6 rounded-2xl bg-surface-alt border border-border space-y-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                <Box className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-lg text-text-primary">
                Empresas de Alimentos
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Indústrias ou marcas consolidadas de outros nichos de alimentos que planejam ingressar na categoria de açaí sem construir nova planta produtiva.
              </p>
            </div>

            {/* Card 5 */}
            <div className="p-6 rounded-2xl bg-surface-alt border border-border space-y-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                <TrendingUp className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-lg text-text-primary">
                Marcas em Expansão
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Negócios cuja demanda de vendas superou a estrutura fabril inicial e precisam de uma parceira com escala industrial própria para sustentar o crescimento.
              </p>
            </div>

            {/* Card 6 */}
            <div className="p-6 rounded-2xl bg-surface-alt border border-border space-y-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-lg text-text-primary">
                Novos Entrantes com Linha Própria
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Empreendimentos estruturados que planejam o lançamento de uma linha diferenciada de açaí apoiada na credibilidade técnica da Nutri Açaí.
              </p>
            </div>

          </div>
        </Container>
      </section>

      {/* =====================================================================
          SEÇÃO 7 — DIFERENCIAL INDUSTRIAL
          ===================================================================== */}
      <section className="py-16 md:py-24 bg-surface-alt border-b border-border">
        <Container size="xl">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-12 md:mb-16">
            <Badge variant="primary" size="sm">Infraestrutura Fabril</Badge>
            <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-text-primary">
              O Diferencial da Nossa Estrutura Industrial
            </h2>
            <p className="text-text-secondary text-base sm:text-lg leading-relaxed">
              A solidez de uma marca terceirizada depende diretamente da capacidade técnica e operacional de sua fábrica parceira.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="p-6 rounded-2xl bg-surface border border-border space-y-3">
              <div className="text-xs uppercase tracking-wider font-semibold text-primary">Capacidade</div>
              <h3 className="font-display font-bold text-xl text-text-primary">Escala</h3>
              <div className="text-2xl font-bold font-display text-primary">Contínua</div>
              <p className="text-text-secondary text-xs leading-relaxed pt-1">
                Capacidade fabril dimensionada para assegurar fornecimento regular em períodos de alta temporada e expansão de pedidos.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-surface border border-border space-y-3">
              <div className="text-xs uppercase tracking-wider font-semibold text-primary">Planta Fabril</div>
              <h3 className="font-display font-bold text-xl text-text-primary">Estrutura</h3>
              <div className="text-2xl font-bold font-display text-text-primary">Gravataí / RS</div>
              <p className="text-text-secondary text-xs leading-relaxed pt-1">
                Instalações próprias com tecnologia de mistura, homogeneização contínua e congelamento de alta velocidade.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-surface border border-border space-y-3">
              <div className="text-xs uppercase tracking-wider font-semibold text-primary">Garantia</div>
              <h3 className="font-display font-bold text-xl text-text-primary">Controle</h3>
              <div className="text-2xl font-bold font-display text-text-primary">Laboratório</div>
              <p className="text-text-secondary text-xs leading-relaxed pt-1">
                Equipe técnica especializada e controle analítico de lotes com laudos oficiais para proteção e conformidade do seu negócio.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-surface border border-border space-y-3">
              <div className="text-xs uppercase tracking-wider font-semibold text-primary">Versatilidade</div>
              <h3 className="font-display font-bold text-xl text-text-primary">Portfólio</h3>
              <div className="text-2xl font-bold font-display text-text-primary">Multi-Linhas</div>
              <p className="text-text-secondary text-xs leading-relaxed pt-1">
                Experiência prática em formulações de açaí, cremes especiais, sorbets e frozens para diferentes canais de mercado.
              </p>
            </div>

          </div>
        </Container>
      </section>

      {/* =====================================================================
          SEÇÃO 8 — CTA DE ALTO VALOR (FECHAMENTO COMERCIAL)
          ===================================================================== */}
      <section className="py-20 md:py-28 bg-brand-900 text-white relative overflow-hidden">
        {/* Detalhe de fundo suave */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

        <Container size="lg" className="relative text-center space-y-8">
          <div className="inline-flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-brand-light text-xs font-semibold tracking-wide uppercase">
              Parceria Industrial de Alto Nível
            </span>
          </div>

          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl tracking-tight text-white max-w-3xl mx-auto leading-tight">
            Vamos desenvolver sua próxima linha?
          </h2>

          <p className="text-white/80 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Apresente seu projeto à equipe comercial da Nutri Açaí. Analisamos os requisitos da sua marca com discrição, seriedade técnica e foco em resultados de longo prazo.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              href="/contato?assunto=marca-propria" 
              variant="secondary" 
              size="lg"
              rightIcon={<ArrowRight className="w-4 h-4" />}
              className="w-full sm:w-auto font-bold shadow-lg"
            >
              Iniciar Projeto por Formulário
            </Button>
            <a
              href={`https://wa.me/5551994281252?text=${encodeURIComponent('Olá! Tenho interesse no desenvolvimento de Marca Própria (Private Label) com a Nutri Açaí e gostaria de conversar com a equipe comercial.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-ds-md text-sm font-semibold bg-[#25D366] hover:bg-[#20ba5a] text-white shadow-md transition-colors"
            >
              <MessageCircle className="w-4 h-4 fill-current" aria-hidden="true" />
              <span>Conversar no WhatsApp</span>
            </a>
            <Button 
              href="/produtos" 
              variant="outline" 
              size="lg"
              className="w-full sm:w-auto text-white border-white/30 hover:bg-white/10 hover:text-white"
            >
              Ver catálogo de referência
            </Button>
          </div>

          <div className="pt-8 border-t border-white/10 max-w-xl mx-auto text-xs text-white/60">
            Nutri Açaí — Indústria de Alimentos • Gravataí / RS • Fornecimento B2B
          </div>
        </Container>
      </section>

    </div>
  );
}

