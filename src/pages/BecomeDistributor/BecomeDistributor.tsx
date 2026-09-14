import React, { useState, useEffect } from 'react';
import {
  TrendingUp,
  Factory,
  FlaskConical,
  Truck,
  Layers,
  Award,
  MessageCircle,
  CheckCircle2,
  Send
} from 'lucide-react';
import { Container } from '../../components/ui/Container/Container';
import { Section } from '../../components/ui/Section/Section';
import { Button } from '../../components/ui/Button/Button';
import { Badge } from '../../components/ui/Badge/Badge';
import { Input } from '../../components/ui/Input/Input';
import { COMPANY_INFO, BRAND_SLOGAN } from '../../data/companyData';
import { buildDistributorWhatsAppUrl, buildWhatsAppUrl, WHATSAPP_NUMBERS } from '../../utils/whatsapp';
import { maskPhone, isValidEmail } from '../../utils/masks';
import { DistributorFormData } from '../../types';
import './BecomeDistributor.css';

// Lista dos 26 estados brasileiros + Distrito Federal
const BRAZIL_STATES = [
  'AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA',
  'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN',
  'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'
];

// Segmentos oficiais documentados
const OFFICIAL_SEGMENTS = [
  'Distribuidor',
  'Food Service',
  'Marca Própria (Private Label)',
  'Varejo'
];

interface FormErrors {
  name?: string;
  company?: string;
  whatsapp?: string;
  email?: string;
  state?: string;
  city?: string;
  targetRegion?: string;
  segment?: string;
}

export const BecomeDistributor: React.FC = () => {
  // Configuração Semântica de SEO
  useEffect(() => {
    document.title = 'Seja um Distribuidor | Nutri Açaí';

    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute(
      'content',
      'Cadastre-se para ser um distribuidor Nutri Açaí. Capacidade superior a 9 t/dia, laboratório próprio, frota própria e atendimento direto no WhatsApp Comercial.'
    );

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Estado dos Campos do Formulário
  const [formData, setFormData] = useState<DistributorFormData>({
    name: '',
    company: '',
    whatsapp: '',
    email: '',
    state: 'RS',
    city: '',
    targetRegion: '',
    alreadyDistributes: 'Sim',
    segment: 'Distribuidor',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Manipulação de mudança nos inputs
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    if (name === 'whatsapp') {
      setFormData((prev) => ({ ...prev, whatsapp: maskPhone(value) }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }

    // Limpa o erro do campo ao digitar
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  // Validação amigável no frontend
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim() || formData.name.trim().length < 3) {
      newErrors.name = 'Por favor, informe seu nome completo (mínimo de 3 caracteres).';
    }

    if (!formData.company.trim()) {
      newErrors.company = 'Por favor, informe o nome da sua empresa ou negócio.';
    }

    const digitsOnly = formData.whatsapp.replace(/\D/g, '');
    if (!formData.whatsapp.trim() || digitsOnly.length < 10) {
      newErrors.whatsapp = 'Informe um número de WhatsApp válido com DDD (ex: 51 99999-9999).';
    }

    if (!formData.email.trim() || !isValidEmail(formData.email)) {
      newErrors.email = 'Por favor, informe um endereço de e-mail válido.';
    }

    if (!formData.state) {
      newErrors.state = 'Selecione o estado.';
    }

    if (!formData.city.trim()) {
      newErrors.city = 'Por favor, informe sua cidade.';
    }

    if (!formData.targetRegion.trim()) {
      newErrors.targetRegion = 'Informe a região de interesse para distribuição.';
    }

    if (!formData.segment) {
      newErrors.segment = 'Selecione o segmento principal de atuação.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Processamento do Envio conforme docs/05-FLUXOS-E-FORMULARIOS.md
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Formata a URL do WhatsApp Comercial oficial com os dados estruturados
    const whatsappUrl = buildDistributorWhatsAppUrl(formData);

    // Feedback visual elegante e abertura direta da conversa
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);

      // Abre o WhatsApp Comercial em nova aba com o formulário pronto
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    }, 400);
  };

  // Link direto WhatsApp Comercial para dúvida imediata
  const directCommercialWhatsAppUrl = buildWhatsAppUrl(
    WHATSAPP_NUMBERS.COMMERCIAL,
    'Olá! Tenho interesse em ser distribuidor da Nutri Açaí e gostaria de conhecer as condições para parceria.'
  );

  return (
    <div className="become-dist-page">
      {/* ===================================================================
          1. HERO / CABEÇALHO
          =================================================================== */}
      <section className="become-dist-hero" aria-labelledby="become-dist-title">
        <Container size="default">
          <div className="become-dist-hero__content">
            <div className="become-dist-hero__badge">
              <Badge variant="accent" icon={<TrendingUp size={14} />}>
                Parceria Comercial
              </Badge>
            </div>

            <h1 id="become-dist-title" className="become-dist-hero__title">
              Seja um Distribuidor Nutri Açaí
            </h1>

            <p className="become-dist-hero__slogan">
              "{BRAND_SLOGAN}"
            </p>

            <p className="become-dist-hero__lead">
              Preencha o formulário para apresentar sua região e negócio à nossa equipe comercial. Atendimento direto da nossa fábrica gaúcha para todo o Brasil.
            </p>
          </div>
        </Container>
      </section>

      {/* ===================================================================
          2. SEÇÃO PRINCIPAL: BENEFÍCIOS (ESQ) & FORMULÁRIO (DIR)
          =================================================================== */}
      <Section as="section" padding="lg" background="default" className="become-dist-section">
        <Container size="default">
          <div className="become-dist-layout">
            {/* Coluna da Esquerda: Dados Oficiais e Benefícios Comprovados */}
            <div className="become-dist-info">
              <div className="become-dist-info-card">
                <Badge variant="primary" icon={<Factory size={14} />}>
                  Indústria Gaúcha
                </Badge>
                <h2>Por que ser um distribuidor Nutri Açaí?</h2>
                <p>
                  Atendemos distribuidores, food services e marcas próprias que buscam produtos confiáveis, consistentes e com qualidade diferenciada direto da nossa fábrica gaúcha para todo o Brasil.
                </p>

                <ul className="become-dist-benefits-list">
                  <li className="become-dist-benefit-item">
                    <div className="become-dist-benefit-icon">
                      <Award size={20} />
                    </div>
                    <div>
                      <div className="become-dist-benefit-title">Capacidade produtiva superior a 9 t/dia</div>
                      <div className="become-dist-benefit-desc">
                        Escala fabril industrial para abastecer distribuidores de norte a sul com estabilidade contínua.
                      </div>
                    </div>
                  </li>

                  <li className="become-dist-benefit-item">
                    <div className="become-dist-benefit-icon">
                      <FlaskConical size={20} />
                    </div>
                    <div>
                      <div className="become-dist-benefit-title">Laboratório próprio e equipe técnica</div>
                      <div className="become-dist-benefit-desc">
                        Controle total de ponta a ponta na fábrica em Gravataí/RS com padrão industrial de excelência.
                      </div>
                    </div>
                  </li>

                  <li className="become-dist-benefit-item">
                    <div className="become-dist-benefit-icon">
                      <Truck size={20} />
                    </div>
                    <div>
                      <div className="become-dist-benefit-title">Frota própria e logística nacional</div>
                      <div className="become-dist-benefit-desc">
                        Logística ágil e preservação da cadeia fria até a entrega em todo o território nacional.
                      </div>
                    </div>
                  </li>

                  <li className="become-dist-benefit-item">
                    <div className="become-dist-benefit-icon">
                      <Layers size={20} />
                    </div>
                    <div>
                      <div className="become-dist-benefit-title">Mix completo para todos os canais</div>
                      <div className="become-dist-benefit-desc">
                        Linha Food Service (5L a 12L), Linha Varejo (1,5L) e Linha Nutrinho (200ml e 220ml).
                      </div>
                    </div>
                  </li>
                </ul>

                {/* Card de Contato Direto */}
                <div className="become-dist-direct-card">
                  <h3>Prefere falar agora com nossa equipe?</h3>
                  <p>
                    Canal Comercial & Distribuidores: <strong>{COMPANY_INFO.commercialPhone}</strong>
                  </p>
                  <Button
                    variant="whatsapp"
                    size="md"
                    href={directCommercialWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    leftIcon={<MessageCircle size={18} />}
                  >
                    Falar com o Comercial no WhatsApp
                  </Button>
                </div>
              </div>
            </div>

            {/* Coluna da Direita: Formulário de Qualificação B2B */}
            <div className="become-dist-form-wrapper">
              <div className="become-dist-form-header">
                <h2>Proposta de Parceria Comercial</h2>
                <p>Preencha os campos abaixo para iniciar seu atendimento comercial.</p>
              </div>

              {isSuccess && (
                <div className="form-feedback-alert" role="status">
                  <CheckCircle2 size={24} style={{ flexShrink: 0 }} />
                  <div>
                    <strong>Dados validados com sucesso!</strong>
                    Sua solicitação foi estruturada e encaminhada para o WhatsApp Comercial: {COMPANY_INFO.commercialPhone}.
                  </div>
                </div>
              )}

              <form className="become-dist-form" onSubmit={handleSubmit} noValidate>
                {/* Linha 1: Nome e Empresa */}
                <div className="become-dist-form__row become-dist-form__row--2-cols">
                  <Input
                    label="Nome Completo"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    isRequired
                    placeholder="Seu nome completo"
                    error={errors.name}
                    autoComplete="name"
                  />

                  <Input
                    label="Nome da Empresa"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    isRequired
                    placeholder="Razão Social ou Nome Fantasia"
                    error={errors.company}
                    autoComplete="organization"
                  />
                </div>

                {/* Linha 2: WhatsApp e E-mail */}
                <div className="become-dist-form__row become-dist-form__row--2-cols">
                  <Input
                    label="WhatsApp com DDD"
                    name="whatsapp"
                    type="tel"
                    value={formData.whatsapp}
                    onChange={handleChange}
                    isRequired
                    placeholder="(00) 00000-0000"
                    error={errors.whatsapp}
                    autoComplete="tel"
                  />

                  <Input
                    label="E-mail Corporativo"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    isRequired
                    placeholder="seuemail@empresa.com.br"
                    error={errors.email}
                    autoComplete="email"
                  />
                </div>

                {/* Linha 3: Estado e Cidade */}
                <div className="become-dist-form__row become-dist-form__row--state-city">
                  <div className="form-select-group">
                    <label htmlFor="state-select" className="form-select-label">
                      Estado <span className="input-required-star" aria-hidden="true">*</span>
                    </label>
                    <select
                      id="state-select"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      className={`form-select-control ${errors.state ? 'form-select-control--error' : ''}`}
                    >
                      {BRAZIL_STATES.map((st) => (
                        <option key={st} value={st}>
                          {st}
                        </option>
                      ))}
                    </select>
                  </div>

                  <Input
                    label="Cidade"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    isRequired
                    placeholder="Sua cidade"
                    error={errors.city}
                    autoComplete="address-level2"
                  />
                </div>

                {/* Linha 4: Região de Interesse */}
                <Input
                  label="Região de Interesse para Distribuição"
                  name="targetRegion"
                  value={formData.targetRegion}
                  onChange={handleChange}
                  isRequired
                  placeholder="Ex.: Região Metropolitana de Porto Alegre, Serra Gaúcha, Litoral, etc."
                  error={errors.targetRegion}
                />

                {/* Linha 5: Segmento / Atividade Principal */}
                <div className="form-select-group">
                  <label htmlFor="segment-select" className="form-select-label">
                    Segmento Principal <span className="input-required-star" aria-hidden="true">*</span>
                  </label>
                  <select
                    id="segment-select"
                    name="segment"
                    value={formData.segment}
                    onChange={handleChange}
                    className={`form-select-control ${errors.segment ? 'form-select-control--error' : ''}`}
                  >
                    {OFFICIAL_SEGMENTS.map((seg) => (
                      <option key={seg} value={seg}>
                        {seg}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Linha 6: Já trabalha com distribuição? */}
                <fieldset className="form-radio-fieldset">
                  <legend className="form-radio-legend">
                    Já trabalha com distribuição de alimentos? <span className="input-required-star" aria-hidden="true">*</span>
                  </legend>
                  <div className="form-radio-options">
                    <label className="form-radio-label">
                      <input
                        type="radio"
                        name="alreadyDistributes"
                        value="Sim"
                        checked={formData.alreadyDistributes === 'Sim'}
                        onChange={handleChange}
                        className="form-radio-input"
                      />
                      <span>Sim</span>
                    </label>

                    <label className="form-radio-label">
                      <input
                        type="radio"
                        name="alreadyDistributes"
                        value="Não"
                        checked={formData.alreadyDistributes === 'Não'}
                        onChange={handleChange}
                        className="form-radio-input"
                      />
                      <span>Não</span>
                    </label>
                  </div>
                </fieldset>

                {/* Linha 7: Mensagem Opcional */}
                <div className="form-textarea-group">
                  <label htmlFor="message-textarea" className="input-label">
                    Mensagem / Observações (Opcional)
                  </label>
                  <textarea
                    id="message-textarea"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Conte um pouco sobre sua estrutura, frota ou canais atendidos..."
                    className="form-textarea-control"
                  />
                </div>

                {/* Botão de Envio / Submissão */}
                <Button
                  type="submit"
                  variant="accent"
                  size="lg"
                  fullWidth
                  disabled={isSubmitting}
                  rightIcon={<Send size={18} />}
                >
                  {isSubmitting ? 'Preparando envio...' : 'Tenho interesse em ser Distribuidor'}
                </Button>

                {/* Nota de Privacidade / Contato */}
                <p className="form-privacy-note">
                  Os dados informados serão utilizados exclusivamente pela equipe comercial da Nutri Açaí para retorno sobre a parceria.
                </p>
              </form>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default BecomeDistributor;
