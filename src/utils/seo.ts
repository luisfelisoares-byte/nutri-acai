/* ==========================================================================
   NUTRI AÇAÍ — UTILITÁRIO LEVE DE SEO & METATAGS
   ========================================================================== */

interface MetaOptions {
  title: string;
  description: string;
  canonicalPath?: string;
  ogImage?: string;
}

/**
 * Atualiza o título e meta tags do documento sem depender de bibliotecas pesadas
 */
export function updateDocumentMeta(options: MetaOptions): void {
  // Title
  document.title = options.title;

  // Description
  let metaDesc = document.querySelector('meta[name="description"]');
  if (!metaDesc) {
    metaDesc = document.createElement('meta');
    metaDesc.setAttribute('name', 'description');
    document.head.appendChild(metaDesc);
  }
  metaDesc.setAttribute('content', options.description);

  // Canonical
  if (options.canonicalPath) {
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      document.head.appendChild(linkCanonical);
    }
    const fullUrl = `${window.location.origin}${options.canonicalPath}`;
    linkCanonical.setAttribute('href', fullUrl);
  }

  // Open Graph Title
  let ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) {
    ogTitle.setAttribute('content', options.title);
  }

  // Open Graph Description
  let ogDesc = document.querySelector('meta[property="og:description"]');
  if (ogDesc) {
    ogDesc.setAttribute('content', options.description);
  }
}
