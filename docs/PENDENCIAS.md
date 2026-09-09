# REGISTRO FORMAL DE PENDÊNCIAS E VALIDAÇÕES COM O CLIENTE

---

## 1. Visão Geral

Este documento consolida todas as inconsistências identificadas durante a auditoria dos materiais brutos, lacunas de informação técnica e institucional, e itens que necessitam de alinhamento e validação formal com a diretoria da **Nutri Açaí** antes do início das etapas de design e desenvolvimento.

A regra fundamental de engenharia deste projeto é: **zero especulação — nenhuma informação técnica ou comercial é criada sem respaldo do cliente.**

---

## 2. Quadro de Pendências por Área

### 2.1. Identidade Visual e Branding
| ID | Item Pendente | Detalhamento da Necessidade | Impacto no Projeto |
| :--- | :--- | :--- | :--- |
| **BR-01** | **Arquivo Vetorial do Logotipo** | Envio do logotipo oficial em formato vetorial (`.svg`, `.ai` ou `.eps`) e versão em alta resolução com fundo transparente (`.png`). O arquivo atual é um screenshot do avatar do Instagram com baixa resolução. | Crítico para o Header, Footer e Favicons do site. |
| **BR-02** | **Manual de Identidade / Paleta de Cores** | Confirmação dos códigos hexadecimais oficiais das cores primárias e secundárias (tons de roxo, verde da folha, lilás de fundo). | Alto para padronização de UI/CSS. |
| **BR-03** | **Tipografia Institucional** | Confirmação da família tipográfica oficial da marca para títulos e textos corridos (ou autorização para adoção de fontes padrão web modernas e de alto desempenho como *Inter / Plus Jakarta Sans*). | Médio. |

---

### 2.2. Dados Corporativos e Contato Oficial
| ID | Item Pendente | Detalhamento da Necessidade | Impacto no Projeto |
| :--- | :--- | :--- | :--- |
| **CP-01** | **Dados Jurídicos** | Razão Social completa e CNPJ da empresa para inserção no rodapé institucional (obrigatório para conformidade legal e SEO de autoridade). | Alto para confiabilidade e conformidade legal. |
| **CP-02** | **Endereço Completo da Fábrica** | Logradouro, número, bairro e CEP da unidade fabril em Gravataí/RS. | Crítico para SEO Local, Google Maps e Schema `LocalBusiness`. |
| **CP-03** | **Canais Oficiais de Atendimento** | Número de telefone fixo/comercial, e-mails oficiais (ex: comercial@nutriacai..., distribuidor@...) e número oficial de WhatsApp comercial. | Crítico para botões de conversão e formulários. |

---

### 2.3. Infraestrutura Fabril e Processo de Produção
| ID | Item Pendente | Detalhamento da Necessidade | Impacto no Projeto |
| :--- | :--- | :--- | :--- |
| **FB-01** | **Etapas Reais do Processo Produtivo** | Mapeamento exato da linha de fabricação da Nutri Açaí (ex.: seleção e recepção de matéria-prima -> pasteurização / homogeneização -> dosagem e batimento -> envase mecânico -> túnel de congelamento rápido -> câmara fria). | Crítico para a página `/a-fabrica` (não inventar etapas). |
| **FB-02** | **Laboratório e Controle de Qualidade** | Especificação dos tipos de testes realizados (microbiológicos, brix, acidez, viscosidade) e se a fábrica possui registros/certificações como SIF, CISPOA, alvarás sanitários estaduais ou selos ANVISA. | Alto para posicionamento de autoridade e confiabilidade B2B. |
| **FB-03** | **Estrutura de Armazenagem e Logística** | Capacidade de estocagem das câmaras frigoríficas (ex.: toneladas ou paletes) e dinâmica de entrega interestadual (frota própria, transportadoras homologadas). | Médio/Alto para argumentação de vendas a distribuidores. |

---

### 2.4. Catálogo de Produtos e Embalagens
| ID | Item Pendente | Detalhamento da Necessidade | Impacto no Projeto |
| :--- | :--- | :--- | :--- |
| **PR-01** | **Nomenclatura "Frozen" vs "Frozen Grego"** | No texto do catálogo consta *"Linha Frozen — Caixa 5 L"*. Nas artes e caixas físicas fotografadas consta com grande destaque *"FROZEN GREGO"*. Validar com o cliente qual é a nomenclatura oficial para o site. | Alto para consistência no catálogo e SEO. |
| **PR-02** | **Volumetria e Toppings da Linha Nutrinho** | No catálogo, 7 sabores constam com 220 ml (com paçoca ou leite em pó no domo da tampa) e 3 sabores constam com 200 ml (Zero Açúcar, Pitaya e Cupuaçu). Validar se os potes de 200 ml também possuem tampa domo com acompanhamentos ou se utilizam selo plano liso. | Alto para precisão das especificações técnicas. |
| **PR-03** | **Tabelas Nutricionais e Alérgenos** | Confirmar se o cliente deseja disponibilizar as tabelas nutricionais, ingredientes e alertas de alérgenos (glúten, lactose, derivados de leite, amendoim) em cada modal/ficha de produto. | Médio para valor agregado e conformidade sanitária. |

---

### 2.5. Ativos Visuais e Fotografia
| ID | Item Pendente | Detalhamento da Necessidade | Impacto no Projeto |
| :--- | :--- | :--- | :--- |
| **IM-01** | **Packshots Oficiais dos Produtos** | Fotos de estúdio em alta resolução de todas as embalagens (caixas 5L/10L, baldes, potes 1,5L e Nutrinho) com fundo neutro/transparente. *As fotos atuais são prints de celular do Instagram e não podem ir para produção.* | Crítico para o visual profissional do catálogo. |
| **IM-02** | **Fotos Reais da Fábrica e Laboratório** | Fotografias profissionais das instalações reais em Gravataí/RS: fachada, maquinário, tanques, esteira de envase, sala de laboratório e técnicos trabalhando. | Crítico para a credibilidade da página `/a-fabrica`. |
| **IM-03** | **Fotos Ambientadas / Consumo** | Fotos com iluminação profissional de açaí servido em tigelas, com frutas e montagens atrativas para os banners principais. | Alto para apelo de conversão visual. |

---

### 2.6. Política Comercial de Distribuidores e Marca Própria
| ID | Item Pendente | Detalhamento da Necessidade | Impacto no Projeto |
| :--- | :--- | :--- | :--- |
| **DI-01** | **Planilha de Distribuidores Ativos** | Relação dos distribuidores oficiais atualmente ativos para alimentar a ferramenta `/encontre-um-distribuidor` (contendo Nome, Cidade, Estado, Regiões atendidas e WhatsApp autorizado para publicação). | Crítico para o funcionamento da ferramenta de busca. |
| **DI-02** | **Pré-requisitos para Novos Distribuidores** | Critérios mínimos de qualificação para a página `/seja-um-distribuidor` (ex.: pedido mínimo inicial em caixas/paletes, necessidade de veículo refrigerado próprio, política sobre exclusividade de praça). | Alto para o alinhamento da mensagem e formulário B2B. |
| **MP-01** | **Condições para Marca Própria (Private Label)** | Volume mínimo de pedido (MOQ) para terceirização fabril e se o cliente desenvolve formulações exclusivas sob medida. | Alto para a página `/marca-propria`. |
