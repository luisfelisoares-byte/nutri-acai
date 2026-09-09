'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowRight, ShieldCheck, MapPin, ChevronDown, ChevronRight, Package } from 'lucide-react';
import { mainNavItems, productsMegaMenu } from '@/data/navigation';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDesktopMegaMenuOpen, setIsDesktopMegaMenuOpen] = useState(false);
  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false);
  const megaMenuTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();

  const handleMouseEnterMegaMenu = () => {
    if (megaMenuTimeoutRef.current) {
      clearTimeout(megaMenuTimeoutRef.current);
      megaMenuTimeoutRef.current = null;
    }
    setIsDesktopMegaMenuOpen(true);
  };

  const handleMouseLeaveMegaMenu = () => {
    megaMenuTimeoutRef.current = setTimeout(() => {
      setIsDesktopMegaMenuOpen(false);
    }, 220);
  };

  // Limpa timer ao desmontar
  useEffect(() => {
    return () => {
      if (megaMenuTimeoutRef.current) {
        clearTimeout(megaMenuTimeoutRef.current);
      }
    };
  }, []);

  // Fecha menus ao trocar de rota
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsDesktopMegaMenuOpen(false);
    setIsMobileProductsOpen(false);
  }, [pathname]);

  // Bloqueia scroll do body e escuta tecla ESC para fechar menus
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (isDesktopMegaMenuOpen) {
          setIsDesktopMegaMenuOpen(false);
        }
        if (isMobileMenuOpen) {
          setIsMobileMenuOpen(false);
        }
      }
    };

    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMobileMenuOpen, isDesktopMegaMenuOpen]);

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-slate-200/90 shadow-[0_4px_16px_-2px_rgba(15,23,42,0.08)] transition-all">
      {/* Barra Superior Institucional de Autoridade */}
      <div className="bg-brand-950 text-white text-xs py-1.5 px-4 hidden md:block border-b border-white/10">
        <Container size="xl" className="flex items-center justify-between">
          <div className="flex items-center gap-4 text-white/90">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-secondary" aria-hidden="true" />
              Fábrica em Gravataí / RS
            </span>
            <span className="w-1 h-1 rounded-full bg-white/30" aria-hidden="true" />
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-secondary" aria-hidden="true" />
              Produção Própria Industrial
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-white/80">Atendimento comercial para Food Service e Distribuidores</span>
            <span className="w-1 h-1 rounded-full bg-white/30" aria-hidden="true" />
            <a 
              href="https://www.instagram.com/nutriacaioficial" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-secondary transition-colors focus-visible:outline-white font-medium"
            >
              @nutriacaioficial
            </a>
          </div>
        </Container>
      </div>

      {/* Barra de Navegação Principal */}
      <div className="py-3 bg-white relative">
        <Container size="xl" className="flex items-center justify-between gap-4">
          {/* Identidade Visual / Logotipo Oficial */}
          <Link 
            href="/" 
            className="flex items-center gap-3 group focus-visible:outline-primary rounded-ds-md"
            aria-label="Nutri Açaí — Página Inicial"
          >
            {/* Logotipo Oficial Nutri Açaí com proporção e borda suave */}
            <div className="relative w-11 h-11 rounded-full overflow-hidden border border-slate-200 shadow-sm group-hover:border-primary/50 group-hover:scale-105 transition-all duration-200 bg-white flex items-center justify-center p-0.5 shrink-0">
              <Image
                src="/images/brand/logo-nutri-acai.webp"
                alt="Logotipo Nutri Açaí"
                width={44}
                height={44}
                className="object-contain w-full h-full"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-lg text-slate-900 leading-tight group-hover:text-primary transition-colors tracking-tight">
                Nutri Açaí
              </span>
              <span className="text-[10px] text-primary font-bold tracking-wider uppercase">
                Nutritivo &amp; Saboroso
              </span>
            </div>
          </Link>

          {/* Navegação Desktop */}
          <nav className="hidden lg:flex items-center lg:gap-0.5 xl:gap-1" aria-label="Navegação Principal">
            {mainNavItems.map((item) => {
              const isActive = pathname === item.href;

              if (item.isButton) {
                return (
                  <div key={item.href} className="ml-1.5 xl:ml-3 shrink-0">
                    <Button 
                      href={item.href} 
                      variant="primary" 
                      size="sm"
                      className="shadow-sm hover:shadow-md group font-semibold text-xs xl:text-sm px-3 xl:px-4 whitespace-nowrap"
                      rightIcon={<ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />}
                    >
                      {item.label}
                    </Button>
                  </div>
                );
              }

              // Item com Mega Menu: "Produtos"
              if (item.href === '/produtos') {
                return (
                  <div
                    key={item.href}
                    className="relative flex items-center shrink-0"
                    onMouseEnter={handleMouseEnterMegaMenu}
                    onMouseLeave={handleMouseLeaveMegaMenu}
                  >
                    <Link
                      href={item.href}
                      className={`px-2 xl:px-3.5 py-2 text-[13px] xl:text-sm font-semibold rounded-ds-md transition-all duration-150 inline-flex items-center gap-1 xl:gap-1.5 focus-visible:outline-primary whitespace-nowrap ${
                        isActive || isDesktopMegaMenuOpen
                          ? 'text-primary bg-purple-50 font-bold shadow-xs after:absolute after:bottom-1 after:left-2 xl:after:left-3 after:right-2 xl:after:right-3 after:h-0.5 after:bg-primary after:rounded-full'
                          : 'text-slate-700 hover:text-primary hover:bg-slate-50'
                      }`}
                      aria-current={isActive ? 'page' : undefined}
                      aria-expanded={isDesktopMegaMenuOpen}
                      aria-haspopup="true"
                    >
                      <span>{item.label}</span>
                      <ChevronDown 
                        className={`w-3.5 h-3.5 text-primary/70 transition-transform duration-200 ${
                          isDesktopMegaMenuOpen ? 'rotate-180 text-primary' : ''
                        }`} 
                        aria-hidden="true" 
                      />
                    </Link>
                  </div>
                );
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-2 xl:px-3.5 py-2 text-[13px] xl:text-sm font-semibold rounded-ds-md transition-all duration-150 relative focus-visible:outline-primary whitespace-nowrap shrink-0 ${
                    isActive
                      ? 'text-primary bg-purple-50 font-bold shadow-xs after:absolute after:bottom-1 after:left-2 xl:after:left-3 after:right-2 xl:after:right-3 after:h-0.5 after:bg-primary after:rounded-full'
                      : 'text-slate-700 hover:text-primary hover:bg-slate-50'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Botão de Menu Mobile */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              type="button"
              className="w-10 h-10 flex items-center justify-center rounded-ds-md text-slate-900 hover:bg-slate-100 border border-slate-300 transition-colors focus-visible:outline-primary"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-nav"
              aria-label={isMobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5 text-slate-900" aria-hidden="true" />
              ) : (
                <Menu className="w-5 h-5 text-slate-900" aria-hidden="true" />
              )}
            </button>
          </div>
        </Container>

        {/* Mega Menu Desktop (Dropdown Amplo Flutuante) */}
        {isDesktopMegaMenuOpen && (
          <div
            className="absolute top-full left-0 right-0 z-50 pt-2 pb-6 px-4 hidden lg:block"
            onMouseEnter={handleMouseEnterMegaMenu}
            onMouseLeave={handleMouseLeaveMegaMenu}
          >
            <Container size="xl">
              <div 
                className="bg-white rounded-2xl border border-slate-200/90 shadow-[0_20px_50px_-10px_rgba(15,23,42,0.18)] p-6 md:p-8 animate-in fade-in-50 slide-in-from-top-2 duration-200"
                role="region"
                aria-label="Menu de Produtos e Categorias"
              >
                {/* Topo do Painel */}
                <div className="flex items-center justify-between pb-5 mb-6 border-b border-border/80">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-50 text-primary border border-brand-200/80">
                      <Package className="w-3.5 h-3.5 text-primary" aria-hidden="true" />
                      Catálogo Oficial Nutri Açaí
                    </span>
                    <span className="text-xs text-text-secondary">
                      34 SKUs industriais e de varejo fabricados com padrão gastronômico em Gravataí/RS
                    </span>
                  </div>
                  <Link
                    href="/produtos"
                    onClick={() => setIsDesktopMegaMenuOpen(false)}
                    className="text-xs font-bold text-primary hover:text-primary-hover flex items-center gap-1 group/all focus-visible:outline-primary rounded-ds-sm"
                  >
                    <span>Ver Catálogo Completo (34 opções)</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/all:translate-x-1 transition-transform" aria-hidden="true" />
                  </Link>
                </div>

                {/* Grid das 3 Colunas Principais com Cores Sólidas Distintas */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {productsMegaMenu.map((category, index) => {
                    // Configuração cromática sólida e exclusiva derivada diretamente da página /produtos:
                    // 1. Food Service  -> Baseado em `primary` (Roxo Institucional #583c6f)
                    // 2. Varejo 1,5L    -> Baseado em `secondary` (Verde Florestal #2f6b3e)
                    // 3. Linha Nutrinho -> Baseado em `accent` (Verde Botânico Vibrante #2e7d32 / #1b5e20)
                    const theme = 
                      index === 0
                        ? {
                            // 1. FOOD SERVICE — primary (#583c6f) / card hover border-primary/60
                            cardBg: 'bg-[#432c56]',
                            cardBorder: 'border-[#331f42]',
                            tagBg: 'bg-[#331f42]',
                            tagText: 'text-[#e5d4f3]',
                            badgeBg: 'bg-[#331f42]',
                            badgeText: 'text-[#f5edfa]',
                            badgeBorder: 'border-[#583c6f]',
                            titleText: 'text-white hover:text-[#d6bbf0]',
                            descText: 'text-[#d8c7e6]',
                            subHeader: 'text-[#c2abdb]',
                            itemBg: 'hover:bg-[#523769]',
                            itemBorder: 'hover:border-[#6a4787]',
                            itemText: 'text-[#f0e8f7] hover:text-white',
                            iconColor: 'text-[#c2abdb] group-hover:text-white',
                            divider: 'border-[#523769]',
                            linkPrimary: 'text-[#e8d7f8] hover:text-white',
                            linkSecondary: 'text-[#a3e8b4] hover:text-[#c4f5d0]',
                            linkBgHover: 'hover:bg-[#523769]',
                          }
                        : index === 1
                        ? {
                            // 2. VAREJO 1,5L — secondary (#2f6b3e) / card hover border-secondary/60
                            cardBg: 'bg-[#224f2e]',
                            cardBorder: 'border-[#183921]',
                            tagBg: 'bg-[#183921]',
                            tagText: 'text-[#c7edd4]',
                            badgeBg: 'bg-[#183921]',
                            badgeText: 'text-[#eaf8f0]',
                            badgeBorder: 'border-[#2f6b3e]',
                            titleText: 'text-white hover:text-[#baf0cd]',
                            descText: 'text-[#cbe7d5]',
                            subHeader: 'text-[#a6ddb9]',
                            itemBg: 'hover:bg-[#2c633a]',
                            itemBorder: 'hover:border-[#387c49]',
                            itemText: 'text-[#ebf7f0] hover:text-white',
                            iconColor: 'text-[#a6ddb9] group-hover:text-white',
                            divider: 'border-[#2c633a]',
                            linkPrimary: 'text-[#d2f6de] hover:text-white',
                            linkSecondary: 'text-[#d2f6de] hover:text-white',
                            linkBgHover: 'hover:bg-[#2c633a]',
                          }
                        : {
                            // 3. LINHA NUTRINHO — accent (#2e7d32 / #1b5e20) / card hover border-accent/60
                            cardBg: 'bg-[#1d5724]',
                            cardBorder: 'border-[#143e1a]',
                            tagBg: 'bg-[#143e1a]',
                            tagText: 'text-[#cbf0cf]',
                            badgeBg: 'bg-[#143e1a]',
                            badgeText: 'text-[#eaf9ec]',
                            badgeBorder: 'border-[#2e7d32]',
                            titleText: 'text-white hover:text-[#b7f2bd]',
                            descText: 'text-[#ceead1]',
                            subHeader: 'text-[#a8e2ae]',
                            itemBg: 'hover:bg-[#266d2f]',
                            itemBorder: 'hover:border-[#30893b]',
                            itemText: 'text-[#eefbf0] hover:text-white',
                            iconColor: 'text-[#a8e2ae] group-hover:text-white',
                            divider: 'border-[#266d2f]',
                            linkPrimary: 'text-[#d5f7d9] hover:text-white',
                            linkSecondary: 'text-[#d5f7d9] hover:text-white',
                            linkBgHover: 'hover:bg-[#266d2f]',
                          };

                    return (
                      <div 
                        key={category.title} 
                        className={`flex flex-col justify-between space-y-5 ${theme.cardBg} p-6 rounded-2xl border ${theme.cardBorder} shadow-lg transition-all duration-200 hover:-translate-y-1 hover:shadow-xl`}
                      >
                        <div className="space-y-4">
                          {/* Cabeçalho da Coluna com Tag e Contador */}
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <span className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md ${theme.tagBg} ${theme.tagText}`}>
                                {category.tag}
                              </span>
                              <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full ${theme.badgeBg} ${theme.badgeText} border ${theme.badgeBorder}`}>
                                {category.skuCount}
                              </span>
                            </div>
                            <Link
                              href={category.viewAllHref}
                              onClick={() => setIsDesktopMegaMenuOpen(false)}
                              className={`font-display font-bold text-xl ${theme.titleText} transition-colors block focus-visible:outline-white rounded-ds-sm`}
                            >
                              {category.title}
                            </Link>
                            <p className={`text-xs ${theme.descText} leading-relaxed min-h-[36px]`}>
                              {category.description}
                            </p>
                          </div>

                          {/* Lista de Subcategorias Reais */}
                          <div className="pt-2 space-y-1.5">
                            <span className={`text-[10px] font-bold uppercase tracking-wider ${theme.subHeader} block pb-1`}>
                              Subcategorias:
                            </span>
                            <ul className="space-y-1.5" role="list">
                              {category.subcategories.map((sub) => (
                                <li key={sub.href}>
                                  <Link
                                    href={sub.href}
                                    onClick={() => setIsDesktopMegaMenuOpen(false)}
                                    className={`px-3.5 py-2.5 rounded-xl text-sm ${theme.itemText} ${theme.itemBg} flex items-center justify-between group transition-all duration-200 focus-visible:outline-white border border-transparent ${theme.itemBorder}`}
                                  >
                                    <span className="font-medium group-hover:translate-x-1 transition-transform">
                                      {sub.label}
                                    </span>
                                    <ChevronRight className={`w-4 h-4 ${theme.iconColor} group-hover:translate-x-1 transition-all`} aria-hidden="true" />
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        {/* Links de Ação da Coluna */}
                        <div className={`pt-4 border-t ${theme.divider} space-y-2.5`}>
                          {category.pageHref && (
                            <Link
                              href={category.pageHref}
                              onClick={() => setIsDesktopMegaMenuOpen(false)}
                              className={`text-xs font-semibold ${theme.linkSecondary} flex items-center gap-1.5 group/sol focus-visible:outline-white py-1 px-1.5 rounded-md ${theme.linkBgHover} transition-all`}
                            >
                              <span>Conhecer Soluções Food Service</span>
                              <ArrowRight className="w-3.5 h-3.5 group-hover/sol:translate-x-1 transition-transform" aria-hidden="true" />
                            </Link>
                          )}
                          <Link
                            href={category.viewAllHref}
                            onClick={() => setIsDesktopMegaMenuOpen(false)}
                            className={`text-xs font-semibold ${theme.linkPrimary} flex items-center gap-1.5 group/all focus-visible:outline-white py-1 px-1.5 rounded-md ${theme.linkBgHover} transition-all`}
                          >
                            <span>Ver todos no Catálogo ({category.skuCount})</span>
                            <ArrowRight className="w-3.5 h-3.5 group-hover/all:translate-x-1 transition-transform" aria-hidden="true" />
                          </Link>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Rodapé Integrado do Mega Menu */}
                <div className="mt-6 pt-4 border-t border-border/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
                  <div className="flex items-center gap-2 text-text-secondary">
                    <ShieldCheck className="w-4 h-4 text-secondary shrink-0" aria-hidden="true" />
                    <span>Fornecimento contínuo direto da fábrica em Gravataí/RS para distribuidores, buffets e redes.</span>
                  </div>
                  <Link
                    href="/produtos"
                    onClick={() => setIsDesktopMegaMenuOpen(false)}
                    className="font-bold text-primary hover:text-primary-hover inline-flex items-center gap-1.5 px-3 py-1.5 rounded-ds-md hover:bg-purple-50 transition-colors focus-visible:outline-primary"
                  >
                    <span>Ver Catálogo Completo &rarr;</span>
                  </Link>
                </div>
              </div>
            </Container>
          </div>
        )}
      </div>

      {/* Menu Mobile Drawer / Overlay */}
      {isMobileMenuOpen && (
        <div 
          id="mobile-nav"
          className="fixed inset-0 top-[69px] md:top-[102px] bg-surface z-50 overflow-y-auto border-t border-border lg:hidden px-4 py-6 flex flex-col justify-between"
          role="dialog"
          aria-modal="true"
          aria-label="Menu de Navegação Móvel"
        >
          <nav className="flex flex-col gap-2" aria-label="Navegação Móvel">
            {mainNavItems.map((item) => {
              const isActive = pathname === item.href;

              if (item.isButton) {
                return (
                  <div key={item.href} className="pt-4 mt-2 border-t border-border">
                    <Button 
                      href={item.href} 
                      variant="primary" 
                      size="lg" 
                      fullWidth
                      rightIcon={<ArrowRight className="w-5 h-5" aria-hidden="true" />}
                    >
                      {item.label}
                    </Button>
                  </div>
                );
              }

              // Tratamento específico para "Produtos" no Mobile
              if (item.href === '/produtos') {
                return (
                  <div key={item.href} className="border-b border-border/60 pb-2">
                    <div className="flex items-center justify-between">
                      <Link
                        href="/produtos"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`px-4 py-3 text-base rounded-ds-md transition-colors flex-1 ${
                          isActive
                            ? 'text-primary bg-primary-subtle/50 font-semibold'
                            : 'text-text-primary hover:bg-surface-muted font-medium'
                        }`}
                        aria-current={isActive ? 'page' : undefined}
                      >
                        {item.label}
                      </Link>
                      <button
                        type="button"
                        onClick={() => setIsMobileProductsOpen(!isMobileProductsOpen)}
                        className="p-3 text-text-muted hover:text-primary focus-visible:outline-primary rounded-ds-md min-h-[44px] min-w-[44px] flex items-center justify-center"
                        aria-expanded={isMobileProductsOpen}
                        aria-label="Expandir categorias de produtos"
                      >
                        <ChevronDown
                          className={`w-5 h-5 transition-transform duration-200 ${
                            isMobileProductsOpen ? 'rotate-180 text-primary' : ''
                          }`}
                          aria-hidden="true"
                        />
                      </button>
                    </div>

                    {/* Categorias Expandidas no Mobile com Cores Sólidas Distintas */}
                    {isMobileProductsOpen && (
                      <div className="space-y-3 mt-2">
                        {productsMegaMenu.map((cat, index) => {
                          const mobileTheme = 
                            index === 0
                              ? {
                                  bg: 'bg-[#432c56]',
                                  border: 'border-[#331f42]',
                                  title: 'text-white',
                                  badge: 'bg-[#331f42] text-[#f5edfa] border-[#583c6f]',
                                  subText: 'text-[#f0e8f7] hover:bg-[#523769]',
                                  viewAll: 'text-[#d6bbf0] hover:text-white',
                                }
                              : index === 1
                              ? {
                                  bg: 'bg-[#224f2e]',
                                  border: 'border-[#183921]',
                                  title: 'text-white',
                                  badge: 'bg-[#183921] text-[#eaf8f0] border-[#2f6b3e]',
                                  subText: 'text-[#ebf7f0] hover:bg-[#2c633a]',
                                  viewAll: 'text-[#baf0cd] hover:text-white',
                                }
                              : {
                                  bg: 'bg-[#1d5724]',
                                  border: 'border-[#143e1a]',
                                  title: 'text-white',
                                  badge: 'bg-[#143e1a] text-[#eaf9ec] border-[#2e7d32]',
                                  subText: 'text-[#eefbf0] hover:bg-[#266d2f]',
                                  viewAll: 'text-[#b7f2bd] hover:text-white',
                                };

                          return (
                            <div key={cat.title} className={`${mobileTheme.bg} p-4 rounded-xl border ${mobileTheme.border} shadow-sm space-y-2`}>
                              <div className="flex items-center justify-between pb-1 border-b border-white/10">
                                <span className={`text-xs font-bold ${mobileTheme.title} uppercase tracking-wider`}>
                                  {cat.title}
                                </span>
                                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${mobileTheme.badge}`}>
                                  {cat.skuCount}
                                </span>
                              </div>

                              <div className="space-y-1 pt-1">
                                {cat.subcategories.map((sub) => (
                                  <Link
                                    key={sub.href}
                                    href={sub.href}
                                    onClick={() => {
                                      setIsMobileMenuOpen(false);
                                      setIsMobileProductsOpen(false);
                                    }}
                                    className={`block px-3 py-2 rounded-lg text-xs font-medium ${mobileTheme.subText} transition-colors min-h-[38px] flex items-center`}
                                  >
                                    • {sub.label}
                                  </Link>
                                ))}
                                <Link
                                  href={cat.viewAllHref}
                                  onClick={() => {
                                    setIsMobileMenuOpen(false);
                                    setIsMobileProductsOpen(false);
                                  }}
                                  className={`block px-3 py-2 text-xs font-semibold ${mobileTheme.viewAll} transition-colors`}
                                >
                                  Ver todos de {cat.title} ({cat.skuCount}) &rarr;
                                </Link>
                              </div>
                            </div>
                          );
                        })}

                        <div className="pt-2">
                          <Link
                            href="/produtos"
                            onClick={() => {
                              setIsMobileMenuOpen(false);
                              setIsMobileProductsOpen(false);
                            }}
                            className="block px-3 py-3 rounded-xl bg-primary text-white text-center font-bold text-xs shadow-md hover:bg-primary-hover transition-colors"
                          >
                            Ver Catálogo Completo (34 opções) &rarr;
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`px-4 py-3 text-base rounded-ds-md transition-colors ${
                    isActive
                      ? 'text-primary bg-primary-subtle/50 font-semibold'
                      : 'text-text-primary hover:bg-surface-muted'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Rodapé Interno do Menu Mobile */}
          <div className="pt-6 mt-6 border-t border-border text-xs text-text-muted space-y-2">
            <p className="font-semibold text-text-primary">Nutri Açaí Indústria de Alimentos</p>
            <p>Gravataí / RS — Produção Própria Industrial</p>
            <p className="text-secondary font-medium">Fornecimento para Food Service, Varejo e Distribuidores</p>
          </div>
        </div>
      )}
    </header>
  );
};
