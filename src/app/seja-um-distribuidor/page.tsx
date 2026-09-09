import React from 'react';
import type { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { DistributorApplicationForm } from '@/components/distributors/DistributorApplicationForm';
import { JsonLd } from '@/components/seo/JsonLd';
import { getWebPageSchema, getBreadcrumbSchema, SITE_URL } from '@/lib/schema';
import { 
  Truck, 
  Factory, 
  ShieldCheck, 
  FlaskConical, 
  Boxes, 
  Building2, 
  CheckCircle2, 
  ArrowRight,
  TrendingUp,
  MapPin
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Seja um Distribuidor Oficial',
  description: 
    'Seja um distribuidor Nutri Açaí. Parceria direta com a indústria, fornecimento de açaí em grande escala para Food Service e varejo na sua região.',
  alternates: {
    canonical: 'https://nutriacai.com.br/seja-um-distribuidor',
  },
  openGraph: {
    title: 'Seja um Distribuidor Oficial | Nutri Açaí',
    description: 
      'Seja um distribuidor Nutri Açaí. Parceria direta com a indústria, fornecimento de açaí em grande escala para Food Service e varejo na sua região.',
    url: 'https://nutriacai.com.br/seja-um-distribuidor',
    siteName: 'Nutri Açaí',
    locale: 'pt_BR',
    type: 'website',
    images: [
      {
        url: '/images/brand/og-banner-1200x630.jpg',
        width: 1200,
        height: 630,
        alt: 'Seja um Distribuidor Nutri Açaí',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Seja um Distribuidor Oficial | Nutri Açaí',
    description: 
      'Seja um distribuidor Nutri Açaí. Parceria direta com a indústria, fornecimento de açaí em grande escala para Food Service e varejo na sua região.',
    images: ['/images/brand/og-banner-1200x630.jpg'],
  },
};

export default function SejaUmDistribuidorPage() {
  return (
    <div className="flex flex-col w-full bg-surface text-text-primary">
      {/* Schema.org: Dados Estruturados da Página Seja um Distribuidor */}
      <JsonLd 
        data={getWebPageSchema(
          `${SITE_URL}/seja-um-distribuidor`,
          'Seja um Distribuidor Oficial | Nutri Açaí',
          'Seja um distribuidor Nutri Açaí. Parceria direta com a indústria, fornecimento de açaí em grande escala para Food Service e varejo na sua região.'
        )} 
      />
      <JsonLd 
        data={getBreadcrumbSchema([
          { name: 'Início', url: SITE_URL },
          { name: 'Seja um Distribuidor', url: `${SITE_URL}/seja-um-distribuidor` }
        ])} 
      />

      {/* =====================================================================
          HERO DA LANDING PAGE B2B
          ===================================================================== */}
      <section className="relative overflow-hidden pt-12 pb-16 md:pt-20 md:pb-24 bg-surface-alt border-b border-brand-200/80">
        <Container size="xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2">
                <Badge variant="primary" size="md" icon={<Truck className="w-3.5 h-3.5 text-primary" />}>
                  Expansão de Rede • Parceria Direta com a Indústria
                </Badge>
              </div>

              <h1 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] text-text-primary tracking-tight leading-[1.15]">
                Seja um Distribuidor de Açaí: Parceria Direta com a Indústria
              </h1>

              <p className="text-text-secondary text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Trabalhe diretamente com uma fábrica de açaí sediada em Gravataí/RS. Combinamos <strong className="text-text-primary font-semibold">produção própria</strong>, 
                processos industriais padronizados e fornecimento regular no atacado para distribuidores que abastecem açaiterias, lanchonetes e varejos no Rio Grande do Sul e regiões atendidas.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Button 
                  href="#formulario-candidatura" 
                  variant="primary" 
                  size="lg"
                  className="w-full sm:w-auto"
                  rightIcon={<ArrowRight className="w-5 h-5" />}
                >
                  Preencher Cadastro Comercial
                </Button>
                <Button 
                  href="/produtos" 
                  variant="outline" 
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  Conhecer os Produtos
                </Button>
              </div>

              <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-text-muted">
                <span className="flex items-center gap-1.5 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-feedback-success" />
                  Produção Própria Industrial
                </span>
                <span className="flex items-center gap-1.5 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-feedback-success" />
                  Mix Completo (Food Service &amp; Varejo)
                </span>
                <span className="flex items-center gap-1.5 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-feedback-success" />
                  Operação desde 2022
                </span>
              </div>
            </div>

            {/* Card de Resumo de Vantagens Industriais */}
            <div className="lg:col-span-5">
              <div className="rounded-ds-2xl border border-brand-200/80 bg-white p-6 sm:p-8 shadow-ds-card space-y-6">
                <div className="space-y-2 border-b border-border pb-4">
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                    Oportunidade Comercial
                  </span>
                  <p className="font-display font-bold text-xl text-text-primary">
                    Segurança de Fornecimento para sua Distribuidora
                  </p>
                </div>

                <div className="space-y-4 text-sm text-text-secondary">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded bg-primary/10 flex items-center justify-center text-primary shrink-0 mt-0.5">
                      <Factory className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <p className="font-semibold text-text-primary text-xs sm:text-sm">Fornecimento Direto da Fábrica</p>
                      <p className="text-xs text-text-muted mt-0.5">Sem intermediações comerciais desnecessárias na cadeia de suprimentos.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded bg-secondary/10 flex items-center justify-center text-secondary shrink-0 mt-0.5">
                      <ShieldCheck className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <p className="font-semibold text-text-primary text-xs sm:text-sm">Escala e Regularidade de Lote</p>
                      <p className="text-xs text-text-muted mt-0.5">Processos industriais contínuos garantindo estabilidade de abastecimento comercial.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded bg-accent/10 flex items-center justify-center text-accent shrink-0 mt-0.5">
                      <FlaskConical className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <p className="font-semibold text-text-primary text-xs sm:text-sm">Padronização e Rigor Sanitário</p>
                      <p className="text-xs text-text-muted mt-0.5">Controle de qualidade e processos em conformidade com as normas sanitárias vigentes.</p>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-ds-lg bg-surface-muted border border-border text-xs text-text-muted">
                  <p>
                    <strong>Nota:</strong> Condições comerciais, faixas de faturamento e volumes são definidos de forma individual 
                    após avaliação cadastral da praça pretendida.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* =====================================================================
          SEÇÃO — POR QUE CONHECER A NUTRI AÇAÍ (FATOS CONFIRMADOS)
          ===================================================================== */}
      <section className="py-16 md:py-24 bg-surface-green border-b border-emerald-200/80" aria-labelledby="why-nutriacai-heading">
        <Container size="xl" className="space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <Badge variant="neutral" size="sm">Solidez Fabril</Badge>
            <h2 id="why-nutriacai-heading" className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-text-primary tracking-tight">
              Por que Distribuir Nutri Açaí?
            </h2>
            <p className="text-text-secondary text-sm sm:text-base">
              Fundamentos reais da indústria que dão tranquilidade operacional ao parceiro de distribuição.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-ds-2xl border border-emerald-200/80 bg-white shadow-ds-sm hover:shadow-ds-card-hover hover:border-emerald-600/50 hover:-translate-y-1.5 transition-all duration-300 space-y-3">
              <div className="w-10 h-10 rounded-ds-md bg-emerald-100 flex items-center justify-center text-emerald-700 shadow-ds-xs">
                <Factory className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-lg text-text-primary">Produção Própria</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Toda a linha é fabricada e envasada em instalações industriais próprias em Gravataí/RS, garantindo controle direto de todas as etapas.
              </p>
            </div>

            <div className="p-6 rounded-ds-2xl border border-emerald-200/80 bg-white shadow-ds-sm hover:shadow-ds-card-hover hover:border-emerald-600/50 hover:-translate-y-1.5 transition-all duration-300 space-y-3">
              <div className="w-10 h-10 rounded-ds-md bg-emerald-100 flex items-center justify-center text-emerald-700 shadow-ds-xs">
                <Boxes className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-lg text-text-primary">Mix Completo em 3 Canais</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                De caixas de 5L e 10L para Food Service a potes de 1,5L para varejo e potes individuais Nutrinho (200/220ml com toppings).
              </p>
            </div>

            <div className="p-6 rounded-ds-2xl border border-emerald-200/80 bg-white shadow-ds-sm hover:shadow-ds-card-hover hover:border-emerald-600/50 hover:-translate-y-1.5 transition-all duration-300 space-y-3">
              <div className="w-10 h-10 rounded-ds-md bg-emerald-100 flex items-center justify-center text-emerald-700 shadow-ds-xs">
                <Truck className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-lg text-text-primary">Logística Refrigerada e Fornecimento</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Logística estruturada para expedição contínua e suporte ao abastecimento de distribuidores regionais parceiros.
              </p>
            </div>
          </div>

        </Container>
      </section>

      {/* =====================================================================
          SEÇÃO — PERFIL DO DISTRIBUIDOR (LINGUAGEM ABERTA E CONVIDATIVA)
          ===================================================================== */}
      <section className="py-16 md:py-24 bg-surface-alt border-b border-brand-200/80" aria-labelledby="profile-heading">
        <Container size="xl" className="space-y-10">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <Badge variant="primary" size="sm">Critérios de Avaliação</Badge>
            <h2 id="profile-heading" className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-text-primary tracking-tight">
              Perfil do Distribuidor Parceiro
            </h2>
            <p className="text-text-secondary text-sm sm:text-base">
              Conte-nos sobre sua estrutura. Avaliamos cada proposta de acordo com a realidade e demanda da praça comercial.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-ds-2xl bg-white border border-brand-200/80 shadow-ds-sm hover:shadow-ds-card-hover hover:border-primary/60 hover:-translate-y-1.5 transition-all duration-300 space-y-2">
              <p className="font-bold text-sm text-text-primary flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" /> Região de Atuação
              </p>
              <p className="text-xs text-text-secondary leading-relaxed">
                Mapeamento das cidades, bairros e rotas comerciais que sua empresa atende com regularidade.
              </p>
            </div>

            <div className="p-6 rounded-ds-2xl bg-white border border-brand-200/80 shadow-ds-sm hover:shadow-ds-card-hover hover:border-secondary/60 hover:-translate-y-1.5 transition-all duration-300 space-y-2">
              <p className="font-bold text-sm text-text-primary flex items-center gap-2">
                <Building2 className="w-4 h-4 text-secondary" /> Armazenamento
              </p>
              <p className="text-xs text-text-secondary leading-relaxed">
                Estrutura de recebimento e câmaras frigoríficas para estocagem adequada de produtos congelados.
              </p>
            </div>

            <div className="p-6 rounded-ds-2xl bg-white border border-brand-200/80 shadow-ds-sm hover:shadow-ds-card-hover hover:border-accent/60 hover:-translate-y-1.5 transition-all duration-300 space-y-2">
              <p className="font-bold text-sm text-text-primary flex items-center gap-2">
                <Truck className="w-4 h-4 text-accent" /> Frota e Transporte
              </p>
              <p className="text-xs text-text-secondary leading-relaxed">
                Veículos próprios ou logística terceirizada refrigerada para manutenção da cadeia de frio no PDV.
              </p>
            </div>

            <div className="p-6 rounded-ds-2xl bg-white border border-brand-200/80 shadow-ds-sm hover:shadow-ds-card-hover hover:border-brand-600/60 hover:-translate-y-1.5 transition-all duration-300 space-y-2">
              <p className="font-bold text-sm text-text-primary flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-brand-600" /> Força Comercial
              </p>
              <p className="text-xs text-text-secondary leading-relaxed">
                Equipe de vendas ativa com relacionamento em açaiterias, padarias, mercadinhos e lanchonetes.
              </p>
            </div>
          </div>

        </Container>
      </section>

      {/* =====================================================================
          SEÇÃO — FORMULÁRIO B2B COM LGPD
          ===================================================================== */}
      <section id="formulario-candidatura" className="py-16 md:py-24 bg-surface-muted border-t border-border" aria-labelledby="form-section-heading">
        <Container size="lg" className="space-y-8">
          
          <div className="text-center space-y-3 max-w-xl mx-auto">
            <Badge variant="primary" size="sm">Candidatura Comercial</Badge>
            <h2 id="form-section-heading" className="font-display font-bold text-2xl sm:text-3xl text-text-primary tracking-tight">
              Preencha o Cadastro de Interesse
            </h2>
            <p className="text-text-secondary text-sm">
              Nossa equipe comercial receberá suas informações e entrará em contato para apresentar as condições e disponibilidade da sua praça.
            </p>
          </div>

          <DistributorApplicationForm />

        </Container>
      </section>

    </div>
  );
}
