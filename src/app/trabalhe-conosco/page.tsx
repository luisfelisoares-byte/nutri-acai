import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { JsonLd } from '@/components/seo/JsonLd';
import { getWebPageSchema, getBreadcrumbSchema, SITE_URL } from '@/lib/schema';
import { 
  Users, 
  MessageCircle, 
  MapPin, 
  ShieldCheck, 
  Factory, 
  FlaskConical, 
  Truck, 
  Briefcase, 
  CheckCircle2, 
  FileText, 
  Sparkles,
  ArrowRight
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Trabalhe Conosco | Recursos Humanos & Banco de Talentos | Nutri Açaí',
  description: 'Faça parte da equipe Nutri Açaí. Envie seu currículo para o banco de talentos da nossa indústria em Gravataí/RS através do canal oficial de RH.',
  alternates: {
    canonical: `${SITE_URL}/trabalhe-conosco`,
  },
  openGraph: {
    title: 'Trabalhe Conosco | Recursos Humanos & Banco de Talentos | Nutri Açaí',
    description: 'Faça parte da equipe Nutri Açaí. Envie seu currículo para o banco de talentos da nossa indústria em Gravataí/RS através do canal oficial de RH.',
    url: `${SITE_URL}/trabalhe-conosco`,
  },
};

const WHATSAPP_PHONE = '5551992465908';
const WHATSAPP_DISPLAY = '(51) 99246-5908';
const WHATSAPP_MESSAGE = 'Olá, gostaria de enviar meu currículo para o banco de talentos da Nutri Açaí.';
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

export default function TrabalheConoscoPage() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      {/* Schema Estruturado */}
      <JsonLd 
        data={getWebPageSchema(
          `${SITE_URL}/trabalhe-conosco`,
          'Trabalhe Conosco | Recursos Humanos & Banco de Talentos | Nutri Açaí',
          'Faça parte da equipe Nutri Açaí. Envie seu currículo para o banco de talentos da nossa indústria em Gravataí/RS através do canal oficial de RH.',
          'ContactPage'
        )} 
      />
      <JsonLd 
        data={getBreadcrumbSchema([
          { name: 'Início', url: SITE_URL },
          { name: 'Trabalhe Conosco', url: `${SITE_URL}/trabalhe-conosco` }
        ])} 
      />

      {/* =====================================================================
          SEÇÃO 1 — HERO COM FUNDO SÓLIDO AZUL PETRÓLEO PROFUNDO (#1a3644)
          Identidade visual própria de Recursos Humanos / Carreiras
          ===================================================================== */}
      <section 
        className="bg-[#1a3644] text-white pt-12 pb-14 md:pt-20 md:pb-24 border-b border-[#132934]"
        aria-labelledby="careers-hero-heading"
      >
        <Container size="xl">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            {/* Badge Institucional */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#244a5d] text-[#e2eff3] border border-[#32627a]">
              <Users className="w-3.5 h-3.5 text-[#8ac3d9]" aria-hidden="true" />
              <span>Oportunidades &amp; Carreiras</span>
            </div>

            {/* Título Principal H1 */}
            <h1 
              id="careers-hero-heading"
              className="font-display font-bold text-2xl sm:text-4xl md:text-5xl lg:text-[3.25rem] text-white tracking-tight leading-tight sm:leading-[1.15]"
            >
              Trabalhe Conosco na Nutri Açaí
            </h1>

            {/* Texto Institucional Curto, Humano e Profissional */}
            <p className="text-white/90 text-sm sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
              &ldquo;Construímos nossa indústria com pessoas comprometidas, talentos que querem crescer e equipes que fazem acontecer.&rdquo;
            </p>

            <p className="text-white/75 text-xs sm:text-base leading-relaxed max-w-2xl mx-auto">
              Nossa fábrica em Gravataí/RS atua com padrão industrial de excelência e dedicação diária. Recebemos currículos continuamente para composição do nosso banco de talentos.
            </p>

            {/* CTA Principal de Envio via WhatsApp Oficial */}
            <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 rounded-ds-md bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-sm sm:text-base shadow-ds-md hover:shadow-ds-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 focus-visible:outline-white cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 fill-current shrink-0" aria-hidden="true" />
                <span>Enviar Currículo via WhatsApp</span>
              </a>
            </div>

            {/* Indicadores Institucionais Verificados */}
            <div className="pt-4 sm:pt-6 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs text-white/80 font-medium">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-[#8ac3d9]" aria-hidden="true" />
                Indústria em Gravataí / RS
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-white/30 hidden sm:inline-block" aria-hidden="true" />
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#8ac3d9]" aria-hidden="true" />
                Canal Direto de RH: {WHATSAPP_DISPLAY}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-white/30 hidden sm:inline-block" aria-hidden="true" />
              <span className="inline-flex items-center gap-1.5">
                <Users className="w-4 h-4 text-[#8ac3d9]" aria-hidden="true" />
                Banco de Talentos Industrial
              </span>
            </div>
          </div>
        </Container>
      </section>

      {/* =====================================================================
          SEÇÃO 2 — CULTURA & AMBIENTE DE TRABALHO (#f1f6f8)
          Apresentação da indústria com base em informações reais do projeto
          ===================================================================== */}
      <section 
        className="py-16 md:py-24 bg-[#f1f6f8] border-b border-[#dbe7ec]"
        aria-labelledby="workplace-culture-heading"
      >
        <Container size="xl">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-white text-[#1a3644] border border-[#d2e2e8]">
              <Sparkles className="w-3.5 h-3.5 text-[#244a5d]" aria-hidden="true" />
              Nossa Cultura
            </span>
            <h2 
              id="workplace-culture-heading"
              className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-text-primary tracking-tight"
            >
              Compromisso, Padrão Industrial e Valorização das Pessoas
            </h2>
            <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
              Na Nutri Açaí, cada etapa da nossa cadeia produtiva reflete o cuidado técnico e a dedicação das pessoas que compõem nossa equipe em Gravataí/RS.
            </p>
          </div>

          {/* Grid de 3 Pilares com Cards Sólidos e Elegantes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            <div className="bg-white p-7 md:p-8 rounded-ds-xl border border-[#d2e2e8] shadow-ds-sm hover:shadow-ds-card hover:border-[#1a3644]/40 transition-all duration-300 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-ds-lg bg-[#f1f6f8] border border-[#d2e2e8] flex items-center justify-center text-[#1a3644]">
                  <Factory className="w-6 h-6" aria-hidden="true" />
                </div>
                <h3 className="font-display font-bold text-lg text-text-primary">
                  Padrão Industrial com Dedicação
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Operamos com rigor de higiene, segurança alimentar e boas práticas de fabricação, valorizando a atenção aos detalhes em cada lote produzido.
                </p>
              </div>
              <div className="pt-2 border-t border-slate-100 flex items-center gap-2 text-xs text-text-muted font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#1a3644]" aria-hidden="true" />
                <span>Processos e qualidade controlada</span>
              </div>
            </div>

            <div className="bg-white p-7 md:p-8 rounded-ds-xl border border-[#d2e2e8] shadow-ds-sm hover:shadow-ds-card hover:border-[#1a3644]/40 transition-all duration-300 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-ds-lg bg-[#f1f6f8] border border-[#d2e2e8] flex items-center justify-center text-[#1a3644]">
                  <Users className="w-6 h-6" aria-hidden="true" />
                </div>
                <h3 className="font-display font-bold text-lg text-text-primary">
                  Equipes Colaborativas
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Estimulamos o respeito mútuo, a comunicação direta e a integração entre diferentes setores da nossa unidade fabril e administrativa.
                </p>
              </div>
              <div className="pt-2 border-t border-slate-100 flex items-center gap-2 text-xs text-text-muted font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#1a3644]" aria-hidden="true" />
                <span>Trabalho em equipe e transparência</span>
              </div>
            </div>

            <div className="bg-white p-7 md:p-8 rounded-ds-xl border border-[#d2e2e8] shadow-ds-sm hover:shadow-ds-card hover:border-[#1a3644]/40 transition-all duration-300 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-ds-lg bg-[#f1f6f8] border border-[#d2e2e8] flex items-center justify-center text-[#1a3644]">
                  <Briefcase className="w-6 h-6" aria-hidden="true" />
                </div>
                <h3 className="font-display font-bold text-lg text-text-primary">
                  Indústria em Desenvolvimento
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Com infraestrutura própria e atendimento a Food Service, Varejo e Distribuidores, oferecemos um ambiente de atividade contínua e aprendizado prático.
                </p>
              </div>
              <div className="pt-2 border-t border-slate-100 flex items-center gap-2 text-xs text-text-muted font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#1a3644]" aria-hidden="true" />
                <span>Unidade própria em Gravataí/RS</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =====================================================================
          SEÇÃO 3 — ÁREAS DE ATUAÇÃO NA INDÚSTRIA (Fundo Branco com Cards Estruturados)
          Referência para o candidato indicar seu interesse (sem inventar vagas abertas)
          ===================================================================== */}
      <section 
        className="py-16 md:py-24 bg-white border-b border-slate-200"
        aria-labelledby="operational-areas-heading"
      >
        <Container size="xl">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#f1f6f8] text-[#1a3644] border border-[#d2e2e8]">
              <Factory className="w-3.5 h-3.5 text-[#1a3644]" aria-hidden="true" />
              Estrutura Fabril
            </span>
            <h2 
              id="operational-areas-heading"
              className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-text-primary tracking-tight"
            >
              Áreas de Atuação na Nutri Açaí
            </h2>
            <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
              Indique no contato a área em que deseja atuar ao encaminhar seu currículo para nosso banco de talentos:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Área 1: Produção */}
            <div className="p-6 rounded-ds-xl bg-[#f8fafb] border border-[#dbe7ec] hover:border-[#1a3644]/50 hover:bg-white transition-all duration-200 space-y-3">
              <div className="w-10 h-10 rounded-ds-md bg-white border border-[#dbe7ec] flex items-center justify-center text-[#1a3644]">
                <Factory className="w-5 h-5" aria-hidden="true" />
              </div>
              <h3 className="font-display font-bold text-base text-text-primary">
                Produção &amp; Envase
              </h3>
              <p className="text-text-secondary text-xs leading-relaxed">
                Operações fabris no preparo, dosagem e envase das linhas industriais em caixas, baldes e potes de açaí, cremes e sorbets.
              </p>
            </div>

            {/* Área 2: Qualidade */}
            <div className="p-6 rounded-ds-xl bg-[#f8fafb] border border-[#dbe7ec] hover:border-[#1a3644]/50 hover:bg-white transition-all duration-200 space-y-3">
              <div className="w-10 h-10 rounded-ds-md bg-white border border-[#dbe7ec] flex items-center justify-center text-[#1a3644]">
                <FlaskConical className="w-5 h-5" aria-hidden="true" />
              </div>
              <h3 className="font-display font-bold text-base text-text-primary">
                Qualidade &amp; Laboratório
              </h3>
              <p className="text-text-secondary text-xs leading-relaxed">
                Controle de processos microbiológicos, acompanhamento de parâmetros técnicos e garantia do padrão de qualidade.
              </p>
            </div>

            {/* Área 3: Logística */}
            <div className="p-6 rounded-ds-xl bg-[#f8fafb] border border-[#dbe7ec] hover:border-[#1a3644]/50 hover:bg-white transition-all duration-200 space-y-3">
              <div className="w-10 h-10 rounded-ds-md bg-white border border-[#dbe7ec] flex items-center justify-center text-[#1a3644]">
                <Truck className="w-5 h-5" aria-hidden="true" />
              </div>
              <h3 className="font-display font-bold text-base text-text-primary">
                Logística &amp; Expedição
              </h3>
              <p className="text-text-secondary text-xs leading-relaxed">
                Gestão de armazenamento em câmaras frigoríficas, controle de estoque de produtos acabados e apoio à expedição.
              </p>
            </div>

            {/* Área 4: Administrativo */}
            <div className="p-6 rounded-ds-xl bg-[#f8fafb] border border-[#dbe7ec] hover:border-[#1a3644]/50 hover:bg-white transition-all duration-200 space-y-3">
              <div className="w-10 h-10 rounded-ds-md bg-white border border-[#dbe7ec] flex items-center justify-center text-[#1a3644]">
                <Briefcase className="w-5 h-5" aria-hidden="true" />
              </div>
              <h3 className="font-display font-bold text-base text-text-primary">
                Comercial &amp; Administrativo
              </h3>
              <p className="text-text-secondary text-xs leading-relaxed">
                Rotinas de suporte ao cliente B2B, faturamento, suprimentos e apoio às rotinas administrativas da indústria.
              </p>
            </div>
          </div>

          <div className="mt-8 p-4 rounded-ds-lg bg-[#f1f6f8] border border-[#d2e2e8] text-center max-w-2xl mx-auto">
            <p className="text-xs text-text-secondary">
              <strong className="text-text-primary font-semibold">Nota Institucional:</strong> As áreas acima descrevem os setores ativos de nossa planta industrial. Os currículos recebidos são cadastrados em nosso banco de talentos para futuras oportunidades conforme a demanda operacional.
            </p>
          </div>
        </Container>
      </section>

      {/* =====================================================================
          SEÇÃO 4 — COMO ENVIAR SEU CURRÍCULO & CTA FINAL
          Orientações claras para envio com fluxo de WhatsApp oficial
          ===================================================================== */}
      <section 
        className="py-16 md:py-24 bg-[#1a3644] text-white"
        aria-labelledby="how-to-apply-heading"
      >
        <Container size="xl">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#244a5d] text-[#e2eff3] border border-[#32627a]">
              <FileText className="w-3.5 h-3.5 text-[#8ac3d9]" aria-hidden="true" />
              Passo a Passo
            </span>
            <h2 
              id="how-to-apply-heading"
              className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-white tracking-tight"
            >
              Como Enviar seu Currículo
            </h2>
            <p className="text-white/80 text-sm sm:text-base leading-relaxed">
              O envio é realizado de forma simples e direta pelo nosso canal oficial de Recursos Humanos no WhatsApp:
            </p>
          </div>

          {/* Grid de 4 Passos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-[#132934] p-6 rounded-ds-xl border border-[#244a5d] space-y-3">
              <div className="w-8 h-8 rounded-full bg-[#244a5d] text-[#8ac3d9] font-bold text-sm flex items-center justify-center">
                1
              </div>
              <h3 className="font-bold text-white text-base">Prepare seu currículo</h3>
              <p className="text-white/70 text-xs leading-relaxed">
                Tenha em mãos seu arquivo de currículo atualizado em formato PDF ou Word.
              </p>
            </div>

            <div className="bg-[#132934] p-6 rounded-ds-xl border border-[#244a5d] space-y-3">
              <div className="w-8 h-8 rounded-full bg-[#244a5d] text-[#8ac3d9] font-bold text-sm flex items-center justify-center">
                2
              </div>
              <h3 className="font-bold text-white text-base">Informe nome e cidade</h3>
              <p className="text-white/70 text-xs leading-relaxed">
                Identifique seu nome completo e cidade onde reside (nossa fábrica é em Gravataí/RS).
              </p>
            </div>

            <div className="bg-[#132934] p-6 rounded-ds-xl border border-[#244a5d] space-y-3">
              <div className="w-8 h-8 rounded-full bg-[#244a5d] text-[#8ac3d9] font-bold text-sm flex items-center justify-center">
                3
              </div>
              <h3 className="font-bold text-white text-base">Indique a área de interesse</h3>
              <p className="text-white/70 text-xs leading-relaxed">
                Mencione a área desejada (Produção, Qualidade, Logística, Comercial ou Administrativo).
              </p>
            </div>

            <div className="bg-[#132934] p-6 rounded-ds-xl border border-[#244a5d] space-y-3">
              <div className="w-8 h-8 rounded-full bg-[#244a5d] text-[#8ac3d9] font-bold text-sm flex items-center justify-center">
                4
              </div>
              <h3 className="font-bold text-white text-base">Envie pelo WhatsApp</h3>
              <p className="text-white/70 text-xs leading-relaxed">
                Envie a mensagem diretamente para o canal oficial de RH da Nutri Açaí.
              </p>
            </div>
          </div>

          {/* Card de Ação Centralizada */}
          <div className="max-w-2xl mx-auto bg-[#132934] border border-[#244a5d] p-5 sm:p-8 rounded-ds-xl text-center space-y-5">
            <div className="space-y-2">
              <p className="text-xs text-[#8ac3d9] uppercase tracking-wider font-bold">
                Canal Oficial de Recursos Humanos
              </p>
              <p className="text-lg sm:text-xl font-bold text-white">
                WhatsApp Oficial: {WHATSAPP_DISPLAY}
              </p>
              <p className="text-xs text-white/70 max-w-lg mx-auto leading-relaxed">
                Mensagem padrão: &ldquo;{WHATSAPP_MESSAGE}&rdquo;
              </p>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 rounded-ds-md bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-sm shadow-ds-md hover:shadow-ds-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 focus-visible:outline-white cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-current" aria-hidden="true" />
                <span>Enviar Currículo</span>
              </a>

              <Link
                href="/contato"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-ds-md bg-[#244a5d] text-white hover:bg-[#2e5d75] font-semibold text-sm transition-colors focus-visible:outline-white cursor-pointer"
              >
                <span>Outros Contatos</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>

            <div className="pt-2 border-t border-[#244a5d]/60 text-[11px] text-white/60">
              <p>Nutri Açaí Indústria de Alimentos Ltda • Gravataí / RS • Brasil</p>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
