import React from 'react';
import { ArrowRight, Factory } from 'lucide-react';
import { Container } from '../../ui/Container/Container';
import { Section } from '../../ui/Section/Section';
import { Button } from '../../ui/Button/Button';
import { Badge } from '../../ui/Badge/Badge';
import './AboutShort.css';

export const AboutShort: React.FC = () => {
  return (
    <Section as="section" background="surface" padding="lg" className="about-short" id="a-nutri-apresentacao">
      <Container size="default">
        <div className="about-short__grid">
          {/* Coluna Visual: Foto real da marca / fundadores */}
          <div className="about-short__image-wrapper">
            <div className="about-short__image-card">
              <img
                src="/assets/images/institucional/a-nutri-apresentacao.webp"
                alt="Equipe fundadora e marca institucional Nutri Açaí"
                className="about-short__image"
                loading="lazy"
                decoding="async"
                width={460}
                height={580}
              />
              <div className="about-short__floating-badge">
                <span className="about-short__floating-number">+9t</span>
                <span className="about-short__floating-text">
                  <strong>Toneladas por dia</strong> produzidas com padrão industrial em Gravataí/RS
                </span>
              </div>
            </div>
          </div>

          {/* Coluna Conteúdo Institucional */}
          <div className="about-short__content">
            <Badge variant="primary" icon={<Factory size={14} />}>
              A Indústria Gaúcha de Açaí
            </Badge>

            <h2 className="about-short__title">
              Tradição industrial, sabor autêntico e excelência em cada detalhe
            </h2>

            <p className="about-short__text">
              Fundada em <strong>2022</strong> em Gravataí/RS, a <strong>Nutri Açaí</strong> nasceu com um propósito claro: produzir o açaí que o mercado exige, combinando cremosidade incomparável, rigoroso controle de qualidade em laboratório próprio e segurança de alimentos.
            </p>

            <p className="about-short__text">
              Atendemos distribuidores, redes de food service e parceiros de private label em todo o Brasil. Nossa estrutura fabril moderna assegura estabilidade no fornecimento diário e preservação das características naturais da fruta.
            </p>

            <div className="about-short__metrics">
              <div className="about-short__metric-item">
                <div className="about-short__metric-value">Desde 2022</div>
                <div className="about-short__metric-label">Indústria gaúcha sólida</div>
              </div>

              <div className="about-short__metric-item">
                <div className="about-short__metric-value">100% Brasil</div>
                <div className="about-short__metric-label">Logística com frota própria</div>
              </div>
            </div>

            <Button
              variant="primary"
              size="lg"
              href="/a-nutri"
              rightIcon={<ArrowRight size={18} />}
            >
              Conheça a Nutri
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
};
