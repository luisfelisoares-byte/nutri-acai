/* ==========================================================================
   NUTRI AÇAÍ — BASE DE DISTRIBUIDORES HOMOLOGADOS
   Fonte de Verdade: docs/10-BACKLOG-E-PENDENCIAS.md (Item 1)
   Status Atual: Em processo de homologação oficial pela diretoria da empresa.
   REGRA ANTI-DELÍRIO: Zero registros fictícios. Array vazio estruturado.
   ========================================================================== */

import { Distributor } from '../types';

/**
 * Relação oficial de distribuidores autorizados.
 * Permanece vazia aguardando homologação oficial pela diretoria da empresa.
 */
export const OFFICIAL_DISTRIBUTORS: Distributor[] = [];

/**
 * 6 Cards Demonstrativos para a seção "Nossos Distribuidores Parceiros" (ETAPA 16.1).
 * REGRA CRÍTICA: Cadastros puramente demonstrativos, sem empresas reais ou contatos falsos.
 */
export const DEMO_PARTNERS: Distributor[] = [
  {
    id: 'demo-partner-01',
    name: 'Parceiro Demonstrativo 01',
    state: 'RS',
    city: 'Cidade Demonstrativa',
    region: 'Sul',
    description: 'Distribuidor parceiro demonstrativo com estoque e pronta entrega regional.',
    active: true,
    isPlaceholder: true
  },
  {
    id: 'demo-partner-02',
    name: 'Parceiro Demonstrativo 02',
    state: 'SC',
    city: 'Cidade Demonstrativa',
    region: 'Sul',
    description: 'Operação parceira demonstrativa com frota dedicada e suporte a pontos de venda.',
    active: true,
    isPlaceholder: true
  },
  {
    id: 'demo-partner-03',
    name: 'Parceiro Demonstrativo 03',
    state: 'PR',
    city: 'Cidade Demonstrativa',
    region: 'Sul',
    description: 'Atendimento comercial demonstrativo para atacado, food service e açaiterias.',
    active: true,
    isPlaceholder: true
  },
  {
    id: 'demo-partner-04',
    name: 'Parceiro Demonstrativo 04',
    state: 'SP',
    city: 'Cidade Demonstrativa',
    region: 'Sudeste',
    description: 'Hub de distribuição demonstrativo para grandes redes e estabelecimentos locais.',
    active: true,
    isPlaceholder: true
  },
  {
    id: 'demo-partner-05',
    name: 'Parceiro Demonstrativo 05',
    state: 'MG',
    city: 'Cidade Demonstrativa',
    region: 'Sudeste',
    description: 'Parceria de distribuição demonstrativa com padrão rigoroso de conservação.',
    active: true,
    isPlaceholder: true
  },
  {
    id: 'demo-partner-06',
    name: 'Parceiro Demonstrativo 06',
    state: 'RJ',
    city: 'Cidade Demonstrativa',
    region: 'Sudeste',
    description: 'Estrutura logística demonstrativa para abastecimento contínuo de varejo e food service.',
    active: true,
    isPlaceholder: true
  }
];

/**
 * 6 Cards Demonstrativos para apresentação visual ao cliente (ETAPA 15).
 * REGRA CRÍTICA: Cadastros puramente demonstrativos, sem empresas reais ou contatos falsos.
 */
export const DEMO_DISTRIBUTORS: Distributor[] = [
  {
    id: 'demo-dist-01',
    name: 'Distribuidor Exemplo 01',
    state: 'RS',
    city: 'Cidade Demonstrativa',
    region: 'Sul',
    description: 'Atendimento regional demonstrativo para food service e pontos de venda.',
    active: true,
    isPlaceholder: true
  },
  {
    id: 'demo-dist-02',
    name: 'Distribuidor Exemplo 02',
    state: 'SC',
    city: 'Cidade Demonstrativa',
    region: 'Sul',
    description: 'Distribuição demonstrativa de açaí, sorbets e derivativos industriais.',
    active: true,
    isPlaceholder: true
  },
  {
    id: 'demo-dist-03',
    name: 'Distribuidor Exemplo 03',
    state: 'PR',
    city: 'Cidade Demonstrativa',
    region: 'Sul',
    description: 'Abastecimento em atacado demonstrativo para açaiterias e sorveterias.',
    active: true,
    isPlaceholder: true
  },
  {
    id: 'demo-dist-04',
    name: 'Distribuidor Exemplo 04',
    state: 'SP',
    city: 'Cidade Demonstrativa',
    region: 'Sudeste',
    description: 'Logística integrada demonstrativa para redes de varejo e food service.',
    active: true,
    isPlaceholder: true
  },
  {
    id: 'demo-dist-05',
    name: 'Distribuidor Exemplo 05',
    state: 'MG',
    city: 'Cidade Demonstrativa',
    region: 'Sudeste',
    description: 'Parceria de fornecimento demonstrativo com padrão de qualidade e cadeia fria.',
    active: true,
    isPlaceholder: true
  },
  {
    id: 'demo-dist-06',
    name: 'Distribuidor Exemplo 06',
    state: 'RJ',
    city: 'Cidade Demonstrativa',
    region: 'Sudeste',
    description: 'Estrutura comercial demonstrativa para distribuição e pronta entrega.',
    active: true,
    isPlaceholder: true
  }
];

/**
 * Regiões brasileiras para arquitetura de filtro
 */
export const BRAZIL_REGIONS = [
  'Todas as Regiões',
  'Sul',
  'Sudeste',
  'Centro-Oeste',
  'Nordeste',
  'Norte'
] as const;
