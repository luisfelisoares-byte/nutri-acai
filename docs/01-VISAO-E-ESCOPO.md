# 01 — VISÃO E ESCOPO

## 1. Visão do Produto

A **Nutri Açaí** é uma indústria de açaí, sorbets e derivados fundada em 2022 em Gravataí/RS. Com capacidade de fabricação superior a **9 toneladas/dia** e frota própria de distribuição, a empresa une o rigor do processo industrial à autenticidade e cremosidade do açaí com sabor artesanal.

O site da Nutri Açaí não é uma simples página promocional ou um template genérico de açaíteria de bairro. Ele deve se posicionar como o **portal oficial de uma indústria nacional moderna, vibrante, confiável e expansiva**.

### Slogan Oficial:
> *"Cremosidade que conquista. Qualidade que surpreende."*

---

## 2. Filosofia de UX e Navegação

A experiência do usuário segue o princípio fundamental:

```
HOME APRESENTA  ──▶  USUÁRIO ESCOLHE  ──▶  PÁGINA ESPECÍFICA RESOLVE
```

- A **Home** NÃO tenta vender diretamente com centenas de cards nem exibe preços; ela sintetiza quem é a marca, o compromisso de qualidade, diferenciais competitivos e direciona com clareza para os destinos especializados.
- Cada **Página Interna** é autocontida e resolve o objetivo específico do usuário com velocidade e objetividade.

### Objetivos do Usuário ao Entrar no Site:
1. **Entender a marca:** Quem é a Nutri Açaí e qual sua escala de produção (`/a-nutri`).
2. **Conhecer o mix:** Ver linhas (Food Service, Varejo, Nutrinho), volumes e sabores (`/produtos`).
3. **Comprar como consumidor ou comerciante:** Iniciar compra pelo WhatsApp de Produtos.
4. **Localizar onde comprar presencialmente:** Encontrar revendedores ou distribuidores próximos (`/distribuidores`).
5. **Expandir negócios (B2B):** Tornar-se um distribuidor parceiro (`/seja-um-distribuidor`).
6. **Oportunidades de emprego:** Enviar currículo ao RH (`/trabalhe-conosco`).
7. **Localizar a fábrica:** Ver endereço, mapa e horário comercial (`/onde-estamos`).

---

## 3. Públicos-Alvo

### Público Principal (B2B — Foco Comercial de Maior Volume):
- **Distribuidores Regionais:** Buscam margem comercial, confiabilidade de entrega e estabilidade no produto.
- **Food Service (Açaiterias, Lanchonetes, Padarias, Sorveterias, Restaurantes):** Buscam rendimento, cremosidade superior e caixas de 5L a 10L ou baldes de 3,6L a 12L.
- **Marcas Próprias (Private Label):** Buscam capacidade produtiva industrial (> 9 ton/dia) com controle laboratorial rigoroso.

### Público Secundário (B2C — Consumidor Final):
- **Famílias e Jovens:** Consumidores dos potes de 1,5L de varejo ou copos rápidos Nutrinho (200ml/220ml com paçoca ou leite em pó).
- **Consumidores Conscientes:** Interessados em açaí zero açúcar, natural ou sorbet de frutas.
- *Diretriz:* O consumidor final jamais deve ser negligenciado; a linguagem deve ser convidativa, apetitosa e acessível.

---

## 4. Delimitação Estrita do Escopo

### O Que Está Dentro do Escopo (IN SCOPE):
- Site completo institucional + comercial em SPA (React + Vite + TypeScript);
- Sistema de roteamento semântico com URLs amigáveis;
- Design system proprietário em CSS moderno puro, responsivo e com identidade vibrante;
- Hero com carrossel dinâmico, animações suaves e enquadramentos próprios para desktop e mobile;
- Faixa horizontal de diferenciais da marca;
- Catálogo de produtos estruturado por 3 linhas (Food Service, Varejo, Nutrinho) com filtros imediatos e botão de compra direta via WhatsApp;
- Canal direto para Catálogo Oficial no WhatsApp (`https://wa.me/c/555189621635`);
- Página de localização de distribuidores com busca em cascata (Região -> Estado -> Cidade) e rota no Google Maps;
- Página "Seja um Distribuidor" com benefícios e formulário estruturado de qualificação;
- Integração de envio para o WhatsApp Comercial (`(51) 99428-1252`) com texto preparado contendo todos os dados do formulário;
- Página "Trabalhe Conosco" com apresentação e botão para o WhatsApp do RH (`(51) 99246-5908`);
- Página "Onde Estamos" com mapa interativo, endereço oficial em Gravataí/RS e horário comercial;
- Botão flutuante de WhatsApp com triplo direcionamento inteligente;
- Integração da seção Instagram na Home com curadoria de posts e fallback estático;
- Otimizações estruturais para SEO Local/Nacional, Acessibilidade (WCAG 2.1 AA) e Performance (PageSpeed 90+).

### O Que Está Fora do Escopo (OUT OF SCOPE):
- **Nenhum card de produto na Home** (Home apenas direciona para a página de Produtos);
- **Nenhuma seção "Para o seu negócio"** genérica;
- **Nenhum preço ou tabela de preços exibida no site** (preços são consultados exclusivamente no catálogo oficial e WhatsApp comercial);
- **Nenhuma página individual para cada produto** (a listagem é em catálogo categorizado por linha);
- **Nenhum sistema de e-commerce com carrinho ou checkout transacional**;
- **Nenhum formulário de currículo com upload de arquivos** nesta etapa (contato direto via WhatsApp RH);
- **Nenhum banner intrusivo de LGPD/Cookies agora** (arquitetura ficará preparada nos bastidores);
- **Nenhum framework CSS externo** (Tailwind, Bootstrap, etc.) ou bibliotecas visuais pesadas.
