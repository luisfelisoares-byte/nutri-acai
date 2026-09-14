# 07 — SEO, PERFORMANCE E ACESSIBILIDADE

## 1. Estratégia de SEO — Dominação Orgânica

O site da Nutri Açaí é estruturado desde a base para alcançar as primeiras posições nos mecanismos de busca (Google, Bing) tanto em termos regionais (indústria gaúcha de açaí, distribuidor de açaí RS) quanto em termos nacionais (açaí no atacado, private label de açaí, fábrica de açaí Brasil).

### Requisitos Técnicos de SEO:
- **Hierarquia de Títulos Rigorosa:**  
  Apenas um `<h1>` por página, seguido de `<h2>` para seções principais e `<h3>` para blocos/cards. Zero títulos vazios ou fora de ordem semântica.
- **Títulos e Meta Descriptions Dinâmicos:**
  - *Home:* `Nutri Açaí | Indústria Gaúcha de Açaí, Sorbets e Food Service` — Descrição: `Indústria de açaí com capacidade de mais de 9 toneladas/dia em Gravataí/RS. Produção própria, frota própria e atendimento para todo o Brasil. Conheça nossos produtos!`
  - *A Nutri:* `A Nutri Açaí | Fábrica, Qualidade e Tradição Gaúcha`
  - *Produtos:* `Produtos Nutri Açaí | Food Service, Varejo e Nutrinho`
  - *Distribuidores:* `Encontre um Distribuidor Nutri Açaí | Onde Comprar`
  - *Seja um Distribuidor:* `Seja um Distribuidor Nutri Açaí | Parceria B2B e Alta Rentabilidade`
  - *Trabalhe Conosco:* `Trabalhe Conosco Nutri Açaí | Vagas e Oportunidades`
  - *Onde Estamos:* `Onde Estamos Nutri Açaí | Fábrica em Gravataí/RS`
- **Open Graph e Twitter Cards:** Configurados com imagem de destaque, título e descrição para compartilhamento em WhatsApp, Facebook e LinkedIn.
- **Canonical Tags:** Tags `<link rel="canonical" href="..." />` em todas as páginas para prevenir duplicação de conteúdo.
- **Dados Estruturados (Schema.org / JSON-LD):**
  - `Organization` e `LocalBusiness` com endereço de Gravataí/RS, telefone, geolocalização e horários;
  - `Product` para os itens do catálogo;
  - `BreadcrumbList` para navegação estruturada.
- **Sitemap & Robots:**
  - `sitemap.xml` atualizado com todas as rotas públicas;
  - `robots.txt` orientando robôs de busca.
- **SEO sem Práticas Abusivas:** Proibição estrita de *keyword stuffing* ou textos ocultos.

---

## 2. Metas e Técnicas de Performance (PageSpeed 90+)

O projeto deve atingir pontuações superiores a **90 pontos** no Google PageSpeed Insights (Mobile e Desktop) e cumprir com excelência os indicadores do **Core Web Vitals**:

| Métrica Vital | Alvo | Prática Implementada |
| :--- | :--- | :--- |
| **LCP (Largest Contentful Paint)** | `< 2.5s` | Otimização do Hero banner, carregamento prioritário de imagem LCP (`fetchpriority="high"`), WebP/AVIF comprimido. |
| **CLS (Cumulative Layout Shift)** | `< 0.1` | Definição explícita de `width` e `height` (ou `aspect-ratio`) em todas as imagens, ícones e iframes. Zero saltos de layout durante o carregamento. |
| **INP / FID (Interactivity)** | `< 200ms` | CSS nativo moderno sem overhead de JavaScript de estilização, scripts assíncronos e componentes leves. |

### Medidas de Otimização:
1. **Compressão e Formatos de Próxima Geração:** Todas as imagens salvas nos formatos WebP e AVIF com compressão otimizada sem perda perceptível de qualidade.
2. **Lazy Loading Nativo:** Atributo `loading="lazy"` em todas as imagens abaixo da primeira dobra e no iframe do mapa.
3. **Carregamento Eficiente de Fontes:** Google Fonts com `font-display: swap` e `rel="preconnect"`.
4. **Bundle Enxuto:** Zero frameworks pesados (sem Tailwind, sem Bootstrap, sem dependências volumosas desnecessárias).
5. **Integração Externa Resiliente:** Seção de Instagram com fallback local para não travar o carregamento da Home caso a rede social externe latência.

---

## 3. Diretrizes de Acessibilidade (WCAG 2.1 Nível AA)

A acessibilidade é requisito fundamental de engenharia no projeto Nutri Açaí:

1. **HTML Semântico:** Uso exclusivo de tags semânticas (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`).
2. **Contraste de Cores:** Todos os pares de texto/fundo devem obedecer a proporção mínima de **4.5:1** para texto normal e **3:1** para textos grandes (conforme WCAG AA).
3. **Navegação Completa por Teclado:**
   - Ordem de foco lógica (`tabindex` natural);
   - Indicador de foco visível e destacado (`:focus-visible`);
   - Tecla `Escape` fecha drawers móveis, menus suspensos e modais.
4. **Imagens com Textos Alternativos Descritivos (`alt`):**
   - Imagens de produtos descrevem a embalagem e o sabor (ex.: *"Caixa de 5 litros de Açaí com Morango Food Service Nutri Açaí"*);
   - Imagens puramente decorativas utilizam `alt=""` e `aria-hidden="true"`.
5. **Formulários Acessíveis:**
   - Todo campo possui `<label>` associado via atributo `id`/`htmlFor`;
   - Erros de validação anunciados com `aria-describedby` e `aria-invalid`.
6. **Alvos de Toque no Mobile:** Áreas clicáveis com tamanho mínimo de **48x48px** para botões e links de navegação.
7. **Suporte a Movimento Reduzido:** Respeito à preferência do sistema operacional via `@media (prefers-reduced-motion: reduce)` desativando animações automáticas ou substituindo por transições instantâneas.

---

## 4. Conformidade com a LGPD e Cookies

- **Diretriz Atual:** Conforme instrução do projeto, o banner visual de consentimento de cookies **não** será exibido nesta fase inicial.
- **Arquitetura Preparada:** O sistema manterá um módulo utilitário em `src/utils/analytics.ts` e um hook de consentimento preparado para que, no momento em que a política de privacidade e cookies oficial for ativada pelo jurídico da empresa, a ativação do banner ocorra sem necessidade de refatorações de páginas ou de código.
