# Primeira prévia visual — Nutri Açaí

## Ordem inicial dos slides do Hero — 23/10/2026

Alterada exclusivamente a sequência do carrossel existente. O layout aprovado e todos os textos/CTAs permanecem preservados. Nova ordem circular, confirmada visualmente nos arquivos e no navegador:

| Posição | Imagem | Arquivo existente |
|---|---|---|
| 1 | Caixa individual de açaí de 5 litros, tampa verde, caixa roxa, tigela e logotipo | `assets/imagens hero/hero3.png` |
| 2 | Coleção de embalagens Food Service de 5 litros | `assets/imagens hero/hero2.jpg` |
| 3 | Potes individuais de 200 gramas | `assets/imagens hero/hero1.jpg` |

Após o terceiro slide, o carrossel retorna à caixa individual de 5 litros. A abertura e a recarga da página começam no primeiro slide; o estado inicial existente continua em índice 0, sem persistência de seleção anterior. O preload existente acompanha automaticamente a nova primeira imagem.

### Alteração mínima e preservação

- `src/components/media/HeroCarousel.tsx`: somente os três objetos da lista `slides` foram reordenados para **hero3 → hero2 → hero1**. Nenhum componente duplicado, texto/label editado, handler, temporizador ou comportamento reimplementado.
- `src/components/media/hero-carousel.module.css`: reassociadas somente as duas posições desktop que acompanhavam os índices trocados. A caixa mantém `right 65%`, a coleção mantém `center 44%` e os potes mantêm `center 42%`. Isso preserva o enquadramento aprovado de cada imagem ao mudar sua posição. Nenhum outro valor ou regra CSS foi alterado; mobile e tablet continuam em contain/center, e desktop continua amplo com textos sobrepostos.
- Imagens não foram editadas, renomeadas, movidas, substituídas ou copiadas para public. SHA-256 dos originais e dos arquivos servidos pelo Next conferido. Cabeçalho, rodapé, demais seções, produtos, distribuidores, 25 SKUs, catálogo PDF, destinos e atributos dos quatro links do Hero permanecem intactos.
- Git consultado antes da edição: a pasta continua sem repositório (`fatal: not a git repository`). Nenhum commit, reset, descarte ou restauração executados. Baseline e cópias anteriores das duas fontes em `docs/hero-order-2026-10-23/baseline.json` e `before/`. Hashes confirmam apenas as duas fontes citadas modificadas, nenhum arquivo adicionado/removido em src/assets/public e todos os pontos de restauração anteriores preservados. [Integridade](hero-order-2026-10-23/integrity-results.json).

### Validação executada

| Verificação | Resultado |
|---|---|
| `npm run lint` | Código 0, sem warnings. |
| `npm run build` | Código 0, sete páginas geradas. |
| `npm run typecheck` | Código 0, execução separada após o build. |
| Abertura e recarga | Caixa individual de 5 litros confirmada nas três larguras: seis carregamentos iniciais, incluindo três recargas feitas depois de selecionar o terceiro slide. |
| Sequência automática | hero3 → hero2 → hero1 → hero3 nas três larguras, verificada pelo arquivo realmente ativo. Intervalo configurado de **3500 ms** preservado; ciclos medidos entre **3475 e 3539 ms** com relógio real. |
| 375×812, 768×1000 e 1440×1000 | Nove estados capturados e inspecionados. Geometria das imagens, título, conteúdo e CTA comparada ao estado aprovado, por imagem. Enquadramentos preservados, sem overflow horizontal ou imagens quebradas. |
| Navegação manual | Setas desktop, retorno circular, indicadores, swipe nos dois sentidos em 375/768, rolagem vertical sem troca e arrasto com mouse em 1440 passaram. |
| Teclado e pausa | Esquerda/direita/Home/End, manutenção de foco, outline de 3 px, pausa explícita, retomada, pausa por foco/hover e reinício do intervalo após gesto manual preservados e testados. |
| Movimento reduzido e limpeza | Autoplay desativado e transição 0 s com preferência reduzida; navegação manual funcional. Máximo de um timeout ativo e limpeza ao pausar/sair da Home confirmados. |
| Conteúdo, carregamento e console | Snapshot confirma textos/atributos dos quatro links e demais seções inalterados. Fontes das imagens conferidas por SHA-256. Nenhum erro de console/JavaScript nas navegações normais. Falha de hero2 foi simulada em contexto separado e mantém o ciclo entre as imagens disponíveis. |

Evidências: [results.json](hero-order-2026-10-23/results.json), [integrity-results.json](hero-order-2026-10-23/integrity-results.json), script `hero-order-2026-10-23/check-order.mjs` e capturas `hero-<largura>-slide-<n>.png` / `home-<largura>-slide-<n>.png`. Testes em Chrome com viewport/toque emulados; sem dispositivos físicos ou validação adicional em outros navegadores.

**Prévia local:** [http://127.0.0.1:3018/](http://127.0.0.1:3018/). Servidor limitado a 127.0.0.1, sem deploy. Sequência final: **caixa individual de 5 litros → coleção de caixas de 5 litros → potes individuais de 200 gramas → caixa individual de 5 litros**. Aguardar avaliação visual do usuário.

## Hero amplo somente no desktop — 22/10/2026

Desktop alterado para imagem de ponta a ponta com os textos e CTAs existentes sobrepostos à esquerda. **Mobile aprovado preservado:** as 12 capturas em 375 e 768 px, incluindo os três slides no Hero completo e na primeira tela, são idênticas pixel a pixel à referência da etapa anterior. Não houve deploy. Prévia disponível para avaliação visual do usuário em [http://127.0.0.1:3018/](http://127.0.0.1:3018/).

### Breakpoints e implementação final

- O breakpoint existente do **Hero é 900 px**; o do menu desktop é 1100 px. Ambos foram preservados. Em 768 px a imagem continua acima do texto. Nenhuma regra anterior de mobile/tablet foi editada: os novos estilos foram acrescentados em media queries de `min-width: 900px` e `min-width: 1100px`.
- A partir de 900 px, os slides ocupam o Hero inteiro com `inset: 0` e imagens em `object-fit: cover`. Em 1440 px a área medida é **1440 × 820 px**, começando abaixo do cabeçalho, sem coluna de imagem separada, margens pretas ou distorção. A altura existente de 820 px foi mantida.
- Enquadramento desktop por slide: `hero1` em `center 42%`, `hero2` em `center 44%` e `hero3` em `right 65%`. O recorte acontece apenas na apresentação CSS; nenhum original foi editado. As mesmas três importações e a sequência hero1 → hero2 → hero3 → hero1 foram mantidas.
- Conteúdo desktop com largura de até 480 px, alinhado à esquerda. Abaixo de 1100 px, permanece o gradiente lateral já existente para leitura no desktop estreito. Em telas maiores, o novo gradiente fica mais concentrado à esquerda e termina em transparência antes da borda direita. Gradiente inferior suavizado; controles discretos sobre a foto, com setas laterais e indicadores centralizados acima da assinatura. Todos esses ajustes são exclusivos do desktop.
- `HeroCarousel.tsx` mudou **somente no atributo `sizes`**: `(min-width: 900px) 100vw, (max-width: 899px) 100vw, 54vw`. A condição desktop permite entregar resolução adequada à largura total. O fallback anterior foi preservado porque o Next usa os valores em vw para calcular os candidatos de srcset; a lista de variantes móveis permanece igual, evitando uma troca de resolução no celular. Temporizador, gestos, eventos, estado, acessibilidade, preload e tratamento de falha não foram reimplementados.

Fontes alteradas: `src/app/home.module.css`, `src/components/media/hero-carousel.module.css` e a única propriedade citada em `src/components/media/HeroCarousel.tsx`. Conteúdo do Hero, quatro links/CTAs e seus atributos, cabeçalho/menu, rolagem, rodapé, demais seções, produtos, distribuidores, 25 SKUs, PDF e originais de imagem permanecem preservados.

### Comparação e segurança

Antes da edição, foram capturados os três slides em 375, 768, 899, 900 e 1440 px. As capturas de 375 e 768 também foram confrontadas com a última referência aprovada em `hero-final-2026-10-22/`. Após o build final, as mesmas condições foram repetidas em um único processo do Chrome para comparação.

- **375 e 768 px:** 12 de 12 capturas finais iguais à referência e ao estado anterior, com zero diferença de pixels. Posição/tamanho dos elementos, fontes, espaçamentos, imagens, indicadores e controles iguais. Evidência: [mobile-pixel-comparison.json](hero-desktop-2026-10-22/mobile-pixel-comparison.json).
- **899 px:** geometria e estilos computados de todos os elementos do Hero iguais aos anteriores, ainda com imagem em contain acima do texto. Algumas capturas adicionais nessa largura apresentam pequenas diferenças de rasterização; não se declara igualdade absoluta de pixels em 899 px. A preservação de geometria/estilos foi conferida separadamente.
- **900 e 1099 px:** comportamento desktop iniciado no breakpoint existente, com imagem cobrindo toda a largura e sem overflow. Capturas adicionais e resultados em [boundary-results.json](hero-desktop-2026-10-22/boundary-results.json).
- Git consultado antes da edição: a pasta continua sem repositório (`fatal: not a git repository`). Nenhuma inicialização, commit, reset, descarte ou restauração executados. Baseline e cópias das três fontes anteriores em `hero-desktop-2026-10-22/baseline.json` e `before/`. Os backups, manifestos e arquivos históricos de restauração anteriores permanecem intactos.
- A comparação de hashes confirmou apenas as três fontes citadas modificadas, nenhum arquivo removido/adicionado em src/assets/public e nenhum asset, PDF ou referência de restauração anterior alterado. Os dois CSS anteriores foram preservados integralmente como prefixo dos arquivos atuais. Evidência: [integrity-results.json](hero-desktop-2026-10-22/integrity-results.json).

### Validação executada

| Verificação | Resultado |
|---|---|
| `npm run lint` | Código 0, sem warnings. |
| `npm run typecheck` | Código 0, executado separadamente após o build final. |
| `npm run build` | Código 0, sete páginas geradas. |
| `npm run verify:assets` | **Código 1**, pela ressalva já existente: hero1.jpg, hero2.jpg e hero3.png ainda não registrados no inventário. Os 94 arquivos esperados estão presentes e íntegros; inventário e manifesto histórico não foram alterados neste ajuste de layout. |
| 375×812, 768×1000 e 1440×1000 | Três slides capturados e inspecionados em cada largura; imagens decodificadas, enquadramento preservado no mobile e cobertura integral da largura no desktop. Sem overflow horizontal, imagens quebradas ou erros de console/JavaScript nas navegações normais. |
| Autoplay | Configuração de 3500 ms preservada. Ciclo completo nas três larguras, com retorno do terceiro ao primeiro; intervalos medidos entre **3491 e 3531 ms** com relógio real. |
| Navegação e acessibilidade | Setas desktop, indicadores, swipe nos dois sentidos em 375/768, rolagem vertical sem troca e arrasto com mouse em 1440 passaram. Teclado esquerda/direita/Home/End, manutenção do foco e outline de 3 px passaram. |
| Pausa e movimento reduzido | Pausa explícita, por foco e hover; reinício da contagem após gesto manual; preferência reduzida desativa autoplay/transição e mantém navegação manual. Máximo de um timeout ativo e limpeza ao sair da Home confirmados. |
| Integridade do conteúdo | Snapshot dos quatro links do Hero e das demais seções preservado. Destinos internos/PDF respondem; CTA de produtos navega corretamente. SHA-256 dos três originais servidos confere com os arquivos solicitados. |
| Falha simulada | Bloqueio de hero2 em contexto separado mantém a navegação entre os outros slides e desabilita seu indicador, sem exceção JavaScript. |

Evidências em `docs/hero-desktop-2026-10-22/`: [results.json](hero-desktop-2026-10-22/results.json), `before-layouts.json`, `after-layouts.json`, capturas `before-home-*`, `before-hero-*`, `home-*` e `hero-*`, além dos scripts `capture-before.mjs`, `capture-after.mjs`, `check-desktop.mjs`, `check-boundaries.mjs` e `compare-preservation.py`. Testes em Chrome com viewport/toque emulados, sem aparelho físico ou validação em Safari/Firefox.

**Prévia local final:** [http://127.0.0.1:3018/](http://127.0.0.1:3018/) — `npm run start -- --port 3018`, somente em 127.0.0.1. Aguardar avaliação visual; nenhuma publicação ou alteração fora do escopo desktop.

## Imagens finais do Hero — 22/10/2026

Aplicadas exatamente as três imagens indicadas pelo usuário, na ordem **hero1 → hero2 → hero3 → hero1**, sem geração, edição de pixels, renomeação ou cópia para public. Importações estáticas dos originais com Next Image, entrega responsiva e preload somente do primeiro slide. Esta seção substitui as referências anteriores às imagens provisórias e ao intervalo de 5 segundos do carrossel. Sem deploy; avaliação visual do usuário pendente.

### Arquivos encontrados e enquadramento

| Ordem | Arquivo real | Formato | Dimensões | Proporção real |
|---|---|---|---|---|
| 1 | `assets/imagens hero/hero1.jpg` | JPEG, RGB/sRGB | 2752 × 1536 | 43:24, aproximadamente 1,792:1; próxima de 16:9. |
| 2 | `assets/imagens hero/hero2.jpg` | JPEG, RGB/sRGB | 2752 × 1536 | 43:24, aproximadamente 1,792:1; próxima de 16:9. |
| 3 | `assets/imagens hero/hero3.png` | PNG, RGB/sRGB, sem transparência | 1536 × 1024 | **3:2**, diferente da proporção informada no pedido. |

Os arquivos foram abertos e decodificados antes da edição. Metadados, tamanhos e SHA-256 em [images.json](hero-final-2026-10-22/images.json). `hero3.png` coincide byte a byte com a antiga arte do Hero; a importação ativa aponta expressamente ao arquivo solicitado na nova pasta.

Todas as imagens usam `object-fit: contain` e `object-position: center`: embalagens inteiras, sem distorção, zoom ou recorte de informações. Desktop mantém a altura existente de 820 px e reserva a área direita de 54% para as imagens, preservando o texto à esquerda. Em mobile/tablet, a área visual tem proporção 16:9 acima do texto: aproximadamente 375 × 211 e 768 × 432 px. A imagem 3:2 tem margens laterais para preservar o conteúdo completo; as duas primeiras têm apenas a pequena folga decorrente da proporção real. Indicadores permanecem sobre a área da foto; seta esquerda alinhada à borda dessa área, evitando a coluna de embalagens. Tamanhos, cores, alvos de toque, foco e transição de opacidade de 320 ms preservados. Setas continuam visíveis no desktop e ocultas abaixo de 900 px, conforme a implementação anterior; swipe e indicadores continuam disponíveis nessas larguras.

Aplicação: editados apenas `src/components/media/HeroCarousel.tsx` e `src/components/media/hero-carousel.module.css`. O componente existente foi preservado: apenas importações/descrições das imagens, enquadramento, posição dos controles e intervalo foram ajustados. Textos, títulos, quatro links/CTAs do Hero, PDF, cabeçalho, rodapé, demais seções, páginas e dados dos 25 SKUs não foram editados.

### Segurança e integridade

- Consultados README, relatório vigente, decisões técnicas, estratégia de assets e instruções de restauração. `git status`, `git log` e `git tag` confirmaram que esta pasta continua **sem repositório Git**. Não houve inicialização, commit, reset ou descarte de trabalho.
- Antes da edição, baseline de 166 arquivos e cópias das duas fontes do carrossel foram salvos em `hero-final-2026-10-22/baseline.json` e `before/`. Comparação final: somente as duas fontes citadas foram modificadas; nenhum arquivo do baseline foi removido. Todos os três originais finais mantêm seus hashes.
- O primeiro `verify:assets`, antes das correções de integridade, encontrou três originais antigos ausentes: `assets/acai_natural_1_5l.png`, `assets/produção.jpg` e `assets/imagem para hero.png`. Os dois últimos ainda eram importados por ReferenceImage. Recuperados **somente os bytes originais**, conferidos contra o inventário histórico: Natural de cópia já existente no acervo/public; produção e arte antiga de cópias estáticas locais do build anterior. Nenhum arquivo existente foi sobrescrito. Essa recuperação dos caminhos ausentes mantém o restante do site compilável, sem trocar a fotografia institucional ou qualquer associação de SKU. Registro e hashes em [recovered-originals.json](hero-final-2026-10-22/recovered-originals.json).
- Backup do Hero estático, manifestos e script de restauração anteriores permanecem íntegros e inalterados. `restore.py --check` passou **antes** desta edição. Após a troca autorizada, esse verificador continua esperando os hashes do refinamento anterior e bloqueia a restauração automática por segurança; não foi alterado para ignorar as mudanças atuais e nenhuma restauração foi executada. As cópias anteriores seguem disponíveis para revisão antes de restaurar.
- Evidência de preservação de src/assets/public e dos arquivos históricos de restauração: [integrity-results.json](hero-final-2026-10-22/integrity-results.json).

### Validação

| Verificação | Resultado |
|---|---|
| `npm run lint` | Código 0, sem warnings. |
| `npm run typecheck` | Código 0; também executado separadamente após o build. |
| `npm run build` | Código 0, sete páginas geradas, sem publicação. A primeira tentativa na sandbox foi interrompida por demora na otimização; build concluído com acesso aos subprocessos locais. |
| `npm run verify:assets` | **Código 1:** somente os três arquivos finais em `assets/imagens hero/` são apontados como adicionados sem registro. Todos os 94 arquivos esperados estão presentes e íntegros. Inventário e manifesto histórico preservados, sem regeneração para aceitar adições. A relação e os hashes dos três arquivos autorizados estão em `images.json`. |
| Chrome — 375×812, 768×1000 e 1440×1000 | Três slides individualmente capturados em cada largura, abertos para inspeção. Embalagens reconhecíveis e inteiras, sem overflow horizontal. Indicadores dentro da área efetivamente renderizada das fotos. |
| Fontes e carregamento | Home HTTP 200; imagens decodificadas. SHA-256 de cada original servido pelo Next confere com o arquivo indicado pelo usuário. Sem imagens quebradas ou erros de console/JavaScript nas navegações normais. |
| Autoplay | Intervalo configurado em **3500 ms**. Ciclo completo medido com relógio real em todas as larguras, incluindo retorno do terceiro ao primeiro; intervalos finais medidos entre **3451 e 3546 ms**. Medições individuais em `results.json`. |
| Navegação e pausa | Setas desktop, três indicadores, swipe nas duas direções em 375/768, rolagem vertical sem troca e arrasto com mouse em 1440 passaram. Foco com outline de 3 px, esquerda/direita/Home/End e manutenção do foco passaram. Pausa explícita, foco e hover suspendem autoplay; gesto manual reinicia a contagem. |
| Movimento reduzido e temporizador | Autoplay desativado, transição 0 s e seleção manual funcional com preferência reduzida. Máximo de um timeout ativo, removido ao pausar ou navegar para /produtos. |
| Falha simulada | Bloqueio deliberado de hero2 em contexto separado desabilita seu indicador e mantém o ciclo entre os slides disponíveis, sem exceção JavaScript. |
| Conteúdo preservado | Snapshot confirma textos/atributos dos quatro links do Hero e conteúdo/links das demais seções. Destinos internos e PDF respondem; CTA Explore nossas linhas abre /produtos. |

Evidências: [resultados do navegador](hero-final-2026-10-22/results.json), script `hero-final-2026-10-22/check-final.mjs` e capturas `hero-<largura>-slide-<n>.png` / `home-<largura>-slide-<n>.png` na mesma pasta. Testes em Chrome com viewports/toque emulados, sem aparelhos físicos, Safari, Firefox ou leitor de tela real. As áreas de texto das capturas foram comparadas por pixels para confirmar sua preservação entre slides.

**Prévia local:** [http://127.0.0.1:3018/](http://127.0.0.1:3018/), com `npm run start -- --port 3018`, limitada a 127.0.0.1. Nenhum deploy. Aguardar avaliação visual do usuário; não avançar para outros ajustes.

## Refinamento automático e controles discretos — 21/10/2026

Carrossel refinado para avaliação visual do usuário, sem publicação. Consultados o relatório vigente, ASSETS_STRATEGY, documentação de restauração, componente e estilos atuais. Git consultado novamente: esta pasta continua sem repositório/branch; nenhuma reversão, inicialização ou commit realizado.

### Comportamento e apresentação

- Avanço circular **1 → 2 → 3 → 1 a cada 5 segundos**. Um único timeout por vez, cancelado pelo cleanup do efeito. Toda navegação manual, inclusive seleção do mesmo ponto, reinicia a contagem. Pausa/reprodução por botão; suspensão temporária durante foco nos controles, hover de mouse, gesto em andamento e aba oculta. Preferência de movimento reduzido desativa autoplay e transições; navegação manual continua disponível. Anúncio de slide automático desligado durante reprodução para evitar interrupções repetidas em leitor de tela.
- Números visíveis removidos. Pontos de 6 px, com ponto ativo alongado para 18 px, sobre pequena base escura na imagem. Alvos de 32×44 px nos pontos e 44×44 px nas setas/pausa, rótulos acessíveis e outline de foco verde de 3 px. Sem faixa de controles no fluxo da página: **78 px recuperados no mobile/tablet**. Na largura 375, título em y≈494 e CTA principal em y≈680, com imagem de 375×300 px; conteúdo começa 28 px abaixo da imagem. Desktop mantém altura e composição do Hero, com setas pequenas laterais, indicadores e pausa sobrepostos.
- Swipe horizontal por Pointer Events, limite de 40 px e predominância horizontal; `touch-action: pan-y pinch-zoom` preserva rolagem vertical e zoom. Arrasto com mouse na área visual direita do desktop, com captura/liberação do ponteiro e cancelamento seguro. Setas esquerda/direita e Home/End continuam disponíveis por teclado.
- Falha de imagem marca somente aquele slide como indisponível, desabilita seu indicador e mantém a navegação entre os disponíveis. Se todos falharem, mensagem neutra é apresentada e autoplay para; textos e CTAs externos ao carrossel permanecem acessíveis. A falha de um slide foi exercitada no navegador; o cenário de todos os slides indisponíveis não foi testado.
- Mesmas três imagens, enquadramentos e proporções anteriores. Morango/Zero inteiros por contain, incluindo as margens pretas para preservar os originais verticais. Nenhuma imagem, embalagem, informação comercial, texto, CTA ou PDF alterado. As artes continuam provisórias com validação final pendente.

### Arquivos e preservação

Aplicação: modificados somente `src/components/media/HeroCarousel.tsx` e `src/components/media/hero-carousel.module.css`. Comparação de hashes confirmou todos os demais arquivos em src/assets/public idênticos ao baseline desta etapa, sem adições nessas pastas.

Documentação/evidências: este relatório, `docs/HERO_RESTAURACAO.md`, adaptação controlada de `docs/hero-carousel-2026-10-21/restore.py`, novo `refined-experiment-manifest.json` nessa pasta e pasta `docs/hero-carousel-refinement-2026-10-21/` com cópias anteriores, baseline, script, resultados e capturas. Backup do Hero estático e manifestos históricos intactos. A adaptação só permite usar os hashes do refinamento com a mesma lista original de arquivos; continua bloqueando mudanças posteriores não revisadas. `restore.py --check` passou; nenhuma restauração real executada.

### Resultados realmente observados

| Verificação | Resultado |
|---|---|
| `npm run lint` | Código 0, sem warnings. |
| `npm run typecheck` | Código 0 após o build, executado separadamente. |
| `npm run build` | Código 0, sete páginas; compilação em 98 s. |
| `npm run verify:assets` | Código 0, 94 arquivos íntegros; manifestos e exclusão autorizada preservados. |
| Chrome — 375×812, 768×1000, 1440×1000 | Nove estados capturados e abertos para inspeção visual. Embalagens reconhecíveis, títulos/CTAs legíveis, pontos discretos e sem overflow horizontal. Altura mobile/tablet igual à versão estática antes do carrossel, sem faixa extra de controles. |
| Autoplay real, sem relógio simulado | Ciclo completo nas três larguras: intervalos medidos de **4.998 a 5.015 ms**. Retorno do terceiro ao primeiro confirmado. |
| Reinício e pausa | Swipe próximo do vencimento do timeout não causou troca antecipada; próxima troca após **5.024 ms**. Pausa explícita no celular, foco e hover no desktop mantiveram o slide por mais de 5 s. Pausa por aba oculta implementada, mas não exercitada nesta bateria. |
| Swipe/arrasto | Gestos de toque via Chrome DevTools nas duas direções em 375 e 768; gesto vertical rolou a página sem trocar slide. Arrasto real com mouse em 1440 mudou slide. |
| Teclado e movimento reduzido | Foco com outline de 3 px, esquerda/direita/Home/End e foco mantido no controle. Preferência reduzida em 1440 interrompeu autoplay por mais de 5 s, transição calculada em 0 s, controle automático desabilitado e seleção manual funcional. |
| Temporizador e desmontagem | Instrumentação dos timeouts de 5 s no Chrome observou no máximo **um** ativo. Zero após navegar pelo CTA da Home para /produtos; zero durante pausa explícita. |
| Falha de imagem | Requisição otimizada do Morango bloqueada deliberadamente em contexto separado. Indicador desabilitado; ciclo seguiu Guaraná → Zero → Guaraná sem exceção JavaScript. Erro de rede nesse contexto é esperado, por simulação. |
| Conteúdo e links | Comparação com snapshot confirmou os quatro links do Hero e demais seções/textos preservados. Destinos internos/PDF respondendo, âncora existente e CTA /produtos clicado com sucesso. Zero erros de console/JavaScript nas três navegações normais. |

Primeira execução do teste de teclado interrompeu por uma expectativa incorreta do próprio script após arrasto (slide ativo já era o segundo). Posição inicial normalizada no teste, sem mudança na aplicação; bateria completa repetida e aprovada, código 0. Não foi necessário instalar dependências.

Evidências: [resultados do Chrome](hero-carousel-refinement-2026-10-21/results.json), [integridade](hero-carousel-refinement-2026-10-21/integrity-results.json), script `check-refinement.mjs` e capturas `home-<largura>-slide-<n>.png`/`hero-<largura>-slide-<n>.png` na mesma pasta. Testes com Chrome e toque emulado, sem aparelho físico ou leitor de tela real. Não se declara certificação integral de acessibilidade.

**Prévia ativa:** [http://127.0.0.1:3018/](http://127.0.0.1:3018/). Build reconstruído e servidor reaberto na mesma porta, sem duplicação/deploy. Pendências: aprovação visual explícita deste refinamento e fotografias oficiais definitivas; margens dos assets verticais permanecem para avaliação. Demais pendências comerciais e de publicação continuam válidas.

## Carrossel experimental no Hero — 21/10/2026

Implementado para avaliação do usuário, **sem aprovação visual final e sem publicação**. Consultados dossiê oficial V3 em `../DOSSIE V3/`, PREVIEW_REPORT, ASSETS_STRATEGY, ASSETS_INVENTORY, DESIGN_SYSTEM, ARCHITECTURE e README. Preservadas as decisões posteriores ao dossiê, incluindo todos os dados dos 25 SKUs.

### Segurança e restauração

Esta pasta não é um repositório Git: `git status --short --branch` retornou `fatal: not a git repository (or any of the parent directories): .git`. Não foi criado commit nem inicializado Git. Antes de editar, quatro fontes do Hero estático foram copiadas byte a byte para `docs/hero-carousel-2026-10-21/backup/`, com hashes em `backup-manifest.json`. Baseline de 130 arquivos de src/assets/public preservado. [HERO_RESTAURACAO.md](HERO_RESTAURACAO.md) contém os caminhos e o procedimento controlado de retorno integral.

`python docs/hero-carousel-2026-10-21/restore.py --check` executado com código 0 após a alteração final: cópias e estado experimental íntegros. O modo `--restore` não foi executado, para manter o carrossel disponível para avaliação. Esse modo verifica hashes antes de sobrescrever e bloqueia mudanças posteriores que precisem ser preservadas.

### Imagens e composição

Três arquivos existentes e de conteúdo distinto, abertos e inspecionados antes da seleção:

| Slide | Caminho original | Tratamento |
|---|---|---|
| 1 — Guaraná | `assets/imagem para hero.png` | Enquadramento anterior preservado: fundo no desktop, área 5:4 à direita no celular/3:2 no tablet. |
| 2 — Morango | `assets/1,5 litros/acai_morango_1_5l.png` | Embalagem inteira com contain, coluna direita no desktop e área visual acima do texto em telas menores. |
| 3 — Zero Açúcar | `assets/1,5 litros/acai_zero_1_5l.png` | Mesmo tratamento do slide 2. |

Morango e Zero já integram a prévia de Produtos. São artes existentes com validação comercial final pendente, **não três fotografias oficiais autenticadas**. A documentação não comprova três fotos definitivas adequadas; o experimento reutiliza essas referências já presentes, conforme a previsão do usuário de fornecer fotografias reais posteriormente. Não houve geração, edição, reconstrução de rótulos, cópia pública ou alteração dos originais. A faixa global de prévia continua visível. As imagens verticais têm margens pretas para evitar cortes; a diferença de proporção entre os slides permanece uma limitação visual a avaliar.

Texto institucional e quatro links do Hero ficam fixos, incluindo CTA /produtos, âncora comercial e acessos de visualização/download do PDF. Setas anterior/próximo e três indicadores numerados, com estado aria-pressed e alvos de 44×44 px. Navegação circular manual, sem autoplay; setas esquerda/direita, Home e End funcionam dentro dos controles, sem retirar o foco do botão. Slide ativo acessível, demais imagens com aria-hidden; mudanças anunciadas por status polite. Transição de opacidade de 220 ms, desativada com prefers-reduced-motion. Nenhum listener global ou dependência nova.

### Arquivos e resultados reais

Aplicação: modificado somente `src/app/page.tsx` para chamar o carrossel no Hero; adicionados `src/components/media/HeroCarousel.tsx` e `src/components/media/hero-carousel.module.css`. O ReferenceImage e os estilos anteriores permanecem íntegros para restauração. Documentação: este relatório e `docs/HERO_RESTAURACAO.md`; backups, manifestos, scripts e evidências em `docs/hero-carousel-2026-10-21/`.

| Verificação | Resultado executado |
|---|---|
| `npm run lint` | Exit 0, inclusive após a alteração final. |
| `npm run typecheck` | Exit 0, execução sequencial após o build final. |
| `npm run build` | Exit 0, sete páginas; última compilação em 102 s. |
| `npm run verify:assets` | Exit 0 após a alteração final; 94 arquivos, histórico e exclusão autorizada preservados. |
| Integridade | Assets/public e demais fontes idênticos ao baseline. Apenas page.tsx mudou e dois arquivos de fonte foram adicionados. Os três hashes da fonte estática entregue pelo Next correspondem aos originais e são distintos. |
| Chrome — 375×812, 768×1000 e 1440×1000 | Home HTTP 200; nove estados capturados e inspecionados, com embalagens reconhecíveis, textos e controles legíveis. Slides verticais inteiros, sem sobreposição de texto à embalagem móvel e sem overflow horizontal. |
| Navegação manual | Avançar por todos os três slides, retorno circular, voltar e seleção direta dos indicadores passaram nas três larguras. |
| Teclado e movimento | Cinco controles e quatro links do Hero alcançados por Tab com outline 3 px; setas/Home/End e manutenção de foco passaram. Transição 0 s com movimento reduzido e 0,22 s sem essa preferência. Nenhum avanço automático. |
| Contraste dos controles | Branco #FDFCFD/preto: 20,52:1; preto/verde: 13,49:1; branco/roxo no hover: 7,03:1; foco verde/preto: 13,49:1, calculados por luminância relativa. Verificação pontual, não certificação integral de acessibilidade. |
| Conteúdo, links e console | Snapshot confirmou todos os textos/atributos dos quatro links e demais seções preservados. Âncora existente e destinos internos/PDF respondendo; CTA clicado abriu /produtos. Zero erros JavaScript/console capturados. |

As primeiras visualizações comparativas de capturas aparentaram omitir textos repetidos; uma captura independente após troca e a contagem de pixels dos títulos confirmaram conteúdo desenhado corretamente. Não foi comprovado desaparecimento de texto na aplicação. A versão final dispensa inert nos slides sem controles internos e mantém aria-hidden. Teste de navegador repetido após o build final com resultado aprovado; detalhes em [results.json](hero-carousel-2026-10-21/results.json), [integridade](hero-carousel-2026-10-21/integrity-results.json) e [contraste](hero-carousel-2026-10-21/control-contrast.json). Capturas `home-<largura>-slide-<n>.png` e `hero-<largura>-slide-<n>.png` na mesma pasta. Viewports emuladas no Chrome; sem aparelho físico, outros navegadores ou leitor de tela real.

**Prévia mantida ativa:** [http://127.0.0.1:3018/](http://127.0.0.1:3018/). Servidor local reconstruído e reiniciado na mesma porta, sem duplicação. Nenhuma instalação/deploy. Pendências: avaliação visual explícita do carrossel e fornecimento/validação das fotografias definitivas; demais pendências comerciais/de publicação anteriores continuam válidas. O Hero estático anterior permanece recuperável integralmente.

## Correção do enquadramento móvel do hero — 21/10/2026

O `cover` anterior dimensionava a arte pela altura da seção inteira, incluindo o conteúdo textual, ampliando e cortando a embalagem no celular. Correção restrita a `src/app/home.module.css` e `src/components/media/reference-image.module.css`: até 899 px, imagem em área visual própria acima do texto, sem card ou sobreposição de conteúdo. Até 639 px, proporção 5:4 e `object-position: right center`; a pequena sobra lateral da arte é recortada à esquerda, mantendo a caixa inteira visível. Entre 640 e 899 px, proporção original 3:2. Gradientes sobre a fotografia desativados nessas larguras, com texto e controles sobre o fundo preto existente abaixo. Desktop mantém fundo, gradientes, posição central e altura de 820 px anteriores.

**Validações executadas:** `npm run lint`, `npm run typecheck`, `npm run build` e `npm run verify:assets` terminaram com código 0. Integridade aprovada para os 94 arquivos; imagem original preservada com SHA-256 `ff734b0a1ee2ea2bc14713d3145eadc5e624d487b18ec5e09afdf53934f89cbf`, também confirmado na fonte estática entregue pelo Next.

Chrome em **369×812, 375×812, 768×1000 e 1440×1000**: capturas abertas e inspecionadas visualmente. Caixa reconhecível, frente e base inteiramente dentro da área visual móvel, sem textos ou botões sobre ela. Áreas de imagem de aproximadamente 369×295, 375×300, 768×512 e 1440×820 px, respectivamente. Sem overflow horizontal. Todos os quatro links do hero alcançados por Tab com foco de 3 px, destinos internos/PDF respondendo e CTA Explore nossas linhas abrindo /produtos. Comparação com snapshot confirmou textos, atributos dos links e demais seções preservados; nenhum erro JavaScript capturado. Controles abaixo da primeira tela permanecem acessíveis pela rolagem. Testes em viewport emulada, sem dispositivo físico.

Evidências e script: [resultados](hero-mobile-2026-10-21/results.json), [mobile 369 px](hero-mobile-2026-10-21/home-369.png), [hero completo 375 px](hero-mobile-2026-10-21/hero-375.png), [tablet](hero-mobile-2026-10-21/home-768.png) e [desktop](hero-mobile-2026-10-21/home-1440.png). Nenhuma alteração no arquivo original, textos, produtos, catálogo ou outras seções. Sem dependências novas, carrossel ou deploy.

Prévia reiniciada e mantida ativa em [http://127.0.0.1:3018/](http://127.0.0.1:3018/). Esta correção substitui o recorte móvel fechado registrado na experiência anterior abaixo.

## Hero experimental com imagem de fundo — 21/10/2026

Implementada a versão estática solicitada para avaliação visual. A imagem saiu do card lateral e agora cobre toda a seção, de ponta a ponta, usando Next Image com `fill`, `sizes="100vw"`, preload e `object-fit: cover`. O posicionamento muda em telas menores para priorizar o produto; há recorte responsivo, sem distorção. Gradientes sobrepostos garantem leitura dos textos brancos e verdes, mantendo os botões roxos e o foco por teclado verde. Não há carrossel nem animação nova.

Mantidos todos os textos, quatro links do hero (inclusive visualização/download do PDF), seus destinos e atributos. As demais seções da Home permanecem inalteradas. A arte continua provisória conforme a decisão anterior; esta experiência não autentica sua procedência como fotografia oficial.

**Arquivos da aplicação alterados:** `src/app/page.tsx`, `src/app/home.module.css`, `src/components/media/ReferenceImage.tsx` e `src/components/media/reference-image.module.css`. Alteração documental neste relatório; cópias anteriores e evidências em `docs/hero-background-2026-10-21/`. O componente institucional mantém seu comportamento anterior.

**Imagem conferida:** `assets/imagem para hero.png`, original intacto, SHA-256 `ff734b0a1ee2ea2bc14713d3145eadc5e624d487b18ec5e09afdf53934f89cbf`. A fonte estática servida pelo Next tem o mesmo hash; o Chrome decodificou as variantes otimizadas. Todos os arquivos em assets/public permaneceram idênticos, inclusive logo, favicon, produtos e PDF. Manifestos e inventário não foram alterados.

| Verificação executada | Resultado real |
|---|---|
| `npm run lint` | Exit 0, sem warnings. |
| `npm run typecheck` | Exit 0. |
| `npm run build` | Exit 0; sete páginas geradas. |
| `npm run verify:assets` | Exit 0; 94 arquivos verificados. |
| Chrome em 375×812, 768×1000 e 1440×1000 | Home HTTP 200; capturas abertas e inspecionadas. Fundo ocupa exatamente a caixa do hero, sem card lateral e sem overflow horizontal. Alturas aproximadas de 928, 980 e 820 px, respectivamente. |
| Conteúdo e navegação | Comparação com snapshot anterior confirmou os quatro links do hero e textos/links das demais seções preservados. Destinos internos conferidos; CTA Explore nossas linhas abriu /produtos com 25 cartões. Nenhuma exceção JavaScript capturada. |
| Teclado | Os quatro links do hero alcançados por Tab, com contorno de foco verde de 3 px nas três larguras. |
| Contraste pontual | 57 verificações sobre as capturas (19 trechos por largura), todas acima dos limiares de 4,5:1 para texto normal e 3:1 para texto grande. Menor relação medida: 7,19:1. Não equivale a auditoria integral de acessibilidade. |

Evidências: [resultados do navegador](hero-background-2026-10-21/browser-results.json), [integridade](hero-background-2026-10-21/integrity-results.json), [contraste](hero-background-2026-10-21/contrast-results.json), capturas `background-home-375.png`, `background-home-768.png` e `background-home-1440.png` na mesma pasta. Scripts de reprodução e arquivos anteriores estão guardados nessa pasta. Testes em viewports emuladas no Chrome, sem aparelho físico ou outros navegadores. Em celular o recorte é mais fechado e o hero excede uma tela, preservando espaço de leitura e todos os controles.

**Prévia mantida ativa:** [http://127.0.0.1:3018/](http://127.0.0.1:3018/). Servidor local reiniciado após o build na mesma porta. Sem instalação de dependências ou deploy. Versão experimental implementada e verificada, aguardando avaliação visual do usuário; pendências comerciais e de publicação anteriores permanecem válidas. O layout de fundo desta entrada substitui o layout contain/card descrito no histórico abaixo.

## Ajuste corretivo: Linha Zero Açúcar e conferência do hero — 20/10/2026

### Nomenclatura

Nome correto **Linha Zero Açúcar** aplicado em src/content/products.ts (categoria e três vínculos), refletindo seletor, título sticky, agrupamento e opções de filtro. src/content/home.ts alinhado, embora seus recortes não sejam renderizados na Home atual. src/app/produtos/page.tsx aceita **Linha Saudável** e **Linha Zero** como aliases históricos para o nome completo; combinações com volume preservadas. Busca em src encontrou os nomes antigos somente nessa normalização interna. Não existe mega menu, breadcrumb ou metadata específica da categoria nesta implementação. Açaí Zero Açúcar e todos os dados individuais dos 25 SKUs foram preservados.

### Diagnóstico real do hero

Arquivo assets/imagem para hero.png existente e legível, PNG 1536×1024, 2.535.870 bytes. Componente responsável: src/components/media/ReferenceImage.tsx, chamado pela Home com variant=hero. A importação estática já aponta para o arquivo exato; Next Image o publica como /_next/static/media/imagem%20para%20hero.2c4514f9.png e entrega variantes pelo otimizador /_next/image.

**A falha relatada não foi reproduzida na prévia ativa.** Antes de editar, Chrome retornou HTTP 200, imagem decodificada e fonte estática com SHA-256 igual ao original: ff734b0a1ee2ea2bc14713d3145eadc5e624d487b18ec5e09afdf53934f89cbf. A captura anterior foi aberta e comparada visualmente com o arquivo original. Portanto, não foi necessário mudar a referência; não há evidência para atribuir o relato a cache, caminho inválido ou falha do otimizador. Build reconstruído e servidor reiniciado após a correção da categoria; confirmação repetida em contextos novos do Chrome.

Layout aprovado preservado: imagem ~654×436 px em 1440; 319×213 px em 375, terminando em y~448 dentro da primeira tela de 812 px. Proporção 3:2/contain, respiro superior 104 px no desktop e 56 px no celular, separação 80/40 px, imagem antes do texto móvel; tablet 768 também conferido. CTA Explore nossas linhas continua abrindo /produtos. Nenhum asset ou CSS foi alterado nesta correção.

### Resultados executados

| Verificação | Resultado real |
|---|---|
| npm run lint | Exit 0, sem warnings. |
| npm run typecheck | Exit 0, tipos de rota e tsc aprovados. |
| npm run build | Exit 0, Webpack em 62 s, TypeScript em 4,2 s; sete páginas geradas. |
| npm run verify:assets | Exit 0, 94 arquivos; manifesto histórico preservado. |
| Integridade | Comparação de hashes antes/depois: assets/public idênticos, incluindo imagem do hero, logo/favicon, produtos e PDF. Apenas três arquivos de src mudaram. Comparação estrutural dos 25 registros confirmou apenas a alteração de categoria dos três produtos Zero Açúcar. |
| Chrome 375×812, 768×1000 e 1440×1000 | Imagem carregada/decodificada, respostas otimizada e estática HTTP 200, SHA-256 da fonte igual ao arquivo original em todas as larguras. Capturas abertas e inspecionadas visualmente. Imagem inteira na primeira tela; nenhuma distorção ou overflow horizontal. |
| Categoria e compatibilidade | 25 cartões/seis categorias; Linha Zero Açúcar no seletor e título, três Açaí Zero Açúcar no filtro. Ambos os aliases históricos combinados com volume=200 ml retornam o produto correto e exibem o nome completo. Nenhum rótulo antigo visível nas páginas testadas. |
| Links e erros | CTA clicado abre /produtos; 12 destinos internos únicos da Home conferidos por existência de âncora ou resposta HTTP nas três larguras. Nenhuma exceção JavaScript. |

Chrome com viewport/toque emulado, sem aparelho físico. Importação TypeScript pelo script de evidência emitiu somente aviso informativo MODULE_TYPELESS_PACKAGE_JSON; não alterado package.json. Sem repetir auditoria completa de filtros, sticky ou distribuidores.

Arquivos alterados: src/content/products.ts, src/content/home.ts, src/app/produtos/page.tsx, README.md, docs/PRODUCT_MATRIX.md e este relatório. Evidências na pasta existente docs/final-audit-2026-10-20/: check-corrective-before.mjs, check-corrective.mjs, corrective-before.json, corrective-source-before.json, corrective-integrity.json, corrective-results.json e capturas corrective-before-1440.png, corrective-home-375/768/1440.png, corrective-category-375/1440.png.

**Prévia mantida ativa:** http://127.0.0.1:3018/ — mesma porta 3018, servidor de produção local reiniciado após build. Sem instalação, publicação, substituição de assets ou alteração de outras seções. Registros anteriores abaixo preservam o histórico; a nomenclatura vigente é Linha Zero Açúcar.


## Pacote consolidado: Home, navegação e Linha Zero — 20/10/2026

### Alterações executadas

- Removidas integralmente da Home as seções “Encontre o seu sabor” (seis cards de categorias) e “Seu próximo favorito pode estar aqui” (seleção de produtos), com seus imports e estilos exclusivos de cards de linhas. Nenhum produto, página comercial ou categoria removido. Ordem restante: hero, negócios, Sobre, Trabalhe Conosco e contato, sem wrappers vazios das seções antigas.
- “Nossas linhas” removido da lista de navegação compartilhada, portanto desktop, mobile e rodapé. Não há links de aplicação apontando a #linhas. Botão **Explore nossas linhas** preservado e redirecionado para **/produtos**. Demais CTAs, WhatsApp e links PDF mantidos.
- **Linha Zero** aplicada à fonte das categorias e aos três registros de Açaí Zero Açúcar: título sticky, seletor, agrupamento e opções de consulta usam o rótulo novo. Recortes editoriais não renderizados em home.ts também alinhados. Não existe mega menu, breadcrumb ou metadata específica dessa categoria na implementação atual; nenhum componente redundante criado. A query histórica categoria=Linha Saudável é normalizada para Linha Zero, preservando links anteriores sem exibir o nome antigo. Nomes individuais, IDs, pesos, embalagens e volumes não mudaram.
- Hero: contêiner até 1280 px, imagem maior e coluna de texto preservada; distância horizontal 80 px no desktop/48 px até 1100. Respiro superior 104 px em desktop amplo, 96 px nos intermediários, 64 px no tablet e 56 px no celular. Imagem antes do texto até 899 px, permitindo produto na primeira tela móvel. Proporção 3:2, contain, sizes ajustado, Next Image/preload e preferência por movimento reduzido preservados. Sem carrossel/animação nova.
- Acervo/dossiê V3/documentação de procedência revisados. Não encontrada alternativa com origem fotográfica oficial comprovada e enquadramento que preserve integralmente a embalagem: a foto da caixa em uso corta parte dela; outras composições têm validação/origem pendentes. Pela exceção explícita do pedido, **mantida provisoriamente a arte atual assets/imagem para hero.png**, já autorizada anteriormente. Ela não foi promovida a fotografia real autenticada. Nenhuma nova imagem gerada ou montagem artificial. A empresa fornecerá as fotos definitivas futuramente. Motivos em ASSETS_STRATEGY/PENDENCIAS.

### Arquivos alterados

Aplicação: `src/app/page.tsx`, `src/config/site.ts`, `src/content/products.ts`, `src/content/home.ts`, `src/app/produtos/page.tsx`, `src/styles/globals.css`, `src/components/media/ReferenceImage.tsx` e `src/components/media/reference-image.module.css`.

Documentação: `README.md`, `docs/ARCHITECTURE.md`, `docs/PRODUCT_MATRIX.md`, `docs/ASSETS_STRATEGY.md`, `docs/ASSETS_INVENTORY.md`, `docs/PENDENCIAS.md`, `docs/AUDITORIA_GERAL.md` e este relatório. Evidências adicionadas à pasta existente `docs/final-audit-2026-10-20/`, sem relatório paralelo: check-consolidated.mjs, capture-consolidated-zero.mjs, consolidated-before.json, consolidated-products-before.json, consolidated-integrity.json, consolidated-results.json e capturas consolidated-*.png.

### Resultados realmente executados

| Verificação | Resultado |
|---|---|
| npm run lint | Exit 0, sem warnings; repetido após os ajustes finais de CSS e inclusão do teste. |
| npm run typecheck | Exit 0, tipos de rota e tsc sem erros. |
| npm run build | Exit 0; Webpack compilou em 79 s, TypeScript em 6,3 s, sete páginas geradas. Prévia pausada antes de reconstruir .next. |
| npm run verify:assets | Exit 0 antes e depois das alterações: 94 arquivos por caminho/tamanho/SHA-256; três históricos arquivados e uma exclusão autorizada preservados. Inventário/manifestos históricos não editados. |
| Integridade antes/depois | Todos os arquivos de assets/public idênticos por SHA-256, inclusive produtos, logo/favicon e PDF. Somente os oito arquivos de src listados acima mudaram. Produtos comparados estruturalmente com snapshot anterior: única mudança nos 25 registros é Linha Saudável → Linha Zero em três categorias; todo dado individual preservado. |
| Chrome — Home 375/768/900/1440 px | HTTP 200; seções antigas ausentes; nenhuma âncora #linhas; nenhuma rolagem horizontal. Negócios começa exatamente ao final da caixa do hero, sem seção vazia intermediária. Capturas abertas e inspecionadas. |
| Chrome — imagem | Decodificada nas quatro larguras; contain e proporção 3:2. Fonte estática conferida por SHA-256 contra assets/imagem para hero.png. Em 1440, imagem ~653,7 px versus 517 px da prévia anterior; em 375, 319 px versus 303 px, imagem termina em y~447,6 px na primeira tela de 1000 px. |
| Chrome — menus nas quatro larguras | Cinco rótulos esperados mais Fale com a Nutri, sem Nossas linhas. Teclado chega ao RH com outline 3 px; ativo por fragmento; hover desktop claro e ativo roxo; menu móvel fecha após seleção; acesso do rodapé preservado. RH permanece desativado. |
| Chrome — Produtos 375/1440 px | HTTP 200, 25 cartões/seis categorias. Filtro Linha Zero retorna três Açaí Zero Açúcar; combinado com 200 ml retorna um. URL antiga retorna os mesmos três produtos, com rótulo novo. Limpar restaura 25. Categoria ativa de Produtos preservada; diretório também acessível HTTP 200 e ativo na navegação. Não repetida a bateria completa de filtros/sticky/imagens ou a pesquisa municipal já aprovada. |
| Chrome — links/erros | 12 destinos internos únicos da Home/navegação conferidos por rota HTTP ou existência da âncora em cada largura; CTAs PDF continuam dois e WhatsApp mantém contato documentado. Nenhuma exceção JavaScript. |

O primeiro teste automatizado confundiu o trecho “nossas linhas” do CTA preservado com o item removido da navbar; ajustada somente a asserção, restringindo-a aos elementos corretos. A bateria completa passou depois. Captura de resultados em seção inteira apresentou artefato de elementos fixos; substituída por viewport real, sem alterar o cabeçalho/sticky. Importação TypeScript pelo Node emitiu aviso informativo MODULE_TYPELESS_PACKAGE_JSON, sem falha ou alteração de package.json. Chrome com viewport/toque emulado e reduced motion; sem aparelho físico ou leitor de tela.

**Prévia local verificada:** http://127.0.0.1:3018/ (processo ativo ao encerrar esta etapa). Sem deploy ou instalação. Permanecem foto real definitiva do hero/aceites comerciais de mídia, dados oficiais de distribuidores, canal RH para ativação, domínio/hospedagem e autorização de indexação/produção. Nenhuma dessas pendências foi presumida resolvida por este pacote. Relatos anteriores abaixo são históricos quando divergirem desta atualização.


## Hero oficial e Trabalhe Conosco na navbar — 20/10/2026

- Hero usa diretamente `assets/imagem para hero.png` (1536×1024, SHA-256 `ff734b0a1ee2ea2bc14713d3145eadc5e624d487b18ec5e09afdf53934f89cbf`), com Next Image, preload, texto alternativo e proporção 3:2. Sem edição da arte ou cópia manual em public. Removidos legenda/crédito da fotografia provisória apenas do hero. Textos, botões e dois links do PDF preservados.
- Trabalhe Conosco incluído na lista compartilhada: navbar desktop/mobile e um único acesso no rodapé, destino existente `/#trabalhe-conosco`. Ativo por fragmento, hover e foco de teclado preservados. Menu móvel até 1099 px para acomodar o novo item; desktop a partir de 1100 px, sem mudar os breakpoints do hero. Canal RH continua desativado.
- Arquivos de aplicação: src/components/media/ReferenceImage.tsx, src/config/site.ts, src/components/layout/Header.tsx, src/components/layout/Footer.tsx e src/styles/globals.css. Inventário: docs/assets-audit/inventory-v2.json, revisão 3, adição nominal autorizada, 94 arquivos; histórico preservado. Documentação: README.md, docs/ARCHITECTURE.md, docs/ASSETS_INVENTORY.md, docs/ASSETS_STRATEGY.md, docs/PENDENCIAS.md, docs/AUDITORIA_GERAL.md e este relatório.

### Resultados executados

| Verificação | Resultado |
|---|---|
| npm run verify:assets | Exit 0, 94 arquivos; hashes históricos preservados. |
| npm run lint | Exit 0, sem warnings. |
| npm run typecheck | Exit 0. |
| npm run build | Exit 0; compilação Webpack em 59 s e TypeScript em 6,3 s. |
| Chrome 375/1440 px | Nova imagem decodificada, proporção 3:2, sem legenda anterior; fonte estática servida idêntica ao original por SHA-256. |
| Navegação Chrome 375/1440 px | Navbar e rodapé testados a partir de /, /produtos e /distribuidores: destino correto, foco com outline 3 px, ativo aria-current=location, menu fecha no celular. Hover/ativo desktop conferidos; RH permanece desativado, sem link comercial para candidaturas. |
| Chrome 375/900/1100/1101/1440 px | Sem overflow horizontal; alternância de menu correta; sem exceções JavaScript. |

Evidências: docs/final-audit-2026-10-20/check-hero-careers.mjs, hero-careers-results.json, new-hero-image-375/1440.png, new-hero-home-375/1440.png e careers-navbar-900/1100/1101/1440.png. Capturas abertas e inspecionadas. A primeira execução parou porque o seletor de teste excluía o link oculto no menu fechado; ajustado apenas o teste. Captura de Home refeita aguardando decode após navegação. Chrome com celular emulado, sem aparelho físico. Não repetidos filtros/sticky já aprovados; sem instalação/deploy.

Prévia: http://127.0.0.1:3018. Permanecem pendentes canal oficial de RH, dados aprovados de distribuidores, aprovações comerciais/mídias restantes, domínio/hospedagem e liberação explícita de indexação. Esta entrega não autoriza publicação.


## Pesquisa municipal e foto institucional oficial — 20/10/2026

Escopo pontual autorizado, sem reconstruir páginas, instalar dependências ou publicar.

### O que mudou

- Distribuidores reutiliza o CSS de filtros de Produtos. Campo “Município” sob o título **Encontre um distribuidor na sua região**: abre opções ao foco/clique, filtra em tempo real sem distinguir acentos/caixa, permite toque/clique ou setas/Enter, fecha com Escape/Tab e consulta via GET com municipio. Link Limpar pesquisa preserva o padrão existente. A consulta por nome completo ou município/UF só usa grupos elegíveis.
- publishedSupplierGroups exige grupo não ilustrativo, cidade/UF preenchidos e distribuidor confirmado/aprovado com nome e cidade/UF correspondentes. Dados atuais não têm nenhum registro elegível. Interface mostra “Diretório em preparação”, nenhuma opção/cartão de Campo Bom e mensagem explícita para município sem cadastro. O exemplo na fonte não foi convertido em dado real nem apagado do histórico.
- Sobre permanece em **/#sobre**. ReferenceImage importa diretamente **assets/produção.jpg**, sem cópia manual para public. EXIF 6 tratado na reserva de dimensões 3468×4624; contain/height auto mantém a foto inteira, sem distorção. A legenda provisória e o crédito de tanques foram removidos somente de Sobre. Hero ilustrativo, texto institucional, produtos, identidade e PDF inalterados.
- Inventário v2, revisão 2, recebeu somente a adição autorizada da fotografia: 8.577.364 bytes, SHA-256 `43c440ac6663d9704fb150ae0be5503ac839784720850dc4c1f7ae785e83deb5`. Total 93 arquivos; manifesto histórico e registros antigos preservados. O arquivo com hash em .next/static/media é saída do build, não uma cópia manual adicional mantida no projeto.

### Resultados reais

| Verificação | Resultado |
|---|---|
| npm run lint | Exit 0, sem warnings do lint. Lint direcionado repetido após os últimos ajustes: exit 0. |
| npm run typecheck | Exit 0 na execução inicial e na conferência final após build. |
| npm run build | Execuções inicial e final com exit 0. Build final Webpack compilou em 13,3 s e checou TypeScript em 4,6 s. /distribuidores agora é dinâmica por searchParams, como /produtos. |
| npm run verify:assets | Exit 0: 93 arquivos por caminho/tamanho/SHA-256, três conteúdos arquivados e uma exclusão intencional autorizada. |
| node --test scripts/distributors.test.mjs | Exit 0, três testes: exclusão do exemplo real, elegibilidade de fixture aprovada e rejeição de demonstração/rascunho/nome ausente/cidade/UF incompatíveis. Node emitiu somente o aviso informativo MODULE_TYPELESS_PACKAGE_JSON ao importar TypeScript; sem alterar package.json. |
| Chrome: página real em 375/1440 px | HTTP 200; título de pesquisa correto; diretório em preparação, zero cartões e zero municípios ilustrativos. Foco/digitação sem dados, consulta inexistente e limpeza passaram. Nenhum overflow horizontal ou exceção JavaScript. |
| Chrome: sugestões/seleção em 375/1440 px | Teste com **fixtures isoladas por interceptação da resposta de teste**, sem gravar municípios/empresas na aplicação: dois rótulos explicitamente de teste, busca sem acentos, toque móvel/clique desktop, setas/Enter, seleção indicada, Escape preservando valor, reabertura, Tab e parâmetro GET passaram. A consulta final volta ao servidor real e informa ausência de cadastros. Não houve teste de distribuidor comercial real, pois não há dados aprovados. |
| Foto oficial em 375/1440 px | Imagem decodificada, contain e proporção aproximadamente 3:4 em ambas; nenhuma legenda/crédito antigo em Sobre. Fonte HTTP do arquivo estático com hash **idêntica byte a byte por SHA-256 ao original produção.jpg**; URL otimizada aponta para esse arquivo, não processing-tanks.jpg. Capturas da foto inteira abertas e inspecionadas nas duas larguras. |

Na primeira verificação de teclado, Escape nativo do input search limpava o texto e reabria as sugestões. Corrigido com preventDefault somente para Escape; Tab continua navegando normalmente. Build/TypeScript e bateria final repetidos com sucesso. As primeiras capturas completas do diretório foram feitas após scroll por âncora e mostravam artefatos de elementos fixos fora da viewport; recapturadas do topo sem foco no destino. Não foi alterado o cabeçalho para resolver um artefato de captura.

Evidências na pasta já existente: [directory-photo-results.json](final-audit-2026-10-20/directory-photo-results.json), check-directory-photo.mjs, directory-search-375/1440.png, official-production-375/1440.png e city-suggestions-fixture-375/1440.png. Capturas reais e de sugestões identificadas como fixture foram abertas e inspecionadas. Chrome com viewport/toque emulado, sem aparelho físico, leitor de tela ou hospedagem pública. Não repetidas as baterias de filtros/imagens de produto/sticky, que não mudaram.

### Arquivos e pendências

Aplicação: src/app/distribuidores/page.tsx, CitySearch.tsx (novo), distributors.module.css; src/content/suppliers.ts; src/components/media/ReferenceImage.tsx e reference-image.module.css; src/content/referenceMedia.ts. Inventário: docs/assets-audit/inventory-v2.json (somente adição nominal e autorização). Teste: scripts/distributors.test.mjs. Documentos atualizados: README, ARCHITECTURE, PENDENCIAS, ASSETS_INVENTORY, ASSETS_STRATEGY, AUDITORIA_GERAL e este relatório; evidências na pasta existente. Nenhum arquivo de imagem foi editado/criado pelo agente, nenhum produto/logo/favicon/PDF modificado.

Pendente da empresa: cadastro e autorização de municípios/distribuidores, contatos, áreas e catálogos; sem isso a lista real continua vazia corretamente. Foto de Sobre aprovada pelo pedido atual não libera imagens de produtos ou hero. Domínio/hospedagem, RH e demais aceites comerciais continuam conforme PENDENCIAS. Prévia mantida em **http://127.0.0.1:3018/distribuidores**, fotografia em **http://127.0.0.1:3018/#sobre**. Sem deploy.

## Navegação e Distribuidores — 20/10/2026

Escopo autorizado concluído: terminologia Distribuidores, migração do diretório e estados da navegação. Sem publicação, instalação, nova informação comercial ou repetição das baterias de produtos/imagens/sticky.

### Alterações

- `/distribuidores` é a rota oficial. Página movida, CSS apenas movido/renomeado, sem redesenho. `/fornecedores` redireciona permanentemente com HTTP 308; parâmetros e fragmento preservados no Chrome. Não há página duplicada.
- Rótulo compartilhado de cabeçalho/rodapé, metadata, chamada de abertura e avisos agora dizem Distribuidores/distribuidor. Não sobra “fornecedor” em texto da aplicação; a única ocorrência em configuração é a origem do redirect legado. CTAs que já diziam distribuidor foram mantidos. Dados internos em suppliers.ts não foram renomeados/refatorados; só seu comentário foi atualizado.
- NavLink compartilhado identifica página por pathname (queries não afetam o ativo) e seção da Home por hashchange, inclusive voltar do navegador. `aria-current=page` ou `location`, conforme o destino. Não há scrollspy; Home sem fragmento não seleciona uma seção arbitrária.
- Ativo: fundo #52245f, texto branco e faixa inferior #bcda82 persistentes ao retirar o mouse. Hover de item não ativo: fundo #eee7f1, texto #52245f e sublinhado. Foco por Tab: contorno roxo de 3 px, independente do hover/ativo. Paleta existente, mesma solução no menu móvel e rodapé; alvos e responsividade mantidos.

### Resultados reais

| Verificação | Resultado |
|---|---|
| npm run lint | Exit 0, sem warnings. |
| npm run typecheck | Primeira tentativa exit 2 por tipos antigos em `.next/types` e `.next/dev/types` referenciando src/app/fornecedores/page.js. Só essas duas pastas geradas foram regeneradas, com caminhos conferidos dentro de .next. Após build, repetição **exit 0**, sem correção artificial em tipos/fonte. |
| npm run build | **Exit 0**, compilação em 59 s; TypeScript interno em 5,4 s. Rotas: Home, 404, Distribuidores, Produtos, robots e sitemap. |
| npm run verify:assets | **Exit 0**, 92 arquivos por caminho/tamanho/SHA-256, três conteúdos arquivados e uma exclusão autorizada. Sem imagens/logo/favicon/PDF alterados. |
| Chrome, 375/900/1440 px | Emulação de toque em 375; redirect 308 e acesso final à rota oficial nas três larguras, mantendo query e hash. Navegação entre Produtos e Distribuidores em seis combinações; menu móvel fecha após clique. Nenhum link visível aponta para a rota antiga e nenhum texto de fornecedor nas páginas testadas. |
| Ativo/hover/foco | Seis verificações de páginas com ativo persistente no cabeçalho e rodapé, incluindo URL de Produtos com query. Hover de itens não ativos no cabeçalho/rodapé em 900/1440; navegação por Tab e outline 3 px nas três larguras. Contraste de texto ativo e hover calculado e ≥4,5:1 nos pares testados; não é certificação integral de acessibilidade. |
| Seções e histórico | Nove verificações de âncoras linhas/sobre/contato nas três larguras, exatamente um item ativo por menu. Troca de fragmento na mesma página e voltar do navegador atualizam o destaque. |
| Visual e responsividade | Sem overflow horizontal em 375/900/1440. Capturas de menu/foco móvel, hover desktop e rodapé ativo abertas e inspecionadas. Zero exceções JavaScript na execução final. |

A primeira execução do teste de âncoras fechava um menu já aberto ao navegar entre fragmentos da mesma página e esperava um link oculto; o script foi ajustado para abrir somente quando fechado. Repetição completa passou; não foi necessária mudança na aplicação por essa ocorrência.

Evidências na pasta existente: [navigation-results.json](final-audit-2026-10-20/navigation-results.json), check-navigation.mjs e navigation-*.png. Chrome com viewports emuladas, sem aparelhos físicos ou outros navegadores. Scripts históricos de auditorias anteriores foram preservados; esta etapa executou o teste pontual citado. Prévia mantida em **http://127.0.0.1:3018/distribuidores**.

Arquivos de aplicação/configuração: src/config/site.ts; src/components/layout/Header.tsx, Footer.tsx e NavLink.tsx; src/styles/globals.css; src/app/distribuidores/page.tsx e distributors.module.css (migrados da antiga pasta fornecedores); next.config.ts; comentários em src/content/suppliers.ts e src/config/seo.ts. Documentação: README, ARCHITECTURE, PENDENCIAS, SEO, AUDITORIA_GERAL e este relatório; evidências adicionadas à pasta existente.

Pendência comercial P21 preservada: nome, contatos, localização, regiões atendidas, catálogo e autorização de cada distribuidor. Um único exemplo demonstrativo, sem contatos próprios ativos; Campo Bom/RS não é confirmação de distribuidor. Diretório continua noindex e fora do sitemap. Domínio/hospedagem, aprovação de mídias, RH e aceite público seguem suas pendências anteriores. Nenhum deploy.

## Regularização final e preparação de publicação — 20/10/2026

Escopo pontual autorizado: exclusão histórica, integridade v2, 404 e SEO preparatório. Sem nova auditoria geral, instalação ou deploy. Os registros anteriores permanecem como histórico.

### Alterações e rastreabilidade

- Exclusão de `crop_zero220_label.png` confirmada pelo usuário por não ser necessário. Sem dependência funcional em src/scripts da aplicação; arquivo não procurado, recuperado ou recriado. Hash e autorização explícita no inventário v2 e ASSETS_INVENTORY. O manifesto histórico metadata.json permanece com SHA-256 `94c72b56b52fa57c0724bb9ae1650a365b57fd182fb68691b9645e823fb6021f`.
- Três conteúdos antigos preservados como cópias byte a byte em assets/history, a partir de fontes conhecidas em ../catalogo_v7. Sem alteração dessas fontes ou das mídias atuais e sem associações no site. Hashes e aliases históricos documentados em ASSETS_INVENTORY.
- Inventário v2 contém 92 arquivos (59 assets, 33 public), caminhos/tamanhos/hashes/aliases, adições e 39 conteúdos históricos: 38 preservados, incluindo três arquivados, e um excluído intencionalmente. Verificador aponta ausentes, alterações, extras, histórico adulterado e exclusões sem autorização; também detecta reintrodução de conteúdo excluído. A contagem fixa antiga foi substituída por validação nominal e por conteúdo, não por uma aceitação genérica de ausências.
- 404: texto atual, título próprio e links para início/Produtos, usando componentes e estilos existentes. Status HTTP 404 mantido.
- SEO: título/descrição da Home atualizados; canonical Home/Produtos somente com domínio HTTPS explicitamente confirmado. Sitemap preparado para Home/Produtos, sem consultas ou diretório demonstrativo. Enquanto domínio não confirmado, XML vazio e nenhum canonical. Meta noindex, X-Robots-Tag e Disallow: / mantidos incondicionalmente. Confirmar domínio não libera indexação e exige novo build para metadata/sitemap.

### Resultados reais

| Verificação | Resultado |
|---|---|
| npm run verify:assets | Exit 0: 92 arquivos por caminho/tamanho/SHA-256; três arquivos históricos arquivados e uma exclusão autorizada. Manifesto original protegido por hash. |
| node --test scripts/verify-assets.test.mjs scripts/seo.test.mjs | Exit 0, **11 testes aprovados**: integridade nominal, alterações, ausências, extras, autorização, reintrodução, histórico, limites de caminho e configuração de domínio/canonical. Fixtures temporárias próprias; nenhum asset real usado como alvo de mutação. Node emitiu aviso informativo MODULE_TYPELESS_PACKAGE_JSON ao importar o helper TypeScript no teste; não houve falha nem alteração de package.json para escondê-lo. |
| npm run lint | Exit 0, sem warnings do lint. |
| npm run typecheck | Exit 0. |
| npm run build | Exit 0, Webpack; compilação em 59 s e TypeScript em 6,1 s. Rotas anteriores mais /sitemap.xml, sem configuração de domínio preenchida. |
| Chrome, produção local | Oito combinações: Home/Produtos/Fornecedores/404 × 375/1440 px. Páginas existentes 200, ausente 404, sem overflow horizontal; título Home e título/texto 404 corretos; saídas 404 para Home e Produtos funcionando. Capturas 404 nas duas larguras abertas e inspecionadas. Nenhuma exceção JavaScript. |
| Indexação e sitemap | Meta noindex e X-Robots-Tag noindex/nofollow/noarchive nas oito combinações; nenhum canonical. robots.txt 200 com Disallow: / e sem anúncio de sitemap. sitemap.xml 200, XML válido com urlset vazio e nenhuma URL inventada. Caminho positivo de domínio confirmado testado somente com fixture .invalid em teste unitário, sem publicação/requisição externa. |
| Recursos essenciais | Logo, favicons 16/32 e PDF: HEAD 200, MIME correto e header de não indexação. Hashes dos 89 arquivos preexistentes de assets/public iguais ao baseline anterior. PDF/identidade/imagens utilizadas intocados. |

Prévia restaurada após build e mantida em **http://127.0.0.1:3018/produtos**, sem duplicatas. Não repetidas as baterias já aprovadas de filtros, imagens/decodificação, sticky e auditoria geral. Contagem de 25 produtos conferida somente como confirmação da saída da 404 para o catálogo. Limites: Chrome com viewport emulada, sem aparelho físico, leitor de tela, hospedagem pública ou domínio real. Erros HTTP 404 da rota propositalmente inexistente são esperados, não se declara console sem qualquer mensagem de rede.

Evidências no diretório já existente: [regularization-results.json](final-audit-2026-10-20/regularization-results.json), check-regularization.mjs e regularization-404-375/1440.png. Verificador, testes e inventário versionado estão nos arquivos de implementação, sem duplicar relatório. Documentos atualizados: README, AUDITORIA_GERAL, PREVIEW_REPORT, PENDENCIAS, ASSETS_INVENTORY, ASSETS_STRATEGY e SEO.

**Ainda não pronto para publicar:** domínio/hospedagem indefinidos, aprovação comercial final de mídias/textos e definição de fornecedores; RH segue inativo até confirmação do canal ou decisão explícita de adiar. Revisões aplicáveis de privacidade, acessibilidade e ambiente final permanecem. Canonical/sitemap completos e liberação coordenada dos bloqueios dependem dessas decisões e de autorização posterior. Não retirar avisos provisórios ou tratar sucesso técnico como aprovação comercial.

## Auditoria final antes da publicação — 20/10/2026

**Diagnóstico e documentação, sem correções de aplicação ou deploy.** Parecer vigente, prioridades, confirmações da empresa e critérios anteriores à publicação em [AUDITORIA_GERAL.md](AUDITORIA_GERAL.md). Os registros abaixo são históricos quando divergirem do estado atual: logo/favicon aprovados, 25 SKUs com imagem, seis categorias, zero placeholders neutros; dois usos provisórios de Guaraná com avisos; RH desativado e fornecedor demonstrativo.

### Resultados novos observados

- `npm run lint`: **exit 0**, sem warnings. `npm run typecheck`: **exit 0**. Executados sequencialmente, sem instalação.
- `npm audit --json`: **exit 0**, zero vulnerabilidades reportadas para o lockfile; resultado em [npm-audit.json](final-audit-2026-10-20/npm-audit.json). Não equivale a garantia integral de segurança.
- `npm run verify:assets`: **exit 1**, erro exato **“A quantidade de arquivos originais mudou.”** A comparação adicional encontrou 56 arquivos atuais versus 58 históricos, seis nomes/quatro conteúdos antigos não localizados em assets/public. As 24 cópias públicas atuais têm originais idênticos; os 125 arquivos monitorados não mudaram durante a auditoria. P19 continua aberta, sem ajuste artificial do teste.
- Chrome **152.0.7977.75**, build local já validado servido em **http://127.0.0.1:3018**: 12 combinações de três páginas × 320/375/768/1440 px, imagens decodificadas, um h1 por rota, sem overflow horizontal. Trinta cliques de navegação, 36 destinos internos/âncoras por origem, menu/Escape/retorno de foco aprovados.
- Produtos: 25 IDs, seis contagens, filtros por categoria/combinação, vazio, inválido, limpar e GET sem JavaScript aprovados; 12 verificações sticky em 375/1440. Não refeitas as 42 combinações/ordenação completas já aprovadas sem mudança das regras. Nenhum código ou regra do sticky alterado.
- PDF V7: 200, application/pdf, 16.822.687 bytes, download testado, original/cópia/resposta/download idênticos por SHA-256. Nenhum PDF editado ou recomprimido. Abertura por popup reaproveita evidência anterior.
- Teclado: 96 passos amostrados de Tab nas três páginas em 375/1440, sem foco encoberto. Skip link visível ao foco e próximo Tab dentro de main nas três rotas. Selects com labels, alt nas imagens, controles nomeados e IDs sem duplicação. Com prefers-reduced-motion, scroll-behavior auto. Não houve leitor de tela, axe ou certificação integral WCAG.
- Desempenho, uma amostra por página: cache de navegador desativado, viewport 375×812, CPU 4×, latência 150 ms e download 200.000 B/s. Home LCP 1.096 ms; Produtos LCP 932 ms; soma dos deslocamentos sem interação 0 em ambas; recursos 499.666/541.971 B. Cache do otimizador do servidor aquecida, LCP de texto acima da dobra; não representa imagens carregadas em toda a rolagem, INP, CLS por janelas ou hospedagem pública.
- Zero exceções JavaScript/requisições interrompidas no fluxo principal. Console não integralmente limpo: aviso isolado de preload de variante do hero durante redimensionamentos e erro HTTP 404 esperado na navegação proposital à rota inexistente. Não houve envio de mensagens/currículos a terceiros. Links externos conferidos por URL, sem validar atendimento/licenças remotamente.
- SEO observado: títulos/descrições presentes; noindex/meta, X-Robots-Tag e Disallow: /; canonical/OG/JSON-LD ausentes, sitemap.xml e privacidade respondem 404. Sobre, Contato e RH são âncoras válidas da Home. Fornecedores permanece demonstrativo por decisão, sem contatos comerciais inventados. Texto de 404 ainda descreve somente a página inicial.

### Evidências

[Resultados principais](final-audit-2026-10-20/browser-results.json), [teclado/desempenho](final-audit-2026-10-20/accessibility-performance.json), [skip link](final-audit-2026-10-20/skip-link.json), [reconciliação](final-audit-2026-10-20/assets-reconciliation.json), [baseline](final-audit-2026-10-20/baseline.json), scripts e seis capturas em `final-audit-2026-10-20/`. Capturas gerais de Home móvel e Fornecedores desktop abertas; a resolução reduzida de páginas muito longas limita a inspeção individual de artes. Aprovação comercial humana permanece pendente. Sem aparelhos físicos, Safari/Firefox, Search Console ou infraestrutura de produção.

### Encerramento: build final e prévia restaurada

`npm run build`: **exit 0**. Compilação Webpack em 59 s; checagem TypeScript do build em 12 s; seis páginas geradas e coleta de traces concluídas. Rotas finais: `/`, `/_not-found`, `/fornecedores`, `/produtos` dinâmica e `/robots.txt`. Sem mudança de configuração para compilar.

A prévia foi pausada para reconstruir `.next` e restaurada sem duplicatas com `npm run start -- --port 3018`; servidor pronto, mantido em execução. **Endereço verificado: http://127.0.0.1:3018/produtos**. Após o novo build, Chrome confirmou `/`, `/produtos` e `/fornecedores` com HTTP 200, 25 produtos e Frutados sticky em top 77 px no celular, sem exceções JavaScript. Todos os 125 hashes do baseline permaneceram iguais após o build. [Conferência final](final-audit-2026-10-20/final-verification.json).

Capturas adicionais abertas e inspecionadas em tamanho legível: hero desktop, Sobre e RH em 375 px e Frutados sticky em 375 px (`final-*.png`). Textos, avisos e botão desativado visíveis; título abaixo do cabeçalho conforme geometria. As capturas de seção isolada documentam conteúdo, sem avaliar posição do cabeçalho fora do recorte. A bateria principal usou o build existente antes da reconstrução; a fonte era a mesma.

Documentação atualizada: README, AUDITORIA_GERAL, PREVIEW_REPORT, PENDENCIAS, ASSETS_INVENTORY, ASSETS_STRATEGY e SEO; scripts/JSON/capturas adicionados em final-audit-2026-10-20. Nenhum arquivo de aplicação, mídia, original, PDF, pacote ou lockfile alterado. Nenhuma correção ampla, instalação ou publicação. Próximas mudanças de aplicação dependem de autorização específica.

## Validação final da auditoria de produtos — 19/10/2026

Concluída a retomada após a interrupção por limite de uso. Estado preservado: **25 SKUs, seis categorias, 15 imagens e 10 placeholders**. Prévia de produção verificada no Chrome: **http://127.0.0.1:3016/produtos**. Sem deploy ou instalação.

### Evidências anteriores reaproveitadas

O arquivo `product-audit-2026-10-19/results.json` já havia sido salvo ao final da execução completa do script, após todas as asserções. Portanto, filtros, ordenação e PDF não estavam pendentes, apesar do resumo da interrupção. Não foram repetidos nesta retomada.

| Verificação | Resultado e evidência |
|---|---|
| 25 SKUs únicos e seis categorias | Aprovado na execução anterior; IDs confrontados com products.ts. Contagens 8/6/2/2/4/3. |
| Filtros e ordenação | Aprovado: seis categorias, sete volumes, 42 combinações, ordem decrescente e desempates, limpar filtros, combinação vazia, filtro inválido, teclado e formulário sem JavaScript. |
| Imagens e responsividade | Aprovado anteriormente: 90 verificações (15 imagens × seis larguras), 10 placeholders, imagens decodificadas, alt/nome/volume e manifesto conferidos, object-fit contain, avisos mantidos e sem overflow horizontal. |
| PDF V7 | Aprovado anteriormente: HTTP 200, MIME PDF, abertura em nova aba e download. SHA-256 original = público = resposta = download: `8719d38b610810d14305c9b1757a862dc779de098b6611ba65fc6e22272052e5`. Não equivale a uma nova revisão editorial das 16 páginas. |
| Build, lint e TypeScript | Aprovados na execução anterior, com saída 0 registrada na sessão. Build contém a nova associação. Não repetidos: nenhum código de aplicação alterado nesta retomada. |

### Verificações concluídas nesta retomada

Chrome 155.0.8059.80, modo headless, `/produtos`: 320, 375, 768, 900, 1100 e 1440 px. Cabeçalho medido em scrollY 0, 200, 650 e 1200: **24 verificações aprovadas**. Fundo `rgb(253, 252, 253)` sem alfa, opacity 1, sticky, z-index 20 e top 0 durante a rolagem; logo decodificado e contido no cabeçalho, sem overflow horizontal. Menu abriu e fechou por Escape em 320/375/768. Nenhum erro JavaScript. Capturas do cabeçalho rolado nas seis larguras e dos três menus inspecionadas; captura de 320 px após decode mostra logo completo. Não houve defeito reproduzível que exigisse alteração de layout.

Evidências: [resultado do cabeçalho](product-audit-2026-10-19/header-final-results.json), [teste executado](product-audit-2026-10-19/check-header-final.mjs), `header-final-*.png`, `header-menu-final-*.png` e `viewport-final-*.png`. As capturas completas são feitas antes da captura isolada do cabeçalho e confirmam o scrollY solicitado; essa ordem foi corrigida no script de evidência e a captura foi repetida para evitar reposicionamento automático do navegador. O arquivo antigo `top-320.png` foi preservado como histórico; usar `viewport-final-320-0.png` para o estado carregado.

Integridade desta retomada: **114 arquivos em src/assets/public sem mudança de hash**, incluindo produtos, imagens, logo, favicon, Home, fornecedores, RH e PDF. [Comparação](product-audit-2026-10-19/resume-integrity.json). Não foi refeita a integração de Trufado Avelã 220 ml.

### Falhas de execução e limites

Na etapa anterior, a primeira tentativa do navegador encontrou `ERR_NETWORK_ACCESS_DENIED`; a seguinte encontrou servidor indisponível (`ERR_CONNECTION_REFUSED`). Após iniciar a prévia no contexto autorizado, o teste de produtos concluiu com sucesso. A tentativa extra de cabeçalho foi então impedida pelo limite de uso da revisão automática; não foi executada nem contada como aprovada. Nesta retomada o acesso autorizado funcionou e a pendência foi concluída. **Nenhuma falha funcional nos testes finais.**

Não executados novamente: build/lint/TypeScript, suíte de produtos/PDF e testes completos das demais rotas, por já existirem resultados aprovados e não haver mudança de aplicação. A nova verificação de rolagem cobre posições determinadas com movimento reduzido, não certifica todos os estados de animação, navegadores ou dispositivos físicos. As dez pendências comerciais de imagens e a limitação de resolução da nova imagem continuam registradas em AUDIT.md; testes técnicos não aprovam fotografias para publicação.

Arquivos desta retomada: este relatório, ASSETS_INVENTORY.md, ASSETS_STRATEGY.md, PENDENCIAS.md e registros adicionados em `product-audit-2026-10-19/` (FINAL_VALIDATION.md, script, JSON de baseline/integridade/resultados e 27 PNGs). Código da aplicação e mídias preservados.


## Retomada da validação do cabeçalho — 19/10/2026

Prévia desta retomada: **http://127.0.0.1:3015** (servidor local de produção). Nenhum deploy realizado.

A correção anterior continua presente em `src/styles/globals.css`: fundo global opaco `var(--color-paper)`. Não houve nova edição da aplicação. Sticky, z-index, alturas, offsets, espaçamentos, marca e favicon foram preservados. O backup `docs/header-fix/globals-before.css` e as evidências anteriores permanecem disponíveis. Não existe repositório Git nesta pasta; a comparação foi feita com backups e hashes existentes.

| Verificação executada | Resultado |
|---|---|
| Build de produção (`npm run build`) | Aprovado, exit 0. |
| Lint (`npm run lint`) | Aprovado, exit 0. |
| TypeScript (`npm run typecheck`) | Aprovado, exit 0. |
| Chrome: /, /produtos e /fornecedores | 18 combinações nas larguras 320, 375, 768, 900, 1100 e 1440 px; HTTP 200, imagens carregadas e sem overflow horizontal. |
| Cabeçalho e rolagem | Fundo opaco no início e durante a rolagem; 468 posições verificadas. Capturas de início/rolagem inspecionadas visualmente nas seis larguras. Nenhuma nova falha de transparência reproduzida. |
| Âncoras e navegação | 48 verificações de âncoras e 54 cliques de navegação aprovados; títulos fora da área encoberta pelo cabeçalho. |
| Movimento normal | Teste adicional sem redução de movimento: 18 verificações com roda para baixo/cima, 9 aberturas/fechamentos do menu móvel e 18 cliques em âncoras aprovados. |
| Menu | Botão abrir/fechar, Escape e navegação funcionando; capturas do menu nas três rotas em 320/375/768 inspecionadas. Sem sobreposição entre marca, botão e links. Desktop em 900/1100/1440 preservado. |
| Catálogo | 25 SKUs, seis categorias, ordenação de volumes, filtros e 42 combinações aprovados; 14 imagens e 11 placeholders mantidos. |
| Links | 79 ocorrências verificadas; internos HTTP 200 e âncoras existentes. Links externos conferidos por URL, sem envio de mensagens nem validação dos serviços externos. |
| PDF V7 | HTTP 200, abertura em nova aba, download e SHA-256 preservado: 8719d38b610810d14305c9b1757a862dc779de098b6611ba65fc6e22272052e5. |
| Fornecedores/RH | Um cartão demonstrativo sem links de fornecedor ativos; botão de RH continua desativado. |

### Limitações e ocorrências dos testes

Chrome instalado, automatizado em modo headless; larguras de viewport simuladas, sem aparelho físico ou outros navegadores. A bateria principal usa redução de movimento para estabilizar medições, complementada pelos testes de movimento normal descritos acima. Não foi reavaliado o ícone na interface da aba; os arquivos de favicon responderam por HTTP.

O teste agregado de links inicialmente parou ao consultar caminhos antigos de assets. A comparação ampliada encontrou arquivos reorganizados em subpastas e conteúdos iguais por SHA-256; o inventário histórico precisa ser reconciliado. `assets/Screenshot_20260905-182832_Instagram.jpg` não foi localizado por hash em assets/public na busca registrada. Na conferência final, também não foi encontrado em assets o conteúdo histórico de `assets/crop_zero220_label.png`. As leituras sucessivas mostraram mudanças na organização do acervo durante a validação; a autoria não foi determinada. Não foi possível afirmar preservação integral do acervo histórico pelos caminhos originais. Nenhum ativo foi movido, removido ou regravado por esta retomada. Os resultados iniciais de integridade não substituem esta ressalva; consultar `final-integrity.json` e `relocated-assets.json`.

Na repetição, o teste de limpar filtros leu o DOM antes da conclusão da navegação (6 cards em vez de 25). Foi acrescentada espera pela atualização somente no script de teste, e a repetição passou. Não foi necessária mudança nos filtros da aplicação. A checagem funcional de links e a divergência do inventário agora são registradas separadamente, sem declarar o inventário aprovado.

### Arquivos e evidências desta retomada

Atualizado somente este relatório, além dos scripts, checkpoints, JSONs e capturas adicionados em `docs/header-validation-2026-10-19/`. Evidências principais: `results.json`, `scroll-results.json`, `normal-motion.json`, `products/results.json`, `links/results.json`, `final-integrity.json`; painéis visuais `top-sheet.png`, `scroll-sheet.png`, `menus-anchors-sheet.png`. Nenhum novo ajuste de CSS/componentes, imagens, dados comerciais ou configuração de produção.

Pendência fora do escopo do cabeçalho: reconciliar o inventário com a organização atual do acervo e esclarecer os dois conteúdos históricos não localizados na conferência final. Os testes pendentes do cabeçalho foram concluídos.

---

## Revisão visual e imagens — 18/10/2026

Prévia atual: **http://127.0.0.1:3013**. Escopo concluído: correção pontual do cabeçalho móvel, revisão visual da Home e uma nova correspondência de imagem. Logo/favicons aprovados, layout, paleta, catálogo, contatos e RH preservados. Nenhum deploy.

### Cabeçalho: reprodução e correção

Em 320, 375 e 768 px, a rolagem foi posicionada com o título do contato a 25 px do topo. O fundo anterior rgba(253,252,253,0.96) deixava o texto da seção verde visível através da área da marca/menu. Capturas contact-scroll-before-* registram o efeito antes da alteração. Corrigido somente com `.site-header { background: var(--color-paper); }` dentro do breakpoint existente de até 899 px. Altura, posição sticky, logo, menu, espaçamentos e comportamento desktop não mudaram.

Depois: fundo móvel rgb(253,252,253), sem transparência do texto; capturas contact-scroll-after-*. A rolagem continua passando normalmente por baixo do cabeçalho sticky opaco. No acesso pelo link Contato, nenhum título fica sob ele: topo do título aproximadamente 201/201/275 px em 320/375/768, abaixo do cabeçalho de 77 px. Não houve necessidade de mudar offsets ou layout.

### Imagens e Home

**14 produtos com imagens e 11 placeholders.** Acrescentado somente Açaí Natural 5 L usando assets/natural atualizado.png, copiado sem processamento para public/media/products/natural atualizado.png. Natural na tampa/frente, 5 L e 4,7 kg legíveis e caixa Food Service coerente com a matriz. Não é autenticação oficial nem comprovação de que a embalagem é vigente; preservada a legenda de validação final pendente. A versão antiga com Guaraná na frente continua excluída. Card 4:5, object-fit contain e embalagem inteira verificados visualmente nas seis larguras. SHA-256 original/cópia: c7a33eef9e159468237ff88e6758ff7a4c17283481532c831f9401d11717187a.

Home revisada do hero ao rodapé nas seis larguras. Hero de consumo e referência industrial visíveis com créditos/avisos; seis categorias completas; Natural 1,5 L nos destaques e dois placeholders necessários (Banana 1,5 L e Zero 200 ml); Negócios, Sobre, RH, Contato e rodapé com conteúdo e espaçamento coerentes. Nenhuma nova área vazia injustificada, duplicação acidental ou corte de embalagem diagnosticado. Reuso do Natural 1,5 L em Home/catálogo é contextual. Referência industrial permanece provisória e mais escura que o restante; foto real autorizada da operação continua pendente. Não foram alteradas imagens ou seções da Home.

### Validação executada

| Teste | Resultado |
|---|---|
| npm run build | Exit 0. |
| npm run lint | Exit 0, zero warnings. |
| npm run typecheck | Exit 0. |
| Chrome: /, /produtos, /fornecedores | 18 combinações em 320, 375, 768, 900, 1100 e 1440 px: HTTP 200; todas as imagens decodificadas; sem overflow horizontal ou erro JavaScript. |
| Menu, marca e favicon | Menu aberto/fechado, Escape e ausência de sobreposição entre marca/menu confirmados; alturas/proporções aprovadas intactas. Dois favicons definitivos com HTTP 200. Não foi feita nova captura da aba nesta etapa. |
| Home e nova imagem | Seções capturadas e inspecionadas nas seis larguras; legenda ilustrativa e créditos preservados; âncora Contato segura; Natural 5 L carregado com caminho correto, proporção 4:5 e contain. |
| Produtos | 25 IDs, seis categorias 8/6/2/2/4/3, ordenação, seis filtros de categoria, sete volumes, 42 combinações, vazio/inválido, limpar, teclado e sem JavaScript passaram. |
| Links e fornecedores | 79 ocorrências de links conferidas: internos HTTP 200 e âncoras existentes; externos comparados com URLs comerciais/créditos esperados, sem envio externo. Um fornecedor demonstrativo sem links ativos; RH permanece desativado. |
| PDF V7 | HTTP 200, download e abertura em nova aba; hashes original, público, resposta e download iguais a 8719d38b610810d14305c9b1757a862dc779de098b6611ba65fc6e22272052e5. |
| Preservação | Baseline de src/assets/public: somente globals.css e productImages.ts mudaram entre arquivos preexistentes. Originais, logo/favicon, imagens antigas, SKUs, filtros, fornecedores e PDF intactos. |

Evidências em visual-review/results.json, home-results.json, products/results.json, links/results.json e integrity.json. Testes existentes reutilizados em cópias nesta pasta para preservar relatórios históricos; contagens ajustadas para 14/11 e integridade confrontada com baseline atual. A leitura inicial de um script histórico encontrou codificação mista; cópia de teste normalizou somente o texto de log inválido. Capturas isoladas das seções foram repetidas ocultando cabeçalho/skip-link apenas durante a captura, para impedir interferência de elementos fixos no recorte; capturas de rolagem mantêm o cabeçalho real visível.

Alterados: src/styles/globals.css, src/content/productImages.ts e os quatro documentos desta etapa. Novo ativo: public/media/products/natural atualizado.png. Novas evidências/backups em docs/visual-review/. Nenhum componente aprovado foi refeito. Para reverter, comparar e restaurar os dois arquivos de aplicação de visual-review/before/src/; a cópia pública pode permanecer sem referência. Não sobrescrever mudanças posteriores. Backups e originais preservados.


## Logotipo aprovado e consolidado — 18/10/2026

O proprietário aprovou visualmente o logo no cabeçalho desktop/mobile, rodapé e favicon apresentados em `docs/logo-trial/`. A implementação ativa agora usa `BrandLogo` e arquivos definitivos em `public/media/brand/`, sem depender de `LOGO_PREVIEW`. Essa decisão substitui a pendência de aprovação da marca descrita nos registros históricos abaixo; não aprova produtos, fornecedores, demais imagens ou publicação.

**Prévia local: http://127.0.0.1:3012. Nenhum deploy realizado.**

| Teste executado | Resultado real |
|---|---|
| Build | `npm run build`: exit 0, compilação e geração concluídas com LOGO_PREVIEW=0. Uma execução inicial foi interrompida pelo agente para corrigir a codificação UTF-8 durante a edição; a versão corrigida foi compilada integralmente. |
| Lint | `npm run lint`: exit 0, zero warnings. |
| TypeScript | `npm run typecheck`: exit 0. |
| Chrome: Home, Produtos e Fornecedores | 18 combinações aprovadas: cada rota em 320, 375, 768, 900, 1100 e 1440 px; HTTP 200, imagens decodificadas e nenhum erro JavaScript. |
| Cabeçalho/menu/rodapé | Inspeção das novas capturas nas seis larguras; proporções e alturas 56/72/120 px confirmadas. Sem corte, overflow horizontal ou sobreposição da marca com o menu; menu aberto também verificado e fechamento por Escape testado. |
| Comparação com a aprovação | 36 de 36 capturas de cabeçalho/rodapé idênticas pixel a pixel ao teste aprovado; evidência em logo-approved/visual-comparison.json. |
| Favicon | Exatamente duas referências ativas para /media/brand/favicon-16.png e favicon-32.png, HTTP 200. PNG RGBA 16×16 e 32×32 com transparência. Aba real do Chrome capturada e inspecionada em logo-approved/chrome-tab.png. |
| Produtos | 25 SKUs, seis categorias (8/6/2/2/4/3), 13 imagens e 12 placeholders preservados. Filtros de categorias/volumes, 42 combinações, ordenação, limpeza, estado vazio, parâmetro inválido, teclado e funcionamento sem JavaScript passaram. |
| PDF V7 | HTTP 200, download e abertura em nova aba passaram. Hash da resposta/download igual aos arquivos original e público: 8719d38b610810d14305c9b1757a862dc779de098b6611ba65fc6e22272052e5. |
| Conteúdo e originais | Hashes confirmam que, entre arquivos preexistentes de src/assets/public, só Header.tsx, Footer.tsx e layout.tsx foram alterados. WhatsApp preservado e RH desativado no navegador. Logo e favicons definitivos idênticos byte a byte aos aprovados; original intacto. |

Não foi encontrado favicon.ico/icon.* concorrente no App Router. Os PNG históricos não são referenciados pelos metadados atuais. Mantida a apresentação aceita: assinatura pequena no cabeçalho e ilegível nos tamanhos de favicon, sem tentar compensar por recorte/deformação. O aviso geral de prévia do site permanece, pois outros conteúdos ainda dependem de validação e não houve publicação.

Arquivos definitivos e reversão: [logo-approved/README.md](logo-approved/README.md). Novos: BrandLogo.tsx, brand-logo.module.css e três arquivos em public/media/brand/. Alterados: Header.tsx, Footer.tsx, layout.tsx, PREVIEW_REPORT, PENDENCIAS e ASSETS_STRATEGY. Evidências/scripts/backups novos em docs/logo-approved/. Arquivos temporários antigos preservados, inativos, para comparação e reversão; nenhum backup/ativo removido. A flag antiga não reverte mais o código consolidado: restaurar os três arquivos do backup, recompilar e reiniciar conforme README.


## Teste reversível do logotipo — 18/10/2026

Prévia local: http://127.0.0.1:3011. Uso temporário autorizado para avaliação; não constitui aprovação oficial. Logo fonte `assets/logo_2026_transparent.png` preservado; cópia pública idêntica, SHA-256 `0E0457C1E04E33CEB2303A722FD84E8F162CBD3D9EC3CCF0906573EBDA5FDBC4`. Derivados PNG 16/32 px separados, arte inteira com contain/transparência. Flag `LOGO_PREVIEW=1` habilita imagem e ícones só na execução local; nenhuma configuração de hospedagem, indexação ou produção alterada.

| Verificação executada | Resultado |
|---|---|
| Build | Aprovado, exit 0. Primeira tentativa falhou com EPERM em .next; repetição com permissão de gravação concluiu. |
| Lint | Aprovado, exit 0, zero warnings. |
| TypeScript | Aprovado, exit 0; também validado pelo build. |
| Chrome: /, /produtos e /fornecedores | HTTP 200 nas 18 combinações com 320, 375, 768, 900, 1100 e 1440 px. |
| Imagens e layout | Todas as imagens decodificadas; sem overflow horizontal; logos com proporção original. Capturas dos cabeçalhos/rodapés das três rotas e seis larguras inspecionadas. Sem corte ou sobreposição na área alterada. |
| Menu e links | Menu abre e fecha com Escape nas três larguras móveis; separação entre marca/menu/navegação verificada. Cliques reais para Produtos, Fornecedores, início e âncoras Linhas/Sobre/Contato passaram. CTA comercial mantém o href oficial, sem envio de mensagem. |
| Favicon | Metadados com PNG 16 e 32 px e respostas HTTP 200. Derivados visualizados em tamanho real; aba real do Chrome capturada e inspecionada em logo-trial/chrome-tab.png. Não aprovado oficialmente. |
| Catálogo/RH | 25 cards, 13 imagens e 12 placeholders confirmados em cada largura; botão RH continua desativado. Hashes de todos os arquivos preexistentes em assets/public/src comparados: só layout/Header/Footer mudaram. SKUs, categorias, filtros, ordenação, fornecedores, contatos, imagens e PDF V7 permanecem intactos. |

Cabeçalho: logo com altura 72 px no desktop e 56 px abaixo de 900 px; rodapé 120 px. Nome reconhecível, assinatura pequena no desktop e sem leitura confortável no móvel. Rodapé oferece melhor definição, mas assinatura ainda miúda. Favicon 16 px comunica principalmente silhueta/cores; 32 px melhora reconhecimento, sem tornar a assinatura legível. Transparência e contraste adequados sobre o fundo claro existente; nenhum redesenho/recorte.

Falhas de infraestrutura do navegador (loopback bloqueado/timeout) foram resolvidas executando servidor e Chrome no mesmo ambiente local. O primeiro teste automatizado também usou seletor header ambíguo em Produtos; corrigido para .site-header e bateria completa repetida com sucesso. Resultados em logo-trial/results.json. Nenhum erro JavaScript registrado na bateria final.

Alterados: Header.tsx, Footer.tsx, layout.tsx; adicionados PreviewLogo.tsx, preview-logo.module.css e três arquivos em public/media/logo-trial. Documentação: esta seção, PENDENCIAS e evidências em logo-trial. Backups completos e instruções de reversão em [logo-trial/README.md](logo-trial/README.md). Para desativar, recompilar com LOGO_PREVIEW=0 e reiniciar; reiniciar sozinho não altera páginas já pré-renderizadas. Comparação [antes/depois](logo-trial/comparison.html): capturas anteriores identificadas como históricas, novas capturas do teste atual. Nenhum deploy.


## Retomada e validação das 13 imagens — 18/10/2026

Inspecionados ProductImage, seu CSS, productImages, integração da página Produtos e ProductCard da Home, matriz e documentos de assets/pendências. A implementação existente foi preservada; nenhuma correção adicional da aplicação foi necessária na retomada. Correspondência visual não equivale à autenticação oficial das fotografias.

**Resultado: 13 imagens aplicadas e carregadas; 12 placeholders.**

| Com imagem | Volumes |
|---|---|
| Açaí com Guaraná | 12 L, 3,6 L, 1,5 L |
| Açaí Natural | 1,5 L |
| Açaí com Morango | 1,5 L |
| Açaí com Banana | 5 L |
| Frozen Natural e Frozen Morango | 5 L cada |
| Creme de Cupuaçu e Creme de Leitinho | 5 L cada |
| Trufado Avelã | 1,5 L |
| Zero Açúcar | 5 L, 1,5 L |

Continuam com placeholders: Natural 5 L; Guaraná 10 L, 5 L e 220 ml; Morango 5 L e 220 ml; Banana 1,5 L e 220 ml; Trufado Leitinho 1,5 L e 220 ml; Trufado Avelã 220 ml; Zero Açúcar 200 ml. O arquivo Trufado Leitinho identificado como 1,5 L permanece excluído porque o rótulo mostra 5 L. Nenhuma associação por nome de arquivo apenas.

Home: Natural 1,5 L aplicado em Para conhecer; Banana e Zero individual continuam reservados. Hero ilustrativo de açaí/frutas e referência industrial em Sobre carregam com créditos/avisos. Seis categorias, negócios, RH, contato e rodapé preservados e avaliados. Não foi criada seção/página ou área de mídia adicional. Logo reaberto e pendente de comprovação de versão oficial; marca textual mantida e favicon HTTP 404.

| Teste executado nesta execução contínua | Resultado |
|---|---|
| `npm run build` | Código 0, compilação e geração de rotas concluídas. |
| `npm run lint` | Código 0. |
| `npm run typecheck` | Código 0. |
| `check-reference-images.mjs` | Código 0; Home com 3 imagens (hero, Natural, Sobre), Produtos com 13 imagens e 12 placeholders, nas seis larguras. Imagens decodificadas no Chrome, sem quebra; enquadramento contain. |
| Responsividade | `/`, `/produtos`, `/fornecedores` em 320, 375, 768, 900, 1100 e 1440 px: 18 combinações sem overflow; cabeçalho sem sobreposição, incluindo menu móvel aberto. |
| `check-harmonization.mjs` | Código 0; três rotas HTTP 200; 79 registros de links, destinos internos/âncoras conferidos; botão RH desativado; exemplo de fornecedor sem link ativo. |
| `check-products.mjs` | Código 0; 25 IDs, seis categorias (8/6/2/2/4/3), sete volumes, 42 combinações, ordenação decrescente, limpar, estados vazios, teclado e filtro sem JavaScript. |
| Integridade | 58 imagens originais iguais aos hashes históricos; 13 cópias públicas idênticas às fontes. Fonte dos SKUs, CSS de Produtos e dois PDFs inalterados. Teste reverte em memória apenas a substituição de MediaPlaceholder por ProductImage e confirma o hash histórico da página: restante do código preservado. |
| PDF V7 | HTTP 200, download e abertura; SHA-256 original/público/HTTP/download igual a `8719d38b610810d14305c9b1757a862dc779de098b6611ba65fc6e22272052e5`. |
| JavaScript/indexação | Sem pageerrors; noindex e robots preservados. |

Capturas reais do Chrome abertas para os 13 produtos, distribuídas entre as seis larguras; embalagem inteira e sem deformação. Guaraná 1,5 L tem maior respiro vertical por sua origem horizontal, preservado deliberadamente para não cortar o pote. Microtextos não são todos legíveis em miniaturas, especialmente nas fontes pequenas de Frozen/Cupuaçu; nome e volume permanecem como texto acessível do card. Não foi declarada leitura de tabelas nutricionais.

Também abertas capturas da seleção Home em 320/1440, categorias em 375, negócios em 768, Sobre em 320/900, RH em 1100, contato em 1440 e hero em 320. Uma captura de seção longa móvel teve interferência do cabeçalho fixo e link de pulo; o script passou a ocultar somente esses elementos durante capturas isoladas, sem mudar a aplicação. Cabeçalho continua testado e capturado separadamente. Evidências em `images-preview/`, `harmonization-preview/results.json`, `products-preview/results.json`; associações/hashes em `images-preview/product-associations.json`. Chrome com viewports emulados, sem aparelhos físicos/outros navegadores.

Arquivos da integração: `src/components/media/ProductImage.tsx`, `product-image.module.css`, `src/content/productImages.ts`, `src/components/products/ProductCard.tsx`, `src/app/produtos/page.tsx` e 13 cópias em `public/media/products/`. Validação: scripts `check-reference-images.mjs` e `check-harmonization.mjs`; três documentos ASSETS_STRATEGY, PENDENCIAS e este relatório, além das evidências. A retomada final alterou somente verificações/capturas/documentação, preservando os componentes já integrados.

Prévia vigente: [Home](http://127.0.0.1:3010/), [Produtos](http://127.0.0.1:3010/produtos), [Fornecedores](http://127.0.0.1:3010/fornecedores). Reinício: `npm start -- --port 3010`. Sem deploy. Relatos anteriores abaixo são históricos.

## Referências fotográficas aplicadas — 18/10/2026

A Home passou a exibir duas fotografias reais de referência: tigelas de açaí/frutas no hero e tanques de inox em Sobre. São imagens ilustrativas/provisórias com legenda e créditos, não fotografias oficiais de produtos ou instalações. Fontes e licenças verificadas e registradas em ASSETS_STRATEGY.md. Arquivos locais e otimização Next Image, sem depender de hotlink para renderização. Nenhuma imagem gerada. Texto institucional, botões e hierarquia preservados.

**Limite da entrega:** nenhuma imagem de embalagem ganhou confirmação adicional. Os 25 produtos e os três destaques da Home continuam com placeholders, conforme as restrições do pedido; não se declara concluída a aplicação de fotografias oficiais de produtos. Logo transparente permanece sem confirmação documental; cabeçalho/rodapé textual preexistente mantido. Favicon ainda ausente (404).

Arquivos alterados/adicionados nesta etapa:
- `src/app/page.tsx`: substituição das reservas do hero e de Sobre.
- `src/components/media/ReferenceImage.tsx` e `reference-image.module.css`: fotografia, enquadramento responsivo, legendas e créditos.
- `src/content/referenceMedia.ts`: associação centralizada das duas referências, dimensões, origem, autores e licenças.
- `public/media/references/acai-bowls.jpg` e `processing-tanks.jpg`: cópias locais das referências licenciadas; originais em assets intactos.
- `scripts/check-reference-images.mjs`: carregamento/decodificação das fotos, capturas, larguras, navegação, placeholders e favicon.
- `scripts/check-harmonization.mjs`: lista exata de destinos externos permitidos ampliada para os quatro créditos/licenças; demais verificações preservadas.
- `docs/ASSETS_STRATEGY.md`, `docs/PENDENCIAS.md` e este relatório; evidências renovadas em `images-preview/`, `harmonization-preview/` e `products-preview/`.

| Teste executado nesta etapa | Resultado real |
|---|---|
| `npm run build` | Código 0; compilação, tipos e geração das rotas concluídos. |
| `npm run lint` | Código 0, sem warnings. |
| `npm run typecheck` | Código 0. |
| `node scripts/check-reference-images.mjs` | Código 0; duas imagens decodificadas com dimensões naturais positivas em cada largura. |
| Home e Produtos: 320/375/768/900/1100/1440 px | HTTP 200, sem overflow; cabeçalho sem sobreposição; capturas de fotos/cards/cabeçalho/rodapé. |
| `node scripts/check-harmonization.mjs` | Código 0; Home/Produtos/Fornecedores nas seis larguras, 79 registros de links, destinos internos HTTP 200 e âncoras existentes. URLs externas conferidas, sem envio de mensagens. |
| `node scripts/check-products.mjs` | Código 0; 25 IDs, seis categorias, sete volumes, 42 combinações de filtros, ordenação, estados vazios, limpar, teclado e filtro sem JavaScript. |
| PDF V7 | HTTP 200; abertura e download; hash original/público/HTTP/download preservado. |
| Integridade | 58 imagens originais e cinco arquivos protegidos (página/CSS/fonte de produtos e PDFs) sem alterações. |
| RH/fornecedores | RH desativado; um exemplo de fornecedor sem links ativos; dados pendentes. |
| Console/indexação | Sem erros JavaScript capturados; bloqueio de indexação preservado. |
| Favicon | HTTP 404, pendência mantida; não classificado como aprovado. |

Inspeção visual manual das capturas: hero e Sobre em 320 e 1440 px, produto em 375 px, cabeçalho em 900/1100 px e rodapé em 320 px. Primeira captura do rodapé móvel mostrou o menu aberto sobreposto; o script foi ajustado para fechar o menu por Escape e estabilizar a rolagem antes da captura, sem alteração de comportamento da aplicação. Testes em Chrome/Playwright com viewports emulados; sem aparelhos físicos ou outros navegadores.

Prévia atual: [Home](http://127.0.0.1:3009/) e [Produtos](http://127.0.0.1:3009/produtos); Sobre em `/#sobre`. Servidor iniciado com `npm start -- --port 3009`. Sem deploy ou mudanças de produção. Evidências principais: `images-preview/results.json`, `harmonization-preview/results.json` e `products-preview/results.json`. Entradas e URLs abaixo são históricas.

## Auditoria da harmonização e preparação visual — 18/10/2026

Entrega existente inspecionada antes de prosseguir. Estavam concluídos: seis categorias na Home, Sobre a Nutri em `/#sobre`, Trabalhe Conosco com instruções de currículo e botão nativo desativado, Fornecedores no menu e Trabalhe Conosco no rodapé. Não foi necessário corrigir a aplicação nesta auditoria. Foram concluídas a validação interrompida e a documentação; nenhuma nova mídia ou funcionalidade foi adicionada.

Arquivos da harmonização inspecionados: `src/app/page.tsx`, `src/app/home.module.css`, `src/content/home.ts`, `src/styles/globals.css`, `src/config/site.ts` e `src/components/layout/Footer.tsx`. Também conferidos Header, ProductCard, MediaPlaceholder, `src/content/assets.ts`, fontes de produtos/fornecedores, respectivas páginas/CSS, layout, robots e scripts de verificação. Documentação consultada: AUDITORIA_GERAL, ARCHITECTURE, DESIGN_SYSTEM, PRODUCT_MATRIX, PENDENCIAS, ROADMAP, PREVIEW_REPORT, ASSETS_INVENTORY e ASSETS_STRATEGY, além do dossiê V3 original. As alterações da harmonização estão nos seis arquivos citados; o script `scripts/check-harmonization.mjs` e as evidências abaixo completam sua validação. Nesta auditoria final, atualizados somente documentos/evidências, sem nova alteração da aplicação.

| Verificação realmente executada | Resultado |
|---|---|
| `npm run build` | Código 0; build Next concluído, incluindo `/`, `/produtos`, `/fornecedores` e robots. |
| `npm run lint` | Código 0. |
| `npm run typecheck` após build | Código 0. |
| `node scripts/check-harmonization.mjs` | Código 0; três rotas HTTP 200, seis categorias exatas, uma seção Sobre, RH desativado e sem link/formulário/upload. |
| Rotas e navegação | 75 registros de links por página; destinos internos HTTP 200 e âncoras existentes. Cliques em Sobre, Trabalhe Conosco e Fornecedores verificados. WhatsApp verificado pela URL, sem envio ou teste de atendimento externo. |
| Responsividade | `/`, `/produtos` e `/fornecedores` em 320, 375, 768, 900, 1100 e 1440 px: 18 combinações sem overflow horizontal. Menu móvel abre e fecha por Escape. |
| Navegação intermediária | Geometria de marca/links sem sobreposição nas seis larguras; capturas do cabeçalho em 320, 900 e 1100 px abertas e inspecionadas. |
| `node scripts/check-products.mjs` | Código 0; 25 IDs, seis categorias (8/6/2/2/4/3), sete volumes, 42 combinações de filtros, ordenação decrescente, limpar filtros, estados vazios, teclado e filtro sem JavaScript verificados. |
| Produtos e catálogo | 25 URLs contextuais de WhatsApp verificadas; PDF HTTP 200, abertura e download testados. SHA-256 original/público/HTTP/download idêntico. |
| Preservação | 58 imagens iguais aos hashes históricos; página/CSS/fonte de produtos e os dois PDFs iguais aos cinco hashes de referência. |
| Cards | 25 áreas de imagem com proporção 4:5 nas seis larguras; continuam placeholders sem associação indevida. |
| Fornecedores | Um exemplo, sem links comerciais ativos no cartão; dados continuam pendentes. |
| Marca/favicon | Cabeçalho/rodapé não contêm imagem de logo; nome textual preexistente preservado. `/favicon.ico` retornou 404: pendência, não teste aprovado. |
| Console/indexação | Sem erros JavaScript capturados; `noindex, nofollow, noarchive` e bloqueio de robots preservados. |

Build, lint e TypeScript foram concluídos nesta execução contínua, não inferidos do seu início. A primeira tentativa do navegador ocorreu antes de o servidor ficar pronto e retornou `ERR_CONNECTION_REFUSED`; repetida após prontidão, terminou com código 0. Nenhuma correção de aplicação foi necessária. Capturas de Trabalhe Conosco em 320/375/768/1440 e das categorias em 320/1440 também foram abertas e inspecionadas. Testes em Chrome/Playwright com larguras emuladas, sem aparelhos físicos ou cobertura de outros navegadores.

Evidências: `harmonization-preview/results.json`, `harmonization-preview/visual-check.json`, capturas nessa pasta e `products-preview/results.json`. O teste suplementar de geometria foi executado por script temporário local, fora da aplicação. Plano visual e inventário atualizados em ASSETS_STRATEGY e ASSETS_INVENTORY. Logo, fotos, RH e fornecedores continuam dependentes de confirmação; nenhuma geração de imagens, configuração de produção ou deploy.

Prévia vigente: [http://127.0.0.1:3008/](http://127.0.0.1:3008/). Reinício: `npm start -- --port 3008`. Sobre: `/#sobre`; candidaturas: `/#trabalhe-conosco`. URLs abaixo são históricas.

## Acabamento de `/fornecedores`: cartão único — 17/10/2026

Implementação lida antes da edição. Removido o segundo registro demonstrativo de `src/content/suppliers.ts` e ajustado para o singular o aviso em `src/app/fornecedores/page.tsx`. Mantidos todos os campos, o selo “EXEMPLO — DADOS PENDENTES DE CONFIRMAÇÃO”, Campo Bom/RS explicitamente ilustrativo e a seção institucional destacada com +55 51 99248-5496. Estilos, cabeçalho, rodapé e regras responsivas inalterados. Script `scripts/check-suppliers.mjs` atualizado para esperar um cartão; ROADMAP e PENDENCIAS ajustados somente nas referências ao número de cartões e à prévia atual.

Validação executada nesta rodada:
- Build: primeira execução falhou com EPERM ao criar `.next/server/app/produtos`; repetição fora do sandbox concluída com código 0. Nenhuma alteração na página de produtos.
- Lint e TypeScript: código 0; `npm run typecheck` executado depois do build.
- Chrome/Playwright: rota HTTP 200, exatamente um cartão e um aviso de pendência, nenhum contato ativo de fornecedor, WhatsApp institucional com URL esperada. Oito destinos internos retornaram HTTP 200 e âncoras foram encontradas. Sem envio externo e sem erros JavaScript capturados. Script concluído com código 0; permanece o aviso não impeditivo do Node `MODULE_TYPELESS_PACKAGE_JSON` ao importar TypeScript.
- Viewports 320, 375, 768 e 1440 px: scrollWidth igual à respectiva largura. Menu aberto também sem overflow nas três larguras móveis/tablet; abertura e Escape conferidos. Quatro capturas abertas e inspecionadas, sem cortes ou sobreposição observados; campos e contato institucional visíveis.
- Integridade: 58 assets comparados ao inventário histórico, sem divergência de SHA-256; página/CSS de produtos, fonte dos SKUs e PDF original/público iguais aos cinco hashes previamente registrados. Categorias, filtros e catálogo preservados.

Evidências renovadas em `suppliers-preview/results.json` e `suppliers-preview/page-{320,375,768,1440}.png`. Testes em Chrome com larguras emuladas; sem aparelhos físicos ou outros navegadores. Dados de fornecedores continuam pendentes de confirmação oficial. Sem deploy.

Nova prévia: [http://127.0.0.1:3007/fornecedores](http://127.0.0.1:3007/fornecedores). Reinício: `npm start -- --port 3007`. Histórico abaixo descreve a versão anterior com dois cartões; capturas e JSON agora correspondem ao cartão único.

## Retomada de `/fornecedores` — 17/10/2026

Inspecionados e preservados os arquivos já existentes: `src/app/fornecedores/page.tsx`, `suppliers.module.css`, `src/content/suppliers.ts` e `scripts/check-suppliers.mjs`. Não foi necessário corrigir a aplicação. O script foi ampliado para verificar menu aberto e Escape; corrigido seu seletor para não depender do texto que muda de Menu para Fechar.

Resultados desta execução:
- `npm run build`: código 0, incluindo a rota estática `/fornecedores`.
- `npm run lint`: código 0, zero warnings.
- `npm run typecheck`: código 0, executado após o build.
- Chrome/Playwright: `/fornecedores` HTTP 200, um h1, dois cartões demonstrativos, ambos com aviso de pendência e nenhum link/botão de fornecedor ativo. Bloqueio de URL sem aprovação e de protocolo javascript testado.
- Larguras 320, 375, 768 e 1440 px: scrollWidth respectivamente 320, 375, 768 e 1440; sem overflow horizontal. Menu aberto nas três larguras abaixo de 900 px também sem overflow, abertura e fechamento por Escape aprovados.
- Nove destinos únicos conferidos: oito internos com HTTP 200 e âncoras encontradas; WhatsApp institucional com URL esperada, sem envio de mensagem ou teste de atendimento externo. Nenhum erro JavaScript capturado.
- Quatro capturas completas abertas e inspecionadas: sem cortes ou sobreposição observados. Evidências em [suppliers-preview/results.json](suppliers-preview/results.json) e `suppliers-preview/page-{320,375,768,1440}.png`.
- Página/CSS de produtos, fonte dos 25 SKUs e PDF V7 original/público com SHA-256 antes/depois idênticos, registrados em `suppliers-preview/preserved-before.json` e `preserved-after.json`. Conferidos 25 registros e 25 IDs únicos. PDF mantém hash `8719d38b610810d14305c9b1757a862dc779de098b6611ba65fc6e22272052e5`.

Tentativas anteriores desta rodada: acesso do navegador bloqueado no sandbox (`ERR_NETWORK_ACCESS_DENIED`), seguido de timeout ao acessar o servidor isolado. Servidor e navegador executados fora desse isolamento na porta 3006. Uma tentativa adicional falhou pelo seletor de teste do menu; seletor corrigido e suíte final concluída com código 0. Node emitiu aviso `MODULE_TYPELESS_PACKAGE_JSON` ao importar a fonte TypeScript; não impediu a execução. Não alterado package.json por esse aviso.

Limites: Chrome com viewports emuladas, sem aparelhos físicos, outros navegadores ou auditoria integral de acessibilidade. Rota disponível diretamente; navegação compartilhada preservada, sem novo item Fornecedores. Todos os dados de fornecedores permanecem pendentes de confirmação oficial; Campo Bom/RS é agrupamento explicitamente ilustrativo. Sem deploy.

Prévia local validada: [http://127.0.0.1:3006/fornecedores](http://127.0.0.1:3006/fornecedores). Reinício: `npm start -- --port 3006`.

## Ordenação decrescente dos produtos — 17/10/2026

Por orientação do responsável informada pelo usuário, a ordem vigente de `/produtos` passa a ser **do maior para o menor volume dentro de cada categoria**, substituindo a ordem crescente registrada no histórico abaixo. Comparação usa a função existente de conversão para ml; empates mantêm a ordem da fonte por ordenação estável. As opções dos filtros permanecem inalteradas.

Arquivos alterados: `src/app/produtos/page.tsx` (somente inversão do comparador dos produtos), `scripts/check-products.mjs` (ordem decrescente, desempate e 42 combinações de filtros), `docs/PRODUCT_MATRIX.md` (ordem vigente e tabela) e este relatório. Evidências de teste renovadas em `docs/products-preview/` (JSON e oito capturas).

Testes executados:
- Build, lint e TypeScript: código 0. A primeira tentativa de build teve EPERM ao criar uma pasta em `.next`; repetição com permissão de execução fora do sandbox concluída com sucesso.
- Fonte `src/content/products.ts` inalterada, SHA-256 antes/depois `c52a97bb8ba575b1d353bf6dbf16afb4714e6523ace5ce702bc06c9e6d1c535d`. 25 IDs únicos, mesmos dados e seis categorias: 8/6/2/2/4/3. Zero individual preservado em 200 ml.
- Conversão numérica executada e conferida: 200/220 ml e 1,5/3,6/5/10/12 L correspondem a 200/220/1500/3600/5000/10000/12000 ml.
- Chrome/Playwright: HTTP 200 em `/produtos`; ordem decrescente e desempate pela fonte conferidos em todas as seis categorias; seis filtros de categoria, sete de volume e todas as 42 combinações testados, incluindo resultados vazios. Limpeza, teclado e formulário sem JavaScript também passaram.
- Viewports 320, 375, 768 e 1440 px: scrollWidth igual à largura da viewport, sem overflow, inclusive menu mobile aberto. Verificação automatizada em Chrome com larguras emuladas; não houve teste em aparelhos físicos ou outros navegadores nesta etapa.
- PDF: HTTP 200, abertura em nova aba e download acionados e confirmados. Original, cópia pública, resposta HTTP e download com SHA-256 idêntico `8719d38b610810d14305c9b1757a862dc779de098b6611ba65fc6e22272052e5`.
- Links dos 25 cartões para WhatsApp conferidos sem envio externo; nenhum erro JavaScript capturado. Resultados em `docs/products-preview/results.json`.

Nenhuma alteração na Home, estilos, cartões, dados, categorias, filtros, PDF ou assets. Nenhuma dependência instalada ou deploy realizado. Pendências de validação das imagens permanecem.

Prévia ativa desta validação: http://127.0.0.1:3004/produtos (`npm start -- --port 3004`). Porta 3003 já ocupada; seu processo foi preservado.

## Correção de categorias e ordenação — 17/10/2026

Esta atualização substitui a classificação de cinco categorias registrada na entrega anterior abaixo. Confirmação comercial informada pelo usuário: Tradicionais **8**, Frutados **6**, Frozen **2**, Cremes **2**, Trufados **4** e Linha Saudável **3**; total **25 SKUs**. Cupuaçu e Leitinho integram Cremes. Frozen contém somente Natural e Morango, ambos 5 L.

Arquivos alterados nesta correção:
- `src/content/products.ts`: categorias vigentes, reclassificação dos quatro registros envolvidos e conversão numérica de volumes em mililitros.
- `src/app/produtos/page.tsx`: seis categorias, contadores derivados dos resultados e ordenação numérica dos produtos e opções de volume. Empates preservam a ordem da fonte.
- `scripts/check-products.mjs`: verificações das seis categorias, composição de Frozen/Cremes, IDs, sete volumes e ordenação.
- `docs/PRODUCT_MATRIX.md`: matriz vigente documentada; este relatório, ROADMAP e PENDENCIAS atualizados. Evidências renovadas em `docs/products-preview/`.

Validação efetivamente executada:
- Build, lint e TypeScript: concluídos com código 0; TypeScript executado após o build.
- Comparação dos dados antes/depois: 25 IDs únicos preservados; somente categorias alteradas. Nomes, volumes, embalagens e pesos mantidos e confrontados com a tabela do V3. Zero individual permanece 200 ml; Pitaya ausente.
- Chrome/Playwright: `/produtos` HTTP 200; seis filtros com contagens 8/6/2/2/4/3; sete filtros de volume com contagens 1/5/7/1/9/1/1 respectivamente para 200 ml, 220 ml, 1,5 L, 3,6 L, 5 L, 10 L e 12 L. IDs de cada resultado conferidos com a fonte.
- Ordem crescente verificada em cada categoria, na listagem completa e com filtros. Conversão real: 1,5 L = 1.500 ml; 3,6 L = 3.600 ml.
- Larguras 320, 375, 768 e 1440 px: largura global igual à viewport, sem overflow. Captura de 320 px aberta e inspecionada: introdução, botões PDF e filtros legíveis, sem sobreposição. Capturas adicionais disponíveis no diretório de evidências.
- Teclado, envio sem JavaScript, estado vazio, limpeza, menu e 25 links contextuais de WhatsApp verificados; nenhuma mensagem externa enviada.
- PDF: HTTP 200, abertura em nova aba e download testados. Original, cópia pública, resposta HTTP e download idênticos por SHA-256: `8719d38b610810d14305c9b1757a862dc779de098b6611ba65fc6e22272052e5`.
- Resultados: `docs/products-preview/results.json`. Nenhum erro JavaScript capturado.

Limites: testes em Chrome com viewports emuladas, sem dispositivos físicos ou validação adicional em outros navegadores. Home preservada, inclusive seu agrupamento editorial anterior; não há link de filtro de categoria que exija correção nela. Harmonização editorial da Home permanece pendente de escopo posterior. Placeholders e pendências de mídia continuam; PDF, assets, estilos e componentes compartilhados não foram modificados. Nenhuma dependência instalada ou deploy realizado.

Prévia local: http://127.0.0.1:3003/produtos (`npm start -- --port 3003`, após build).

## Página `/produtos` — 17/10/2026

Implementada a listagem comercial HTML dos 25 SKUs, separada explicitamente do catálogo PDF oficial. Mantidos layout compartilhado, marca textual, paleta e componentes de placeholder/CTA. Nenhuma imagem NÃO CONFIRMADA ou DIVERGENTE foi ativada. Não foram criadas páginas individuais.

### Arquivos e decisões

- `src/content/products.ts`: matriz tipada de 25 registros transcrita da tabela da seção 5 do dossiê V3 original, no caminho já identificado. Campos categoria, nome, volume, embalagem e peso comparados automaticamente, registro a registro, com o DOCX: 25 correspondências, IDs únicos. O tipo reutiliza a estrutura do recorte existente em `src/content/home.ts`; esse recorte e os dados da Home permanecem intactos.
- `src/app/produtos/page.tsx`: Server Component com metadados, introdução, acesso ao PDF, categorias, cartões e WhatsApp contextual. Categorias reutilizam `lines` da fonte existente. Pesos não documentados são omitidos; não são calculados a partir de volumes ou rótulos.
- `src/app/produtos/products.module.css`: estilos locais para listagem, formulário e cartões, sem alteração do CSS da Home. Grade de uma coluna no mobile, duas no tablet e três no desktop.
- `src/config/site.ts`: acrescentado “Produtos” ao menu/rodapé compartilhado, estritamente para tornar a nova rota acessível pela navegação existente. `src/app/page.tsx` não foi alterado.
- `scripts/check-products.mjs`: verificação de navegação, filtros, teclado, PDF e larguras com Chrome/Playwright já disponíveis. Evidências em `docs/products-preview/`.
- Documentação: este relatório e ROADMAP.md atualizados.

Filtros de categoria e volume (ambos previstos no planejamento) usam formulário GET com parâmetros na URL e botão Aplicar filtros; funcionam sem JavaScript e permitem compartilhar/recarregar a seleção. O envio direciona à seção de resultados, focável, com contagem e agrupamento por categoria. Limpeza restaura a listagem. Combinação sem correspondência e valor de filtro desconhecido têm estados vazios com retorno a todos os produtos. Controles nativos têm labels, foco visível e navegação por teclado. A rota é renderizada no servidor por requisição devido aos filtros, sem necessidade de dependências novas.

### Validação executada

- `npm run build`, `npm run lint` e `npm run typecheck`: código 0. Build inclui `/produtos`, sem rotas individuais. TypeScript executado após o build, sem concorrência na geração de tipos.
- GET `/produtos`: HTTP 200. Exatamente 25 cartões/IDs únicos e categorias: Tradicionais 9; Frutados 6; Frozen & Cremes 3; Trufados 4; Linha Saudável 3. Cupuaçu permanece em Tradicionais; Zero individual em 200 ml; Pitaya ausente.
- Cada categoria testada pela interface com contagem esperada. Linha Saudável + 200 ml retorna somente Zero individual. Trufados + 200 ml produz estado vazio. Limpar filtros restaura 25. Categoria desconhecida informa filtro não reconhecido e não apresenta produtos falsos.
- Seleção e aplicação por teclado verificadas (seta, Tab, Enter). Formulário também testado com JavaScript desabilitado, retornando os seis Frutados. Menu mobile abre/fecha por Escape; entrada Produtos no menu desktop navega para a rota correta.
- Viewports **320, 375, 768 e 1440 px**: largura global igual à viewport, inclusive menu aberto no mobile/tablet. Capturas da introdução e primeiro cartão nas quatro larguras abertas e inspecionadas, sem cortes ou sobreposição observados. Verificação adicional da Home em 900 px após inclusão do item de menu: sem overflow.
- Os 25 CTAs apontam ao número documentado `5551992485496` e incluem o produto na mensagem contextual. Não houve envio externo.
- PDF: GET 200, MIME application/pdf; abertura em nova aba e download acionados na nova página. Original, cópia pública, corpo HTTP e download com SHA-256 `8719d38b610810d14305c9b1757a862dc779de098b6611ba65fc6e22272052e5`. Conteúdo e arquivos do catálogo preservados.
- Exemplo `/produtos/acai-zero-acucar-200ml` permanece HTTP 404; nenhum link da listagem aponta para detalhe inexistente. Nenhum erro JavaScript capturado. [Resultados](products-preview/results.json).

### Dados omitidos e limites

Quatorze SKUs não têm peso especificado no dossiê: campo omitido nesses cartões. Preços, estoque, condições comerciais, certificações, ingredientes, alegações nutricionais adicionais e fotografias oficiais não foram inferidos ou acrescentados. Embalagens/complementos apresentados seguem literalmente a matriz textual V3; isso não libera imagens divergentes. Divergências entre PDF e dossiê continuam documentadas, sem edição do catálogo.

Testes de navegador feitos no Chrome com larguras emuladas; não houve teste em dispositivos físicos, Safari/Firefox ou leitor de tela, nem auditoria integral de acessibilidade/desempenho. Filtros submetem nova requisição, não atualizam resultados enquanto o usuário apenas troca uma opção. Páginas individuais, demais rotas, aprovação de mídias e publicação continuam pendentes. Nenhuma dependência instalada ou deploy realizado.

Prévia: [http://127.0.0.1:3003/produtos](http://127.0.0.1:3003/produtos). Para reiniciar o build: `npm start -- --port 3003`. Entrega encerrada para revisão.

---

## Acabamento visual sem mídia não confirmada — 17/10/2026

Arquivos previstos foram informados antes da edição. Alteração de aplicação somente em `src/styles/globals.css`; atualizado este relatório e renovadas as evidências dos scripts existentes em `docs/responsive/` e `docs/catalogo-integration/`, incluindo capturas de detalhe `product-{320,375,768,1440}.png`. Nenhum componente, dado comercial, link ou asset original alterado.

### Ajustes realizados

- Mantida a marca textual atual: logo isolado continua sem confirmação suficiente para substituição.
- Placeholders continuam abstratos e explicitamente identificados; legendas agora em painel claro com borda discreta, espaçamento consistente, título de 16 px e apoio de 14 px. Sem fotografia simulada, embalagem inventada ou controle falso de reprodução.
- Título do hero limitado a 56 px no desktop, alinhado à referência do design system. Descrições das linhas, botões principais e links textuais elevados a 14 px, incluindo CTAs comerciais em telas pequenas.
- Cartões de produto com organização vertical e links alinhados à base; distância da mídia ao texto ajustada de 20 para 24 px. Estrutura, paleta, proporções dos placeholders e correção de overflow anterior preservadas.

### Testes executados

- `npm run build` e `npm run lint`: código 0. `npm run typecheck`: código 0 na execução final sequencial após build. Primeira tentativa concorrente falhou por arquivos gerados de `.next/types` ausentes durante recriação pelo build; nenhuma alteração de TypeScript foi necessária.
- Chrome/Playwright existentes, build otimizado em `http://127.0.0.1:3002`: largura do documento igual à viewport em **320, 375, 768 e 1440 px**, inclusive menu aberto nas larguras móveis/tablet. Menu abre e fecha por Escape; legendas sem overflow interno.
- Capturas gerais nas quatro larguras e detalhes dos cartões efetivamente abertos e inspecionados. Nenhum corte ou sobreposição observado nos cartões; botões do catálogo ficam dentro da viewport e mantêm alvos de 50/44 px. Evidências: [medições](responsive/results.json) e capturas em `responsive/`.
- Destinos das âncoras internas encontrados no DOM; links comerciais continuam apontando para o WhatsApp documentado. Não houve envio de mensagem nem teste de atendimento externo.
- Catálogo: GET 200, MIME application/pdf, HEAD 200, Range 206; abertura em nova aba e download acionados. Original, cópia pública, resposta HTTP e download com SHA-256 `8719d38b610810d14305c9b1757a862dc779de098b6611ba65fc6e22272052e5`. Sem preload do PDF ou erros JavaScript capturados. [Resultados](catalogo-integration/results.json).
- Contraste calculado por luminância relativa: legenda `#52245F` sobre `#FDFCFD` = **11,55:1**; apoio `#625C66` = **6,33:1**; branco sobre botão `#7E3997` = **7,19:1**; descrição `#69616B` sobre `#FDFCFD` = **5,82:1**. São verificações dessas combinações, não certificação integral de acessibilidade.

Limitações: Chrome com viewport emulada; sem dispositivos físicos, Safari/iOS ou Firefox. Textos auxiliares não abrangidos pelo ajuste pontual ainda usam 12–13 px; não se declara adequação integral de toda a escala tipográfica. Logo, fotos de produtos/embalagens e vídeo institucional continuam nas pendências registradas; nenhuma imagem NÃO CONFIRMADA ou DIVERGENTE foi ativada. Sem dependências novas, páginas novas ou deploy.

Prévia local: [http://127.0.0.1:3002](http://127.0.0.1:3002). Para reiniciar o build existente: `npm start -- --port 3002`. Etapa concluída para revisão do usuário.

---

## Correção de responsividade — 17/10/2026

Diagnóstico reproduzido no Chrome local: o placeholder `.media-video` combinava `aspect-ratio: 16/9` com altura mínima de 210 px no mobile e 265 px no tablet. Sua largura automática resultava em 373,33 e 471,11 px, ultrapassando a coluna da seção institucional. A largura global medida antes da correção era 389 px em viewports de 320 e 375 px, e 875 px em 768 px. Em 1440 px não havia overflow. Hero, cartões comerciais e catálogo estavam dentro da viewport.

Alteração de aplicação restrita a `src/styles/globals.css`: adicionados `width: 100%` e `min-width: 0` a `.media-video`. A largura acompanha a coluna; a altura mínima continua preservando o espaço da legenda. A proporção preferencial cede à altura mínima em telas estreitas. Sem ocultação horizontal global, mudanças de conteúdo, tipografia, cores, navegação ou PDF.

Criado `scripts/diagnose-responsive.mjs` para medir a largura global, conferir os links do catálogo e testar o menu em 320, 375, 768 e 1440 px, usando Playwright/Chrome existentes via `PLAYWRIGHT_MODULE` e `CHROME_PATH`. Evidências em `docs/responsive/`. Nenhuma dependência instalada.

Integridade: os 58 assets conferidos por SHA-256 contra o inventário histórico, sem divergências. PDF original e cópia pública mantêm SHA-256 `8719d38b610810d14305c9b1757a862dc779de098b6611ba65fc6e22272052e5`.

### Validação concluída

- `npm run build`, `npm run lint` e `npm run typecheck`: código de saída 0.
- Chrome/Playwright no build otimizado local: largura do documento igual à viewport em **320, 375, 768 e 1440 px**, sem overflow horizontal global. Placeholder com 288, 343, 332 e 560 px, respectivamente.
- Menu abriu e fechou com Escape nas três larguras móveis/tablet; sem overflow com menu aberto.
- Links “Ver catálogo completo” e “Baixar catálogo PDF” preservados, com URL pública correta, inteiramente dentro da viewport e altura mínima de 44 px nas quatro larguras.
- Capturas da seção institucional e dos botões do catálogo efetivamente abertas e inspecionadas nas quatro larguras: legendas, textos e controles visíveis, sem cortes ou sobreposição. Medições em [responsive/results.json](responsive/results.json); capturas em `docs/responsive/`.
- Limitações: emulação de viewport no Chrome; sem celulares físicos, Safari/iOS ou Firefox. Nesta correção foram reconferidos layout e destinos dos links; abertura/download e HTTP já testados na integração anterior, sem mudanças nesses componentes. O verificador histórico P19 continua fora deste escopo.

Prévia deste build em [http://127.0.0.1:3002](http://127.0.0.1:3002). Para reiniciar: `npm start -- --port 3002`. Para desenvolvimento: `npm run dev` (porta padrão 3000 se disponível). Nenhum deploy. Correção concluída; aguarda revisão do usuário, sem avanço para outras páginas ou funcionalidades.

Histórico da primeira prévia preservado a seguir.

---

Data: 16/10/2026. Escopo: preparação técnica e Home navegável local. Não houve deploy, configuração de hospedagem ou implementação completa das demais páginas.

## O que foi construído

Home com cabeçalho, menu mobile, apresentação, cinco linhas, três produtos de exemplo (Natural 1,5 L, Banana 1,5 L e Zero Açúcar 200 ml), acessos Food Service/distribuição, área institucional, contato WhatsApp e rodapé. Links internos usam seções existentes. Os links comerciais abrem o WhatsApp documentado; nenhum envia mensagem automaticamente.

O nome Nutri Açaí aparece como texto comum; logo pendente não é carregado. Quatro áreas de fotografia e uma de vídeo usam placeholders abstratos identificados. Nenhuma imagem dos originais é servida, e nenhum placeholder é apresentado como embalagem, instalação ou fotografia real.

## Estrutura criada

- Raiz: package.json/lockfile, TypeScript, Next, PostCSS, ESLint, .gitignore, .nvmrc, .env.example e README.
- `src/app/`: layout, Home, 404 e robots.txt; idioma pt-BR e metadados de não indexação.
- `src/components/`: cabeçalho/menu, rodapé, links, setas de interface, placeholder e cartão de produto.
- `src/content/`: dados tipados do recorte editorial da Home e política inicial de mídia. Não é catálogo completo nem manifesto de aprovação comercial concluído.
- `src/config/site.ts`: nome, contato, assinatura e navegação.
- `src/styles/globals.css`: tokens, composição, foco, responsividade e movimento reduzido.
- `scripts/`: verificação de originais e conferência de navegador usando ferramentas existentes.
- `docs/preview/`: evidências de verificações e capturas, não recursos públicos do site.

Documentos preexistentes atualizados: PLANEJAMENTO, ARCHITECTURE, DESIGN_SYSTEM, ROADMAP e PENDENCIAS. Novos: TECHNICAL_DECISIONS e este relatório. ASSETS_INVENTORY e arquivos originais permanecem como referência da auditoria.

## Decisões técnicas

Next 16.4.2, React/React DOM 19.3.1, Tailwind/PostCSS plugin 4.3.3, TypeScript 5.9.3 estrito, ESLint 10.13.0 com typescript-eslint e regras de Hooks compatíveis. Lockfile gerado; `npm ls --depth=0` confirmou resolução sem peers inválidos. Fontes do sistema, sem biblioteca de ícones/animação ou dependência de fontes externas. Home no servidor; menu é o único componente que declara uso de cliente.

Webpack selecionado após falha do Turbopack ao criar subprocesso de CSS neste ambiente, reproduzida dentro e fora da sandbox. A primeira árvore de lint foi substituída após incompatibilidades e alertas de dependências; instalação final reportou zero vulnerabilidades. Histórico e justificativas em [TECHNICAL_DECISIONS.md](TECHNICAL_DECISIONS.md).

## Como executar

Na pasta do projeto, com Node 24.19.0:

```powershell
npm ci
npm run dev
```

Abrir [http://127.0.0.1:3000](http://127.0.0.1:3000). Com dependências já instaladas, somente o segundo comando é necessário. Para build otimizado local: `npm run build`, depois `npm start`. Servidor limitado a loopback. Instruções completas no [README](../README.md).

## Limitações e ponto de parada

Esta é uma prévia de desenvolvimento. Placeholders e aviso de prévia não são conteúdo comercial definitivo. A publicação depende de revisão humana das mídias e textos e de decisão explícita; não há domínio configurado, sitemap com endereço fictício, tracking, formulário ou dados estruturados comerciais.

Logo, procedência das fotos, Guaraná 5/10 L, Natural 5 L, foto do Zero 200 ml e complementos dos copos continuam PENDENTES DE CONFIRMAÇÃO. Pitaya permanece fora do conteúdo comercial. Fotos de fábrica, funcionários, câmaras frias, frota e processos não foram inventadas.

Próximo passo: avaliação humana da Home em desktop e mobile. Ajustar a direção visual conforme retorno; implementar catálogo e demais páginas somente após nova autorização. Os testes de navegador não equivalem a certificação de acessibilidade, compatibilidade com Safari/Firefox ou dados de Core Web Vitals em campo.

