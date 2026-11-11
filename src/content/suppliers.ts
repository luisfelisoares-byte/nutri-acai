// Diretório independente da matriz de produtos. Nenhum distribuidor confirmado nesta prévia.
export type Supplier = {
  id: string;
  tradeName: string | null;
  city: string | null;
  state: string | null;
  phone: string | null;
  whatsapp: { url: string; confirmed: boolean } | null;
  servedRegions: readonly string[];
  catalog: { url: string; confirmed: boolean } | null;
  confirmationStatus: "pending" | "confirmed";
  publicationStatus: "demo" | "draft" | "approved";
};

export const supplierGroups: readonly {
  id: string; city: string; state: string; illustrative: boolean; suppliers: readonly Supplier[];
}[] = [{
  id: "exemplo-campo-bom", city: "Campo Bom", state: "RS", illustrative: true,
  suppliers: [{
    id: "exemplo-1", tradeName: null, city: null, state: null,
    phone: null, whatsapp: null, servedRegions: [], catalog: null,
    confirmationStatus: "pending", publicationStatus: "demo",
  }],
}];

export function publishedSupplierGroups(groups = supplierGroups) {
  return groups.filter(group => !group.illustrative && group.city.trim() && group.state.trim()).map(group => ({
    ...group,
    suppliers: group.suppliers.filter(supplier => supplier.confirmationStatus === "confirmed"
      && supplier.publicationStatus === "approved" && supplier.tradeName?.trim()
      && supplier.city === group.city && supplier.state === group.state),
  })).filter(group => group.suppliers.length > 0);
}

// Um endereço preenchido isoladamente não autoriza sua exibição.
export function confirmedSupplierUrl(supplier: Supplier, kind: "whatsapp" | "catalog"): string | null {
  const contact = supplier[kind];
  if (supplier.confirmationStatus !== "confirmed" || supplier.publicationStatus !== "approved" || !contact?.confirmed) return null;
  try {
    const url = new URL(contact.url);
    if (url.protocol !== "https:" || url.username || url.password) return null;
    if (kind === "whatsapp" && (url.hostname !== "wa.me" || !/^\/\d{10,15}$/.test(url.pathname))) return null;
    return url.href;
  } catch { return null; }
}
