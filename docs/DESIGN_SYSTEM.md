# Design system proposto

Estado: direção aprovada para primeira prévia, 16/10/2026. Avaliação visual da implementação ainda pendente. Tokens de interface, não manual oficial de marca.

## Direção

Fundo claro, produtos em destaque quando aprovados, hierarquia tipográfica, espaçamento generoso e navegação simples. Capas são apenas referências cromáticas e de linguagem. Não reproduzir textos comerciais, selos ou composições das capas como conteúdo automaticamente aprovado.

## Paleta proposta

| Token conceitual | Cor | Uso |
|---|---|---|
| Fundo | `#FDFCFD` | Base da página |
| Superfície | `#FFFFFF` | Cartões e navegação |
| Superfície suave | `#F3F3F4` | Placeholders e agrupamentos |
| Texto | `#292C33` | Corpo e títulos |
| Texto secundário | `#414047` | Informações auxiliares |
| Primária | `#7E3997` | Botões e destaques |
| Primária forte | `#52245F` | Links e interação |
| Acento | `#BCDA82` | Fundos pontuais, com texto escuro |
| Borda decorativa | `#D8EBC0` | Separação não essencial |

Não usar verde claro como texto sobre branco. Bordas essenciais de controles, foco e estados terão contraste validado; a borda decorativa não será a única indicação de interatividade. Estados de erro/sucesso incluirão texto e ícone, não somente cor. Os tokens poderão ser representados em variáveis CSS e no tema do Tailwind, conforme sua [documentação de tema](https://tailwindcss.com/docs/theme).

## Tipografia, espaço e composição

Inicialmente, pilha de fontes do sistema (`system-ui`, Segoe UI, sans-serif), sem download externo. Avaliar fonte de marca apenas após receber arquivos/licença ou aprovar uma alternativa. Nome textual da empresa em fonte de interface durante a pendência do logo; não criar lettering substituto.

Corpo 16–18 px, entrelinha 1,5–1,65; texto auxiliar mínimo proposto 14 px; títulos fluidos de 32–56 px no hero e 24–40 px nas seções. Pesos 400, 500, 600 e 700, conforme disponibilidade da fonte. Linhas de texto entre aproximadamente 45 e 70 caracteres.

Escala de espaçamento: 4, 8, 12, 16, 24, 32, 48, 64 e 96 px. Contêiner máximo proposto de 1200 px; margens de 16 px no mobile, 24 px no tablet e 32 px no desktop. Seções com 48–64 px no mobile e 80–96 px no desktop.

Referências responsivas iniciais: 640, 768 e 1024 px, ajustáveis conforme conteúdo. Catálogo com uma coluna em telas estreitas, duas em largura intermediária e três no desktop. Não forçar cartões pequenos para caber mais itens. Evitar carrosséis essenciais.

Raios: controles 8 px, cartões 16 px, áreas de mídia 20 px. Sombras discretas apenas onde ajudem a distinguir camadas. Ícones de navegação simples, sem imitarem selos oficiais; biblioteca só se houver necessidade comprovada.

## Componentes e estados

| Componente | Regras |
|---|---|
| Cabeçalho | Nome textual, navegação e CTA; logo só após aprovação definitiva |
| Botões/links | Primário roxo, secundário contornado, link textual; foco visível; rótulo claro |
| Cartão de produto | Nome e volume em texto, mídia aprovada ou placeholder, link de detalhes |
| Filtros | Rótulos explícitos, seleção visível, limpar filtros e resultado vazio |
| Página de produto | Mídia inteira, informações separadas, CTA contextual; sem preços inventados |
| Placeholder de produto | Base neutra 4:5, detalhe geométrico discreto, “Imagem do produto em breve”; sem silhueta de embalagem |
| Placeholder de vídeo | Área 16:9, “Vídeo institucional em breve”; sem controle de play falso |
| Vídeo futuro | Controles, legenda/transcrição conforme conteúdo; sem áudio automático e sem carregamento pesado inicial |
| Rodapé | Links úteis, assinatura confirmada, contato documentado e privacidade |

O quadro 4:5 do cartão não impõe recorte à imagem: o asset aprovado será exibido com proporção original e ajuste `contain`. O placeholder não é skeleton animado, pois a mídia pode permanecer indisponível. Não expor no site IDs de auditoria, hashes, nomes Gemini ou notas internas de produção. A indisponibilidade é comunicada de forma simples ao visitante.

## Acessibilidade e movimento

Metas de projeto: contraste mínimo 4,5:1 para texto comum e 3:1 para texto grande; controles essenciais distinguíveis; foco visível com offset; alvos de toque de pelo menos 44 × 44 CSS px. Verificar as combinações efetivas na implementação; estes números são critérios de aceite, não resultado de testes já executados.

Hierarquia semântica, link para pular navegação, labels reais, navegação completa por teclado e ordem de foco previsível. Menu deve abrir/fechar por teclado, responder a Escape e devolver foco ao acionador. Imagens informativas têm alt validado; decoração não repete conteúdo ao leitor de tela. Não apresentar texto comercial incorporado em imagem como única fonte de informação.

Transições de 150–220 ms para cores/opacidade; sem parallax, animações contínuas de produto ou entradas que atrasem a leitura. Respeitar preferência por movimento reduzido. Testar zoom, quebra de texto e telas a partir de 320 px sem rolagem horizontal.
