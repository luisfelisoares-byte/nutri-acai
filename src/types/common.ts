/**
 * Itens de navegação global.
 */
export interface NavItem {
  label: string;
  href: string;
  isExternal?: boolean;
  isButton?: boolean;
  children?: NavItem[];
}

/**
 * Indicadores estatísticos/badges da indústria.
 */
export interface StatBadge {
  value: string;
  label: string;
  detail?: string;
}
