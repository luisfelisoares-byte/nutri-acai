import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { JsonLd } from '@/components/seo/JsonLd';
import { getWebPageSchema, getBreadcrumbSchema, SITE_URL } from '@/lib/schema';
import { 
  Factory, 
  ShieldCheck, 
  FlaskConical, 
  Truck, 
  Users, 
  Calendar, 
  FileText, 
  ArrowRight, 
  CheckCircle2, 
  Layers, 
  Box,
  Building2,
  ChevronRight,
  MessageCircle
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'A Fábrica | Infraestrutura Industrial e Produção Própria',
  description: 
    'Conheça a fábrica da Nutri Açaí em Gravataí/RS. Indústria com produção própria, estrutura técnica e fornecimento contínuo para negócios B2B.',
  alternates: {
    canonical: 'https://nutriacai.com.br/a-fabrica',
  },
  openGraph: {
    title: 'A Fábrica | Infraestrutura Industrial e Produção Própria | Nutri Açaí',
    description: 
      'Conheça a fábrica da Nutri Açaí em Gravataí/RS. Indústria com produção própria, estrutura técnica e fornecimento contínuo para negócios B2B.',
    url: 'https://nutriacai.com.br/a-fabrica',
    siteName: 'Nutri Açaí',
    locale: 'pt_BR',
    type: 'website',
    images: [
      {
        url: '/images/brand/og-banner-1200x630.jpg',
        width: 1200,
        height: 630,
        alt: 'Fábrica Nutri Açaí em Gravataí/RS',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'A Fábrica | Infraestrutura Industrial e Produção Própria | Nutri Açaí',
    description: 
      'Conheça a fábrica da Nutri Açaí em Gravataí/RS. Indústria com produção própria, estrutura técnica e fornecimento contínuo para negócios B2B.',
    images: ['/images/brand/og-banner-1200x630.jpg'],
  },
};

export default function AFabricaPage() {
  return (
    <div className="flex flex-col w-full bg-surface text-text-primary">
      {/* Schema.org: Dados Estruturados da Página A Fábrica */}
      <JsonLd 
        data={getWebPageSchema(
          `${SITE_URL}/a-fabrica`,
          'A Fábrica | Infraestrutura Industrial e Produção Própria | Nutri Açaí',
          'Conheça a fábrica da Nutri Açaí em Gravataí/RS. Indústria com produção própria, estrutura técnica e fornecimento contínuo para negócios B2B.',
          'AboutPage'
        )} 
      />
      <JsonLd 
        data={getBreadcrumbSchema([
          { name: 'Início', url: SITE_URL },
          { name: 'A Fábrica', url: `${SITE_URL}/a-fabrica` }
        ])} 
      />

      {/* =====================================================================
          SEÇÃO 1 — HERO INSTITUCIONAL (Fundo Sólido Lilás Institucional)
          ===================================================================== */}
      <section className="relative overflow-hidden pt-12 pb-16 md:pt-20 md:pb-24 bg-surface-alt border-b border-brand-200/80">
        <Container size="xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Mensagem Institucional */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2">
                <Badge variant="primary" size="md" icon={<Factory className="w-3.5 h-3.5 text-primary" />}>
                  Fábrica de Açaí em Gravataí / RS
                </Badge>
              </div>

              <h1 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] text-text-primary tracking-tight leading-[1.15]">
                Fábrica de Açaí e Infraestrutura Industrial no Rio Grande do Sul
              </h1>

              <p className="text-text-secondary text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0">
                A <strong className="text-text-primary font-semibold">Nutri Açaí</strong> é uma indústria sediada em Gravataí/RS com produção própria de açaí, cremes, sorbets e frozens. Estrutura fabril estruturada e processos padronizados para abastecer distribuidores, operações de Food Service e redes varejistas com regularidade e padrão gastronômico.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <Button 
                  href="/produtos" 
                  variant="primary" 
                  size="lg"
                  className="w-full sm:w-auto"
                  rightIcon={<ArrowRight className="w-5 h-5" aria-hidden="true" />}
                >
                  Conheça nossos produtos
                </Button>
                <Button 
                  href="/contato" 
                  variant="outline" 
                  size="lg"
                  className="w-full sm:w-auto bg-white hover:bg-brand-50 border-brand-300 text-brand-950 shadow-ds-xs"
                >
                  Fale com nossa equipe
                </Button>
              </div>

              {/* Badges de Apoio Imediato */}
              <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-text-muted">
                <span className="flex items-center gap-1.5 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-feedback-success" aria-hidden="true" />
                  Operação desde 2022
                </span>
                <span className="flex items-center gap-1.5 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-feedback-success" aria-hidden="true" />
                  Laboratório Integrado
                </span>
                <span className="flex items-center gap-1.5 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-feedback-success" aria-hidden="true" />
                  Equipe Técnica Especializada
                </span>
              </div>
            </div>

            {/* Apresentação Oficial da Diretoria & Capacidade Fabril */}
            <div className="lg:col-span-5">
              <div className="relative rounded-ds-2xl border border-brand-200/90 bg-white p-4 sm:p-6 shadow-ds-card overflow-hidden">
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-border pb-3">
                    <span className="text-xs font-semibold tracking-wider text-primary uppercase">
                      Liderança &amp; Propósito
                    </span>
                    <span className="text-xs text-text-muted">Gravataí / RS</span>
                  </div>

                  {/* Fotografia Oficial da Diretoria */}
                  <div className="relative aspect-[4/5] rounded-ds-xl overflow-hidden bg-brand-950 shadow-md">
                    <Image
                      src="/images/institutional/nossa-missao-institucional.webp"
                      alt="Diretoria e Fundadores da Nutri Açaí na fábrica de Gravataí/RS"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 420px"
                      priority
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-950/95 via-brand-950/50 to-transparent p-4 text-white">
                      <span className="inline-block px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-white/20 text-white backdrop-blur-sm mb-1">
                        Gestão Operacional
                      </span>
                      <p className="font-display font-semibold text-sm text-white">
                        Diretoria Nutri Açaí
                      </p>
                      <p className="text-white/70 text-xs">
                        Compromisso com o padrão industrial e sabor autêntico
                      </p>
                    </div>
                  </div>

                  {/* Indicadores Oficiais */}
                  <div className="grid grid-cols-2 gap-3 pt-1">
                    <div className="p-3 rounded-ds-md bg-brand-50 border border-brand-100 text-center shadow-ds-xs">
                      <p className="font-display font-bold text-lg text-primary">Contínua</p>
                      <p className="text-text-muted text-xs">Capacidade Fabril</p>
                    </div>
                    <div className="p-3 rounded-ds-md bg-brand-50 border border-brand-100 text-center shadow-ds-xs">
                      <p className="font-display font-bold text-lg text-secondary">B2B</p>
                      <p className="text-text-muted text-xs">Atendimento Comercial</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* =====================================================================
          SEÇÃO 2 — NOSSA HISTÓRIA (Fundo Sólido Verde Botânico)
          ===================================================================== */}
      <section className="py-16 md:py-24 bg-surface-green border-b border-emerald-200/80" aria-labelledby="history-heading">
        <Container size="xl">
          <div className="max-w-3xl mx-auto space-y-8 text-center md:text-left">
            
            <div className="space-y-3">
              <Badge variant="secondary" size="sm" icon={<Calendar className="w-3.5 h-3.5 text-secondary" />}>
                Nossa Trajetória
              </Badge>
              <h2 id="history-heading" className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-text-primary tracking-tight">
                Atuação Industrial desde 2022 em Gravataí / RS
              </h2>
            </div>

            <div className="space-y-5 text-text-secondary text-base sm:text-lg leading-relaxed">
              <p>
                A <strong className="text-text-primary">Nutri Açaí</strong> iniciou suas atividades industriais em 2022 no município de Gravataí, 
                no Rio Grande do Sul, com o propósito de fabricar produtos à base de açaí, cremes, frozens e sorbets sob rigoroso padrão fabril.
              </p>
              <p>
                Desde o início de sua operação, a empresa estruturou sua planta com foco na produção própria, 
                investindo em maquinário industrial, equipes técnicas qualificadas e rigoroso controle de processos para garantir 
                o padrão sanitário e a consistência de seus produtos.
              </p>
              <p>
                Hoje, a Nutri Açaí consolida sua presença no mercado atendendo comércios, distribuidores e redes com fornecimento contínuo e o compromisso de unir processo industrial e sabor autêntico.
              </p>
            </div>

            {/* Destaque Regional Gaúcho */}
            <div className="rounded-ds-xl border border-emerald-200/90 bg-white p-5 shadow-ds-sm hover:shadow-ds-card hover:border-emerald-500/40 transition-all duration-300 flex flex-col sm:flex-row items-center gap-5">
              <div className="relative w-full sm:w-44 aspect-[4/3] rounded-ds-lg overflow-hidden shrink-0 border border-border">
                <Image
                  src="/images/institutional/acai-tradicao-gaucha-chimarrao.webp"
                  alt="Açaí Nutri Açaí e Cuia de Chimarrão — Da tradição gaúcha com padrão industrial"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 180px"
                  loading="lazy"
                />
              </div>
              <div className="space-y-1.5 text-center sm:text-left">
                <span className="inline-block px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800">
                  Raízes Gaúchas • Padrão Industrial
                </span>
                <h3 className="font-display font-semibold text-base sm:text-lg text-text-primary">
                  Do Chimarrão ao Açaí: Energia e Tradição
                </h3>
                <p className="text-text-secondary text-xs sm:text-sm leading-relaxed">
                  Orgulho de produzir no Rio Grande do Sul e abastecer parceiros comerciais com integridade de cadeia de frio e agilidade no fornecimento.
                </p>
              </div>
            </div>

            <div className="pt-2 border-t border-border flex flex-wrap items-center gap-6 text-sm text-text-muted">
              <span className="flex items-center gap-2">
                <Factory className="w-4 h-4 text-primary" aria-hidden="true" />
                Sede própria em Gravataí / RS
              </span>
              <span className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-secondary" aria-hidden="true" />
                Operação contínua desde 2022
              </span>
            </div>

          </div>
        </Container>
      </section>

      {/* =====================================================================
          SEÇÃO 3 — ESTRUTURA INDUSTRIAL (Fundo Sólido Lilás Institucional)
          ===================================================================== */}
      <section className="py-16 md:py-24 bg-surface-alt border-b border-brand-200/80" aria-labelledby="industrial-structure-heading">
        <Container size="xl" className="space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <Badge variant="primary" size="sm">Capacidade Operacional</Badge>
            <h2 id="industrial-structure-heading" className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-text-primary tracking-tight">
              Estrutura Industrial
            </h2>
            <p className="text-text-secondary text-sm sm:text-base">
              Dimensões e recursos operacionais confirmados da planta em Gravataí/RS.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Card 1 */}
            <div className="p-6 rounded-ds-xl border border-brand-200/80 bg-white shadow-ds-sm hover:shadow-ds-card-hover hover:border-primary/50 hover:-translate-y-1.5 transition-all duration-300 space-y-3 group">
              <div className="w-12 h-12 rounded-ds-lg bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <Factory className="w-6 h-6" aria-hidden="true" />
              </div>
              <h3 className="font-display font-semibold text-lg text-text-primary group-hover:text-primary transition-colors">
                Produção Própria
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Todas as linhas de açaí, frozens, cremes e sorbets são fabricadas e envasadas diretamente em nossas instalações em Gravataí/RS.
              </p>
              <Badge variant="neutral" size="sm">Controle Total</Badge>
            </div>

            {/* Card 2 */}
            <div className="p-6 rounded-ds-xl border border-brand-200/80 bg-white shadow-ds-sm hover:shadow-ds-card-hover hover:border-secondary/50 hover:-translate-y-1.5 transition-all duration-300 space-y-3 group">
              <div className="w-12 h-12 rounded-ds-lg bg-secondary/10 flex items-center justify-center text-secondary group-hover:scale-110 group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                <Layers className="w-6 h-6" aria-hidden="true" />
              </div>
              <h3 className="font-display font-semibold text-lg text-text-primary group-hover:text-secondary transition-colors">
                Escala Industrial Contínua
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Capacidade fabril dimensionada para suportar a demanda contínua de distribuidores e redes comerciais sem interrupções de fornecimento.
              </p>
              <Badge variant="secondary" size="sm">Escala Fabril</Badge>
            </div>

            {/* Card 3 */}
            <div className="p-6 rounded-ds-xl border border-brand-200/80 bg-white shadow-ds-sm hover:shadow-ds-card-hover hover:border-accent/50 hover:-translate-y-1.5 transition-all duration-300 space-y-3 group">
              <div className="w-12 h-12 rounded-ds-lg bg-accent/10 flex items-center justify-center text-accent group-hover:scale-110 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                <Users className="w-6 h-6" aria-hidden="true" />
              </div>
              <h3 className="font-display font-semibold text-lg text-text-primary group-hover:text-accent transition-colors">
                Equipe Técnica Especializada
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Corpo de profissionais técnicos dedicados ao monitoramento da fabricação, cumprimento de protocolos e operação dos maquinários industriais.
              </p>
              <Badge variant="accent" size="sm">Corpo Técnico</Badge>
            </div>

            {/* Card 4 */}
            <div className="p-6 rounded-ds-xl border border-brand-200/80 bg-white shadow-ds-sm hover:shadow-ds-card-hover hover:border-primary/50 hover:-translate-y-1.5 transition-all duration-300 space-y-3 group">
              <div className="w-12 h-12 rounded-ds-lg bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <FlaskConical className="w-6 h-6" aria-hidden="true" />
              </div>
              <h3 className="font-display font-semibold text-lg text-text-primary group-hover:text-primary transition-colors">
                Laboratório Próprio
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Ambiente laboratorial interno voltado para o controle de qualidade contínuo e suporte na emissão de laudos dos produtos.
              </p>
              <Badge variant="primary" size="sm">Laboratório Interno</Badge>
            </div>

            {/* Card 5 */}
            <div className="p-6 rounded-ds-xl border border-brand-200/80 bg-white shadow-ds-sm hover:shadow-ds-card-hover hover:border-brand-500/50 hover:-translate-y-1.5 transition-all duration-300 space-y-3 group">
              <div className="w-12 h-12 rounded-ds-lg bg-brand-500/10 flex items-center justify-center text-brand-600 group-hover:scale-110 group-hover:bg-brand-600 group-hover:text-white transition-all duration-300">
                <Truck className="w-6 h-6" aria-hidden="true" />
              </div>
              <h3 className="font-display font-semibold text-lg text-text-primary group-hover:text-brand-600 transition-colors">
                Logística e Fornecimento B2B
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Logística estruturada para envio e abastecimento contínuo a distribuidores, atacadistas e parceiros comerciais.
              </p>
              <Badge variant="neutral" size="sm">Logística B2B</Badge>
            </div>

            {/* Card 6 */}
            <div className="p-6 rounded-ds-xl border border-brand-200/80 bg-white shadow-ds-sm hover:shadow-ds-card-hover hover:border-secondary/50 hover:-translate-y-1.5 transition-all duration-300 space-y-3 group">
              <div className="w-12 h-12 rounded-ds-lg bg-secondary/10 flex items-center justify-center text-secondary group-hover:scale-110 group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                <Box className="w-6 h-6" aria-hidden="true" />
              </div>
              <h3 className="font-display font-semibold text-lg text-text-primary group-hover:text-secondary transition-colors">
                Mix Diversificado
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Produção de embalagens industriais (caixas de 5L e 10L, baldes de 3,6L e 12L), potes de 1,5L e linha individual Nutrinho (200/220ml).
              </p>
              <Badge variant="secondary" size="sm">Múltiplos Formatos</Badge>
            </div>

          </div>

        </Container>
      </section>

      {/* =====================================================================
          SEÇÃO 4 — LABORATÓRIO E CONTROLE DE QUALIDADE (Fundo Sólido Verde Botânico)
          ===================================================================== */}
      <section id="laboratorio" className="py-16 md:py-24 bg-surface-green border-b border-emerald-200/80 scroll-mt-20" aria-labelledby="lab-heading">
        <Container size="xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <Badge variant="secondary" size="sm" icon={<FlaskConical className="w-3.5 h-3.5 text-secondary" />}>
                Controle e Qualidade
              </Badge>

              <h2 id="lab-heading" className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-text-primary tracking-tight">
                Controle de Qualidade e Equipe Técnica Especializada
              </h2>

              <p className="text-text-secondary text-base sm:text-lg leading-relaxed">
                A Nutri Açaí conta com rigorosos procedimentos de controle de qualidade integrados à sua planta industrial em Gravataí/RS. 
                Essa estrutura viabiliza o acompanhamento sistemático de seus produtos e a validação técnica de cada lote.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3 p-4 rounded-ds-lg bg-white border border-emerald-200/80 shadow-ds-xs">
                  <CheckCircle2 className="w-5 h-5 text-feedback-success shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="font-medium text-sm text-text-primary">Monitoramento e Controle de Processos</p>
                    <p className="text-text-muted text-xs mt-0.5">
                      Rotinas técnicas dedicadas ao acompanhamento sanitário dos produtos fabricados.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-ds-lg bg-white border border-emerald-200/80 shadow-ds-xs">
                  <FileText className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="font-medium text-sm text-text-primary">Estrutura para Controle e Laudos</p>
                    <p className="text-text-muted text-xs mt-0.5">
                      Capacidade para conferência e emissão de laudos de controle para atendimento a requisitos comerciais.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-ds-lg bg-white border border-emerald-200/80 shadow-ds-xs">
                  <Users className="w-5 h-5 text-secondary shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="font-medium text-sm text-text-primary">Equipes Técnicas Especializadas</p>
                    <p className="text-text-muted text-xs mt-0.5">
                      Profissionais capacitados atuando nas rotinas de checagem e padronização dos lotes.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Espaço Visual Provisório do Laboratório */}
            <div className="lg:col-span-5">
              <div className="rounded-ds-xl border border-emerald-200/90 bg-white p-6 shadow-ds-sm space-y-4">
                <div className="aspect-[4/3] rounded-ds-lg bg-emerald-50/50 border border-dashed border-emerald-300 flex flex-col items-center justify-center p-6 text-center space-y-2">
                  <FlaskConical className="w-10 h-10 text-emerald-600" aria-hidden="true" />
                  <p className="font-display font-medium text-text-primary text-sm">
                    Laboratório de Controle de Qualidade
                  </p>
                  <span className="text-xs text-text-muted italic">
                    [Espaço reservado para fotografia oficial do laboratório interno]
                  </span>
                </div>
                <div className="text-xs text-text-muted flex items-center justify-between">
                  <span>Controle de Lotes</span>
                  <span>Equipe Técnica Própria</span>
                </div>
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* =====================================================================
          SEÇÃO 5 — PROCESSO PRODUTIVO (Fundo Sólido Lilás Institucional)
          ===================================================================== */}
      <section className="py-16 md:py-24 bg-surface-alt border-y border-brand-200/80" aria-labelledby="process-heading">
        <Container size="xl" className="space-y-10">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <Badge variant="primary" size="sm">Padrão de Fabricação</Badge>
            <h2 id="process-heading" className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-text-primary tracking-tight">
              Compromisso com o Padrão Industrial
            </h2>
            <p className="text-text-secondary text-sm sm:text-base">
              A atuação fabril da Nutri Açaí é orientada pela combinação entre escala técnica e preservação das características sensoriais do açaí.
            </p>
          </div>

          {/* Abordagem segura sem inventar etapas técnicas não confirmadas */}
          <div className="max-w-3xl mx-auto p-8 rounded-ds-2xl border border-brand-200/90 bg-white shadow-ds-card space-y-6">
            <div className="space-y-4 text-text-secondary text-sm sm:text-base leading-relaxed">
              <p>
                A operação industrial da Nutri Açaí foi concebida para atender clientes comerciais que demandam 
                regularidade de fornecimento e estabilidade de produto. A integração entre a linha fabril e o rigoroso controle de qualidade 
                assegura que cada volume expedido mantenha a conformidade com os padrões da marca.
              </p>
              <p>
                Trabalhamos com formatos adaptados às necessidades operacionais de açaiterias, sorveterias e buffets (Food Service), 
                assim como apresentações voltadas ao varejo e consumo prático.
              </p>
            </div>

            <div className="p-4 rounded-ds-md bg-brand-50 border border-brand-100 text-xs text-text-secondary flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-primary shrink-0" aria-hidden="true" />
              <span>
                O detalhamento das etapas sequenciais da linha de envase e processamento será disponibilizado 
                conforme os manuais técnicos oficiais validados pela diretoria de operações da empresa.
              </span>
            </div>
          </div>

        </Container>
      </section>

      {/* =====================================================================
          SEÇÃO 6 — GALERIA / ESPAÇOS DE IMAGENS RESERVADOS (Fundo Sólido Verde Botânico)
          ===================================================================== */}
      <section className="py-16 md:py-24 bg-surface-green border-b border-emerald-200/80" aria-labelledby="gallery-heading">
        <Container size="xl" className="space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <Badge variant="secondary" size="sm">Operação &amp; Portfólio</Badge>
            <h2 id="gallery-heading" className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-text-primary tracking-tight">
              A Força Operacional da Nutri Açaí
            </h2>
            <p className="text-text-secondary text-sm sm:text-base">
              Fotografias reais dos formatos e aplicações produzidos diariamente em nossa indústria em Gravataí/RS.
            </p>
          </div>

          {/* Grade de Imagens Oficiais da Operação */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Imagem 1: Food Service em Operação */}
            <div className="rounded-ds-xl border border-emerald-200/90 bg-white p-4 flex flex-col justify-between space-y-3 shadow-ds-sm hover:shadow-ds-card-hover hover:border-emerald-500/50 hover:-translate-y-1.5 transition-all duration-300 group">
              <div className="relative aspect-[16/11] rounded-ds-lg overflow-hidden border border-emerald-100 bg-brand-950">
                <Image
                  src="/images/products/food-service-extracao-acai.webp"
                  alt="Colher de sorvete extraindo açaí cremoso de caixa Food Service Nutri Açaí"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
                />
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                  Food Service
                </span>
                <h3 className="font-display font-semibold text-sm text-text-primary group-hover:text-emerald-700 transition-colors">
                  Textura &amp; Ponto de Boleamento
                </h3>
                <p className="text-xs text-text-secondary leading-relaxed">
                  Caixas de 5L e 10L formuladas para manuseio ágil e cremosidade uniforme na cuba.
                </p>
              </div>
            </div>

            {/* Imagem 2: Linha Familiar Varejo 1,5L */}
            <div className="rounded-ds-xl border border-emerald-200/90 bg-white p-4 flex flex-col justify-between space-y-3 shadow-ds-sm hover:shadow-ds-card-hover hover:border-primary/50 hover:-translate-y-1.5 transition-all duration-300 group">
              <div className="relative aspect-[16/11] rounded-ds-lg overflow-hidden border border-border bg-brand-950">
                <Image
                  src="/images/products/linha-potes-1-5l-composicao-frutas.webp"
                  alt="Linha familiar de potes de 1,5L com frutas e granolas Nutri Açaí"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
                />
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-primary bg-primary/10 px-2 py-0.5 rounded">
                  Linha Varejo 1,5L
                </span>
                <h3 className="font-display font-semibold text-sm text-text-primary group-hover:text-primary transition-colors">
                  Sobremesa Familiar &amp; Frutas
                </h3>
                <p className="text-xs text-text-secondary leading-relaxed">
                  Potes retangulares com embalagem moderna desenvolvida para alto giro em gôndolas.
                </p>
              </div>
            </div>

            {/* Imagem 3: Nutrinho Lifestyle */}
            <div className="rounded-ds-xl border border-emerald-200/90 bg-white p-4 flex flex-col justify-between space-y-3 shadow-ds-sm hover:shadow-ds-card-hover hover:border-amber-500/50 hover:-translate-y-1.5 transition-all duration-300 group">
              <div className="relative aspect-[16/11] rounded-ds-lg overflow-hidden border border-border bg-brand-950">
                <Image
                  src="/images/institutional/lifestyle-consumo-nutrinho.webp"
                  alt="Dois potes Nutrinho sob o sol representando praticidade e estilo de vida"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
                />
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-2 py-0.5 rounded">
                  Nutrinho To-Go
                </span>
                <h3 className="font-display font-semibold text-sm text-text-primary group-hover:text-amber-700 transition-colors">
                  Consumo Prático On-the-Go
                </h3>
                <p className="text-xs text-text-secondary leading-relaxed">
                  Embalagens individuais de 220ml com domo de toppings prontas para o consumo imediato.
                </p>
              </div>
            </div>

            {/* Imagem 4: Cremes Nobres & Frutos */}
            <div className="rounded-ds-xl border border-emerald-200/90 bg-white p-4 flex flex-col justify-between space-y-3 shadow-ds-sm hover:shadow-ds-card-hover hover:border-amber-600/50 hover:-translate-y-1.5 transition-all duration-300 group">
              <div className="relative aspect-[16/11] rounded-ds-lg overflow-hidden border border-border bg-brand-950">
                <Image
                  src="/images/products/creme-cupuacu-caixa-fruto.webp"
                  alt="Caixa de Creme de Cupuaçu 5L com frutos naturais de cupuaçu"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
                />
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800 bg-amber-100 px-2 py-0.5 rounded">
                  Cremes Especiais
                </span>
                <h3 className="font-display font-semibold text-sm text-text-primary group-hover:text-amber-800 transition-colors">
                  Cupuaçu &amp; Frutas Brasileiras
                </h3>
                <p className="text-xs text-text-secondary leading-relaxed">
                  Formulação rica em polpa natural com sabor autêntico para montagens combinadas.
                </p>
              </div>
            </div>

            {/* Imagem 5: Frozen no Gelo */}
            <div className="rounded-ds-xl border border-emerald-200/90 bg-white p-4 flex flex-col justify-between space-y-3 shadow-ds-sm hover:shadow-ds-card-hover hover:border-sky-500/50 hover:-translate-y-1.5 transition-all duration-300 group">
              <div className="relative aspect-[16/11] rounded-ds-lg overflow-hidden border border-border bg-brand-950">
                <Image
                  src="/images/products/frozen-natural-caixa-gelo.webp"
                  alt="Caixa 5L de Frozen Natural Nutri Açaí no gelo cristalino"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
                />
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-sky-700 bg-sky-50 px-2 py-0.5 rounded">
                  Linha Frozens
                </span>
                <h3 className="font-display font-semibold text-sm text-text-primary group-hover:text-sky-700 transition-colors">
                  Refrescância Industrial Estilo Grego
                </h3>
                <p className="text-xs text-text-secondary leading-relaxed">
                  Base láctea leve de alto rendimento para buffets de sobremesa e lojas de açaí.
                </p>
              </div>
            </div>

            {/* Imagem 6: Açaí + Chimarrão */}
            <div className="rounded-ds-xl border border-emerald-200/90 bg-white p-4 flex flex-col justify-between space-y-3 shadow-ds-sm hover:shadow-ds-card-hover hover:border-emerald-500/50 hover:-translate-y-1.5 transition-all duration-300 group">
              <div className="relative aspect-[16/11] rounded-ds-lg overflow-hidden border border-border bg-brand-950">
                <Image
                  src="/images/institutional/acai-tradicao-gaucha-chimarrao.webp"
                  alt="Açaí Nutri Açaí e Cuia de Chimarrão Gaúcho"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
                />
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                  Origem Gaúcha
                </span>
                <h3 className="font-display font-semibold text-sm text-text-primary group-hover:text-emerald-700 transition-colors">
                  Tradição Regional
                </h3>
                <p className="text-xs text-text-secondary leading-relaxed">
                  Orgulho das raízes do RS com logística eficiente e compromisso com nossos parceiros.
                </p>
              </div>
            </div>

          </div>

        </Container>
      </section>

      {/* =====================================================================
          SEÇÃO 7 — AUTORIDADE INDUSTRIAL (RELEVÂNCIA PARA CLIENTES B2B)
          ===================================================================== */}
      <section className="py-16 md:py-24 bg-surface-alt border-t border-brand-200/80" aria-labelledby="authority-b2b-heading">
        <Container size="xl" className="space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <Badge variant="primary" size="sm">Segurança B2B</Badge>
            <h2 id="authority-b2b-heading" className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-text-primary tracking-tight">
              Por que a Estrutura da Nutri Açaí é Relevante para o Seu Negócio
            </h2>
            <p className="text-text-secondary text-sm sm:text-base">
              Relação direta entre os recursos confirmados da indústria e as demandas de compradores comerciais.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Coluna 1: Para Distribuidores */}
            <div className="rounded-ds-xl border border-brand-200/90 bg-white p-6 sm:p-8 space-y-4 shadow-ds-sm hover:shadow-ds-card-hover hover:border-primary/50 hover:-translate-y-1.5 transition-all duration-300">
              <div className="w-10 h-10 rounded-ds-md bg-primary/10 flex items-center justify-center text-primary">
                <Truck className="w-5 h-5" aria-hidden="true" />
              </div>
              <h3 className="font-display font-semibold text-lg text-text-primary">
                Para Distribuidores &amp; Atacado
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                A estrutura fabril própria proporciona retaguarda para atendimento em escala comercial, 
                permitindo ao distribuidor expandir suas rotas comerciais com fornecimento direto da indústria.
              </p>
              <div className="pt-2">
                <Link 
                  href="/seja-um-distribuidor" 
                  className="inline-flex items-center text-xs font-semibold text-primary hover:text-primary-hover gap-1 focus-visible:outline-primary rounded-ds-sm"
                >
                  <span>Saiba como distribuir</span>
                  <ChevronRight className="w-3.5 h-3.5" aria-hidden="true" />
                </Link>
              </div>
            </div>

            {/* Coluna 2: Para Food Service */}
            <div className="rounded-ds-xl border border-brand-200/90 bg-white p-6 sm:p-8 space-y-4 shadow-ds-sm hover:shadow-ds-card-hover hover:border-secondary/50 hover:-translate-y-1.5 transition-all duration-300">
              <div className="w-10 h-10 rounded-ds-md bg-secondary/10 flex items-center justify-center text-secondary">
                <Building2 className="w-5 h-5" aria-hidden="true" />
              </div>
              <h3 className="font-display font-semibold text-lg text-text-primary">
                Para Operações de Food Service
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                A produção própria e o rigoroso controle de processos viabilizam o fornecimento de caixas de 5L, 10L e baldes 
                com padrão industrial para açaiterias, sorveterias e lanchonetes.
              </p>
              <div className="pt-2">
                <Link 
                  href="/food-service" 
                  className="inline-flex items-center text-xs font-semibold text-secondary hover:text-secondary-hover gap-1 focus-visible:outline-secondary rounded-ds-sm"
                >
                  <span>Conhecer Soluções Food Service</span>
                  <ChevronRight className="w-3.5 h-3.5" aria-hidden="true" />
                </Link>
              </div>
            </div>

            {/* Coluna 3: Para Varejo e Marcas Próprias */}
            <div className="rounded-ds-xl border border-brand-200/90 bg-white p-6 sm:p-8 space-y-4 shadow-ds-sm hover:shadow-ds-card-hover hover:border-accent/50 hover:-translate-y-1.5 transition-all duration-300">
              <div className="w-10 h-10 rounded-ds-md bg-accent/10 flex items-center justify-center text-accent">
                <Layers className="w-5 h-5" aria-hidden="true" />
              </div>
              <h3 className="font-display font-semibold text-lg text-text-primary">
                Para Varejo &amp; Marca Própria
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Linhas de 1,5L e potes individuais Nutrinho (200/220ml) prontas para comercialização, além de suporte de equipe técnica para projetos de terceirização fabril.
              </p>
              <div className="pt-2">
                <Link 
                  href="/marca-propria" 
                  className="inline-flex items-center text-xs font-semibold text-accent hover:text-accent-hover gap-1 focus-visible:outline-accent rounded-ds-sm"
                >
                  <span>Consultar terceirização</span>
                  <ChevronRight className="w-3.5 h-3.5" aria-hidden="true" />
                </Link>
              </div>
            </div>

          </div>

        </Container>
      </section>

      {/* =====================================================================
          SEÇÃO 8 — CTA COMERCIAL FINAL
          ===================================================================== */}
      <section className="py-16 md:py-24 bg-brand-950 text-white" aria-labelledby="factory-cta-heading">
        <Container size="xl">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <h2 id="factory-cta-heading" className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
              Construa uma Parceria Direta com a Indústria
            </h2>
            <p className="text-white/70 text-base sm:text-lg leading-relaxed">
              Conecte sua empresa a uma indústria estruturada em Gravataí/RS com fornecimento contínuo de açaí no atacado 
              e atendimento comercial especializado para o seu canal de vendas.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                href="/contato" 
                variant="white" 
                size="lg"
                className="shadow-ds-md w-full sm:w-auto font-semibold focus-visible:outline-white"
                rightIcon={<ArrowRight className="w-5 h-5 text-brand-950" aria-hidden="true" />}
              >
                <span className="text-brand-950 font-semibold">Solicitar uma Cotação</span>
              </Button>
              <Button 
                href="/seja-um-distribuidor" 
                variant="outline" 
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 hover:border-white w-full sm:w-auto"
              >
                Seja um Distribuidor
              </Button>
              <a
                href={`https://wa.me/5551994281252?text=${encodeURIComponent('Olá! Estive conhecendo a fábrica da Nutri Açaí pelo site e gostaria de conversar com a equipe comercial.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-ds-md text-sm font-semibold bg-[#25D366] hover:bg-[#20ba5a] text-white shadow-ds-md transition-colors w-full sm:w-auto"
              >
                <MessageCircle className="w-4 h-4 fill-current" aria-hidden="true" />
                <span>Falar no WhatsApp</span>
              </a>
            </div>

            {/* Esclarecimento dos Canais de Atendimento */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 text-xs text-white/70 max-w-2xl mx-auto border-t border-white/10 text-center">
              <div>
                <strong className="text-white block font-medium mb-0.5">Cotação via Formulário</strong>
                Tabelas e volumes para sua operação
              </div>
              <div>
                <strong className="text-white block font-medium mb-0.5">Parceria de Distribuição</strong>
                Candidatura para atacado regional
              </div>
              <div>
                <strong className="text-white block font-medium mb-0.5">WhatsApp Comercial</strong>
                Atendimento direto com a fábrica
              </div>
            </div>
            <p className="text-xs text-white/50 pt-2">
              Gravataí / RS — Produção própria com fornecimento B2B desde 2022
            </p>
          </div>
        </Container>
      </section>

    </div>
  );
}
