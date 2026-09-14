# 10 — BACKLOG E PENDÊNCIAS

## 1. Matriz de Conformidade: Confirmado vs. Pendente

Para garantir rastreabilidade completa e transparência na entrega, este documento consolida o estado de cada dado institucional, comercial e de mídia no projeto.

---

## 2. Informações Oficiais Confirmadas (Fechadas para Implementação)

| Item | Dado Oficial Confirmado | Fonte Primária |
| :--- | :--- | :--- |
| **Nome da Marca** | Nutri Açaí | Catálogo & Identidade |
| **Origem e Perfil** | Indústria Gaúcha de Açaí, Sorbets e Derivados | Catálogo / Redes Oficiais |
| **Ano de Fundação** | 2022 (em atividade contínua desde 2022) | Catálogo Oficial (pág. 3) |
| **Capacidade de Produção**| Superior a 9 toneladas/dia | Catálogo Oficial (pág. 3) |
| **Slogan Oficial** | *"Cremosidade que conquista. Qualidade que surpreende."* | Catálogo Oficial & Manual |
| **Missão, Visão e Valores**| Textos oficiais na íntegra (vide `docs/03-CONTEUDO-E-CONTATOS.md`) | Catálogo Oficial (pág. 3) |
| **Endereço da Fábrica** | Rodovia Teixeirinha, 9225/9245/9455, Itacolomi, Gravataí/RS — CEP 94242-300 | Registro Oficial / Google Maps |
| **Horário de Atendimento** | Seg–Sex: 08h–18h \| Sáb: 08h–15h \| Dom: Fechado (Comercial) | Dados Oficiais |
| **WhatsApp Vendas** | `(51) 8962-1635` | Catálogo & Manual |
| **WhatsApp Comercial (B2B)**| `(51) 99428-1252` | Manual do Projeto |
| **WhatsApp RH (Carreiras)** | `(51) 99246-5908` | Manual do Projeto |
| **Catálogo WhatsApp** | `https://wa.me/c/555189621635` | Registro Oficial |
| **Instagram Oficial** | `https://www.instagram.com/nutriacaioficial/` | Registro Oficial |
| **Linhas de Produtos** | Food Service (5L a 12L), Varejo (1,5L) e Nutrinho (200ml/220ml) | Catálogo Oficial (pág. 4 a 8) |
| **Diferenciais da Marca** | 6 pilares: Produção própria, Frota própria, Atendemos Brasil, Mix variado, Qualidade, Atendimento personalizado | Instagram / Catálogo |

---

## 3. Pendências Oficiais Mapeadas como PLACEHOLDER

As informações a seguir ainda não foram fornecidas pela diretoria da Nutri Açaí. Em respeito à **Regra Anti-Delírio**, serão renderizadas exclusivamente como dados de marcação explícita (`PLACEHOLDER`):

| Item Pendente | Descrição do que Falta | Impacto no Projeto | Solução Temporária Adotada |
| :--- | :--- | :--- | :--- |
| **1. Lista de Distribuidores Autorizados** | Relação de parceiros comerciais, cidades, estados, contatos e links de catálogo/localização. | Médio (Página `/distribuidores`) | Componente implementado com 3 registros identificados como `[PLACEHOLDER — Distribuidor pendente]`. |
| **2. Depoimentos Reais de Clientes** | 3 depoimentos autênticos com nome, empresa/açaiteria, cidade e avaliação. | Baixo (Home) | Carrossel estruturado com 3 cards identificados como `[PLACEHOLDER — Depoimento em validação]`. |
| **3. Linha do Tempo Histórica** | Datas/anos exatos de marcos da empresa (além de 2022) e fotos históricas de inauguração/crescimento. | Baixo (Página `/a-nutri`) | Linha do tempo visual codificada com marcos genéricos marcados como `[PLACEHOLDER — Marco histórico pendente]`. |
| **4. Fotos de Alta Resolução da Fábrica** | Fotografias da linha de envase, maquinários industriais e laboratório próprio. | Baixo (Página `/a-nutri`) | Utilização das imagens reais disponíveis em `ASSETS/imagens` e reserva de slots de foto identificados. |
| **5. Link Oficial do Facebook** | URL da página oficial no Facebook. | Nulo (Footer) | Ícone no rodapé reservado com fallback de redirecionamento institucional. |

---

## 4. Backlog de Melhorias Futuras (Pós-Lançamento)

Itens mapeados para evolução da plataforma após a entrega das 13 etapas principais:

1. **Ativação Visual de Banner LGPD:**  
   Implementar a interface visual de aceitação de cookies conforme orientações do departamento jurídico.
2. **Integração com API Oficial do Instagram (Graph API):**  
   Conexão em tempo real com token de longa duração da Meta para atualização autônoma dos posts na Home.
3. **Painel CMS Leve para Cadastro de Distribuidores:**  
   Área administrativa simples para que a equipe comercial da Nutri Açaí possa adicionar, editar ou remover distribuidores sem alterar código-fonte.
4. **Blog / Central de Notícias B2B:**  
   Área de artigos sobre rentabilidade de açaiterias, dicas de conservação, mercado de açaí e novidades da indústria para potencializar SEO.
