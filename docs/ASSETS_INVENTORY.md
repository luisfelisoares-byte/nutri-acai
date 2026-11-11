# Auditoria de assets — Nutri Açaí

## Pacote consolidado — integridade preservada em 20/10/2026

Mantida a arte provisória do hero assets/imagem para hero.png; não localizada alternativa de fotografia oficial comprovada que satisfaça o enquadramento integral. Motivos em ASSETS_STRATEGY. Nenhum asset, arquivo público ou manifesto modificado nesta etapa. As remoções são de seções visuais da Home, não do acervo/catalogação. Resultado final do verify:assets em PREVIEW_REPORT.


## Arte autorizada para o hero — 20/10/2026

Fonte exata: `assets/imagem para hero.png`, PNG 1536×1024, 2.535.870 bytes, SHA-256 `ff734b0a1ee2ea2bc14713d3145eadc5e624d487b18ec5e09afdf53934f89cbf`. Arte de embalagem 5 L autorizada pelo usuário para a Home, inspecionada antes da integração. Importação estática direta por Next Image, sem edição, renomeação ou cópia manual em public; proporção 3:2 preservada no hero existente, com preload e sizes responsivos.

Legenda e atribuição da antiga fotografia ilustrativa de tigelas deixaram de ser exibidas. Original antigo e registro referenceMedia.ts preservados como histórico, sem consumo no hero. Autorização restrita a essa arte na Home: imagens/avisos/dados do catálogo de produtos não mudaram.

Inventário v2 revisão 3: somente nova entrada nominal, hash, tamanho e autorização adicionados; agora 94 arquivos (61 assets/33 public). Nenhum hash antigo regravado para aceitar divergência. Manifesto histórico e exclusão intencional permanecem. Comparação entre original e resposta estática do build registrada em PREVIEW_REPORT.

## Fotografia institucional oficial — 20/10/2026

Arquivo exato localizado e autorizado pelo usuário: `assets/produção.jpg`, 8.577.364 bytes, SHA-256 `43c440ac6663d9704fb150ae0be5503ac839784720850dc4c1f7ae785e83deb5`. JPEG 4624×3468 armazenado, orientação EXIF 6; apresentação correta 3468×4624 (3:4). Inspecionado visualmente antes da integração. Nenhum retoque, recorte destrutivo, renomeação ou cópia manual para public.

ReferenceImage importa diretamente o original via pipeline estático do Next; o arquivo público com hash é artefato de build em .next/static/media, não uma segunda fonte mantida manualmente. Sobre conserva a proporção completa com contain e dimensões reservadas orientadas. Substitui somente a referência industrial de `/#sobre`, removendo sua legenda provisória e atribuição. Hero ilustrativo e arquivos da referência antiga preservados.

Inventário v2, revisão 2: adicionado somente o caminho/hashes/tamanho da nova foto, com autorização no registro de mudanças. Agora 93 arquivos (60 assets/33 public). Nenhum hash preexistente recalculado para aceitar alteração; manifesto histórico, exclusão autorizada do recorte, produtos, logo/favicon e PDF preservados. Resultados da verificação e comparação HTTP da fotografia em PREVIEW_REPORT.

## Inventário v2 e exclusão autorizada — 20/10/2026

O usuário confirmou ter excluído intencionalmente `assets/crop_zero220_label.png` por considerá-lo desnecessário. SHA-256 histórico: `4aedca6798db96fb3e7ad9b821c1d024d62d7961537b7e2a74c8d9ec6bc6c7bc`. Não há dependência funcional em src/scripts da aplicação. Não foi procurado, recuperado ou recriado nesta regularização. A ausência agora é autorizada, não pendência de recuperação.

O [inventário v2](assets-audit/inventory-v2.json) registra 92 arquivos atuais (59 em assets, 33 em public), caminhos, tamanhos, SHA-256, aliases, adições e a correspondência dos 39 conteúdos únicos dos 58 registros históricos. Desses, 38 continuam preservados, incluindo três arquivados; um foi excluído intencionalmente. O [manifesto original](assets-audit/metadata.json) permanece byte a byte inalterado, SHA-256 `94c72b56b52fa57c0724bb9ae1650a365b57fd182fb68691b9645e823fb6021f`.

Para evitar dependência de pastas externas, três conteúdos antigos foram copiados integralmente para `assets/history/`, sem reutilização no site:

| Arquivo arquivado | Origem relativa à raiz do projeto | SHA-256 |
|---|---|---|
| natural-5l-antigo.png | ../catalogo_v7/assets/5L/acai_natural_5l.png | 4cc6c5cba4c0b81026cef6af5e0a170e454dd7f5602c3063222394800cb90f21 |
| leitinho-antigo.png | ../catalogo_v7/assets/1,5L/acai_trufado_leitinho_1_5l.png | 12c24c17e8959e51367727139bd1fa24dcd76bea35bed91be2adf2d694d39f28 |
| pitaya-referencia-historica.jpg | ../catalogo_v7/assets/5L/Screenshot_20260905-182832_Instagram.jpg | 887e8d7a2f08ea3a7e80d9cc833ac2f9062043af6851554aab4cf8bb4548c236 |

Os antigos pares de nomes de Natural/Leitinho permanecem como aliases históricos do mesmo conteúdo; não foram recriados artificialmente para atingir 58 arquivos. Fontes externas e imagens utilizadas permanecem intactas; Pitaya não foi reintroduzida na matriz. Os 89 arquivos preexistentes de assets/public foram confrontados com o baseline da auditoria, sem mudanças. A nova autorização resolve somente o recorte, sem presumir autorização de exclusão dos demais originais.

`npm run verify:assets` agora usa v2 e passou na regularização. Confere também todos os recursos públicos, arquivos extras e reintrodução de conteúdo excluído, além de proteger o manifesto histórico por hash. Não regenerar v2 automaticamente para acomodar falhas: cada alteração futura exige revisão e registro de procedência/autorização. Resultados finais em PREVIEW_REPORT; os registros de falha/ausência abaixo são históricos e não foram apagados.

## Reconciliação da auditoria final — 20/10/2026

Estado técnico observado: **25 cartões com imagem, zero placeholders, 24 arquivos públicos de produto**; Guaraná 5/10 L compartilham a imagem temporária autorizada. Todas as 24 cópias têm conteúdo idêntico a pelo menos um original atual de assets. Leitinho 1,5 L já integrado: não pedir nova imagem como faltante. Avisos e aprovações comerciais pendentes preservados.

Existem **56 arquivos atuais em assets**. O inventário inicial tinha 58: verify:assets falhou com “A quantidade de arquivos originais mudou.” Comparação por conteúdo não localizou seis caminhos históricos (quatro hashes únicos) em assets/public: Natural 5 L e seu alias antigo; Trufado Leitinho 1,5 L e seu alias antigo; crop_zero220_label.png; Screenshot_20260905-182832_Instagram.jpg. Isso não invalida as fotos atuais nem identifica a autoria/momento das ausências; impede declarar preservação integral do acervo histórico. Não houve remoção ou restauração nesta auditoria.

O caminho do original atual do Leitinho é `assets/1,5 litros/trufado leitinho 1,5 atualizado.png` (nome encontrado), com o mesmo conteúdo da cópia pública `.jpg`; o caminho `.jpg` do registro de 19/10 abaixo é histórico. Não renomear ou interpretar formato apenas pela extensão. PDF original/público/resposta/download preservam SHA-256 `8719d38b610810d14305c9b1757a862dc779de098b6611ba65fc6e22272052e5`.

Evidências: [reconciliação com caminhos, tamanhos e hashes](final-audit-2026-10-20/assets-reconciliation.json), [baseline atual](final-audit-2026-10-20/baseline.json), [teste no navegador](final-audit-2026-10-20/browser-results.json). Os 125 arquivos monitorados permaneceram idênticos durante os testes. Resolver P19 sem apagar a história ou apenas ajustar contagens para obter aprovação.

## Foto correta do Trufado Leitinho 1,5 L integrada — 19/10/2026

Resolvida a pendência do único placeholder neutro. Original encontrado: `G:/ARQUIVOS FELIPE/SITES CRIADOS/NUTRI/NUTRI COM ASTRA GPT/assets/1,5 litros/trufado leitinho 1,5 atualizado.jpg`. Extensão e formato JPEG conferidos; rótulo legível “Açaí Trufado Leitinho”, **conteúdo 1,5 L e peso líquido 1,3 kg**, compatíveis com a matriz. Fotografia copiada integralmente, sem edição/recorte, para `G:/ARQUIVOS FELIPE/SITES CRIADOS/NUTRI/NUTRI COM ASTRA GPT/public/media/products/acai-trufado-leitinho-1-5l.jpg`; associado somente ao SKU **acai-trufado-leitinho-1-5l**. SHA-256 original/cópia `dfd20a294b8c554cc9c168e55f291210300528db71c6790897058e59cd494cc1`. Arquivo armazenado em 4624 × 3468 px, EXIF orientação 6 preservada; navegador apresentou orientação correta. A imagem antiga de rótulo 5 L/4,7 kg não foi utilizada.

Estado atual: **25 produtos com imagem e zero placeholders neutros**. As 24 associações anteriores e todos os arquivos públicos preexistentes permanecem idênticos, inclusive Leitinho 220 ml e Guaranás. Permanecem os dois usos provisórios autorizados dos Guaranás e seus avisos. Não é mais necessário solicitar foto para completar o Leitinho 1,5 L. Legenda geral de validação final preservada; a correspondência visual conferida não declara autenticação comercial de todas as imagens.

Validação desta alteração: `npm run lint`, `npm run typecheck` e `npm run build` **aprovados, exit 0**. Build executado com permissão de escrita já necessária para `.next`, sem mudança de configuração. Chrome 155.0.8059.80 em **375 e 1440 px**: HTTP 200 em /produtos, 25 imagens decodificadas por largura, nenhuma imagem quebrada ou distorção por CSS, nenhuma rolagem horizontal/erro JavaScript; fontes de todas as outras 24 imagens confrontadas com o manifesto anterior. Capturas dos cartões de 1,5 L e 220 ml nas duas larguras abertas e inspecionadas visualmente. Comparação por hash confirma que somente `src/content/productImages.ts` mudou em src e somente a nova cópia foi adicionada em public; assets/originais/PDF preservados.

Evidências na pasta existente `product-audit-2026-10-19/`: [resultado Chrome](product-audit-2026-10-19/leitinho-browser-results.json), [integridade](product-audit-2026-10-19/leitinho-integrity.json), `check-leitinho.mjs` e quatro capturas `leitinho-acai-trufado-leitinho-*.png`. Prévia atualizada: **http://127.0.0.1:3018/produtos**. Nenhuma instalação, deploy ou mudança de produto, texto, categoria, componente ou layout. Contagens/pendências anteriores abaixo são históricas quando divergirem deste registro.


## Integração autorizada do acervo existente — 19/10/2026

Estado vigente: **24 produtos com imagem (22 vínculos do acervo + 2 provisórios) e 1 placeholder neutro**, total 25 SKUs/seis categorias. O pedido atual autoriza os candidatos antes pendentes. Adicionados oito vínculos: Guaraná 5 L/220 ml, Morango 5 L/220 ml, Banana 1,5 L/220 ml, Trufado Leitinho 220 ml (`LEITINHO-220.jpg`) e Zero 200 ml (`zero-200.png`, nome real encontrado). Guaraná 10 L preservado. Guaraná 5 L compartilha a cópia 10 L por autorização explícita, com legenda temporária em ambos. Sete arquivos novos em public, cópias integrais dos originais.

**Único placeholder neutro: Trufado Leitinho 1,5 L**, pois o arquivo localizado continua imprimindo 5 L/4,7 kg. Localizar embalagem correta 1,5 L/1,3 kg. Fotos definitivas de Guaraná 5 L e 10 L continuam necessárias para substituir as provisórias, sem bloquear o uso expressamente autorizado. Volumes pouco legíveis e microtextos anômalos dos demais candidatos permanecem documentados; integração autorizada não significa embalagem/fotografia oficialmente autenticada. Não solicitar novas fotos dos sete candidatos integrados como se os arquivos estivessem faltando.

Lint, TypeScript e build aprovados (build repetido com permissão após EPERM). Chrome em 375/1440 px: 24 imagens, 1 placeholder, sem imagens quebradas, deformação por CSS, erros JavaScript ou overflow horizontal; dez cartões solicitados inspecionados. Originais/PDF/públicos preexistentes e dados comerciais preservados. Tabela fonte/destino, limitações e evidências em [ASSETS_STRATEGY](ASSETS_STRATEGY.md#integração-autorizada-do-acervo-existente--19102026). Prévia: http://127.0.0.1:3017/produtos. Sem instalação ou deploy. Contagens/decisões anteriores abaixo são históricas.


## Continuidade autorizada: Guaraná provisório e Leitinho neutro — 19/10/2026

Usuário confirmou que `assets/5 litros/acai_guarana_10l.jpg` representa 10 L e autorizou uso provisório. Cópia integral em `public/media/products/acai-guarana-10l-provisorio.jpg`, associada somente ao SKU Guaraná 10 L, com legenda/alt temporários e substituição pendente. Guaraná 5 L permanece neutro para evitar confusão de capacidade; `assets/1,5 litros/acai_trufado_leitinho_1_5l.png` imprime 5 L e continua excluído do SKU 1,5 L. Estado: **15 imagens anteriores + 1 temporária + 9 placeholders neutros**. Demais sete candidatos preservados.

Localizar fotos corretas de Guaraná 5 L/4,7 kg e Trufado Leitinho 1,5 L/1,3 kg; futuramente substituir a temporária do Guaraná 10 L/9,4 kg por foto definitiva com volume legível. Caminhos absolutos, evidências, comportamento e validação em [ASSETS_STRATEGY](ASSETS_STRATEGY.md#continuidade-autorizada-guaraná-provisório-e-leitinho-neutro--19102026). Lint direcionado e TypeScript passaram; cópia idêntica e decodificável. Novo cartão ainda não revisado no navegador; build/Chrome amplos não repetidos. Originais/PDF/layout preservados, sem instalação ou deploy.

## Auditoria final recursiva dos assets existentes — 19/10/2026

Resultado vigente: **15 produtos com correspondência visual utilizável para a prévia e 10 placeholders**. Utilizável não equivale a fotografia autenticada oficialmente; os avisos de validação existentes permanecem. Não houve nova associação, porque não apareceu candidato novo que resolvesse as dúvidas relevantes.

Varredura recursiva: **57 arquivos em assets = 56 imagens + PDF V7; 36 conteúdos únicos de imagem**. Todas as imagens decodificadas sem erro. Nenhum conteúdo novo/alterado frente ao inventário anterior; os dois aliases ausentes de Natural já foram registrados na análise precedente. `public/media/products` contém 15 imagens, todas existentes, decodificáveis e idênticas por SHA-256 a originais atuais de assets. Não há subpastas adicionais além das listadas abaixo.

| Pasta (caminho completo) | Arquivos |
|---|---|
| `G:/ARQUIVOS FELIPE/SITES CRIADOS/NUTRI/NUTRI COM ASTRA GPT/assets` | 1 |
| `G:/ARQUIVOS FELIPE/SITES CRIADOS/NUTRI/NUTRI COM ASTRA GPT/assets/1,5 litros` | 14 |
| `G:/ARQUIVOS FELIPE/SITES CRIADOS/NUTRI/NUTRI COM ASTRA GPT/assets/12-10-3,6 litros` | 7 |
| `G:/ARQUIVOS FELIPE/SITES CRIADOS/NUTRI/NUTRI COM ASTRA GPT/assets/200-220 ml` | 11 |
| `G:/ARQUIVOS FELIPE/SITES CRIADOS/NUTRI/NUTRI COM ASTRA GPT/assets/5 litros` | 19 |
| `G:/ARQUIVOS FELIPE/SITES CRIADOS/NUTRI/NUTRI COM ASTRA GPT/assets/catalogo` | 5 |

### Tabela completa dos 25 produtos

Caminhos abaixo são absolutos. As cópias em public só são listadas para vínculos já ativos; não foram copiadas ou associadas imagens nesta execução. Comparação com matriz e V7, incluindo rótulos e composições inspecionados nas evidências existentes de catalogo-audit e product-audit-2026-10-19.

| Produto e volume | Arquivo encontrado — caminho completo | Situação | Motivo objetivo |
|---|---|---|---|
| Açaí Natural — 1,5 L | `G:/ARQUIVOS FELIPE/SITES CRIADOS/NUTRI/NUTRI COM ASTRA GPT/assets/1,5 litros/acai_natural_1_5l.png`<br>Site: `G:/ARQUIVOS FELIPE/SITES CRIADOS/NUTRI/NUTRI COM ASTRA GPT/public/media/products/acai_natural_1_5l.png` | Utilizável — já integrada | Sabor, volume e embalagem compatíveis na inspeção existente; cópia pública idêntica ao original. Preservar vínculo e aviso de validação. |
| Açaí Natural — 5 L | `G:/ARQUIVOS FELIPE/SITES CRIADOS/NUTRI/NUTRI COM ASTRA GPT/assets/5 litros/acai-natural-5l.png`<br>Site: `G:/ARQUIVOS FELIPE/SITES CRIADOS/NUTRI/NUTRI COM ASTRA GPT/public/media/products/natural atualizado.png` | Utilizável — já integrada | Sabor, volume e embalagem compatíveis na inspeção existente; cópia pública idêntica ao original. Preservar vínculo e aviso de validação. |
| Açaí com Guaraná — 220 ml | `G:/ARQUIVOS FELIPE/SITES CRIADOS/NUTRI/NUTRI COM ASTRA GPT/assets/200-220 ml/acai-guarana-220ml.jpg` | Precisa de confirmação | P. 5 V7: sabor, 220 ml e sobretampa/leite em pó compatíveis; microtextos deformados. Confirmar fidelidade da arte existente, sem pedir nova foto por enquanto. |
| Açaí com Guaraná — 1,5 L | `G:/ARQUIVOS FELIPE/SITES CRIADOS/NUTRI/NUTRI COM ASTRA GPT/assets/1,5 litros/acai_guarana_1_5l.png`<br>Site: `G:/ARQUIVOS FELIPE/SITES CRIADOS/NUTRI/NUTRI COM ASTRA GPT/public/media/products/acai_guarana_1_5l.png` | Utilizável — já integrada | Sabor, volume e embalagem compatíveis na inspeção existente; cópia pública idêntica ao original. Preservar vínculo e aviso de validação. |
| Açaí com Guaraná — 5 L | `G:/ARQUIVOS FELIPE/SITES CRIADOS/NUTRI/NUTRI COM ASTRA GPT/assets/5 litros/acai-guarana-5l.jpg` | Foto faltante (adequada ao SKU) | P. 4 V7: mesmo conteúdo do arquivo 10 L; volume encoberto e peso parcial 9,4. Não comprova 5 L/4,7 kg. |
| Açaí com Guaraná — 3,6 L | `G:/ARQUIVOS FELIPE/SITES CRIADOS/NUTRI/NUTRI COM ASTRA GPT/assets/12-10-3,6 litros/acai_balde_3_6l.png`<br>Site: `G:/ARQUIVOS FELIPE/SITES CRIADOS/NUTRI/NUTRI COM ASTRA GPT/public/media/products/acai_balde_3_6l.png` | Utilizável — já integrada | Sabor, volume e embalagem compatíveis na inspeção existente; cópia pública idêntica ao original. Preservar vínculo e aviso de validação. |
| Açaí com Guaraná — 10 L | `G:/ARQUIVOS FELIPE/SITES CRIADOS/NUTRI/NUTRI COM ASTRA GPT/assets/12-10-3,6 litros/acai-guarana-10l.jpg` | Precisa de confirmação | P. 3 V7: volume encoberto; imagem idêntica à nomeada 5 L. Confirmar a embalagem 10 L/9,4 kg; se não houver comprovação, localizar foto distinta legível. |
| Açaí com Guaraná — 12 L | `G:/ARQUIVOS FELIPE/SITES CRIADOS/NUTRI/NUTRI COM ASTRA GPT/assets/12-10-3,6 litros/acai-guarana-12l.png`<br>Site: `G:/ARQUIVOS FELIPE/SITES CRIADOS/NUTRI/NUTRI COM ASTRA GPT/public/media/products/acai_balde_12l.png` | Utilizável — já integrada | Sabor, volume e embalagem compatíveis na inspeção existente; cópia pública idêntica ao original. Preservar vínculo e aviso de validação. |
| Creme de Cupuaçu — 5 L | `G:/ARQUIVOS FELIPE/SITES CRIADOS/NUTRI/NUTRI COM ASTRA GPT/assets/5 litros/creme-cupuacu-5l.jpg`<br>Site: `G:/ARQUIVOS FELIPE/SITES CRIADOS/NUTRI/NUTRI COM ASTRA GPT/public/media/products/IMG-20260907-WA0019.jpg` | Utilizável — já integrada | Sabor, volume e embalagem compatíveis na inspeção existente; cópia pública idêntica ao original. Preservar vínculo e aviso de validação. |
| Açaí com Morango — 220 ml | `G:/ARQUIVOS FELIPE/SITES CRIADOS/NUTRI/NUTRI COM ASTRA GPT/assets/200-220 ml/acai-morango-220ml.jpg` | Precisa de confirmação | P. 8 V7: sabor, 220 ml e leite em pó compatíveis; microtextos anômalos. Alternativa IMG-20260907-WA0021.jpg mostra paçoca e não substitui esse SKU. |
| Açaí com Morango — 1,5 L | `G:/ARQUIVOS FELIPE/SITES CRIADOS/NUTRI/NUTRI COM ASTRA GPT/assets/1,5 litros/acai_morango_1_5l.png`<br>Site: `G:/ARQUIVOS FELIPE/SITES CRIADOS/NUTRI/NUTRI COM ASTRA GPT/public/media/products/acai_morango_1_5l.png` | Utilizável — já integrada | Sabor, volume e embalagem compatíveis na inspeção existente; cópia pública idêntica ao original. Preservar vínculo e aviso de validação. |
| Açaí com Morango — 5 L | `G:/ARQUIVOS FELIPE/SITES CRIADOS/NUTRI/NUTRI COM ASTRA GPT/assets/5 litros/acai-morango-5l.jpg` | Precisa de confirmação | P. 6 V7: Morango, 5 L e caixa compatíveis; tabela/textos laterais anômalos. Confirmar arte existente antes de solicitar substituição. |
| Açaí com Banana — 220 ml | `G:/ARQUIVOS FELIPE/SITES CRIADOS/NUTRI/NUTRI COM ASTRA GPT/assets/200-220 ml/acai-banana-220ml.jpg` | Precisa de confirmação | P. 8 V7: sabor, 220 ml e leite em pó compatíveis; assinatura do selo anômala. IMG-20260907-WA0031.jpg e screenshot mostram paçoca; não usar essas alternativas. |
| Açaí com Banana — 1,5 L | `G:/ARQUIVOS FELIPE/SITES CRIADOS/NUTRI/NUTRI COM ASTRA GPT/assets/1,5 litros/acai_banana_1_5l.png` | Precisa de confirmação | P. 7 V7 associa o pote a 1,5 L; volume não legível na embalagem. Confirmar capacidade do arquivo existente; não solicitar foto nova inicialmente. |
| Açaí com Banana — 5 L | `G:/ARQUIVOS FELIPE/SITES CRIADOS/NUTRI/NUTRI COM ASTRA GPT/assets/5 litros/acai_banana_5l.png`<br>Site: `G:/ARQUIVOS FELIPE/SITES CRIADOS/NUTRI/NUTRI COM ASTRA GPT/public/media/products/acai_banana_5l.png` | Utilizável — já integrada | Sabor, volume e embalagem compatíveis na inspeção existente; cópia pública idêntica ao original. Preservar vínculo e aviso de validação. |
| Frozen Natural — 5 L | `G:/ARQUIVOS FELIPE/SITES CRIADOS/NUTRI/NUTRI COM ASTRA GPT/assets/5 litros/frozen-natural-5l.jpg`<br>Site: `G:/ARQUIVOS FELIPE/SITES CRIADOS/NUTRI/NUTRI COM ASTRA GPT/public/media/products/frozem natural.jpg` | Utilizável — já integrada | Sabor, volume e embalagem compatíveis na inspeção existente; cópia pública idêntica ao original. Preservar vínculo e aviso de validação. |
| Frozen Morango — 5 L | `G:/ARQUIVOS FELIPE/SITES CRIADOS/NUTRI/NUTRI COM ASTRA GPT/assets/5 litros/frozen-morango-5l.jpg`<br>Site: `G:/ARQUIVOS FELIPE/SITES CRIADOS/NUTRI/NUTRI COM ASTRA GPT/public/media/products/frozem morango.jpg` | Utilizável — já integrada | Sabor, volume e embalagem compatíveis na inspeção existente; cópia pública idêntica ao original. Preservar vínculo e aviso de validação. |
| Creme de Leitinho — 5 L | `G:/ARQUIVOS FELIPE/SITES CRIADOS/NUTRI/NUTRI COM ASTRA GPT/assets/5 litros/Creme de Leitinho — 5 L.png`<br>Site: `G:/ARQUIVOS FELIPE/SITES CRIADOS/NUTRI/NUTRI COM ASTRA GPT/public/media/products/creme_leitinho_5l.png` | Utilizável — já integrada | Sabor, volume e embalagem compatíveis na inspeção existente; cópia pública idêntica ao original. Preservar vínculo e aviso de validação. |
| Açaí Trufado Leitinho — 220 ml | `G:/ARQUIVOS FELIPE/SITES CRIADOS/NUTRI/NUTRI COM ASTRA GPT/assets/200-220 ml/Gemini_Generated_Image_iimibfiimibfiimi.jpg` | Precisa de confirmação | P. 10 V7: sabor, 220 ml e sobretampa/leite em pó identificáveis; microtexto anômalo. Confirmar arte/embalagem existente; prefixo do nome não é o critério de exclusão. |
| Açaí Trufado Leitinho — 1,5 L | `G:/ARQUIVOS FELIPE/SITES CRIADOS/NUTRI/NUTRI COM ASTRA GPT/assets/1,5 litros/acai_trufado_leitinho_1_5l.png` | Foto faltante (adequada ao SKU) | P. 9 V7 e arquivo local: rótulo imprime 5 L/4,7 kg, incompatível com 1,5 L/1,3 kg. Necessária imagem correta; não retocar rótulo. |
| Açaí Trufado Avelã — 220 ml | `G:/ARQUIVOS FELIPE/SITES CRIADOS/NUTRI/NUTRI COM ASTRA GPT/assets/200-220 ml/IMG-20260907-WA0028.jpg`<br>Site: `G:/ARQUIVOS FELIPE/SITES CRIADOS/NUTRI/NUTRI COM ASTRA GPT/public/media/products/acai-trufado-avela-220ml.jpg` | Utilizável — já integrada | Sabor, volume e embalagem compatíveis na inspeção existente; cópia pública idêntica ao original. Preservar vínculo e aviso de validação. Resolução 480 × 634 px limita ampliação, sem exigir nova imagem para o uso atual. |
| Açaí Trufado Avelã — 1,5 L | `G:/ARQUIVOS FELIPE/SITES CRIADOS/NUTRI/NUTRI COM ASTRA GPT/assets/1,5 litros/acai_trufado_avela_1_5l.png`<br>Site: `G:/ARQUIVOS FELIPE/SITES CRIADOS/NUTRI/NUTRI COM ASTRA GPT/public/media/products/acai_trufado_avela_1_5l.png` | Utilizável — já integrada | Sabor, volume e embalagem compatíveis na inspeção existente; cópia pública idêntica ao original. Preservar vínculo e aviso de validação. |
| Açaí Zero Açúcar — 200 ml | `G:/ARQUIVOS FELIPE/SITES CRIADOS/NUTRI/NUTRI COM ASTRA GPT/assets/200-220 ml/acai-zero-acucar-200ml.png` | Precisa de confirmação | P. 12 V7 associa a 200 ml, mas volume lateral inconclusivo. É idêntico a zero220.png. Confirmar 200 ml no arquivo existente antes de pedir outra foto. |
| Açaí Zero Açúcar — 1,5 L | `G:/ARQUIVOS FELIPE/SITES CRIADOS/NUTRI/NUTRI COM ASTRA GPT/assets/1,5 litros/acai_zero_1_5l.png`<br>Site: `G:/ARQUIVOS FELIPE/SITES CRIADOS/NUTRI/NUTRI COM ASTRA GPT/public/media/products/acai_zero_1_5l.png` | Utilizável — já integrada | Sabor, volume e embalagem compatíveis na inspeção existente; cópia pública idêntica ao original. Preservar vínculo e aviso de validação. |
| Açaí Zero Açúcar — 5 L | `G:/ARQUIVOS FELIPE/SITES CRIADOS/NUTRI/NUTRI COM ASTRA GPT/assets/5 litros/acai_zero_5l.png`<br>Site: `G:/ARQUIVOS FELIPE/SITES CRIADOS/NUTRI/NUTRI COM ASTRA GPT/public/media/products/acai_zero_5l.png` | Utilizável — já integrada | Sabor, volume e embalagem compatíveis na inspeção existente; cópia pública idêntica ao original. Preservar vínculo e aviso de validação. |

### Relação recursiva atual de arquivos

Lista completa para localizar os arquivos, incluindo duplicatas, capas, marca e PDF. Somente a tabela de produtos acima determina uso por SKU; nome/pasta não autorizam associação.

| Arquivo — caminho completo | Dimensões / tipo | Bytes |
|---|---|---|
| `G:/ARQUIVOS FELIPE/SITES CRIADOS/NUTRI/NUTRI COM ASTRA GPT/assets/1,5 litros/acai_banana_1_5l.png` | 1122 × 1402 px | 2228076 |
| `G:/ARQUIVOS FELIPE/SITES CRIADOS/NUTRI/NUTRI COM ASTRA GPT/assets/1,5 litros/acai_guarana_1_5l.png` | 1536 × 1024 px | 1910445 |
| `G:/ARQUIVOS FELIPE/SITES CRIADOS/NUTRI/NUTRI COM ASTRA GPT/assets/1,5 litros/acai_morango_1_5l.png` | 1122 × 1402 px | 2426255 |
| `G:/ARQUIVOS FELIPE/SITES CRIADOS/NUTRI/NUTRI COM ASTRA GPT/assets/1,5 litros/acai_natural_1_5l.png` | 1122 × 1402 px | 2430117 |
| `G:/ARQUIVOS FELIPE/SITES CRIADOS/NUTRI/NUTRI COM ASTRA GPT/assets/1,5 litros/acai_trufado_avela_1_5l.png` | 1122 × 1402 px | 2284471 |
| `G:/ARQUIVOS FELIPE/SITES CRIADOS/NUTRI/NUTRI COM ASTRA GPT/assets/1,5 litros/acai_trufado_leitinho_1_5l.png` | 1254 × 1254 px | 2152019 |
| `G:/ARQUIVOS FELIPE/SITES CRIADOS/NUTRI/NUTRI COM ASTRA GPT/assets/1,5 litros/acai_zero_1_5l.png` | 1122 × 1402 px | 2248710 |
| `G:/ARQUIVOS FELIPE/SITES CRIADOS/NUTRI/NUTRI COM ASTRA GPT/assets/1,5 litros/Açaí com Banana — 1,5 L.png` | 1122 × 1402 px | 2228076 |
| `G:/ARQUIVOS FELIPE/SITES CRIADOS/NUTRI/NUTRI COM ASTRA GPT/assets/1,5 litros/Açaí com Guaraná — 1,5 L.png` | 1536 × 1024 px | 1910445 |
| `G:/ARQUIVOS FELIPE/SITES CRIADOS/NUTRI/NUTRI COM ASTRA GPT/assets/1,5 litros/Açaí com Morango — 1,5 L.png` | 1122 × 1402 px | 2426255 |
| `G:/ARQUIVOS FELIPE/SITES CRIADOS/NUTRI/NUTRI COM ASTRA GPT/assets/1,5 litros/Açaí Natural — 1,5 L.png` | 1122 × 1402 px | 2430117 |
| `G:/ARQUIVOS FELIPE/SITES CRIADOS/NUTRI/NUTRI COM ASTRA GPT/assets/1,5 litros/Açaí Trufado Avelã — 1,5 L.png` | 1122 × 1402 px | 2284471 |
| `G:/ARQUIVOS FELIPE/SITES CRIADOS/NUTRI/NUTRI COM ASTRA GPT/assets/1,5 litros/Açaí Trufado Leitinho — 1,5 L.png` | 1254 × 1254 px | 2152019 |
| `G:/ARQUIVOS FELIPE/SITES CRIADOS/NUTRI/NUTRI COM ASTRA GPT/assets/1,5 litros/Açaí Zero Açúcar — 1,5 L.png` | 1122 × 1402 px | 2248710 |
| `G:/ARQUIVOS FELIPE/SITES CRIADOS/NUTRI/NUTRI COM ASTRA GPT/assets/12-10-3,6 litros/acai-guarana-10l.jpg` | 1792 × 2400 px | 3193249 |
| `G:/ARQUIVOS FELIPE/SITES CRIADOS/NUTRI/NUTRI COM ASTRA GPT/assets/12-10-3,6 litros/acai-guarana-12l.png` | 1254 × 1254 px | 2020430 |
| `G:/ARQUIVOS FELIPE/SITES CRIADOS/NUTRI/NUTRI COM ASTRA GPT/assets/12-10-3,6 litros/acai-guarana-3-6l.jpg` | 1792 × 2400 px | 3175401 |
| `G:/ARQUIVOS FELIPE/SITES CRIADOS/NUTRI/NUTRI COM ASTRA GPT/assets/12-10-3,6 litros/acai_balde_12l.png` | 1254 × 1254 px | 2020430 |
| `G:/ARQUIVOS FELIPE/SITES CRIADOS/NUTRI/NUTRI COM ASTRA GPT/assets/12-10-3,6 litros/acai_balde_3_6l.png` | 1254 × 1254 px | 2249542 |
| `G:/ARQUIVOS FELIPE/SITES CRIADOS/NUTRI/NUTRI COM ASTRA GPT/assets/12-10-3,6 litros/AÇAI DE BALDE 3,6.png` | 1254 × 1254 px | 2249542 |
| `G:/ARQUIVOS FELIPE/SITES CRIADOS/NUTRI/NUTRI COM ASTRA GPT/assets/12-10-3,6 litros/Gemini_Generated_Image_fa0uc1fa0uc1fa0u.jpg` | 1792 × 2400 px | 3470606 |
| `G:/ARQUIVOS FELIPE/SITES CRIADOS/NUTRI/NUTRI COM ASTRA GPT/assets/200-220 ml/acai-banana-220ml.jpg` | 1792 × 2400 px | 2965066 |
| `G:/ARQUIVOS FELIPE/SITES CRIADOS/NUTRI/NUTRI COM ASTRA GPT/assets/200-220 ml/acai-guarana-220ml.jpg` | 1792 × 2400 px | 2962960 |
| `G:/ARQUIVOS FELIPE/SITES CRIADOS/NUTRI/NUTRI COM ASTRA GPT/assets/200-220 ml/acai-morango-220ml.jpg` | 1792 × 2400 px | 2916816 |
| `G:/ARQUIVOS FELIPE/SITES CRIADOS/NUTRI/NUTRI COM ASTRA GPT/assets/200-220 ml/acai-trufado-avela-220ml.jpg` | 1888 × 2272 px | 2444792 |
| `G:/ARQUIVOS FELIPE/SITES CRIADOS/NUTRI/NUTRI COM ASTRA GPT/assets/200-220 ml/acai-zero-acucar-200ml.png` | 1122 × 1402 px | 2285870 |
| `G:/ARQUIVOS FELIPE/SITES CRIADOS/NUTRI/NUTRI COM ASTRA GPT/assets/200-220 ml/Gemini_Generated_Image_iimibfiimibfiimi.jpg` | 1792 × 2400 px | 2648978 |
| `G:/ARQUIVOS FELIPE/SITES CRIADOS/NUTRI/NUTRI COM ASTRA GPT/assets/200-220 ml/IMG-20260907-WA0021.jpg` | 484 × 634 px | 106490 |
| `G:/ARQUIVOS FELIPE/SITES CRIADOS/NUTRI/NUTRI COM ASTRA GPT/assets/200-220 ml/IMG-20260907-WA0028.jpg` | 480 × 634 px | 100810 |
| `G:/ARQUIVOS FELIPE/SITES CRIADOS/NUTRI/NUTRI COM ASTRA GPT/assets/200-220 ml/IMG-20260907-WA0031.jpg` | 640 × 632 px | 135022 |
| `G:/ARQUIVOS FELIPE/SITES CRIADOS/NUTRI/NUTRI COM ASTRA GPT/assets/200-220 ml/Screenshot_20260905-182937_Instagram.jpg` | 1080 × 2340 px | 823923 |
| `G:/ARQUIVOS FELIPE/SITES CRIADOS/NUTRI/NUTRI COM ASTRA GPT/assets/200-220 ml/zero220.png` | 1122 × 1402 px | 2285870 |
| `G:/ARQUIVOS FELIPE/SITES CRIADOS/NUTRI/NUTRI COM ASTRA GPT/assets/5 litros/acai-guarana-5l.jpg` | 1792 × 2400 px | 3193249 |
| `G:/ARQUIVOS FELIPE/SITES CRIADOS/NUTRI/NUTRI COM ASTRA GPT/assets/5 litros/acai-morango-5l.jpg` | 1792 × 2400 px | 2990633 |
| `G:/ARQUIVOS FELIPE/SITES CRIADOS/NUTRI/NUTRI COM ASTRA GPT/assets/5 litros/acai-natural-5l.png` | 1086 × 1448 px | 2364627 |
| `G:/ARQUIVOS FELIPE/SITES CRIADOS/NUTRI/NUTRI COM ASTRA GPT/assets/5 litros/acai_banana_5l.png` | 1122 × 1402 px | 2494461 |
| `G:/ARQUIVOS FELIPE/SITES CRIADOS/NUTRI/NUTRI COM ASTRA GPT/assets/5 litros/acai_guarana_10l.jpg` | 1792 × 2400 px | 3193249 |
| `G:/ARQUIVOS FELIPE/SITES CRIADOS/NUTRI/NUTRI COM ASTRA GPT/assets/5 litros/acai_guarana_5l.jpg` | 1792 × 2400 px | 3193249 |
| `G:/ARQUIVOS FELIPE/SITES CRIADOS/NUTRI/NUTRI COM ASTRA GPT/assets/5 litros/acai_zero_5l.png` | 1254 × 1254 px | 2309706 |
| `G:/ARQUIVOS FELIPE/SITES CRIADOS/NUTRI/NUTRI COM ASTRA GPT/assets/5 litros/Açaí com Banana — 5 L.png` | 1122 × 1402 px | 2494461 |
| `G:/ARQUIVOS FELIPE/SITES CRIADOS/NUTRI/NUTRI COM ASTRA GPT/assets/5 litros/Açaí com Guaraná — 5 L.jpg` | 1792 × 2400 px | 3193249 |
| `G:/ARQUIVOS FELIPE/SITES CRIADOS/NUTRI/NUTRI COM ASTRA GPT/assets/5 litros/Açaí Zero Açúcar — 5 L.png` | 1254 × 1254 px | 2309706 |
| `G:/ARQUIVOS FELIPE/SITES CRIADOS/NUTRI/NUTRI COM ASTRA GPT/assets/5 litros/Creme de Leitinho — 5 L.png` | 1122 × 1402 px | 2014362 |
| `G:/ARQUIVOS FELIPE/SITES CRIADOS/NUTRI/NUTRI COM ASTRA GPT/assets/5 litros/creme-cupuacu-5l.jpg` | 680 × 879 px | 161103 |
| `G:/ARQUIVOS FELIPE/SITES CRIADOS/NUTRI/NUTRI COM ASTRA GPT/assets/5 litros/creme_leitinho_5l.png` | 1122 × 1402 px | 2014362 |
| `G:/ARQUIVOS FELIPE/SITES CRIADOS/NUTRI/NUTRI COM ASTRA GPT/assets/5 litros/frozem morango 3 lados.jpg` | 362 × 640 px | 66308 |
| `G:/ARQUIVOS FELIPE/SITES CRIADOS/NUTRI/NUTRI COM ASTRA GPT/assets/5 litros/frozen-morango-5l.jpg` | 484 × 642 px | 84293 |
| `G:/ARQUIVOS FELIPE/SITES CRIADOS/NUTRI/NUTRI COM ASTRA GPT/assets/5 litros/frozen-natural-5l.jpg` | 676 × 900 px | 207157 |
| `G:/ARQUIVOS FELIPE/SITES CRIADOS/NUTRI/NUTRI COM ASTRA GPT/assets/5 litros/IMG-20260907-WA0017.jpg` | 484 × 642 px | 84293 |
| `G:/ARQUIVOS FELIPE/SITES CRIADOS/NUTRI/NUTRI COM ASTRA GPT/assets/5 litros/IMG-20260907-WA0018.jpg` | 477 × 637 px | 58589 |
| `G:/ARQUIVOS FELIPE/SITES CRIADOS/NUTRI/NUTRI COM ASTRA GPT/assets/5 litros/IMG-20260907-WA0023.jpg` | 490 × 636 px | 100377 |
| `G:/ARQUIVOS FELIPE/SITES CRIADOS/NUTRI/NUTRI COM ASTRA GPT/assets/acai_natural_1_5l.png` | 1122 × 1402 px | 2430117 |
| `G:/ARQUIVOS FELIPE/SITES CRIADOS/NUTRI/NUTRI COM ASTRA GPT/assets/catalogo/capa atualizada.png` | 941 × 1672 px | 2473715 |
| `G:/ARQUIVOS FELIPE/SITES CRIADOS/NUTRI/NUTRI COM ASTRA GPT/assets/catalogo/capa_catalogo_v7.png` | 941 × 1672 px | 2533500 |
| `G:/ARQUIVOS FELIPE/SITES CRIADOS/NUTRI/NUTRI COM ASTRA GPT/assets/catalogo/logo_2026_transparent.png` | 1336 × 1376 px | 333506 |
| `G:/ARQUIVOS FELIPE/SITES CRIADOS/NUTRI/NUTRI COM ASTRA GPT/assets/catalogo/Nutri Açaí caapa catalogo.png` | 941 × 1672 px | 2533500 |
| `G:/ARQUIVOS FELIPE/SITES CRIADOS/NUTRI/NUTRI COM ASTRA GPT/assets/catalogo/Nutri_Acai_Catalogo_Mobile_2026_V7.pdf` | PDF V7 — 16 páginas (metadado anteriormente conferido) | 16822687 |

### Fotografias a localizar e confirmações antes de novos pedidos

**Solicitar somente duas imagens adequadas que não foram encontradas:** (1) Açaí com Guaraná, caixa 5 L/4,7 kg, frente e volume legíveis; (2) Açaí Trufado Leitinho, pote 1,5 L/1,3 kg, rótulo sem a indicação incompatível de 5 L. Podem ser arquivos que o responsável já possua fora deste acervo; não é necessário produzir fotografias novas se esses arquivos existirem.

**Terceira foto condicionada:** Guaraná, caixa 10 L/9,4 kg, com volume legível, somente se o responsável não conseguir comprovar que o candidato existente representa essa embalagem. A imagem compartilhada 5/10 L não será aplicada por inferência.

**Não solicitar outras sete fotos agora.** Há candidatos localizados para Guaraná 220 ml, Morango 5 L/220 ml, Banana 1,5 L/220 ml, Trufado Leitinho 220 ml e Zero 200 ml. Solicitar primeiro confirmação explícita da fidelidade/autorização das artes e, para Banana 1,5 L/Zero 200 ml, da capacidade. Uma resposta negativa ou impossibilidade de confirmar converterá somente o SKU afetado em pedido de foto correta. Não se solicita novamente imagem dos 15 SKUs já atendidos.

PDF original preservado: SHA-256 `8719d38b610810d14305c9b1757a862dc779de098b6611ba65fc6e22272052e5`. Aplicação, originais, public, marca, layout e categorias não foram alterados. Nenhuma geração artificial, instalação ou deploy. Build/lint/TypeScript e navegador não repetidos, pois nenhuma aplicação/mídia mudou; a leitura/decodificação e comparação de arquivos atendem a esta auditoria.


## Conferência dos candidatos pendentes versus V7 — 19/10/2026

Os candidatos dos dez placeholders continuam existentes; nenhum conteúdo novo ou alterado encontrado em assets frente ao inventário anterior. Há atualmente **57 arquivos em assets (56 imagens e PDF V7)**. Dois aliases históricos de Natural 5 L não foram encontrados nesta leitura: `assets/5 litros/acai_natural_5l.png` e `assets/5 litros/Açaí Natural — 5 L.png`; não foram removidos por esta execução e estão fora das associações pendentes investigadas. A imagem ativa Natural 5 L em public permanece preservada. PDF original mantém SHA-256 `8719d38b610810d14305c9b1757a862dc779de098b6611ba65fc6e22272052e5`. Composições dos candidatos confrontadas com páginas 3–10 e 12 do V7; não se comprovou identidade por hash com as imagens incorporadas. Evidências e decisões centralizadas em [ASSETS_STRATEGY](ASSETS_STRATEGY.md#análise-exclusiva-dos-dez-placeholders-versus-v7--19102026). Aplicação/public sem diferenças frente ao baseline da validação final. Estado preservado: 15 imagens e 10 placeholders; nenhuma associação realizada.


## Retomada final validada — 19/10/2026

Mantidos 15 produtos com imagem e 10 placeholders, sem refazer associações. Evidências existentes confirmam 25 SKUs, seis categorias, filtros, 42 combinações, ordenação e abertura/download do PDF V7. Cabeçalho aprovado nesta retomada em 24 posições nas seis larguras, fundo opaco, logo carregado, menu móvel funcionando e sem overflow horizontal. Nenhuma alteração de layout. Os 114 arquivos de src/assets/public permaneceram idênticos durante a retomada; originais/PDF preservados. Build/lint/TypeScript anteriores reaproveitados, sem necessidade de repetir. Prévia: http://127.0.0.1:3016/produtos. Sem deploy.

Resultados, falhas de acesso anteriores já superadas e limites em [validação final](product-audit-2026-10-19/FINAL_VALIDATION.md). Inventário após a associação: [inventory-final.json](product-audit-2026-10-19/inventory-final.json). Pendências comerciais de imagens descritas em [AUDIT.md](product-audit-2026-10-19/AUDIT.md) continuam abertas; a validação técnica não aprova fotografias para publicação.


## Auditoria dos arquivos renomeados — 19/10/2026

Estado vigente: **15 imagens associadas e 10 placeholders**. Uma nova associação visual forte: **Trufado Avelã 220 ml**, com `assets/200-220 ml/IMG-20260907-WA0028.jpg`, copiado integralmente para `public/media/products/acai-trufado-avela-220ml.jpg`. Resolução 480 × 634 px; pedir original melhor para ampliação. Aviso de validação final mantido. Nenhum dos 14 vínculos existentes foi substituído.

Levantamento atual: 58 imagens e PDF V7 em assets; 80 imagens em assets/public antes da cópia, 81 depois. Os 58 conteúdos de arquivos de imagem de assets correspondem a hashes históricos; a reorganização/renomeação não resolveu divergências de rótulo. Inventário histórico abaixo preservado, com nomes antigos; não usá-los como caminhos atuais. Logo e favicon permanecem aprovados e intocados.

Classificação individual dos 25 SKUs, caminhos atuais, evidências e motivos: [auditoria completa](product-audit-2026-10-19/AUDIT.md). Inventário verificável: [arquivos, dimensões e hashes](product-audit-2026-10-19/inventory.json).

Placeholders: Guaraná 5/10 L (volume encoberto e arquivo idêntico); Banana 1,5 L e Zero 200 ml (volume não comprovado); Trufado Leitinho 1,5 L (rótulo 5 L/4,7 kg, sem imagem compatível); Guaraná, Morango, Banana e Trufado Leitinho 220 ml e Morango 5 L (candidatos com textos anômalos que exigem confirmação). As alternativas Morango/Banana com paçoca divergem do complemento leite em pó da matriz. Não houve edição de imagens para corrigir informações.

Home, identidade, fornecedores, RH, matriz, categorias, filtros, ordenação e PDF V7 preservados. Sem instalação ou deploy. Validação desta execução registrada no PREVIEW_REPORT.


## Reconferência do acervo — 18/10/2026

Acervo atual: **59 arquivos em assets: 58 imagens (34 PNG e 24 JPEG) mais o PDF V7**. As imagens representam 39 conteúdos únicos, 17 grupos de duplicatas e 19 cópias adicionais. As 58 imagens foram decodificadas e seus hashes confrontados com o inventário histórico, sem alteração. Quatro folhas de contato foram reabertas para inspeção dos conteúdos; isso não comprova leitura de microtextos nem autenticidade comercial. Não foram encontradas fotos identificáveis de fábrica/máquinas/equipe nem vídeos.

Logo isolado reaberto: `assets/logo_2026_transparent.png`, **1336×1376**, RGBA, alfa de 0 a 255, limites visíveis `(19, 18, 1316, 1358)`, proporção largura/altura 0,97093. Arte roxa com nome branco, Açaí verde e elementos amarelos/verdes/vermelhos. É candidato pendente de confirmação, não versão oficial certificada. Cabeçalho e rodapé ainda não renderizam imagem da marca; favicon HTTP 404. Não houve substituição de logo por texto nesta auditoria: texto já existia.

Associações liberadas: **0 de 25 SKUs**; nenhum candidato ativado no manifesto. As divergências e correspondências arquivo/produto detalhadas abaixo continuam válidas. Plano por seção, requisitos de enquadramento e substituição em [ASSETS_STRATEGY.md](ASSETS_STRATEGY.md); testes em [PREVIEW_REPORT.md](PREVIEW_REPORT.md). Nenhum original alterado ou excluído. O levantamento datado de 16/10 abaixo é histórico.

Data: 16/10/2026. Escopo: fase de inspeção, anterior à implementação visual.

Atualização após revisão do usuário: diagnóstico técnico e preservação dos originais APROVADOS. Essa aprovação não valida comercialmente logo, fotografias ou embalagens. Todas as divergências continuam PENDENTES DE CONFIRMAÇÃO. O planejamento está em [PLANEJAMENTO.md](PLANEJAMENTO.md) e a política de seleção em [ASSETS_STRATEGY.md](ASSETS_STRATEGY.md). Nenhuma imagem foi liberada para uso comercial por esta atualização.

## Resultado e método

Adendo posterior — auditoria do catálogo: foi adicionado `assets/catalogo/Nutri_Acai_Catalogo_Mobile_2026_V7.pdf` (16.822.687 bytes, 16 páginas). A contagem histórica de 58 arquivos abaixo permanece preservada; o acervo atual contém esses 58 originais mais o PDF. Metadados, divergências e plano estão em [CATALOGO_INTEGRATION_REPORT.md](CATALOGO_INTEGRATION_REPORT.md). Os 58 hashes históricos foram reconferidos e permanecem intactos. Situação na auditoria: PDF ainda não aprovado. Atualização posterior: o responsável aprovou este arquivo para distribuição, conforme informado pelo usuário; integração registrada em CATALOGO_INTEGRATION_REPORT.md. A aprovação não libera imagens isoladas nem altera as demais pendências.

Foram encontrados **58 arquivos, 39 conteúdos únicos, 17 grupos de duplicatas exatas e 19 cópias adicionais**, totalizando **112.919.846 bytes (107,69 MiB)**. São 34 PNGs e 24 JPEGs, sem subpastas em `assets/`. Todos foram decodificados com sucesso. Não foram encontrados vídeos, fontes, vetores, ícones independentes, PDFs, arquivos de layout ou fotografias identificáveis de fábrica, equipe, câmaras frias, frota e expedição.

A varredura recursiva inclui todos os arquivos; formato detectado pelo decodificador, dimensões em pixels, tamanho e SHA-256 estão no inventário abaixo e em [metadata.json](assets-audit/metadata.json). Todos os 39 conteúdos únicos foram conferidos visualmente nas quatro pranchas. As 19 cópias têm conteúdo idêntico por SHA-256 e não foram abertas individualmente. Logo, Natural 5 L, Natural atualizado, Guaraná 5/10 L e recorte do Zero tiveram também abertura individual. A conferência das pranchas não equivale à leitura integral dos microtextos, ingredientes ou tabelas nutricionais.

Pranchas de conferência: [01 — IDs 1–12](assets-audit/contact-1.jpg), [02 — IDs 13–24](assets-audit/contact-2.jpg), [03 — IDs 25–36](assets-audit/contact-3.jpg), [04 — IDs 37–39](assets-audit/contact-4.jpg). Os IDs conectam as pranchas às tabelas deste relatório.

Ferramentas existentes: Python 3.13.15, Pillow 12.3.0, Node.js 24.19.0 e npm 11.19.0. Nenhuma dependência foi instalada. ImageMagick e ffprobe não foram localizados no PATH. O script [audit_assets.py](audit_assets.py) lê os originais e gera somente metadados e miniaturas em `docs/assets-audit/`. Não houve alteração, movimentação, exclusão ou renomeação em `assets/`.

## Fonte de verdade e ambiente

O projeto inicialmente continha apenas `assets/`, sem aplicação, package.json ou AGENTS.md localizado na pasta. O dossiê foi localizado e seu texto integral foi lido via XML do DOCX, sem modificá-lo:

`G:/ARQUIVOS FELIPE/SITES CRIADOS/NUTRI/DOSSIE V3/Dossie_Nutri_Acai_V3_Fonte_de_Verdade.docx`

Dossiê versão 3.0, 10/10/2026: matriz de 25 SKUs, Zero individual de 200 ml, Pitaya removida e validação comercial/visual ainda necessária. O documento não autentica individualmente cada imagem desta pasta. Não se declara fotografia oficial apenas por nome, aparência ou presença no catálogo.

## Identidade e referências

`assets/logo_2026_transparent.png` é o único logotipo isolado encontrado: 1336 × 1376 px, RGBA com transparência efetiva (alfa de 0 a 255). Mostra frutas roxas, folhas verdes, contorno multicolorido, lettering branco/verde e a assinatura “SABOR QUE NUTRE. ENERGIA QUE CONECTA.”, coerente com o dossiê. É o **candidato principal à marca do site**, pendente de confirmação de que esta é a versão oficial vigente. Há serrilhado visível em ampliação; não pressupor qualidade vetorial a partir das dimensões. Não redesenhar, recolorir, simplificar ou remover a assinatura. Solicitar SVG/PDF vetorial oficial e eventual variante oficial para tamanhos pequenos.

As embalagens contêm outra apresentação da marca, circular mais simples, frequentemente com “Nutritivo e saboroso”. Isso não autoriza extrair ou substituir o logo do site, nem alterar as embalagens. Confirmar a coexistência das versões.

`assets/capa atualizada.png` e `assets/capa_catalogo_v7.png` mostram composições distintas de produtos, logo, frutas, roxo/verde e faixas de categorias. A segunda é idêntica a `assets/Nutri Açaí caapa catalogo.png`. Servem como referências de identidade, não como layouts aprovados do site. “Atualizada” não comprova aprovação. Há textos e selos incorporados que não devem ser convertidos em promessas comerciais sem validação.

Direção recomendada: aproveitar marca, presença dos produtos e cores de referência do dossiê (#7E3997, #BCDA82, #FDFCFD, #000000), sem declarar manual oficial. Manter fundo claro e respiro; não reproduzir a densidade gráfica das capas como interface. Não foi encontrado layout definitivo de website.

## Divergências e confirmações necessárias

1. **Guaraná 5 L versus 10 L — ID 5:** `acai_guarana_10l.jpg`, `acai_guarana_5l.jpg`, `Açaí com Guaraná — 5 L.jpg` e `Gemini_Generated_Image_ixf1u7ixf1u7ixf1.jpg` são byte a byte iguais. A imagem mostra caixa com Guaraná; a tigela encobre parte de volume/peso, aparecendo parcialmente “9,4…”. O dossiê distingue 5 L / 4,7 kg de 10 L / 9,4 kg. Não atribuir esta imagem a ambos. Solicitar fotos oficiais distintas e confirmação da procedência; o nome Gemini e elementos gráficos reforçam a dúvida sobre geração sintética.
2. **Natural 5 L — IDs 9 e 37:** o ID 9 tem “Natural” na tampa, mas “Açaí com Guaraná TRADICIONAL” na frente. `natural atualizado.png` mostra “Açaí NATURAL” e 5 L / 4,7 kg, mas altera também cores e composição; não é duplicata nem prova de correção autorizada. Solicitar confirmação da embalagem real e da origem da versão atualizada. Não corrigir texto por edição.
3. **Zero individual — IDs 13 e 18:** `acai_zero_220ml.png` e `zero220.png` são iguais; o nome sugere 220 ml, contrário ao SKU de **200 ml** do dossiê. O recorte `crop_zero220_label.png` é pequeno e oblíquo: não permite confirmar com segurança o volume impresso. Confirmar foto e embalagem de 200 ml; não renomear o original nem cadastrar 220 ml por inferência.
4. **Pitaya — ID 38:** screenshot mostra Sorbet de Pitaya. O dossiê proíbe reintroduzir esse SKU sem autorização explícita. Material histórico, excluído da seleção comercial atual.
5. **Complementos dos copos — IDs 32, 35 e 39:** aparecem copos com “+ PAÇOCA”; a matriz descreve leite em pó para Morango/Banana 220 ml. Não trocar automaticamente o complemento nem criar novos SKUs. Confirmar quais embalagens/fotos representam o catálogo vigente.
6. **Procedência das imagens:** nove arquivos têm prefixo `Gemini_Generated_Image_`, e três aliases adicionais pertencem a um desses conteúdos. Cenários com respingos suspensos e apresentação publicitária são visíveis. Os demais PNGs e JPEGs também podem ser composições; aparência não autentica fotografia. Pedir relação de imagens autorizadas e fotografias originais. Não usar materiais sintéticos como fotografias oficiais.
7. **Logo e capas:** confirmar logo vigente, coexistência da assinatura nas embalagens e qual capa é a referência atual. Não inferir aprovação pelo nome do arquivo.

Todos os itens acima ficam **PENDENTES DE CONFIRMAÇÃO**. Pesos e alegações adicionais visíveis em rótulos não foram transcritos para dados comerciais; requerem validação conforme dossiê. Nenhuma divergência foi resolvida por suposição.

## Avaliação visual por conteúdo único

Os IDs têm todos os respectivos caminhos na lista completa ao final. “Candidato” significa material tecnicamente utilizável após validação de procedência e SKU, não aprovação comercial.

| ID | Categoria / conteúdo observado | Finalidade provável e avaliação |
|---|---|---|
| 1 | Guaraná, balde branco, rótulo 12 L | Candidato Food Service; cenário quadrado, validar fotografia/rótulo. |
| 2 | Guaraná, balde branco, rótulo 3,6 L | Candidato Food Service; cenário quadrado, validar fotografia/rótulo. |
| 3 | Banana, pote amarelo | Candidato varejo 1,5 L; composição vertical com frutas. |
| 4 | Banana, caixa amarela 5 L | Candidato Food Service; vertical, produto inteiro. |
| 5 | Guaraná, caixa com respingos e tigela | Suspenso: aliases 5/10 L e origem Gemini; informação parcialmente encoberta. |
| 6 | Guaraná, pote em base clara | Candidato varejo 1,5 L; única composição de produto horizontal 3:2. |
| 7 | Morango, pote vermelho | Candidato varejo 1,5 L; vertical com frutas e tecido. |
| 8 | Natural, pote roxo/verde | Candidato varejo 1,5 L; vertical, confirmar rótulo e procedência. |
| 9 | Caixa com tampa Natural e frente Guaraná | Suspenso por divergência interna de sabor. |
| 10 | Trufado Avelã, pote com cenário de chocolate | Candidato varejo 1,5 L; validar embalagem. |
| 11 | Trufado Leitinho, pote em cenário marrom | Candidato varejo 1,5 L; formato quadrado. |
| 12 | Zero Açúcar, pote com rótulo azul | Candidato varejo 1,5 L; vertical. |
| 13 | Zero Açúcar, copo azul sem sobretampa alta | Suspenso até confirmação de 200 ml; nome aponta 220 ml. |
| 14 | Zero Açúcar, caixa azul 5 L | Candidato Food Service; composição quadrada. |
| 15 | Capa de catálogo com conjunto de produtos | Referência editorial; versão diferente do ID 16, confirmar vigente. |
| 16 | Capa V7 com conjunto de produtos | Referência editorial, duplicada; não é interface de site aprovada. |
| 17 | Creme de Leitinho, caixa amarela | Candidato Food Service 5 L; vertical; validar versão de embalagem. |
| 18 | Recorte oblíquo do rótulo Zero | Material auxiliar de conferência, inadequado como imagem de produto; microtexto inconclusivo. |
| 19 | Frozen Morango na praia | Referência de peça/vídeo capturado, ícone de áudio visível; baixa resolução. Não é arquivo de vídeo. |
| 20 | Frozen Morango, caixa sobre fundo rosa | Candidato condicionado a versão melhor, origem e confirmação; 484 px de largura. |
| 21 | Frozen Natural, caixa azul em cenário de água | Candidato condicionado a origem; 676 px de largura limita ampliação. |
| 22 | Guaraná individual com leite em pó | Referência com nome Gemini; não tratar como foto oficial. |
| 23 | Guaraná balde 12 L em cenário de floresta | Referência com nome Gemini; alternativa temática ao ID 1, não duplicata. |
| 24 | Trufado Leitinho individual com leite em pó | Referência com nome Gemini; não tratar como foto oficial. |
| 25 | Morango individual com leite em pó | Referência com nome Gemini; não tratar como foto oficial. |
| 26 | Trufado Avelã individual com leite em pó | Referência com nome Gemini; não tratar como foto oficial. |
| 27 | Balde Guaraná em cenário de floresta | Referência com nome Gemini; conferir capacidade, não inferir somente pela forma. |
| 28 | Morango, caixa 5 L com frutas | Referência com nome Gemini; não tratar como foto oficial. |
| 29 | Banana individual com leite em pó | Referência com nome Gemini; não tratar como foto oficial. |
| 30 | Caixa aberta de Guaraná, mão e colher | Referência de consumo/serviço; 477 px, não comprova operação da empresa. |
| 31 | Creme de Cupuaçu 5 L, caixa com frutas | Candidato condicionado a origem e arquivo melhor; 680 px, categoria Tradicionais no dossiê. |
| 32 | Morango individual com paçoca | Referência pendente: complemento divergente da matriz e baixa resolução. |
| 33 | Creme de Leitinho, peça “Sabor e cremosidade!” | Referência promocional; 490 px, texto incorporado e apresentação diferente do ID 17. |
| 34 | Trufado Avelã individual com leite em pó | Candidato condicionado a origem e arquivo melhor; 480 px. |
| 35 | Banana individual com paçoca | Referência pendente: complemento divergente; imagem quase quadrada. |
| 36 | Logotipo isolado transparente | Candidato principal de identidade; verificar versão oficial, preservar desenho integral. |
| 37 | Natural 5 L com frente “Açaí NATURAL” | Candidato preferencial para este SKU somente após confirmação; difere do ID 9. |
| 38 | Screenshot Instagram / Sorbet de Pitaya | Histórico fora da matriz; interface e barras de celular visíveis. Não publicar como produto vigente. |
| 39 | Screenshot Instagram / Banana com paçoca | Referência de comunicação; interface visível e complemento pendente. Não usar captura como foto final. |

## Adequação por canal e seleção proposta

**Prontos tecnicamente para referência interna:** logo, capas e pranchas. Os arquivos abriram corretamente. **Nenhuma fotografia foi autenticada como oficial nesta auditoria.** O logo é o primeiro candidato ao cabeçalho/rodapé após confirmação; capas orientam cores e linguagem. Para os cartões de produto, priorizar os IDs 1–4, 6–8, 10–12, 14, 17 e 37, condicionados à validação descrita acima. Os IDs 20, 21, 31 e 34 precisam especialmente de fontes melhores. IDs com divergências ou prefixo Gemini não entram como fotos comerciais finais sem resolução das pendências.

**Desktop:** imagens de 1122–1792 px de largura são adequadas a cartões e módulos médios, após otimização. Não supor resolução suficiente para hero de largura total em telas 2×. Preferir imagem ao lado de texto a esticar retratos. O ID 6 tem formato mais favorável a módulo horizontal; não cortar cenário ou rótulos para preencher uma faixa.

**Mobile:** retratos e quadrados funcionam em cartões com proporção preservada. Para exibir 360 CSS px em tela 2×, buscar ao menos 720 px de largura; peças de 362–680 px têm limitações mesmo no celular. Capas de 941 × 1672 são próximas de 9:16, mas seus textos ficam pequenos; não substituir conteúdo HTML por uma capa inteira.

**Institucional:** logo pode representar identidade após confirmação. Produtos não comprovam instalações, frota ou processos. Não há material específico para a seção de operação ou vídeo institucional. Usar futuramente placeholder textual claramente identificado, como “Vídeo institucional — material pendente”, sem inventar imagens reais. Não criar substitutos nesta auditoria.

**Fontes, ícones e vetores:** ausentes como arquivos independentes. Textos/ícones incorporados nas capas não são recursos reutilizáveis nem comprovam licença de fonte. Solicitar arquivos oficiais; não vetorizar automaticamente a marca. Não há vídeo a otimizar; o ícone de áudio em uma imagem não demonstra disponibilidade de vídeo.

## Otimização e integração futura

- Preservar todos os originais e aliases históricos. Referenciar apenas um caminho existente por conteúdo aprovado em um manifesto TypeScript centralizado; IDs lógicos podem ser estáveis sem renomear arquivos. Registrar caminho, dimensões, SKU, procedência e status de aprovação.
- Na futura aplicação Next.js, avaliar importações estáticas a partir de `assets/` com `next/image`, evitando uma segunda cópia indiscriminada em `public/`. A estratégia definitiva depende da hospedagem. Manter dimensões, `sizes`, texto alternativo validado e carregamento tardio fora da primeira dobra.
- Gerar WebP/AVIF e tamanhos responsivos somente como derivados separados ou pelo otimizador da aplicação; nunca sobrescrever originais. Avaliar 320/480/640/960 px conforme a fonte e a largura renderizada, sem ampliar fontes pequenas. PNGs fotográficos de cerca de 2 MB e JPEGs de até 3,47 MB são pesados para entrega direta no mobile.
- Conferir rótulos e bordas após compressão. Para o logo, preferir PNG ou compressão sem perdas com alfa até receber vetor oficial. Não remover fundo, redesenhar embalagem, alterar textos, cortar informação ou inferir novos volumes.
- Usar `object-fit: contain` quando necessário para preservar cenário e embalagem. Evitar recortes automáticos destrutivos, filtros que alterem cores e upscaling por IA.
- Duplicatas exatas são comprovadas por SHA-256, não apenas semelhança visual. Versões como as duas capas, os Naturais e diferentes cenários de baldes continuam preservadas como materiais distintos. Não houve busca automatizada de similaridade perceptual; as relações visuais relevantes foram registradas manualmente.

## Diagnóstico de arquitetura e próximo passo

Sem implementação nesta etapa. Recomenda-se Next.js/App Router, TypeScript estrito, componentes reutilizáveis, conteúdo de produtos separado de manifesto de assets e configurações de SEO/tracking. Estrutura futura: `src/app/`, `src/components/`, `src/content/`, `src/config/`, `src/lib/`, `assets/` e `docs/`. Versões e compatibilidade de dependências serão verificadas na preparação, após aprovação do diagnóstico. Não foram executados build/lint porque não existe aplicação.

Para prosseguir, confirmar versão do logo, procedência das fotos, correspondências Guaraná 5/10 L, Natural 5 L, Zero 200 ml e complementos dos copos. Solicitar fotos reais da operação e fontes melhores para peças de baixa resolução. O pedido anexado determina aguardar aprovação do diagnóstico antes de implementar; esta auditoria e seus artefatos são a entrega da inspeção.

## Inventário completo dos arquivos

Proporção informada como largura/altura, sem arredondar as dimensões. Todos os arquivos têm um quadro. Apenas o logo possui canal alfa; os demais são RGB opacos. Os dois screenshots registram 72 × 72 DPI; os outros arquivos não informam DPI. DPI não aumenta resolução web: o dimensionamento relevante é em pixels.

| ID visual | Caminho relativo | Categoria / finalidade | Formato | Dimensões px | L/A | Bytes |
|---|---|---|---|---|---|---|
| 01 | `assets/acai_balde_12l.png` | Produto / candidato condicionado | PNG | 1254 × 1254 | 1.0000 | 2020430 |
| 02 | `assets/acai_balde_3_6l.png` | Produto / candidato condicionado | PNG | 1254 × 1254 | 1.0000 | 2249542 |
| 03 | `assets/acai_banana_1_5l.png` | Produto / candidato condicionado | PNG | 1122 × 1402 | 0.8003 | 2228076 |
| 04 | `assets/acai_banana_5l.png` | Produto / candidato condicionado | PNG | 1122 × 1402 | 0.8003 | 2494461 |
| 05 | `assets/acai_guarana_10l.jpg` | Produto / divergência pendente; indício de IA | JPEG | 1792 × 2400 | 0.7467 | 3193249 |
| 06 | `assets/acai_guarana_1_5l.png` | Produto / candidato condicionado | PNG | 1536 × 1024 | 1.5000 | 1910445 |
| 05 | `assets/acai_guarana_5l.jpg` | Produto / divergência pendente; indício de IA | JPEG | 1792 × 2400 | 0.7467 | 3193249 |
| 07 | `assets/acai_morango_1_5l.png` | Produto / candidato condicionado | PNG | 1122 × 1402 | 0.8003 | 2426255 |
| 08 | `assets/acai_natural_1_5l.png` | Produto / candidato condicionado | PNG | 1122 × 1402 | 0.8003 | 2430117 |
| 09 | `assets/acai_natural_5l.png` | Produto / divergência pendente | PNG | 1254 × 1254 | 1.0000 | 2540419 |
| 10 | `assets/acai_trufado_avela_1_5l.png` | Produto / candidato condicionado | PNG | 1122 × 1402 | 0.8003 | 2284471 |
| 11 | `assets/acai_trufado_leitinho_1_5l.png` | Produto / candidato condicionado | PNG | 1254 × 1254 | 1.0000 | 2152019 |
| 12 | `assets/acai_zero_1_5l.png` | Produto / candidato condicionado | PNG | 1122 × 1402 | 0.8003 | 2248710 |
| 13 | `assets/acai_zero_220ml.png` | Produto / divergência pendente | PNG | 1122 × 1402 | 0.8003 | 2285870 |
| 14 | `assets/acai_zero_5l.png` | Produto / candidato condicionado | PNG | 1254 × 1254 | 1.0000 | 2309706 |
| 01 | `assets/AÇAI BALDE 12lL.png` | Produto / candidato condicionado | PNG | 1254 × 1254 | 1.0000 | 2020430 |
| 02 | `assets/AÇAI DE BALDE 3,6.png` | Produto / candidato condicionado | PNG | 1254 × 1254 | 1.0000 | 2249542 |
| 03 | `assets/Açaí com Banana — 1,5 L.png` | Produto / candidato condicionado | PNG | 1122 × 1402 | 0.8003 | 2228076 |
| 04 | `assets/Açaí com Banana — 5 L.png` | Produto / candidato condicionado | PNG | 1122 × 1402 | 0.8003 | 2494461 |
| 06 | `assets/Açaí com Guaraná — 1,5 L.png` | Produto / candidato condicionado | PNG | 1536 × 1024 | 1.5000 | 1910445 |
| 05 | `assets/Açaí com Guaraná — 5 L.jpg` | Produto / divergência pendente; indício de IA | JPEG | 1792 × 2400 | 0.7467 | 3193249 |
| 07 | `assets/Açaí com Morango — 1,5 L.png` | Produto / candidato condicionado | PNG | 1122 × 1402 | 0.8003 | 2426255 |
| 08 | `assets/Açaí Natural — 1,5 L.png` | Produto / candidato condicionado | PNG | 1122 × 1402 | 0.8003 | 2430117 |
| 09 | `assets/Açaí Natural — 5 L.png` | Produto / divergência pendente | PNG | 1254 × 1254 | 1.0000 | 2540419 |
| 10 | `assets/Açaí Trufado Avelã — 1,5 L.png` | Produto / candidato condicionado | PNG | 1122 × 1402 | 0.8003 | 2284471 |
| 11 | `assets/Açaí Trufado Leitinho — 1,5 L.png` | Produto / candidato condicionado | PNG | 1254 × 1254 | 1.0000 | 2152019 |
| 12 | `assets/Açaí Zero Açúcar — 1,5 L.png` | Produto / candidato condicionado | PNG | 1122 × 1402 | 0.8003 | 2248710 |
| 14 | `assets/Açaí Zero Açúcar — 5 L.png` | Produto / candidato condicionado | PNG | 1254 × 1254 | 1.0000 | 2309706 |
| 15 | `assets/capa atualizada.png` | Capa / referência editorial | PNG | 941 × 1672 | 0.5628 | 2473715 |
| 16 | `assets/capa_catalogo_v7.png` | Capa / referência editorial | PNG | 941 × 1672 | 0.5628 | 2533500 |
| 17 | `assets/Creme de Leitinho — 5 L.png` | Produto / candidato condicionado | PNG | 1122 × 1402 | 0.8003 | 2014362 |
| 17 | `assets/creme_leitinho_5l.png` | Produto / candidato condicionado | PNG | 1122 × 1402 | 0.8003 | 2014362 |
| 18 | `assets/crop_zero220_label.png` | Recorte / conferência interna | PNG | 224 × 421 | 0.5321 | 156904 |
| 19 | `assets/frozem morango 3 lados.jpg` | Comunicação / referência | JPEG | 362 × 640 | 0.5656 | 66308 |
| 20 | `assets/frozem morango.jpg` | Produto / candidato condicionado | JPEG | 484 × 642 | 0.7539 | 84293 |
| 21 | `assets/frozem natural.jpg` | Produto / candidato condicionado | JPEG | 676 × 900 | 0.7511 | 207157 |
| 22 | `assets/Gemini_Generated_Image_czs3lfczs3lfczs3.jpg` | Produto / candidato condicionado; indício de IA | JPEG | 1792 × 2400 | 0.7467 | 2962960 |
| 23 | `assets/Gemini_Generated_Image_fa0uc1fa0uc1fa0u.jpg` | Produto / candidato condicionado; indício de IA | JPEG | 1792 × 2400 | 0.7467 | 3470606 |
| 24 | `assets/Gemini_Generated_Image_iimibfiimibfiimi.jpg` | Produto / candidato condicionado; indício de IA | JPEG | 1792 × 2400 | 0.7467 | 2648978 |
| 05 | `assets/Gemini_Generated_Image_ixf1u7ixf1u7ixf1.jpg` | Produto / divergência pendente; indício de IA | JPEG | 1792 × 2400 | 0.7467 | 3193249 |
| 25 | `assets/Gemini_Generated_Image_ky6imbky6imbky6i.jpg` | Produto / candidato condicionado; indício de IA | JPEG | 1792 × 2400 | 0.7467 | 2916816 |
| 26 | `assets/Gemini_Generated_Image_t5ivict5ivict5iv.jpg` | Produto / candidato condicionado; indício de IA | JPEG | 1888 × 2272 | 0.8310 | 2444792 |
| 27 | `assets/Gemini_Generated_Image_x96wcpx96wcpx96w.jpg` | Produto / candidato condicionado; indício de IA | JPEG | 1792 × 2400 | 0.7467 | 3175401 |
| 28 | `assets/Gemini_Generated_Image_xpkmwtxpkmwtxpkm.jpg` | Produto / candidato condicionado; indício de IA | JPEG | 1792 × 2400 | 0.7467 | 2990633 |
| 29 | `assets/Gemini_Generated_Image_y7emp3y7emp3y7em.jpg` | Produto / candidato condicionado; indício de IA | JPEG | 1792 × 2400 | 0.7467 | 2965066 |
| 20 | `assets/IMG-20260907-WA0017.jpg` | Produto / candidato condicionado | JPEG | 484 × 642 | 0.7539 | 84293 |
| 30 | `assets/IMG-20260907-WA0018.jpg` | Comunicação / referência | JPEG | 477 × 637 | 0.7488 | 58589 |
| 31 | `assets/IMG-20260907-WA0019.jpg` | Produto / candidato condicionado | JPEG | 680 × 879 | 0.7736 | 161103 |
| 32 | `assets/IMG-20260907-WA0021.jpg` | Produto / divergência pendente | JPEG | 484 × 634 | 0.7634 | 106490 |
| 33 | `assets/IMG-20260907-WA0023.jpg` | Comunicação / referência | JPEG | 490 × 636 | 0.7704 | 100377 |
| 34 | `assets/IMG-20260907-WA0028.jpg` | Produto / candidato condicionado | JPEG | 480 × 634 | 0.7571 | 100810 |
| 35 | `assets/IMG-20260907-WA0031.jpg` | Produto / divergência pendente | JPEG | 640 × 632 | 1.0127 | 135022 |
| 36 | `assets/logo_2026_transparent.png` | Identidade / logo candidato | PNG | 1336 × 1376 | 0.9709 | 333506 |
| 37 | `assets/natural atualizado.png` | Produto / candidato condicionado | PNG | 1086 × 1448 | 0.7500 | 2364627 |
| 16 | `assets/Nutri Açaí caapa catalogo.png` | Capa / referência editorial | PNG | 941 × 1672 | 0.5628 | 2533500 |
| 38 | `assets/Screenshot_20260905-182832_Instagram.jpg` | Histórico / Pitaya excluída | JPEG | 1080 × 2340 | 0.4615 | 1057715 |
| 39 | `assets/Screenshot_20260905-182937_Instagram.jpg` | Comunicação / referência | JPEG | 1080 × 2340 | 0.4615 | 823923 |
| 13 | `assets/zero220.png` | Produto / divergência pendente | PNG | 1122 × 1402 | 0.8003 | 2285870 |

## Duplicatas exatas

Os caminhos em cada linha possuem o mesmo SHA-256. Nenhum foi excluído. Hashes completos disponíveis no JSON de metadados.

| ID | Caminhos idênticos |
|---|---|
| 01 | `assets/acai_balde_12l.png`<br>`assets/AÇAI BALDE 12lL.png` |
| 02 | `assets/acai_balde_3_6l.png`<br>`assets/AÇAI DE BALDE 3,6.png` |
| 03 | `assets/acai_banana_1_5l.png`<br>`assets/Açaí com Banana — 1,5 L.png` |
| 04 | `assets/acai_banana_5l.png`<br>`assets/Açaí com Banana — 5 L.png` |
| 05 | `assets/acai_guarana_10l.jpg`<br>`assets/acai_guarana_5l.jpg`<br>`assets/Açaí com Guaraná — 5 L.jpg`<br>`assets/Gemini_Generated_Image_ixf1u7ixf1u7ixf1.jpg` |
| 06 | `assets/acai_guarana_1_5l.png`<br>`assets/Açaí com Guaraná — 1,5 L.png` |
| 07 | `assets/acai_morango_1_5l.png`<br>`assets/Açaí com Morango — 1,5 L.png` |
| 08 | `assets/acai_natural_1_5l.png`<br>`assets/Açaí Natural — 1,5 L.png` |
| 09 | `assets/acai_natural_5l.png`<br>`assets/Açaí Natural — 5 L.png` |
| 10 | `assets/acai_trufado_avela_1_5l.png`<br>`assets/Açaí Trufado Avelã — 1,5 L.png` |
| 11 | `assets/acai_trufado_leitinho_1_5l.png`<br>`assets/Açaí Trufado Leitinho — 1,5 L.png` |
| 12 | `assets/acai_zero_1_5l.png`<br>`assets/Açaí Zero Açúcar — 1,5 L.png` |
| 13 | `assets/acai_zero_220ml.png`<br>`assets/zero220.png` |
| 14 | `assets/acai_zero_5l.png`<br>`assets/Açaí Zero Açúcar — 5 L.png` |
| 16 | `assets/capa_catalogo_v7.png`<br>`assets/Nutri Açaí caapa catalogo.png` |
| 17 | `assets/Creme de Leitinho — 5 L.png`<br>`assets/creme_leitinho_5l.png` |
| 20 | `assets/frozem morango.jpg`<br>`assets/IMG-20260907-WA0017.jpg` |
