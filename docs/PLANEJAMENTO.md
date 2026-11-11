# Planejamento para revisão — Nutri Açaí

Data: 16/10/2026. Estado: PLANEJAMENTO APROVADO. Preparação técnica e primeira Home autorizadas; demais páginas e publicação aguardam nova avaliação.

O usuário aprovou o diagnóstico técnico e a preservação dos originais. Não aprovou comercialmente logo, fotografias ou embalagens. A autorização posterior permite preparar a aplicação, instalar dependências essenciais e criar a primeira Home navegável local. Não autoriza implementação completa das demais páginas ou publicação.

## Proposta principal

Site institucional e comercial em português brasileiro, com catálogo consultivo e contato pelo WhatsApp confirmado no dossiê. Experiência centrada em conhecer as linhas, localizar formatos de produto e iniciar uma conversa comercial. Compra online, preços, estoque, pagamentos, login e área administrativa ficam fora da primeira versão proposta.

Base: Next.js/App Router, React, TypeScript estrito e Tailwind CSS. Conteúdo estruturado localmente, sem banco de dados ou CMS nesta etapa. Preservar os 25 SKUs da matriz V3, organizados nas cinco categorias existentes. Aprovação editorial do conteúdo e aprovação de cada imagem são independentes.

## Estrutura de páginas

| Rota proposta | Conteúdo e sequência | Ação principal |
|---|---|---|
| `/` | Apresentação e assinatura; acesso às cinco linhas; caminhos para consumo doméstico e negócios; apresentação institucional breve; área reservada ao vídeo; contato | Conhecer produtos; falar com a equipe |
| `/produtos` | Introdução, cinco categorias, filtros por categoria e volume, contagem e cartões dos 25 SKUs | Abrir produto |
| `/produtos/[slug]` | Nome, categoria, volume, embalagem e peso somente quando documentado; mídia aprovada ou placeholder; produtos relacionados da matriz | Consultar este produto no WhatsApp |
| `/food-service` | Formatos pertinentes da matriz; informações comerciais documentadas; contato consultivo | Falar sobre Food Service |
| `/distribuidores` | Apresentação para atacadistas, distribuidores e revendedores; produtos e convite para contato, sem prometer exclusividade, margem, pedido mínimo ou cobertura não confirmada | Conversar sobre distribuição |
| `/sobre` | Marca, assinatura e texto institucional validado; operação apenas com dados documentados; vídeo pendente | Conhecer produtos ou entrar em contato |
| `/contato` | WhatsApp +55 51 99248-5496; orientação para contato comercial | Abrir WhatsApp |
| `/privacidade` | Tratamento efetivamente adotado, canais e tecnologias reais; redação sujeita à revisão antes de publicação | Consultar informações de privacidade |
| Página 404 | Mensagem breve e links de retorno | Voltar aos produtos |

Navegação principal: Produtos, Food Service, Distribuidores, Sobre e Contato. Início acessível pelo nome da empresa. Rodapé com navegação, assinatura e privacidade. No mobile, menu compacto operável por teclado e leitor de tela. O nome da empresa será texto comum enquanto o logo estiver pendente; isso não constitui desenho de um novo logotipo.

Produto: propor um slug por SKU, por exemplo `/produtos/acai-zero-acucar-200ml`. Guaraná 5 L e 10 L terão registros e rotas diferentes, ambos inicialmente sem foto aprovada. Não criar páginas de Pitaya. Categorias serão filtros e seções do catálogo nesta versão; páginas editoriais específicas poderão ser propostas depois, se houver conteúdo suficiente.

Filtros: categoria e volume combináveis, estado representado na URL, botão de limpar e estado vazio com orientação. Sem busca textual na primeira versão para manter a navegação simples em 25 itens. Os links individuais deverão funcionar sem depender de filtros ou JavaScript. Não oferecer download de catálogo sem PDF final validado.

## Composição visual proposta

Home com texto de apresentação à esquerda e área de mídia à direita no desktop, empilhados no mobile. Enquanto não houver mídia aprovada, a área terá fundo neutro, contorno discreto e texto “Imagem do produto em breve”. Sem render de embalagem ou fotografia artificial. Abaixo, linhas de produtos e acessos comerciais com boa separação visual.

Catálogo com cartões consistentes e imagem em área reservada; nome e volume sempre em HTML. Página de produto com proporção de mídia preservada, informações à parte e CTA contextual. A seção institucional terá “Vídeo institucional em breve”, sem botão de reprodução fictício. O arquivo não é carregado enquanto não existir vídeo aprovado.

## Documentos para revisão

- [Arquitetura e estrutura futura](ARCHITECTURE.md).
- [Design system e comportamento responsivo](DESIGN_SYSTEM.md).
- [Organização e aprovação dos assets](ASSETS_STRATEGY.md).
- [SEO](SEO.md) e [mensuração](TRACKING.md).
- [Plano de execução e critérios de aceite](ROADMAP.md).
- [Pendências e decisões](PENDENCIAS.md).
- [Inventário auditado](ASSETS_INVENTORY.md).

## Decisões propostas para aprovação

1. Aprovar as páginas acima, catálogo consultivo com 25 SKUs e WhatsApp como conversão inicial.
2. Aprovar direção clara, roxo/verde como referências e placeholders identificados até validação das mídias.
3. Aprovar arquitetura local sem CMS, banco de dados ou formulário nesta primeira versão.
4. Autorizar posteriormente a preparação e implementação em etapas, com revisões visuais intermediárias.

A aprovação deste planejamento não será interpretada como aprovação automática de mídia ou autorização de publicação. Pendências de mídia não impedem construir uma prévia com placeholders depois que a implementação for autorizada.
