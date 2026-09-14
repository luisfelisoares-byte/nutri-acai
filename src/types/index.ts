/* ==========================================================================
   NUTRI AÇAÍ — TIPOS TYPESCRIPT DA PLATAFORMA
   ========================================================================== */

export type ProductLine = 'food-service' | 'varejo' | 'nutrinho';

export type ProductCategory = 'acai' | 'cremes-sorbets' | 'frozen';

export interface Product {
  id: string;
  name: string;
  line: ProductLine;
  category: ProductCategory;
  volume: string;
  description?: string;
  image: string;
  flavours?: string[];
  features?: string[];
  isZeroSugar?: boolean;
}

export interface Distributor {
  id: string;
  name: string;
  state: string;
  city: string;
  region: 'Sul' | 'Sudeste' | 'Centro-Oeste' | 'Norte' | 'Nordeste';
  whatsapp?: string;
  catalogWhatsappUrl?: string;
  catalogPdfUrl?: string;
  googleMapsUrl?: string;
  description?: string;
  logo?: string;
  website?: string;
  instagram?: string;
  active?: boolean;
  isPlaceholder?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  company: string;
  city?: string;
  text: string;
  avatarUrl?: string;
  isPlaceholder?: boolean;
}

export interface BrandDifferential {
  id: string;
  title: string;
  description: string;
  iconName: string;
  accentColor: string;
}

export interface DistributorFormData {
  name: string;
  company: string;
  whatsapp: string;
  email: string;
  state: string;
  city: string;
  targetRegion: string;
  alreadyDistributes: 'Sim' | 'Não';
  segment: string;
  message?: string;
}

export interface ContactInfo {
  salesPhone: string;
  salesWhatsAppUrl: string;
  commercialPhone: string;
  commercialWhatsAppUrl: string;
  rhPhone: string;
  rhWhatsAppUrl: string;
  catalogUrl: string;
  instagramUrl: string;
  facebookUrl: string;
  address: {
    street: string;
    neighborhood: string;
    city: string;
    state: string;
    zipCode: string;
    googleMapsUrl: string;
  };
  openingHours: {
    weekdays: string;
    saturday: string;
    sunday: string;
  };
}
