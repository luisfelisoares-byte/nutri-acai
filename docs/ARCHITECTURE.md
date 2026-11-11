# Arquitetura proposta

## Home simplificada — pacote consolidado de 20/10/2026

Home agora segue hero → negócios → Sobre → Trabalhe Conosco → contato. Saíram somente as duas seções de categorias/produtos da Home e seus imports/estilos exclusivos de cards de linhas. Dados do catálogo preservados. navigation compartilhada não contém mais Nossas linhas; não há mais links para #linhas. CTA Explore nossas linhas navega para /produtos. Menu móvel permanece até 1099 px, mantendo estados ativos/foco/hover existentes.

Linha Zero é o rótulo vigente das seis categorias; ProductsPage normaliza apenas a antiga query categoria=Linha Saudável para Linha Zero, preservando links anteriores e demais regras dos filtros. Hero estático com contêiner até 1280 px, coluna de imagem maior, gap desktop 80 px (48 até 1100), respiro superior ampliado, imagem primeiro no tablet/celular até 899 px. Sobre e categorias sticky mantêm suas regras. Nenhum carrossel ou dependência nova.


## Hero e navbar — 20/10/2026

Hero usa importação estática direta de assets/imagem para hero.png, sem cópia manual pública ou alteração de arte. Sobre/produção.jpg não mudou. navigation agora inclui Trabalhe Conosco com destino existente `/#trabalhe-conosco`; Header e Footer continuam compartilhando NavLink. Removida somente a entrada manual redundante do rodapé, preservando exatamente um acesso ali. Nenhuma rota ou estrutura alternativa criada.

Com seis itens mais CTA, o menu móvel passa a abranger até 1099 px, sincronizado com matchMedia no Header. Desktop a partir de 1100 px; alturas fechadas anteriores preservadas (76 px até 899; 90 px acima, antes da borda). Não se alteraram os breakpoints do hero nem a lógica de sticky. Ativo/hover/foco existentes são reutilizados; RH continua indisponível. Validações em PREVIEW_REPORT.

## Diretório pesquisável e foto institucional — 20/10/2026

`/distribuidores` recebe filtro GET municipio, como o padrão de Produtos. CitySearch reutiliza o CSS do formulário de Produtos e oferece combobox acessível, sugestões locais por texto sem distinção de acento/caixa, seleção por toque/clique/setas/Enter e fechamento Escape/Tab. Opções só vêm de publishedSupplierGroups; grupos ilustrativos e registros não aprovados ou incompatíveis com cidade/UF ficam fora. Com zero dados oficiais, nenhuma opção ou cartão demonstrativo é exibido; preparação e ausência de cadastros são informadas. A consulta aceita nome completo do município ou município/UF, sem prometer cobertura.

Sobre continua sendo `/#sobre`, sem nova rota `/sobre`. Fotografia oficial é importada diretamente de assets/produção.jpg via Next Image, preservando orientação/proporção; hero não mudou. Nenhum backend, dependência ou serviço externo novo. Evidências e limitações em PREVIEW_REPORT.

## Atualização de navegação e distribuidores — 20/10/2026

Rota oficial do diretório: `/distribuidores`, migrada de `/fornecedores`; a antiga tem redirect permanente 308 em next.config.ts, sem duplicar página. CSS do diretório movido sem alteração visual. Dados tipados internos de suppliers.ts preservados para evitar refatoração desnecessária; interface, metadata e navegação usam Distribuidores. O diretório continua demonstrativo, sem contatos comerciais inventados.

NavLink é o único componente compartilhado pelos links do cabeçalho e rodapé: usePathname identifica páginas independentemente de query; useSyncExternalStore acompanha hashchange para âncoras da Home. aria-current page/location diferencia página e seção. Não há scrollspy ou nova seção Home no menu; sem fragmento não se marca uma seção arbitrária. Ativo, hover e foco definidos com as cores existentes em globals.css. Resultados executados em PREVIEW_REPORT. Registros anteriores abaixo são históricos.

## Escopo vigente — harmonização de 17/10/2026

A primeira versão solicitada contém Home (`/`), Produtos (`/produtos`), Fornecedores (`/fornecedores`), Sobre a Nutri na seção existente `/#sobre` e Trabalhe Conosco em `/#trabalhe-conosco`. A seção institucional existente foi reaproveitada, sem criar rota redundante `/sobre`. Trabalhe Conosco não tem página própria, formulário, upload ou armazenamento; botão sem link e desativado até confirmação do canal oficial do RH. Contato comercial não está autorizado para receber currículos. Fornecedores permanece demonstrativo, agora acessível pela navegação.

A matriz vigente tem 25 SKUs em seis categorias (8/6/2/2/4/3), ordenação decrescente em Produtos e Cupuaçu/Leitinho em Cremes. Home harmonizada com essa confirmação posterior. A árvore e os agrupamentos históricos abaixo descrevem o planejamento original e não substituem este escopo nem PRODUCT_MATRIX.md. Indexação, hospedagem e publicação não foram alteradas.

Estado: arquitetura aprovada, 16/10/2026. Base da aplicação e primeira Home em implementação autorizada. A árvore abaixo representa a arquitetura completa planejada; escopo entregue e versões efetivas em TECHNICAL_DECISIONS.md e PREVIEW_REPORT.md.

## Stack e execução

Next.js com App Router, React, TypeScript estrito e Tailwind CSS, conforme briefing. Páginas e layouts majoritariamente Server Components; componentes de cliente limitados ao menu, filtros e integrações que realmente necessitem de APIs do navegador. Conteúdo local tipado permite pré-renderizar páginas institucionais e de produtos. A estratégia segue a separação descrita na [documentação do Next.js](https://nextjs.org/docs/app/getting-started/server-and-client-components).

Preferir hospedagem compatível com runtime Next.js e otimização de imagens. Exportação puramente estática não é uma decisão tomada: exigiria revisar imagens, rotas e recursos de servidor. Provedor, domínio e ambiente de produção permanecem pendentes.

Ambiente auditado: Node.js 24.19.0 e npm 11.19.0. Antes da instalação autorizada, verificar versões estáveis, requisitos de Node, compatibilidade entre Next/React/Tailwind e recomendações de segurança vigentes. Fixar versões resolvidas em lockfile e registrar a versão de Node. Não escolher versões apenas porque uma ferramenta local está instalada.

## Dependências propostas

| Grupo | Pacotes / finalidade |
|---|---|
| Runtime | `next`, `react`, `react-dom` |
| Estilos | `tailwindcss` e integração PostCSS correspondente à versão escolhida |
| Tipos e qualidade | `typescript`, tipos Node/React, `eslint` e configuração compatível do Next |
| Verificação posterior | Ferramenta de navegador automatizado se necessária/disponível; justificar instalação separadamente |

Sem biblioteca de animação, estado global, ORM ou kit de componentes nesta proposta. Transições em CSS e estado local atendem às interações previstas. Dependências só serão instaladas após autorização da implementação.

## Estrutura futura de arquivos

```text
assets/                         # originais preservados, sem reorganização física
docs/                           # planejamento, evidências e decisões
src/
  app/
    layout.tsx                  # idioma, navegação e estrutura global
    page.tsx
    produtos/page.tsx
    produtos/[slug]/page.tsx
    food-service/page.tsx
    distribuidores/page.tsx
    sobre/page.tsx
    contato/page.tsx
    privacidade/page.tsx
    not-found.tsx
    robots.ts
    sitemap.ts
  components/
    layout/                     # Header, MobileMenu, Footer, Container
    ui/                         # Button, Link, SectionHeading, FilterControl
    products/                   # ProductCard, ProductGrid, ProductFilters
    media/                      # ApprovedImage, MediaPlaceholder, InstitutionalVideo
  content/
    products.ts                 # matriz editorial, independente das imagens
    institutional.ts            # textos e fontes de validação
    assets.ts                   # manifesto de fontes e aprovação de mídia
  config/
    site.ts                     # navegação e contatos documentados
    environment.ts              # variáveis opcionais validadas
  lib/
    assets.ts                   # resolução segura de mídia aprovada
    seo.ts
    tracking/                   # interface de eventos e adaptadores
  styles/globals.css            # tokens e estilos base
public/                         # apenas recursos públicos novos aprovados, se necessários
.env.example
package.json
package-lock.json
tsconfig.json
eslint.config.*
next.config.*
postcss.config.*
```

Extensões de configuração e integração de CSS serão definidas pela versão selecionada. A árvore representa o destino planejado; nesta etapa somente a base, Home, componentes essenciais, 404 e robots são implementados.

## Conteúdo e fronteiras de confiança

Cada produto terá ID estável, slug, categoria, nome, volume explícito, embalagem, peso opcional, fonte documental, status editorial e vínculo de mídia aprovado opcional. A matriz manterá Tradicionais 9, Frutados 6, Frozen & Cremes 3, Trufados 4 e Linha Saudável 3. Cupuaçu permanece em Tradicionais. Campos ausentes não recebem estimativas.

Peso, ingredientes, claims e contatos não serão extraídos automaticamente de nomes de arquivo ou imagens. O dossiê orienta o conteúdo da prévia; publicação exige validação humana do conteúdo comercial. Dados aprovados e pendências terão estados separados. IDs internos de produto não serão apresentados como códigos comerciais oficiais.

O resolver de mídia fornece uma imagem apenas quando há aprovação para aquele uso e SKU. Ausência de vínculo, arquivo inválido ou aprovação pendente resulta em placeholder. A mesma identidade de conteúdo/hash não poderá ser vinculada como foto final aos dois SKUs Guaraná 5 L e 10 L.

## Contato, segurança e manutenção

Primeira versão proposta: link WhatsApp confirmado, sem formulário e sem armazenamento próprio de leads. A mensagem contextual pode conter nome/volume do produto; não incluir dados pessoais em parâmetros de analytics. O usuário confirma o envio no WhatsApp. Não executar envios automáticos.

Formulário é extensão futura condicionada à escolha de destinatário, serviço, validação no servidor, proteção contra abuso, finalidade e política de retenção. Não simular envio bem-sucedido sem backend.

Configuração pública não conterá credenciais. IDs de analytics são opcionais; valores inválidos ou ausentes deixam integrações desativadas. Mudanças de conteúdo e mídia deverão registrar fonte e aprovação nos documentos e manifesto. Sem CMS na fase inicial; eventual adoção deverá preservar esse modelo.
