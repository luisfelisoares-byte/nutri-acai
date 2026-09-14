# 04 — SISTEMA VISUAL E UI/UX

## 1. Conceito e Personalidade Visual

O design do site Nutri Açaí projeta a imagem de uma **grande indústria de alimentos nacional**, aliando solidez técnica, higiene e controle de qualidade ao apetite appeal, energia e frescor do açaí genuíno.

### Diretrizes de Identidade:
- **Zero aspecto de template amador:** Visual autoral, equilibrado e polido.
- **Cores com propósito funcional:** Cada matiz desempenha papel semântico estrito. Não permitir saturação excessiva que crie confusão visual ("carnaval").
- **Tipografia imponente e legível:** Títulos com personalidade geométrica marcante e corpos de texto com clareza cristalina.
- **Espaços generosos (White Space):** Uso estratégico do branco e fundos neutros para respiração visual e destaque das embalagens.

---

## 2. Paleta de Cores e Papéis Semânticos

| Família de Cor | Token CSS | Valor Hexadecimal | Função / Aplicação |
| :--- | :--- | :--- | :--- |
| **Roxo Institucional** | `--color-purple-primary`<br>`--color-purple-dark`<br>`--color-purple-light` | `#591C68`<br>`#3E124A`<br>`#7D2B91` | Cor mestre da marca Nutri Açaí. Header, acentos institucionais e **cor de apoio da Linha Food Service**. |
| **Verde Ação & Natureza**| `--color-green-primary`<br>`--color-green-hover`<br>`--color-green-light` | `#16A34A`<br>`#15803D`<br>`#DCFCE7` | Cor obrigatória para ações de conversão do **WhatsApp** e **cor de apoio da Linha Varejo**. |
| **Amarelo Energia** | `--color-yellow-primary`<br>`--color-yellow-light` | `#EAB308`<br>`#FEF9C3` | Destaque, atenção, energia solar, apoio de contraste em títulos e detalhes. |
| **Laranja Dinamismo** | `--color-orange-primary`<br>`--color-orange-light` | `#EA580C`<br>`#FFEDD5` | Dinamismo e entusiasmo juvenil. **Cor de apoio da Linha Nutrinho** (junto ao amarelo). |
| **Azul Confiança** | `--color-blue-primary`<br>`--color-blue-light` | `#0284C7`<br>`#E0F2FE` | Credibilidade industrial, higiene, selos técnicos e linha Frozen/Gelo. |
| **Neutros & Respiro** | `--color-white`<br>`--color-gray-50`<br>`--color-gray-100`<br>`--color-gray-700`<br>`--color-gray-900`| `#FFFFFF`<br>`#F8FAFC`<br>`#F1F5F9`<br>`#334155`<br>`#0F172A` | Fundos limpos, cartões, tipografia de alta legibilidade com contraste WCAG AAA. |

### Cores de Apoio por Linha de Produto:
- **Food Service:** Roxo predominante no detalhe/badge do card.
- **Varejo:** Verde predominante no detalhe/badge do card.
- **Nutrinho:** Laranja / Amarelo predominante no detalhe/badge do card.
- *Nota obrigatória:* As cores de apoio não devem envelopar o card inteiro; devem surgir em bordas sutis, tags de categoria e detalhes refinados.

---

## 3. Tipografia

- **Família Tipográfica Principal:** `Poppins`, `sans-serif` (ou `Manrope` como alternativa nativa de alta legibilidade).
- **Pesos Utilizados:**
  - `400` (Regular) — Textos corridos, legendas e descrições;
  - `500` (Medium) — Subtítulos, inputs, itens de menu;
  - `600` (SemiBold) — Botões, destaques, títulos secundários;
  - `700` / `800` (Bold / ExtraBold) — Títulos principais (H1, H2), números industriais.

### Escala Modular:
- **Hero Title (H1):** `clamp(2.25rem, 5vw, 3.75rem)` — `line-height: 1.15`
- **Section Title (H2):** `clamp(1.75rem, 3.5vw, 2.5rem)` — `line-height: 1.25`
- **Card / Subsection Title (H3):** `1.25rem` a `1.5rem` — `line-height: 1.35`
- **Body Text:** `1rem` (16px) a `1.125rem` (18px) — `line-height: 1.6`
- **Small / Captions:** `0.875rem` (14px) — `line-height: 1.5`

---

## 4. Botões e Ações (UI Components)

- **Geometria:** Cantos levemente arredondados (`border-radius: 10px` a `12px`).
- **Comportamento Hover / Focus:**
  - Pequena elevação: `transform: translateY(-2px)`;
  - Sombra sutil: `box-shadow: 0 8px 16px -4px rgba(...)`;
  - Transição imediata: `transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1)`.
- **Botão "Comprar pelo WhatsApp":**
  - **Sempre verde** (`#16A34A`), sem exceção.
  - Ícone oficial do WhatsApp alinhado à esquerda do texto.
- **Botão CTA Principal "Seja um Distribuidor":**
  - Destaque no Header e no Hero; visual contrastante para garantir tração de leads.

---

## 5. Cards de Produtos

- **Estrutura:**
  - Contêiner com cantos arredondados generosos (`border-radius: 20px`).
  - Fundo branco com borda sutil na cor da linha correspondente (`1.5px solid var(--linha-color)`).
  - Imagem do produto centralizada em fundo suave e limpo.
  - Tag de linha no topo (ex.: "Food Service", "Varejo", "Nutrinho").
  - Nome do produto e volume (ex.: "Açaí com Guaraná — Caixa 5L").
  - Botão de compra no rodapé do card: *"Comprar pelo WhatsApp"*.
- **Interação Desktop (Hover):**
  - Elevação do card: `transform: translateY(-6px)`;
  - Sombra refinada e difusa (`box-shadow: 0 20px 25px -5px rgba(0,0,0,0.08)`);
  - Microampliação da imagem da embalagem: `transform: scale(1.04)`;
  - Destaque interativo no botão.
- **Interação Mobile:** Otimizado para toque, sem estados de hover presos.

---

## 6. Faixa Horizontal de Diferenciais

- **Formato:** Faixa contínua com fundo neutro/suave com 6 blocos de diferenciais:
  1. Produção própria
  2. Frota própria
  3. Atendemos todo o Brasil
  4. Mix variado
  5. Qualidade
  6. Atendimento personalizado
- **Ícones:** Minimalistas (Lucide Icons), com cada ícone recebendo uma das cores da paleta oficial para vivacidade sem poluição.
- **Mobile:** Reorganização em grid equilibrado (2 colunas x 3 linhas) para leitura confortável e sem rolagem horizontal truncada.

---

## 7. Hero Section (Home)

- **Dimensões:** Desktop entre 80% e 90% da altura da viewport (`min-height: 80vh`).
- **Alinhamento:** Conteúdo textual e chamadas alinhados à esquerda.
- **Mídia:** Carrossel dinâmico com imagens reais da Nutri Açaí.
  - Efeito suave de transição: *Fade* com duração de 500ms;
  - Autoplay controlado com pausa automática quando o usuário passa o mouse ou foca no conteúdo;
  - Controles manuais elegantes: setas laterais discretas e dots de navegação inferiores;
  - Overlay em degradê sutil apenas onde necessário para garantir contraste de texto (WCAG AA).
- **Conteúdo Textual:**
  - Frase oficial configurável:  
    *"Cremosidade que conquista.  
    Qualidade que surpreende."*
  - Subtexto institucional conciso sobre a indústria gaúcha.
- **Ações:**
  - CTA 1 (Destaque): *"Conheça nossos produtos"* (ancora ou navega para `/produtos`).
  - CTA 2 (Secundário/B2B): *"Seja um Distribuidor"* (navega para `/seja-um-distribuidor`).
- **Responsividade Hero:** Imagens no mobile utilizam recorte e proporção próprios para não distorcer embalagens nem cortar rostos/elementos.

---

## 8. Carrossel de Depoimentos

- **Proposta:** Seção compacta e elegante com 3 depoimentos.
- **Fase Inicial:** Textos e identificações padronizados com indicação explícita de `PLACEHOLDER`.
- **Elementos:**
  - Aspas/ícone de citação;
  - Texto conciso de experiência;
  - Nome do parceiro e Nome da Empresa / Estabelecimento;
  - Foto opcional (o layout deve funcionar perfeitamente com avatar de iniciais se não houver foto).
- **Interação:** Transição suave, dots inferiores de paginação e controles acessíveis por teclado.
