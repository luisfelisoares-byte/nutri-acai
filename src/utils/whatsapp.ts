/* ==========================================================================
   NUTRI AÇAÍ — FORMATADORES DE LINK E MENSAGENS WHATSAPP
   ========================================================================== */

import { DistributorFormData } from '../types';

export const WHATSAPP_NUMBERS = {
  SALES: '555189621635',        // (51) 8962-1635
  COMMERCIAL: '5551994281252',   // (51) 99428-1252
  RH: '5551992465908',           // (51) 99246-5908
  CATALOG_URL: 'https://wa.me/c/555189621635'
};

/**
 * Monta o link do WhatsApp com número limpo e mensagem codificada
 */
export function buildWhatsAppUrl(phoneNumber: string, message: string): string {
  const cleanPhone = phoneNumber.replace(/\D/g, '');
  const encodedMessage = encodeURIComponent(message.trim());
  return `https://wa.me/${cleanPhone}?text=${encodedMessage}`;
}

/**
 * Mensagem padronizada para compra de produto específico
 */
export function buildProductWhatsAppUrl(
  productName: string,
  volume: string,
  lineName: string
): string {
  const message = `Olá! Tenho interesse no ${productName} — ${volume} (${lineName}) da Nutri Açaí. Gostaria de saber disponibilidade e condições de compra.`;
  return buildWhatsAppUrl(WHATSAPP_NUMBERS.SALES, message);
}

/**
 * Mensagem padronizada para o formulário Seja um Distribuidor
 */
export function buildDistributorWhatsAppUrl(data: DistributorFormData): string {
  const message = `Olá! Preenchi a proposta para Distribuidor no site Nutri Açaí:

• Nome: ${data.name}
• Empresa: ${data.company}
• WhatsApp: ${data.whatsapp}
• E-mail: ${data.email}
• Localização: ${data.city}/${data.state}
• Região de Interesse: ${data.targetRegion}
• Já atua com distribuição?: ${data.alreadyDistributes}
• Segmento: ${data.segment}
• Mensagem: ${data.message ? data.message : 'Nenhuma observação adicional.'}

Gostaria de conhecer as condições para novos distribuidores!`;

  return buildWhatsAppUrl(WHATSAPP_NUMBERS.COMMERCIAL, message);
}

/**
 * Mensagem padronizada para Trabalhe Conosco (RH)
 */
export function buildRhWhatsAppUrl(): string {
  const message = 'Olá! Gostaria de enviar meu currículo para futuras oportunidades na Nutri Açaí.';
  return buildWhatsAppUrl(WHATSAPP_NUMBERS.RH, message);
}
