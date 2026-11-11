export const site = {
  name: "Nutri Açaí",
  signature: "Sabor que nutre. Energia que conecta.",
  whatsapp: "https://wa.me/5551992485496",
  phone: "+55 51 99248-5496",
  preview: true,
  catalog: {
    href: "/catalogo/Nutri_Acai_Catalogo_Mobile_2026_V7.pdf",
    filename: "Nutri_Acai_Catalogo_Mobile_2026_V7.pdf",
    sizeLabel: "PDF · 16,8 MB",
  },
} as const;

export const navigation = [
  { label: "Produtos", href: "/produtos" },
  { label: "Distribuidores", href: "/distribuidores" },
  { label: "Sobre a Nutri", href: "/#sobre" },
  { label: "Contato", href: "/#contato" },
  { label: "Trabalhe Conosco", href: "/#trabalhe-conosco" },
] as const;

export function whatsappLink(subject?: string) {
  return subject ? `${site.whatsapp}?text=${encodeURIComponent(`Olá! Gostaria de saber mais sobre ${subject}.`)}` : site.whatsapp;
}
