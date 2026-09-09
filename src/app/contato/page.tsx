import React, { Suspense } from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { ContactForm } from '@/components/contact/ContactForm';
import { JsonLd } from '@/components/seo/JsonLd';
import { getWebPageSchema, getBreadcrumbSchema, SITE_URL } from '@/lib/schema';
import { 
  MessageCircle, 
  Store, 
  Box, 
  Sparkles, 
  MapPin, 
  Clock, 
  Instagram, 
  ShieldCheck, 
  ArrowRight, 
  ChevronRight,
  HelpCircle,
  Building2
} from 'lucide-react';

const OFFICIAL_PHONE = '5551994281252';
const DISPLAY_PHONE = '(51) 99428-1252';

export const metadata: Metadata = {
  title: 'Contato & Atendimento Comercial',
  description: 
    'Canais oficiais de atendimento B2B da Nutri Açaí. Fale com nossa equipe comercial para cotações Food Service, distribuição e projetos especiais.',
  alternates: {
    canonical: 'https://nutriacai.com.br/contato',
  },
  openGraph: {
    title: 'Contato & Atendimento Comercial | Nutri Açaí',
    description: 
      'Canais oficiais de atendimento B2B da Nutri Açaí. Fale com nossa equipe comercial para cotações Food Service, distribuição e projetos especiais.',
    url: 'https://nutriacai.com.br/contato',
    siteName: 'Nutri Açaí',
    locale: 'pt_BR',
    type: 'website',
    images: [
      {
        url: '/images/brand/og-banner-1200x630.jpg',
        width: 1200,
        height: 630,
        alt: 'Canais de Contato Nutri Açaí',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contato & Atendimento Comercial | Nutri Açaí',
    description: 
      'Canais oficiais de atendimento B2B da Nutri Açaí. Fale com nossa equipe comercial para cotações Food Service, distribuição e projetos especiais.',
    images: ['/images/brand/og-banner-1200x630.jpg'],
  },
};

const WHATSAPP_LINKS = [
  {
    id: 'distribuidor',
    title: 'Distribuição Comercial',
    desc: 'Quero ser distribuidor ou revendedor regional',
    message: 'Olá! Tenho interesse em ser distribuidor da Nutri Açaí.',
    icon: <Store className="w-5 h-5 text-emerald-600" />,
  },
  {
    id: 'food-service',
    title: 'Food Service & Operações',
    desc: 'Cotação para caixas de 5L, 10L e baldes',
    message: 'Olá! Gostaria de solicitar informações sobre os produtos Nutri Açaí para Food Service.',
    icon: <Box className="w-5 h-5 text-emerald-600" />,
  },
  {
    id: 'marca-propria',
    title: 'Marca Própria (Private Label)',
    desc: 'Desenvolver produtos sob medida para minha rede',
    message: 'Olá! Tenho interesse em desenvolver uma linha de Marca Própria com a Nutri Açaí.',
    icon: <Sparkles className="w-5 h-5 text-emerald-600" />,
  },
  {
    id: 'outros',
    title: 'Outros Assuntos / Geral',
    desc: 'Dúvidas institucionais e atendimento geral',
    message: 'Olá! Gostaria de falar com a equipe da Nutri Açaí.',
    icon: <HelpCircle className="w-5 h-5 text-emerald-600" />,
  },
];

export default function ContatoPage() {
  const defaultWhatsAppUrl = `https://wa.me/${OFFICIAL_PHONE}?text=${encodeURIComponent('Olá! Gostaria de falar com a equipe da Nutri Açaí.')}`;

  return (
    <div className="flex flex-col w-full bg-surface text-text-primary">
      {/* Schema.org: Dados Estruturados da Página de Contato */}
      <JsonLd 
        data={getWebPageSchema(
          `${SITE_URL}/contato`,
          'Contato & Atendimento Comercial | Nutri Açaí',
          'Canais oficiais de atendimento B2B da Nutri Açaí. Fale com nossa equipe comercial para cotações Food Service, distribuição e projetos especiais.',
          'ContactPage'
        )} 
      />
      <JsonLd 
        data={getBreadcrumbSchema([
          { name: 'Início', url: SITE_URL },
          { name: 'Contato', url: `${SITE_URL}/contato` }
        ])} 
      />

      {/* =====================================================================
          SEÇÃO 1 — HERO DA CENTRAL DE ATENDIMENTO
          ===================================================================== */}
      <section className="relative overflow-hidden pt-12 pb-16 md:pt-20 md:pb-20 bg-surface-alt border-b border-brand-200/80">
        <Container size="xl">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2">
              <Badge variant="primary" size="md" icon={<MessageCircle className="w-3.5 h-3.5 text-primary" />}>
                Canais Oficiais de Atendimento B2B
              </Badge>
            </div>

            <h1 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] text-text-primary tracking-tight leading-[1.15]">
              Contato Nutri Açaí — Atendimento Comercial B2B
            </h1>

            <p className="text-text-secondary text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
              Fale com a equipe da <strong className="text-text-primary font-semibold">Nutri Açaí</strong> e encontre o canal mais adequado para sua necessidade comercial.
            </p>

            {/* CTA Principal de WhatsApp */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={defaultWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-base shadow-md hover:shadow-lg transition-all focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-400"
              >
                <MessageCircle className="w-5 h-5 fill-current shrink-0" />
                <span>Falar pelo WhatsApp Oficial: {DISPLAY_PHONE}</span>
              </a>
            </div>

            {/* Fatos Confirmados */}
            <div className="pt-4 flex flex-wrap items-center justify-center gap-4 text-xs text-text-secondary font-medium">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-primary" /> Fábrica em Gravataí / RS
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-border" />
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-primary" /> Fornecimento B2B &amp; Atacado
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-border" />
              <span className="inline-flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-primary" /> Seg a Sex • 08h às 18h
              </span>
            </div>
          </div>
        </Container>
      </section>

      {/* =====================================================================
          SEÇÃO 2 — ESCOLHA O SEU ASSUNTO (DIRECIONAMENTO RÁPIDO)
          ===================================================================== */}
      <section className="py-12 md:py-16 bg-surface-green border-b border-emerald-200/80">
        <Container size="xl">
          <div className="text-center max-w-2xl mx-auto space-y-2 mb-10">
            <h2 className="font-display font-bold text-xl sm:text-2xl text-text-primary">
              Como podemos ajudar a sua empresa hoje?
            </h2>
            <p className="text-text-secondary text-xs sm:text-sm">
              Selecione o assunto do seu interesse para acessar a área correta do site ou falar direto conosco.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            
            {/* Opção 1: Food Service */}
            <a 
              href="#formulario" 
              className="p-5 rounded-ds-2xl bg-white border border-emerald-200/80 shadow-ds-sm hover:border-emerald-600/60 hover:shadow-ds-card-hover hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between space-y-3 group"
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700 group-hover:scale-105 transition-transform shadow-ds-xs">
                <Box className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display font-bold text-sm text-text-primary group-hover:text-primary transition-colors">
                  Cotação / Food Service
                </h3>
                <p className="text-xs text-text-secondary mt-1 leading-relaxed">
                  Caixas de 5L, 10L e Baldes para açaiterias e sorveterias.
                </p>
              </div>
              <span className="text-xs font-semibold text-primary inline-flex items-center gap-1 pt-1">
                Ir ao formulário <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </a>

            {/* Opção 2: Quero ser Distribuidor */}
            <Link 
              href="/seja-um-distribuidor" 
              className="p-5 rounded-ds-2xl bg-white border border-emerald-200/80 shadow-ds-sm hover:border-emerald-600/60 hover:shadow-ds-card-hover hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between space-y-3 group"
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700 group-hover:scale-105 transition-transform shadow-ds-xs">
                <Store className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display font-bold text-sm text-text-primary group-hover:text-primary transition-colors">
                  Quero ser Distribuidor
                </h3>
                <p className="text-xs text-text-secondary mt-1 leading-relaxed">
                  Credenciamento comercial e representação regional.
                </p>
              </div>
              <span className="text-xs font-semibold text-primary inline-flex items-center gap-1 pt-1">
                Acessar captação <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>

            {/* Opção 3: Marca Própria */}
            <Link 
              href="/marca-propria" 
              className="p-5 rounded-ds-2xl bg-white border border-emerald-200/80 shadow-ds-sm hover:border-emerald-600/60 hover:shadow-ds-card-hover hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between space-y-3 group"
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700 group-hover:scale-105 transition-transform shadow-ds-xs">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display font-bold text-sm text-text-primary group-hover:text-primary transition-colors">
                  Marca Própria
                </h3>
                <p className="text-xs text-text-secondary mt-1 leading-relaxed">
                  Private Label e terceirização para redes e franquias.
                </p>
              </div>
              <span className="text-xs font-semibold text-primary inline-flex items-center gap-1 pt-1">
                Ver solução <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>

            {/* Opção 4: Produtos */}
            <Link 
              href="/produtos" 
              className="p-5 rounded-ds-2xl bg-white border border-emerald-200/80 shadow-ds-sm hover:border-emerald-600/60 hover:shadow-ds-card-hover hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between space-y-3 group"
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700 group-hover:scale-105 transition-transform shadow-ds-xs">
                <Building2 className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display font-bold text-sm text-text-primary group-hover:text-primary transition-colors">
                  Linhas &amp; Produtos
                </h3>
                <p className="text-xs text-text-secondary mt-1 leading-relaxed">
                  Catálogo dos 34 SKUs oficiais da fábrica.
                </p>
              </div>
              <span className="text-xs font-semibold text-primary inline-flex items-center gap-1 pt-1">
                Ver catálogo <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>

            {/* Opção 5: Outros Assuntos */}
            <a 
              href="#formulario" 
              className="p-5 rounded-ds-2xl bg-white border border-emerald-200/80 shadow-ds-sm hover:border-emerald-600/60 hover:shadow-ds-card-hover hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between space-y-3 group"
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700 group-hover:scale-105 transition-transform shadow-ds-xs">
                <HelpCircle className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display font-bold text-sm text-text-primary group-hover:text-primary transition-colors">
                  Outros Assuntos
                </h3>
                <p className="text-xs text-text-secondary mt-1 leading-relaxed">
                  Dúvidas gerais, fornecedores e atendimento.
                </p>
              </div>
              <span className="text-xs font-semibold text-primary inline-flex items-center gap-1 pt-1">
                Preencher mensagem <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </a>

          </div>
        </Container>
      </section>

      {/* =====================================================================
          SEÇÃO 3 — FORMULÁRIO COMERCIAL + CANAIS DE ATENDIMENTO
          ===================================================================== */}
      <section id="formulario" className="py-16 md:py-24 bg-surface-alt border-b border-brand-200/80 scroll-mt-20">
        <Container size="xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            
            {/* Coluna 1: Formulário Comercial (7 colunas) */}
            <div className="lg:col-span-7">
              <Suspense fallback={
                <div className="rounded-2xl bg-surface border border-border p-8 text-center text-text-muted text-sm">
                  Carregando formulário de atendimento...
                </div>
              }>
                <ContactForm />
              </Suspense>
            </div>

            {/* Coluna 2: Canais Diretos & WhatsApp Inteligente (5 colunas) */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Card WhatsApp Inteligente */}
              <div className="rounded-ds-2xl bg-white border border-brand-200/80 p-6 sm:p-7 shadow-ds-card space-y-5">
                <div className="flex items-center justify-between border-b border-border pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                      <MessageCircle className="w-5 h-5 fill-current" />
                    </div>
                    <div>
                      <h2 className="font-display font-bold text-base text-text-primary">
                        WhatsApp Comercial Direto
                      </h2>
                      <p className="text-xs font-semibold text-emerald-700">
                        {DISPLAY_PHONE}
                      </p>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 text-[11px] font-bold">
                    Oficial
                  </span>
                </div>

                <p className="text-xs text-text-secondary leading-relaxed">
                  Clique no assunto abaixo para abrir uma conversa no WhatsApp com a mensagem contextual pré-formatada:
                </p>

                {/* Lista de Botões Contextuais de WhatsApp */}
                <div className="space-y-2">
                  {WHATSAPP_LINKS.map((item) => (
                    <a
                      key={item.id}
                      href={`https://wa.me/${OFFICIAL_PHONE}?text=${encodeURIComponent(item.message)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3 rounded-xl border border-border/80 hover:border-emerald-500 hover:bg-emerald-50/40 transition-all group focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center shrink-0">
                          {item.icon}
                        </div>
                        <div className="text-left">
                          <p className="text-xs font-bold text-text-primary group-hover:text-emerald-700 transition-colors">
                            {item.title}
                          </p>
                          <p className="text-[11px] text-text-muted">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                      <ChevronRight className="w-4 h-4 text-text-muted group-hover:text-emerald-600 transition-colors shrink-0" />
                    </a>
                  ))}
                </div>

                <div className="pt-2 border-t border-border/60 text-center">
                  <a
                    href={defaultWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-emerald-700 hover:text-emerald-800 underline inline-flex items-center gap-1"
                  >
                    Ou inicie uma conversa aberta: {DISPLAY_PHONE}
                  </a>
                </div>
              </div>

              {/* Card de Dados Corporativos */}
              <div className="rounded-2xl bg-surface border border-border p-6 shadow-sm space-y-4">
                <h3 className="font-display font-bold text-sm text-text-primary border-b border-border pb-3">
                  Informações da Empresa
                </h3>

                <div className="space-y-3 text-xs text-text-secondary">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-text-primary block">Parque Fabril:</strong>
                      <span>Gravataí / RS — Brasil</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <ShieldCheck className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-text-primary block">Estrutura:</strong>
                      <span>Indústria com produção própria de açaí e sobremesas geladas com rigoroso controle de processos.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-text-primary block">Horário Comercial:</strong>
                      <span>Segunda a Sexta-feira, das 08h às 18h</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Instagram className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-text-primary block">Canal Oficial:</strong>
                      <a 
                        href="https://www.instagram.com/nutriacaioficial" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary hover:underline font-medium"
                      >
                        @nutriacaioficial no Instagram
                      </a>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-border/60 text-[11px] text-text-muted leading-relaxed">
                  * Razão Social, CNPJ completo e dados cadastrais para faturamento são disponibilizados aos parceiros em etapa de cadastro comercial.
                </div>
              </div>

            </div>

          </div>
        </Container>
      </section>

    </div>
  );
}

