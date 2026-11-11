# Auditoria geral do site Nutri Açaí

## Pacote consolidado — Home e nomenclatura, 20/10/2026

Escopo autorizado: remoção de duas seções comerciais da Home, retirada de Nossas linhas da navegação, CTA redirecionado para /produtos, categoria visível Linha Zero e hero com mais destaque/respiro. Nenhum dado individual de produto alterado; fotografia atual mantida provisoriamente por ausência de alternativa comprovada adequada. Não houve nova auditoria geral, liberação comercial ou publicação. Resultados e arquivos em PREVIEW_REPORT; pendências de empresa e foto definitiva em PENDENCIAS.


## Atualização pontual: hero e acesso RH — 20/10/2026

Hero substituído pela arte autorizada exata assets/imagem para hero.png, importação direta sem edição, proporção 3:2 e remoção do crédito/legenda provisórios do hero. Trabalhe Conosco na navegação compartilhada desktop/mobile e rodapé, destino existente /#trabalhe-conosco; canal RH continua desativado. Inventário revisão 3 com 94 arquivos e adição rastreável. Lint, TypeScript, build e verify:assets exit 0; Chrome validado em 375/1440 px e navegação sem overflow nas larguras intermediárias. Evidências e arquivos em PREVIEW_REPORT. Sem nova auditoria geral, dependências ou deploy. Pendências de publicação permanecem.


## Atualização pontual: pesquisa e fotografia oficial — 20/10/2026

Distribuidores agora tem pesquisa GET municipal com sugestões acessíveis e consulta baseada exclusivamente em registros confirmados/aprovados. Sem dados oficiais, mostra preparação e ausência de cadastro; exemplo de Campo Bom não aparece mais na interface/opções, permanecendo apenas na fonte histórica. P21 segue pendente de informações reais da empresa.

Fotografia institucional de `/#sobre` substituída pelo arquivo oficial exato assets/produção.jpg, importado diretamente sem cópia manual em public. Hash original conferido contra o arquivo servido pelo build; proporção natural preservada, legenda e atribuição provisórias removidas somente dessa seção. Hero, produtos, logo/favicon, catálogo e conteúdo institucional restante preservados. Inventário passou a 93 arquivos com adição nominal autorizada, sem regravar hashes antigos. Resultados novos em PREVIEW_REPORT; sem nova auditoria geral, instalação ou deploy.

## Atualização pontual: Distribuidores — 20/10/2026

Interface e metadata usam Distribuidores em lugar de Fornecedores. Rota oficial `/distribuidores`; `/fornecedores` preservada como redirect permanente 308. Navegação compartilhada do cabeçalho/rodapé ganhou estados ativo, hover e foco; resultados executados em PREVIEW_REPORT. Não refeita a auditoria geral. A pendência comercial do diretório permanece: somente um exemplo sem dados/contatos oficiais. Originais, marca, catálogo, produtos, RH e bloqueios de indexação preservados; sem deploy. Referências à rota anterior nos relatórios abaixo são históricas.

## Regularização pontual posterior — 20/10/2026

Atualização autorizada, sem refazer auditoria geral: a exclusão de crop_zero220_label.png foi confirmada pelo usuário e não há dependência funcional. Recorte não procurado/recriado. Três outros conteúdos foram recuperados como cópias exatas em assets/history; fontes e hashes em ASSETS_INVENTORY. Manifesto histórico original preservado; inventário v2 e verificador diferenciam ausências, alterações, adições e exclusão autorizada. P19/A04 regularizada, conforme testes reais em PREVIEW_REPORT. A informação histórica de quatro conteúdos sem localização não é mais o estado vigente.

A06: texto da 404 atualizado e adicionada saída para Produtos, mantendo estilo/responsividade. A01: metadata da Home revisada; canonical condicionado a domínio explicitamente confirmado; sitemap implementado com Home/Produtos, vazio enquanto domínio indefinido. Diretório demonstrativo fora do sitemap. Meta noindex, X-Robots-Tag e Disallow: / continuam ativos, inclusive depois de configurar domínio. Não houve liberação de indexação ou deploy.

Publicação continua impedida pela falta de domínio/hospedagem, aceite comercial/mídias e definição do diretório público. RH segue desativado até canal confirmado, ou decisão explícita de lançar indisponível. Revisão de privacidade, acessibilidade complementar e ambiente público ainda necessária. Relatórios anteriores preservados abaixo; esta seção atualiza apenas P19, 404 e preparação de SEO, sem aprovação comercial nova.

## Auditoria final antes da publicação — 20/10/2026

**Parecer: prévia funcional aprovada nos testes descritos abaixo; publicação ainda não liberada.** Esta seção substitui o diagnóstico histórico abaixo quando houver divergência. Etapa de diagnóstico/documentação: nenhum ajuste de aplicação, identidade, mídia, produto, contato, PDF ou indexação foi aplicado. Nenhuma dependência instalada e nenhum deploy.

### Fontes e decisões preservadas

Lido integralmente pelo XML o dossiê original `G:/ARQUIVOS FELIPE/SITES CRIADOS/NUTRI/DOSSIE V3/Dossie_Nutri_Acai_V3_Fonte_de_Verdade.docx`. Consultados PREVIEW_REPORT, PENDENCIAS, ASSETS_INVENTORY, ASSETS_STRATEGY, README, ARCHITECTURE, SEO, TECHNICAL_DECISIONS, PRODUCT_MATRIX, ROADMAP, TRACKING, DESIGN_SYSTEM e CATALOGO_INTEGRATION_REPORT. Inspecionados as três páginas, layout/cabeçalho/rodapé, 404, fontes tipadas, componentes de mídia, sticky, CSS e configurações.

A confirmação posterior das **seis categorias 8/6/2/2/4/3**, registrada em PRODUCT_MATRIX, prevalece sobre as cinco do dossiê. Logo/favicons já aprovados: não reabrir essa decisão. São **25 SKUs com imagem, zero placeholders neutros e 24 arquivos de imagem de produto**; Guaraná 5/10 L compartilham uma imagem provisória por autorização expressa, com avisos. Leitinho 1,5 L já está resolvido; não solicitar novamente sua foto como ausente. Autorização de montagem da prévia não equivale à aprovação comercial final de todas as imagens. V7 já aprovado para disponibilização; diferenças editoriais históricas em relação ao dossiê não revogam essa autorização e não autorizam editar o PDF.

### 1. O que está aprovado tecnicamente

| Item | Resultado observado nesta auditoria |
|---|---|
| Home, Produtos e Fornecedores | HTTP 200 em 320, 375, 768 e 1440 px: 12 combinações; imagens decodificadas e nenhum overflow horizontal. Capturas nas duas larguras principais. |
| Navegação | 30 cliques no menu (cinco destinos × três páginas de origem × 375/1440 px); destinos e títulos das âncoras abaixo do cabeçalho. Menu abre/fecha por Escape, devolve foco ao botão e não amplia a largura. |
| Links | 36 destinos internos deduplicados por página de origem, todos HTTP 200 e âncoras presentes. URLs externas conferidas: WhatsApp comercial documentado ou créditos/licenças das referências. Não houve envio de mensagens nem comprovação de atendimento externo. |
| Produtos | 25 IDs confrontados com a fonte; seis categorias e contagens corretas; filtros por categoria, combinação Linha Saudável/200 ml, vazio, inválido, limpar e GET sem JavaScript passaram. As 42 combinações e a ordenação completas já aprovadas em 19/10 não foram refeitas sem mudança dessas regras. |
| Sticky | 12 verificações: seis categorias × 375/1440 px, título abaixo do cabeçalho e anterior sem sobreposição ao próximo. Comportamento de menu aberto já aprovado em 20/10 na entrega do sticky; não reimplementado. |
| Institucional e RH | Sobre, negócios, contato e Trabalhe Conosco são seções da Home; RH desativado, sem link de envio, upload ou armazenamento. Único formulário é o filtro GET de produtos. |
| Fornecedores | Um cartão explicitamente demonstrativo, sem links de fornecedor ativos. Contato institucional separado. Isso aprova a proteção da prévia, não um diretório comercial. |
| Erros | Endereço inexistente responde 404 real e botão de retorno funciona. Nenhuma exceção JavaScript nem requisição interrompida no fluxo principal. O console registra 404 esperado na rota inexistente e um aviso de preload descrito adiante. |
| Acessibilidade amostrada | `lang=pt-BR`, um h1 por página, landmarks, imagens com alt, selects rotulados, nenhum controle sem nome ou ID duplicado no levantamento. Dezesseis passos de Tab por página em 375/1440 (96 passos), sem foco encoberto; skip link leva o próximo Tab para dentro de main nas três páginas. Movimento reduzido produz scroll-behavior auto. Não é certificação integral WCAG. |
| PDF oficial | HTTP 200, application/pdf, 16.822.687 bytes, download acionado; original, público, resposta e download com SHA-256 `8719d38b610810d14305c9b1757a862dc779de098b6611ba65fc6e22272052e5`. Abertura em nova aba já aprovada anteriormente; não refeita nesta rodada. |
| Dependências | `npm audit --json`: exit 0, zero vulnerabilidades reportadas pelo registro para o lockfile consultado. Não significa ausência universal de riscos. |
| Preservação atual | 125 arquivos de src/assets/public e configurações/package/lockfile comparados no início/fim do teste principal: nenhuma mudança. Cada uma das 24 cópias públicas de produto tem original atual idêntico por SHA-256. A integridade histórica é uma questão separada, descrita em A04. |

Lint, TypeScript e build final passaram com exit 0 nesta execução. Após o build, a prévia foi restaurada em **http://127.0.0.1:3018/produtos** e o Chrome reconfirmou HTTP 200 nas três páginas, 25 produtos, Frutados sticky em 77 px no celular e nenhuma exceção JavaScript. Os 125 hashes continuaram iguais. O adendo de encerramento de PREVIEW_REPORT distingue a bateria completa no build anterior da conferência após reconstrução, ambos com a mesma fonte.

### SEO, produção e desempenho observados

As três páginas têm títulos/descrições distintos. Home ainda usa “Prévia institucional”; Fornecedores descreve demonstração. Todas herdam meta `noindex, nofollow`; a configuração aplica `X-Robots-Tag: noindex, nofollow, noarchive` a todas as rotas, inclusive PDF. `/robots.txt` responde 200 com `Disallow: /`. **Não remover esses bloqueios nesta auditoria.**

Canonical, Open Graph e JSON-LD estão ausentes. `/sitemap.xml` responde 404. O domínio não está confirmado e `NEXT_PUBLIC_SITE_URL` é somente exemplo vazio, sem consumo pela implementação. `site.preview` não controla os bloqueios: mudar apenas essa flag ou uma variável não prepara produção. A liberação futura deve tratar metadata, headers, robots e filtros conjuntamente. Não incluir consultas de filtros indiscriminadamente no sitemap nem inventar domínio, endereço, preço, estoque ou avaliações.

O runtime atual é Next.js com servidor; `/produtos` é dinâmica por searchParams. Os scripts vinculam o servidor a 127.0.0.1, apropriado à prévia; hospedagem, domínio, HTTPS, ambiente e operação precisam de definição posterior. Não há exportação estática configurada. `poweredByHeader: false`; sem tracking ativo ou backend de contato. Não foi auditada uma infraestrutura de produção inexistente.

**Desempenho: duas amostras locais, não Lighthouse/CWV de campo.** Chrome 152, viewport 375 × 812, cache do navegador desabilitado, CPU 4×, latência 150 ms, download 200.000 B/s e upload 93.750 B/s; leitura 5 s após load. Home: LCP **1.096 ms** (h1), soma dos deslocamentos sem interação **0**, recursos transferidos **499.666 B**. Produtos: LCP **932 ms** (parágrafo), deslocamentos **0**, recursos **541.971 B**. Esses valores abrangem a abertura, não o download de todo o catálogo ao rolar; a cache de otimização de imagens do servidor já estava aquecida. Não foi medido INP, nem declarado CLS por janelas de sessão, nem desempenho de aparelhos físicos/produção. Nenhuma requisição externa de recurso nessas amostras. As imagens usam Next Image, dimensões/proporção reservadas e lazy loading, com preload da referência hero; PDF só é solicitado por ação do usuário. Os originais públicos chegam a 3,19 MB por imagem, embora as respostas responsivas sejam otimizadas.

### 2. O que ainda precisa ser corrigido — prioridade e impacto

P1 = impede tratar a versão como publicação comercial pronta; P2 = deve ser resolvido na preparação/revisão, sem defeito impeditivo comprovado na prévia; P3 = acabamento. Nenhum P0 foi identificado no escopo testado.

| ID / prioridade | Evidência e impacto | Próxima ação, ainda não aplicada |
|---|---|---|
| A01 / P1 | Bloqueio global de indexação, domínio indefinido, canonical/sitemap ausentes e metadata provisória. Publicar assim mantém intenção de prévia e prejudica descoberta orgânica. | Confirmar origem/hospedagem; preparar configuração de produção separada, canonical e política de filtros, sitemap das URLs aprovadas e metadata final; validar no ambiente real antes de liberar indexação. |
| A02 / P1 | Avisos de prévia, referências ilustrativas, 25 legendas de mídia pendente e Guaraná 5/10 L provisórios. Não há aceite comercial final de todas as mídias. | Empresa aprovar conteúdo/embalagens/imagens ou decidir substituições e textos públicos. Não apagar avisos para simular aprovação. PDF/identidade aprovados permanecem intactos. |
| A03 / P1 para publicar o diretório como funcional; P2 para RH | Fornecedores contém somente exemplo; RH indisponível por decisão válida. | Confirmar fornecedores e autorização de exposição, ou aprovar escopo público sem demonstração. RH pode continuar indisponível se a empresa aprovar; ativação exige canal oficial, finalidade e orientação de privacidade. Não encaminhar currículos ao comercial por inferência. |
| A04 / P2 — P19 e preservação histórica | `npm run verify:assets` exit 1: “A quantidade de arquivos originais mudou.” São 56 arquivos atuais contra 58 históricos. Seis nomes antigos representam quatro conteúdos únicos não localizados por hash em assets/public. Nenhuma cópia ativa de produto está sem original atual. | Reconciliar o inventário por hashes, esclarecer os quatro conteúdos ausentes e preservar/referenciar backups antes de alterar o verificador. Não reduzir a contagem esperada apenas para fazer o teste passar. Essa auditoria não removeu/recriou originais. |
| A05 / P2 | `/privacidade` 404; não há formulário de leads, currículos, cookies de analytics ou tracking ativos. WhatsApp é terceiro. | Empresa definir informações e texto de privacidade aplicáveis ao escopo público; política e fluxos específicos antes de ativar recrutamento/coleta/tracking. Não adicionar banner ou consentimento fictício sem tecnologia definida. Não é parecer jurídico. |
| A06 / P3 | Texto de 404 afirma que a prévia apresenta apenas a página inicial. | Ajustar a redação na etapa autorizada de conteúdo final, preservando status 404 e retorno. |
| A07 / P3, observação | Console registrou preload de uma variante da imagem hero não utilizado logo após load durante a bateria com redimensionamentos. Não houve erro de imagem ou exceção. | Reproduzir em acesso frio isolado com viewport fixa antes de considerar ajuste de preload/sizes. Não remover preload por um aviso isolado. |
| A08 / P2 para aceite final | Testes limitados a Chrome e teclado/semântica amostrados; sem leitor de tela, verificação integral de contraste, zoom, Safari/Firefox, INP ou infraestrutura real. | Completar validação representativa de acessibilidade, celular e hospedagem antes do aceite público; não interpretar a amostra como conformidade integral. |

A04 — arquivos históricos não localizados por conteúdo: `assets/acai_natural_5l.png` e `assets/Açaí Natural — 5 L.png` (mesmo hash); `assets/acai_trufado_leitinho_1_5l.png` e `assets/Açaí Trufado Leitinho — 1,5 L.png` (mesmo hash); `assets/crop_zero220_label.png`; `assets/Screenshot_20260905-182832_Instagram.jpg`. São referências históricas, não pedidos para substituir as imagens atuais já integradas. Autoria e momento da ausência não determinados. Caminhos/hashes atuais em assets-reconciliation.json.

### 3. O que depende de confirmação da empresa

- Domínio/origem pública, hospedagem e responsável pela publicação/operação; e-mail, CNPJ e endereço somente se forem efetivamente exibidos e confirmados. Não são todos campos obrigatórios para manter a prévia.
- Aceite humano final dos textos, nomes, volumes, pesos e embalagens vigentes; sem novos preços, claims, disponibilidade ou promessas.
- Liberação comercial das imagens atuais, destinação dos dois Guaranás provisórios e das referências ilustrativas. Não reabrir logo/favicon ou exigir novamente foto de Leitinho 1,5 L já resolvida.
- Lista e autorização dos fornecedores (P21); decisão de publicar ou adiar o diretório. Canal oficial do RH (P22) somente se for ativado; estado indisponível pode permanecer por decisão explícita.
- Escopo público de privacidade e eventual tracking; nenhuma ferramenta ativa nem necessidade técnica comprovada de instalar novas dependências nesta auditoria.

### 4. Obrigatório antes da publicação

1. Aceitar formalmente a versão e o conteúdo que ficará visível; resolver ou adiar explicitamente mídias/diretório/RH pendentes, preservando avisos até autorização.
2. Definir domínio, runtime/hospedagem e operação. Autorizar e implementar preparação de produção/SEO, testando em conjunto robots, headers, canonical, metadata, filtros e sitemap, sem indexar rascunhos.
3. Resolver/reconciliar P19 com lastro dos originais e manter backup restaurável de fonte, acervo e PDF. O verificador atual não pode ser registrado como aprovado.
4. Concluir revisão de privacidade aplicável e aceite de acessibilidade/celular; validar HTTPS, links, imagens e comportamento no ambiente final. Amostras locais não aprovam infraestrutura nem Core Web Vitals de campo.
5. Após as mudanças autorizadas, repetir os testes afetados, lint, TypeScript e build; executar deploy somente com autorização específica. Esta auditoria não pede nem realiza publicação.

### 5. O que pode melhorar depois do lançamento

Open Graph e dados estruturados Organization/BreadcrumbList com dados reais (sem preços/avaliações inventados); métricas de campo e otimização adicional de derivadas de imagem se medidas justificarem; expansão para páginas institucionais/detalhes, CMS ou tracking apenas mediante novo escopo. A ausência de `/sobre`, `/contato` e `/trabalhe-conosco` como rotas próprias não é link quebrado: as seções de Home atendem ao escopo atual. Sem exigência de refatoração geral, animações ou redesign.

### Evidências e limites

Pasta [final-audit-2026-10-20](final-audit-2026-10-20/): audit.mjs, browser-results.json, baseline.json, seis capturas gerais, accessibility-performance.mjs/json, skip-link.json, assets-reconciliation.json, npm-audit.json e final-verification.json. Capturas adicionais legíveis de hero desktop, Sobre/RH/sticky móveis foram abertas e inspecionadas após o build. A inspeção visual das capturas gerais muito longas tem resolução reduzida na ferramenta; os testes de geometria/decodificação complementam a visualização, não a aprovação humana de todas as artes. Histórico anterior preservado abaixo. Os testes não enviaram mensagens, currículos ou formulários a terceiros; links externos foram conferidos por URL, sem auditoria de disponibilidade/licenciamento dos serviços externos. Resultados de produção, Search Console e navegadores não usados permanecem não verificados.

---

## Histórico anterior à auditoria de 20/10/2026

Atualização posterior — 17/10/2026: a etapa autorizada de harmonização resolveu os seis grupos editoriais da Home e a entrada de Fornecedores na navegação. Sobre a Nutri permanece na seção existente; Trabalhe Conosco foi acrescentado à Home com botão desativado até confirmação do RH. Resultados atuais em PREVIEW_REPORT.md e escopo vigente em ARCHITECTURE.md. O restante deste documento preserva a auditoria anterior à implementação e não representa uma nova execução de seus testes.

Data: 17/10/2026. Escopo: diagnóstico técnico e editorial, sem implementação, alteração de configurações ou deploy. Único arquivo criado/alterado no projeto nesta etapa: este relatório.

## Parecer

O site é uma **prévia funcional, ainda não pronta para publicação**. Home, Produtos e Fornecedores respondem corretamente. O menu usa uma página de produtos e quatro âncoras da Home; não representa a implementação de todas as páginas planejadas. A listagem possui 25 SKUs nas seis categorias vigentes, enquanto a Home ainda contém o agrupamento editorial anterior. Fornecedores é uma demonstração, sem distribuidor confirmado.

Não foram encontrados links internos quebrados nas três páginas inspecionadas. Não houve overflow horizontal nas quatro larguras testadas. As principais pendências são aprovação de conteúdo/mídias, consistência editorial, definição do escopo institucional e preparação de produção/SEO. Nenhuma dessas pendências foi corrigida nesta auditoria.

## Método e limites

- Documentos lidos: ROADMAP, PENDENCIAS, PREVIEW_REPORT, ARCHITECTURE, SEO, PLANEJAMENTO, TECHNICAL_DECISIONS, TRACKING e PRODUCT_MATRIX. Consultadas também as seções pertinentes de DESIGN_SYSTEM, ASSETS_STRATEGY, ASSETS_INVENTORY e CATALOGO_INTEGRATION_REPORT.
- Inspecionados App Router, layout, navegação/rodapé, páginas, fontes de produtos/fornecedores/Home, política de mídia, CSS pertinente e configuração de headers. O manifesto do build confirma as três páginas e robots.txt; não há rotas dinâmicas de detalhes ou sitemap na fonte.
- Testes novos executados em Chrome/Playwright, contra o build local existente em `http://127.0.0.1:3007`, sem recompilar a aplicação. Medidas em CSS px: 320, 375, 768 e 1440, viewport emulada. Não são testes em aparelhos físicos.
- Scripts e capturas temporários ficaram fora do projeto, em `C:/Users/Usuario/.codex/visualizations/2026/10/17/01a14bb0-6ec2-7061-86bc-d6f52fb01da0/`. `audit-results.json` contém os registros brutos; as evidências essenciais estão reproduzidas neste relatório. Nenhuma evidência histórica em docs foi sobrescrita.
- A primeira tentativa do script temporário falhou antes de testar o site por importação ESM de caminho Windows; ajustado para URL de arquivo e execução final concluída com código 0. Não foi falha da aplicação.
- Build, lint e TypeScript **não foram reexecutados nesta auditoria**. Há registros de código 0 na entrega anterior de cartão único, em PREVIEW_REPORT; são evidências históricas, não resultados novos.
- Não executados: Lighthouse/Core Web Vitals, auditoria integral de acessibilidade/contraste, leitor de tela, zoom, Safari/Firefox, auditoria de vulnerabilidades, Google Search Console, teste de atendimento/envio no WhatsApp ou validação comercial externa. Não se declara conformidade integral, segurança integral ou indexação real no Google.

## Rotas reais e finalidade

| Página/recurso | Finalidade e estado | Links e responsividade verificados | Pendências |
|---|---|---|---|
| `/` | Home institucional/comercial; HTTP 200; apresentação, cinco linhas editoriais, três destaques, negócios, institucional e contato | 12 destinos internos únicos por href com resposta 200 e âncoras válidas; 11 URLs externas apontam ao WhatsApp oficial. Sem overflow nas quatro larguras, inclusive menu aberto | Alinhar editorialmente às seis categorias vigentes; logo/fotos/vídeo pendentes; texto e avisos ainda de prévia |
| `/produtos` | Catálogo HTML consultivo; HTTP 200; 25 cartões, seis categorias, filtros GET e acesso ao PDF | 10 destinos internos válidos e 26 URLs WhatsApp oficiais; 42 combinações de filtros conferidas com a fonte; quatro larguras sem overflow | Fotografias não aprovadas; detalhes individuais não implementados; pesos ausentes corretamente omitidos; revisar conteúdo final sem inferir preços/estoque |
| `/fornecedores` | Diretório demonstrativo; HTTP 200; um cartão identificado como exemplo, com dados pendentes; contato institucional separado | 8 destinos internos válidos e uma URL WhatsApp institucional; quatro larguras sem overflow. Nenhum link de contato próprio no cartão | Nome, cidade/UF, telefone, regiões, catálogo e autorização de publicação pendentes. Campo Bom/RS é somente agrupamento ilustrativo. Não há link de entrada para esta página nas três páginas auditadas |
| `/robots.txt` | Recurso de controle de rastreamento; HTTP 200 | Corpo observado: `User-Agent: *` e `Disallow: /`. Não é página visual; responsividade não se aplica | Política correta para manter a intenção de prévia local, mas precisa de decisão específica para produção |
| `/catalogo/Nutri_Acai_Catalogo_Mobile_2026_V7.pdf` | Arquivo público aprovado; HTTP 200; `application/pdf` | Corpo HTTP com SHA-256 igual ao original e à cópia pública; links da Home e Produtos válidos | Nenhuma edição necessária nesta auditoria. Abrir em nova aba/download não foram repetidos por clique nesta rodada; testes anteriores estão documentados. Responsividade do leitor PDF não auditada |
| 404 (`not-found.tsx`) | Tratamento de endereço ausente; `/auditoria-inexistente` retornou 404 real | Largura global 320/375/768/1440 correspondente às viewports; link “Voltar ao início” clicado e retornou a `/` | Texto ainda diz que a prévia apresenta apenas a página inicial; atualizar em etapa futura. Não é uma quarta página comercial |

Os números de links são deduplicados por href dentro de cada página, incluindo cabeçalho, corpo e rodapé; não representam quantidade de elementos clicáveis nem destinos únicos no site inteiro. As URLs externas foram inspecionadas, não abertas para envio: todas usam `https://wa.me/5551992485496`, com ou sem mensagem contextual.

## O que cada item do menu realmente faz

| Nome solicitado | Destino real | Estado e teste | Pendência visual/de conteúdo |
|---|---|---|---|
| Home | `/` pela marca | Página implementada | Placeholders e editorial antigo, descritos acima |
| Produtos | `/produtos` | Página implementada e navegável | Mídia e revisão comercial final |
| Fornecedores | Sem item no menu/rodapé | Página existe por acesso direto | Decidir sua entrada na navegação e sua elegibilidade para publicação; não confundir com captação de revendedores |
| Nossas linhas | `/#linhas` | Seção da Home, destino existente; cartões abrem WhatsApp, não páginas ou filtros | Cinco grupos: inclui “Frozen & Cremes” e Cupuaçu em Tradicionais, divergindo da matriz vigente |
| Para seu negócio | `/#negocios` | Seção da Home com blocos Food Service e distribuição; CTAs de WhatsApp contextual | Conteúdo resumido; páginas próprias planejadas ainda ausentes. Não há promessas de margem, exclusividade ou cobertura inferidas |
| A Nutri | `/#sobre` | Seção institucional da Home; link interno para contato | Texto breve e placeholder de vídeo; faltam materiais institucionais reais aprovados |
| Contato | `/#contato` | Seção da Home; WhatsApp oficial +55 51 99248-5496 | Não há página própria, formulário ou e-mail confirmado. Não inventar canais, endereço ou horário |

Executados **60 cliques de navegação**: os cinco itens presentes no menu, partindo de cada uma das três páginas, nas quatro larguras. Produtos alcançou a página correspondente; as quatro âncoras chegaram a elementos existentes. Os títulos h2 dessas seções não ficaram acima da borda inferior do cabeçalho nas medições feitas após os cliques. Os menus móveis abriram e fecharam com Escape. As seções compartilham a responsividade da Home; não são rotas adicionais.

### Ausências confirmadas

GET retornou **404** para `/food-service`, `/distribuidores`, `/sobre`, `/contato`, `/privacidade` e `/sitemap.xml`. Essas entregas constam do planejamento, mas não estão implementadas. O detalhe representativo `/produtos/acai-zero-acucar-200ml` também retornou 404; a inspeção confirma ausência de `produtos/[slug]`.

Também testados com 404: `/nossas-linhas`, `/para-seu-negocio` e `/a-nutri`. São verificações de nomes possíveis, **não compromissos de implementar esses slugs**. Os itens homônimos do menu usam âncoras válidas, portanto essas ausências não constituem links quebrados do menu atual. `/fornecedores` não implementa automaticamente o conteúdo de captação comercial originalmente proposto para `/distribuidores`.

## Evidências de funcionamento e preservação

| Página | 320 px | 375 px | 768 px | 1440 px |
|---|---:|---:|---:|---:|
| Home: scrollWidth | 320 | 375 | 768 | 1440 |
| Produtos: scrollWidth | 320 | 375 | 768 | 1440 |
| Fornecedores: scrollWidth | 320 | 375 | 768 | 1440 |
| 404: scrollWidth | 320 | 375 | 768 | 1440 |

Menu aberto nas três páginas principais: scrollWidth 320, 375 e 768 nas respectivas larguras. Capturas de Home e Fornecedores em 320/1440, topo de Produtos em 320/1440, quatro seções da Home em 320 e primeiro cartão de Produtos abertas e inspecionadas. Capturas adicionais em 375/768 geradas; não se declara inspeção visual individual dessas capturas. Sem cortes horizontais observados nas áreas visualmente examinadas. Textos auxiliares de 12–13 px ainda existem no CSS frente ao mínimo de 14 px proposto no design system; isso é pendência de acabamento, não diagnóstico completo de acessibilidade.

- Produtos: DOM com 25 cartões; fonte com distribuição **8 Tradicionais / 6 Frutados / 2 Frozen / 2 Cremes / 4 Trufados / 3 Linha Saudável**. As 42 combinações categoria × volume foram abertas e seus IDs comparados aos esperados: zero divergências. Pela interface, Linha Saudável + 200 ml retornou somente `acai-zero-acucar-200ml`; limpar filtros restaurou 25 cartões. Categoria inválida retornou HTTP 200 com zero resultados e explicação, sem produto inventado.
- Ordenação decrescente e desempate estável: implementação inspecionada; a ordem não foi novamente validada por asserção nesta rodada. Teste sem JavaScript e teclado nos filtros também não repetidos; há evidência anterior.
- Zero exceções JavaScript (`pageerror`) na jornada principal. Foi capturada uma mensagem de console de recurso HTTP 404 sem URL identificada naquele registro; não se declara console integralmente limpo. Consulta adicional confirmou `/favicon.ico` 404 e ausência de ícone na fonte/public, mas não provou que essa foi a origem daquela mensagem. A rodada específica de 404 registrou apenas as respostas ausentes esperadas no listener de rede.
- Nenhuma requisição externa observada no listener da página principal durante os fluxos locais, sem clicar WhatsApp. Fonte não contém integração ativa de analytics; variáveis de exemplo estão vazias. Isso não equivale a auditoria de privacidade completa.
- Hashes de 83 arquivos de `src`, `assets`, `public`, configuração Next, package.json e lockfile comparados no início/fim: zero mudanças. Os 58 assets do inventário histórico mantêm os hashes. Página/CSS de Produtos, matriz dos SKUs e ambos os PDFs mantêm os cinco hashes da validação anterior.
- PDF original, público e resposta HTTP: SHA-256 `8719d38b610810d14305c9b1757a862dc779de098b6611ba65fc6e22272052e5`. Aprovação do PDF continua válida; não libera suas imagens isoladas nem resolve divergências documentadas.

## SEO, indexação e institucional

| Requisito | Evidência atual | Avaliação |
|---|---|---|
| Idioma e estrutura | `lang=pt-BR`, um h1 por página principal | Base presente; não equivale a auditoria semântica integral |
| Títulos | Home: “Nutri Açaí \| Prévia institucional”; Produtos: “Produtos \| Nutri Açaí”; Fornecedores: “Fornecedores e distribuidores \| Nutri Açaí” | Distintos; Home ainda explicitamente provisória |
| Descrições | Presentes nas três páginas; Home descreve prévia local e Fornecedores descreve proposta demonstrativa | Aprovar redação pública antes de trocar o ambiente |
| Meta robots | `noindex, nofollow` nas três páginas | Mantida a intenção de não indexar a prévia |
| Cabeçalho HTTP | `X-Robots-Tag: noindex, nofollow, noarchive`, inclusive PDF | Não basta alterar somente meta tags para liberar produção |
| robots.txt | `Disallow: /`, sem sitemap | Rastreamento bloqueado; política de produção ainda não preparada |
| Sitemap | `/sitemap.xml` 404; nenhum `sitemap.ts` | Planejado, não implementado; incluir apenas URLs públicas aprovadas com origem real quando autorizado |
| Canonical/origem | Nenhum canonical nas páginas; domínio não configurado | Coerente com não inventar domínio na prévia; falta decisão de origem e política de parâmetros para produção |
| Filtros | Sem canonical ou política específica por query; hoje protegidos pelo bloqueio global | Ao preparar produção, preservar o requisito de não indexar combinações de filtros; liberar a listagem não deve liberar implicitamente todas as queries |
| Open Graph/social | Zero metatags `og:*` nas três páginas | Requisito de SEO.md ainda não implementado; imagem somente com aprovação |
| Dados estruturados | Zero scripts JSON-LD nas três páginas | Organization/BreadcrumbList apenas planejados; Product depende do escopo de detalhes. Não inventar preço, estoque, avaliações ou dados empresariais |
| Identidade da aba | `/favicon.ico` 404; nenhum ícone público | Pendência de acabamento ligada à identidade aprovada |
| Institucional/privacidade | Sobre/contato apenas como seções; `/privacidade` ausente; rodapé sem link de privacidade | Definir e aprovar conteúdo conforme canais e tecnologias reais; não simular política pronta ou formulário funcional |
| Acesso à prévia | Servidor local em loopback; sem autenticação na aplicação inspecionada | Se houver futura prévia remota, definir restrição de acesso. Não houve publicação nesta etapa |

Observação técnica: `Disallow` pode impedir o robô de ler o `noindex`; essa combinação não deve ser apresentada como garantia de que uma URL pública jamais aparecerá em busca. Nenhuma mudança é recomendada agora na prévia local. Uma futura prévia remota deve ter controle de acesso adequado. Referência consultada: [Google — bloqueio de indexação com noindex](https://developers.google.com/search/docs/crawling-indexing/block-indexing).

Para o sitemap futuro, usar URLs canônicas absolutas aprovadas e coerentes com o domínio definitivo; sitemap auxilia descoberta, sem garantir indexação. Referência: [Google — criação e envio de sitemap](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap). Estes são critérios para a próxima etapa, não alterações efetuadas ou comprovação de indexação.

## Pendências priorizadas

**P0 — Condições para autorizar uma publicação:** não existe aprovação de publicação registrada; domínio, hospedagem e seleção do conteúdo público precisam ser definidos. Não promover esta prévia demonstrativa como versão final. Preparar uma política de produção coerente para meta robots, headers, robots.txt, canonical e filtros, preservando a proteção da prévia. A configuração atual impede o objetivo de descoberta orgânica caso seja copiada sem revisão para produção.

**P1 — Consistência comercial e editorial:** harmonizar a Home com a matriz vigente sem alterar os 25 SKUs, seis categorias ou PDF. Confirmar dados empresariais e redação; preservar ausência de informações não documentadas. Fornecedores deve continuar demonstrativo até confirmação oficial por registro; decidir se entra no primeiro lançamento ou permanece fora do conteúdo público.

**P1 — Conteúdo e identidade visual:** logo, fotografias por SKU, embalagens e material institucional continuam pendentes. Guaraná 5/10 L com imagem compartilhada, Natural 5 L, Zero 200 ml e complementos dos copos exigem as confirmações já registradas. Não deduzir aprovação pela presença no PDF. Definir materiais finais ou remoção editorialmente aprovada das promessas de mídia “em breve”.

**P1 — Escopo institucional e navegação:** decidir quais páginas planejadas compõem a primeira versão. Sobre, contato, Food Service, distribuição e privacidade não podem ser marcados como páginas concluídas. Âncoras podem permanecer se esse for o escopo aprovado. Definir relação entre Fornecedores e Distribuidores e sua descoberta pelo menu/rodapé. Não criar páginas vazias apenas para preencher a árvore planejada.

**P2 — Qualidade técnica antes do lançamento:** validar acessibilidade, zoom, dispositivos/navegadores e desempenho com conteúdo real; rever tamanho/carregamento do PDF de 16.822.687 bytes em rede representativa. Finalizar Open Graph/ícone; atualizar texto da 404. Revisar dependências e executar a bateria final de build/lint/TypeScript quando houver uma candidata à publicação.

**P2 — Confiabilidade documental e manutenção:** ARCHITECTURE/PLANEJAMENTO ainda citam cinco categorias; ROADMAP registra ordem crescente em seção antiga enquanto PRODUCT_MATRIX e implementação usam decrescente; PENDENCIAS conserva trechos antigos de contagem e overflow após as atualizações que os superaram. Tratar como histórico, sem reutilizá-los como regra vigente. `verify-assets.mjs` ainda exige inventário com 58 arquivos apesar do PDF adicional: deficiência confirmada por inspeção, comando não executado nesta rodada. Ajustar futuramente sem confundir adição aprovada com corrupção de original. Nenhum desses documentos/scripts foi alterado agora.

## Próximas três etapas recomendadas

1. **Consolidar conteúdo e escopo de lançamento:** aprovar relação de páginas/seções públicas, alinhar a Home às seis categorias vigentes e obter decisões sobre logo/mídias/dados institucionais/fornecedores. Registrar o que fica fora do lançamento e uma fonte documental vigente. Esta é a próxima etapa prioritária; não começar novas funcionalidades por suposição.
2. **Executar somente o acabamento e as entregas autorizadas:** integrar mídias aprovadas, concluir conteúdo institucional/privacidade e navegação conforme o escopo decidido, corrigir metadados provisórios e demais pendências visuais. Manter intocados os dados oficiais e o PDF, salvo nova autorização específica.
3. **Preparar e validar a candidata à publicação:** definir domínio/hospedagem, separar configuração de prévia/produção, implementar sitemap/canonical/SEO dos filtros e repetir testes técnicos, funcionais, de acessibilidade e desempenho. Solicitar aprovação explícita da versão concreta antes de qualquer publicação.

Prévia auditada: [Home](http://127.0.0.1:3007/), [Produtos](http://127.0.0.1:3007/produtos) e [Fornecedores](http://127.0.0.1:3007/fornecedores). Nenhuma funcionalidade nova implementada; nenhum arquivo da aplicação ou ativo original alterado; nenhum deploy.
