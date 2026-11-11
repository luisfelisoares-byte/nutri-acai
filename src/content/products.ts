import type { ProductPreview } from "./home";

// Fonte: Dossiê Oficial V3, seção 5; categorias atualizadas por confirmação do responsável via usuário em 17/10/2026. Sem inferência de pesos ou aprovação de mídia.
export type Product = ProductPreview & { packaging: string; weight: string | null };

// Classificação comercial confirmada pelo responsável em 17/10/2026.
// Nomenclatura Linha Zero Açúcar autorizada pelo usuário; dados individuais preservados.
export const productCategories = [
  { name: "Tradicionais", tone: "purple" },
  { name: "Frutados", tone: "rose" },
  { name: "Frozen", tone: "cream" },
  { name: "Cremes", tone: "cream" },
  { name: "Trufados", tone: "cocoa" },
  { name: "Linha Zero Açúcar", tone: "green" },
] as const;

export function volumeInMilliliters(volume: string): number {
  const match = /^(\d+(?:,\d+)?)\s*(ml|L)$/.exec(volume);
  if (!match) throw new Error(`Volume não reconhecido: ${volume}`);
  return Number(match[1].replace(",", ".")) * (match[2] === "L" ? 1000 : 1);
}

export const products: readonly Product[] = [
  {
    "id": "acai-natural-1-5l",
    "name": "Açaí Natural",
    "volume": "1,5 L",
    "category": "Tradicionais",
    "packaging": "Pote familiar / consumo doméstico",
    "weight": null,
    "approvedAssetId": null
  },
  {
    "id": "acai-natural-5l",
    "name": "Açaí Natural",
    "volume": "5 L",
    "category": "Tradicionais",
    "packaging": "Caixa Food Service",
    "weight": "4,7 kg",
    "approvedAssetId": null
  },
  {
    "id": "acai-guarana-220ml",
    "name": "Açaí com Guaraná",
    "volume": "220 ml",
    "category": "Tradicionais",
    "packaging": "Copo individual com sobretampa; acompanha leite em pó na tampa",
    "weight": null,
    "approvedAssetId": null
  },
  {
    "id": "acai-guarana-1-5l",
    "name": "Açaí com Guaraná",
    "volume": "1,5 L",
    "category": "Tradicionais",
    "packaging": "Pote familiar / consumo doméstico",
    "weight": null,
    "approvedAssetId": null
  },
  {
    "id": "acai-guarana-5l",
    "name": "Açaí com Guaraná",
    "volume": "5 L",
    "category": "Tradicionais",
    "packaging": "Caixa Food Service",
    "weight": "4,7 kg",
    "approvedAssetId": null
  },
  {
    "id": "acai-guarana-3-6l",
    "name": "Açaí com Guaraná",
    "volume": "3,6 L",
    "category": "Tradicionais",
    "packaging": "Balde Food Service com alça",
    "weight": "3,4 kg",
    "approvedAssetId": null
  },
  {
    "id": "acai-guarana-10l",
    "name": "Açaí com Guaraná",
    "volume": "10 L",
    "category": "Tradicionais",
    "packaging": "Caixa Food Service",
    "weight": "9,4 kg",
    "approvedAssetId": null
  },
  {
    "id": "acai-guarana-12l",
    "name": "Açaí com Guaraná",
    "volume": "12 L",
    "category": "Tradicionais",
    "packaging": "Balde industrial / Food Service Master",
    "weight": "11,2 kg",
    "approvedAssetId": null
  },
  {
    "id": "creme-de-cupuacu-5l",
    "name": "Creme de Cupuaçu",
    "volume": "5 L",
    "category": "Cremes",
    "packaging": "Caixa Food Service",
    "weight": "4 kg",
    "approvedAssetId": null
  },
  {
    "id": "acai-morango-220ml",
    "name": "Açaí com Morango",
    "volume": "220 ml",
    "category": "Frutados",
    "packaging": "Copo individual com sobretampa; acompanha leite em pó na tampa",
    "weight": null,
    "approvedAssetId": null
  },
  {
    "id": "acai-morango-1-5l",
    "name": "Açaí com Morango",
    "volume": "1,5 L",
    "category": "Frutados",
    "packaging": "Pote familiar / consumo doméstico",
    "weight": null,
    "approvedAssetId": null
  },
  {
    "id": "acai-morango-5l",
    "name": "Açaí com Morango",
    "volume": "5 L",
    "category": "Frutados",
    "packaging": "Caixa Food Service",
    "weight": null,
    "approvedAssetId": null
  },
  {
    "id": "acai-banana-220ml",
    "name": "Açaí com Banana",
    "volume": "220 ml",
    "category": "Frutados",
    "packaging": "Copo individual com sobretampa; acompanha leite em pó na tampa",
    "weight": null,
    "approvedAssetId": null
  },
  {
    "id": "acai-banana-1-5l",
    "name": "Açaí com Banana",
    "volume": "1,5 L",
    "category": "Frutados",
    "packaging": "Pote familiar / consumo doméstico",
    "weight": null,
    "approvedAssetId": null
  },
  {
    "id": "acai-banana-5l",
    "name": "Açaí com Banana",
    "volume": "5 L",
    "category": "Frutados",
    "packaging": "Caixa Food Service",
    "weight": "4,7 kg",
    "approvedAssetId": null
  },
  {
    "id": "frozen-natural-5l",
    "name": "Frozen Natural",
    "volume": "5 L",
    "category": "Frozen",
    "packaging": "Caixa Soft Express / Food Service",
    "weight": null,
    "approvedAssetId": null
  },
  {
    "id": "frozen-morango-5l",
    "name": "Frozen Morango",
    "volume": "5 L",
    "category": "Frozen",
    "packaging": "Caixa Soft Express / Food Service",
    "weight": null,
    "approvedAssetId": null
  },
  {
    "id": "creme-de-leitinho-5l",
    "name": "Creme de Leitinho",
    "volume": "5 L",
    "category": "Cremes",
    "packaging": "Caixa Food Service",
    "weight": "4 kg",
    "approvedAssetId": null
  },
  {
    "id": "acai-trufado-leitinho-220ml",
    "name": "Açaí Trufado Leitinho",
    "volume": "220 ml",
    "category": "Trufados",
    "packaging": "Copo individual com sobretampa; acompanha leite em pó na sobretampa",
    "weight": null,
    "approvedAssetId": null
  },
  {
    "id": "acai-trufado-leitinho-1-5l",
    "name": "Açaí Trufado Leitinho",
    "volume": "1,5 L",
    "category": "Trufados",
    "packaging": "Pote familiar / consumo doméstico",
    "weight": "1,3 kg",
    "approvedAssetId": null
  },
  {
    "id": "acai-trufado-avela-220ml",
    "name": "Açaí Trufado Avelã",
    "volume": "220 ml",
    "category": "Trufados",
    "packaging": "Copo individual com sobretampa; acompanha leite em pó na sobretampa",
    "weight": null,
    "approvedAssetId": null
  },
  {
    "id": "acai-trufado-avela-1-5l",
    "name": "Açaí Trufado Avelã",
    "volume": "1,5 L",
    "category": "Trufados",
    "packaging": "Pote familiar / consumo doméstico",
    "weight": "1,3 kg",
    "approvedAssetId": null
  },
  {
    "id": "acai-zero-acucar-200ml",
    "name": "Açaí Zero Açúcar",
    "volume": "200 ml",
    "category": "Linha Zero Açúcar",
    "packaging": "Copo individual / porção individual",
    "weight": null,
    "approvedAssetId": null
  },
  {
    "id": "acai-zero-acucar-1-5l",
    "name": "Açaí Zero Açúcar",
    "volume": "1,5 L",
    "category": "Linha Zero Açúcar",
    "packaging": "Pote familiar / consumo doméstico",
    "weight": null,
    "approvedAssetId": null
  },
  {
    "id": "acai-zero-acucar-5l",
    "name": "Açaí Zero Açúcar",
    "volume": "5 L",
    "category": "Linha Zero Açúcar",
    "packaging": "Caixa Food Service",
    "weight": "4,7 kg",
    "approvedAssetId": null
  }
];
