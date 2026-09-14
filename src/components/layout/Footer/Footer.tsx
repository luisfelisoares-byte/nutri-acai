import React from 'react';
import {
  Phone,
  Clock,
  MapPin,
  ExternalLink,
  MessageCircle,
  TrendingUp,
  Users
} from 'lucide-react';
import { Container } from '../../ui/Container/Container';
import { Button } from '../../ui/Button/Button';
import { InstagramIcon, FacebookIcon } from '../../ui/SocialIcons';
import { COMPANY_INFO, BRAND_SLOGAN } from '../../../data/companyData';
import { MAIN_NAV_ITEMS } from '../../../types/navigation';
import { useRouter } from '../../../utils/router';
import './Footer.css';

export const Footer: React.FC = () => {
  const { navigate } = useRouter();

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!e.ctrlKey && !e.metaKey && !e.shiftKey) {
      e.preventDefault();
      navigate(href);
    }
  };

  return (
    <footer className="site-footer" role="contentinfo">
      <Container size="default">
        <div className="site-footer__grid">
          {/* Coluna 1: Nutri Açaí & Redes */}
          <div className="site-footer__brand">
            <a
              href="/"
              className="site-footer__logo"
              aria-label="Nutri Açaí — Página Inicial"
              onClick={(e) => handleLinkClick(e, '/')}
            >
              <img
                src="/assets/images/logo/logo-nutri-acai.png"
                alt="Logotipo Nutri Açaí"
                className="site-footer__logo-img"
                width={54}
                height={54}
              />
              <span className="site-footer__logo-text">Nutri Açaí</span>
            </a>

            <p className="site-footer__slogan">
              {BRAND_SLOGAN}
            </p>

            <div className="site-footer__social">
              <a
                href={COMPANY_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="site-footer__social-btn"
                aria-label="Acompanhe nosso perfil no Instagram"
              >
                <InstagramIcon size={20} />
              </a>

              <a
                href={COMPANY_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="site-footer__social-btn"
                aria-label="Acompanhe nossa página oficial no Facebook"
              >
                <FacebookIcon size={20} />
              </a>
            </div>
          </div>

          {/* Coluna 2: Navegação Rápida */}
          <nav className="site-footer__nav" aria-label="Links rápidos do rodapé">
            <h3 className="site-footer__title">Navegação</h3>
            <ul className="site-footer__nav-list">
              {MAIN_NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    target={item.isExternal ? '_blank' : undefined}
                    rel={item.isExternal ? 'noopener noreferrer' : undefined}
                    className="site-footer__nav-link"
                    onClick={item.isExternal ? undefined : (e) => handleLinkClick(e, item.href)}
                  >
                    <span>{item.label}</span>
                    {item.isExternal && <ExternalLink size={12} opacity={0.7} />}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="/onde-encontrar"
                  className="site-footer__nav-link"
                  onClick={(e) => handleLinkClick(e, '/onde-encontrar')}
                >
                  Onde Estamos
                </a>
              </li>
            </ul>
          </nav>

          {/* Coluna 3: Atendimento & Horários Oficiais */}
          <div className="site-footer__contact">
            <h3 className="site-footer__title">Atendimento</h3>
            <div className="site-footer__contact-list">
              <div className="site-footer__contact-item">
                <Phone size={16} className="site-footer__contact-icon" />
                <div>
                  <strong>Vendas / Produtos:</strong><br />
                  <a href={COMPANY_INFO.salesWhatsAppUrl} target="_blank" rel="noopener noreferrer" className="site-footer__contact-link">
                    {COMPANY_INFO.salesPhone}
                  </a>
                </div>
              </div>

              <div className="site-footer__contact-item">
                <Phone size={16} className="site-footer__contact-icon" />
                <div>
                  <strong>Comercial (Distribuidores):</strong><br />
                  <a href={COMPANY_INFO.commercialWhatsAppUrl} target="_blank" rel="noopener noreferrer" className="site-footer__contact-link">
                    {COMPANY_INFO.commercialPhone}
                  </a>
                </div>
              </div>

              <div className="site-footer__contact-item">
                <Phone size={16} className="site-footer__contact-icon" />
                <div>
                  <strong>RH / Trabalhe Conosco:</strong><br />
                  <a href={COMPANY_INFO.rhWhatsAppUrl} target="_blank" rel="noopener noreferrer" className="site-footer__contact-link">
                    {COMPANY_INFO.rhPhone}
                  </a>
                </div>
              </div>

              <div className="site-footer__contact-item">
                <MapPin size={16} className="site-footer__contact-icon" />
                <div>
                  <a
                    href={COMPANY_INFO.address.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="site-footer__contact-link"
                  >
                    {COMPANY_INFO.address.street}, {COMPANY_INFO.address.neighborhood}<br />
                    {COMPANY_INFO.address.city}/{COMPANY_INFO.address.state} • CEP {COMPANY_INFO.address.zipCode}
                  </a>
                </div>
              </div>

              <div className="site-footer__hours">
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 'bold', marginBottom: '4px', color: 'var(--color-white)' }}>
                  <Clock size={14} color="var(--color-yellow-light)" />
                  <span>Horário de Atendimento Comercial:</span>
                </div>
                <div>{COMPANY_INFO.openingHours.weekdays}</div>
                <div>{COMPANY_INFO.openingHours.saturday}</div>
                <div>{COMPANY_INFO.openingHours.sunday}</div>
              </div>
            </div>
          </div>

          {/* Coluna 4: Ações Imediatas */}
          <div className="site-footer__actions">
            <h3 className="site-footer__title">Ações Rápidas</h3>
            <div className="site-footer__actions-list">
              <Button
                variant="accent"
                size="sm"
                fullWidth
                href="/seja-um-distribuidor"
                leftIcon={<TrendingUp size={16} />}
              >
                Seja um Distribuidor
              </Button>

              <Button
                variant="whatsapp"
                size="sm"
                fullWidth
                href={COMPANY_INFO.salesWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                leftIcon={<MessageCircle size={16} />}
              >
                Comprar pelo WhatsApp
              </Button>

              <Button
                variant="outline-white"
                size="sm"
                fullWidth
                href="/trabalhe-conosco"
                leftIcon={<Users size={16} />}
              >
                Trabalhe Conosco
              </Button>
            </div>
          </div>
        </div>

        {/* Linha Inferior de Créditos */}
        <div className="site-footer__bottom">
          <p>
            © {new Date().getFullYear()} Nutri Açaí • Indústria Gaúcha de Açaí, Sorbets e Derivados. Todos os direitos reservados.
          </p>
          <p>
            Gravataí / RS • Brasil
          </p>
        </div>
      </Container>
    </footer>
  );
};
