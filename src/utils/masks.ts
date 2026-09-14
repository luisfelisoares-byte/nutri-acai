/* ==========================================================================
   NUTRI AÇAÍ — MÁSCARAS DE ENTRADA DE DADOS
   ========================================================================== */

/**
 * Aplica máscara dinâmica de telefone/WhatsApp brasileiro: (99) 99999-9999 ou (99) 9999-9999
 */
export function maskPhone(value: string): string {
  const digits = value.replace(/\D/g, '').slice(0, 11);

  if (digits.length <= 2) {
    return digits.length > 0 ? `(${digits}` : '';
  }
  if (digits.length <= 6) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  }
  if (digits.length <= 10) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  }
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7, 11)}`;
}

/**
 * Remove qualquer caractere não numérico
 */
export function unmask(value: string): string {
  return value.replace(/\D/g, '');
}

/**
 * Validador simples e seguro de e-mail
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email.trim());
}
