export type ProductPreview = {
  id: string;
  name: string;
  volume: string;
  category: string;
  approvedAssetId: null;
};

// Recorte editorial da Home. Não representa implementação do catálogo completo.
// Fonte: Dossiê Oficial V3, seção 5. Mídias seguem pendentes.
export const featuredProducts: readonly ProductPreview[] = [
  { id: "acai-natural-1-5l", name: "Açaí Natural", volume: "1,5 L", category: "Tradicionais", approvedAssetId: null },
  { id: "acai-banana-1-5l", name: "Açaí com Banana", volume: "1,5 L", category: "Frutados", approvedAssetId: null },
  { id: "acai-zero-acucar-200ml", name: "Açaí Zero Açúcar", volume: "200 ml", category: "Linha Zero Açúcar", approvedAssetId: null },
];

export const lines = [
  { name: "Tradicionais", detail: "Açaí Natural e com Guaraná", tone: "purple" },
  { name: "Frutados", detail: "Açaí com Morango e com Banana", tone: "rose" },
  { name: "Frozen", detail: "Frozen Natural e Morango", tone: "cream" },
  { name: "Cremes", detail: "Creme de Cupuaçu e Creme de Leitinho", tone: "cream" },
  { name: "Trufados", detail: "Açaí Trufado Leitinho e Avelã", tone: "cocoa" },
  { name: "Linha Zero Açúcar", detail: "Açaí Zero Açúcar", tone: "green" },
] as const;
