# 09 — ETAPAS DE DESENVOLVIMENTO

## 1. Roadmap Metodológico do Projeto

Para garantir controle de qualidade absoluto, ausência de retrabalho e fidelidade estrita à documentação, o desenvolvimento está dividido em 13 etapas sequenciais:

```
[Etapa 1] Documentação & Assets (Concluída)
   │
[Etapa 2] Fundação Técnica & Design System
   │
[Etapa 3] Header, Navegação & Hero
   │
[Etapa 4] Home Completa
   │
[Etapa 5] Página A Nutri
   │
[Etapa 6] Página Produtos
   │
[Etapa 7] Página Distribuidores
   │
[Etapa 8] Seja um Distribuidor (Formulário)
   │
[Etapa 9] Trabalhe Conosco
   │
[Etapa 10] Onde Estamos
   │
[Etapa 11] Footer, WhatsApp & Integrações
   │
[Etapa 12] SEO, Acessibilidade & Performance
   │
[Etapa 13] Auditoria Final & Homologação
```

---

## 2. Detalhamento de Cada Etapa

### ETAPA 1 — Documentação Permanente e Análise de Assets
- **Objetivo:** Estabelecer a fonte única da verdade, analisar imagens e catálogo PDF, mapear regras de negócio e criar os 11 arquivos da pasta `docs/`.
- **Status:** CONCLUÍDA.
- **Critério de Aceite:** Todos os 11 documentos criados, revisados e sem conflitos.

---

### ETAPA 2 — Fundação Técnica e Design System Base
- **Objetivo:** Preparar a base técnica limpa, escalável e tipada com React, Vite, TypeScript, CSS nativo modular e Lucide Icons.
- **Status:** CONCLUÍDA.
- **Entregas Realizadas:**
  - Setup do projeto Vite 5 + React 18 + TypeScript 5 sem frameworks visuais externos;
  - `variables.css`: tokens centralizados de cores sólidas funcionais (Roxo, Verde, Amarelo, Laranja, Azul, Neutros e tokens das 3 linhas de produto), tipografia (Poppins + Manrope), escala de espaçamento de 4px a 96px, raios de borda, sombras suaves e breakpoints;
  - `reset.css`: normalização moderna, box-sizing, foco acessível (`:focus-visible`) e suporte a `@media (prefers-reduced-motion: reduce)`;
  - `typography.css`: hierarquia tipográfica com escala fluida `clamp()` e classes utilitárias semânticas;
  - `global.css`: integração de estilos, acessibilidade (`.sr-only`, `.skip-link`) e animações globais;
  - Componentes UI de fundação criados e tipados: `Container`, `Section`, `Button` (com variantes, tamanhos de toque >= 48px, foco visível e suporte a links/WhatsApp), `Badge` (com suporte às 3 linhas), `Card` (com elevação suave e detalhe por linha de produto), `Input`, `Select` (com ícone Lucide) e `Textarea` (com redimensionamento apenas vertical);
  - Utilitários: `whatsapp.ts` (geração de links oficiais e mensagens padronizadas), `masks.ts` (máscara dinâmica de telefone), `seo.ts` (atualização de metatags sem libs pesadas);
  - Contratos de tipos em `src/types/index.ts` e dados confirmados em `src/data/companyData.ts`;
  - Mostruário interativo de validação da fundação em `src/App.tsx`.
- **Validação:** `npm run build` executado com 100% de sucesso (zero erros de compilação ou TypeScript).

---

### ETAPA 3 — Header, Navegação e Hero Dinâmico
- **Objetivo:** Construir o Header integrado ao Hero, a navegação desktop e mobile (drawer acessível) e o Hero dinâmico com carrossel responsivo.
- **Status:** CONCLUÍDA.
- **Entregas Realizadas:**
  - **Header Desktop:** Logotipo oficial em alta resolução, links de navegação (`/`, `/a-nutri`, `/produtos`, `/distribuidores`, `/trabalhe-conosco`), link externo com target `_blank` para o Catálogo Oficial no WhatsApp (`https://wa.me/c/555189621635`) e botão em destaque **SEJA UM DISTRIBUIDOR** (`/seja-um-distribuidor`);
  - **Efeito Sticky com Scroll:** Detecção de scroll (>30px) com transição suave, fundo translúcido roxo escuro, `backdrop-filter: blur(14px)` e sombra sem causar layout shift;
  - **Menu Mobile Drawer:** Acionado por botão hambúrguer acessível (área de toque de 48px), transição lateral deslizante suave, backdrop escurecido com clique para fechar, fechamento pela tecla `Escape`, bloqueio de rolagem do fundo (`overflow: hidden`) e foco gerenciado no botão fechar;
  - **Hero Dinâmico (85–88% da viewport):**
    - 3 slides temáticos compostos a partir das imagens reais da Nutri Açaí (Food Service Cupuaçu/Frozen, Copos Nutrinho sob céu límpido e Frota/Qualidade Gaúcha);
    - Enquadramentos e proporções específicos para desktop (`1920x1080`) e mobile (`800x1200`) via tag `<picture>`;
    - Carregamento prioritário (`fetchpriority="high"`, `loading="eager"`) para o slide inicial e lazy loading para os subsequentes;
    - Autoplay (6 segundos) pausável ao passar o mouse ou receber foco por teclado;
    - Transição fluida de *fade* (700ms) e animação suave de entrada dos textos;
    - Frase oficial em destaque: *"Cremosidade que conquista. Qualidade que surpreende."*;
    - CTAs oficiais: *"Conheça nossos produtos"* (`/produtos`) e *"Seja um Distribuidor"* (`/seja-um-distribuidor`), sem botão de catálogo no Hero;
    - Controles acessíveis completos: setas manuais (`ChevronLeft`/`ChevronRight`), dots com indicadores de seleção e suporte integral a `prefers-reduced-motion`.
- **Validação:** `tsc` e `vite build` executados com 100% de sucesso (zero erros).

---

### ETAPA 4 — Home Completa
- **Objetivo:** Construir a Home completa preservando o Header e Hero da Etapa 3, integrando a sequência exata das 6 seções e o Footer de 4 colunas.
- **Status:** CONCLUÍDA.
- **Entregas Realizadas:**
  - **1. Hero:** Preservado integralmente conforme aprovado na Etapa 3, com 3 slides reais, autoplay pausável, fade suave e CTAs oficiais;
  - **2. A Nutri Açaí (Apresentação Curta):** Layout em 2 colunas no desktop, foto real dos fundadores e marca em Gravataí/RS (`a-nutri-apresentacao.webp`), destaque institucional para produção de mais de 9 toneladas/dia, desde 2022, laboratório próprio e botão *"Conheça a Nutri"* direcionando para `/a-nutri`;
  - **3. Nossos Diferenciais:** Faixa horizontal leve e moderna (sem cards pesados) com os 6 pilares oficiais: Produção própria (Roxo), Frota própria (Verde), Atendemos todo o Brasil (Azul), Mix variado (Laranja), Qualidade (Amarelo) e Atendimento personalizado (Roxo claro);
  - **4. Depoimentos:** Carrossel compacto com 3 posições e identificação transparente de `[PLACEHOLDER — Depoimento em validação]`, autoplay moderado (7s), dots, setas acessíveis, pausa no hover e respeito a `prefers-reduced-motion`;
  - **5. Instagram:** Grade curada com 4 publicações reais e fallback local em WebP (`insta-01.webp` a `insta-04.webp`), overlay com ícone e botão *"Ver Instagram Oficial"* direcionando para `@nutriacaioficial` em nova aba;
  - **6. Trabalhe Conosco:** Chamada institucional concisa valorizando a equipe técnica e industrial, com botão *"Envie seu currículo"* direcionando EXCLUSIVAMENTE para o WhatsApp do RH `(51) 99246-5908`, sem misturar com comercial ou vendas;
  - **7. Footer Completo (4 Colunas):**
    - Coluna 1: Logotipo oficial, slogan institucional e links para Instagram e Facebook;
    - Coluna 2: Navegação institucional e link externo para o Catálogo;
    - Coluna 3: Endereço completo em Gravataí/RS com link Google Maps, horários de atendimento comercial (Seg–Sex 08h–18h, Sáb 08h–15h) e telefones dedicados;
    - Coluna 4: Ações rápidas com botões de conversão;
    - Mobile aberto verticalmente sem acordeão para máxima legibilidade.
  - **Separação Rigorosa dos Três Canais WhatsApp:** Produtos `(51) 8962-1635`, Comercial B2B `(51) 99428-1252` e RH `(51) 99246-5908`.
- **Validação:** `tsc` e `vite build` executados com 100% de sucesso (zero erros).

---

### ETAPA 5 — Página "A Nutri" (`/a-nutri`)
- **Escopo:**
  - Apresentação completa da história e dados oficiais da fábrica gaúcha;
  - Destaque para a capacidade fabril (> 9 toneladas/dia);
  - Processo industrial visual em 4 etapas:
    1. *Produção*
    2. *Controle de Qualidade (laboratório próprio)*
    3. *Armazenamento*
    4. *Distribuição (frota própria)*;
  - Blocos de Missão, Visão e Valores oficiais;
  - Linha do tempo histórica responsiva (horizontal no desktop, vertical no mobile) preparada para marcos e fotos.
- **Critério de Aceite:** Conteúdo 100% alinhado aos dados oficiais confirmados; linha do tempo estruturada.

---

### ETAPA 6 — Página "Produtos" (`/produtos`)
- **Escopo:**
  - Cabeçalho com filtros rápidos por linha: `[Food Service]` (Roxo), `[Varejo]` (Verde) e `[Nutrinho]` (Laranja/Amarelo);
  - Subfiltros por volume e sabores oficiais mapeados no catálogo;
  - Grid responsivo de cards de produtos com detalhes de linha, fotos reais e hover com elevação;
  - Botão verde de ação em cada card abrindo WhatsApp de Vendas `(51) 8962-1635` com mensagem pré-formatada do produto;
  - Acesso direto ao Catálogo Oficial no WhatsApp (`https://wa.me/c/555189621635`).
- **Critério de Aceite:** Zero exibição de preços no site; todos os produtos oficiais cadastrados e links de WhatsApp testados.

---

### ETAPA 7 — Página "Distribuidores" (`/distribuidores`)
- **Escopo:**
  - Interface "Encontre um Distribuidor";
  - Sistema de filtros encadeados: Região ➔ Estado ➔ Cidade;
  - Exibição de cards de distribuidores com nome, localidade, WhatsApp, catálogos (quando houver) e botão "Como Chegar" direcionando para rota no Google Maps;
  - Aplicação rigorosa da Regra Anti-Delírio com dados identificados como `PLACEHOLDER`.
- **Critério de Aceite:** Filtros dinâmicos funcionando e links para o Google Maps testados.

---

### ETAPA 8 — Página "Seja um Distribuidor" (`/seja-um-distribuidor`)
- **Escopo:**
  - Seção com 3–4 benefícios claros da parceria comercial;
  - Formulário único em etapa única (sem wizard);
  - Campos: Nome, Empresa, WhatsApp (com máscara), E-mail, Estado, Cidade, Região, Já distribui (Sim/Não), Segmento e Mensagem;
  - Validação amigável inline orientando o preenchimento;
  - Feedback visual após validação e redirecionamento direto para o WhatsApp Comercial `(51) 99428-1252` com os dados estruturados no texto.
- **Critério de Aceite:** Validação de campos e formatação correta de texto no WhatsApp testadas.

---

### ETAPA 9 — Página "Trabalhe Conosco" (`/trabalhe-conosco`)
- **Escopo:**
  - Página institucional concisa sobre a cultura e oportunidades da empresa;
  - Apresentação curta e humanizada;
  - Botão destacado *"Envie seu currículo"*;
  - Abertura imediata do WhatsApp RH `(51) 99246-5908` com texto pré-configurado.
- **Critério de Aceite:** Página limpa, sem formulário desnecessário de currículo, direcionamento exclusivo para o WhatsApp do RH.

---

### ETAPA 10 — Página "Onde Estamos" (`/onde-estamos`)
- **Escopo:**
  - Apresentação do endereço oficial da fábrica em Gravataí/RS (Rodovia Teixeirinha, 9225/9245/9455);
  - Mapa interativo (Google Maps) em contêiner fluido e com carregamento lazy;
  - Horários oficiais de atendimento comercial;
  - Orientações de rota e botões de contato rápido;
  - *Restrição:* Não exibir fotos de fábrica nesta página (fotos concentradas em `/a-nutri`).
- **Critério de Aceite:** Mapa operando com alta velocidade e sem degradação do CLS; dados de endereço e horários exatos.

---

### ETAPA 11 — Footer, WhatsApp Flutuante e Integrações
- **Escopo:**
  - Rodapé completo em 4 colunas no desktop (Nutri Açaí, Navegação, Atendimento com horários, Ações);
  - No mobile: todas as seções do rodapé totalmente abertas e sem acordeão;
  - Botão flutuante de WhatsApp no canto inferior com popover de 3 opções (Vendas, Comercial, RH);
  - Integrações com links externos de redes sociais e Catálogo WhatsApp abertos em nova aba segura.
- **Critério de Aceite:** Footer responsivo sem acordeão no mobile; popover do botão flutuante testado em desktop e toque.

---

### ETAPA 12 — SEO, Acessibilidade e Performance
- **Escopo:**
  - Inclusão de metadados dinâmicos (Title, Description, Open Graph, Canonical) por rota;
  - Implementação de Schema.org / JSON-LD (`Organization`, `LocalBusiness`, `Product`);
  - Geração de `sitemap.xml` e `robots.txt`;
  - Otimização de imagens (WebP, dimensões fixas, lazy load);
  - Auditoria de acessibilidade por teclado, foco visível, rótulos ARIA e `prefers-reduced-motion`;
  - Verificação do Core Web Vitals visando PageSpeed 90+.
- **Critério de Aceite:** Zero barreiras de navegação por teclado, contraste WCAG AA validado, markup estruturado sem erros.

---

### ETAPA 13 — Auditoria Geral, Testes de Integração e Homologação
- **Escopo:**
  - Teste de ponta a ponta de todas as 7 rotas e links externos;
  - Verificação de responsividade em múltiplos dispositivos (mobile, tablet, notebook, widescreen);
  - Revisão completa contra a Regra Anti-Delírio e checagem de todos os placeholders;
  - Preparação do relatório final de homologação do projeto.
- **Critério de Aceite:** Aplicação 100% pronta para deploy em produção.
