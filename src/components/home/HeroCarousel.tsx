'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { 
  Factory, 
  Boxes, 
  ShoppingBag, 
  Sparkles, 
  ArrowRight, 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle2, 
  Pause, 
  Play
} from 'lucide-react';

export interface HeroSlideData {
  id: string;
  theme: {
    bgGradient: string;
    radialGlow: string;
    badgeStyle: string;
    ctaPrimaryStyle: string;
    accentColor: string;
  };
  layoutDirection: 'product-right' | 'product-left';
  badgeText: string;
  badgeIcon: React.ReactNode;
  title: string;
  subtitle: string;
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta: {
    label: string;
    href: string;
  };
  highlights: string[];
  products: Array<{
    src: string;
    alt: string;
    width: number;
    height: number;
    className: string;
  }>;
  categoryLabel: string;
}

const HERO_SLIDES: HeroSlideData[] = [
  // =========================================================================
  // SLIDE 1: AÇAÍ TRADICIONAL & MIX FABRIL (Roxo Açaí Profundo)
  // Layout: Texto à Esquerda, Composição de Produtos Gigantes à Direita
  // =========================================================================
  {
    id: 'acai-industria',
    theme: {
      bgGradient: 'from-[#190623] via-[#330e46] to-[#120419]',
      radialGlow: 'radial-gradient(ellipse at 75% 50%, rgba(147, 51, 234, 0.35) 0%, transparent 65%)',
      badgeStyle: 'bg-purple-400/15 text-purple-200 border border-purple-300/30',
      ctaPrimaryStyle: 'bg-white text-brand-950 hover:bg-white/90 shadow-2xl',
      accentColor: '#c084fc',
    },
    layoutDirection: 'product-right',
    badgeText: 'Fábrica de Açaí em Gravataí / RS',
    badgeIcon: <Factory className="w-4 h-4 text-purple-300" aria-hidden="true" />,
    title: 'Fábrica de Açaí no RS: Padrão Industrial com Sabor Autêntico',
    subtitle: 'Indústria em Gravataí/RS com produção própria de açaí, cremes e frozens. Fornecimento regular e embalagens de alto rendimento para Food Service, distribuidores e varejo.',
    primaryCta: {
      label: 'Seja um Distribuidor',
      href: '/seja-um-distribuidor',
    },
    secondaryCta: {
      label: 'Ver Todos os Produtos',
      href: '/produtos',
    },
    highlights: ['Fábrica Própria no RS', 'Food Service & Varejo', 'Atuação desde 2022'],
    products: [
      {
        src: '/images/products/balde-12l-acai-guarana.webp',
        alt: 'Balde de 12 litros de Açaí com Guaraná Nutri Açaí',
        width: 457,
        height: 555,
        className: 'w-[180px] sm:w-[240px] md:w-[280px] lg:w-[320px] drop-shadow-[0_30px_40px_rgba(0,0,0,0.7)] z-10 -mr-6 sm:-mr-10 transition-transform duration-500 hover:scale-105',
      },
      {
        src: '/images/products/caixa-5l-acai-guarana.webp',
        alt: 'Caixa de 5 litros de Açaí com Guaraná Nutri Açaí',
        width: 449,
        height: 447,
        className: 'w-[160px] sm:w-[210px] md:w-[240px] lg:w-[280px] drop-shadow-[0_25px_35px_rgba(0,0,0,0.65)] z-20 transition-transform duration-500 hover:scale-105',
      },
      {
        src: '/images/products/pote-1-5l-acai-guarana.webp',
        alt: 'Pote de 1,5 litros de Açaí com Guaraná Nutri Açaí',
        width: 456,
        height: 409,
        className: 'w-[120px] sm:w-[160px] md:w-[180px] lg:w-[210px] drop-shadow-[0_20px_30px_rgba(0,0,0,0.6)] z-30 -ml-6 sm:-ml-8 transition-transform duration-500 hover:scale-105',
      },
    ],
    categoryLabel: 'Açaí Tradicional & Portfólio',
  },

  // =========================================================================
  // SLIDE 2: FOOD SERVICE PROFISSIONAL (Verde Botânico & Açaí Profundo)
  // Layout: Produtos Gigantes à Esquerda, Texto à Direita
  // =========================================================================
  {
    id: 'food-service',
    theme: {
      bgGradient: 'from-[#0b1a11] via-[#163520] to-[#12081d]',
      radialGlow: 'radial-gradient(ellipse at 25% 50%, rgba(34, 197, 94, 0.3) 0%, transparent 65%)',
      badgeStyle: 'bg-emerald-400/15 text-emerald-200 border border-emerald-300/30',
      ctaPrimaryStyle: 'bg-emerald-500 text-white hover:bg-emerald-400 shadow-2xl',
      accentColor: '#4ade80',
    },
    layoutDirection: 'product-left',
    badgeText: 'Linha Profissional • Food Service',
    badgeIcon: <Boxes className="w-4 h-4 text-emerald-300" aria-hidden="true" />,
    title: 'Máximo Rendimento para Açaiterias e Sorveterias',
    subtitle: 'Caixas de 5L e 10L e baldes vedados de alta cremosidade. Textura consistente e formulação estável para montagem ágil de tigelas, copos e receitas de alto giro.',
    primaryCta: {
      label: 'Cotação Food Service',
      href: '/contato?ref=food-service',
    },
    secondaryCta: {
      label: 'Ver Linha Food Service',
      href: '/produtos?cat=food-service',
    },
    highlights: ['Caixas 5L e 10L', 'Baldes 3,6L e 12L', 'Rendimento Superior'],
    products: [
      {
        src: '/images/products/caixa-5l-acai-guarana.webp',
        alt: 'Caixa de 5 litros de Açaí com Guaraná Nutri Açaí Food Service',
        width: 449,
        height: 447,
        className: 'w-[170px] sm:w-[230px] md:w-[270px] lg:w-[320px] drop-shadow-[0_30px_45px_rgba(0,0,0,0.7)] z-20 transition-transform duration-500 hover:scale-105',
      },
      {
        src: '/images/products/caixa-5l-creme-leitinho.webp',
        alt: 'Caixa de 5 litros de Creme de Leitinho Nutri Açaí',
        width: 519,
        height: 480,
        className: 'w-[160px] sm:w-[210px] md:w-[250px] lg:w-[300px] drop-shadow-[0_25px_35px_rgba(0,0,0,0.65)] z-10 -ml-8 sm:-ml-12 transition-transform duration-500 hover:scale-105',
      },
    ],
    categoryLabel: 'Food Service 5L / 10L & Baldes',
  },

  // =========================================================================
  // SLIDE 3: LINHA VAREJO 1,5L (Bordô Gourmet & Creme Dourado)
  // Layout: Texto à Esquerda, Produtos Gigantes à Direita
  // =========================================================================
  {
    id: 'varejo-trufados',
    theme: {
      bgGradient: 'from-[#22091f] via-[#431234] to-[#18051a]',
      radialGlow: 'radial-gradient(ellipse at 75% 50%, rgba(245, 158, 11, 0.28) 0%, transparent 65%)',
      badgeStyle: 'bg-amber-400/15 text-amber-200 border border-amber-300/30',
      ctaPrimaryStyle: 'bg-amber-400 text-brand-950 hover:bg-amber-300 font-bold shadow-2xl',
      accentColor: '#fbbf24',
    },
    layoutDirection: 'product-right',
    badgeText: 'Linha Varejo • Potes de 1,5 Litros',
    badgeIcon: <ShoppingBag className="w-4 h-4 text-amber-300" aria-hidden="true" />,
    title: 'Destaque nas Gôndolas e Alto Giro no PDV',
    subtitle: 'Potes familiares retangulares de 1,5L em 11 opções de alto valor agregado: Açaí Tradicional, Trufado Leitinho, Trufado Avelã, Zero Açúcar e Frozens. Embalagem atraente com vedação hermética.',
    primaryCta: {
      label: 'Conhecer Linha Varejo',
      href: '/produtos?cat=varejo',
    },
    secondaryCta: {
      label: 'Falar com Comercial',
      href: '/contato?ref=varejo',
    },
    highlights: ['Potes Selados 1,5L', 'Sabores Trufados', 'Alto Giro no Varejo'],
    products: [
      {
        src: '/images/products/pote-1-5l-acai-trufado-leitinho.webp',
        alt: 'Pote de 1,5 litros de Açaí Trufado Leitinho Nutri Açaí',
        width: 384,
        height: 343,
        className: 'w-[170px] sm:w-[220px] md:w-[260px] lg:w-[310px] drop-shadow-[0_30px_45px_rgba(0,0,0,0.7)] z-20 -mr-6 sm:-mr-10 transition-transform duration-500 hover:scale-105',
      },
      {
        src: '/images/products/pote-1-5l-acai-trufado-avela.webp',
        alt: 'Pote de 1,5 litros de Açaí Trufado Avelã Nutri Açaí',
        width: 401,
        height: 330,
        className: 'w-[160px] sm:w-[210px] md:w-[250px] lg:w-[300px] drop-shadow-[0_25px_35px_rgba(0,0,0,0.65)] z-10 transition-transform duration-500 hover:scale-105',
      },
    ],
    categoryLabel: 'Potes 1,5L Tradicionais e Trufados',
  },

  // =========================================================================
  // SLIDE 4: LINHA NUTRINHO ON-THE-GO (Magenta Vibrante & Frutas)
  // Layout: Produtos Gigantes à Esquerda, Texto à Direita
  // =========================================================================
  {
    id: 'nutrinho-individual',
    theme: {
      bgGradient: 'from-[#1e0728] via-[#4d103d] to-[#16041c]',
      radialGlow: 'radial-gradient(ellipse at 30% 50%, rgba(236, 72, 153, 0.35) 0%, transparent 65%)',
      badgeStyle: 'bg-pink-400/15 text-pink-200 border border-pink-300/30',
      ctaPrimaryStyle: 'bg-pink-500 text-white hover:bg-pink-400 shadow-2xl',
      accentColor: '#f472b6',
    },
    layoutDirection: 'product-left',
    badgeText: 'Linha Nutrinho • Praticidade On-the-Go',
    badgeIcon: <Sparkles className="w-4 h-4 text-pink-300" aria-hidden="true" />,
    title: 'Consumo Individual com Topping Exclusivo na Tampa',
    subtitle: 'Potes de 220ml com domo de acompanhamento (paçoca ou leite em pó) e versões de 200ml. Praticidade imediata para lojas de conveniência, cafeterias, eventos e consumo por impulso.',
    primaryCta: {
      label: 'Explorar Linha Nutrinho',
      href: '/produtos?cat=nutrinho',
    },
    secondaryCta: {
      label: 'Solicitar Atendimento',
      href: '/contato',
    },
    highlights: ['Tampa Domo c/ Topping', '220ml e 200ml', 'Consumo Imediato'],
    products: [
      {
        src: '/images/products/nutrinho-trufado-leitinho-220ml.webp',
        alt: 'Pote Nutrinho Açaí Trufado Leitinho 220ml com topping no domo',
        width: 441,
        height: 539,
        className: 'w-[160px] sm:w-[210px] md:w-[250px] lg:w-[290px] drop-shadow-[0_30px_45px_rgba(0,0,0,0.7)] z-20 transition-transform duration-500 hover:scale-105',
      },
      {
        src: '/images/products/nutrinho-acai-morango-220ml.webp',
        alt: 'Pote Nutrinho Açaí com Morango 220ml com topping',
        width: 376,
        height: 467,
        className: 'w-[150px] sm:w-[195px] md:w-[230px] lg:w-[270px] drop-shadow-[0_25px_35px_rgba(0,0,0,0.65)] z-10 -ml-8 sm:-ml-12 transition-transform duration-500 hover:scale-105',
      },
    ],
    categoryLabel: 'Dose Individual 200ml & 220ml',
  },
];

const AUTOPLAY_INTERVAL_MS = 5000;

export const HeroCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isUserPaused, setIsUserPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const totalSlides = HERO_SLIDES.length;

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
    setProgress(0);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    setProgress(0);
  }, [totalSlides]);

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index);
    setProgress(0);
  }, []);

  // Gerenciamento da troca automática e barra de progresso suave
  useEffect(() => {
    if (isPaused || isUserPaused) {
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
      }
      return;
    }

    const stepMs = 50;
    const totalSteps = AUTOPLAY_INTERVAL_MS / stepMs;

    progressIntervalRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          nextSlide();
          return 0;
        }
        return prev + 100 / totalSteps;
      });
    }, stepMs);

    return () => {
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
      }
    };
  }, [isPaused, isUserPaused, nextSlide]);

  // Navegação por teclado (Setas Esquerda / Direita)
  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      prevSlide();
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      nextSlide();
    }
  };

  const activeSlide = HERO_SLIDES[currentSlide];

  return (
    <section 
      ref={carouselRef}
      className={`relative w-full overflow-hidden bg-gradient-to-br ${activeSlide.theme.bgGradient} transition-colors duration-700 select-none text-white`}
      role="region"
      aria-roledescription="carousel"
      aria-label="Campanha de Destaques Nutri Açaí"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      {/* Luz ambiente temática do slide (efeito cinematográfico de estúdio) */}
      <div 
        className="absolute inset-0 pointer-events-none transition-all duration-700 -z-0"
        style={{ background: activeSlide.theme.radialGlow }}
        aria-hidden="true"
      />

      {/* Partículas sutis de iluminação superior e inferior */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-black/40 to-transparent pointer-events-none" />

      {/* Container Principal do Hero */}
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-16 py-12 md:py-16 lg:py-20 max-w-[1600px] mx-auto relative z-10">
        
        {/* Cena Principal do Slide */}
        <div 
          className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center min-h-[500px] md:min-h-[540px] lg:min-h-[580px] ${
            activeSlide.layoutDirection === 'product-left' ? 'lg:flex-row-reverse' : ''
          }`}
          role="group"
          aria-roledescription="slide"
          aria-label={`Slide ${currentSlide + 1} de ${totalSlides}: ${activeSlide.title}`}
        >
          
          {/* ===================================================================
              BLOCO DE TEXTO E CTAS (Integrado diretamente na composição)
              =================================================================== */}
          <div 
            className={`space-y-6 text-center lg:text-left ${
              activeSlide.layoutDirection === 'product-left' 
                ? 'lg:col-span-6 lg:order-2' 
                : 'lg:col-span-6 lg:order-1'
            }`}
          >
            {/* Badge Temático do Slide */}
            <div className="inline-flex items-center gap-2">
              <span className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide backdrop-blur-md ${activeSlide.theme.badgeStyle}`}>
                {activeSlide.badgeIcon}
                <span>{activeSlide.badgeText}</span>
              </span>
            </div>

            {/* Título de Campanha de Grande Impacto */}
            <h1 className="font-display font-black text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] xl:text-[4rem] text-white tracking-tight leading-[1.08] drop-shadow-md">
              {activeSlide.title}
            </h1>

            {/* Subtítulo Curto de Alto Contraste */}
            <p className="text-white/85 text-base sm:text-lg md:text-xl leading-relaxed max-w-xl mx-auto lg:mx-0 font-normal drop-shadow-sm">
              {activeSlide.subtitle}
            </p>

            {/* Botões de Ação de Grande Presença */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Link
                href={activeSlide.primaryCta.href}
                className={`w-full sm:w-auto inline-flex items-center justify-center font-bold text-base px-8 py-4 rounded-full transition-all duration-200 group active:scale-[0.98] ${activeSlide.theme.ctaPrimaryStyle}`}
              >
                <span>{activeSlide.primaryCta.label}</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </Link>
              <Link
                href={activeSlide.secondaryCta.href}
                className="w-full sm:w-auto inline-flex items-center justify-center font-semibold text-base px-8 py-4 rounded-full border-2 border-white/30 hover:border-white text-white hover:bg-white/10 transition-all duration-200 backdrop-blur-xs active:scale-[0.98]"
              >
                {activeSlide.secondaryCta.label}
              </Link>
            </div>

            {/* Indicadores Imediatos de Autoridade */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-xs sm:text-sm text-white/75 font-medium">
              {activeSlide.highlights.map((highlight) => (
                <span key={highlight} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" aria-hidden="true" />
                  <span>{highlight}</span>
                </span>
              ))}
            </div>

          </div>

          {/* ===================================================================
              BLOCO DE PRODUTOS GIGANTES (SEM CARDS, DIRETOS NA CENA)
              =================================================================== */}
          <div 
            className={`flex items-center justify-center relative py-4 lg:py-0 ${
              activeSlide.layoutDirection === 'product-left' 
                ? 'lg:col-span-6 lg:order-1' 
                : 'lg:col-span-6 lg:order-2'
            }`}
          >
            {/* Sombra de chão / reflexo de palco realista */}
            <div 
              className="absolute bottom-2 sm:bottom-4 w-3/4 h-12 bg-black/50 blur-2xl rounded-full pointer-events-none" 
              aria-hidden="true" 
            />

            {/* Agrupamento de Produtos Gigantes */}
            <div className="relative flex items-center justify-center max-w-full">
              {activeSlide.products.map((prod, idx) => (
                <div 
                  key={prod.src} 
                  className={`relative flex items-center justify-center ${prod.className}`}
                >
                  <Image
                    src={prod.src}
                    alt={prod.alt}
                    width={prod.width}
                    height={prod.height}
                    className="w-full h-auto object-contain max-h-[340px] sm:max-h-[420px] md:max-h-[460px] lg:max-h-[500px]"
                    priority={currentSlide === 0 && idx === 0}
                    loading={currentSlide === 0 ? undefined : 'lazy'}
                  />
                </div>
              ))}
            </div>

          </div>

        </div>

        {/* =====================================================================
            BARRA DE CONTROLES DO CARROSSEL (Estilo Vidro Translúcido / Campanha)
            ===================================================================== */}
        <div className="mt-8 pt-6 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-white">
          
          {/* Navegação Manual com Botões em Vidro */}
          <div className="flex items-center gap-2.5">
            <button
              type="button"
              onClick={prevSlide}
              className="w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 border border-white/25 flex items-center justify-center text-white transition-all shadow-lg backdrop-blur-md active:scale-95 focus-visible:outline-white"
              aria-label="Slide anterior"
            >
              <ChevronLeft className="w-5 h-5" aria-hidden="true" />
            </button>

            <button
              type="button"
              onClick={nextSlide}
              className="w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 border border-white/25 flex items-center justify-center text-white transition-all shadow-lg backdrop-blur-md active:scale-95 focus-visible:outline-white"
              aria-label="Próximo slide"
            >
              <ChevronRight className="w-5 h-5" aria-hidden="true" />
            </button>

            {/* Botão Play / Pause (Acessibilidade WCAG 2.2.2) */}
            <button
              type="button"
              onClick={() => setIsUserPaused(!isUserPaused)}
              className="w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 border border-white/25 flex items-center justify-center text-white/80 hover:text-white transition-all shadow-lg backdrop-blur-md active:scale-95 focus-visible:outline-white ml-1"
              aria-label={isUserPaused ? 'Iniciar rotação automática do carrossel' : 'Pausar rotação automática do carrossel'}
              title={isUserPaused ? 'Iniciar rotação' : 'Pausar rotação'}
            >
              {isUserPaused ? (
                <Play className="w-4 h-4 fill-current ml-0.5" aria-hidden="true" />
              ) : (
                <Pause className="w-4 h-4 fill-current" aria-hidden="true" />
              )}
            </button>
          </div>

          {/* Indicadores de Slide com Barra de Progresso no Ativo */}
          <div className="flex items-center gap-3" role="tablist" aria-label="Indicadores de slide">
            {HERO_SLIDES.map((slide, index) => {
              const isActive = index === currentSlide;

              return (
                <button
                  key={slide.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-label={`Ir para slide ${index + 1}: ${slide.categoryLabel}`}
                  onClick={() => goToSlide(index)}
                  className={`relative h-2.5 rounded-full transition-all duration-300 overflow-hidden focus-visible:outline-white ${
                    isActive 
                      ? 'w-16 bg-white/30' 
                      : 'w-3.5 bg-white/20 hover:bg-white/40'
                  }`}
                >
                  {isActive && (
                    <span 
                      className="absolute inset-y-0 left-0 bg-white rounded-full transition-all ease-linear shadow-[0_0_8px_rgba(255,255,255,0.8)]"
                      style={{ width: `${progress}%` }}
                      aria-hidden="true"
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Contador de Slides Numérico e Categoria Atual */}
          <div className="text-xs sm:text-sm text-white/70 font-medium">
            <span className="text-white font-bold text-sm sm:text-base">0{currentSlide + 1}</span>
            <span className="mx-1.5 opacity-40">/</span>
            <span className="opacity-75">0{totalSlides}</span>
            <span className="ml-3 hidden sm:inline text-xs text-white/60 uppercase tracking-wider font-semibold">
              {activeSlide.categoryLabel}
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};
