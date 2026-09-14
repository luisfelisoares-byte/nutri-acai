import React, { useEffect } from 'react';
import {
  Users,
  Factory,
  Truck,
  Building2,
  FlaskConical,
  MessageCircle,
  ArrowRight,
  CheckCircle2,
  ShieldCheck
} from 'lucide-react';
import { Container } from '../../components/ui/Container/Container';
import { Section } from '../../components/ui/Section/Section';
import { Button } from '../../components/ui/Button/Button';
import { Badge } from '../../components/ui/Badge/Badge';
import { COMPANY_INFO, BRAND_SLOGAN } from '../../data/companyData';
import { buildRhWhatsAppUrl } from '../../utils/whatsapp';
import './WorkWithUs.css';

export const WorkWithUs: React.FC = () => {
  // Configuração Semântica de SEO
  useEffect(() => {
    document.title = 'Trabalhe Conosco | Nutri Açaí';

    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute(
      'content',
      'Faça parte da Nutri Açaí: indústria gaúcha em Gravataí/RS. Envie seu currículo diretamente para o setor de Recursos Humanos pelo WhatsApp oficial.'
    );

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const rhWhatsAppUrl = buildRhWhatsAppUrl();

  return (
    <div className="work-with-us-page">
      {/* ===================================================================
          1. HERO TRABALHE CONOSCO
          =================================================================== */}
      <section className="careers-hero" aria-labelledby="careers-hero-title">
        <Container size="default">
          <div className="careers-hero__content">
            <div className="careers-hero__badge">
              <Badge variant="accent" icon={<Users size={14} />}>
                Carreiras & Oportunidades
              </Badge>
            </div>

            <h1 id="careers-hero-title" className="careers-hero__title">
              Trabalhe Conosco
            </h1>

            <p className="careers-hero__slogan">
              "{BRAND_SLOGAN}"
            </p>

            <p className="careers-hero__lead">
              Faça parte da nossa equipe na fábrica gaúcha em Gravataí/RS. Valorizamos profissionais dedicados a produzir e distribuir açaí, sorbets e derivados com padrão industrial de excelência.
            </p>

            <div className="careers-hero__actions">
              <Button
                variant="whatsapp"
                size="lg"
                href={rhWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                leftIcon={<MessageCircle size={18} />}
              >
                Enviar currículo pelo WhatsApp
              </Button>

              <Button
                variant="outline-white"
                size="lg"
                href="/a-nutri"
                rightIcon={<ArrowRight size={18} />}
              >
                Conheça nossa indústria
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* ===================================================================
          2. ÁREAS DE ATUAÇÃO NA FÁBRICA GAÚCHA
          =================================================================== */}
      <Section as="section" padding="lg" background="surface" className="careers-areas" aria-labelledby="careers-areas-title">
        <Container size="default">
          <div className="careers-section-header">
            <Badge variant="primary" icon={<Factory size={14} />}>
              Nossa Fábrica em Gravataí/RS
            </Badge>
            <h2 id="careers-areas-title">
              Áreas de atuação e perfis profissionais
            </h2>
            <p>
              Recebemos currículos para avaliação contínua do nosso time de Recursos Humanos nos principais setores operacionais:
            </p>
          </div>

          <div className="careers-areas__grid">
            <div className="careers-area-card">
              <div className="careers-area-card__icon">
                <Factory size={22} />
              </div>
              <h3 className="careers-area-card__title">Produção Fabril</h3>
              <p className="careers-area-card__desc">
                Operações de envase industrial, formulação, controle de insumos e rotinas de linha de produção de açaí e sorbets.
              </p>
            </div>

            <div className="careers-area-card">
              <div className="careers-area-card__icon">
                <FlaskConical size={22} />
              </div>
              <h3 className="careers-area-card__title">Qualidade & Laboratório</h3>
              <p className="careers-area-card__desc">
                Equipes técnicas especializadas responsáveis pelo controle de qualidade e padrões laboratoriais de segurança alimentar.
              </p>
            </div>

            <div className="careers-area-card">
              <div className="careers-area-card__icon">
                <Truck size={22} />
              </div>
              <h3 className="careers-area-card__title">Logística & Frota</h3>
              <p className="careers-area-card__desc">
                Armazenamento com controle térmico, cadeia fria e rotas de entrega da frota própria em todo o território nacional.
              </p>
            </div>

            <div className="careers-area-card">
              <div className="careers-area-card__icon">
                <Building2 size={22} />
              </div>
              <h3 className="careers-area-card__title">Comercial & Administrativo</h3>
              <p className="careers-area-card__desc">
                Atendimento humano e transparente para suporte aos distribuidores, rotinas financeiras e administrativas.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* ===================================================================
          3. COMO ENVIAR SEU CURRÍCULO (FLUXO OFICIAL)
          =================================================================== */}
      <Section as="section" padding="lg" background="default" className="careers-steps" aria-labelledby="careers-steps-title">
        <Container size="default">
          <div className="careers-section-header">
            <Badge variant="primary" icon={<CheckCircle2 size={14} />}>
              Processo Simples e Direto
            </Badge>
            <h2 id="careers-steps-title">
              Como enviar seu currículo
            </h2>
            <p>
              O envio de currículos para a Nutri Açaí é realizado de forma rápida e sem burocracia:
            </p>
          </div>

          <div className="careers-steps__grid">
            <div className="careers-step-card">
              <span className="careers-step-card__num">PASSO 01</span>
              <h3 className="careers-step-card__title">Prepare seu currículo em PDF</h3>
              <p className="careers-step-card__desc">
                Mantenha seus dados de contato, formação, histórico profissional e área de interesse atualizados no seu arquivo.
              </p>
            </div>

            <div className="careers-step-card">
              <span className="careers-step-card__num">PASSO 02</span>
              <h3 className="careers-step-card__title">Inicie o contato no WhatsApp do RH</h3>
              <p className="careers-step-card__desc">
                Clique no botão de envio para abrir uma conversa direta com nosso time de Recursos Humanos pelo número dedicado: {COMPANY_INFO.rhPhone}.
              </p>
            </div>

            <div className="careers-step-card">
              <span className="careers-step-card__num">PASSO 03</span>
              <h3 className="careers-step-card__title">Anexe o arquivo e envie</h3>
              <p className="careers-step-card__desc">
                Encaminhe seu arquivo e mensagem de apresentação. Seu currículo ficará disponível para os processos seletivos do setor responsável.
              </p>
            </div>
          </div>

          {/* ===================================================================
              4. BANNER DE CONTATO DIRETO AO RH
              =================================================================== */}
          <div className="careers-cta-banner">
            <div className="careers-cta-banner__rh-badge">
              <ShieldCheck size={16} />
              Canal Oficial Exclusivo de Recursos Humanos
            </div>

            <h2>Envie seu currículo para a Nutri Açaí</h2>

            <p>
              Nosso time de RH avalia currículos para oportunidades na fábrica gaúcha em Gravataí/RS. Encaminhe seu documento pelo WhatsApp oficial:
            </p>

            <div className="careers-cta-banner__actions">
              <Button
                variant="whatsapp"
                size="lg"
                href={rhWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                leftIcon={<MessageCircle size={20} />}
              >
                Enviar currículo pelo WhatsApp
              </Button>
            </div>

            <span className="careers-cta-banner__note">
              WhatsApp RH: {COMPANY_INFO.rhPhone} • Atendimento de segunda a sexta-feira das 08h às 18h
            </span>
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default WorkWithUs;
