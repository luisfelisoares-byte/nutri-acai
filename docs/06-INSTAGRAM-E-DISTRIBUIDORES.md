# 06 — INSTAGRAM E DISTRIBUIDORES

## 1. Seção Instagram na Home

### Diretrizes de Exibição:
- **Posicionamento:** Próxima ao rodapé da Home (após Depoimentos e antes da chamada do RH).
- **Proposta:** Apresentar a presença ativa da marca nas redes sociais sem poluir a experiência nem degradar o tempo de carregamento da página.
- **Formato:** Grade compacta e responsiva de 4 a 6 itens (fotos, vídeos institucionais ou Reels da fábrica/produtos).
- **Curadoria:** Mecanismo que permite selecionar e fixar posts com maior apelo institucional (ex.: processos na fábrica, cremosidade, embalagens).
- **Interação:**
  - Hover suave com ícone do Instagram e indicador de curtidas/visualizações se disponível.
  - Ao clicar em um post, o usuário é direcionado para a publicação original ou para o perfil oficial.
  - Botão de ação: **"Ver Instagram"** ➔ direciona para `https://www.instagram.com/nutriacaioficial/` (`@nutriacaioficial`) em nova aba.

### Arquitetura de Fallback Obrigatório:
- Redes sociais de terceiros sofrem frequentes bloqueios de CORS, tokens expirados ou limites de requisição.
- O componente possui **fallback estático local integrado**, alimentado pelas capturas de tela e assets oficiais armazenados em `src/assets/images/instagram/`.
- Caso a API externa falhe ou não responda em até 2 segundos, a interface renderiza instantaneamente o conjunto curado de posts locais, garantindo **zero falhas visuais** para o usuário.
- **Proibição Estrita:** **NÃO** transformar a seção em um feed infinito de rolagem na Home.

---

## 2. Página "Encontre um Distribuidor" (`/distribuidores`)

### Objetivo da Página:
Permitir que proprietários de lanchonetes, açaiterias e consumidores finais encontrem rapidamente o ponto de fornecimento mais próximo para comprar os produtos Nutri Açaí com agilidade logística.

### Mecanismo de Busca e Filtros em Cascata:
A busca deve ser intuitiva, encadeada e reativa:

```
[ Selecionar Região ]  ➔  [ Filtrar Estado ]  ➔  [ Filtrar Cidade ]
                                                        │
                                                        ▼
                                           [ Exibir Cards de Distribuidores ]
```

1. **Filtro de Região:** Sul, Sudeste, Centro-Oeste, Norte, Nordeste.
2. **Filtro de Estado:** Preenchido dinamicamente apenas com os estados que possuem distribuidores cadastrados.
3. **Filtro de Cidade:** Dependente do Estado selecionado.

---

## 3. Estrutura do Card de Distribuidor

Cada distribuidor localizado é exibido em um card moderno com borda suave e tipografia destacada:

```
┌──────────────────────────────────────────────┐
│  Distribuidora Gaúcha de Açaí               │
│  Porto Alegre, RS                            │
│                                              │
│  [ WhatsApp: (51) 98765-4321 ]               │
│  [ Ver Catálogo no WhatsApp ] (se disponível)│
│  [ Baixar Catálogo PDF ]      (se disponível)│
│                                              │
│  📍 Como Chegar (Abre Google Maps)           │
└──────────────────────────────────────────────┘
```

### Campos do Card:
- **Nome Fantasia:** Nome comercial do parceiro.
- **Cidade / Estado:** Localidade principal de atuação (o endereço completo não precisa poluir o card).
- **Botão de WhatsApp:** Link direto para contato comercial do distribuidor.
- **Catálogo WhatsApp:** Botão de catálogo do distribuidor, se fornecido pela empresa. Caso não exista, o botão é omitido (proibido inventar link).
- **Catálogo PDF:** Link direto para download do catálogo do distribuidor. Se não houver, o botão é omitido.
- **Botão "Como Chegar":** Abre o Google Maps em nova aba já com a rota ou endereço geolocalizado do distribuidor.

---

## 4. Política Anti-Delírio para Distribuidores

> [!WARNING]  
> A Nutri Açaí ainda está em fase de consolidação da lista pública de distribuidores oficiais homologados.  
> Durante as etapas de desenvolvimento, a base de dados de distribuidores conterá **estritamente registros marcados como PLACEHOLDER**, deixando explícito no card:  
> `[PLACEHOLDER — Distribuidor homologado pendente]`.  
> É terminantemente proibido inventar nomes comerciais, contatos ou endereços fictícios que possam induzir o usuário ou cliente ao erro.
