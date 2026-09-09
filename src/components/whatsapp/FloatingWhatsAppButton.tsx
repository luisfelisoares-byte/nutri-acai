'use client';

import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, ChevronRight, Store, Box, Sparkles, HelpCircle } from 'lucide-react';

const OFFICIAL_PHONE = '5551994281252';
const DISPLAY_PHONE = '(51) 99428-1252';

interface WhatsAppOption {
  id: string;
  title: string;
  subtitle: string;
  message: string;
  icon: React.ReactNode;
}

const WHATSAPP_OPTIONS: WhatsAppOption[] = [
  {
    id: 'distribuidor',
    title: 'Quero ser Distribuidor',
    subtitle: 'Expansão comercial e revenda',
    message: 'Olá! Tenho interesse em ser distribuidor da Nutri Açaí.',
    icon: <Store className="w-4 h-4 text-emerald-600" />,
  },
  {
    id: 'food-service',
    title: 'Cotação Food Service',
    subtitle: 'Caixas de 5L, 10L e Baldes',
    message: 'Olá! Gostaria de solicitar informações sobre os produtos Nutri Açaí para Food Service.',
    icon: <Box className="w-4 h-4 text-emerald-600" />,
  },
  {
    id: 'marca-propria',
    title: 'Marca Própria',
    subtitle: 'Private Label e terceirização',
    message: 'Olá! Tenho interesse em desenvolver uma linha de Marca Própria com a Nutri Açaí.',
    icon: <Sparkles className="w-4 h-4 text-emerald-600" />,
  },
  {
    id: 'outros',
    title: 'Outros Assuntos',
    subtitle: 'Atendimento e dúvidas gerais',
    message: 'Olá! Gostaria de falar com a equipe da Nutri Açaí.',
    icon: <HelpCircle className="w-4 h-4 text-emerald-600" />,
  },
];

export const FloatingWhatsAppButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Fecha o menu ao pressionar a tecla ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
        buttonRef.current?.focus();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  // Fecha o menu ao clicar fora do container
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const generateWhatsAppUrl = (message: string) => {
    return `https://wa.me/${OFFICIAL_PHONE}?text=${encodeURIComponent(message)}`;
  };

  return (
    <div 
      ref={containerRef} 
      className="fixed bottom-5 right-5 z-50 flex flex-col items-end pointer-events-auto"
      aria-label="Atendimento via WhatsApp"
    >
      {/* Popover Menu com as opções contextuais */}
      {isOpen && (
        <div 
          className="mb-3 w-[320px] sm:w-[350px] max-w-[calc(100vw-2.5rem)] rounded-2xl bg-white border border-border shadow-xl overflow-hidden animate-in fade-in slide-in-from-bottom-3 duration-200 text-text-primary"
          role="dialog"
          aria-modal="true"
          aria-label="Opções de atendimento via WhatsApp"
        >
          {/* Cabeçalho do Popover */}
          <div className="bg-[#128C7E] text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center text-white">
                <MessageCircle className="w-5 h-5 fill-current" />
              </div>
              <div>
                <h3 className="font-display font-bold text-sm leading-tight">Nutri Açaí Comercial</h3>
                <p className="text-xs text-white/80 mt-0.5">WhatsApp: {DISPLAY_PHONE}</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              aria-label="Fechar menu de WhatsApp"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Subtítulo de Orientação */}
          <div className="px-4 py-3 bg-slate-50 border-b border-border/60 text-xs text-text-secondary leading-relaxed">
            Selecione o assunto para iniciar a conversa com a mensagem ideal:
          </div>

          {/* Lista de Opções */}
          <div className="p-2 space-y-1.5 max-h-[320px] overflow-y-auto">
            {WHATSAPP_OPTIONS.map((opt) => (
              <a
                key={opt.id}
                href={generateWhatsAppUrl(opt.message)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-border/80 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366]"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0">
                    {opt.icon}
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-semibold text-text-primary group-hover:text-emerald-700 transition-colors">
                      {opt.title}
                    </p>
                    <p className="text-xs text-text-muted">
                      {opt.subtitle}
                    </p>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-text-muted group-hover:text-emerald-600 transition-colors shrink-0" />
              </a>
            ))}
          </div>

          {/* Rodapé Informativo */}
          <div className="px-4 py-2.5 bg-slate-50 border-t border-border/60 text-center text-[11px] text-text-muted">
            Atendimento comercial de fábrica • Gravataí/RS
          </div>
        </div>
      )}

      {/* Botão Flutuante Principal */}
      <button
        ref={buttonRef}
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="dialog"
        aria-label={isOpen ? "Fechar opções de WhatsApp" : "Abrir atendimento via WhatsApp oficial da Nutri Açaí"}
        className="group relative flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-semibold text-sm shadow-xl hover:shadow-2xl hover:-translate-y-1 active:translate-y-0 active:scale-95 transition-all duration-200 focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-400 cursor-pointer"
      >
        <MessageCircle className="w-5 h-5 fill-current shrink-0 group-hover:rotate-6 transition-transform" />
        <span className="hidden sm:inline font-medium">WhatsApp Comercial</span>
        
        {/* Indicador de status online */}
        <span className="flex h-2.5 w-2.5 relative">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
        </span>
      </button>
    </div>
  );
};
