import React from 'react';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export interface FeatureProductItem {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  badge?: string;
}

export interface ProductFeatureSectionProps {
  id: string;
  tag: string;
  title: string;
  titleHighlight?: string;
  description: string;
  theme: {
    bgGradient: string;
    radialGlow: string;
    textMode: 'light' | 'dark';
    tagStyle: string;
    primaryCtaStyle?: string;
    secondaryCtaStyle?: string;
    accentDotColor?: string;
  };
  layoutDirection?: 'product-left' | 'product-right' | 'centered';
  products: FeatureProductItem[];
  highlights?: string[];
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta?: {
    label: string;
    href: string;
  };
  captionText?: string;
  supportingPhoto?: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    badge?: string;
    title?: string;
    description?: string;
  };
}

export const ProductFeatureSection: React.FC<ProductFeatureSectionProps> = ({
  id,
  tag,
  title,
  titleHighlight,
  description,
  theme,
  layoutDirection = 'product-right',
  products,
  highlights = [],
  primaryCta,
  secondaryCta,
  captionText,
  supportingPhoto,
}) => {
  const isLight = theme.textMode === 'light';
  const isProductLeft = layoutDirection === 'product-left';
  const isCentered = layoutDirection === 'centered';

  return (
    <section 
      id={id}
      className={`relative w-full overflow-hidden py-16 sm:py-20 md:py-24 lg:py-28 transition-colors duration-300 ${theme.bgGradient}`}
      aria-labelledby={`${id}-heading`}
    >
      {/* Glow e Iluminação Atmosférica de Fundo */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-80"
        style={{ background: theme.radialGlow }}
        aria-hidden="true"
      />

      {/* Grid Decorativo Muito Sutil para Textura Premium */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-overlay"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '36px 36px',
        }}
        aria-hidden="true"
      />

      <Container size="xl" className="relative z-10">
        {isCentered ? (
          /* =================================================================
             LAYOUT CENTRALIZADO
             ================================================================= */
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-10">
            {/* Bloco de Texto */}
            <div className="space-y-4 max-w-2xl">
              <span className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase ${theme.tagStyle}`}>
                {tag}
              </span>
              <h2 
                id={`${id}-heading`}
                className={`font-display font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-[1.15] ${
                  isLight ? 'text-white' : 'text-neutral-900'
                }`}
              >
                {title}{' '}
                {titleHighlight && (
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-purple-200 to-pink-300">
                    {titleHighlight}
                  </span>
                )}
              </h2>
              <p className={`text-base sm:text-lg leading-relaxed ${isLight ? 'text-white/80' : 'text-neutral-600'}`}>
                {description}
              </p>
            </div>

            {/* Destaque Central de Produtos */}
            <div className="relative w-full py-4 flex items-center justify-center">
              <div className="relative flex items-center justify-center gap-4 sm:gap-8 flex-wrap">
                {products.map((item, idx) => (
                  <div key={idx} className="relative group transition-transform duration-300 hover:scale-105">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      width={item.width}
                      height={item.height}
                      className={item.className || 'w-[220px] sm:w-[280px] object-contain drop-shadow-[0_25px_35px_rgba(0,0,0,0.6)]'}
                      loading="lazy"
                    />
                    {item.badge && (
                      <span className="absolute -top-2 right-2 px-2.5 py-1 rounded-full text-[11px] font-bold bg-white/90 text-neutral-900 shadow-md backdrop-blur-sm">
                        {item.badge}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Benefícios em Pílulas */}
            {highlights.length > 0 && (
              <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-2">
                {highlights.map((h, i) => (
                  <span 
                    key={i} 
                    className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium backdrop-blur-sm ${
                      isLight ? 'bg-white/10 text-white/90 border border-white/15' : 'bg-neutral-100 text-neutral-800 border border-neutral-200'
                    }`}
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" aria-hidden="true" />
                    {h}
                  </span>
                ))}
              </div>
            )}

            {/* Ações */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 w-full sm:w-auto">
              <Button
                href={primaryCta.href}
                variant="white"
                size="lg"
                className={`w-full sm:w-auto font-semibold ${theme.primaryCtaStyle || ''}`}
                rightIcon={<ArrowRight className="w-4 h-4" aria-hidden="true" />}
              >
                {primaryCta.label}
              </Button>
              {secondaryCta && (
                <Button
                  href={secondaryCta.href}
                  variant="ghost"
                  size="lg"
                  className={`w-full sm:w-auto border border-white/30 text-white hover:bg-white/10 hover:border-white ${theme.secondaryCtaStyle || ''}`}
                >
                  {secondaryCta.label}
                </Button>
              )}
            </div>

            {captionText && (
              <p className={`text-xs ${isLight ? 'text-white/50' : 'text-neutral-400'}`}>
                {captionText}
              </p>
            )}
          </div>
        ) : (
          /* =================================================================
             LAYOUT SPLIT 2 COLUNAS (ALTERNADO: PRODUTO-ESQUERDA OU PRODUTO-DIREITA)
             ================================================================= */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Coluna de Imagem / Composição de Produtos */}
            <div 
              className={`lg:col-span-6 xl:col-span-7 flex items-center justify-center relative ${
                isProductLeft ? 'lg:order-1' : 'lg:order-2'
              }`}
            >
              {/* Sombra de Contato de Chão (Floor Shadow) Realista */}
              <div 
                className="absolute -bottom-6 w-3/4 h-8 bg-black/40 rounded-full blur-xl pointer-events-none"
                aria-hidden="true"
              />

              {/* Grid de Packshots Oficiais */}
              <div className="relative w-full flex items-center justify-center py-6">
                <div className="relative flex items-end justify-center">
                  {products.map((item, idx) => (
                    <div 
                      key={idx} 
                      className={`relative transition-all duration-500 ease-out hover:scale-105 hover:z-30 ${
                        idx > 0 ? '-ml-8 sm:-ml-14 md:-ml-20' : ''
                      }`}
                      style={{ zIndex: 10 + idx }}
                    >
                      <Image
                        src={item.src}
                        alt={item.alt}
                        width={item.width}
                        height={item.height}
                        className={item.className || 'w-[200px] sm:w-[280px] md:w-[320px] object-contain drop-shadow-[0_30px_45px_rgba(0,0,0,0.65)]'}
                        loading="lazy"
                      />
                      {item.badge && (
                        <div className="absolute top-2 left-2 sm:top-4 sm:left-4 z-20">
                          <span className="px-2.5 py-1 rounded-full text-[10px] sm:text-xs font-bold bg-white/90 text-neutral-900 shadow-md backdrop-blur-md">
                            {item.badge}
                          </span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Card de Apoio / Prova Operacional ou Gastronômica Real */}
              {supportingPhoto && (
                <div className="mt-2 sm:mt-4 w-full max-w-sm sm:max-w-md rounded-ds-xl border border-white/20 bg-white/10 backdrop-blur-md p-3 shadow-2xl transition-all duration-300 hover:scale-[1.02] hover:bg-white/15">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="relative w-20 h-24 sm:w-24 sm:h-28 rounded-ds-lg overflow-hidden shrink-0 border border-white/20 shadow-inner bg-black/20">
                      <Image
                        src={supportingPhoto.src}
                        alt={supportingPhoto.alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 96px, 120px"
                        loading="lazy"
                      />
                    </div>
                    <div className="space-y-1 text-left flex-1 min-w-0">
                      {supportingPhoto.badge && (
                        <span className="inline-block px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-white/20 text-white border border-white/25">
                          {supportingPhoto.badge}
                        </span>
                      )}
                      {supportingPhoto.title && (
                        <p className="font-display font-semibold text-xs sm:text-sm text-white leading-snug">
                          {supportingPhoto.title}
                        </p>
                      )}
                      {supportingPhoto.description && (
                        <p className="text-[11px] sm:text-xs text-white/80 line-clamp-2 leading-relaxed">
                          {supportingPhoto.description}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {captionText && (
                <div className="mt-3 text-[11px] tracking-wide uppercase font-medium text-white/50 text-center w-full">
                  {captionText}
                </div>
              )}
            </div>

            {/* Coluna de Conteúdo & Texto */}
            <div 
              className={`lg:col-span-6 xl:col-span-5 space-y-6 text-left ${
                isProductLeft ? 'lg:order-2' : 'lg:order-1'
              }`}
            >
              {/* Tag / Linha */}
              <div>
                <span className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase ${theme.tagStyle}`}>
                  {tag}
                </span>
              </div>

              {/* Título com Destaque */}
              <h2 
                id={`${id}-heading`}
                className={`font-display font-bold text-3xl sm:text-4xl lg:text-[42px] leading-[1.15] tracking-tight ${
                  isLight ? 'text-white' : 'text-neutral-900'
                }`}
              >
                {title}{' '}
                {titleHighlight && (
                  <span className="block sm:inline text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-pink-200 to-amber-200">
                    {titleHighlight}
                  </span>
                )}
              </h2>

              {/* Descrição Comercial Direta */}
              <p className={`text-base sm:text-lg leading-relaxed ${isLight ? 'text-white/80' : 'text-neutral-600'}`}>
                {description}
              </p>

              {/* Pontos de Destaque / Confiabilidade */}
              {highlights.length > 0 && (
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1" aria-label="Diferenciais da Linha">
                  {highlights.map((highlight, index) => (
                    <li 
                      key={index}
                      className={`flex items-center gap-2 text-xs sm:text-sm font-medium ${
                        isLight ? 'text-white/90' : 'text-neutral-700'
                      }`}
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" aria-hidden="true" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              )}

              {/* Botões de Ação */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-3">
                <Button
                  href={primaryCta.href}
                  variant="white"
                  size="lg"
                  className={`font-semibold ${theme.primaryCtaStyle || 'bg-white text-brand-950 hover:bg-white/90 shadow-xl'}`}
                  rightIcon={<ArrowRight className="w-4 h-4 text-inherit" aria-hidden="true" />}
                >
                  <span className="text-inherit">{primaryCta.label}</span>
                </Button>

                {secondaryCta && (
                  <Button
                    href={secondaryCta.href}
                    variant="ghost"
                    size="lg"
                    className={`border border-white/30 text-white hover:bg-white/10 hover:border-white ${theme.secondaryCtaStyle || ''}`}
                  >
                    <span className="text-inherit">{secondaryCta.label}</span>
                  </Button>
                )}
              </div>
            </div>

          </div>
        )}
      </Container>
    </section>
  );
};
