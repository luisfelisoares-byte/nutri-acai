import React, { useEffect } from 'react';
import { 
  Building2, 
  MapPin, 
  Clock, 
  ExternalLink, 
  Briefcase, 
  ShoppingBag, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { COMPANY_INFO } from '../../data/companyData';
import { useRouter } from '../../utils/router';
import './Contact.css';

export const Contact: React.FC = () => {
  const { navigate } = useRouter();

  useEffect(() => {
    document.title = 'Contato | Nutri Açaí';

    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute(
      'content',
      'Entre em contato com a Nutri Açaí. Canais oficiais dedicados para Comercial e Distribuidores, Vendas de Produtos e Recursos Humanos em Gravataí/RS.'
    );

    window.scrollTo(0, 0);
  }, []);

  const commercialMsg = encodeURIComponent("Olá! Gostaria de falar com o comercial da Nutri Açaí.");
  const commercialUrl = `https://wa.me/5551994281252?text=${commercialMsg}`;

  const salesMsg = encodeURIComponent("Olá! Gostaria de tirar dúvidas sobre os produtos e atendimento da Nutri Açaí.");
  const salesUrl = `https://wa.me/555189621635?text=${salesMsg}`;

  const hrMsg = encodeURIComponent("Olá! Gostaria de enviar meu currículo para futuras oportunidades na Nutri Açaí.");
  const hrUrl = `https://wa.me/5551992465908?text=${hrMsg}`;

  const mapsUrl = COMPANY_INFO.address.googleMapsUrl;

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container contact-hero-content">
          <span className="badge">Canais Oficiais</span>
          <h1 className="contact-hero-title">Entre em Contato</h1>
          <p className="contact-hero-subtitle">
            Central de atendimento oficial da Nutri Açaí. Escolha o canal específico para o seu perfil e converse diretamente com a nossa equipe.
          </p>
        </div>
      </section>

      {/* Main Grid: Canals & Information */}
      <section className="contact-main-section">
        <div className="container">
          <div className="contact-grid">
            
            {/* Left Column: Direct Official Channels */}
            <div className="contact-channels-column">
              <h2 className="section-title">Canais de Atendimento Direto</h2>
              <p className="section-description">
                Para garantir agilidade no seu atendimento, cada setor possui um número dedicado no WhatsApp:
              </p>

              <div className="contact-cards-list">
                {/* 1. Comercial & Distribuidores */}
                <div className="channel-card channel-card--commercial">
                  <div className="channel-card-header">
                    <div className="channel-icon-wrap commercial-accent">
                      <Building2 className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="channel-tag">B2B & Parcerias</span>
                      <h3 className="channel-title">Comercial & Distribuidores</h3>
                    </div>
                  </div>
                  <p className="channel-desc">
                    Canal exclusivo para empresas, varejistas e interessados em se tornarem distribuidores oficiais ou estabelecerem parcerias comerciais.
                  </p>
                  <div className="channel-phone-badge">
                    <span>(51) 99428-1252</span>
                  </div>
                  <div className="channel-actions">
                    <a 
                      href={commercialUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn btn-primary channel-btn"
                    >
                      Falar com o Comercial <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                    <button 
                      onClick={() => navigate('/seja-um-distribuidor')} 
                      className="btn btn-outline channel-btn-secondary"
                    >
                      Formulário de Distribuidor
                    </button>
                  </div>
                </div>

                {/* 2. Vendas & Produtos */}
                <div className="channel-card channel-card--sales">
                  <div className="channel-card-header">
                    <div className="channel-icon-wrap sales-accent">
                      <ShoppingBag className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="channel-tag">Produtos & Varejo</span>
                      <h3 className="channel-title">Vendas & Produtos</h3>
                    </div>
                  </div>
                  <p className="channel-desc">
                    Atendimento dedicado a dúvidas sobre nossa linha de produtos, sabores, tamanhos e informações para pontos de venda.
                  </p>
                  <div className="channel-phone-badge">
                    <span>(51) 8962-1635</span>
                  </div>
                  <div className="channel-actions">
                    <a 
                      href={salesUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn btn-primary channel-btn"
                    >
                      Falar com Vendas <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                    <button 
                      onClick={() => navigate('/produtos')} 
                      className="btn btn-outline channel-btn-secondary"
                    >
                      Ver Catálogo de Produtos
                    </button>
                  </div>
                </div>

                {/* 3. Recursos Humanos */}
                <div className="channel-card channel-card--hr">
                  <div className="channel-card-header">
                    <div className="channel-icon-wrap hr-accent">
                      <Briefcase className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="channel-tag">Recrutamento & Vagas</span>
                      <h3 className="channel-title">Recursos Humanos (RH)</h3>
                    </div>
                  </div>
                  <p className="channel-desc">
                    Canal oficial para envio de currículos, informações sobre processo seletivo e banco de talentos da Nutri Açaí.
                  </p>
                  <div className="channel-phone-badge">
                    <span>(51) 99246-5908</span>
                  </div>
                  <div className="channel-actions">
                    <a 
                      href={hrUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn btn-primary channel-btn"
                    >
                      Enviar Currículo via WhatsApp <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                    <button 
                      onClick={() => navigate('/trabalhe-conosco')} 
                      className="btn btn-outline channel-btn-secondary"
                    >
                      Página Trabalhe Conosco
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Corporate Info, Address & Hours */}
            <div className="contact-info-column">
              <h2 className="section-title">Informações Institucionais</h2>
              <p className="section-description">
                Localização da unidade fabril e horários oficiais de funcionamento.
              </p>

              {/* Address Card */}
              <div className="info-card">
                <div className="info-card-header">
                  <div className="info-icon-wrap">
                    <MapPin className="w-5 h-5 text-accent-green" />
                  </div>
                  <h3 className="info-card-title">Unidade Fabril</h3>
                </div>
                <div className="info-card-content">
                  <p className="company-name">Nutri Açaí Indústria e Comércio</p>
                  <p className="company-address">
                    {COMPANY_INFO.address.street}<br />
                    Bairro {COMPANY_INFO.address.neighborhood}<br />
                    {COMPANY_INFO.address.city} - {COMPANY_INFO.address.state}<br />
                    CEP: {COMPANY_INFO.address.zipCode}
                  </p>
                  <a 
                    href={mapsUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="maps-link-btn"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" /> Ver no Google Maps
                  </a>
                </div>
              </div>

              {/* Business Hours Card */}
              <div className="info-card">
                <div className="info-card-header">
                  <div className="info-icon-wrap">
                    <Clock className="w-5 h-5 text-accent-green" />
                  </div>
                  <h3 className="info-card-title">Horário de Funcionamento</h3>
                </div>
                <div className="info-card-content">
                  <ul className="hours-list">
                    <li className="hours-item">
                      <span className="hours-day">Segunda a Sexta:</span>
                      <span className="hours-time">{COMPANY_INFO.openingHours.weekdays}</span>
                    </li>
                    <li className="hours-item">
                      <span className="hours-day">Sábado:</span>
                      <span className="hours-time">{COMPANY_INFO.openingHours.saturday}</span>
                    </li>
                    <li className="hours-item">
                      <span className="hours-day">Domingo:</span>
                      <span className="hours-time closed">{COMPANY_INFO.openingHours.sunday}</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Anti-fraud / Security Notice */}
              <div className="security-notice-card">
                <div className="security-notice-header">
                  <ShieldCheck className="w-5 h-5 text-accent-green" />
                  <h4>Atendimento Seguro</h4>
                </div>
                <p>
                  A Nutri Açaí atende somente pelos números oficiais listados nesta página. Desconfie de contatos não autorizados ou solicitações de pagamento fora dos canais formais.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>
    </div>
  );
};
