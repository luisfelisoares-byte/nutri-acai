import { NavItem } from '@/types/common';

/**
 * Itens de Navegação Principal do Header
 * Baseado na arquitetura consolidada de páginas (Bloco 0).
 */
export const mainNavItems: NavItem[] = [
  { label: 'Início', href: '/' },
  { label: 'A Fábrica', href: '/a-fabrica' },
  { label: 'Produtos', href: '/produtos' },
  { label: 'Encontre um Distribuidor', href: '/encontre-um-distribuidor' },
  { label: 'Marca Própria', href: '/marca-propria' },
  { label: 'Trabalhe Conosco', href: '/trabalhe-conosco' },
  { label: 'Contato', href: '/contato' },
  { 
    label: 'Seja um Distribuidor', 
    href: '/seja-um-distribuidor', 
    isButton: true 
  },
];

/**
 * Estrutura Oficial do Mega Menu de Produtos (Catálogo Real Nutri Açaí)
 */
export interface MegaMenuSubcategory {
  label: string;
  href: string;
}

export interface MegaMenuCategory {
  title: string;
  skuCount: string;
  tag: string;
  description: string;
  pageHref?: string;
  viewAllHref: string;
  subcategories: MegaMenuSubcategory[];
}

export const productsMegaMenu: MegaMenuCategory[] = [
  {
    title: 'Food Service',
    skuCount: '13 SKUs',
    tag: 'Operação B2B',
    description: 'Caixas de 5L e 10L e baldes vedados de alta litragem',
    pageHref: '/food-service',
    viewAllHref: '/produtos?cat=food-service',
    subcategories: [
      { label: 'Linha Açaí', href: '/produtos?cat=food-service&line=acai' },
      { label: 'Cremes & Sorbet', href: '/produtos?cat=food-service&line=cremes-e-sorbet' },
      { label: 'Frozen / Frozen Grego', href: '/produtos?cat=food-service&line=frozen' },
    ],
  },
  {
    title: 'Varejo 1,5L',
    skuCount: '11 SKUs',
    tag: 'Linha Familiar',
    description: 'Potes retangulares de 1,5L tradicionais e trufados',
    viewAllHref: '/produtos?cat=varejo',
    subcategories: [
      { label: 'Linha Açaí', href: '/produtos?cat=varejo&line=acai' },
      { label: 'Frozen / Frozen Grego', href: '/produtos?cat=varejo&line=frozen' },
      { label: 'Cremes & Sorbet', href: '/produtos?cat=varejo&line=cremes-e-sorbet' },
    ],
  },
  {
    title: 'Linha Nutrinho',
    skuCount: '10 SKUs',
    tag: 'Individual On-the-Go',
    description: 'Copinhos individuais práticos com domo e toppings',
    viewAllHref: '/produtos?cat=nutrinho',
    subcategories: [
      { label: 'Nutrinho 220ml com Domo & Toppings', href: '/produtos?cat=nutrinho&formato=220ml' },
      { label: 'Nutrinho 200ml Tradicional', href: '/produtos?cat=nutrinho&formato=200ml' },
    ],
  },
];

/**
 * Grupos de Links do Rodapé Institucional
 */
export const footerNavigation = {
  solutions: [
    { label: 'Food Service (5L, 10L, Baldes)', href: '/food-service' },
    { label: 'Linha Varejo (1,5L)', href: '/produtos?cat=varejo' },
    { label: 'Linha Nutrinho', href: '/produtos?cat=nutrinho' },
    { label: 'Marca Própria & Terceirização', href: '/marca-propria' },
  ],
  distributors: [
    { label: 'Seja um Distribuidor Oficial', href: '/seja-um-distribuidor' },
    { label: 'Localizar Distribuidor Próximo', href: '/encontre-um-distribuidor' },
    { label: 'Política Comercial', href: '/contato?ref=comercial' },
  ],
  company: [
    { label: 'A Indústria Nutri Açaí', href: '/a-fabrica' },
    { label: 'Capacidade & Laboratório', href: '/a-fabrica#laboratorio' },
    { label: 'Trabalhe Conosco (RH)', href: '/trabalhe-conosco' },
    { label: 'Atendimento Comercial', href: '/contato' },
  ],
};
