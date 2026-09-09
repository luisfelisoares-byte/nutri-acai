# ESTRATÉGIA E ESPECIFICAÇÃO DO EIXO DISTRIBUIDORES

---

## 1. Visão Geral e Duplo Objetivo

A área de distribuidores é o coração comercial do portal da Nutri Açaí. Ela deve atender com precisão cirúrgica a dois perfis com necessidades completamente distintas:

1. **Pilar A — Encontrar um Distribuidor:**  
   Público: Pequenos varejistas, comércios de bairro, padarias, lanchonetes e consumidores locais que desejam comprar produtos Nutri Açaí em volumes fracionados ou regulares em sua cidade.
2. **Pilar B — Seja um Distribuidor (Expansão B2B):**  
   Público: Empresas de distribuição logística, atacadistas de alimentos e investidores que desejam incorporar a linha Nutri Açaí ao seu portfólio de representação regional.

---

## 2. Pilar A: Solução "Encontre um Distribuidor" (`/encontre-um-distribuidor`)

### 2.1. Experiência do Usuário (UX) e Fluxo de Busca
- O usuário acessa a página e visualiza imediatamente uma barra de busca rápida e intuitiva.
- **Filtros Dinâmicos:**
  - **Estado (UF):** Dropdown com os estados onde a Nutri Açaí possui distribuidores cadastrados.
  - **Cidade:** Dropdown condicional que carrega as cidades disponíveis após a seleção do estado.
  - **Campo de Busca Livre:** Permite digitar o nome da cidade ou bairro.
- **Exibição dos Resultados:**  
  Cards informativos limpos contendo apenas os dados formalmente autorizados pelo distribuidor e validados pelo cliente:
  - Nome Fantasia / Razão Social;
  - Região de cobertura / Bairros atendidos;
  - Linhas comercializadas (ex.: Food Service, Varejo, Nutrinho);
  - Telefone comercial / Link direto para WhatsApp com mensagem pré-formatada:  
    `"Olá! Encontrei seu contato no site oficial da Nutri Açaí e gostaria de cotar produtos na minha região."`
  - E-mail e endereço (caso autorizado).

### 2.2. Modelo de Dados Técnico (TypeScript Interface)
```typescript
export interface Distributor {
  id: string;
  name: string;
  tradingName?: string;
  state: string; // Ex: 'RS', 'SC', 'PR', 'SP'
  city: string;  // Ex: 'Porto Alegre', 'Gravataí', 'Canoas'
  coverageArea: string[]; // Ex: ['Região Metropolitana', 'Vale dos Sinos']
  phone?: string;
  whatsapp?: string; // Formato E.164: 5551999999999
  email?: string;
  address?: string;
  channelsServed: ('food-service' | 'varejo' | 'nutrinho')[];
  isVerified: boolean;
}
```

### 2.3. Tratamento de Cidades sem Distribuidor (Estratégia de Fallback)
Quando o usuário buscar uma região que ainda não possui distribuidor credenciado:
- A interface **nunca** exibirá uma tela de erro vazia desanimadora ("Nenhum resultado").
- Exibirá um componente amigável de conversão:
  > *"Ainda não temos um distribuidor oficial cadastrado em sua cidade.*  
  > *Deseja ser o distribuidor exclusivo da sua região ou fazer um pedido direto da fábrica para sua empresa?*  
  > *[Fale com Nossa Central de Atendimento] | [Quero ser Distribuidor]"*

---

## 3. Pilar B: Solução "Seja um Distribuidor" (`/seja-um-distribuidor`)

### 3.1. Posicionamento e Proposta de Valor
A página atua como uma **Landing Page B2B de Alta Conversão**, estruturada para apresentar a solidez da Nutri Açaí sem promessas infladas ou especulações comerciais não confirmadas.

**Tópicos Abordados (Baseados em Fatos Confirmados):**
- **Capacidade Fabril Sólida:** Produção superior a 9 toneladas/dia, garantindo que o distribuidor nunca sofra com falta de mercadoria na alta temporada.
- **Laboratório Próprio e Padronização:** Estabilidade de sabor, cor e textura lote a lote, eliminando reclamações no ponto de venda.
- **Mix Completo de Alta Giro:** De caixas de 10L para grandes açaiterias a potes individuais Nutrinho com toppings para mercados.
- **Origem e Tradição:** Indústria consolidada desde 2022 em Gravataí/RS com logística para todo o território nacional.

> [!IMPORTANT]  
> **Regra de Conformidade Comercial:**  
> Não serão inventadas margens de lucro percentuais ("lucratividade de 40%"), garantias automáticas de exclusividade territorial de área ou condições de crédito/pagamento antes da validação formal da Diretoria Comercial da Nutri Açaí. O texto destacará a oportunidade de parceria direta com a fábrica e convidará para alinhamento das condições comerciais vigentes.

### 3.2. Formulário de Qualificação de Lead B2B
O formulário de candidatura deve ser enxuto o suficiente para não desestimular o interessado, mas qualificado o suficiente para filtrar curiosos:

| Campo | Tipo | Obrigatoriedade | Justificativa |
| :--- | :--- | :--- | :--- |
| **Nome Completo** | Texto | Obrigatório | Contato do decisor comercial. |
| **Empresa / Razão Social** | Texto | Obrigatório | Identificação da pessoa jurídica. |
| **CNPJ** | Texto | Opcional / Recomendado | Verificação de atuação no segmento alimentício/distribuição. |
| **E-mail Corporativo** | E-mail | Obrigatório | Canal formal de envio de catálogo e tabela de preços. |
| **Telefone / WhatsApp** | Telefone | Obrigatório | Contato imediato do representante da fábrica. |
| **Estado (UF) e Cidade de Atuação** | Select / Texto | Obrigatório | Mapeamento territorial para checagem de praça disponível. |
| **Possui Frota Própria com Refrigeração?** | Select (Sim / Não / Terceirizada) | Opcional | Qualificação logística básica para transporte de congelados. |
| **Possui Câmaras Frigoríficas de Estocagem?** | Select (Sim / Não) | Opcional | Capacidade de recebimento de cargas paletizadas. |
| **Mensagem / Observações** | Área de Texto | Opcional | Espaço para detalhamento da área de atuação pretendida. |

---

## 4. Governança e Privacidade de Dados (LGPD)

1. **Exibição de Distribuidores:** Apenas os parceiros que forneceram anuência expressa terão seus nomes, telefones e e-mails divulgados publicamente na ferramenta de localização.
2. **Captação de Novos Distribuidores:** O formulário conterá checkbox de consentimento de tratamento de dados comerciais para fins exclusivos de avaliação de parceria, em total conformidade com a LGPD (Lei nº 13.709/2018).
