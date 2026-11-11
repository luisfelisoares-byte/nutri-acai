// A confirmação do domínio não libera a indexação: os bloqueios da prévia permanecem.
export function confirmedOrigin(): string | undefined {
  if (process.env.SITE_DOMAIN_CONFIRMED !== "true") return undefined;
  const value = process.env.NEXT_PUBLIC_SITE_URL;
  if (!value) throw new Error("Confirmação de domínio exige NEXT_PUBLIC_SITE_URL.");
  const url = new URL(value);
  if (url.protocol !== "https:" || url.username || url.password || url.pathname !== "/" || url.search || url.hash || url.hostname === "localhost" || url.hostname.endsWith(".localhost") || /^[\d.]+$/.test(url.hostname) || url.hostname.includes(":")) {
    throw new Error("Informe somente a origem HTTPS do domínio definitivo confirmado.");
  }
  return url.origin;
}

export function canonical(path: string) {
  const origin = confirmedOrigin();
  return origin ? { canonical: new URL(path, origin).href } : undefined;
}

// Distribuidores permanece demonstrativo e aguarda aprovação comercial.
export const sitemapPaths = ["/", "/produtos"] as const;
