# SEO — proposta

## Migração do diretório — 20/10/2026

Metadata e rótulos agora usam Distribuidores; rota oficial `/distribuidores`. `/fornecedores` responde com redirect permanente 308 para a nova rota, preservando parâmetros. Não criar canonical para o endereço antigo. Diretório segue demonstrativo/noindex, fora do sitemap até aprovação comercial; nenhuma liberação de indexação, domínio ou hospedagem nesta etapa. Os nomes/rotas anteriores abaixo são históricos.

## Preparação implementada, publicação bloqueada — 20/10/2026

Home recebeu título/descrição adequados ao conteúdo existente; Produtos mantém os seus. Fornecedores continua explicitamente demonstrativo e noindex; 404 tem título próprio. Nenhum dado comercial novo, JSON-LD ou imagem social foi inventado.

Configuração em src/config/seo.ts: canonical de Home/Produtos só existe com `SITE_DOMAIN_CONFIRMED=true` e `NEXT_PUBLIC_SITE_URL` preenchida com origem HTTPS válida, sem credenciais, caminho ou query. A flag ausente/false ignora qualquer URL provisória. Falta de URL quando confirmada e origens inválidas falham explicitamente. Não se deriva origem de request/localhost. `.env.example` mantém domínio vazio e confirmação false.

Sitemap implementado em `/sitemap.xml`: sem domínio confirmado retorna XML vazio, sem URLs fictícias; com confirmação, lista somente `/` e `/produtos`, sem filtros/âncoras/404. `/fornecedores` permanece fora enquanto demonstrativo. Sobre/Contato/Trabalhe Conosco são seções da Home. Não incluir lastmod inventado ou rotas inexistentes. Domínio ainda não confirmado: o sitemap preparado não é um sitemap público completo.

Meta noindex/nofollow, X-Robots-Tag noindex/nofollow/noarchive e robots.txt Disallow: / permanecem incondicionais. Confirmar domínio **não** libera indexação nem adiciona sitemap ao robots. No futuro, após aceite comercial e ambiente definitivo, autorização separada deve tratar os três bloqueios e a política de filtros em conjunto; rebuild necessário para metadata/sitemap pré-gerados. Nenhum endereço temporário foi liberado. Resultados de testes em PREVIEW_REPORT. O diagnóstico abaixo retrata a etapa anterior.

## Diagnóstico real — 20/10/2026

As três rotas têm título/descrição e um h1, mas a Home e Fornecedores ainda descrevem prévia/demonstração. Meta noindex/nofollow, X-Robots-Tag noindex/nofollow/noarchive global e robots.txt com Disallow: / preservam a não indexação. Canonical, Open Graph e JSON-LD ausentes; sitemap.xml responde 404. Domínio não confirmado; NEXT_PUBLIC_SITE_URL é somente exemplo e não é consumida. A flag site.preview não altera esses controles.

Antes da publicação indexável, confirmar origem real e aprovar configuração específica de produção: metadata final, canonical/política de queries dos filtros e sitemap apenas de rotas públicas aprovadas; validar os três controles de indexação juntos. Não inventar domínio, endereço ou dados comerciais. Não alterar bloqueios como consequência desta auditoria. Open Graph e Organization/BreadcrumbList podem ser uma evolução com dados confirmados; não são motivo para fabricar informação nem para exigir detalhes individuais fora do escopo.

Home, Produtos e Fornecedores são as páginas reais. Sobre, Contato e Trabalhe Conosco usam âncoras da Home: ausência das rotas homônimas não constitui link quebrado. Prévia continua sem tracking. Evidências e dependências da publicação em [AUDITORIA_GERAL.md](AUDITORIA_GERAL.md). O planejamento histórico abaixo não declara funcionalidades implementadas.

Estado: planejamento para aprovação, 16/10/2026.

Cada rota terá título e descrição próprios, um título principal claro, conteúdo HTML legível, links internos e breadcrumbs nos detalhes de produto. Slugs derivados dos nomes e volumes documentados; não usar nomes de imagem como fonte de produto. Filtros não criarão novas páginas indexáveis por combinação nesta primeira versão.

Metadados centralizados com substituições por página. Domínio definitivo PENDENTE DE CONFIRMAÇÃO: não gerar canonical, URLs absolutas de sitemap ou identificadores com domínio fictício. Antes de publicação, configurar origem canônica, validar URLs e gerar sitemap apenas de páginas aprovadas. Prévia de revisão sem indexação; se hospedada, restringir acesso — `noindex` não é controle de acesso.

Open Graph com título/descrição; imagem social só com material aprovado ou composição tipográfica neutra explicitamente aprovada. Não utilizar logo pendente nem fotos não validadas nos metadados. Página 404 com status adequado; links e redirecionamentos verificados.

Dados estruturados refletem somente informações documentadas e aprovadas. Prever Organization e BreadcrumbList; avaliar Product nos detalhes sem inventar oferta, preço, disponibilidade ou avaliações. Não prometer resultados enriquecidos ou posição no Google. Não acrescentar endereço, CNPJ, domínio ou certificações ausentes.

Desempenho: dimensões reservadas de mídia, tamanhos responsivos, JavaScript restrito e carregamento sob demanda. Objetivos de qualidade propostos: LCP até 2,5 s, CLS até 0,1 e INP até 200 ms em condições representativas; não são medições realizadas nem garantia. Usar laboratório na validação e dados de campo após publicação/tráfego quando disponíveis.

Aceite: metadados por rota, links navegáveis, URLs sem dados fictícios, ausência de conteúdo pendente nos dados estruturados e validação do comportamento de indexação conforme ambiente.
