'use client';

import React, { useState, useMemo, useEffect, useCallback } from 'react';
import { useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  MessageCircle, 
  RotateCcw, 
  ShieldCheck, 
  Info,
  Package
} from 'lucide-react';
import { officialProductsCatalog } from '@/data/mock-products';

const OFFICIAL_PHONE = '5551994281252';
const DISPLAY_PHONE = '(51) 99428-1252';

interface ContactFormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  lgpdConsent: boolean;
}

export const ContactForm: React.FC = () => {
  const searchParams = useSearchParams();
  const rawSubject = searchParams.get('assunto') || searchParams.get('ref') || '';
  const productSlug = searchParams.get('produto') || '';
  const categoryParam = searchParams.get('cat') || '';

  // Identifica o produto correspondente no catálogo oficial (fallback seguro para null se não encontrar)
  const matchedProduct = useMemo(() => {
    if (!productSlug) return null;
    return officialProductsCatalog.find(
      (p) => p.slug.toLowerCase() === productSlug.trim().toLowerCase()
    ) || null;
  }, [productSlug]);

  // Mapeia parâmetro da URL ou categoria do produto para o valor padrão coerente do select
  const getDefaultSubject = useCallback(() => {
    if (rawSubject) {
      switch (rawSubject.toLowerCase()) {
        case 'food-service':
        case 'foodservice':
          return 'food-service';
        case 'distribuicao':
        case 'distribuidor':
        case 'comercial':
          return 'distribuicao';
        case 'marca-propria':
        case 'private-label':
          return 'marca-propria';
        case 'produtos':
          return 'produtos';
        case 'outros':
          return 'outros';
      }
    }

    // Se o usuário veio de um card de produto específico
    if (matchedProduct) {
      return matchedProduct.category === 'food-service' ? 'food-service' : 'produtos';
    }

    // Se veio apenas parâmetro de categoria (?cat=...)
    if (categoryParam) {
      if (categoryParam.toLowerCase() === 'food-service') return 'food-service';
      if (categoryParam.toLowerCase() === 'varejo' || categoryParam.toLowerCase() === 'nutrinho') return 'produtos';
    }

    return 'food-service';
  }, [rawSubject, matchedProduct, categoryParam]);

  // Gera mensagem inicial contextualizada
  const getInitialMessage = useCallback(() => {
    if (matchedProduct) {
      const packaging = matchedProduct.packagingDisplay ? ` (${matchedProduct.packagingDisplay})` : '';
      return `Olá! Gostaria de receber informações e cotação para o produto: ${matchedProduct.name}${packaging}.`;
    }
    return '';
  }, [matchedProduct]);

  const [formData, setFormData] = useState<ContactFormData>(() => ({
    name: '',
    company: '',
    email: '',
    phone: '',
    subject: getDefaultSubject(),
    message: getInitialMessage(),
    lgpdConsent: false,
  }));

  // Atualiza mensagem e assunto de forma reativa caso o parâmetro de produto mude na navegação
  useEffect(() => {
    if (matchedProduct) {
      const packaging = matchedProduct.packagingDisplay ? ` (${matchedProduct.packagingDisplay})` : '';
      const initialMsg = `Olá! Gostaria de receber informações e cotação para o produto: ${matchedProduct.name}${packaging}.`;
      setFormData((prev) => ({
        ...prev,
        subject: matchedProduct.category === 'food-service' ? 'food-service' : 'produtos',
        message: prev.message === '' || prev.message.startsWith('Olá! Gostaria de receber informações')
          ? initialMsg
          : prev.message,
      }));
    }
  }, [matchedProduct]);

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = 'Por favor, informe seu nome completo.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Informe um endereço de e-mail válido.';
    }

    const cleanedPhone = formData.phone.replace(/\D/g, '');
    if (!formData.phone.trim()) {
      newErrors.phone = 'Informe seu telefone ou WhatsApp com DDD.';
    } else if (cleanedPhone.length < 10) {
      newErrors.phone = 'Informe um número com DDD válido (pelo menos 10 dígitos).';
    }

    if (!formData.subject) {
      newErrors.subject = 'Selecione o assunto da sua mensagem.';
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = 'Por favor, detalhe sua mensagem com pelo menos 10 caracteres.';
    }

    if (!formData.lgpdConsent) {
      newErrors.lgpdConsent = 'É necessário autorizar o tratamento de dados comerciais para prosseguir.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Validação estrita client-side com confirmação direta
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 500);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      company: '',
      email: '',
      phone: '',
      subject: 'food-service',
      message: '',
      lgpdConsent: false,
    });
    setErrors({});
    setIsSubmitted(false);
  };

  const getSubjectLabel = (val: string) => {
    switch (val) {
      case 'food-service':
        return 'Cotação Food Service';
      case 'distribuicao':
        return 'Distribuição Comercial';
      case 'marca-propria':
        return 'Marca Própria (Private Label)';
      case 'produtos':
        return 'Informações de Produtos';
      case 'outros':
        return 'Outros Assuntos';
      default:
        return val;
    }
  };

  const generateDirectWhatsAppUrl = () => {
    const text = `Olá! Meu nome é ${formData.name}${formData.company ? ` da empresa ${formData.company}` : ''}. Assunto: ${getSubjectLabel(formData.subject)}. Mensagem: ${formData.message}`;
    return `https://wa.me/${OFFICIAL_PHONE}?text=${encodeURIComponent(text)}`;
  };

  // =========================================================================
  // TELA DE PÓS-VALIDAÇÃO PROFISSIONAL
  // =========================================================================
  if (isSubmitted) {
    return (
      <div className="rounded-2xl bg-surface border border-brand-200 p-8 sm:p-10 shadow-sm text-center space-y-6">
        <div className="w-16 h-16 rounded-full bg-brand-50 border border-brand-200 text-primary flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <Badge variant="primary" size="md">
            Dados Validados com Sucesso
          </Badge>
          <h3 className="font-display font-bold text-2xl text-text-primary">
            Agradecemos o seu contato, {formData.name}!
          </h3>
          <p className="text-text-secondary text-sm max-w-lg mx-auto leading-relaxed">
            Sua solicitação de <strong className="text-text-primary font-semibold">{getSubjectLabel(formData.subject)}</strong> foi organizada e validada com sucesso.
          </p>
        </div>

        {/* Resumo dos dados validados */}
        <div className="p-4 rounded-xl bg-surface-alt border border-border text-left text-xs text-text-secondary space-y-2 max-w-md mx-auto">
          <div><strong className="text-text-primary">Responsável:</strong> {formData.name}</div>
          {formData.company && <div><strong className="text-text-primary">Empresa:</strong> {formData.company}</div>}
          <div><strong className="text-text-primary">E-mail:</strong> {formData.email}</div>
          <div><strong className="text-text-primary">Telefone/WhatsApp:</strong> {formData.phone}</div>
          <div><strong className="text-text-primary">Assunto:</strong> {getSubjectLabel(formData.subject)}</div>
          {matchedProduct && (
            <div><strong className="text-text-primary">Produto Referenciado:</strong> {matchedProduct.name}</div>
          )}
        </div>

        {/* Confirmação Comercial Profissional */}
        <div className="p-4 rounded-xl bg-brand-50/70 border border-brand-200 text-xs text-brand-950 text-left flex items-start gap-3 max-w-lg mx-auto">
          <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            Seus dados foram organizados com sucesso. Para agilizar o seu atendimento, clique no botão abaixo para abrir a conversa oficial com a nossa equipe comercial no WhatsApp.
          </p>
        </div>

        {/* CTA para WhatsApp Direto com a Mensagem Pré-formatada */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={generateDirectWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-semibold text-sm shadow-md transition-colors focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-400"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Encaminhar pelo WhatsApp ({DISPLAY_PHONE})</span>
          </a>

          <Button
            type="button"
            variant="outline"
            size="md"
            onClick={handleReset}
            leftIcon={<RotateCcw className="w-4 h-4" />}
            className="w-full sm:w-auto"
          >
            Nova Mensagem
          </Button>
        </div>
      </div>
    );
  }

  // =========================================================================
  // FORMULÁRIO COMERCIAL
  // =========================================================================
  return (
    <form 
      onSubmit={handleSubmit} 
      className="rounded-2xl bg-surface border border-border p-6 sm:p-8 shadow-sm space-y-6"
      noValidate
    >
      <div className="space-y-1">
        <h3 className="font-display font-bold text-xl text-text-primary">
          Envie sua mensagem comercial
        </h3>
        <p className="text-text-secondary text-xs leading-relaxed">
          Preencha os campos abaixo para direcionar sua demanda ao departamento responsável.
        </p>
      </div>

      {/* Exibição amigável do produto selecionado via URL */}
      {matchedProduct && (
        <div className="p-3.5 rounded-xl bg-brand-50/70 border border-brand-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2.5">
            <Package className="w-4 h-4 text-primary shrink-0" />
            <div>
              <span className="text-text-muted">Produto de interesse:</span>{' '}
              <strong className="text-text-primary font-semibold">{matchedProduct.name}</strong>
              {matchedProduct.packagingDisplay && (
                <span className="text-text-secondary ml-1">({matchedProduct.packagingDisplay})</span>
              )}
            </div>
          </div>
          <span className="self-start sm:self-auto px-2 py-0.5 rounded text-[10px] font-semibold bg-brand-100 text-brand-800 uppercase tracking-wider shrink-0">
            {matchedProduct.category === 'food-service' ? 'Linha Food Service' : matchedProduct.category === 'nutrinho' ? 'Linha Nutrinho' : 'Linha Varejo'}
          </span>
        </div>
      )}

      <div className="space-y-4">
        
        {/* Nome e Empresa */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1">
            <label htmlFor="contact-name" className="block text-xs font-semibold text-text-secondary">
              Seu Nome <span className="text-primary">*</span>
            </label>
            <input
              id="contact-name"
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Ex: Carlos Silva"
              className={`w-full px-3.5 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 ${
                errors.name ? 'border-feedback-error bg-red-50/20' : 'border-border bg-surface'
              }`}
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? 'name-error' : undefined}
            />
            {errors.name && (
              <p id="name-error" className="text-xs text-feedback-error flex items-center gap-1 mt-1">
                <AlertCircle className="w-3 h-3 shrink-0" /> {errors.name}
              </p>
            )}
          </div>

          <div className="space-y-1">
            <label htmlFor="contact-company" className="block text-xs font-semibold text-text-secondary">
              Empresa / Estabelecimento <span className="text-text-muted font-normal">(Opcional)</span>
            </label>
            <input
              id="contact-company"
              type="text"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              placeholder="Ex: Açaiteria Tropical Ltda"
              className="w-full px-3.5 py-2.5 rounded-xl border border-border bg-surface text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
          </div>
        </div>

        {/* E-mail e Telefone/WhatsApp */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1">
            <label htmlFor="contact-email" className="block text-xs font-semibold text-text-secondary">
              E-mail Corporativo <span className="text-primary">*</span>
            </label>
            <input
              id="contact-email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="carlos@empresa.com.br"
              className={`w-full px-3.5 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 ${
                errors.email ? 'border-feedback-error bg-red-50/20' : 'border-border bg-surface'
              }`}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? 'email-error' : undefined}
            />
            {errors.email && (
              <p id="email-error" className="text-xs text-feedback-error flex items-center gap-1 mt-1">
                <AlertCircle className="w-3 h-3 shrink-0" /> {errors.email}
              </p>
            )}
          </div>

          <div className="space-y-1">
            <label htmlFor="contact-phone" className="block text-xs font-semibold text-text-secondary">
              WhatsApp / Telefone com DDD <span className="text-primary">*</span>
            </label>
            <input
              id="contact-phone"
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="(DDD) 90000-0000"
              className={`w-full px-3.5 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 ${
                errors.phone ? 'border-feedback-error bg-red-50/20' : 'border-border bg-surface'
              }`}
              aria-invalid={Boolean(errors.phone)}
              aria-describedby={errors.phone ? 'phone-error' : undefined}
            />
            {errors.phone && (
              <p id="phone-error" className="text-xs text-feedback-error flex items-center gap-1 mt-1">
                <AlertCircle className="w-3 h-3 shrink-0" /> {errors.phone}
              </p>
            )}
          </div>
        </div>

        {/* Assunto */}
        <div className="space-y-1">
          <label htmlFor="contact-subject" className="block text-xs font-semibold text-text-secondary">
            Assunto Principal <span className="text-primary">*</span>
          </label>
          <select
            id="contact-subject"
            required
            value={formData.subject}
            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
            className={`w-full px-3.5 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 ${
              errors.subject ? 'border-feedback-error bg-red-50/20' : 'border-border bg-surface'
            }`}
            aria-invalid={Boolean(errors.subject)}
            aria-describedby={errors.subject ? 'subject-error' : undefined}
          >
            <option value="food-service">Cotação Food Service (Caixas 5L, 10L, Baldes)</option>
            <option value="distribuicao">Distribuição Comercial / Quero Ser Distribuidor</option>
            <option value="marca-propria">Marca Própria (Private Label / Co-Packing)</option>
            <option value="produtos">Informações sobre Produtos e Linhas</option>
            <option value="outros">Outros Assuntos / Atendimento Geral</option>
          </select>
          {errors.subject && (
            <p id="subject-error" className="text-xs text-feedback-error flex items-center gap-1 mt-1">
              <AlertCircle className="w-3 h-3 shrink-0" /> {errors.subject}
            </p>
          )}
        </div>

        {/* Mensagem */}
        <div className="space-y-1">
          <label htmlFor="contact-message" className="block text-xs font-semibold text-text-secondary">
            Mensagem ou Detalhes da Solicitação <span className="text-primary">*</span>
          </label>
          <textarea
            id="contact-message"
            rows={4}
            required
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            placeholder="Conte-nos sobre o seu negócio, volume estimado ou a linha de produto do seu interesse..."
            className={`w-full px-3.5 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 resize-y ${
              errors.message ? 'border-feedback-error bg-red-50/20' : 'border-border bg-surface'
            }`}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? 'message-error' : undefined}
          />
          {errors.message && (
            <p id="message-error" className="text-xs text-feedback-error flex items-center gap-1 mt-1">
              <AlertCircle className="w-3 h-3 shrink-0" /> {errors.message}
            </p>
          )}
        </div>

        {/* Checkbox de Consentimento LGPD (Não pré-marcado) */}
        <div className="pt-2">
          <label className="flex items-start gap-3 cursor-pointer group">
            <input
              type="checkbox"
              checked={formData.lgpdConsent}
              onChange={(e) => setFormData({ ...formData, lgpdConsent: e.target.checked })}
              className="mt-1 w-4 h-4 rounded border-border text-primary focus:ring-primary/30"
              aria-invalid={Boolean(errors.lgpdConsent)}
              aria-describedby={errors.lgpdConsent ? 'lgpd-error' : undefined}
            />
            <span className="text-xs text-text-secondary leading-relaxed group-hover:text-text-primary transition-colors">
              Autorizo a <strong className="text-text-primary font-semibold">Nutri Açaí</strong> a utilizar os dados fornecidos para fins exclusivos de contato comercial e retorno à minha solicitação, de acordo com os princípios da Lei Geral de Proteção de Dados (LGPD).
            </span>
          </label>
          {errors.lgpdConsent && (
            <p id="lgpd-error" className="text-xs text-feedback-error flex items-center gap-1 mt-1 pl-7">
              <AlertCircle className="w-3 h-3 shrink-0" /> {errors.lgpdConsent}
            </p>
          )}
        </div>

      </div>

      {/* Botão de Envio */}
      <div className="pt-2">
        <Button
          type="submit"
          variant="primary"
          size="lg"
          isLoading={isSubmitting}
          rightIcon={<Send className="w-4 h-4" />}
          className="w-full shadow-sm"
        >
          {isSubmitting ? 'Validando informações...' : 'Enviar Mensagem Comercial'}
        </Button>
      </div>

      <div className="flex items-center justify-center gap-2 text-[11px] text-text-muted text-center pt-1">
        <ShieldCheck className="w-3.5 h-3.5 text-primary shrink-0" />
        <span>Seus dados comerciais são protegidos e tratados com confidencialidade industrial.</span>
      </div>
    </form>
  );
};
