# 08 — ASSETS E IMAGENS

## 1. Inventário de Assets Encontrados no Projeto

A análise detalhada dos arquivos e pastas existentes identificou o seguinte acervo oficial fornecido:

### A. Catálogo Geral em PDF (`catalogo/`)
- `Catálogo Produtos Nutri Açai (1).pdf` (9 páginas):
  - Contém o portfólio completo de produtos, volumes e especificações oficiais;
  - Texto institucional com dados oficiais de fundação (2022), capacidade (>9t/dia), missão, visão e valores;
  - Fotos de alta qualidade das embalagens de Food Service, Varejo e Nutrinho.

### B. Imagens Oficiais da Marca (`ASSETS/imagens/` — 31 arquivos):
1. **Identidade Visual e Institucional:**
   - `LOGOTIPO.jpg`: Logotipo circular oficial da Nutri Açaí com folha verde e texto característico;
   - `missão e visão.jpg`: Fotografia institucional da diretoria/fundadores na fábrica gaúcha acompanhada do manifesto oficial da missão da empresa.
2. **Produtos e Embalagens Reais:**
   - `IMG-20260907-WA0014.jpg`: Copos de 220ml Açaí com Guaraná + Paçoca (Linha Nutrinho);
   - `IMG-20260907-WA0019.jpg` e `WhatsApp Image 2026-09-07 at 12.04.47.jpeg`: Caixa 5L Creme de Cupuaçu (Food Service);
   - `IMG-20260907-WA0020.jpg`: Caixa 5L Frozen Natural (Food Service);
   - `IMG-20260907-WA0015.jpg` a `WA0032.jpg`: Fotografias reais das caixas de 5L, baldes de 3,6L e 12L, caixas de 10L e potes de 1,5L de varejo.
3. **Comunicações e Posts do Instagram:**
   - `Screenshot_20260905-182633_Instagram.jpg`: Destaque dos 6 diferenciais da fábrica;
   - `Screenshot_20260905-182712_Instagram.jpg`: Campanha Linha Açaí Zero Açúcar;
   - `Screenshot_20260905-182832_Instagram.jpg`: Destaque Sorbet de Pitaya Food Service;
   - `Screenshot_20260905-182726` a `183021_Instagram.jpg`: Material de apoio e engajamento da rede social.

---

## 2. Estrutura Organizada de Destino no Front-End

Para integração ao projeto React/Vite, os assets serão organizados em diretórios temáticos:

```
public/assets/imagens/
├── logo/
│   ├── logo-nutri-acai.webp          # Logo com transparência e alta fidelidade
│   ├── logo-nutri-acai-white.webp    # Versão monocromática para fundos escuros
│   └── favicon.svg                   # Ícone simplificado de aba
├── banners/
│   ├── hero-desktop-01.webp          # Composição horizontal desktop (>1440px)
│   ├── hero-desktop-02.webp
│   ├── hero-mobile-01.webp           # Composição vertical ajustada mobile (<768px)
│   └── hero-mobile-02.webp
├── produtos/
│   ├── food-service/                 # Caixas 5L/10L e Baldes 3,6L/12L
│   ├── varejo/                       # Potes 1,5L
│   └── nutrinho/                     # Copos 200ml/220ml
├── fabrica/                          # Instalações, laboratório e linha fabril
├── equipe/                           # Diretoria, colaboradores e atendimento
├── distribuicao/                     # Frota própria de caminhões e logística
└── institucional/                    # Diferenciais e manifesto da marca
```

---

## 3. Diretrizes e Regras de Tratamento de Imagens

### O Que É Permitido e Recomendado:
- **Conversão de Formato:** Converter todos os arquivos para `.webp` e `.avif` para máxima taxa de compressão e velocidade;
- **Recorte e Enquadramento:** Ajustar proporções de aspecto (ex.: 16:9 ou 21:9 para Hero Desktop; 4:5 ou 9:16 para Hero Mobile; 1:1 ou 4:5 para cards de produtos);
- **Tratamento de Contraste e Cor:** Realce sutil de saturação e nitidez para valorizar a cor do açaí e das frutas sem descaracterizar;
- **Tratamento de Fundo:** Remoção de ruído ou fundo recortado profissionalmente para apresentação limpa nos cards;
- **Dimensões e Proporções Fixas:** Garantir que cada elemento no HTML possua atributos explícitos para eliminar Cumulative Layout Shift (CLS).

### O Que É Expressamente Proibido:
- **Distorcer Embalagens:** Esticar ou achatar a proporção original de qualquer pote, caixa ou balde;
- **Alterar o Logotipo:** Modificar cores, tipografia, rotação ou elementos do símbolo oficial da Nutri Açaí;
- **Modificar Rótulos Oficiais:** Alterar tabelas nutricionais, textos legais ou claims impressos nas caixas reais;
- **Inserir Marcas de Terceiros:** Não utilizar mockups genéricos de embalagens que não correspondam ao formato real da Nutri Açaí.
