/**
 * Categorias de canais de atendimento e consumo.
 */
export type ProductCategory = 'food-service' | 'varejo' | 'nutrinho';

/**
 * Linhas de produtos identificadas no catálogo oficial.
 */
export type ProductLine = 
  | 'acai'
  | 'cremes-e-sorbet'
  | 'frozen'
  | 'nutrinho';

/**
 * Tipos de embalagem industrial e de varejo.
 */
export type PackagingType = 
  | 'caixa-5l'
  | 'caixa-10l'
  | 'balde-3-6l'
  | 'balde-12l'
  | 'pote-1-5l'
  | 'pote-200ml'
  | 'pote-220ml';

/**
 * Status de disponibilidade comercial do produto.
 */
export type ProductStatus = 'active' | 'seasonal' | 'coming-soon';

/**
 * Interface principal de Produto da Nutri Açaí.
 */
export interface Product {
  id: string;
  slug: string;
  name: string;
  category: ProductCategory;
  line: ProductLine;
  description: string;
  volume: string; // Ex: '5 L', '10 L', '1,5 L', '220 ml'
  weight?: string; // Ex: '4,7 kg', '4,0 kg', '1,3 kg', '200 g'
  flavors: string[]; // Sabores disponíveis neste SKU
  packaging: PackagingType;
  packagingDisplay: string; // Ex: 'Caixa de 5 Litros', 'Pote Retangular de 1,5 L'
  application: string; // Ex: 'Açaiterias, sorveterias e buffets', 'Gôndola de supermercados'
  image?: {
    src: string;
    alt: string;
  };
  hasTopping?: boolean; // Específico da linha Nutrinho (paçoca ou leite em pó na tampa)
  toppingOptions?: string[]; // Ex: ['Paçoca', 'Leite em Pó']
  status: ProductStatus;
  isFeatured?: boolean;
}
