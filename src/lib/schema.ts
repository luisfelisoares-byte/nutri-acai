import { Product } from '@/types/product';

export const SITE_URL = 'https://nutriacai.com.br';
export const OFFICIAL_PHONE_E164 = '+5551994281252';
export const OFFICIAL_INSTAGRAM = 'https://www.instagram.com/nutriacaioficial';

/**
 * Schema.org: Organization (Global)
 * Utiliza estritamente dados oficiais confirmados: Gravataí/RS, WhatsApp comercial e Instagram oficial.
 */
export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: 'Nutri Açaí',
    alternateName: 'Nutri Açaí Indústria de Alimentos',
    url: SITE_URL,
    logo: `${SITE_URL}/images/brand/logo-nutri-acai.png`,
    image: `${SITE_URL}/images/brand/og-banner-1200x630.jpg`,
    description: 'Indústria fabricante de açaí, cremes, sorbets e frozens sediada em Gravataí/RS.',
    telephone: OFFICIAL_PHONE_E164,
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: OFFICIAL_PHONE_E164,
        contactType: 'sales',
        areaServed: 'BR',
        availableLanguage: ['Portuguese'],
      },
    ],
    sameAs: [OFFICIAL_INSTAGRAM],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Gravataí',
      addressRegion: 'RS',
      addressCountry: 'BR',
    },
  };
}

/**
 * Schema.org: WebSite (Global)
 * Não inclui SearchAction por inexistência de busca global no site.
 */
export function getWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: SITE_URL,
    name: 'Nutri Açaí',
    description: 'Indústria fabricante de açaí, cremes, sorbets e frozens sediada em Gravataí/RS.',
    publisher: {
      '@id': `${SITE_URL}/#organization`,
    },
    inLanguage: 'pt-BR',
  };
}

/**
 * Schema.org: WebPage
 */
export function getWebPageSchema(url: string, name: string, description: string, type: string = 'WebPage') {
  return {
    '@context': 'https://schema.org',
    '@type': type,
    '@id': `${url}#webpage`,
    url: url,
    name: name,
    description: description,
    isPartOf: {
      '@id': `${SITE_URL}/#website`,
    },
    about: {
      '@id': `${SITE_URL}/#organization`,
    },
    inLanguage: 'pt-BR',
  };
}

/**
 * Schema.org: BreadcrumbList
 */
export function getBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/**
 * Schema.org: ItemList (Catálogo de Produtos em /produtos)
 * Mapeia os 34 produtos reais sem criar URLs falsas ou inventar preços/avaliações.
 */
export function getCatalogItemListSchema(products: Product[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    '@id': `${SITE_URL}/produtos#itemlist`,
    name: 'Catálogo Oficial de Produtos Nutri Açaí',
    description: 'Linhas completas de açaí, cremes, sorbets e frozens para Food Service, Varejo e Linha Nutrinho.',
    numberOfItems: products.length,
    itemListElement: products.map((product, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      item: {
        '@type': 'Product',
        name: product.name,
        description: product.description,
        image: product.image?.src ? `${SITE_URL}${product.image.src}` : undefined,
        category: product.category,
        brand: {
          '@type': 'Brand',
          name: 'Nutri Açaí',
        },
      },
    })),
  };
}
