# Nutri Açaí — prévia local

Site para avaliação, construído com Next.js, React, TypeScript estrito e Tailwind CSS. **Não é uma versão comercial aprovada.** Logo/favicons já aprovados; 25 SKUs com imagem em seis categorias, com legendas de validação e dois usos provisórios de Guaraná autorizados. Não remover avisos nem publicar sem decisão específica. Estado consolidado em [auditoria final de 20/10/2026](docs/AUDITORIA_GERAL.md).

## Executar

Ambiente usado: Node.js 24.19.0 e npm 11.19.0. Na pasta do projeto:

```powershell
npm ci
npm run dev
```

Abrir [prévia de desenvolvimento padrão](http://127.0.0.1:3000). O servidor escuta somente em 127.0.0.1. Encerrar com Ctrl+C no terminal. Se as dependências já estiverem instaladas, basta `npm run dev`; não repetir instalação para abrir a prévia. Antes de iniciar, verificar se já existe servidor funcionando.

Para executar o build otimizado localmente:

```powershell
npm run build
npm start
```

Endereço da prévia de produção local verificada nesta sessão: [http://127.0.0.1:3018/produtos](http://127.0.0.1:3018/produtos). Para reiniciar nessa porta com build existente e porta livre: `npm run start -- --port 3018`. O endereço só funciona enquanto o processo estiver ativo. Este comando não faz deploy. Build e TypeScript devem rodar sequencialmente; pausar o servidor antes de reconstruir a mesma pasta .next e reabri-lo após sucesso.

Webpack está explicitamente selecionado porque o Turbopack apresentou erro ao iniciar o subprocesso de PostCSS neste ambiente Windows. Ambos os scripts usam o mesmo bundler suportado pelo Next.

## Conferir

```powershell
npm run lint
npm run typecheck
npm run verify:assets
npm run build
```

`npm run verify:assets` usa `docs/assets-audit/inventory-v2.json`: confere caminhos, tamanhos e SHA-256 dos 94 arquivos de assets/public, aliases e rastreabilidade dos 58 registros históricos. Passou na regularização de 20/10: três conteúdos antigos arquivados byte a byte e um recorte excluído intencionalmente pelo usuário. O manifesto original `metadata.json` permanece intacto. Não regenerar o inventário automaticamente para aceitar divergências. [Inventário e procedência](docs/ASSETS_INVENTORY.md). O comando não altera arquivos.

Testes pontuais do verificador/SEO: `node --test scripts/verify-assets.test.mjs scripts/seo.test.mjs`. Usam fixtures temporárias, sem alterar os assets reais. Canonical e sitemap dependem de domínio HTTPS explicitamente confirmado em `.env.example`; enquanto indefinido, canonical ausente e sitemap vazio. Configurar domínio não remove nenhum bloqueio de indexação.

O script opcional `scripts/check-preview.mjs` requer um servidor ativo e instalações locais de Playwright/Chrome, indicadas pelas variáveis `PLAYWRIGHT_MODULE` (arquivo index.mjs do pacote) e `CHROME_PATH` (executável). O teste usa ferramentas existentes no ambiente; não são dependências do site. Evidências em `docs/preview/`.

## Escopo

- Home com apresentação, seis linhas, três destaques, negócios, Sobre, Trabalhe Conosco e contato.
- Home simplificada: hero, negócios, Sobre, Trabalhe Conosco e contato. Seções de linhas/favoritos removidas; CTA Explore nossas linhas leva a /produtos. Categoria atual Linha Zero Açúcar; links antigos de filtro seguem aceitos. Hero ampliado com imagem primeiro em tablet/celular; arte atual provisória até fotografia real adequada.
- Sobre usa a fotografia oficial assets/produção.jpg por importação estática direta, sem cópia manual adicional em public. Hero usa a arte autorizada assets/imagem para hero.png, também por importação estática direta.
- `/produtos`: 25 SKUs, filtros GET por categoria/volume, contadores, categorias sticky abaixo da altura real do cabeçalho e PDF V7.
- `/distribuidores`: pesquisa GET por município com sugestões, somente para registros confirmados/aprovados. Sem dados oficiais mostra preparação/estados vazios; Campo Bom não é oferecido como atendido. `/fornecedores` redireciona permanentemente (308).
- Navegação por âncoras, menu mobile, 404, identificação de prévia e bloqueio de indexação.
- Cabeçalho/rodapé compartilham NavLink: página atual em roxo com faixa verde; hover claro sublinhado; foco de teclado com contorno. Seções da Home são identificadas pelo fragmento da URL, sem scrollspy. Trabalhe Conosco está na navbar e no rodapé; menu móvel até 1099 px. O envio ao RH continua desativado.
- Conteúdo em `src/content/`, contato em `src/config/site.ts`, componentes em `src/components/` e tokens/estilos em `src/styles/globals.css`.
- Sem detalhes individuais de produto, CMS, banco de dados, login, coleta de leads/currículos ou tracking. RH desativado até confirmação do canal oficial; o único formulário é o filtro GET.
- Link WhatsApp abre uma conversa; não envia mensagem automaticamente. Testes não enviam mensagens.

Leia [relatório da prévia](docs/PREVIEW_REPORT.md), [decisões técnicas](docs/TECHNICAL_DECISIONS.md), [pendências](docs/PENDENCIAS.md) e [auditoria final](docs/AUDITORIA_GERAL.md). Publicação, domínio, SEO de produção e liberação comercial continuam pendentes. Não há repositório Git nesta pasta; usar evidências de hash/backups para rastrear integridade.


## Catálogo PDF aprovado

O responsável aprovou o V7 para disponibilização, conforme informado pelo usuário. Na Home, use **Ver catálogo completo** (nova aba) ou **Baixar catálogo PDF**. Com o servidor ativo, o arquivo fica em `/catalogo/Nutri_Acai_Catalogo_Mobile_2026_V7.pdf`.

`public/catalogo/` contém uma única cópia byte a byte do original preservado em `assets/catalogo/`. Não editar o PDF. A aprovação vale para a distribuição desse documento e não resolve automaticamente divergências comerciais em outras partes do site. Não houve deploy.

P19 foi regularizada pelo inventário v2, preservando o manifesto histórico e a exclusão autorizada. O PDF original/público mantém SHA-256 `8719d38b610810d14305c9b1757a862dc779de098b6611ba65fc6e22272052e5`, também conferido no verificador. Relatório da integração preservado: `docs/CATALOGO_INTEGRATION_REPORT.md`.
