# 02 — ARQUITETURA E NAVEGAÇÃO

## 1. Stack Tecnológica Obrigatória

| Tecnologia | Versão Alvo | Função / Justificativa |
| :--- | :--- | :--- |
| **React** | 18+ | Biblioteca declarativa para UI baseada em componentes |
| **Vite** | 5+ / 6+ | Bundler ultrarrápido, HMR instantâneo e build otimizado |
| **TypeScript** | 5+ | Tipagem estática rigorosa para contratos de dados e componentes |
| **CSS Próprio Moderno** | CSS3 Nativo (CSS Variables, Flexbox, Grid, Container Queries) | Zero overhead de frameworks externos, controle total sobre o design system e performance PageSpeed 90+ |
| **Lucide Icons** | `lucide-react` | Biblioteca consistente de ícones minimalistas e leves |

### Tecnologias Proibidas:
- Tailwind CSS
- Bootstrap / React Bootstrap / Material UI / Chakra UI
- Qualquer framework CSS ou biblioteca de UI pesada que comprometa a originalidade visual ou infle o bundle.

---

## 2. Arquitetura de Pastas e Componentes

A estrutura do projeto deve ser organizada para garantir escalabilidade, clareza e manutenção simples:

```
src/
├── assets/                  # Logos, ícones específicos, imagens tratadas
│   ├── images/
│   │   ├── banners/
│   │   ├── produtos/
│   │   ├── fabrica/
│   │   ├── equipe/
│   │   ├── institucional/
│   │   └── logo/
│   └── icons/
├── components/              # Componentes de interface reutilizáveis
│   ├── layout/              # Header, Footer, MobileNav, WhatsAppFloat, PageLayout
│   ├── ui/                  # Button, Badge, Modal, Input, Select, Card, Carousel
│   └── sections/            # Seções reutilizáveis (Hero, Differentials, Testimonials, etc.)
├── data/                    # Dados estruturados oficiais (produtos, linhas, diferenciais)
│   ├── productsData.ts
│   ├── differentialsData.ts
│   ├── companyData.ts
│   └── distributorsData.ts
├── pages/                   # Páginas da aplicação
│   ├── Home/
│   ├── ANutri/
│   ├── Products/
│   ├── Distributors/
│   ├── BecomeDistributor/
│   ├── WorkWithUs/
│   └── WhereWeAre/
├── router/                  # Configuração de rotas (React Router)
├── styles/                  # Design system e folhas globais
│   ├── variables.css        # Cores, espaçamentos, tipografia, elevações
│   ├── reset.css            # Normalização moderna
│   ├── typography.css       # Escala modular de fontes
│   └── global.css           # Estilos base e utilitários semânticos
├── types/                   # Tipos TypeScript compartilhados
│   └── index.ts
├── utils/                   # Formatadores (WhatsApp URL, telefone, máscaras)
│   ├── whatsapp.ts
│   ├── masks.ts
│   └── analytics.ts
├── App.tsx
└── main.tsx
```

---

## 3. Mapa de Rotas e Páginas

| Rota | Componente | Descrição da Página | Tipo |
| :--- | :--- | :--- | :--- |
| `/` | `Home` | Visão geral da marca, Hero dinâmico, apresentação rápida, diferenciais, depoimentos, Instagram, chamada RH e Footer. | Interna |
| `/a-nutri` | `ANutri` | História completa, capacidade produtiva (>9t/dia), processo em 4 etapas, missão/visão/valores, linha do tempo histórica. | Interna |
| `/produtos` | `Products` | Catálogo completo por linhas (Food Service, Varejo, Nutrinho), filtros imediatos por linha/volume, compra direta via WhatsApp. | Interna |
| `/distribuidores` | `Distributors` | Localizador de distribuidores com filtro em cascata (Região -> Estado -> Cidade) e rota no Maps. | Interna |
| `/seja-um-distribuidor` | `BecomeDistributor`| Benefícios para distribuidores e formulário de qualificação em etapa única com redirecionamento formatado para WhatsApp Comercial. | Interna |
| `/trabalhe-conosco` | `WorkWithUs` | Apresentação institucional de carreiras e botão direto para WhatsApp RH. | Interna |
| `/onde-estamos` | `WhereWeAre` | Endereço oficial em Gravataí/RS, mapa interativo, horário de atendimento comercial e orientações de rota. | Interna |
| *(link de menu)* | — | Catálogo Oficial de Preços no WhatsApp (`https://wa.me/c/555189621635`). | Externa (`_blank`) |

---

## 4. Header e Navegação Desktop

- **Posicionamento:** Fixo no topo (`sticky`), com efeito sutil de blur/backdrop e sombra suave ao rolar a página.
- **Estrutura Visual:**
  - **Lado Esquerdo:** Logotipo oficial da Nutri Açaí com link para a Home (`/`).
  - **Centro:** Links de navegação semânticos:
    1. *Início* (`/`)
    2. *A Nutri* (`/a-nutri`)
    3. *Produtos* (`/produtos`)
    4. *Distribuidores* (`/distribuidores`)
    5. *Trabalhe Conosco* (`/trabalhe-conosco`)
    6. *Catálogo* (abre o catálogo oficial em nova aba `https://wa.me/c/555189621635`)
  - **Lado Direito:** Botão de ação (CTA) principal e mais destacado:
    - **"SEJA UM DISTRIBUIDOR"** (botão com visual vibrante, contrastante e com alta ênfase visual).

---

## 5. Menu Mobile

- **Padrão Obrigatório:** Menu lateral deslizante (*Drawer*) acionado por ícone de hambúrguer acessível (`aria-expanded`, foco gerenciado).
- **Proibição Estrita:** **NÃO** utilizar barra de navegação inferior fixa (*bottom navigation bar*).
- **Comportamento:**
  - Abre com transição fluida a partir da lateral.
  - Exibe logotipo no topo do drawer, lista completa dos links com espaçamento ergonômico para toque (mínimo de 48px por alvo).
  - Inclui botão de destaque "SEJA UM DISTRIBUIDOR" e atalhos rápidos para redes sociais e WhatsApp no rodapé do drawer.
  - Fechamento intuitivo com tecla `Escape`, botão de fechar (X) ou clique no backdrop escurecido.

---

## 6. Botão Flutuante de WhatsApp

- **Posicionamento:** Canto inferior direito da tela, com espaçamento seguro de bordas (ex.: `bottom: 24px; right: 24px; z-index: 1000`).
- **Mobile Friendly:** No mobile, deve manter espaçamento ergonômico sem cobrir botões de formulário ou textos cruciais.
- **Interação:** Ao clicar no botão flutuante com o ícone do WhatsApp, abre-se um menu popover moderno e direto com **3 opções de canal**:
  1. **Comprar produtos** ➔ direciona para `(51) 8962-1635` com texto: *"Olá! Gostaria de informações sobre os produtos Nutri Açaí."*
  2. **Quero ser distribuidor** ➔ direciona para `(51) 99428-1252` com texto: *"Olá! Gostaria de informações sobre como ser um distribuidor Nutri Açaí."*
  3. **Trabalhe Conosco** ➔ direciona para `(51) 99246-5908` com texto: *"Olá! Gostaria de enviar meu currículo para a equipe de RH da Nutri Açaí."*

---

## 7. Footer Completo

O rodapé é dividido em 4 colunas no Desktop e adaptado responsivamente no Mobile:

1. **Coluna 1 — Nutri Açaí:**
   - Logotipo oficial;
   - Frase institucional: *"Cremosidade que conquista. Qualidade que surpreende."*;
   - Ícones de redes sociais: Instagram (`@nutriacaioficial`) e Facebook (apenas ícone clicável com link externo).
2. **Coluna 2 — Navegação:**
   - Início, A Nutri, Produtos, Encontre um Distribuidor, Seja um Distribuidor, Trabalhe Conosco, Onde Estamos.
3. **Coluna 3 — Atendimento & Horários:**
   - Vendas/Produtos: `(51) 8962-1635`
   - Comercial: `(51) 99428-1252`
   - RH: `(51) 99246-5908`
   - **Horário de Atendimento Comercial:**
     - Segunda a sexta: 08h às 18h
     - Sábado: 08h às 15h
     - Domingo: Fechado
4. **Coluna 4 — Ações Rápidas:**
   - Ver Catálogo (link externo `_blank`)
   - Comprar pelo WhatsApp (link `_blank`)
   - Seja um Distribuidor (link interno)
   - Trabalhe Conosco (link interno)

### Regra Específica para Mobile no Footer:
- Todas as informações e colunas devem permanecer **totalmente abertas e visíveis em pilha vertical**.
- **NÃO utilizar acordeão (*accordion*)** para colapsar os dados do rodapé no mobile.
- Créditos institucionais e copyright no rodapé inferior com indicação da fábrica gaúcha.
