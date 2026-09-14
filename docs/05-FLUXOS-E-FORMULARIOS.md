# 05 — FLUXOS E FORMULÁRIOS

## 1. Mapeamento Geral de Fluxos de Conversão

O site opera com três fluxos principais de conversão, todos direcionados para canais dedicados no WhatsApp oficial da empresa, assegurando agilidade no atendimento comercial e triagem precisa de contatos:

```
[ Usuário Navega ]
       │
       ├──▶ Interesse em Produtos / Compra ──▶ WhatsApp Vendas: (51) 8962-1635
       │
       ├──▶ Parceria B2B / Distribuição    ──▶ Form Único ──▶ WhatsApp Comercial: (51) 99428-1252
       │
       └──▶ Candidatura a Emprego (RH)     ──▶ WhatsApp RH: (51) 99246-5908
```

---

## 2. Fluxo de Compra de Produtos (Página `/produtos`)

### Regra de Arquitetura:
- Os produtos **NÃO** aparecem na Home.
- O site **NÃO** exibe preços e **NÃO** cria páginas individuais por produto.
- A consulta e negociação de preços ocorre via WhatsApp de Vendas ou Catálogo Oficial.

### Etapas do Fluxo:
1. O usuário acessa a página `/produtos`.
2. No topo da página, encontra filtros de acesso rápido pelas 3 linhas da marca:
   - `[Food Service]` (Apoio Roxo)
   - `[Varejo]` (Apoio Verde)
   - `[Nutrinho]` (Apoio Laranja/Amarelo)
3. Dentro de cada linha, o usuário pode filtrar por **Volume** (ex.: 5L, 10L, 12L, 3,6L, 1,5L, 220ml) e por **Sabores**.
4. Cada card exibe a embalagem oficial, o nome do produto, o volume e o botão verde destacado: **"Comprar pelo WhatsApp"**.
5. Ao clicar, o WhatsApp Web / App é aberto em nova aba para o número **`(51) 8962-1635`** com mensagem pré-formatada:

```text
Olá! Tenho interesse no {Nome do Produto} — {Volume} ({Linha}) da Nutri Açaí. Gostaria de saber disponibilidade e condições de compra.
```

*Exemplo real montado:*
> *"Olá! Tenho interesse no Açaí com Morango — 5 Litros (Food Service) da Nutri Açaí. Gostaria de saber disponibilidade e condições de compra."*

---

## 3. Fluxo "Seja um Distribuidor" (Página `/seja-um-distribuidor`)

### Estrutura da Página:
1. **Cabeçalho Institucional & Benefícios:**
   - Chamada: *"Por que ser um distribuidor Nutri Açaí?"*
   - 3 a 4 benefícios objetivos:
     - Produção industrial própria (>9 toneladas/dia);
     - Entrega ágil com frota própria para todo o Brasil;
     - Mix completo e produtos de alta rentabilidade;
     - Suporte comercial e marketing para o ponto de venda.
2. **Formulário de Qualificação:**
   - **Formulário único**, direto e objetivo.
   - **PROIBIDO** dividir o formulário em etapas ou wizards que aumentem atrito e abandono.

### Campos do Formulário:
| Campo | Tipo / Controle | Obrigatório? | Regra / Máscara |
| :--- | :--- | :--- | :--- |
| **Nome Completo** | `input[type="text"]` | Sim | Mínimo de 3 caracteres |
| **Nome da Empresa** | `input[type="text"]` | Sim | Razão social ou nome fantasia |
| **WhatsApp** | `input[type="tel"]` | Sim | Máscara dinâmica: `(99) 99999-9999` |
| **E-mail** | `input[type="email"]` | Sim | Validação de formato de e-mail |
| **Estado** | `select` | Sim | Dropdown com os 26 estados + DF |
| **Cidade** | `input[type="text"]` / `select` | Sim | Filtrado pelo estado selecionado |
| **Região de Interesse** | `input[type="text"]` | Sim | Campo aberto (ex.: "Metropolitana de Porto Alegre", "Serra", etc.) |
| **Já trabalha com distribuição?** | `radio` / `select` | Sim | Opções: `Sim` ou `Não` |
| **Segmento / Atividade Principal** | `input[type="text"]` | Sim | Ex.: Distribuidora de Alimentos, Sorveteria, Supermercados |
| **Mensagem / Observações** | `textarea` | Não | Campo opcional para detalhes adicionais |

### Princípios de Validação (UX):
- **Orientar, não punir:** Mensagens claras em linha (inline), visualmente acolhedoras.
- Indicador de campos obrigatórios simples e nítido (`*`).
- Não bloquear a digitação com validações excessivamente restritivas.

### Processamento do Envio:
1. Ao clicar no botão **"Tenho interesse em ser Distribuidor"**, o formulário valida os dados.
2. É exibido um feedback visual elegante na tela:
   > *"Dados preparados! Você será direcionado ao WhatsApp Comercial."*
3. O sistema formata a mensagem com todos os dados preenchidos e dispara a abertura do WhatsApp no número comercial **`(51) 99428-1252`**:

```text
Olá! Preenchi a proposta para Distribuidor no site Nutri Açaí:

• Nome: {nome}
• Empresa: {empresa}
• WhatsApp: {whatsapp}
• E-mail: {email}
• Localização: {cidade}/{estado}
• Região de Interesse: {regiao}
• Já atua com distribuição?: {jaDistribui}
• Segmento: {segmento}
• Mensagem: {mensagem}

Gostaria de conhecer as condições para novos distribuidores!
```

---

## 4. Fluxo "Trabalhe Conosco" (Página `/trabalhe-conosco`)

- **Conceito:** Página enxuta, clara e acolhedora.
- **Estrutura:**
  - Breve texto institucional sobre o time da fábrica gaúcha, ambiente de trabalho dinâmico e crescimento conjunto;
  - Orientações sobre perfis desejados (produção, logística, vendas, administrativo);
  - **Botão Principal de Ação:** *"Envie seu currículo"*.
- **Comportamento:**
  - Abre diretamente o WhatsApp exclusivo do setor de **Recursos Humanos (`(51) 99246-5908`)**.
  - Mensagem automática pré-preenchida:
    > *"Olá! Gostaria de enviar meu currículo para futuras oportunidades na Nutri Açaí."*
  - **Não há formulário nem upload de PDF no site nesta etapa.**

---

## 5. Fluxo de Acesso ao Catálogo Oficial

- Presente no Menu Desktop, Menu Mobile e Footer.
- **Link Oficial:** `https://wa.me/c/555189621635` (abre diretamente o catálogo de produtos oficial do WhatsApp comercial).
- Sempre configurado com `target="_blank"` e `rel="noopener noreferrer"`.
- O catálogo oficial do WhatsApp é a fonte primária de preços e volumes para os clientes.
