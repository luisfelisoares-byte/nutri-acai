/* ==========================================================================
   NUTRI AÇAÍ — ITENS DE NAVEGAÇÃO E ROTAS DO HEADER / DRAWER
   ========================================================================== */

export interface NavItem {
  id: string;
  label: string;
  href: string;
  isExternal?: boolean;
}

export const MAIN_NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'Início', href: '/' },
  { id: 'a-nutri', label: 'A Nutri', href: '/a-nutri' },
  { id: 'produtos', label: 'Produtos', href: '/produtos' },
  { id: 'distribuidores', label: 'Distribuidores', href: '/distribuidores' },
  { id: 'trabalhe-conosco', label: 'Trabalhe Conosco', href: '/trabalhe-conosco' },
  {
    id: 'catalogo',
    label: 'Catálogo',
    href: 'https://wa.me/c/555189621635',
    isExternal: true
  }
];

export const CTA_NAV_ITEM = {
  id: 'seja-um-distribuidor',
  label: 'SEJA UM DISTRIBUIDOR',
  href: '/seja-um-distribuidor'
};
