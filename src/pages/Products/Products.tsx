import React, { useState, useEffect, useMemo } from 'react';
import {
  MessageCircle,
  ExternalLink,
  TrendingUp,
  Package
} from 'lucide-react';
import { Container } from '../../components/ui/Container/Container';
import { Section } from '../../components/ui/Section/Section';
import { Button } from '../../components/ui/Button/Button';
import { Badge } from '../../components/ui/Badge/Badge';
import {
  OFFICIAL_PRODUCTS,
  PRODUCT_LINE_OPTIONS,
  LineFilterOption
} from '../../data/productsData';
import { BRAND_SLOGAN } from '../../data/companyData';
import { buildProductWhatsAppUrl, WHATSAPP_NUMBERS } from '../../utils/whatsapp';
import { Product, ProductLine } from '../../types';
import './Products.css';

export const Products: React.FC = () => {
  const [selectedLine, setSelectedLine] = useState<'todas' | ProductLine>('todas');

  // Configuração Semântica de SEO para a Rota
  useEffect(() => {
    document.title = 'Produtos Oficiais — Nutri Açaí | Food Service, Varejo e Nutrinho';

    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute(
      'content',
      'Catálogo de produtos Nutri Açaí: Linha Food Service (5L a 12L), Linha Varejo (1,5L) e Linha Nutrinho (200ml e 220ml). Peça direto no WhatsApp oficial.'
    );

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Filtragem dos produtos pela linha selecionada
  const filteredProducts = useMemo(() => {
    if (selectedLine === 'todas') {
      return OFFICIAL_PRODUCTS;
    }
    return OFFICIAL_PRODUCTS.filter((product) => product.line === selectedLine);
  }, [selectedLine]);

  // Contadores por linha
  const getLineCount = (lineId: 'todas' | ProductLine) => {
    if (lineId === 'todas') return OFFICIAL_PRODUCTS.length;
    return OFFICIAL_PRODUCTS.filter((p) => p.line === lineId).length;
  };

  const getLineLabel = (line: ProductLine) => {
    switch (line) {
      case 'food-service':
        return 'Food Service';
      case 'varejo':
        return 'Varejo';
      case 'nutrinho':
        return 'Nutrinho';
      default:
        return 'Nutri Açaí';
    }
  };

  return (
    <div className="products-page">
      {/* ===================================================================
          1. HERO DE PRODUTOS
          =================================================================== */}
      <section className="products-hero" aria-labelledby="products-hero-title">
        <Container size="default">
          <div className="products-hero__content">
            <div className="products-hero__badge">
              <Badge variant="accent" icon={<Package size={14} />}>
                Portfólio Oficial
              </Badge>
            </div>

            <h1 id="products-hero-title" className="products-hero__title">
              Nossos Produtos
            </h1>

            <p className="products-hero__slogan">
              "{BRAND_SLOGAN}"
            </p>

            <p className="products-hero__lead">
              Açaí tradicional, açaí com frutas, cremes, sorbets e frozen desenvolvidos direto da nossa fábrica gaúcha para distribuidores, food services, marcas próprias e varejo.
            </p>

            <Button
              variant="outline-white"
              size="md"
              href={WHATSAPP_NUMBERS.CATALOG_URL}
              target="_blank"
              rel="noopener noreferrer"
              rightIcon={<ExternalLink size={16} />}
              className="products-hero__catalog-btn"
            >
              Abrir Catálogo no WhatsApp
            </Button>
          </div>
        </Container>
      </section>

      {/* ===================================================================
          2. FILTROS POR LINHA OFICIAL
          =================================================================== */}
      <nav className="products-filter-section" aria-label="Filtros de linha de produtos">
        <Container size="default">
          <div className="products-filter-bar">
            <div className="products-filter-pills" role="tablist">
              {PRODUCT_LINE_OPTIONS.map((opt: LineFilterOption) => {
                const isActive = selectedLine === opt.id;
                return (
                  <button
                    key={opt.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    className={`products-filter-pill ${isActive ? 'products-filter-pill--active' : ''}`}
                    onClick={() => setSelectedLine(opt.id)}
                  >
                    <span>{opt.label}</span>
                    <span className="products-filter-pill__count">
                      {getLineCount(opt.id)}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="products-counter-text">
              Exibindo <strong>{filteredProducts.length}</strong> produtos oficiais
            </div>
          </div>
        </Container>
      </nav>

      {/* ===================================================================
          3. GRID DE PRODUTOS OFICIAIS
          =================================================================== */}
      <Section as="section" padding="lg" background="default" className="products-grid-section" aria-labelledby="products-list-title">
        <Container size="default">
          <h2 id="products-list-title" className="sr-only">
            Lista de produtos oficiais cadastrados
          </h2>

          <div className="products-grid">
            {filteredProducts.map((product: Product) => {
              const lineLabel = getLineLabel(product.line);
              const whatsAppUrl = buildProductWhatsAppUrl(product.name, product.volume, lineLabel);

              return (
                <article
                  key={product.id}
                  className={`product-card product-card--${product.line}`}
                >
                  {/* Foto Oficial Recortada do Catálogo */}
                  <div className="product-card__image-container">
                    <img
                      src={product.image}
                      alt={`${product.name} — ${product.volume}`}
                      className="product-card__image"
                      width={400}
                      height={400}
                      loading="lazy"
                      decoding="async"
                    />

                    <div className="product-card__top-badges">
                      {product.isZeroSugar && (
                        <Badge variant="accent">
                          Zero Açúcar
                        </Badge>
                      )}
                    </div>
                  </div>

                  {/* Informações do Produto */}
                  <div className="product-card__body">
                    <span className="product-card__line-indicator">
                      {lineLabel}
                    </span>

                    <h3 className="product-card__title">
                      {product.name}
                    </h3>

                    <span className="product-card__volume">
                      {product.volume}
                    </span>

                    {/* Tags Oficiais */}
                    <div className="product-card__features">
                      {product.features?.map((feat, fIdx) => (
                        <span key={fIdx} className="product-card__feature-tag">
                          {feat}
                        </span>
                      ))}
                    </div>

                    {/* Botão de Compra / Dúvida via WhatsApp de Vendas */}
                    <div className="product-card__footer">
                      <Button
                        variant="whatsapp"
                        size="sm"
                        fullWidth
                        href={whatsAppUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        leftIcon={<MessageCircle size={16} />}
                      >
                        Pedir no WhatsApp
                      </Button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {/* ===================================================================
              4. BANNER CTA PARA CATÁLOGO OFICIAL NO WHATSAPP
              =================================================================== */}
          <div className="products-cta-banner">
            <h3>Deseja consultar preços e condições comerciais?</h3>
            <p>
              Acesse diretamente nosso catálogo oficial no WhatsApp de Vendas ou cadastre-se para se tornar um distribuidor parceiro da Nutri Açaí.
            </p>
            <div className="products-cta-banner__actions">
              <Button
                variant="whatsapp"
                size="lg"
                href={WHATSAPP_NUMBERS.CATALOG_URL}
                target="_blank"
                rel="noopener noreferrer"
                leftIcon={<ExternalLink size={18} />}
              >
                Abrir Catálogo no WhatsApp
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
      </Section>
    </div>
  );
};

export default Products;
