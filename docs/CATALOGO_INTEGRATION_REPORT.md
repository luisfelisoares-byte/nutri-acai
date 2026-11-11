# Auditoria do catálogo PDF e plano de integração

Data da auditoria: 16/10/2026. A situação inicial descrita nas seções históricas abaixo foi atualizada pela autorização e integração registradas a seguir. Deploy continua não autorizado.

## Atualização — integração autorizada

O catálogo `assets/catalogo/Nutri_Acai_Catalogo_Mobile_2026_V7.pdf` foi **aprovado pelo responsável pela empresa, conforme informado pelo usuário**, para disponibilização no site. Não foi solicitada nova aprovação. Essa autorização prevalece sobre o ponto de parada histórico da auditoria abaixo e não altera os registros de diferenças em relação ao dossiê nem autoriza mudanças comerciais em outras áreas.

Implementada uma única cópia de publicação em `public/catalogo/Nutri_Acai_Catalogo_Mobile_2026_V7.pdf`. URL relativa: `/catalogo/Nutri_Acai_Catalogo_Mobile_2026_V7.pdf`. Original preservado, sem recompressão ou edição.

Arquivos de aplicação alterados: `src/config/site.ts` (URL/nome/tamanho centralizados), `src/components/ui/ActionLink.tsx` (atributos nativos de âncora para reutilizar botão) e `src/app/page.tsx` (bloco de catálogo na apresentação inicial). Botão **Ver catálogo completo** abre nova aba com indicação acessível; **Baixar catálogo PDF** usa a mesma URL com atributo download. Estilos existentes reutilizados; nenhum arquivo de design system/CSS alterado.

Criado `scripts/check-catalog.mjs` para conferir exclusivamente a integração usando Playwright e Chrome já instalados; nenhuma dependência nova. Documentação atualizada neste relatório, README e PENDENCIAS. Sem deploy ou novas páginas. O verificador histórico de 58 arquivos não foi refatorado nesta tarefa; a integridade é conferida independentemente por hashes, mantendo P19 documentada.

### Resultados executados da integração

- `npm run lint`: concluído sem erros reportados.
- `npm run typecheck`: concluído com código 0.
- `npm run build`: concluído com código 0 (Webpack); Home, 404 e robots pré-renderizados. Nenhuma página adicional criada.
- Cópia pública e original comparados byte a byte e por SHA-256: `8719d38b610810d14305c9b1757a862dc779de098b6611ba65fc6e22272052e5`. Os 58 originais também foram reconferidos contra seus hashes históricos.
- Servidor do build otimizado executado em `http://127.0.0.1:3001`. GET do PDF: **200**, MIME **application/pdf**, 16.822.687 bytes e hash do corpo idêntico ao original. HEAD: **200**. Range: **206**, `bytes 0-1023/16822687`.
- Os dois links foram inspecionados e clicados no Chrome existente via Playwright. “Ver catálogo completo” abriu a URL correta em nova aba; o leitor nativo exibiu a capa, miniaturas e indicador de 16 páginas, conforme captura efetivamente aberta e inspecionada. “Baixar catálogo PDF” gerou download com nome correto e hash idêntico.
- Não houve solicitação do PDF no carregamento inicial da Home, antes do clique. Nenhum erro JavaScript capturado.
- Layout conferido em 320, 390, 768 e 1440 px; capturas desktop/mobile foram abertas e inspecionadas. Os dois links ficam dentro da largura visível e têm alturas de 50 e 44 px. Foco visível conferido no botão.
- Limitação pré-existente: a página inteira apresenta overflow em 320 e 768 px, **também quando o bloco de catálogo é ocultado temporariamente apenas no navegador de teste**. O bloco novo não excede a largura. A correção global permanece fora deste escopo; nenhum CSS existente foi modificado.
- Não foram testados celulares físicos, Safari/iOS ou Firefox. Larguras móveis foram emuladas no Chrome. Não houve medição de desempenho em rede celular nem deploy.

Evidências: [resultados HTTP e navegador](catalogo-integration/results.json), [desktop](catalogo-integration/home-1440.png), [mobile](catalogo-integration/home-390.png), [bloco em 320 px](catalogo-integration/catalog-320.png) e [PDF no leitor do navegador](catalogo-integration/pdf-browser.png). Script: `scripts/check-catalog.mjs`, usando instalações existentes indicadas por PLAYWRIGHT_MODULE e CHROME_PATH, sem novas dependências.

Também foi atualizado o adendo de `docs/ASSETS_INVENTORY.md` para refletir a aprovação posterior do PDF, preservando a auditoria histórica. P20 registra o overflow encontrado fora do bloco do catálogo. P19 (verificador histórico que rejeita acréscimos) permanece sem refatoração e não é apresentado como teste aprovado.

**Entrega concluída no escopo autorizado:** disponibilização local do catálogo aprovado, mantendo os demais conteúdos e diferenças comerciais documentadas. Sem publicação externa.

---

## Histórico da auditoria anterior à aprovação



## 1. Arquivo encontrado

A pasta `assets/catalogo/` foi listada antes da leitura. Foi encontrado um único arquivo, com o nome real abaixo; não foi presumido nome, criado outro catálogo ou alterado o original.

| Característica | Resultado |
|---|---|
| Nome | `Nutri_Acai_Catalogo_Mobile_2026_V7.pdf` |
| Caminho relativo | `assets/catalogo/Nutri_Acai_Catalogo_Mobile_2026_V7.pdf` |
| Tamanho | 16.822.687 bytes — 16,82 MB / 16,04 MiB |
| Formato detectado | PDF 1.7 |
| Páginas | **16**, todas verticais |
| Dimensões | 810 × 1440 pontos por página; proporção exata 9:16; rotação 0° |
| Dimensão física equivalente | 285,75 × 508 mm; não confundir pontos PDF com pixels |
| Título nos metadados | Nutri Acai - Catalogo Digital Mobile 2026 (V7) |
| Criador declarado | Nutri Acai Design Engine V7 - Optimized Master |
| Produtor declarado | PyMuPDF & Headless Chrome |
| Criação/modificação declaradas | `D:20261013191005-02'00'` — metadado, não comprovação de aprovação |
| Senha / reparo | Sem criptografia; aberto sem reparo reportado |
| SHA-256 | `8719d38b610810d14305c9b1757a862dc779de098b6611ba65fc6e22272052e5` |

O assunto nos metadados menciona 1080 × 1920 e “Oficial”. Isso descreve a intenção editorial; não transforma cada imagem/dado em material comercial aprovado. O arquivo está dentro da meta de peso de 15–25 MB citada no dossiê, mas não cumpre a contagem de 17 páginas nele registrada.

## 2. Método e resultados da inspeção

Consultados os documentos solicitados, código atual da Home/componentes/configuração e o dossiê original em `G:/ARQUIVOS FELIPE/SITES CRIADOS/NUTRI/DOSSIE V3/Dossie_Nutri_Acai_V3_Fonte_de_Verdade.docx` (texto do XML do DOCX).

Utilizados Python, PyMuPDF 1.28.2 e Pillow já instalados. Nenhuma dependência foi instalada. O PDF foi aberto, teve texto e anotações extraídos e **todas as 16 páginas renderizadas**. Todas foram examinadas visualmente em três pranchas; capa, página 12 e página 15 também foram abertas individualmente em 810 × 1440 pixels. Não houve OCR de microtextos de embalagens.

Evidências: [metadados e links por página](catalogo-audit/metadata.json), [texto extraído](catalogo-audit/text.txt), pranchas [1–6](catalogo-audit/contact-1.jpg), [7–12](catalogo-audit/contact-2.jpg), [13–16](catalogo-audit/contact-3.jpg) e renderizações individuais em `docs/catalogo-audit/page-01.png` até `page-16.png`. São evidências de auditoria, não cópias do PDF nem recursos a publicar.

**Abertura e legibilidade:** todas as páginas renderizaram sem erro; títulos, volumes e textos editoriais principais estão legíveis nas renderizações. Não foram vistas páginas inteiramente em branco ou cortes globais de conteúdo. Microtextos nos rótulos, rodapés pequenos e algumas fotos de menor resolução exigem ampliação; não houve certificação de leitura em celular físico ou de acessibilidade do PDF. A abertura no visualizador PDF nativo de navegador ainda não foi testada nesta etapa.

**Links:** quatro anotações URI, todas apontando exatamente para `https://wa.me/5551992485496`: uma na capa, uma na página institucional 15 e duas na contracapa 16 (botão e texto auxiliar). Retângulos das anotações estão dentro dos limites das páginas. Foram verificadas estrutura e URL, não acionamento real no WhatsApp ou envio de mensagem. Nenhuma anotação de link foi encontrada nas páginas 2–14.

**Capa:** o botão está no extremo inferior, ainda dentro da faixa gráfica que reúne categorias/volumes; não cobre os textos principais visíveis, mas não comprova atendimento à exigência do dossiê de ficar fora dessa faixa. Validar disposição antes de considerar concluído o ajuste do Prompt 11.

Não foram encontradas as expressões técnicas “CENÁRIO COMPLETO PRESERVADO” ou “FOTO PROVISÓRIA • REFERÊNCIA V7” no texto extraído ou na conferência visual geral. A inspeção não autentica a procedência das fotografias.

## 3. Confronto com o dossiê V3

### Estrutura e cobertura de produtos

| Página real | Conteúdo observado | Quantidade de SKUs |
|---|---|---:|
| 1 | Capa | — |
| 2 | Natural 5 L e 1,5 L | 2 |
| 3 | Guaraná 12 L e 10 L | 2 |
| 4 | Guaraná 5 L e 3,6 L | 2 |
| 5 | Guaraná 1,5 L e 220 ml | 2 |
| 6 | Morango 5 L e Banana 5 L | 2 |
| 7 | Morango 1,5 L e Banana 1,5 L | 2 |
| 8 | Morango 220 ml e Banana 220 ml | 2 |
| 9 | Trufado Leitinho 1,5 L e Avelã 1,5 L | 2 |
| 10 | Trufado Leitinho 220 ml e Avelã 220 ml | 2 |
| 11 | Zero Açúcar 5 L | 1 |
| 12 | Zero Açúcar 1,5 L e **200 ml** | 2 |
| 13 | Frozen Natural 5 L e Morango 5 L | 2 |
| 14 | Creme de Leitinho 5 L e Cupuaçu 5 L | 2 |
| 15 | Institucional | — |
| 16 | Contracapa e contato | — |
| **Total** | **25 combinações de produto e volume** | **25** |

Os nomes e volumes editoriais cobrem os 25 SKUs da matriz V3. Os pesos explicitamente listados nos blocos editoriais conferidos coincidem com os do dossiê; isso não valida informações impressas em fotografias. Zero individual aparece como 200 ml na página 12. Pitaya não foi encontrada entre os produtos, no texto extraído ou nas imagens gerais conferidas.

### Divergências que permanecem pendentes

1. **Versão/paginação:** dossiê descreve 17 páginas e outra sequência; este PDF tem 16, com numeração impressa `/16`, institucional em 15 e contato em 16. Os produtos estão presentes, portanto não é correto afirmar simplesmente que um SKU ou uma página foi perdido por corrupção. A organização parece ser outra edição editorial, ainda que intitulada V7; sua autorização está **PENDENTE DE CONFIRMAÇÃO**. Cupuaçu e Leitinho não têm as páginas hero separadas descritas no V3.
2. **Categorias:** PDF separa “Frozen” e “Cremes”, apresentando seis agrupamentos: Tradicionais 8, Frutados 6, Trufados 4, Linha Saudável 3, Frozen 2 e Cremes 2. O dossiê exige cinco: Tradicionais 9 (inclui Cupuaçu), Frutados 6, Frozen & Cremes 3 (inclui Leitinho), Trufados 4 e Linha Saudável 3. Não alterar a matriz do site para reproduzir automaticamente essa divisão.
3. **Temperatura institucional, página 15:** texto “Câmaras Frias a -18°C” e “temperatura a -18°C”, enquanto a redação confirmada no dossiê é **abaixo de −18 °C**. Solicitar decisão do responsável/arquivo correto; não editar este PDF nesta etapa.
4. **Formato de 12 L, página 15:** chamada diz “caixas Food Service de 12 Litros”. O SKU de 12 L no dossiê é **balde**; caixa de Guaraná corresponde a 10 L. Não incorporar essa generalização ao site.
5. **Guaraná 5 L e 10 L, páginas 4 e 3:** mesma composição de caixa usada nos dois volumes. A imagem de 1792 × 2400 é compartilhada nos recursos dessas páginas, além da repetição visual. Reforça a pendência P03; não autoriza esse vínculo no site.
6. **Fotografias, logo e alegações:** não foram autenticados pelo fato de aparecerem no PDF. Natural 5 L mostra a versão de frente “Natural”, mas isso não resolve a origem/embalagem pendente. Zero usa foto cuja correspondência a 200 ml continua não confirmada. Claims como “garantindo rentabilidade” não ganham aprovação automática; dossiê restringe a ampliação de promessas comerciais.
7. **Posição do botão da capa:** conferência do requisito “fora da faixa inferior” continua pendente, conforme seção 2.

**Conclusão editorial:** documento tecnicamente legível, com cobertura dos 25 SKUs, mas não demonstrado como a versão final compatível com todas as decisões do V3. Recomenda-se resolver versão, classificação e texto institucional antes de liberar o acesso comercial.

## 4. Solução de integração recomendada — ainda não executada

### Estado atual

Aplicação Next.js 16.4.2/App Router. Há Home, 404 e robots; a demonstração de produtos é uma seção da Home, não existe rota `/produtos` implementada. `assets/` não está exposta como diretório público. Não existe botão de PDF, cópia em `public/`, rota de download ou URL de catálogo funcionando verificada nesta etapa. Não usar caminho absoluto do Windows nem link `/assets/...` como se fosse público.

### Opção preferencial: distribuição estática

Depois de aprovada a versão e autorizada a integração, preparar **uma única cópia de distribuição byte a byte** em `public/catalogo/Nutri_Acai_Catalogo_Mobile_2026_V7.pdf`, mantendo o original intacto em `assets/catalogo/`. Essa cópia tem finalidade técnica de servir o documento; não é outro catálogo, recompressão ou duplicação editorial. Nenhuma cópia foi feita agora.

O Next serve arquivos de `public/` por caminhos relativos à raiz da URL. Isso evita implementar leitura de arquivo, streaming e requisições parciais em uma rota de servidor apenas para um PDF estático. Referência: [pasta public do Next.js](https://nextjs.org/docs/app/api-reference/file-conventions/public-folder).

**Mapeamento proposto, ainda não disponível:**

```text
Original verificado:
assets/catalogo/Nutri_Acai_Catalogo_Mobile_2026_V7.pdf

Cópia de distribuição futura:
public/catalogo/Nutri_Acai_Catalogo_Mobile_2026_V7.pdf

URL futura, somente após criação e teste:
/catalogo/Nutri_Acai_Catalogo_Mobile_2026_V7.pdf
```

O destino está vinculado ao nome real identificado, não a um catálogo fictício. Se o responsável fornecer uma versão corrigida, auditar esse arquivo e rever o mapeamento explicitamente antes da integração. Não substituir silenciosamente um original existente.

### Acesso e experiência

- Inserir **“Ver catálogo completo”** como acesso próprio na área de apresentação/ações da Home, reaproveitando classes existentes. Não mudar o destino de “Explore nossas linhas” nem confundir o PDF com a demonstração de produtos.
- Informar ao lado “PDF · 16,8 MB”, permitindo avaliar o download em rede móvel.
- Abrir em nova aba com `target="_blank"` e `rel="noopener noreferrer"`, com indicação acessível “abre em nova aba”. Navegadores compatíveis exibem seu próprio leitor; outros podem baixar ou oferecer aplicativo externo.
- Disponibilizar link separado **“Baixar PDF”**, para a mesma URL de mesma origem, com atributo `download` e nome real. Validar o comportamento nos navegadores alvo; se ignorarem o atributo e abrirem o documento, o leitor nativo ainda pode oferecer salvar. Não prometer comportamento universal antes de testar.
- Evitar iframe/visualizador próprio, bibliotecas de PDF, pré-carregamento ou fetch dos 16,8 MB na abertura da Home. Transferir apenas mediante ação do visitante.
- Se download forçado se mostrar necessário nos testes, avaliar depois uma resposta com `Content-Disposition: attachment` em rota específica, sem duplicar novamente o arquivo. Não construir essa alternativa antecipadamente.

### Publicação futura e alternativas

A cópia pública precisará integrar o artefato de publicação. Em `output: standalone`, a documentação informa que `public/` não é copiada automaticamente para o diretório standalone; incluir na preparação desse artefato se esse modo for escolhido. Hospedagem continua pendente. Referência: [output do Next.js](https://nextjs.org/docs/app/api-reference/config/next-config-js/output).

Alternativa sem cópia local: Route Handler Node lendo o original com caminho relativo ao projeto. Preserva fonte única, mas exige inclusão explícita no empacotamento, MIME/disposição, tratamento de erro e suporte adequado a Range/HEAD para leitura eficiente; também depende dos limites da hospedagem. É mais código e manutenção que a distribuição estática para este caso. Não recomendado como primeira opção. Não usar symlink absoluto/junction Windows como solução portátil.

## 5. Alterações mínimas futuras

| Arquivo | Alteração proposta após aprovação |
|---|---|
| `public/catalogo/Nutri_Acai_Catalogo_Mobile_2026_V7.pdf` | Única cópia de distribuição verificada por hash |
| `src/config/site.ts` | Centralizar URL relativa, nome real e tamanho do documento aprovado |
| `src/app/page.tsx` | Adicionar CTA “Ver catálogo completo” e link de download, preservando estrutura e estilos existentes |
| `src/components/ui/ActionLink.tsx` | Somente se o CTA reutilizar o componente: aceitar atributos nativos de âncora, sem refatorar outros componentes; alternativa mais localizada é âncora com classes atuais na Home |
| `scripts/verify-assets.mjs` | Ajuste independente recomendado abaixo; não executado |
| `README.md` e documentação de assets/pendências | Registrar fonte, cópia técnica, URL validada e aprovação específica |

Não há necessidade inicial de alterar `globals.css`, criar páginas de produto, instalar pacotes, introduzir CMS ou modificar o PDF.

### Problema identificado no verificador existente

`scripts/verify-assets.mjs` exige que **todo** o diretório `assets/` tenha exatamente os 58 arquivos da auditoria inicial. A adição autorizada do PDF passa a trazer 59 arquivos e invalida essa condição, mesmo com os 58 originais intactos. Conferência independente por SHA-256 comprovou preservação dos 58.

Alteração mínima proposta: continuar exigindo presença/caminho/hash de cada um dos 58 originais, registrar o PDF em inventário complementar com seu hash e verificar a união dos inventários. Novos arquivos desconhecidos devem continuar sendo sinalizados. Não regravar a auditoria histórica como se o PDF já estivesse nela e não remover genericamente a detecção de mudanças. Código não alterado nesta etapa.

Verificação executada: `npm run verify:assets` encerrou com código 1 e mensagem “A quantidade de arquivos originais mudou.”, confirmando o diagnóstico. A conferência independente dos 58 hashes e do PDF passou antes e depois da auditoria; a falha do script não indica alteração dos originais.

## 6. Testes necessários depois da integração

1. GET da URL proposta em dev e `build` + `start`: status 200, `Content-Type: application/pdf`, comprimento coerente e corpo com SHA-256 igual ao original aprovado.
2. Download salvo com nome esperado e mesmo hash; original e 58 assets permanecem intactos.
3. HEAD e requisição Range: verificar resposta/Content-Range quando suportado pelo servidor/hospedagem; navegação até páginas finais sem quebra. Não simular suporte no relatório.
4. Acionar os dois links em Chrome/Edge desktop e Safari iOS/Chrome Android, verificando abertura, opção de salvar, retorno ao site e fallback sem leitor nativo.
5. Verificar teclado, foco, indicação de nova aba, tamanho do toque e ausência de nova rolagem horizontal em 320/375/390 px.
6. Confirmar que a Home não baixa o PDF antes do clique; medir transferência e carregamento em rede móvel limitada.
7. Conferir os quatro links WhatsApp no visualizador, sem enviar mensagens, e preservar todas as páginas/anotações.
8. Executar lint, TypeScript, build e verificador ajustado apenas quando houver alteração de código. Validar inclusão do PDF no artefato do provedor escolhido, sem deploy nesta etapa.

Estado destes testes: **não executados para a integração**, que ainda não existe. Nenhum link HTTP do catálogo é declarado funcional.

## 7. Preservação, limites e próxima ação

Hash do PDF conferido antes/depois da leitura/renderização; os 58 originais conferidos contra inventário histórico. Nenhum PDF alterado, comprimido, regenerado, movido ou copiado para distribuição. Nenhuma modificação de código, Home, design system ou dependências. Foram criadas apenas evidências em `docs/catalogo-audit/`, este relatório e registros documentais pertinentes.

A validação visual da Home da etapa anterior permanece incompleta: o teste anterior parou em overflow de 320 px e a continuação de diagnóstico foi bloqueada pelo serviço de aprovação. Isso não foi corrigido nem reavaliado nesta auditoria de PDF; o problema deve ser tratado separadamente, sem reconstruir a Home.

**Próxima ação recomendada:** o responsável confirmar se este arquivo de 16 páginas é a versão pretendida, deliberar sobre categorias e divergências institucionais e indicar o documento aprovado para distribuição. Em seguida, aprovar a cópia técnica estática e o CTA propostos. Até essa aprovação, manter o catálogo sem integração pública e conservar as pendências comerciais existentes.
