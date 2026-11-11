# Tracking — proposta

Estado: planejamento para aprovação, 16/10/2026. Nenhum rastreador ativado.

Interface central de eventos, desacoplada dos componentes, com adaptadores opcionais. Sem IDs reais, chamadas não carregam scripts nem enviam eventos externos. Na primeira versão, não há backend de formulário; evento de envio não será disparado por um clique no WhatsApp.

| Evento interno proposto | Gatilho | Dados permitidos |
|---|---|---|
| `page_view` | Navegação efetiva | Caminho normalizado |
| `product_view` | Detalhe de produto | ID interno, categoria, volume documentado |
| `whatsapp_click` | Clique real no CTA | Local do CTA, ID de produto opcional |
| `distribution_interest` | Clique no CTA de distribuição | Local do CTA |
| `contact_submit_success` | Futuro backend confirma recebimento | Tipo de formulário, sem campos pessoais |

Eventos são intenção de contato, não prova de venda ou mensagem enviada. Definir um único responsável por pageviews e por cada conversão: integração direta ou GTM, evitando disparo redundante. Clique de distribuição pode gerar evento de intenção e clique de canal, mas não contar ambos como duas conversões equivalentes.

Variáveis propostas para futuro `.env.example`: `NEXT_PUBLIC_SITE_URL`, `NEXT_PUBLIC_GA4_ID`, `NEXT_PUBLIC_META_PIXEL_ID`, `NEXT_PUBLIC_GTM_ID`. Exemplo terá valores vazios e comentários; domínio/IDs fictícios não serão preenchidos. Credenciais de serviços futuros ficam somente no servidor.

Consentimento e privacidade serão definidos para as tecnologias efetivamente escolhidas e revisados antes da ativação. Proposta conservadora: integrações opcionais desativadas até configuração e consentimento aplicável; permitir revisar a preferência e interromper envios posteriores ao retirar consentimento. Sem coletar nome, telefone, e-mail, conteúdo de mensagem ou parâmetros livres da URL em analytics. Não carregar pixels no estado desativado.

Aceite: testar ausência de requisições com IDs vazios, recusa e revogação; testar navegação e cliques sem duplicação quando uma integração for configurada. A implementação deve funcionar integralmente sem tracking.
