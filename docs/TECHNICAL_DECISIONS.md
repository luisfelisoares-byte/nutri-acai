# Decisões da primeira prévia

16/10/2026 — preparação e primeira Home autorizadas pelo usuário; demais páginas e publicação fora do escopo.

Antes da instalação, consultas ao registro npm confirmaram Next 16.4.2 (Node >=20.9; React 19 aceito), React 19.3.1, Tailwind/@tailwindcss/postcss 4.3.3 e eslint-config-next 16.4.2 (ESLint >=9). Node local 24.19.0 atende ao requisito. Escolhidos ESLint 9.39.5 e TypeScript 5.9.3, versões estáveis consultadas, para manter configuração conservadora sem migrar para nova major do compilador. Tipos Node limitados à major 24; tipos React à major 19. Versões transitivas serão registradas no package-lock.json.

Fontes técnicas consultadas: [instalação Next](https://nextjs.org/docs/app/getting-started/installation) e [Tailwind com Next](https://tailwindcss.com/docs/installation/framework-guides/nextjs). Tailwind usa plugin PostCSS dedicado e import CSS; lint executado diretamente com ESLint, separado do build.

Scaffold manual para preservar docs e assets preexistentes. Home renderizada no servidor; apenas menu mobile usa estado de cliente. Navegação por âncoras para seções existentes, sem links para páginas ainda não implementadas. Sem catálogo completo, filtros, CMS, formulários ou tracking real.

Fontes do sistema e ícones SVG geométricos de interface, sem biblioteca adicional ou requisição externa. Placeholders abstratos não representam produto ou embalagem. Logo não é importado; nome da empresa permanece texto de interface.

Prévia vinculada a 127.0.0.1, com meta robots, robots.txt e cabeçalho HTTP de não indexação. Isso não substitui controle de acesso nem autoriza publicar. A Home inclui identificação explícita de prévia; placeholders não são conteúdo comercial final. Antes de qualquer publicação, revisão humana deverá substituir/remover áreas pendentes e aprovar os dados.


## Ajustes após a instalação

A instalação inicial reportou fim de suporte do ESLint 9 e cinco alertas altos na cadeia de desenvolvimento eslint-config-next → fast-glob → micromatch → braces. Os plugins React e JSX-a11y desse preset não declaravam compatibilidade com ESLint 10. Não foi usado force/legacy-peer-deps nem downgrade do Next.

Decisão final: ESLint 10.13.0, @eslint/js 10.0.1, typescript-eslint 8.71.2 e eslint-plugin-react-hooks 7.1.0, com peers conferidos no npm. TypeScript 5.9.3 satisfaz o intervalo >=4.8.4 <6.1.0 do typescript-eslint. Preset Next removido; regras específicas de Next/JSX-a11y não estão presentes, e a validação de navegação/acessibilidade será registrada separadamente. A tentativa de atualizar sobre o lockfile anterior encontrou conflito de resolução: apenas node_modules e lockfile gerados nesta etapa foram removidos, após verificar os caminhos absolutos dentro do projeto, para uma resolução limpa.

Turbopack falhou no processamento de CSS com subprocesso encerrado antes da conexão, inclusive fora da sandbox. Selecionado Webpack explicitamente em dev/build, opção suportada pelo Next, sem alterar a arquitetura. Isso é uma adaptação ao ambiente, não um resultado de build bem-sucedido por si só.
