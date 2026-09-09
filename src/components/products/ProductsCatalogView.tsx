'use client';

import React, { useState, useMemo, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { Product, ProductCategory, ProductLine } from '@/types/product';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { 
  Package, 
  Search, 
  Filter, 
  RotateCcw, 
  ChevronRight, 
  Building2, 
  Store, 
  Sparkles, 
  ArrowRight, 
  Boxes, 
  ShoppingBag, 
  Info 
} from 'lucide-react';

interface ProductsCatalogViewProps {
  initialProducts: Product[];
}

const VALID_CATEGORIES: ProductCategory[] = ['food-service', 'varejo', 'nutrinho'];
const VALID_LINES: ProductLine[] = ['acai', 'cremes-e-sorbet', 'frozen', 'nutrinho'];

function parseCategoryParam(cat: string | null): ProductCategory | 'all' {
  if (cat && VALID_CATEGORIES.includes(cat as ProductCategory)) {
    return cat as ProductCategory;
  }
  return 'all';
}

function parseLineParam(line: string | null): ProductLine | 'all' {
  if (line && VALID_LINES.includes(line as ProductLine)) {
    return line as ProductLine;
  }
  return 'all';
}

function parseFormatoParam(formato: string | null): '220ml' | '200ml' | 'all' {
  if (formato === '220ml' || formato === '200ml') {
    return formato;
  }
  return 'all';
}

export const ProductsCatalogView: React.FC<ProductsCatalogViewProps> = ({ initialProducts }) => {
  const searchParams = useSearchParams();

  const [selectedCategory, setSelectedCategory] = useState<ProductCategory | 'all'>(() => {
    return parseCategoryParam(searchParams.get('cat'));
  });
  const [selectedLine, setSelectedLine] = useState<ProductLine | 'all'>(() => {
    return parseLineParam(searchParams.get('line'));
  });
  const [selectedFormato, setSelectedFormato] = useState<'220ml' | '200ml' | 'all'>(() => {
    return parseFormatoParam(searchParams.get('formato'));
  });
  const [searchQuery, setSearchQuery] = useState('');

  // Sincroniza estado quando os parâmetros da URL mudarem (ex: links do mega menu)
  useEffect(() => {
    const catFromUrl = parseCategoryParam(searchParams.get('cat'));
    const lineFromUrl = parseLineParam(searchParams.get('line'));
    const formatoFromUrl = parseFormatoParam(searchParams.get('formato'));
    setSelectedCategory(catFromUrl);
    setSelectedLine(lineFromUrl);
    setSelectedFormato(formatoFromUrl);
  }, [searchParams]);

  // Categorias principais com contagem
  const categoryCounts = useMemo(() => {
    return {
      all: initialProducts.length,
      'food-service': initialProducts.filter(p => p.category === 'food-service').length,
      'varejo': initialProducts.filter(p => p.category === 'varejo').length,
      'nutrinho': initialProducts.filter(p => p.category === 'nutrinho').length,
    };
  }, [initialProducts]);

  // Filtragem combinada
  const filteredProducts = useMemo(() => {
    return initialProducts.filter((product) => {
      // Filtro de Categoria
      if (selectedCategory !== 'all' && product.category !== selectedCategory) {
        return false;
      }
      // Filtro de Linha
      if (selectedLine !== 'all' && product.line !== selectedLine) {
        return false;
      }
      // Filtro de Formato (Nutrinho 220ml com domo vs 200ml)
      if (selectedFormato !== 'all') {
        if (selectedFormato === '220ml' && product.packaging !== 'pote-220ml') {
          return false;
        }
        if (selectedFormato === '200ml' && product.packaging !== 'pote-200ml') {
          return false;
        }
      }
      // Filtro de Busca Textual
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchName = product.name.toLowerCase().includes(query);
        const matchFlavor = product.flavors.some(f => f.toLowerCase().includes(query));
        const matchPackaging = product.packagingDisplay.toLowerCase().includes(query);
        if (!matchName && !matchFlavor && !matchPackaging) {
          return false;
        }
      }
      return true;
    });
  }, [initialProducts, selectedCategory, selectedLine, selectedFormato, searchQuery]);

  const handleCategorySelect = (category: ProductCategory | 'all') => {
    setSelectedCategory(category);
    setSelectedLine('all');
    setSelectedFormato('all');
    
    // Atualiza a URL mantendo ou limpando os parâmetros sem recarregar a página
    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      if (category === 'all') {
        url.searchParams.delete('cat');
      } else {
        url.searchParams.set('cat', category);
      }
      url.searchParams.delete('line');
      url.searchParams.delete('formato');
      window.history.replaceState(null, '', url.pathname + (url.search ? url.search : ''));
    }
  };

  const handleLineSelect = (line: ProductLine | 'all') => {
    setSelectedLine(line);
    setSelectedFormato('all');

    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      if (line === 'all') {
        url.searchParams.delete('line');
      } else {
        url.searchParams.set('line', line);
      }
      url.searchParams.delete('formato');
      window.history.replaceState(null, '', url.pathname + (url.search ? url.search : ''));
    }
  };

  const handleResetFilters = () => {
    setSelectedCategory('all');
    setSelectedLine('all');
    setSelectedFormato('all');
    setSearchQuery('');
    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      url.searchParams.delete('cat');
      url.searchParams.delete('line');
      url.searchParams.delete('formato');
      window.history.replaceState(null, '', url.pathname + (url.search ? url.search : ''));
    }
  };

  return (
    <div className="space-y-10">
      
      {/* Barra de Controles e Filtros de Alta Acessibilidade */}
      <div className="p-6 md:p-8 rounded-ds-2xl bg-white border border-brand-200/80 shadow-ds-card space-y-6">
        
        {/* Filtro 1: Abas Principais de Categoria */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-text-muted flex items-center gap-1.5">
              <Filter className="w-3.5 h-3.5 text-primary" aria-hidden="true" />
              Filtrar por Canal de Comercialização
            </span>
            {(selectedCategory !== 'all' || selectedLine !== 'all' || selectedFormato !== 'all' || searchQuery !== '') && (
              <button
                type="button"
                onClick={handleResetFilters}
                className="text-xs text-primary hover:text-primary-hover font-medium inline-flex items-center gap-1 focus-visible:outline-primary rounded-ds-sm"
              >
                <RotateCcw className="w-3 h-3" aria-hidden="true" />
                Limpar filtros
              </button>
            )}
          </div>

          <div className="flex flex-wrap gap-2" role="tablist" aria-label="Canais de Produtos">
            <button
              type="button"
              role="tab"
              aria-selected={selectedCategory === 'all'}
              onClick={() => handleCategorySelect('all')}
              className={`px-4 py-2.5 rounded-ds-md text-sm font-medium transition-all duration-200 focus-visible:outline-primary active:scale-[0.98] ${
                selectedCategory === 'all'
                  ? 'bg-primary text-primary-foreground shadow-ds-sm -translate-y-0.5'
                  : 'bg-surface-muted text-text-secondary hover:bg-border/60 hover:text-text-primary hover:-translate-y-0.5'
              }`}
            >
              Todos ({categoryCounts.all})
            </button>

            <button
              type="button"
              role="tab"
              aria-selected={selectedCategory === 'food-service'}
              onClick={() => handleCategorySelect('food-service')}
              className={`px-4 py-2.5 rounded-ds-md text-sm font-medium transition-all duration-200 focus-visible:outline-primary active:scale-[0.98] ${
                selectedCategory === 'food-service'
                  ? 'bg-primary text-primary-foreground shadow-ds-sm -translate-y-0.5'
                  : 'bg-surface-muted text-text-secondary hover:bg-border/60 hover:text-text-primary hover:-translate-y-0.5'
              }`}
            >
              Food Service ({categoryCounts['food-service']})
            </button>

            <button
              type="button"
              role="tab"
              aria-selected={selectedCategory === 'varejo'}
              onClick={() => handleCategorySelect('varejo')}
              className={`px-4 py-2.5 rounded-ds-md text-sm font-medium transition-all duration-200 focus-visible:outline-primary active:scale-[0.98] ${
                selectedCategory === 'varejo'
                  ? 'bg-primary text-primary-foreground shadow-ds-sm -translate-y-0.5'
                  : 'bg-surface-muted text-text-secondary hover:bg-border/60 hover:text-text-primary hover:-translate-y-0.5'
              }`}
            >
              Varejo 1,5L ({categoryCounts['varejo']})
            </button>

            <button
              type="button"
              role="tab"
              aria-selected={selectedCategory === 'nutrinho'}
              onClick={() => handleCategorySelect('nutrinho')}
              className={`px-4 py-2.5 rounded-ds-md text-sm font-medium transition-all duration-200 focus-visible:outline-primary active:scale-[0.98] ${
                selectedCategory === 'nutrinho'
                  ? 'bg-primary text-primary-foreground shadow-ds-sm -translate-y-0.5'
                  : 'bg-surface-muted text-text-secondary hover:bg-border/60 hover:text-text-primary hover:-translate-y-0.5'
              }`}
            >
              Linha Nutrinho ({categoryCounts['nutrinho']})
            </button>
          </div>
        </div>

        {/* Linha Divisória */}
        <div className="border-t border-border pt-4 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          
          {/* Subfiltro por Linha */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs text-text-muted font-medium mr-1">Linhas:</span>
            <button
              type="button"
              onClick={() => handleLineSelect('all')}
              className={`px-3 py-1.5 rounded-ds-sm text-xs font-medium transition-all duration-200 active:scale-95 ${
                selectedLine === 'all'
                  ? 'bg-brand-950 text-white shadow-ds-xs'
                  : 'bg-surface border border-border text-text-secondary hover:bg-surface-muted hover:border-text-muted/40'
              }`}
            >
              Todas as Linhas
            </button>
            <button
              type="button"
              onClick={() => handleLineSelect('acai')}
              className={`px-3 py-1.5 rounded-ds-sm text-xs font-medium transition-all duration-200 active:scale-95 ${
                selectedLine === 'acai'
                  ? 'bg-brand-950 text-white shadow-ds-xs'
                  : 'bg-surface border border-border text-text-secondary hover:bg-surface-muted hover:border-text-muted/40'
              }`}
            >
              Açaí
            </button>
            <button
              type="button"
              onClick={() => handleLineSelect('cremes-e-sorbet')}
              className={`px-3 py-1.5 rounded-ds-sm text-xs font-medium transition-all duration-200 active:scale-95 ${
                selectedLine === 'cremes-e-sorbet'
                  ? 'bg-brand-950 text-white shadow-ds-xs'
                  : 'bg-surface border border-border text-text-secondary hover:bg-surface-muted hover:border-text-muted/40'
              }`}
            >
              Cremes &amp; Sorbet
            </button>
            <button
              type="button"
              onClick={() => handleLineSelect('frozen')}
              className={`px-3 py-1.5 rounded-ds-sm text-xs font-medium transition-all duration-200 active:scale-95 ${
                selectedLine === 'frozen'
                  ? 'bg-brand-950 text-white shadow-ds-xs'
                  : 'bg-surface border border-border text-text-secondary hover:bg-surface-muted hover:border-text-muted/40'
              }`}
            >
              Frozen / Frozen Grego
            </button>
          </div>

          {/* Campo de Busca Rápida */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-text-muted absolute left-3 top-1/2 -translate-y-1/2" aria-hidden="true" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar por sabor ou formato..."
              className="w-full pl-9 pr-4 py-2 rounded-ds-md border border-border bg-surface text-sm text-text-primary placeholder:text-text-muted focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              aria-label="Buscar produtos no catálogo"
            />
          </div>

        </div>

        {/* Indicador de Formato Ativo (quando vindo do Mega Menu) */}
        {selectedFormato !== 'all' && (
          <div className="border-t border-border pt-3 flex items-center gap-2 text-xs">
            <span className="text-text-muted font-medium">Formato filtrado:</span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary/10 text-primary font-semibold border border-primary/20">
              {selectedFormato === '220ml' ? '220ml com Domo & Toppings' : '200ml Tradicional'}
              <button
                type="button"
                onClick={() => {
                  setSelectedFormato('all');
                  if (typeof window !== 'undefined') {
                    const url = new URL(window.location.href);
                    url.searchParams.delete('formato');
                    window.history.replaceState(null, '', url.pathname + (url.search ? url.search : ''));
                  }
                }}
                className="hover:text-primary-hover font-bold ml-1 text-sm leading-none focus-visible:outline-none"
                aria-label="Remover filtro de formato"
              >
                ×
              </button>
            </span>
          </div>
        )}

      </div>

      {/* Banner de Direcionamento Comercial Contextual por Canal */}
      {selectedCategory === 'food-service' && (
        <div className="p-6 rounded-ds-xl bg-gradient-to-r from-emerald-950/90 via-emerald-900/80 to-emerald-950/90 text-white border border-emerald-500/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-ds-md">
          <div className="flex items-center gap-4 min-w-0">
            <div className="relative w-16 h-20 sm:w-20 sm:h-24 rounded-ds-lg overflow-hidden shrink-0 border border-white/20 shadow-md">
              <Image
                src="/images/products/food-service-extracao-acai.webp"
                alt="Colher extratora retirando açaí da caixa Food Service"
                fill
                className="object-cover"
                sizes="80px"
              />
            </div>
            <div className="space-y-1">
              <span className="inline-block px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-emerald-400/20 text-emerald-300 border border-emerald-400/30">
                Padrão Industrial Food Service
              </span>
              <h3 className="font-display font-semibold text-base sm:text-lg text-white flex items-center gap-2">
                <Boxes className="w-5 h-5 text-emerald-400 shrink-0" aria-hidden="true" />
                Soluções Profissionais de Alto Rendimento
              </h3>
              <p className="text-white/80 text-xs sm:text-sm max-w-xl leading-relaxed">
                Caixas de 5L e 10L e baldes industriais. Textura aveludada para boleamento imediato sem desperdício na cuba.
              </p>
            </div>
          </div>
          <Button href="/contato?assunto=food-service" variant="primary" size="sm" className="bg-emerald-400 text-neutral-950 hover:bg-emerald-300 font-semibold shrink-0 w-full sm:w-auto" rightIcon={<ArrowRight className="w-4 h-4" />}>
            Solicitar Cotação Food Service
          </Button>
        </div>
      )}

      {selectedCategory === 'varejo' && (
        <div className="p-6 rounded-ds-xl bg-gradient-to-r from-rose-950/90 via-rose-900/80 to-rose-950/90 text-white border border-rose-500/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-ds-md">
          <div className="flex items-center gap-4 min-w-0">
            <div className="relative w-16 h-20 sm:w-20 sm:h-24 rounded-ds-lg overflow-hidden shrink-0 border border-white/20 shadow-md">
              <Image
                src="/images/products/linha-potes-1-5l-composicao-frutas.webp"
                alt="Linha Varejo 1,5L com frutas e toppings"
                fill
                className="object-cover"
                sizes="80px"
              />
            </div>
            <div className="space-y-1">
              <span className="inline-block px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-rose-400/20 text-rose-300 border border-rose-400/30">
                Linha Varejo &amp; Família 1,5L
              </span>
              <h3 className="font-display font-semibold text-base sm:text-lg text-white flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-rose-400 shrink-0" aria-hidden="true" />
                Destaque em Gôndola e Alto Giro
              </h3>
              <p className="text-white/80 text-xs sm:text-sm max-w-xl leading-relaxed">
                Potes retangulares de 1,5L trufados com recheios nobres e sabores consagrados para redes e empórios.
              </p>
            </div>
          </div>
          <Button href="/contato?assunto=produtos" variant="primary" size="sm" className="bg-rose-400 text-neutral-950 hover:bg-rose-300 font-semibold shrink-0 w-full sm:w-auto" rightIcon={<ArrowRight className="w-4 h-4" />}>
            Cotação para Varejo
          </Button>
        </div>
      )}

      {selectedCategory === 'nutrinho' && (
        <div className="p-6 rounded-ds-xl bg-gradient-to-r from-purple-950/90 via-purple-900/80 to-purple-950/90 text-white border border-purple-500/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-ds-md">
          <div className="flex items-center gap-4 min-w-0">
            <div className="relative w-16 h-20 sm:w-20 sm:h-24 rounded-ds-lg overflow-hidden shrink-0 border border-white/20 shadow-md">
              <Image
                src="/images/products/nutrinho-banana-com-fruta.webp"
                alt="Nutrinho individual com topping"
                fill
                className="object-cover"
                sizes="80px"
              />
            </div>
            <div className="space-y-1">
              <span className="inline-block px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-purple-400/20 text-purple-300 border border-purple-400/30">
                Consumo Prático On-the-go
              </span>
              <h3 className="font-display font-semibold text-base sm:text-lg text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-purple-400 shrink-0" aria-hidden="true" />
                Linha Nutrinho com Toppings Crocantes
              </h3>
              <p className="text-white/80 text-xs sm:text-sm max-w-xl leading-relaxed">
                Potes individuais de 220ml com domo de paçoca ou leite em pó. Praticidade imediata com alto apelo de compra.
              </p>
            </div>
          </div>
          <Button href="/contato?assunto=produtos" variant="primary" size="sm" className="bg-purple-300 text-neutral-950 hover:bg-white font-semibold shrink-0 w-full sm:w-auto" rightIcon={<ArrowRight className="w-4 h-4" />}>
            Cotação Linha Nutrinho
          </Button>
        </div>
      )}

      {/* Grade de Produtos */}
      {filteredProducts.length > 0 ? (
        <div className="space-y-6">
          <div className="flex items-center justify-between text-xs text-text-muted">
            <span>Exibindo <strong>{filteredProducts.length}</strong> de <strong>{initialProducts.length}</strong> produtos</span>
            <span className="text-text-muted italic">Embalagens industriais e comerciais oficiais</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => {
              const isFoodService = product.category === 'food-service';
              const isVarejo = product.category === 'varejo';
              const isNutrinho = product.category === 'nutrinho';

              // Identidade cromática sólida, sofisticada e exclusiva para cada canal no catálogo:
              // 1. Food Service -> Azul Petróleo / Ardósia Acinzentada (#edf2f7 / border #cbd5e1)
              // 2. Varejo 1,5L  -> Areia / Bege Quente / Terracota Suave (#faf4ee / border #eed9c7)
              // 3. Nutrinho     -> Lavanda / Lilás Suave / Rosé (#f5effa / border #e3d3ec)
              const channelStyle = isFoodService
                ? {
                    cardBg: 'bg-[#edf2f7]',
                    cardBorder: 'border-[#cbd5e1]',
                    cardHover: 'hover:border-[#64748b] hover:shadow-[0_12px_28px_-6px_rgba(51,65,85,0.18)]',
                    badgeBg: 'bg-[#334155]',
                    badgeText: 'text-[#f8fafc]',
                    badgeBorder: 'border-[#1e293b]',
                    techBoxBg: 'bg-white/80 border-[#cbd5e1]',
                    footerBorder: 'border-[#cbd5e1]',
                  }
                : isVarejo
                ? {
                    cardBg: 'bg-[#faf4ee]',
                    cardBorder: 'border-[#eed9c7]',
                    cardHover: 'hover:border-[#c28e67] hover:shadow-[0_12px_28px_-6px_rgba(140,79,37,0.15)]',
                    badgeBg: 'bg-[#7c4a27]',
                    badgeText: 'text-[#fff8f3]',
                    badgeBorder: 'border-[#5a3318]',
                    techBoxBg: 'bg-white/80 border-[#eed9c7]',
                    footerBorder: 'border-[#eed9c7]',
                  }
                : {
                    cardBg: 'bg-[#f5effa]',
                    cardBorder: 'border-[#e3d3ec]',
                    cardHover: 'hover:border-[#936ba8] hover:shadow-[0_12px_28px_-6px_rgba(112,60,137,0.15)]',
                    badgeBg: 'bg-[#5b3270]',
                    badgeText: 'text-[#fbf5fd]',
                    badgeBorder: 'border-[#412151]',
                    techBoxBg: 'bg-white/80 border-[#e3d3ec]',
                    footerBorder: 'border-[#e3d3ec]',
                  };

              return (
                <div
                  key={product.id}
                  className={`rounded-ds-2xl border ${channelStyle.cardBorder} ${channelStyle.cardBg} ${channelStyle.cardHover} hover:-translate-y-1.5 transition-all duration-300 p-5 flex flex-col justify-between space-y-5 shadow-ds-sm group`}
                >
                  <div className="space-y-4">
                    
                    {/* Visual da Embalagem / Packshot Real com Palco Neutro Preservado */}
                    <div className="aspect-[16/10] rounded-ds-xl bg-gradient-to-b from-slate-50/95 to-slate-100/80 border border-slate-200/80 flex flex-col items-center justify-center p-3 text-center relative overflow-hidden group shadow-[inset_0_1px_3px_rgba(0,0,0,0.03)]">
                      {product.image ? (
                        <div className="relative w-full h-full flex items-center justify-center">
                          <Image
                            src={product.image.src}
                            alt={product.image.alt || product.name}
                            width={320}
                            height={200}
                            className="object-contain w-full h-full max-h-[170px] drop-shadow-[0_12px_22px_rgba(0,0,0,0.15)] group-hover:scale-108 transition-all duration-300"
                            loading="lazy"
                          />
                        </div>
                      ) : (
                        /* Fallback limpo para SKUs sem imagem individual confirmada */
                        <div className="flex flex-col items-center justify-center w-full h-full bg-gradient-to-br from-surface-muted to-surface p-4">
                          <div className="w-12 h-12 rounded-full bg-surface border border-border flex items-center justify-center text-primary mb-2 shadow-ds-sm">
                            <Package className="w-6 h-6" aria-hidden="true" />
                          </div>
                          <span className="text-xs font-semibold text-text-primary">
                            {product.packagingDisplay}
                          </span>
                          <span className="text-[11px] text-text-muted mt-0.5 font-medium">
                            Volume: {product.volume} {product.weight ? `• ${product.weight}` : ''}
                          </span>
                        </div>
                      )}

                      {/* Selo de Topping para Nutrinho 220ml */}
                      {product.hasTopping && (
                        <div className="absolute top-2 right-2 z-10">
                          <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-white/95 text-[#5b3270] border border-[#d8bee7] shadow-xs">
                            Domo c/ Topping
                          </span>
                        </div>
                      )}

                      {/* Selo de Observação para Nutrinho 200ml */}
                      {isNutrinho && !product.hasTopping && (
                        <div className="absolute top-2 right-2 z-10">
                          <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-white/95 text-text-muted border border-border shadow-xs">
                            200 ml
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Dados e Identificação do SKU com Badge Sólido do Canal */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span className={`inline-flex items-center text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${channelStyle.badgeBg} ${channelStyle.badgeText} ${channelStyle.badgeBorder} tracking-wide uppercase shadow-2xs`}>
                          {isFoodService ? 'Food Service' : isVarejo ? 'Varejo 1,5L' : 'Nutrinho'}
                        </span>
                        <span className="text-[11px] text-text-muted uppercase tracking-wider font-semibold">
                          {product.line === 'cremes-e-sorbet' ? 'Cremes & Sorbet' : product.line === 'frozen' ? 'Frozen' : 'Linha Açaí'}
                        </span>
                      </div>

                      <h3 className="font-display font-semibold text-lg text-text-primary leading-snug">
                        {product.name}
                      </h3>

                      <p className="text-text-secondary text-xs sm:text-sm leading-relaxed line-clamp-2">
                        {product.description}
                      </p>
                    </div>

                    {/* Ficha Técnica Sintética Oficial */}
                    <div className={`p-3 rounded-ds-md ${channelStyle.techBoxBg} border space-y-1.5 text-xs`}>
                      <div className="flex items-center justify-between">
                        <span className="text-text-muted">Apresentação:</span>
                        <span className="font-medium text-text-primary">{product.volume}</span>
                      </div>

                      {product.weight && (
                        <div className="flex items-center justify-between">
                          <span className="text-text-muted">Peso Líquido:</span>
                          <span className="font-medium text-text-primary">{product.weight}</span>
                        </div>
                      )}

                      {product.toppingOptions && product.toppingOptions.length > 0 && (
                        <div className="flex items-center justify-between">
                          <span className="text-text-muted">Toppings na tampa:</span>
                          <span className="font-medium text-text-primary">{product.toppingOptions.join(' ou ')}</span>
                        </div>
                      )}

                      <div className="flex items-start justify-between gap-2 pt-0.5 border-t border-border/60">
                        <span className="text-text-muted shrink-0">Aplicação:</span>
                        <span className="font-medium text-text-primary text-right text-[11px]">
                          {product.application}
                        </span>
                      </div>
                    </div>

                  </div>

                  {/* Ação Comercial do Card */}
                  <div className={`pt-3 border-t ${channelStyle.footerBorder} flex items-center justify-between gap-3`}>
                    <span className="text-[11px] text-text-muted font-medium">
                      Venda direta fabril
                    </span>
                    <Button
                      href={`/contato?produto=${encodeURIComponent(product.slug)}`}
                      variant="outline"
                      size="sm"
                      className="bg-white/90 hover:bg-white border-slate-300 shadow-2xs font-semibold text-text-primary hover:text-primary"
                      rightIcon={<ChevronRight className="w-3.5 h-3.5" />}
                    >
                      Tenho interesse
                    </Button>
                  </div>

                </div>
              );
            })}
          </div>
        </div>
      ) : (
        /* Estado Vazio Amigável */
        <div className="p-12 text-center rounded-ds-xl border border-dashed border-border bg-surface space-y-4">
          <div className="w-12 h-12 rounded-full bg-surface-muted flex items-center justify-center text-text-muted mx-auto">
            <Info className="w-6 h-6" aria-hidden="true" />
          </div>
          <div className="space-y-1">
            <h3 className="font-display font-semibold text-lg text-text-primary">
              Nenhum produto encontrado com os filtros atuais
            </h3>
            <p className="text-text-secondary text-sm max-w-md mx-auto">
              Tente selecionar outra categoria ou limpe o termo de busca para visualizar o catálogo completo da Nutri Açaí.
            </p>
          </div>
          <div>
            <Button type="button" onClick={handleResetFilters} variant="primary" size="sm">
              Mostrar Todos os Produtos
            </Button>
          </div>
        </div>
      )}

      {/* Faixa Comercial de Rodapé do Catálogo */}
      <div className="p-8 sm:p-10 rounded-ds-2xl bg-brand-950 text-white flex flex-col lg:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center lg:text-left max-w-xl">
          <h3 className="font-display font-bold text-xl sm:text-2xl text-white">
            Interessado em distribuir ou comprar em escala industrial?
          </h3>
          <p className="text-white/70 text-sm leading-relaxed">
            Nossa fábrica em Gravataí/RS atua com fornecimento contínuo de açaí no atacado para distribuidores, operações de Food Service e redes varejistas.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
          <Button href="/seja-um-distribuidor" variant="primary" size="md" className="w-full sm:w-auto">
            Quero ser Distribuidor
          </Button>
          <Button href="/contato" variant="outline" size="md" className="border-white/30 text-white hover:bg-white/10 w-full sm:w-auto">
            Falar com Atendimento
          </Button>
        </div>
      </div>

    </div>
  );
};
