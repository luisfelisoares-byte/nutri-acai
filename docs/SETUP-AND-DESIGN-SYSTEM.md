# SETUP TÉCNICO E FUNDAÇÃO DO DESIGN SYSTEM (BLOCO 1)

---

## 1. Visão Geral da Fundação Técnica

No Bloco 1, foi estabelecida a infraestrutura de engenharia e a arquitetura visual da aplicação **Nutri Açaí**, com foco rigoroso em performance, acessibilidade (WCAG 2.1 AA), SEO técnico nativo e manutenibilidade a longo prazo.

A regra fundamental de arquitetura foi mantida: **zero código prematuro de páginas definitivas e zero invenção de dados da empresa**.

---

## 2. Stack Tecnológica Implementada

| Tecnologia | Versão / Configuração | Justificativa de Engenharia |
| :--- | :--- | :--- |
| **Framework Base** | Next.js 15 (App Router) | Renderização híbrida com geração 100% estática (SSG) para First Load JS mínimo (103 kB) e TTFB instantâneo em CDN. |
| **Biblioteca de UI** | React 19 (`react`, `react-dom`) | Versão moderna com suporte nativo a Server Components assíncronos e hooks otimizados. |
| **Linguagem** | TypeScript 5.7 (Modo `strict: true`) | Prevenção de erros em tempo de compilação, tipagem exata dos modelos de produtos e distribuidores. |
| **Estilização** | Tailwind CSS v3.4 + Autoprefixer | CSS purgado no build com tempo de execução zero em runtime; parametrização integral por variáveis CSS. |
| **Tipografia Otimizada** | `next/font/google` (*Inter* + *Plus Jakarta Sans*) | Zero layout shift (CLS = 0), subconjuntos latinos pré-carregados localmente sem requisições a servidores externos. |
| **Ícones** | `lucide-react` | Apenas ícones estritamente necessários (Menu, X, ShieldCheck, MapPin, ArrowRight) importados via tree-shaking. |
| **SEO & Metadados** | Next.js Metadata API + `robots.ts` + `sitemap.ts` | Geração dinâmica de sitemap e robots sem pacotes pesados de terceiros. |

> [!NOTE]  
> **Dependências NÃO Instaladas (Conforme Diretrizes):**  
> Não foram instalados Redux, Framer Motion, bibliotecas UI monolíticas (MUI, Chakra) ou qualquer dependência supérflua que comprometesse o bundle.

---

## 3. Estrutura de Pastas Consolidada

```
g:/ARQUIVOS FELIPE/SITES CRIADOS/NUTRI/NUTRI AÇAI 2026/
├── .gitignore
├── package.json
├── tsconfig.json
├── postcss.config.js
├── tailwind.config.ts
│
├── docs/                             # Documentação técnica oficial (Blocos 0 e 1)
│   ├── PROJECT-BRIEF.md
│   ├── ARCHITECTURE.md
│   ├── SEO-STRATEGY.md
│   ├── CONTENT-INVENTORY.md
│   ├── PRODUCT-CATALOG.md
│   ├── IMAGE-INVENTORY.md
│   ├── DISTRIBUTORS.md
│   ├── PENDENCIAS.md
│   └── SETUP-AND-DESIGN-SYSTEM.md
│
├── IMAGENS BRUTAS/                   # Ativos originais do cliente preservados
│   └── [10 screenshots originais]
│
├── public/
│   └── images/                       # Taxonomia limpa para produção
│       ├── brand/                    # Vetores, favicons, OG banners
│       ├── factory/                  # Instalações reais em Gravataí/RS
│       ├── production/               # Linha de envase, tanques, laboratório
│       ├── products/                 # Packshots com fundo transparente
│       ├── distributors/             # Mapas de cobertura e gráficos
│       └── institutional/            # Texturas e fundos
│
└── src/
    ├── app/                          # App Router
    │   ├── globals.css               # Variáveis CSS dos tokens do Design System
    │   ├── layout.tsx                # RootLayout acessível com Skip-Link e Metadados
    │   ├── page.tsx                  # Home de validação técnica da fundação
    │   ├── robots.ts                 # Geração automática de robots.txt
    │   └── sitemap.ts                # Geração automática de sitemap.xml
    │
    ├── components/
    │   ├── layout/                   # Componentes estruturais globais
    │   │   ├── Header.tsx            # Cabeçalho com barra de autoridade e mobile drawer
    │   │   └── Footer.tsx            # Rodapé institucional sem dados inventados
    │   └── ui/                       # Primitivos atômicos de interface
    │       ├── Button.tsx            # Botão semântico acessível com variantes
    │       ├── Badge.tsx             # Badges de destaque industrial e categorias
    │       └── Container.tsx         # Wrapper de largura responsiva padronizada
    │
    ├── data/                         # Dados estruturados e mocks tipados
    │   ├── navigation.ts             # Estrutura de menus baseada na arquitetura
    │   ├── mock-products.ts          # Produtos fiéis ao catálogo auditado
    │   └── mock-distributors.ts      # Dados sintéticos de teste claramente identificados
    │
    ├── lib/
    │   └── fonts.ts                  # Configuração de fontes next/font/google
    │
    └── types/                        # Interfaces TypeScript estritas
        ├── product.ts                # Modelos completos de Produto, Linhas e Embalagens
        ├── distributor.ts            # Modelos de Distribuidor e Lead B2B
        └── common.ts                 # Tipos compartilhados de navegação e UI
```

---

## 4. Decisões de Arquitetura do Design System

### 4.1. Parametrização por Variáveis CSS (A Prova de Mudança)
Como a paleta de cores oficial da Nutri Açaí ainda não foi enviada pelo cliente, adotamos a melhor prática de engenharia:
- O `tailwind.config.ts` consome variáveis semânticas CSS (`var(--color-primary)`, `var(--brand-500)`, etc.).
- O `src/app/globals.css` centraliza os valores de fallback sóbrios inspirados no açaí/saúde, rigorosamente calibrados para contraste WCAG AA.
- **Resultado:** Quando o cliente fornecer os códigos hexadecimais definitivos, precisaremos apenas atualizar as variáveis do `:root` no CSS, sem alterar nenhum arquivo ou classe dos componentes.

### 4.2. Acessibilidade Integrada (Accessibility-First)
- **Skip Link:** Implementado no topo do `RootLayout` (`#main-content`) para navegação por leitores de tela e tabulação.
- **Foco Visível:** Regra `:focus-visible` com anel de alto contraste e deslocamento (`outline-offset`).
- **Navegação Móvel:** Botão de menu mobile com `aria-expanded`, `aria-controls="mobile-nav"`, captura de tecla `Escape` e bloqueio de scroll no body durante a abertura.
- **Área de Toque Ergonômica:** Botões com altura mínima de 44px (padrão WCAG / touch-friendly).
- **Suporte a Movimento Reduzido:** Regra `@media (prefers-reduced-motion: reduce)` desativa animações para usuários sensíveis.

---

## 5. Resumo da Verificação e Compilação
- **Verificação de Tipos:** `npm run typecheck` (`tsc --noEmit`) executou com **código 0 (zero erros)**.
- **Build de Produção:** `npm run build` (`next build`) concluiu com **sucesso em 51s**, gerando páginas 100% estáticas (Static / SSG) com First Load JS de apenas 103 kB.
