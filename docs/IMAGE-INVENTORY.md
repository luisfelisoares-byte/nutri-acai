# INVENTÁRIO E AUDITORIA DE ATIVOS VISUAIS

---

## 1. Auditoria dos Ativos Existentes (`IMAGENS BRUTAS`)

Atualmente, o projeto possui 10 arquivos no diretório `IMAGENS BRUTAS`. Realizamos a auditoria técnica e visual completa de cada um deles:

| Arquivo Original | Tipo de Mídia | Conteúdo Identificado | Avaliação Técnica para Produção | Utilidade Documental |
| :--- | :--- | :--- | :--- | :--- |
| `LOGOTIPO.jpg` | Screenshot de App | Logotipo circular da Nutri Açaí ("Nutritivo e saboroso", folhas verdes e fundo roxo). | **Inadequado para produção.** Resolução reduzida, arte recortada com botões do Instagram sobrepostos. | Confirmação de cores, slogan e identidade visual base. |
| `Screenshot_20260905-182633_Instagram.jpg` | Screenshot de Story | Story institucional: "Por que escolher a Nutri Açaí?". | **Inadequado para produção.** Screenshot vertical de smartphone. | Confirma os 5 pilares de autoridade institucional da empresa. |
| `Screenshot_20260905-182712_Instagram.jpg` | Screenshot de Story | Post publicitário da "Linha Açaí Zero" (Caixa Food Service e bowl). | **Inadequado para produção.** Captura de tela com overlay de UI de rede social. | Confirma layout e identidade gráfica da linha Zero Açúcar. |
| `Screenshot_20260905-182726_Instagram.jpg` | Screenshot de Story | Publicação do "Açaí Natural" (Caixa 5L/10L e Pote Varejo 1,5L). | **Inadequado para produção.** Captura de tela. | Confirma volumetria e peso líquido oficial (5L = 4,7kg; 1,5L = 1,3kg). |
| `Screenshot_20260905-182735_Instagram.jpg` | Screenshot de Story | Publicação "Gelatos": caixas de 5L de "Frozen Grego" e "Cremes". | **Inadequado para produção.** Captura de tela. | Revela a denominação gráfica real "Frozen Grego" e peso de 4,0kg por caixa de 5L. |
| `Screenshot_20260905-182753_Instagram.jpg` | Screenshot de Story | Foto da caixa de 5L de Frozen de Morango sobre madeira. | **Inadequado para produção.** Captura de tela. | Referência visual da embalagem rosa de Frozen Morango. |
| `Screenshot_20260905-182832_Instagram.jpg` | Screenshot de Story | Foto da caixa de Sorbet de Pitaya na grama. | **Inadequado para produção.** Captura de tela. | Referência visual da embalagem da linha de Sorbets. |
| `Screenshot_20260905-182937_Instagram.jpg` | Screenshot de Post | Foto publicitária de alta qualidade do pote Nutrinho Banana + Paçoca. | **Inadequado para produção.** Arquivo é print de tela com ícones do Instagram. | Demonstra o produto final com domo transparente de paçoca. |
| `Screenshot_20260905-183007_Instagram.jpg` | Screenshot de Post | Foto de estúdio do Pote 1,5L Açaí com Guaraná (frente e tampa). | **Inadequado para produção.** Print de tela. | Demonstração detalhada da embalagem de varejo e tampa superior. |
| `Screenshot_20260905-183021_Instagram.jpg` | Screenshot de Post | Publicação temática com Pote 1,5L e Caixa 5L de Frozen Morango. | **Inadequado para produção.** Print de tela. | Demonstração das duas apresentações comerciais do mesmo sabor. |

---

## 2. Diagnóstico Técnico de Imagens

> [!WARNING]  
> **100% dos arquivos atuais são screenshots de tela de dispositivos móveis.**  
> Nenhum dos arquivos existentes possui qualidade gráfica, resolução ou transparência adequadas para ser empregado no site definitivo de produção. O uso de screenshots em produção degradaria a credibilidade da marca, causaria artefatos visuais e prejudicaria as notas de Core Web Vitals e SEO de imagens.  
> **Preservação:** Os arquivos originais em `IMAGENS BRUTAS` foram mantidos intactos e serviram estritamente como fonte de auditoria documental.

---

## 3. Proposta de Estrutura de Diretórios para Ativos de Produção

Para o desenvolvimento do site no frontend, propomos a seguinte organização estruturada dentro de `/public/images/`:

```
/public/images/
├── brand/
│   ├── logo-nutriacai.svg             # Logotipo oficial em vetor SVG
│   ├── logo-nutriacai-white.svg       # Versão monocromática branca para rodapés/contrastes
│   ├── favicon.ico / icon.png         # Ícones para navegadores e PWAs
│   └── og-banner-1200x630.jpg         # Banner social oficial para Open Graph
│
├── factory/
│   ├── fachada-gravatai.webp          # Vista externa/fachada da indústria
│   ├── instalacoes-gerais.webp        # Vista panorâmica da fábrica
│   ├── camara-fria-estocagem.webp     # Infraestrutura de congelamento/armazenamento
│   └── expedicao-frota.webp           # Área de docas e logística
│
├── production/
│   ├── linha-envase.webp              # Linha de produção em funcionamento
│   ├── mistura-homogeneizacao.webp    # Tanques industriais de preparação
│   ├── laboratorio-qualidade.webp     # Análises laboratoriais e controle de lote
│   └── equipe-tecnica.webp            # Técnicos e operadores uniformizados
│
├── products/
│   ├── food-service/
│   │   ├── caixa-5l-acai-guarana.webp
│   │   ├── caixa-5l-acai-natural.webp
│   │   ├── caixa-5l-acai-zero.webp
│   │   ├── caixa-5l-frozen-grego-natural.webp
│   │   ├── caixa-5l-frozen-grego-morango.webp
│   │   ├── caixa-5l-creme-leitinho.webp
│   │   ├── caixa-5l-sorbet-pitaya.webp
│   │   ├── caixa-10l-acai-guarana.webp
│   │   ├── balde-3-6l-acai-guarana.webp
│   │   └── balde-12l-acai-guarana.webp
│   ├── retail-1-5l/
│   │   ├── pote-1-5l-acai-guarana.webp
│   │   ├── pote-1-5l-acai-natural.webp
│   │   ├── pote-1-5l-acai-trufado-leitinho.webp
│   │   ├── pote-1-5l-acai-trufado-avela.webp
│   │   ├── pote-1-5l-acai-zero.webp
│   │   ├── pote-1-5l-frozen-morango.webp
│   │   └── pote-1-5l-sorbet-pitaya.webp
│   └── nutrinho/
│       ├── nutrinho-banana-pacoca-220ml.webp
│       ├── nutrinho-morango-220ml.webp
│       ├── nutrinho-trufado-leitinho-220ml.webp
│       └── nutrinho-zero-200ml.webp
│
├── distributors/
│   ├── mapa-brasil-cobertura.svg      # Gráfico vetorial de presença nacional
│   └── distribuidor-hero-banner.webp  # Imagem comercial de parceria B2B
│
└── institutional/
    ├── hero-home-bg.webp              # Background imersivo e limpo para o topo da Home
    ├── textura-acai.webp              # Textura fluida e cremosa de açaí
    └── selos-qualidade.svg            # Selos de produção própria e laboratório
```

---

## 4. Relação de Imagens e Ativos Necessários a Solicitar ao Cliente

Para a fase de implementação visual (Blocos subsequentes), os seguintes ativos deverão ser formalmente solicitados à equipe da Nutri Açaí:

1. **Vetor Oficial da Marca:** Arquivo do logotipo em vetor (`.svg`, `.ai` ou `.eps`) e manual básico de identidade visual (ou cores hexadecimais oficiais).
2. **Fotografia dos Produtos (Packshots):** Fotos de estúdio em alta resolução de cada embalagem (caixas de 5L/10L, baldes, potes de 1,5L e linha Nutrinho), preferencialmente com fundo transparente (PNG/TIFF) ou iluminação neutra para recorte.
3. **Fotografia da Fábrica e Linha de Produção:** Fotos reais da planta industrial em Gravataí/RS:
   - Tanques de mistura / processamento;
   - Linha de envase mecânico;
   - Laboratório de controle de qualidade e equipamentos de testagem;
   - Câmaras frigoríficas de congelamento e estocagem;
   - Equipe técnica em atuação com paramentação sanitária.
4. **Imagens de Aplicação / Consumo:** Fotos atraentes de bowls, taças montadas com frutas e copos de açaí cremoso para hero banners e blocos visuais de conversão.
