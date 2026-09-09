'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { 
  CheckCircle2, 
  AlertCircle, 
  Send, 
  ShieldCheck, 
  Info, 
  Building2, 
  ArrowRight,
  RotateCcw,
  MessageCircle,
  ExternalLink
} from 'lucide-react';

interface FormErrors {
  [key: string]: string;
}

const OFFICIAL_WHATSAPP_NUMBER = '5551994281252';

// Mapeamentos amigáveis para geração da mensagem comercial
const BUSINESS_TYPE_LABELS: Record<string, string> = {
  distribuidora: 'Distribuidora de Alimentos / Congelados',
  atacado: 'Atacado / Atacarejo',
  representacao: 'Representação Comercial',
  'operador-logistico': 'Operador Logístico',
  outro: 'Outro Modelo de Negócio',
};

const EXPERIENCE_LABELS: Record<string, string> = {
  iniciando: 'Iniciando no setor de distribuição',
  '1-a-3-anos': 'De 1 a 3 anos de experiência',
  'mais-de-3-anos': 'Mais de 3 anos de atuação no mercado',
};

const COLD_STORAGE_LABELS: Record<string, string> = {
  sim: 'Sim, estrutura de câmara fria própria',
  nao: 'Não possui câmara fria no momento',
  'em-planejamento': 'Em processo de implementação / locação',
};

const REFRIGERATED_FLEET_LABELS: Record<string, string> = {
  sim: 'Sim, veículos refrigerados próprios',
  terceirizada: 'Logística / transporte terceirizado refrigerado',
  nao: 'Não possui no momento',
};

const STATE_LABELS: Record<string, string> = {
  RS: 'Rio Grande do Sul (RS)',
  SC: 'Santa Catarina (SC)',
  PR: 'Paraná (PR)',
  SP: 'São Paulo (SP)',
  RJ: 'Rio de Janeiro (RJ)',
  MG: 'Minas Gerais (MG)',
  OUTRO: 'Outro Estado',
};

export const DistributorApplicationForm: React.FC = () => {
  // Estado dos campos
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    cnpj: '',
    email: '',
    phone: '',
    state: '',
    city: '',
    targetRegion: '',
    businessType: 'distribuidora',
    distributionExperience: '1-a-3-anos',
    channels: [] as string[],
    hasColdStorage: 'sim',
    hasRefrigeratedFleet: 'sim',
    message: '',
    consentLgpd: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isValidated, setIsValidated] = useState(false);
  const [whatsappUrl, setWhatsappUrl] = useState('');

  // Manipulação de inputs de texto/select
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Limpa o erro do campo alterado
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  // Manipulação de checkboxes de múltiplos canais
  const handleChannelToggle = (channel: string) => {
    setFormData((prev) => {
      const exists = prev.channels.includes(channel);
      return {
        ...prev,
        channels: exists 
          ? prev.channels.filter((c) => c !== channel) 
          : [...prev.channels, channel],
      };
    });
  };

  // Validação estrita client-side
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Informe seu nome completo.';
    }

    if (!formData.companyName.trim()) {
      newErrors.companyName = 'Informe a razão social ou nome da sua empresa.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Informe um e-mail corporativo válido.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Formato de e-mail inválido.';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Informe seu telefone de contato.';
    } else if (formData.phone.trim().length < 10) {
      newErrors.phone = 'Informe um telefone com DDD válido.';
    }

    if (!formData.state.trim()) {
      newErrors.state = 'Selecione ou informe seu Estado (UF).';
    }

    if (!formData.city.trim()) {
      newErrors.city = 'Informe a cidade principal de atuação.';
    }

    if (!formData.consentLgpd) {
      newErrors.consentLgpd = 'É necessário autorizar o tratamento dos dados comerciais para contato da fábrica.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Montagem da mensagem estruturada para o WhatsApp
  const buildWhatsAppMessage = (): string => {
    const lines: string[] = [
      '*NOVA CANDIDATURA COMERCIAL — DISTRIBUIÇÃO*',
      '',
      '*DADOS CORPORATIVOS E CONTATO*',
      `Responsável: ${formData.fullName.trim()}`,
      `Empresa/Razão Social: ${formData.companyName.trim()}`,
      `CNPJ: ${formData.cnpj.trim() ? formData.cnpj.trim() : 'Não informado'}`,
      `E-mail: ${formData.email.trim()}`,
      `Telefone/WhatsApp: ${formData.phone.trim()}`,
      '',
      '*LOCALIZAÇÃO E ÁREA DE ATUAÇÃO*',
      `UF: ${STATE_LABELS[formData.state] || formData.state}`,
      `Cidade: ${formData.city.trim()}`,
      `Região/Cidades de Atuação: ${formData.targetRegion.trim() ? formData.targetRegion.trim() : 'Conforme demanda comercial'}`,
      '',
      '*PERFIL COMERCIAL*',
      `Tipo de Operação: ${BUSINESS_TYPE_LABELS[formData.businessType] || formData.businessType}`,
      `Experiência no Segmento: ${EXPERIENCE_LABELS[formData.distributionExperience] || formData.distributionExperience}`,
      '',
      '*CANAIS PRIORITÁRIOS*',
      formData.channels.length > 0 
        ? formData.channels.map((c) => `- ${c}`).join('\n')
        : 'A definir em alinhamento comercial',
      '',
      '*ESTRUTURA OPERACIONAL*',
      `Câmara Fria: ${COLD_STORAGE_LABELS[formData.hasColdStorage] || formData.hasColdStorage}`,
      `Transporte Refrigerado: ${REFRIGERATED_FLEET_LABELS[formData.hasRefrigeratedFleet] || formData.hasRefrigeratedFleet}`,
    ];

    if (formData.message.trim()) {
      lines.push('', '*OBSERVAÇÕES*', formData.message.trim());
    }

    lines.push('', '*CONSENTIMENTO LGPD*', 'Consentimento autorizado no formulário.');

    return lines.join('\n');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      const message = buildWhatsAppMessage();
      const encodedMessage = encodeURIComponent(message);
      const url = `https://wa.me/${OFFICIAL_WHATSAPP_NUMBER}?text=${encodedMessage}`;
      
      setWhatsappUrl(url);
      setIsValidated(true);

      // Disparo do WhatsApp em nova aba mantendo fallback de link visível
      try {
        window.open(url, '_blank', 'noopener,noreferrer');
      } catch (err) {
        console.error('Falha ao abrir janela do WhatsApp:', err);
      }
    }
  };

  const handleResetForm = () => {
    setIsValidated(false);
    setWhatsappUrl('');
    setFormData({
      fullName: '',
      companyName: '',
      cnpj: '',
      email: '',
      phone: '',
      state: '',
      city: '',
      targetRegion: '',
      businessType: 'distribuidora',
      distributionExperience: '1-a-3-anos',
      channels: [],
      hasColdStorage: 'sim',
      hasRefrigeratedFleet: 'sim',
      message: '',
      consentLgpd: false,
    });
    setErrors({});
  };

  return (
    <div className="rounded-ds-2xl border border-border bg-surface shadow-ds-sm overflow-hidden">
      
      {/* Cabeçalho do Formulário */}
      <div className="p-6 sm:p-8 bg-surface-muted/60 border-b border-border space-y-2">
        <div className="flex items-center gap-2">
          <Badge variant="primary" size="sm">Cadastro de Interesse Comercial</Badge>
        </div>
        <h2 className="font-display font-bold text-xl sm:text-2xl text-text-primary">
          Formulário de Candidatura para Distribuição
        </h2>
        <p className="text-text-secondary text-xs sm:text-sm">
          Preencha os dados abaixo para que nossa diretoria comercial avalie a disponibilidade de praça e entre em contato.
        </p>
      </div>

      {isValidated ? (
        /* Estado Transparente de Candidatura Preparada (Fluxo Funcional WhatsApp) */
        <div className="p-8 sm:p-12 text-center space-y-6">
          <div className="w-14 h-14 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-600 mx-auto">
            <CheckCircle2 className="w-7 h-7" aria-hidden="true" />
          </div>

          <div className="space-y-3 max-w-lg mx-auto">
            <h3 className="font-display font-semibold text-xl text-text-primary">
              Candidatura Comercial Preparada!
            </h3>
            <p className="text-text-secondary text-sm leading-relaxed">
              Os dados foram validados com sucesso. Uma nova janela do WhatsApp foi aberta com sua mensagem organizada para a diretoria comercial da <strong>Nutri Açaí</strong>.
            </p>
            <div className="p-4 rounded-ds-lg bg-emerald-50/70 border border-emerald-200/80 text-xs text-emerald-950 text-left space-y-2">
              <p className="font-semibold text-emerald-900 flex items-center gap-1.5">
                <Info className="w-4 h-4 text-emerald-600" /> Próxima Ação Necessária:
              </p>
              <p>
                Confira os dados no WhatsApp e toque em <strong>&quot;Enviar&quot;</strong> dentro da conversa para concluir o contato com a fábrica.
              </p>
              <p className="text-text-muted text-[11px] pt-1">
                Caso a janela do WhatsApp não tenha aberto automaticamente pelo navegador, utilize o botão verde abaixo:
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-ds-md font-semibold text-sm bg-emerald-600 hover:bg-emerald-700 text-white shadow-ds-sm hover:shadow-ds-md transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 select-none active:scale-[0.98]"
            >
              <MessageCircle className="w-4 h-4" aria-hidden="true" />
              <span>Abrir WhatsApp Agora</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-80" aria-hidden="true" />
            </a>
            <Button type="button" onClick={handleResetForm} variant="outline" size="md">
              <RotateCcw className="w-4 h-4" />
              <span>Novo Preenchimento</span>
            </Button>
          </div>
        </div>
      ) : (
        /* Formulário Ativo */
        <form onSubmit={handleSubmit} noValidate className="p-6 sm:p-8 space-y-8">
          
          {/* Grupo 1: Dados do Contato e Empresa */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-sm font-semibold text-text-primary border-b border-border pb-2">
              <Building2 className="w-4 h-4 text-primary" aria-hidden="true" />
              <span>1. Dados Corporativos e Contato</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label htmlFor="fullName" className="block text-xs font-semibold text-text-secondary">
                  Nome Completo do Responsável *
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.fullName)}
                  aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                  placeholder="Ex: João da Silva"
                  className={`w-full px-3.5 py-2.5 rounded-ds-md border ${
                    errors.fullName ? 'border-feedback-error bg-red-50/20' : 'border-border bg-surface'
                  } text-sm text-text-primary focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary min-h-[44px]`}
                />
                {errors.fullName && (
                  <p id="fullName-error" className="text-xs text-feedback-error flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.fullName}
                  </p>
                )}
              </div>

              <div className="space-y-1.5">
                <label htmlFor="companyName" className="block text-xs font-semibold text-text-secondary">
                  Empresa / Razão Social *
                </label>
                <input
                  id="companyName"
                  name="companyName"
                  type="text"
                  required
                  value={formData.companyName}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.companyName)}
                  aria-describedby={errors.companyName ? 'companyName-error' : undefined}
                  placeholder="Ex: Distribuidora Alimentos Ltda"
                  className={`w-full px-3.5 py-2.5 rounded-ds-md border ${
                    errors.companyName ? 'border-feedback-error bg-red-50/20' : 'border-border bg-surface'
                  } text-sm text-text-primary focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary min-h-[44px]`}
                />
                {errors.companyName && (
                  <p id="companyName-error" className="text-xs text-feedback-error flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.companyName}
                  </p>
                )}
              </div>

              <div className="space-y-1.5">
                <label htmlFor="cnpj" className="block text-xs font-semibold text-text-secondary">
                  CNPJ (opcional)
                </label>
                <input
                  id="cnpj"
                  name="cnpj"
                  type="text"
                  value={formData.cnpj}
                  onChange={handleChange}
                  placeholder="00.000.000/0000-00"
                  className="w-full px-3.5 py-2.5 rounded-ds-md border border-border bg-surface text-sm text-text-primary focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary min-h-[44px]"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="email" className="block text-xs font-semibold text-text-secondary">
                  E-mail Corporativo *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                  placeholder="contato@suaempresa.com.br"
                  className={`w-full px-3.5 py-2.5 rounded-ds-md border ${
                    errors.email ? 'border-feedback-error bg-red-50/20' : 'border-border bg-surface'
                  } text-sm text-text-primary focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary min-h-[44px]`}
                />
                {errors.email && (
                  <p id="email-error" className="text-xs text-feedback-error flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.email}
                  </p>
                )}
              </div>

              <div className="space-y-1.5 sm:col-span-2">
                <label htmlFor="phone" className="block text-xs font-semibold text-text-secondary">
                  Telefone / WhatsApp Comercial *
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.phone)}
                  aria-describedby={errors.phone ? 'phone-error' : undefined}
                  placeholder="(00) 00000-0000"
                  className={`w-full px-3.5 py-2.5 rounded-ds-md border ${
                    errors.phone ? 'border-feedback-error bg-red-50/20' : 'border-border bg-surface'
                  } text-sm text-text-primary focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary min-h-[44px]`}
                />
                {errors.phone && (
                  <p id="phone-error" className="text-xs text-feedback-error flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.phone}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Grupo 2: Localização e Região Pretendida */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-sm font-semibold text-text-primary border-b border-border pb-2">
              <span>2. Localização e Praça de Atuação</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="space-y-1.5">
                <label htmlFor="state" className="block text-xs font-semibold text-text-secondary">
                  Estado (UF) *
                </label>
                <select
                  id="state"
                  name="state"
                  required
                  value={formData.state}
                  onChange={handleChange}
                  className={`w-full px-3.5 py-2.5 rounded-ds-md border ${
                    errors.state ? 'border-feedback-error bg-red-50/20' : 'border-border bg-surface'
                  } text-sm text-text-primary focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary min-h-[44px]`}
                >
                  <option value="">Selecione o Estado</option>
                  <option value="RS">Rio Grande do Sul (RS)</option>
                  <option value="SC">Santa Catarina (SC)</option>
                  <option value="PR">Paraná (PR)</option>
                  <option value="SP">São Paulo (SP)</option>
                  <option value="RJ">Rio de Janeiro (RJ)</option>
                  <option value="MG">Minas Gerais (MG)</option>
                  <option value="OUTRO">Outro Estado</option>
                </select>
                {errors.state && (
                  <p className="text-xs text-feedback-error">{errors.state}</p>
                )}
              </div>

              <div className="space-y-1.5 sm:col-span-2">
                <label htmlFor="city" className="block text-xs font-semibold text-text-secondary">
                  Cidade Principal *
                </label>
                <input
                  id="city"
                  name="city"
                  type="text"
                  required
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="Ex: Porto Alegre, Caxias do Sul..."
                  className={`w-full px-3.5 py-2.5 rounded-ds-md border ${
                    errors.city ? 'border-feedback-error bg-red-50/20' : 'border-border bg-surface'
                  } text-sm text-text-primary focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary min-h-[44px]`}
                />
                {errors.city && (
                  <p className="text-xs text-feedback-error">{errors.city}</p>
                )}
              </div>

              <div className="space-y-1.5 sm:col-span-3">
                <label htmlFor="targetRegion" className="block text-xs font-semibold text-text-secondary">
                  Região que pretende atender (cidades vizinhas, microrregião)
                </label>
                <input
                  id="targetRegion"
                  name="targetRegion"
                  type="text"
                  value={formData.targetRegion}
                  onChange={handleChange}
                  placeholder="Ex: Vale dos Sinos, Região Metropolitana, Litoral Norte..."
                  className="w-full px-3.5 py-2.5 rounded-ds-md border border-border bg-surface text-sm text-text-primary focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary min-h-[44px]"
                />
              </div>
            </div>
          </div>

          {/* Grupo 3: Perfil Comercial e Estrutura */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-sm font-semibold text-text-primary border-b border-border pb-2">
              <span>3. Perfil Operacional e Estrutura</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label htmlFor="businessType" className="block text-xs font-semibold text-text-secondary">
                  Tipo de Operação
                </label>
                <select
                  id="businessType"
                  name="businessType"
                  value={formData.businessType}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 rounded-ds-md border border-border bg-surface text-sm text-text-primary focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary min-h-[44px]"
                >
                  <option value="distribuidora">Distribuidora de Alimentos / Congelados</option>
                  <option value="atacado">Atacado / Atacarejo</option>
                  <option value="representacao">Representação Comercial</option>
                  <option value="operador-logistico">Operador Logístico</option>
                  <option value="outro">Outro Modelo de Negócio</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="distributionExperience" className="block text-xs font-semibold text-text-secondary">
                  Experiência no Segmento
                </label>
                <select
                  id="distributionExperience"
                  name="distributionExperience"
                  value={formData.distributionExperience}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 rounded-ds-md border border-border bg-surface text-sm text-text-primary focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary min-h-[44px]"
                >
                  <option value="iniciando">Iniciando no setor de distribuição</option>
                  <option value="1-a-3-anos">De 1 a 3 anos de experiência</option>
                  <option value="mais-de-3-anos">Mais de 3 anos de atuação no mercado</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="hasColdStorage" className="block text-xs font-semibold text-text-secondary">
                  Possui Câmara Fria de Armazenamento?
                </label>
                <select
                  id="hasColdStorage"
                  name="hasColdStorage"
                  value={formData.hasColdStorage}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 rounded-ds-md border border-border bg-surface text-sm text-text-primary focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary min-h-[44px]"
                >
                  <option value="sim">Sim, possuo estrutura de câmara fria própria</option>
                  <option value="nao">Não possuo câmara fria no momento</option>
                  <option value="em-planejamento">Em processo de implementação / locação</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="hasRefrigeratedFleet" className="block text-xs font-semibold text-text-secondary">
                  Possui Transporte Refrigerado?
                </label>
                <select
                  id="hasRefrigeratedFleet"
                  name="hasRefrigeratedFleet"
                  value={formData.hasRefrigeratedFleet}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 rounded-ds-md border border-border bg-surface text-sm text-text-primary focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary min-h-[44px]"
                >
                  <option value="sim">Sim, veículos refrigerados próprios</option>
                  <option value="terceirizada">Logística / transporte terceirizado refrigerado</option>
                  <option value="nao">Não possuo no momento</option>
                </select>
              </div>

              <div className="space-y-1.5 sm:col-span-2">
                <label className="block text-xs font-semibold text-text-secondary mb-1">
                  Canais que pretende atender prioritariamente:
                </label>
                <div className="flex flex-wrap gap-4 pt-1 text-xs">
                  {['Food Service (Açaiterias/Buffets)', 'Varejo / Mercados', 'Lojas de Conveniência', 'Nutrinho (Cantinas/Quiosques)'].map((channel) => (
                    <label key={channel} className="inline-flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.channels.includes(channel)}
                        onChange={() => handleChannelToggle(channel)}
                        className="rounded border-border text-primary focus:ring-primary h-4 w-4"
                      />
                      <span>{channel}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Grupo 4: Mensagem Adicional */}
          <div className="space-y-1.5">
            <label htmlFor="message" className="block text-xs font-semibold text-text-secondary">
              Mensagem ou Observações Adicionais (opcional)
            </label>
            <textarea
              id="message"
              name="message"
              rows={3}
              value={formData.message}
              onChange={handleChange}
              placeholder="Descreva detalhes sobre sua área de atuação ou dúvidas preliminares..."
              className="w-full px-3.5 py-2.5 rounded-ds-md border border-border bg-surface text-sm text-text-primary placeholder:text-text-muted focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>

          {/* Conformidade com a LGPD (Checkbox Não Pré-Marcado) */}
          <div className="p-4 rounded-ds-md bg-surface-muted/80 border border-border space-y-2">
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                id="consentLgpd"
                name="consentLgpd"
                type="checkbox"
                required
                checked={formData.consentLgpd}
                onChange={(e) => {
                  setFormData((prev) => ({ ...prev, consentLgpd: e.target.checked }));
                  if (errors.consentLgpd) {
                    setErrors((prev) => {
                      const next = { ...prev };
                      delete next.consentLgpd;
                      return next;
                    });
                  }
                }}
                className="mt-1 rounded border-border text-primary focus:ring-primary h-4 w-4 shrink-0"
              />
              <span className="text-xs text-text-secondary leading-relaxed">
                Autorizo a <strong>Nutri Açaí</strong> a tratar os dados de contato informados neste formulário 
                para fins exclusivos de avaliação de parceria comercial e envio de tabelas/condições de distribuição, 
                em conformidade com a LGPD (Lei nº 13.709/2018).
              </span>
            </label>
            {errors.consentLgpd && (
              <p className="text-xs text-feedback-error pl-7">{errors.consentLgpd}</p>
            )}
          </div>

          {/* Botão de Submissão */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-text-muted">
              * Campos obrigatórios para avaliação cadastral.
            </p>
            <Button
              type="submit"
              variant="primary"
              size="lg"
              className="w-full sm:w-auto"
              rightIcon={<Send className="w-4 h-4" />}
            >
              Enviar Candidatura Comercial
            </Button>
          </div>

        </form>
      )}

    </div>
  );
};
