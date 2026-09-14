import React, { useEffect, useRef } from 'react';
import { X, ExternalLink, ChevronRight } from 'lucide-react';
import { MAIN_NAV_ITEMS, CTA_NAV_ITEM } from '../../../types/navigation';
import { Button } from '../../ui/Button/Button';
import { ThemeToggle } from '../../ui/ThemeToggle/ThemeToggle';
import { useRouter } from '../../../utils/router';
import './MobileDrawer.css';

export interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  activePath?: string;
}

export const MobileDrawer: React.FC<MobileDrawerProps> = ({
  isOpen,
  onClose,
  activePath = '/'
}) => {
  const { navigate } = useRouter();
  const drawerRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    onClose();
    if (!e.ctrlKey && !e.metaKey && !e.shiftKey) {
      e.preventDefault();
      navigate(href);
    }
  };

  // Fecha ao pressionar Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      // Trava scroll da página de fundo
      document.body.style.overflow = 'hidden';
      // Foca no botão de fechar ao abrir
      setTimeout(() => closeButtonRef.current?.focus(), 50);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  return (
    <>
      {/* Backdrop com clique para fechar */}
      <div
        className={`drawer-backdrop ${isOpen ? 'drawer-backdrop--open' : ''}`}
        onClick={onClose}
        aria-hidden={!isOpen}
      />

      {/* Painel do Drawer */}
      <div
        ref={drawerRef}
        id="mobile-drawer"
        role="dialog"
        aria-modal="true"
        aria-label="Menu principal de navegação"
        className={`mobile-drawer ${isOpen ? 'mobile-drawer--open' : ''}`}
      >
        <div className="mobile-drawer__header">
          <div className="mobile-drawer__logo">
            <img
              src="/assets/images/logo/logo-nutri-acai.png"
              alt="Nutri Açaí"
              className="mobile-drawer__logo-img"
              width={44}
              height={44}
            />
            <span className="mobile-drawer__logo-title">Nutri Açaí</span>
          </div>

          <button
            ref={closeButtonRef}
            type="button"
            className="mobile-drawer__close-btn"
            onClick={onClose}
            aria-label="Fechar menu de navegação"
          >
            <X size={24} />
          </button>
        </div>

        <nav className="mobile-drawer__content" aria-label="Navegação móvel">
          {MAIN_NAV_ITEMS.map((item) => {
            const isActive = activePath === item.href;

            if (item.isExternal) {
              return (
                <a
                  key={item.id}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mobile-drawer__link"
                  onClick={onClose}
                >
                  <span>{item.label}</span>
                  <ExternalLink size={18} opacity={0.7} />
                </a>
              );
            }

            return (
              <a
                key={item.id}
                href={item.href}
                className={`mobile-drawer__link ${isActive ? 'mobile-drawer__link--active' : ''}`}
                onClick={(e) => handleLinkClick(e, item.href)}
              >
                <span>{item.label}</span>
                <ChevronRight size={18} opacity={0.7} />
              </a>
            );
          })}
        </nav>

        <div className="mobile-drawer__footer">
          {/* Alternador de Tema no Mobile */}
          <div className="mobile-drawer__theme-box">
            <span className="mobile-drawer__theme-title">Aparência do site:</span>
            <ThemeToggle className="theme-toggle--drawer" showLabel={true} />
          </div>

          <Button
            variant="accent"
            size="lg"
            fullWidth
            href={CTA_NAV_ITEM.href}
            onClick={onClose}
          >
            {CTA_NAV_ITEM.label}
          </Button>

          <p className="mobile-drawer__info">
            Fábrica em Gravataí/RS • Atendimento Nacional<br />
            Segunda a sexta das 08h às 18h
          </p>
        </div>
      </div>
    </>
  );
};
