import React, { useEffect } from 'react';
import {
  Factory,
  FlaskConical,
  Truck,
  Globe2,
  Snowflake,
  ShieldCheck,
  Award,
  ArrowRight,
  TrendingUp,
  Target,
  Eye,
  CheckCircle2,
  Calendar
} from 'lucide-react';
import { Container } from '../../components/ui/Container/Container';
import { Section } from '../../components/ui/Section/Section';
import { Button } from '../../components/ui/Button/Button';
import { Badge } from '../../components/ui/Badge/Badge';
import {
  BRAND_SLOGAN,
  BRAND_MISSION,
  BRAND_VISION,
  BRAND_VALUES
} from '../../data/companyData';
import './ANutri.css';

export const ANutri: React.FC = () => {
  // Configuração Semântica de SEO para a Rota
  useEffect(() => {
    document.title = 'A Nutri Açaí — Indústria Gaúcha de Açaí, Sorbets e Derivados';
    
    // Atualiza meta description dinamicamente
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute(
      'content',
      'Conheça a Nutri Açaí: indústria gaúcha em Gravataí/RS com capacidade superior a 9 toneladas/dia, laboratório próprio de controle de qualidade, frota própria e atendimento para todo o território nacional.'
    );

    // Scroll suave para o topo ao carregar a página
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="a-nutri-page">
      {/* ===================================================================
          1. HERO INSTITUCIONAL
          =================================================================== */}
      <section className="nutri-hero" aria-labelledby="nutri-hero-title">
        <div className="nutri-hero__bg">
          <img
            src="/assets/images/institucional/hero-a-nutri.webp"
            alt="Fábrica da Nutri Açaí em Gravataí/RS"
            className="nutri-hero__bg-img"
            width={1920}
            height={800}
            loading="eager"
          />
        </div>
        <div className="nutri-hero__overlay" aria-hidden="true" />

        <Container size="default">
          <div className="nutri-hero__content">
            <div className="nutri-hero__badge">
              <Badge variant="accent" icon={<Factory size={14} />}>
                Indústria Gaúcha
              </Badge>
            </div>

            <h1 id="nutri-hero-title" className="nutri-hero__title">
              Indústria Gaúcha de Açaí, Sorbets e Derivados
            </h1>

            <p className="nutri-hero__slogan">
              "{BRAND_SLOGAN}"
            </p>

            <p className="nutri-hero__lead">
              Fábrica gaúcha sediada em Gravataí/RS, desenvolvida para produzir açaí, sorbets e derivados com padrão industrial de excelência para distribuidores, food services e marcas próprias em todo o Brasil.
            </p>

            <div className="nutri-hero__actions">
              <Button
                variant="accent"
                size="lg"
                href="/produtos"
                rightIcon={<ArrowRight size={18} />}
              >
                Conheça nossos produtos
              </Button>

              <Button
                variant="outline-white"
                size="lg"
                href="/seja-um-distribuidor"
                leftIcon={<TrendingUp size={18} />}
              >
                Seja um Distribuidor
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* ===================================================================
          2. CAPACIDADE E ESTRUTURA FABRIL
          =================================================================== */}
      <Section as="section" padding="lg" background="surface" className="nutri-capacity" aria-labelledby="nutri-capacity-title">
        <Container size="default">
          <div className="nutri-capacity__header">
            <Badge variant="primary" icon={<ShieldCheck size={14} />}>
              Estrutura Fabril
            </Badge>
            <h2 id="nutri-capacity-title">
              Capacidade produtiva e estrutura fabril
            </h2>
            <p>
              Produção industrial em Gravataí/RS estruturada para atender distribuidores, food services e marcas próprias com padrão industrial de excelência e segurança alimentar.
            </p>
          </div>

          <div className="nutri-capacity__grid">
            {/* Card Principal — Métrica Oficial Comprovada */}
            <div className="nutri-capacity__highlight-card">
              <div>
                <div className="nutri-capacity__metric-badge">
                  <Award size={14} />
                  Dado Oficial Confirmado
                </div>
                <div className="nutri-capacity__metric-number">
                  &gt; 9 t/dia
                </div>
                <h3 className="nutri-capacity__metric-title">
                  Capacidade produtiva superior a 9 toneladas por dia
                </h3>
                <p className="nutri-capacity__metric-desc">
                  Capacidade fabril para abastecer distribuidores, food services, marcas próprias (private label) e varejo direto da nossa fábrica gaúcha para todo o Brasil.
                </p>
              </div>

              <div className="nutri-capacity__highlight-tags">
                <span className="nutri-capacity__highlight-tag">Gravataí / RS</span>
                <span className="nutri-capacity__highlight-tag">Frota Própria</span>
                <span className="nutri-capacity__highlight-tag">Atendimento Brasil</span>
              </div>
            </div>

            {/* Coluna com Pilares Estruturais da Fábrica */}
            <div className="nutri-capacity__pillars">
              <div className="nutri-pillar-card">
                <div className="nutri-pillar-card__icon">
                  <FlaskConical size={22} />
                </div>
                <div>
                  <h3 className="nutri-pillar-card__title">Laboratório próprio de controle de qualidade</h3>
                  <p className="nutri-pillar-card__text">
                    Controle de ponta a ponta na fábrica em Gravataí/RS com laboratório próprio e equipe técnica especializada.
                  </p>
                </div>
              </div>

              <div className="nutri-pillar-card">
                <div className="nutri-pillar-card__icon">
                  <ShieldCheck size={22} />
                </div>
                <div>
                  <h3 className="nutri-pillar-card__title">Equipe técnica especializada</h3>
                  <p className="nutri-pillar-card__text">
                    Compromisso com a qualidade sustentado por equipes técnicas dedicadas em cada etapa do processo produtivo.
                  </p>
                </div>
              </div>

              <div className="nutri-pillar-card">
                <div className="nutri-pillar-card__icon">
                  <Truck size={22} />
                </div>
                <div>
                  <h3 className="nutri-pillar-card__title">Frota própria</h3>
                  <p className="nutri-pillar-card__text">
                    Logística ágil e preservação da cadeia fria até a entrega.
                  </p>
                </div>
              </div>

              <div className="nutri-pillar-card">
                <div className="nutri-pillar-card__icon">
                  <Globe2 size={22} />
                </div>
                <div>
                  <h3 className="nutri-pillar-card__title">Atendimento a todo o território nacional</h3>
                  <p className="nutri-pillar-card__text">
                    Direto da nossa fábrica gaúcha para todo o Brasil, com escala industrial para abastecer distribuidores de norte a sul.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ===================================================================
          3. PROCESSO INDUSTRIAL (4 ETAPAS OFICIAIS)
          =================================================================== */}
      <Section as="section" padding="lg" background="default" className="nutri-process" aria-labelledby="nutri-process-title">
        <Container size="default">
          <div className="nutri-process__header">
            <Badge variant="primary" icon={<Factory size={14} />}>
              Nosso Processo
            </Badge>
            <h2 id="nutri-process-title">
              Processo produtivo em 4 etapas oficiais
            </h2>
            <p>
              Produção com padrão industrial de excelência, dedicação em cada etapa e controle direto na fábrica gaúcha.
            </p>
          </div>

          <div className="nutri-process__grid">
            {/* Etapa 1 */}
            <div className="nutri-step-card">
              <div className="nutri-step-card__top">
                <span className="nutri-step-card__num">ETAPA 01</span>
                <div className="nutri-step-card__icon">
                  <Factory size={22} />
                </div>
              </div>
              <h3 className="nutri-step-card__title">Produção própria</h3>
              <p className="nutri-step-card__desc">
                Controle total de ponta a ponta na fábrica em Gravataí/RS com laboratório técnico.
              </p>
              <div className="nutri-step-card__badge">
                <CheckCircle2 size={14} />
                Gravataí / RS
              </div>
            </div>

            {/* Etapa 2 */}
            <div className="nutri-step-card">
              <div className="nutri-step-card__top">
                <span className="nutri-step-card__num">ETAPA 02</span>
                <div className="nutri-step-card__icon">
                  <FlaskConical size={22} />
                </div>
              </div>
              <h3 className="nutri-step-card__title">Controle de qualidade</h3>
              <p className="nutri-step-card__desc">
                Sustentado por equipes técnicas e laboratório próprio de controle de qualidade.
              </p>
              <div className="nutri-step-card__badge">
                <CheckCircle2 size={14} />
                Laboratório próprio
              </div>
            </div>

            {/* Etapa 3 */}
            <div className="nutri-step-card">
              <div className="nutri-step-card__top">
                <span className="nutri-step-card__num">ETAPA 03</span>
                <div className="nutri-step-card__icon">
                  <Snowflake size={22} />
                </div>
              </div>
              <h3 className="nutri-step-card__title">Armazenamento com controle térmico</h3>
              <p className="nutri-step-card__desc">
                Armazenamento com controle térmico e preservação da cadeia fria até a entrega.
              </p>
              <div className="nutri-step-card__badge">
                <CheckCircle2 size={14} />
                Cadeia fria
              </div>
            </div>

            {/* Etapa 4 */}
            <div className="nutri-step-card">
              <div className="nutri-step-card__top">
                <span className="nutri-step-card__num">ETAPA 04</span>
                <div className="nutri-step-card__icon">
                  <Truck size={22} />
                </div>
              </div>
              <h3 className="nutri-step-card__title">Distribuição com frota própria</h3>
              <p className="nutri-step-card__desc">
                Frota própria e logística para atendimento em todo o território nacional.
              </p>
              <div className="nutri-step-card__badge">
                <CheckCircle2 size={14} />
                Frota própria
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ===================================================================
          4. MISSÃO, VISÃO E VALORES
          =================================================================== */}
      <Section as="section" padding="lg" background="surface" className="nutri-identity" aria-labelledby="nutri-identity-title">
        <Container size="default">
          <div className="nutri-identity__header">
            <Badge variant="primary" icon={<Target size={14} />}>
              Missão, Visão e Valores
            </Badge>
            <h2 id="nutri-identity-title">
              Compromisso e identidade oficial
            </h2>
            <p>
              Declarações institucionais oficiais registradas no catálogo de produtos da Nutri Açaí.
            </p>
          </div>

          <div className="nutri-identity__main-grid">
            {/* Foto Oficial Institucional */}
            <div className="nutri-identity__photo-wrapper">
              <img
                src="/assets/images/institucional/missao-e-visao.jpg"
                alt="Nutri Açaí na fábrica gaúcha"
                className="nutri-identity__photo"
                width={800}
                height={600}
                loading="lazy"
              />
              <div className="nutri-identity__photo-caption">
                <strong>Nutri Açaí — Indústria Gaúcha</strong>
                <span>Fábrica em Gravataí/RS • Atendimento para todo o território nacional</span>
              </div>
            </div>

            {/* Blocos de Missão e Visão */}
            <div className="nutri-identity__cards-col">
              <div className="nutri-mv-card">
                <div className="nutri-mv-card__header">
                  <div className="nutri-mv-card__icon">
                    <Target size={20} />
                  </div>
                  <h3>Missão</h3>
                </div>
                <p className="nutri-mv-card__text">
                  "{BRAND_MISSION}"
                </p>
              </div>

              <div className="nutri-mv-card nutri-mv-card--vision">
                <div className="nutri-mv-card__header">
                  <div className="nutri-mv-card__icon">
                    <Eye size={20} />
                  </div>
                  <h3>Visão</h3>
                </div>
                <p className="nutri-mv-card__text">
                  "{BRAND_VISION}"
                </p>
              </div>
            </div>
          </div>

          {/* 4 Valores Oficiais */}
          <h3 className="nutri-values__title">Valores Oficiais</h3>
          <div className="nutri-values__grid">
            {BRAND_VALUES.map((val, idx) => (
              <div key={idx} className="nutri-value-card">
                <span className="nutri-value-card__num">0{idx + 1}</span>
                <h4 className="nutri-value-card__title">{val.title}</h4>
                <p className="nutri-value-card__desc">"{val.description}"</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ===================================================================
          5. TRAJETÓRIA / HISTÓRIA INSTITUCIONAL (DESDE 2022)
          =================================================================== */}
      <Section as="section" padding="lg" background="default" className="nutri-trajectory" aria-labelledby="nutri-trajectory-title">
        <Container size="default">
          <div className="nutri-trajectory__card">
            <div className="nutri-trajectory__badge-col">
              <Badge variant="primary" icon={<Calendar size={14} />}>
                Trajetória
              </Badge>

              <div className="nutri-trajectory__year-box">
                <span className="nutri-trajectory__year-label">Atividade Contínua</span>
                <span className="nutri-trajectory__year-value">Desde 2022</span>
                <span className="nutri-trajectory__year-sub">Gravataí / RS</span>
              </div>
            </div>

            <div className="nutri-trajectory__info-col">
              <h2 id="nutri-trajectory-title">
                Indústria Gaúcha de Açaí, Sorbets e Derivados
              </h2>

              <p>
                Em atividade contínua <strong>desde 2022</strong>, a <strong>Nutri Açaí</strong> é uma indústria gaúcha com fábrica sediada em Gravataí/RS, desenvolvendo e produzindo açaí, sorbets e derivados com padrão industrial de excelência.
              </p>

              <p>
                Com capacidade produtiva superior a 9 toneladas por dia, laboratório próprio de controle de qualidade, equipe técnica especializada e frota própria, atendemos distribuidores, food services, marcas próprias (private label) e varejo em todo o território nacional.
              </p>

              <div className="nutri-trajectory__facts">
                <div className="nutri-trajectory__fact-item">
                  <CheckCircle2 size={16} />
                  <span>Fábrica em Gravataí/RS</span>
                </div>
                <div className="nutri-trajectory__fact-item">
                  <CheckCircle2 size={16} />
                  <span>Capacidade superior a 9 t/dia</span>
                </div>
                <div className="nutri-trajectory__fact-item">
                  <CheckCircle2 size={16} />
                  <span>Laboratório próprio e equipe técnica</span>
                </div>
                <div className="nutri-trajectory__fact-item">
                  <CheckCircle2 size={16} />
                  <span>Frota própria e atendimento para todo o Brasil</span>
                </div>
              </div>

              <Button
                variant="accent"
                size="md"
                href="/seja-um-distribuidor"
                rightIcon={<ArrowRight size={16} />}
              >
                Seja um Distribuidor
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* ===================================================================
          6. CTA FINAL INSTITUCIONAL
          =================================================================== */}
      <section className="nutri-cta-final" aria-labelledby="nutri-cta-title">
        <Container size="default">
          <div className="nutri-cta-final__box">
            <h2 id="nutri-cta-title">
              Cremosidade que conquista. Qualidade que surpreende.
            </h2>
            <p>
              Atendemos distribuidores, food services e marcas próprias que buscam produtos confiáveis, consistentes e com qualidade diferenciada direto da nossa fábrica gaúcha para todo o Brasil.
            </p>
            <div className="nutri-cta-final__actions">
              <Button
                variant="accent"
                size="lg"
                href="/seja-um-distribuidor"
                leftIcon={<TrendingUp size={18} />}
              >
                SEJA UM DISTRIBUIDOR
              </Button>

              <Button
                variant="outline-white"
                size="lg"
                href="/produtos"
                rightIcon={<ArrowRight size={18} />}
              >
                Ver Catálogo de Produtos
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default ANutri;
