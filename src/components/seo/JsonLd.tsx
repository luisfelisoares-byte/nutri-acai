import React from 'react';

interface JsonLdProps {
  data: Record<string, unknown> | Array<Record<string, unknown>>;
}

/**
 * Componente reutilizável para injeção de dados estruturados Schema.org / JSON-LD
 * Seguro contra injeção e compatível com SSR / SSG no Next.js App Router.
 */
export const JsonLd: React.FC<JsonLdProps> = ({ data }) => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
};
