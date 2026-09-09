/**
 * Status do distribuidor credenciado.
 */
export type DistributorStatus = 'active' | 'in-review' | 'inactive';

/**
 * Interface principal de Distribuidor da Nutri Açaí.
 */
export interface Distributor {
  id: string;
  name: string; // Nome fantasia ou razão social
  state: string; // Sigla UF (ex: 'RS', 'SC', 'PR', 'SP')
  city: string; // Nome da cidade
  coverageRegions?: string[]; // Bairros ou macrorregiões atendidas
  phone?: string;
  whatsapp?: string; // Número somente se autorizado expressamente
  address?: string; // Endereço físico comercial somente quando autorizado
  email?: string;
  servedCategories?: ('food-service' | 'varejo' | 'nutrinho')[];
  status: DistributorStatus;
  notes?: string; // Observações operacionais internas
  isOfficialPartner: boolean; // False para MOCKs, True somente para registros oficiais homologados
  isMock?: boolean; // Flag obrigatória para identificar registros sintéticos de teste
}

/**
 * Interface completa para a candidatura de novo distribuidor B2B.
 */
export interface NewDistributorApplication {
  // Dados do Contato
  fullName: string;
  companyName: string;
  cnpj?: string;
  email: string;
  phone: string;

  // Localização
  state: string;
  city: string;
  targetRegion?: string;

  // Perfil Comercial
  businessType: string; // Ex: 'Distribuidora', 'Atacado', 'Representação Comercial', 'Outro'
  distributionExperience: string; // Ex: 'Menos de 1 ano', '1 a 3 anos', 'Mais de 3 anos'
  targetChannels: string[]; // Ex: ['Food Service', 'Varejo / Mercados', 'Lojas de Conveniência']

  // Estrutura
  hasColdStorage: 'sim' | 'nao' | 'em-planejamento';
  hasRefrigeratedFleet: 'sim' | 'nao' | 'terceirizada';
  commercialStructure?: string;

  // Mensagem e LGPD
  message?: string;
  consentLgpd: boolean;
}
