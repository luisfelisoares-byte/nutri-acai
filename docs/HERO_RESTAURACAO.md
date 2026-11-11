# Restauração do Hero anterior ao carrossel

Ponto de referência de 21/10/2026: Hero estático com fundo no desktop, área visual 5:4 no celular/3:2 no tablet e textos abaixo em telas até 899 px. Esta é a versão que o usuário informou gostar antes de solicitar o carrossel experimental.

## Estado e backup

`git status --short --branch` retornou `fatal: not a git repository (or any of the parent directories): .git`. Não há branch nem commit disponíveis nesta pasta. Não foi inicializado Git nem criado commit que pudesse incluir trabalhos anteriores indiscriminadamente. Nenhuma alteração existente foi descartada.

Antes de editar, foram copiados e confrontados por SHA-256 os quatro arquivos que representam integralmente o Hero estático:

- `src/app/page.tsx`
- `src/app/home.module.css`
- `src/components/media/ReferenceImage.tsx`
- `src/components/media/reference-image.module.css`

Cópias byte a byte em `docs/hero-carousel-2026-10-21/backup/`, com a mesma estrutura de caminhos. Hashes em `backup-manifest.json`. O arquivo original `assets/imagem para hero.png` é referenciado, não duplicado nem modificado. `baseline.json` registra também os hashes de src/assets/public antes da experiência. As duas novas fontes exclusivas do carrossel constam de `experiment-manifest.json`.

## Procedimento controlado

Na raiz do projeto, sem instalar dependências:

```powershell
python docs/hero-carousel-2026-10-21/restore.py --check
```

O comando apenas verifica se as cópias estão íntegras e se os arquivos atuais ainda correspondem ao experimento. Havendo mudanças posteriores, ele bloqueia a restauração para preservar esse trabalho; revisar as diferenças antes de qualquer sobrescrita.

Para efetivamente restaurar, quando solicitado pelo usuário: parar somente o servidor deste projeto, executar o comando abaixo e depois lint, TypeScript e build sequencialmente.

```powershell
python docs/hero-carousel-2026-10-21/restore.py --restore
npm run lint
npm run typecheck
npm run build
npm start -- --port 3018
```

A restauração repõe os quatro arquivos de referência e remove somente `src/components/media/HeroCarousel.tsx` e `src/components/media/hero-carousel.module.css`, após verificar seus hashes e restringir os caminhos à raiz do projeto. Não toca assets, produtos, PDF ou documentação. Conferir a porta antes de iniciar para evitar servidor duplicado. Reconferir visualmente a Home após restauração e registrar a decisão em PREVIEW_REPORT.

O modo `--check` deve ser validado durante a entrega. Não executar `--restore` apenas para testar, pois isso retiraria a experiência que o usuário solicitou avaliar. O carrossel permanece experimental até aprovação visual explícita.

Validação de entrega em 21/10/2026: `--check` executado após a alteração final, código 0, confirmando backup e estado experimental íntegros. `--restore` não executado.

## Refinamento automático — 21/10/2026

O backup estático, `backup-manifest.json` e o manifesto inicial `experiment-manifest.json` continuam preservados. Antes do refinamento, as duas fontes do carrossel manual também foram copiadas para `docs/hero-carousel-refinement-2026-10-21/before/`, com baseline próprio.

O estado esperado atual está em `hero-carousel-2026-10-21/refined-experiment-manifest.json`. O verificador de restauração prefere esse manifesto quando presente e exige exatamente a mesma lista de arquivos do manifesto inicial; os hashes históricos não foram sobrescritos. Assim, o procedimento acima continua restaurando integralmente o **Hero estático**, retirando somente as duas fontes exclusivas do carrossel, inclusive após o refinamento autorizado. Mudanças futuras divergentes continuam bloqueadas até revisão.

`restore.py --check` executado nesta etapa com código 0. Não foi executada restauração real. Procedimento anterior de parar o servidor e reconstruir/reabrir a prévia permanece válido.
