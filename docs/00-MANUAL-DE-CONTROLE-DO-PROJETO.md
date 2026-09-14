# 00 — MANUAL DE CONTROLE DO PROJETO

## 1. Visão Geral e Governança

Este manual estabelece as normas irrevogáveis de engenharia, design, governança de dados e controle de qualidade para o desenvolvimento do site institucional e comercial da **Nutri Açaí**.

O projeto visa construir uma plataforma digital de alto padrão que transmita a robustez de uma **indústria gaúcha nacional**, com foco prioritário B2B (Distribuidores, Food Service e Private Label) sem desassistir o consumidor final (Varejo e Nutrinho).

---

## 2. Regra Absoluta: A Documentação como Fonte de Verdade

1. Toda e qualquer decisão técnica, arquitetural, visual ou de conteúdo deve estar formalizada nesta pasta `docs/`.
2. O código-fonte, estilos e dados estruturados devem ser reflexo direto do que consta nestes documentos.
3. Nenhuma etapa de codificação pode ser iniciada ou alterada sem consulta prévia aos documentos correspondentes.
4. Qualquer divergência entre o que for solicitado e o que estiver documentado paralisa a ação para validação explícita, preservando a decisão documentada.

---

## 3. Regra Anti-Delírio (Política de Tolerância Zero com Alucinações)

Para garantir integridade corporativa e precisão técnica:

### É Expressamente Proibido:
- **Inventar informações institucionais**, histórico fictício ou marcos não ocorridos;
- **Inventar números e métricas**, capacidades produtivas além das oficiais confirmadas;
- **Inventar distribuidores**, cidades atendidas, pontos de venda ou endereços fictícios não identificados;
- **Inventar depoimentos**, nomes de parceiros, fotos ou avaliações;
- **Inventar produtos, sabores, linhas ou volumes** inexistentes no catálogo oficial;
- **Inventar preços** ou condições de pagamento no site;
- **Inventar características de produtos**, certificações inexistentes ou claims comerciais não aprovados;
- **Alterar dados oficiais sem confirmação prévia**;
- **Modificar rótulos, marcas ou proporções** das embalagens originais;
- **Criar páginas de produto individuais** (o modelo adotado é catálogo filtrável com compra via WhatsApp);
- **Adicionar seções ou páginas apenas para "preencher espaço"**;
- **Adicionar bibliotecas ou frameworks desnecessários** (ex.: Tailwind, Bootstrap, libs pesadas de animação);
- **Realizar refatorações fora do escopo da etapa ativa**.

### Tratamento de Informações Indisponíveis:
Sempre que um dado oficial (foto, histórico, distribuidor, depoimento) não tiver sido homologado pela empresa, deve ser utilizada estritamente a marcação:

> `[PLACEHOLDER — informação oficial pendente]`

Nunca preencha lacunas com dados simulados ou texto de preenchimento (como Lorem Ipsum) sem a identificação explícita de `PLACEHOLDER`.

---

## 4. Rito Operacional Obrigatório para Cada Etapa

Antes de iniciar qualquer bloco de implementação:
1. Ler `00-MANUAL-DE-CONTROLE-DO-PROJETO.md`.
2. Ler `01-VISAO-E-ESCOPO.md`.
3. Ler o documento temático correspondente à etapa (conforme mapeado no `09-ETAPAS-DE-DESENVOLVIMENTO.md`).
4. Verificar se todas as decisões prévias e regras de negócio estão claras.
5. Verificar os critérios de aceite definidos.
6. Executar **exclusivamente** o escopo delimitado para aquela etapa.

---

## 5. Critérios de Conclusão de uma Etapa

Uma etapa só é considerada concluída quando satisfaz simultaneamente:
1. **Implementação Completa:** Código escrito conforme os requisitos do documento.
2. **Funcionamento:** Fluxos, botões, rotas e interações testados e operacionais.
3. **Responsividade:** Comportamento verificado em resoluções mobile (320px–480px), tablet (768px–1024px) e desktop (1280px+).
4. **Console Limpo:** Zero erros ou warnings não justificados no console do navegador e no terminal.
5. **Conformidade Documental:** Nenhum desvio não registrado em relação à documentação oficial.
6. **Testes Validados:** Testes da etapa executados e aprovados.
7. **Pendências Mapeadas:** Quaisquer dados que permaneceram como placeholder devidamente anotados em `10-BACKLOG-E-PENDENCIAS.md`.

---

## 6. Estrutura do Relatório de Conclusão Obrigatório

Ao finalizar cada etapa, a documentação é atualizada e um relatório é emitido no seguinte formato padrão:

```markdown
### Relatório de Conclusão — Etapa [N]: [Nome da Etapa]
1. O que foi feito: [Descrição sucinta das entregas]
2. Arquivos criados: [Lista dos caminhos absolutos/relativos]
3. Arquivos alterados: [Lista dos arquivos modificados]
4. Testes executados: [Tipos de testes realizados: build, visual, responsivo, links, etc.]
5. Resultado dos testes: [Aprovado / Observações]
6. Problemas encontrados: [Dificuldades técnicas ou inconsistências sanadas]
7. Pendências: [Itens marcados com placeholder ou aguardando cliente]
8. O que NÃO foi implementado e por quê: [Escopo explicitamente postergado ou fora de escopo]
9. Próxima etapa recomendada: [Próxima etapa do roadmap]
```
