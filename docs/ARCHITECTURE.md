# ARQUITETURA DE INFORMAÇÃO E ESTRUTURA DO SITE

---

## 1. Análise Crítica da Proposta Preliminar

A lista inicial sugerida continha 13 páginas:
*Home, A Nutri Açaí, Nossa Fábrica, Como Produzimos, Produtos, Food Service, Varejo, Distribuidores, Encontre um Distribuidor, Seja um Distribuidor, Marca Própria, Solicitar Orçamento, Contato.*

### 1.1. Diagnóstico de Tech Lead & UX:
1. **Risco Crítico de "Thin Content" e Canibalização de SEO:**  
   Separar *A Nutri Açaí*, *Nossa Fábrica* e *Como Produzimos* geraria 3 páginas com pouquíssimo texto único, fragmentando a autoridade de busca para termos institucionais como "fábrica de açaí" e "fabricante de açaí no RS".
2. **Fricção Desnecessária de Navegação (UX):**  
   O usuário B2B (distribuidor ou comprador de food service) quer respostas rápidas: capacidade fabril, certificações, portfólio e canal direto de negociação. Navegar entre 3 páginas institucionais distintas reduz drasticamente a taxa de conversão.
3. **Duplicação de Formulários:**  
   Ter *Solicitar Orçamento* e *Contato* separados gera redundância e desorientação do usuário sobre qual canal utilizar.
4. **Tratamento do Eixo Distribuidores:**  
   *Encontre um Distribuidor* (B2C / pequeno comércio) e *Seja um Distribuidor* (B2B industrial) possuem personas e intenções antagônicas. Enquanto "Encontre" exige uma interface de busca rápida e consulta de contatos regionais, "Seja" é uma Landing Page transacional focada em atração e qualificação de parceiros comerciais.

---

## 2. Arquitetura Recomendada (Enxuta, Estratégica e Orientada a Resultados)

Propomos uma arquitetura consolidada de **6 rotas principais** de alto impacto:

```
/ (Home)
├── /a-fabrica (Institucional, Capacidade > 9t/dia, Laboratório e Produção)
├── /produtos (Catálogo Unificado: Food Service, Varejo e Nutrinho com Filtros Rápidos)
├── /seja-um-distribuidor (Landing Page B2B de Captação e Expansão de Rede)
├── /encontre-um-distribuidor (Buscador Regional de Distribuidores Autorizados)
├── /marca-propria (Página de Solução Industrial B2B / Private Label)
└── /contato (Canais de Atendimento, Suporte e Solicitação de Orçamento)
```

---

## 3. Justificativa Estratégica por Página

| Rota | Objetivo Principal | Audiência | Benefício de SEO & UX |
| :--- | :--- | :--- | :--- |
| `/` (Home) | Apresentação de impacto, autoridade industrial, destaques de produtos e roteamento rápido para os perfis de interesse. | Todos os públicos | Centraliza o PageRank; distribui tráfego com CTAs claros para B2B e B2C. |
| `/a-fabrica` | Unifica *História*, *Estrutura Fabril*, *Capacidade Produtiva (> 9 t/dia)*, *Laboratório* e *Controle de Qualidade*. | Distribuidores, Grandes Compradores, Auditorias B2B | Consolida autoridade temática máxima em uma única URL de alto valor sem dispersão de conteúdo. |
| `/produtos` | Vitrine interativa de todo o mix (Açaí, Frozens, Cremes, Sorbets e Nutrinho) com filtros imediatos por canal (Food Service vs Varejo). | Operadores de Food Service, Donos de Açaiterias, Lojistas | Evita silos de conteúdo; permite ao cliente visualizar a amplitude do portfólio em um único ambiente fluido. |
| `/seja-um-distribuidor` | Landing Page comercial B2B orientada à conversão com proposta de valor, vantagens logísticas e formulário de qualificação. | Investidores, Distribuidores e Atacadistas | Perfeita para campanhas pagas (Google Ads / Meta Ads) e ranqueamento orgânico para "distribuição de açaí". |
| `/encontre-um-distribuidor` | Módulo de consulta por Estado e Cidade para conexão com distribuidores oficiais autorizados. | Comerciantes locais e consumidores finais | Resposta imediata com zero fricção; reduz chamados no SAC da fábrica para pedidos fracionados. |
| `/marca-propria` | Apresentação do serviço de terceirização fabril (Private Label / Co-packing), P&D sensorial e garantia de capacidade. | Redes de franquias, supermercados e marcas de terceiros | Rota de nicho de altíssimo ticket médio B2B. Ranqueia para buscas industriais altamente qualificadas. |
| `/contato` | Hub de atendimento comercial e institucional com seletor de assunto (Orçamentos, Dúvidas, SAC) e integração WhatsApp. | Todos os interessados | Elimina a redundância entre "Contato" e "Orçamento" em um formulário único inteligente. |

---

## 4. Jornadas de Usuário (User Flows)

### 4.1. Jornada A: Candidato a Distribuidor (Lead B2B)
1. Entrada via Home ou direta em `/seja-um-distribuidor`.
2. Consumo de indicadores de autoridade: capacidade fabril (> 9 t/dia), estabilidade de lote, portfólio completo e atendimento Brasil.
3. Preenchimento de formulário de perfil comercial (Nome, Empresa/CNPJ, Cidade/Estado, Estrutura de Armazenamento/Frota refrigerada).
4. Confirmação imediata e direcionamento opcional para WhatsApp Comercial de Expansão.

### 4.2. Jornada B: Comprador Local / Pequeno Comércio
1. Entrada via Home ou `/encontre-um-distribuidor`.
2. Seleção de Estado (UF) e Cidade.
3. Exibição instantânea do(s) distribuidor(es) credenciado(s) autorizado(s) daquela praça com botão direto de contato.

### 4.3. Jornada C: Operador de Food Service (Açaiteria / Sorveteria)
1. Entrada via `/produtos` com filtro pré-ativado em "Food Service".
2. Avaliação técnica das embalagens (Caixas 5L, 10L e Baldes 3,6L e 12L) e variedade de sabores.
3. Ação: Clique em "Solicitar Cotação Food Service" -> direcionamento para `/contato` ou WhatsApp Comercial com produto de interesse pré-selecionado.

### 4.4. Jornada D: Marca Própria / Terceirização (Private Label)
1. Entrada via menu "Soluções" -> `/marca-propria`.
2. Compreensão da capacidade de personalização de formulação, laudos laboratoriais e escalabilidade industrial.
3. Envio de briefing inicial via formulário especializado.

---

## 5. Diretrizes da Estrutura Técnica de Frontend

- **Tecnologia:** Aplicação React baseada em Next.js (App Router) ou Vite React SSG.
  - *Recomendação Sênior:* Next.js App Router com geração estática (SSG/ISR) para entrega de HTML 100% pré-renderizado nas bordas (Vercel / Cloudflare / Netlify), garantindo TTFB mínimo, indexação instantânea por crawlers e First Contentful Paint < 0.8s.
- **Gerenciamento de Estado:** Estado local e URL-driven (searchParams para filtros de produtos e distribuidores) sem a necessidade de Redux ou bibliotecas pesadas de estado global.
- **Roteamento:** File-based routing semântico e limpo (`/produtos`, `/a-fabrica`, `/seja-um-distribuidor`).
- **Interatividade:** Componentes isolados para filtros de catálogo e busca de distribuidores (Client Components delimitados), mantendo 90% da página como Server/Static HTML para performance imbatível.
