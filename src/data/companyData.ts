/* ==========================================================================
   NUTRI AÇAÍ — DADOS INSTITUCIONAIS CONFIRMADOS
   Fonte de Verdade: docs/03-CONTEUDO-E-CONTATOS.md & Catálogo Oficial
   ========================================================================== */

import { BrandDifferential, ContactInfo } from '../types';

export const COMPANY_INFO: ContactInfo = {
  salesPhone: '(51) 8962-1635',
  salesWhatsAppUrl: 'https://wa.me/555189621635',
  commercialPhone: '(51) 99428-1252',
  commercialWhatsAppUrl: 'https://wa.me/5551994281252',
  rhPhone: '(51) 99246-5908',
  rhWhatsAppUrl: 'https://wa.me/5551992465908',
  catalogUrl: 'https://wa.me/c/555189621635',
  instagramUrl: 'https://www.instagram.com/nutriacaioficial/',
  facebookUrl: '#facebook-placeholder', // [PLACEHOLDER — informação oficial pendente]
  address: {
    street: 'Rodovia Teixeirinha, 9225/9245/9455',
    neighborhood: 'Itacolomi',
    city: 'Gravataí',
    state: 'RS',
    zipCode: '94242-300',
    googleMapsUrl: 'https://www.google.com/maps/place/29%C2%B052\'51.1%22S+50%C2%B059\'22.5%22W/@-29.8808552,-50.9921473,17z/data=!3m1!4b1!4m4!3m3!8m2!3d-29.8808552!4d-50.9895724?hl=pt-BR'
  },
  openingHours: {
    weekdays: 'Segunda a Sexta: 08h às 18h',
    saturday: 'Sábado: 08h às 15h',
    sunday: 'Domingo: Fechado'
  }
};

export const BRAND_SLOGAN = 'Cremosidade que conquista. Qualidade que surpreende.';

export const BRAND_MISSION = 'Na Nutri Açaí, nossa missão é desenvolver e produzir açaí, sorbets e derivados com padrão industrial de excelência, levando sempre o sabor verdadeiro da fruta e a segurança alimentar que o mercado exige. Atendemos distribuidores, food services e marcas próprias que buscam produtos confiáveis, consistentes e com qualidade diferenciada. Tudo isso feito direto da nossa fábrica gaúcha para todo o Brasil, com dedicação em cada etapa do processo.';

export const BRAND_VISION = 'Nossa visão é sermos referência nacional no fornecimento de açaí para distribuidores, food services e marcas próprias, mostrando que é possível crescer sem abrir mão da qualidade e da confiança.';

export const BRAND_VALUES = [
  {
    title: 'Excelência em cada detalhe',
    description: 'Da seleção da matéria-prima ao pote final.'
  },
  {
    title: 'Compromisso com a qualidade',
    description: 'Sustentado por equipes técnicas e laboratório próprio.'
  },
  {
    title: 'Atendimento humano e transparente',
    description: 'Que valoriza cada cliente como parceiro de longo prazo.'
  },
  {
    title: 'Orgulho de ser uma indústria gaúcha',
    description: 'Feita de raiz, força e autenticidade.'
  }
];

export const BRAND_DIFFERENTIALS: BrandDifferential[] = [
  {
    id: 'diff-1',
    title: 'Produção própria',
    description: 'Controle rigoroso em fábrica gaúcha com laboratório técnico.',
    iconName: 'Factory',
    accentColor: 'var(--color-purple-primary)'
  },
  {
    id: 'diff-2',
    title: 'Frota própria',
    description: 'Agilidade logística e preservação da temperatura até a entrega.',
    iconName: 'Truck',
    accentColor: 'var(--color-green-primary)'
  },
  {
    id: 'diff-3',
    title: 'Atendemos todo o Brasil',
    description: 'Capacidade fabril em larga escala superior a 9 toneladas/dia.',
    iconName: 'Globe2',
    accentColor: 'var(--color-blue-primary)'
  },
  {
    id: 'diff-4',
    title: 'Mix variado',
    description: 'Opções em Food Service, Varejo e copos Nutrinho com sobretampa.',
    iconName: 'Layers',
    accentColor: 'var(--color-orange-primary)'
  },
  {
    id: 'diff-5',
    title: 'Qualidade',
    description: 'Cremosidade sem cristais de gelo e textura premium incomparável.',
    iconName: 'Award',
    accentColor: 'var(--color-yellow-dark)'
  },
  {
    id: 'diff-6',
    title: 'Atendimento personalizado',
    description: 'Canais exclusivos para distribuidores, food service e candidatos.',
    iconName: 'Headphones',
    accentColor: 'var(--color-purple-light)'
  }
];
