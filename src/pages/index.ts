/* ==========================================================================
   NUTRI AÇAÍ — ARQUITETURA DE PÁGINAS
   ========================================================================== */

export * from './Home/Home';

export const ROUTE_PATHS = {
  HOME: '/',
  A_NUTRI: '/a-nutri',
  PRODUCTS: '/produtos',
  DISTRIBUTORS: '/distribuidores',
  BECOME_DISTRIBUTOR: '/seja-um-distribuidor',
  WORK_WITH_US: '/trabalhe-conosco',
  WHERE_WE_ARE: '/onde-encontrar',
  CATALOG_EXTERNAL: 'https://wa.me/c/555189621635'
} as const;
