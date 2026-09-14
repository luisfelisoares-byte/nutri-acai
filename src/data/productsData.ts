/* ==========================================================================
   NUTRI AÇAÍ — CATÁLOGO OFICIAL DE PRODUTOS
   Fonte Oficial: catalogo/Catálogo Produtos Nutri Açai (1).pdf
   e docs/03-CONTEUDO-E-CONTATOS.md (Seção 7)
   ========================================================================== */

import { Product } from '../types';

export const OFFICIAL_PRODUCTS: Product[] = [
  /* ==========================================================================
     1. LINHA FOOD SERVICE (Caixas 5L / 10L e Baldes 3,6L / 12L)
     ========================================================================== */
  {
    id: 'fs-creme-leitinho-5l',
    name: 'Creme de Leitinho',
    line: 'food-service',
    category: 'cremes-sorbets',
    volume: 'Caixa 5 Litros',
    image: '/assets/images/produtos/food-service/creme-leitinho-5l.png',
    features: ['Linha Cremes e Sorbets', 'Caixa 5 Litros']
  },
  {
    id: 'fs-creme-cupuacu-5l',
    name: 'Creme de Cupuaçu',
    line: 'food-service',
    category: 'cremes-sorbets',
    volume: 'Caixa 5 Litros',
    image: '/assets/images/produtos/food-service/creme-cupuacu-5l.png',
    features: ['Linha Cremes e Sorbets', 'Caixa 5 Litros']
  },
  {
    id: 'fs-sorbet-pitaya-5l',
    name: 'Sorbet de Pitaya',
    line: 'food-service',
    category: 'cremes-sorbets',
    volume: 'Caixa 5 Litros',
    image: '/assets/images/produtos/food-service/sorbet-pitaya-5l.png',
    features: ['Linha Cremes e Sorbets', 'Caixa 5 Litros']
  },
  {
    id: 'fs-acai-guarana-5l',
    name: 'Açaí com Guaraná',
    line: 'food-service',
    category: 'acai',
    volume: 'Caixa 5 Litros',
    image: '/assets/images/produtos/food-service/acai-guarana-5l.png',
    features: ['Linha Açaí', 'Caixa 5 Litros']
  },
  {
    id: 'fs-acai-natural-5l',
    name: 'Açaí Natural',
    line: 'food-service',
    category: 'acai',
    volume: 'Caixa 5 Litros',
    image: '/assets/images/produtos/food-service/acai-natural-5l.png',
    features: ['Linha Açaí', 'Caixa 5 Litros']
  },
  {
    id: 'fs-acai-banana-5l',
    name: 'Açaí com Banana',
    line: 'food-service',
    category: 'acai',
    volume: 'Caixa 5 Litros',
    image: '/assets/images/produtos/food-service/acai-banana-5l.png',
    features: ['Linha Açaí', 'Caixa 5 Litros']
  },
  {
    id: 'fs-acai-morango-5l',
    name: 'Açaí com Morango',
    line: 'food-service',
    category: 'acai',
    volume: 'Caixa 5 Litros',
    image: '/assets/images/produtos/food-service/acai-morango-5l.png',
    features: ['Linha Açaí', 'Caixa 5 Litros']
  },
  {
    id: 'fs-acai-zero-5l',
    name: 'Açaí Zero Açúcar',
    line: 'food-service',
    category: 'acai',
    volume: 'Caixa 5 Litros',
    image: '/assets/images/produtos/food-service/acai-zero-5l.png',
    features: ['Linha Açaí', 'Caixa 5 Litros', 'Zero Açúcar'],
    isZeroSugar: true
  },
  {
    id: 'fs-acai-guarana-10l',
    name: 'Açaí com Guaraná',
    line: 'food-service',
    category: 'acai',
    volume: 'Caixa 10 Litros',
    image: '/assets/images/produtos/food-service/acai-guarana-10l.png',
    features: ['Linha Açaí', 'Caixa 10 Litros']
  },
  {
    id: 'fs-creme-leitinho-balde',
    name: 'Creme de Leitinho',
    line: 'food-service',
    category: 'cremes-sorbets',
    volume: 'Linha Balde',
    image: '/assets/images/produtos/food-service/creme-leitinho-balde.png',
    features: ['Linha Balde']
  },
  {
    id: 'fs-acai-guarana-balde-12l',
    name: 'Açaí com Guaraná 12L',
    line: 'food-service',
    category: 'acai',
    volume: 'Balde 12 Litros',
    image: '/assets/images/produtos/food-service/acai-balde-12l.png',
    features: ['Linha Balde', '12 Litros']
  },
  {
    id: 'fs-acai-guarana-balde-36l',
    name: 'Açaí com Guaraná 3,6L',
    line: 'food-service',
    category: 'acai',
    volume: 'Balde 3,6 Litros',
    image: '/assets/images/produtos/food-service/acai-balde-12l.png',
    features: ['Linha Balde', '3,6 Litros']
  },
  {
    id: 'fs-frozen-morango-5l',
    name: 'Frozen de Morango',
    line: 'food-service',
    category: 'frozen',
    volume: 'Caixa 5 Litros',
    image: '/assets/images/produtos/food-service/frozen-morango-5l.png',
    features: ['Linha Frozen', 'Caixa 5 Litros']
  },
  {
    id: 'fs-frozen-natural-5l',
    name: 'Frozen Natural',
    line: 'food-service',
    category: 'frozen',
    volume: 'Caixa 5 Litros',
    image: '/assets/images/produtos/food-service/frozen-natural-5l.png',
    features: ['Linha Frozen', 'Caixa 5 Litros']
  },

  /* ==========================================================================
     2. LINHA VAREJO (Potes 1,5 Litros)
     ========================================================================== */
  {
    id: 'vr-acai-natural-15l',
    name: 'Açaí Natural',
    line: 'varejo',
    category: 'acai',
    volume: 'Pote 1,5 Litros',
    image: '/assets/images/produtos/varejo/acai-natural-15l.png',
    features: ['Linha Açaí', 'Pote 1,5 Litros']
  },
  {
    id: 'vr-acai-trufado-leitinho-15l',
    name: 'Açaí Trufado Leitinho',
    line: 'varejo',
    category: 'acai',
    volume: 'Pote 1,5 Litros',
    image: '/assets/images/produtos/varejo/acai-trufado-leitinho-15l.png',
    features: ['Linha Açaí', 'Trufado', 'Pote 1,5 Litros']
  },
  {
    id: 'vr-acai-trufado-avela-15l',
    name: 'Açaí Trufado Avelã',
    line: 'varejo',
    category: 'acai',
    volume: 'Pote 1,5 Litros',
    image: '/assets/images/produtos/varejo/acai-trufado-avela-15l.png',
    features: ['Linha Açaí', 'Trufado', 'Pote 1,5 Litros']
  },
  {
    id: 'vr-acai-zero-15l',
    name: 'Açaí Zero Açúcar',
    line: 'varejo',
    category: 'acai',
    volume: 'Pote 1,5 Litros',
    image: '/assets/images/produtos/varejo/acai-zero-15l.png',
    features: ['Linha Açaí', 'Pote 1,5 Litros', 'Zero Açúcar'],
    isZeroSugar: true
  },
  {
    id: 'vr-acai-morango-15l',
    name: 'Açaí com Morango',
    line: 'varejo',
    category: 'acai',
    volume: 'Pote 1,5 Litros',
    image: '/assets/images/produtos/varejo/acai-morango-15l.png',
    features: ['Linha Açaí', 'Pote 1,5 Litros']
  },
  {
    id: 'vr-acai-banana-15l',
    name: 'Açaí com Banana',
    line: 'varejo',
    category: 'acai',
    volume: 'Pote 1,5 Litros',
    image: '/assets/images/produtos/varejo/acai-banana-15l.png',
    features: ['Linha Açaí', 'Pote 1,5 Litros']
  },
  {
    id: 'vr-acai-guarana-15l',
    name: 'Açaí com Guaraná',
    line: 'varejo',
    category: 'acai',
    volume: 'Pote 1,5 Litros',
    image: '/assets/images/produtos/varejo/acai-guarana-15l.png',
    features: ['Linha Açaí', 'Pote 1,5 Litros']
  },
  {
    id: 'vr-creme-cupuacu-15l',
    name: 'Creme de Cupuaçu',
    line: 'varejo',
    category: 'cremes-sorbets',
    volume: 'Pote 1,5 Litros',
    image: '/assets/images/produtos/varejo/creme-cupuacu-15l.png',
    features: ['Linha Cremes e Sorbets', 'Pote 1,5 Litros']
  },
  {
    id: 'vr-sorbet-pitaya-15l',
    name: 'Sorbet de Pitaya',
    line: 'varejo',
    category: 'cremes-sorbets',
    volume: 'Pote 1,5 Litros',
    image: '/assets/images/produtos/varejo/sorbet-pitaya-15l.png',
    features: ['Linha Cremes e Sorbets', 'Pote 1,5 Litros']
  },
  {
    id: 'vr-frozen-natural-15l',
    name: 'Frozen Natural',
    line: 'varejo',
    category: 'frozen',
    volume: 'Pote 1,5 Litros',
    image: '/assets/images/produtos/varejo/frozen-natural-15l.png',
    features: ['Linha Frozen', 'Pote 1,5 Litros']
  },
  {
    id: 'vr-frozen-morango-15l',
    name: 'Frozen Morango',
    line: 'varejo',
    category: 'frozen',
    volume: 'Pote 1,5 Litros',
    image: '/assets/images/produtos/varejo/frozen-morango-15l.png',
    features: ['Linha Frozen', 'Pote 1,5 Litros']
  },

  /* ==========================================================================
     3. LINHA NUTRINHO (Copos 220ml com Sobretampa e Copos 200ml)
     ========================================================================== */
  {
    id: 'nt-acai-guarana-220ml',
    name: 'Açaí com Guaraná',
    line: 'nutrinho',
    category: 'acai',
    volume: 'Copo 220ml',
    image: '/assets/images/produtos/nutrinho/acai-guarana-220ml.png',
    features: ['Paçoca ou Leite em Pó na tampa', 'Copo 220ml']
  },
  {
    id: 'nt-acai-morango-220ml',
    name: 'Açaí com Morango',
    line: 'nutrinho',
    category: 'acai',
    volume: 'Copo 220ml',
    image: '/assets/images/produtos/nutrinho/acai-morango-220ml.png',
    features: ['Paçoca ou Leite em Pó na tampa', 'Copo 220ml']
  },
  {
    id: 'nt-acai-banana-220ml',
    name: 'Açaí com Banana',
    line: 'nutrinho',
    category: 'acai',
    volume: 'Copo 220ml',
    image: '/assets/images/produtos/nutrinho/acai-banana-220ml.png',
    features: ['Paçoca ou Leite em Pó na tampa', 'Copo 220ml']
  },
  {
    id: 'nt-acai-trufado-leitinho-220ml',
    name: 'Açaí Trufado Leitinho',
    line: 'nutrinho',
    category: 'acai',
    volume: 'Copo 220ml',
    image: '/assets/images/produtos/nutrinho/acai-trufado-leitinho-220ml.png',
    features: ['Trufado', 'Paçoca ou Leite em Pó na tampa', 'Copo 220ml']
  },
  {
    id: 'nt-acai-trufado-avela-220ml',
    name: 'Açaí Trufado Avelã',
    line: 'nutrinho',
    category: 'acai',
    volume: 'Copo 220ml',
    image: '/assets/images/produtos/nutrinho/acai-trufado-avela-220ml.png',
    features: ['Trufado', 'Paçoca ou Leite em Pó na tampa', 'Copo 220ml']
  },
  {
    id: 'nt-acai-cupuacu-220ml',
    name: 'Açaí com Cupuaçu',
    line: 'nutrinho',
    category: 'acai',
    volume: 'Copo 220ml',
    image: '/assets/images/produtos/nutrinho/acai-cupuacu-220ml.png',
    features: ['Paçoca ou Leite em Pó na tampa', 'Copo 220ml']
  },
  {
    id: 'nt-acai-frozen-220ml',
    name: 'Açaí com Frozen Natural',
    line: 'nutrinho',
    category: 'acai',
    volume: 'Copo 220ml',
    image: '/assets/images/produtos/nutrinho/acai-frozen-220ml.png',
    features: ['Paçoca ou Leite em Pó na tampa', 'Copo 220ml']
  },
  {
    id: 'nt-acai-zero-200ml',
    name: 'Açaí Zero Açúcar',
    line: 'nutrinho',
    category: 'acai',
    volume: 'Copo 200ml',
    image: '/assets/images/produtos/nutrinho/acai-zero-200ml.png',
    features: ['Zero Açúcar', 'Copo 200ml'],
    isZeroSugar: true
  },
  {
    id: 'nt-sorbet-pitaya-200ml',
    name: 'Sorbet de Pitaya',
    line: 'nutrinho',
    category: 'cremes-sorbets',
    volume: 'Copo 200ml',
    image: '/assets/images/produtos/nutrinho/sorbet-pitaya-200ml.png',
    features: ['Linha Cremes e Sorbets', 'Copo 200ml']
  },
  {
    id: 'nt-creme-cupuacu-200ml',
    name: 'Creme de Cupuaçu',
    line: 'nutrinho',
    category: 'cremes-sorbets',
    volume: 'Copo 200ml',
    image: '/assets/images/produtos/nutrinho/creme-cupuacu-200ml.png',
    features: ['Linha Cremes e Sorbets', 'Copo 200ml']
  }
];

export interface LineFilterOption {
  id: 'todas' | 'food-service' | 'varejo' | 'nutrinho';
  label: string;
  badgeText: string;
  accentColor: string;
}

export const PRODUCT_LINE_OPTIONS: LineFilterOption[] = [
  {
    id: 'todas',
    label: 'Todas as Linhas',
    badgeText: 'Mix Completo',
    accentColor: 'var(--color-purple-primary)'
  },
  {
    id: 'food-service',
    label: 'Food Service',
    badgeText: '5 a 12 Litros',
    accentColor: 'var(--line-food-service)'
  },
  {
    id: 'varejo',
    label: 'Varejo',
    badgeText: 'Potes 1,5 Litros',
    accentColor: 'var(--line-varejo)'
  },
  {
    id: 'nutrinho',
    label: 'Nutrinho',
    badgeText: 'Copos 200ml e 220ml',
    accentColor: 'var(--line-nutrinho)'
  }
];
