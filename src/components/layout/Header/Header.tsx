import React, { useState, useEffect } from 'react';
import { Menu, ExternalLink } from 'lucide-react';
import { MAIN_NAV_ITEMS, CTA_NAV_ITEM } from '../../../types/navigation';
import { Container } from '../../ui/Container/Container';
import { Button } from '../../ui/Button/Button';
import { MobileDrawer } from '../MobileDrawer/MobileDrawer';
import { ThemeToggle } from '../../ui/ThemeToggle/ThemeToggle';
import { useRouter } from '../../../utils/router';
import './Header.css';

export interface HeaderProps {
  activePath?: string;
}

export const Header: React.FC<HeaderProps> = ({ activePath = '/' }) => {
  const { navigate } = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Ativa efeito sticky com blur após 30px de rolagem
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Checagem inicial

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!e.ctrlKey && !e.metaKey && !e.shiftKey) {
      e.preventDefault();
      navigate(href);
    }
  };

  return (
    <>
      <header
        className={`site-header ${isScrolled ? 'site-header--scrolled' : 'site-header--at-top'}`}
      >
        <Container size="default">
          <div className="site-header__container">
            {/* Logotipo Oficial */}
            <a
              href="/"
              className="site-header__logo-link"
              aria-label="Nutri Açaí — Página Inicial"
              onClick={(e) => handleLinkClick(e, '/')}
            >
              <img
                src="/assets/images/logo/logo-nutri-acai.png"
                alt="Logotipo Nutri Açaí"
                className="site-header__logo-img"
                width={52}
                height={52}
              />
              <div className="site-header__logo-text">
                <span className="site-header__logo-title">Nutri Açaí</span>
                <span className="site-header__logo-subtitle">Indústria Gaúcha</span>
              </div>
            </a>

            {/* Navegação Desktop */}
            <nav className="site-header__nav" aria-label="Navegação principal">
              <ul className="site-header__nav-list">
                {MAIN_NAV_ITEMS.map((item) => {
                  const isActive = activePath === item.href;

                  if (item.isExternal) {
                    return (
                      <li key={item.id}>
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="site-header__nav-link site-header__nav-link--external"
                        >
                          <span>{item.label}</span>
                          <ExternalLink size={13} opacity={0.8} />
                        </a>
                      </li>
                    );
                  }

                  return (
                    <li key={item.id}>
                      <a
                        href={item.href}
                        className={`site-header__nav-link ${isActive ? 'site-header__nav-link--active' : ''}`}
                        onClick={(e) => handleLinkClick(e, item.href)}
                      >
                        {item.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>

            {/* CTA Desktop & Alternador de Tema */}
            <div className="site-header__actions">
              <ThemeToggle className="site-header__theme-toggle" />
              <Button
                variant="accent"
                size="sm"
                href={CTA_NAV_ITEM.href}
              >
                {CTA_NAV_ITEM.label}
              </Button>
            </div>

            {/* Controles Mobile: Alternador de Tema + Hambúrguer */}
            <div className="site-header__mobile-controls">
              <ThemeToggle className="site-header__theme-toggle site-header__theme-toggle--mobile" />
              <button
                type="button"
                className="site-header__mobile-toggle"
                onClick={() => setIsDrawerOpen(true)}
                aria-label="Abrir menu de navegação"
                aria-expanded={isDrawerOpen}
                aria-controls="mobile-drawer"
              >
                <Menu size={26} />
              </button>
            </div>
          </div>
        </Container>
      </header>

      {/* Drawer Mobile Integrado */}
      <MobileDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        activePath={activePath}
      />
    </>
  );
};
