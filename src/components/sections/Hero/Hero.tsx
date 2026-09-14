import React, { useState, useEffect, useCallback, useRef } from 'react';
import { ChevronLeft, ChevronRight, Sparkles, ArrowRight, TrendingUp } from 'lucide-react';
import { Container } from '../../ui/Container/Container';
import { Button } from '../../ui/Button/Button';
import { Badge } from '../../ui/Badge/Badge';
import { useReducedMotion } from '../../../hooks/useReducedMotion';
import './Hero.css';

export interface HeroSlideData {
  id: string;
  badge: string;
  titlePrimary: string;
  titleSecondary: string;
  description: string;
  desktopImage: string;
  mobileImage: string;
  alt: string;
}

const HERO_SLIDES: HeroSlideData[] = [
  {
    id: 'slide-food-service',
    badge: 'Indústria Gaúcha de Açaí',
    titlePrimary: 'Cremosidade que conquista.',
    titleSecondary: 'Qualidade que surpreende.',
    description: 'Mais de 9 toneladas por dia produzidas em Gravataí/RS com rigoroso controle laboratorial. O verdadeiro sabor da fruta com cremosidade industrial para distribuidores e food service.',
    desktopImage: '/assets/images/hero/hero-desktop-01.webp',
    mobileImage: '/assets/images/hero/hero-mobile-01.webp',
    alt: 'Caixa de Food Service Creme de Cupuaçu Nutri Açaí com folhas naturais'
  },
  {
    id: 'slide-nutrinho-varejo',
    badge: 'Linha Nutrinho & Varejo',
    titlePrimary: 'Sabor verdadeiro da fruta.',
    titleSecondary: 'Mais rentabilidade no freezer.',
    description: 'Copos individuais de 220ml com sobretampa de paçoca e potes de 1,5L com textura incomparável sem cristais de gelo. Alto giro no ponto de venda e consumo diário.',
    desktopImage: '/assets/images/hero/hero-desktop-02.webp',
    mobileImage: '/assets/images/hero/hero-mobile-02.webp',
    alt: 'Copos de Açaí Nutrinho com sobretampa de paçoca sob céu límpido'
  },
  {
    id: 'slide-distribuicao-nacional',
    badge: 'Frota Própria & Escala Nacional',
    titlePrimary: 'Entrega ágil e segura.',
    titleSecondary: 'Direto da fábrica para o Brasil.',
    description: 'Logística com frota própria e atendimento dedicado de ponta a ponta. Seja um distribuidor parceiro e leve a melhor cremosidade gaúcha para a sua região.',
    desktopImage: '/assets/images/hero/hero-desktop-03.webp',
    mobileImage: '/assets/images/hero/hero-mobile-03.webp',
    alt: 'Caixa de Frozen Natural 5L Nutri Açaí com cristais de gelo e frescor industrial'
  }
];

export const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const totalSlides = HERO_SLIDES.length;
  const timerRef = useRef<number | null>(null);
  const prefersReducedMotion = useReducedMotion();

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Autoplay (6 segundos por slide, pausado ao passar o mouse ou receber foco)
  useEffect(() => {
    if (isPaused || prefersReducedMotion) return;

    timerRef.current = window.setInterval(() => {
      nextSlide();
    }, 6000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, nextSlide, prefersReducedMotion]);

  // Navegação por teclado (Setas Esquerda/Direita)
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight') {
      nextSlide();
    } else if (e.key === 'ArrowLeft') {
      prevSlide();
    }
  };

  const activeSlide = HERO_SLIDES[currentSlide];

  return (
    <section
      className="hero"
      aria-roledescription="carousel"
      aria-label="Destaques da Indústria Nutri Açaí"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      {/* Camadas de Imagens com Fade Suave */}
      <div className="hero__slides" aria-live="polite">
        {HERO_SLIDES.map((slide, index) => {
          const isActive = index === currentSlide;
          const isInitial = index === 0;

          return (
            <div
              key={slide.id}
              className={`hero__slide ${isActive ? 'hero__slide--active' : ''}`}
              role="group"
              aria-roledescription="slide"
              aria-label={`${index + 1} de ${totalSlides}`}
              aria-hidden={!isActive}
            >
              <picture>
                <source media="(max-width: 767px)" srcSet={slide.mobileImage} />
                <img
                  src={slide.desktopImage}
                  alt={slide.alt}
                  className="hero__slide-image"
                  loading={isInitial ? 'eager' : 'lazy'}
                  // @ts-expect-error fetchpriority é padrão moderno no HTML
                  fetchpriority={isInitial ? 'high' : 'auto'}
                  width={1920}
                  height={1080}
                />
              </picture>
            </div>
          );
        })}
      </div>

      {/* Overlay com degradê escuro */}
      <div className="hero__overlay" aria-hidden="true" />

      {/* Conteúdo Textual Alinhado à Esquerda */}
      <Container size="default">
        <div className="hero__content-wrapper">
          <div key={activeSlide.id} className="hero__content-animated">
            <div className="hero__badge-container">
              <Badge variant="accent" icon={<Sparkles size={14} />}>
                {activeSlide.badge}
              </Badge>
            </div>

            <h1 className="hero__title">
              {activeSlide.titlePrimary}
              <span className="hero__title-accent">{activeSlide.titleSecondary}</span>
            </h1>

            <p className="hero__lead">
              {activeSlide.description}
            </p>

            <div className="hero__actions">
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
        </div>
      </Container>

      {/* Setas de Navegação Manual */}
      <button
        type="button"
        className="hero__arrow hero__arrow--prev"
        onClick={prevSlide}
        aria-label="Slide anterior"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        type="button"
        className="hero__arrow hero__arrow--next"
        onClick={nextSlide}
        aria-label="Próximo slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Barra Inferior com Dots e Informações de Acessibilidade */}
      <Container size="default">
        <div className="hero__controls-bottom">
          <div className="hero__dots" role="tablist" aria-label="Controle de slides do carrossel">
            {HERO_SLIDES.map((slide, index) => (
              <button
                key={slide.id}
                type="button"
                role="tab"
                className={`hero__dot ${index === currentSlide ? 'hero__dot--active' : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Ir para o slide ${index + 1}: ${slide.badge}`}
                aria-selected={index === currentSlide}
                tabIndex={0}
              />
            ))}
          </div>

          <span className="hero__status" aria-hidden="true">
            {isPaused ? 'Pausado' : `${currentSlide + 1} / ${totalSlides}`}
          </span>
        </div>
      </Container>
    </section>
  );
};
