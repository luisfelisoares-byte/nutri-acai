import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Quote, ChevronLeft, ChevronRight, MessageSquareQuote } from 'lucide-react';
import { Container } from '../../ui/Container/Container';
import { Section } from '../../ui/Section/Section';
import { Badge } from '../../ui/Badge/Badge';
import { useReducedMotion } from '../../../hooks/useReducedMotion';
import './Testimonials.css';

interface TestimonialItem {
  id: string;
  placeholderNotice: string;
  quote: string;
  author: string;
  role: string;
}

const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 'test-1',
    placeholderNotice: '[PLACEHOLDER — Depoimento Oficial em Homologação]',
    quote: '"A cremosidade incomparável e a textura do produto nos deram total confiança para abastecer com estabilidade e alto rendimento comercial."',
    author: 'Distribuidor Parceiro',
    role: 'Distribuição Regional • Canal B2B'
  },
  {
    id: 'test-2',
    placeholderNotice: '[PLACEHOLDER — Depoimento Oficial em Homologação]',
    quote: '"O açaí sem cristais de gelo e a padronização das caixas de Food Service garantem a agilidade e a satisfação diária dos nossos clientes."',
    author: 'Operação Food Service',
    role: 'Açaiteria & Lanchonete • Parceiro Comercial'
  },
  {
    id: 'test-3',
    placeholderNotice: '[PLACEHOLDER — Depoimento Oficial em Homologação]',
    quote: '"Contar com uma fábrica com mais de 9 toneladas/dia e laboratório técnico próprio nos dá segurança plena no fornecimento contínuo."',
    author: 'Parceiro Industrial',
    role: 'Rede de Varejo • Fornecimento Nacional'
  }
];

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const total = TESTIMONIALS_DATA.length;
  const timerRef = useRef<number | null>(null);
  const prefersReducedMotion = useReducedMotion();

  const nextTestimonial = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total]);

  const prevTestimonial = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  // Autoplay moderado (7s) pausável no hover/foco
  useEffect(() => {
    if (isPaused || prefersReducedMotion) return;

    timerRef.current = window.setInterval(() => {
      nextTestimonial();
    }, 7000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, nextTestimonial, prefersReducedMotion]);

  return (
    <Section as="section" background="surface" padding="lg" className="testimonials-section" id="depoimentos">
      <Container size="default">
        <div className="testimonials-section__header">
          <Badge variant="primary" icon={<MessageSquareQuote size={14} />}>
            Depoimentos
          </Badge>
          <h2>O Que Dizem Nossos Parceiros</h2>
          <p className="text-sm text-muted">
            Relações comerciais sólidas e duradouras construídas com padrão industrial de excelência.
          </p>
        </div>

        <div
          className="testimonials-carousel"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocus={() => setIsPaused(true)}
          onBlur={() => setIsPaused(false)}
          aria-roledescription="carousel"
          aria-label="Depoimentos de clientes e parceiros"
        >
          <div className="testimonials-track" aria-live="polite">
            {TESTIMONIALS_DATA.map((item, index) => {
              const isActive = index === currentIndex;

              return (
                <div
                  key={item.id}
                  className={`testimonial-card-wrapper ${isActive ? 'testimonial-card-wrapper--active' : ''}`}
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`${index + 1} de ${total}`}
                  aria-hidden={!isActive}
                >
                  <div className="testimonial-card">
                    <Quote size={36} className="testimonial-card__quote-icon" aria-hidden="true" />
                    
                    <span className="testimonial-card__placeholder-notice">
                      {item.placeholderNotice}
                    </span>

                    <p className="testimonial-card__text">{item.quote}</p>

                    <div className="testimonial-card__author-info">
                      <span className="testimonial-card__author-name">{item.author}</span>
                      <span className="testimonial-card__author-role">{item.role}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Controles de Navegação */}
        <div className="testimonials-controls">
          <button
            type="button"
            className="testimonials-arrow"
            onClick={prevTestimonial}
            aria-label="Depoimento anterior"
          >
            <ChevronLeft size={20} />
          </button>

          <div className="testimonials-dots" role="tablist" aria-label="Controle de depoimentos">
            {TESTIMONIALS_DATA.map((item, index) => (
              <button
                key={item.id}
                type="button"
                role="tab"
                className={`testimonials-dot ${index === currentIndex ? 'testimonials-dot--active' : ''}`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Ir para o depoimento ${index + 1}`}
                aria-selected={index === currentIndex}
              />
            ))}
          </div>

          <button
            type="button"
            className="testimonials-arrow"
            onClick={nextTestimonial}
            aria-label="Próximo depoimento"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </Container>
    </Section>
  );
};
