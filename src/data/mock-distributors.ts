import { Distributor } from '@/types/distributor';

/**
 * ============================================================================
 * BASE DE DADOS: MOCK DE TESTES — DISTRIBUIDORES
 * ============================================================================
 * AVISO CRÍTICO DE CONFORMIDADE E AUDITORIA (BLOCO 5):
 * 
 * 1. A planilha oficial de distribuidores da Nutri Açaí ainda NÃO foi fornecida.
 * 2. Os registros abaixo são 100% SINTÉTICOS E FICTÍCIOS, criados exclusivamente
 *    para viabilizar os testes técnicos de UX, filtros por UF e Cidade.
 * 3. NENHUM registro possui 'isOfficialPartner: true'.
 * 4. NENHUM telefone ou WhatsApp real ou inventado para parecer real foi inserido.
 * 5. Todos os registros possuem 'isMock: true'.
 * 6. Esta base será substituída integralmente pela planilha oficial homologada.
 * ============================================================================
 */
export const mockDistributorsForTesting: Distributor[] = [
  {
    id: 'mock-dist-01',
    name: 'Distribuidora Parceira Porto Alegre',
    state: 'RS',
    city: 'Porto Alegre',
    coverageRegions: ['Região Metropolitana de Porto Alegre', 'Grande Porto Alegre'],
    address: 'Polo Logístico — Porto Alegre / RS',
    servedCategories: ['food-service', 'varejo', 'nutrinho'],
    status: 'active',
    isOfficialPartner: false,
    isMock: true,
    notes: 'Registro regional para consulta no estado do Rio Grande do Sul.',
  },
  {
    id: 'mock-dist-02',
    name: 'Distribuidora Parceira Vale dos Sinos',
    state: 'RS',
    city: 'Gravataí',
    coverageRegions: ['Gravataí', 'Cachoeirinha', 'Alvorada'],
    address: 'Distrito Logístico — Gravataí / RS',
    servedCategories: ['food-service', 'varejo'],
    status: 'active',
    isOfficialPartner: false,
    isMock: true,
    notes: 'Registro regional na cidade-sede da fábrica.',
  },
  {
    id: 'mock-dist-03',
    name: 'Distribuidora Parceira Litoral Catarinense',
    state: 'SC',
    city: 'Florianópolis',
    coverageRegions: ['Grande Florianópolis', 'São José', 'Palhoça'],
    address: 'Polo Logístico — Florianópolis / SC',
    servedCategories: ['food-service', 'nutrinho'],
    status: 'active',
    isOfficialPartner: false,
    isMock: true,
    notes: 'Registro regional para consulta em Santa Catarina.',
  },
  {
    id: 'mock-dist-04',
    name: 'Distribuidora Parceira Curitiba & Região',
    state: 'PR',
    city: 'Curitiba',
    coverageRegions: ['Curitiba', 'São José dos Pinhais'],
    address: 'Polo Logístico — Curitiba / PR',
    servedCategories: ['varejo', 'nutrinho'],
    status: 'active',
    isOfficialPartner: false,
    isMock: true,
    notes: 'Registro regional para consulta no Paraná.',
  },
];
