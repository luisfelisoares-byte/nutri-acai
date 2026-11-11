# Plano de execução

## Atualização — revisão visual e continuidade das imagens (18/10/2026)

Concluída esta etapa: reprodução e correção mínima da transparência do cabeçalho móvel, uma nova associação visual (Natural 5 L), revisão de toda a Home e validação das três rotas nas seis larguras. Estado vigente: logo/favicons aprovados e consolidados; 25 SKUs/seis categorias; 14 imagens e 11 placeholders; RH desativado e fornecedor demonstrativo. Build, lint, TypeScript, filtros, links e PDF V7 passaram. Evidências em PREVIEW_REPORT e visual-review/; prévia http://127.0.0.1:3013.

Etapa de mídia segue parcial: obter imagens confiáveis para os 11 SKUs restantes e fotografia real autorizada da operação. Aprovação de layout/marca não libera fotos nem publicação. Próxima decisão depende desses materiais e da revisão humana da prévia; nenhuma outra melhoria ou deploy iniciado. Registros anteriores abaixo são históricos.


## Validação concluída e preparação visual — 18/10/2026

Auditada a harmonização existente, sem refazer a aplicação. Build/lint/TypeScript e suítes de harmonização/produtos concluídos com código 0. Três rotas testadas em 320/375/768/900/1100/1440 px; menu intermediário sem sobreposição. Evidências e limites em PREVIEW_REPORT.md; prévia vigente em http://127.0.0.1:3008/. Plano visual consolidado em ASSETS_STRATEGY.md, sem ativar imagens não confirmadas.

Próximas etapas, em ordem: (1) confirmar logo/favicons e correspondências prioritárias de imagens por SKU; (2) aplicar apenas mídias liberadas às reservas existentes e revisar visualmente; (3) concluir conteúdo oficial pendente (RH/fornecedores) e a revisão de preparação para publicação, em etapa separada e autorizada. Sem deploy ou alteração de indexação nesta entrega.

## Etapa atual — harmonização da primeira versão (17/10/2026)

Escopo autorizado: Home, Produtos, Fornecedores, Sobre a Nutri e Trabalhe Conosco. Home harmonizada às seis categorias; Produtos e seus 25 SKUs/filtros/ordenação preservados. Sobre a Nutri permanece na seção institucional existente `/#sobre`; nenhuma rota redundante criada. Trabalhe Conosco fica na Home, com envio indisponível até confirmação oficial do RH (P22). Fornecedores ganhou entrada no menu; rodapé inclui Trabalhe Conosco e mantém acesso a Para seu negócio.

Próximo ponto: revisão visual desta harmonização e confirmação dos contatos/mídias pendentes. Testes e URL vigente registrados em PREVIEW_REPORT.md. Sem autorização de deploy ou mudanças de indexação. O histórico abaixo descreve etapas anteriores; não requer implementar automaticamente páginas extras.

## Atualização — retomada de fornecedores (17/10/2026)

Prévia existente de `/fornecedores` inspecionada e validada, sem refazer a implementação. Build, lint e TypeScript concluídos com código 0; rota HTTP 200, destinos internos/âncoras, URL institucional e menu testados. Larguras 320/375/768/1440 px sem overflow; quatro capturas inspecionadas. Resultados e tentativas anteriores em PREVIEW_REPORT.md e `suppliers-preview/results.json`.

Etapa 5 segue parcialmente concluída. Próximo ponto desta rota: avaliação visual em http://127.0.0.1:3007/fornecedores e confirmação oficial dos fornecedores. Após o ajuste de acabamento, há um único cartão ilustrativo, sem dados ou contatos aprovados. Navegação compartilhada preservada; acesso direto à rota. `/produtos`, 25 SKUs e PDF V7 preservados por hashes. Nenhum deploy ou aprovação comercial inferida.

## Atualização — seis categorias e volumes ordenados (17/10/2026)

Concluída a correção autorizada de `/produtos`: 25 SKUs preservados, seis categorias (8 Tradicionais, 6 Frutados, 2 Frozen, 2 Cremes, 4 Trufados, 3 Linha Saudável), Cupuaçu/Leitinho em Cremes e volumes ordenados numericamente em todas as seleções. Esta decisão substitui as referências anteriores a cinco categorias nesta documentação. Matriz vigente: [PRODUCT_MATRIX.md](PRODUCT_MATRIX.md).

Build, lint, TypeScript, integridade dos 25 IDs, seis filtros de categoria, sete filtros de volume, ordem crescente, teclado, estados vazios, responsividade em 320/375/768/1440 px e acesso/download do PDF executados com sucesso. Evidências e limites em PREVIEW_REPORT.md e `products-preview/results.json`.

Pendências: harmonização editorial das linhas na Home, aprovação individual de mídia, páginas individuais e demais rotas. Nenhuma dessas expansões foi executada; não houve deploy.

## Atualização — listagem de produtos implementada (17/10/2026)

Autorização posterior do usuário executada exclusivamente para `/produtos`: 25 SKUs documentados, cinco categorias, filtros combináveis por categoria/volume com URL compartilhável, limpeza e estados vazios. A listagem HTML é diferenciada do catálogo PDF oficial aprovado; ambos têm acesso ao contato pelo WhatsApp. Etapa 5 **parcialmente concluída**: páginas individuais e demais rotas continuam fora desta entrega e dependem de autorização posterior.

Mídia continua em placeholders, sem liberação de fotos ou logo. Home preservada; adicionado somente link Produtos à configuração compartilhada de cabeçalho/rodapé. Build, lint, TypeScript e testes locais de filtros, teclado, PDF e responsividade aprovados; detalhes e limitações em PREVIEW_REPORT.md. Sem deploy. Próximo ponto: revisão humana de `/produtos`; não iniciar automaticamente outras rotas.

---

Estado: planejamento aprovado e primeira prévia autorizada, 16/10/2026. Sem estimativas de prazo fechadas antes da revisão de escopo.

| Etapa | Entregas | Critério de conclusão |
|---|---|---|
| 1 — Inspeção | Inventário, hashes, pranchas e dossiê lido | Concluída; diagnóstico técnico aprovado, mídia não aprovada |
| 2 — Planejamento | Arquitetura, páginas, design system, assets, SEO, tracking e pendências | Planejamento aprovado pelo usuário |
| 3 — Preparação autorizada | Verificação de versões, scaffold, configurações, tokens, dados tipados e manifesto | Ambiente reproduzível; nenhum original alterado; integrações desativadas |
| 4 — Prévia visual | Navegação e Home com seleção editorial e placeholders; catálogo completo e detalhes adiados conforme escopo autorizado | Revisão mobile/desktop de hierarquia e direção visual |
| 5 — Expansão | Demais rotas, 25 SKUs, filtros, contato e estados vazios | Navegação e dados consistentes; Zero 200 ml; Pitaya ausente |
| 6 — Integração de mídia | Apenas assets explicitamente aprovados; demais placeholders preservados | Evidência de aprovação e vínculo SKU registrados; hashes históricos preservados |
| 7 — Validação | TypeScript, lint, build, navegação, acessibilidade, desempenho e conteúdo | Falhas resolvidas ou limitações materiais documentadas |
| 8 — Preparação para publicação | Domínio, metadados finais, privacidade e revisão comercial | Aprovação explícita da versão a publicar e ambiente definido |

Etapas 3 e 4 autorizadas com escopo limitado à base e primeira Home. Demais páginas dependem de nova avaliação. A etapa 6 pode ocorrer gradualmente conforme cheguem aprovações, sem travar a construção com placeholders. Não ativar tracking ou publicar como consequência implícita de aprovar layout.

## Verificações planejadas

- Conteúdo: exatamente 25 SKUs na matriz de referência, seis categorias e contagens corretas; Zero individual 200 ml, Cupuaçu e Leitinho em Cremes, Pitaya ausente; pesos ausentes permanecem ausentes.
- Mídia: pendente resulta em placeholder; logo pendente não renderiza como marca final; mesmo hash não serve Guaraná 5 L e 10 L; nenhum asset é aprovado automaticamente por alias ou nome.
- Funcionalidade: links de cada SKU, filtros combinados, limpar filtros, estado vazio, 404, menu mobile, CTA WhatsApp e mensagem contextual sem envio automático.
- Acessibilidade: teclado, foco, menu, leitor de tela em fluxos principais, contraste, zoom e redução de movimento. Testar larguras 320, 375/390, 768, 1024 e 1440 px e ausência de rolagem horizontal indevida.
- Qualidade: TypeScript estrito, lint e build com comandos compatíveis com a stack escolhida; nenhum erro de console nas jornadas verificadas.
- Performance: dimensionamento de mídia, carregamento sob demanda e medições de laboratório com limitações registradas. Placeholder não garante performance quando fotos reais forem integradas: repetir medição após essa mudança.
- Privacidade/tracking: ausência de scripts com IDs vazios, eventos sem dados pessoais e sem duplicação; revisar estados de consentimento se ativados.
- Preservação: comparar todos os hashes de `docs/assets-audit/metadata.json` com os originais ao encerrar cada etapa que manipule referências de mídia.

Testes automatizados devem proteger regras reais de catálogo e liberação de mídia, além dos principais fluxos. Não criar testes que apenas espelhem marcação estática. Esta etapa de documentação não declara testes de site executados.
