import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { footerNavigation } from '@/data/navigation';
import { Container } from '@/components/ui/Container';
import { ShieldCheck, MapPin, Award, Instagram, ArrowUpRight, MessageCircle } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-950 text-white border-t border-white/10" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Rodapé Institucional</h2>

      {/* Faixa de Indicadores de Autoridade Industrial */}
      <div className="border-b border-white/10 py-8 bg-brand-900/50">
        <Container size="xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3.5">
              <div className="w-11 h-11 rounded-ds-lg bg-white/10 flex items-center justify-center text-secondary shrink-0">
                <ShieldCheck className="w-6 h-6" aria-hidden="true" />
              </div>
              <div>
                <p className="font-semibold text-white text-sm">Escala Industrial</p>
                <p className="text-white/60 text-xs">Produção própria e abastecimento regular</p>
              </div>
            </div>

            <div className="flex items-center justify-center md:justify-start gap-3.5">
              <div className="w-11 h-11 rounded-ds-lg bg-white/10 flex items-center justify-center text-secondary shrink-0">
                <Award className="w-6 h-6" aria-hidden="true" />
              </div>
              <div>
                <p className="font-semibold text-white text-sm">Laboratório Próprio</p>
                <p className="text-white/60 text-xs">Controle de qualidade e estabilidade de lote</p>
              </div>
            </div>

            <div className="flex items-center justify-center md:justify-start gap-3.5">
              <div className="w-11 h-11 rounded-ds-lg bg-white/10 flex items-center justify-center text-secondary shrink-0">
                <MapPin className="w-6 h-6" aria-hidden="true" />
              </div>
              <div>
                <p className="font-semibold text-white text-sm">Gravataí / RS — Brasil</p>
                <p className="text-white/60 text-xs">Fornecimento contínuo para operações B2B</p>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Conteúdo Principal do Rodapé */}
      <div className="py-12 md:py-16">
        <Container size="xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
            {/* Coluna 1 e 2: Identidade e Posicionamento */}
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-full overflow-hidden border border-white/20 bg-white flex items-center justify-center p-0.5 shrink-0">
                  <Image
                    src="/images/brand/logo-nutri-acai.webp"
                    alt="Nutri Açaí"
                    width={40}
                    height={40}
                    className="object-contain w-full h-full"
                  />
                </div>
                <div>
                  <span className="font-display font-bold text-xl text-white tracking-tight">
                    Nutri Açaí
                  </span>
                  <span className="block text-xs text-white/60 uppercase tracking-wider font-medium">
                    Nutritivo & Saboroso
                  </span>
                </div>
              </div>

              <p className="text-white/70 text-sm leading-relaxed max-w-sm">
                Indústria de açaí, cremes, sorbets e frozens localizada em Gravataí/RS. 
                Padrão industrial com sabor artesanal para distribuidores, varejo e Food Service.
              </p>

              {/* Canais Oficiais de Contato */}
              <div className="pt-2 flex flex-col gap-2.5">
                <a
                  href="https://wa.me/5551994281252?text=Ol%C3%A1!%20Gostaria%20de%20falar%20com%20a%20equipe%20da%20Nutri%20A%C3%A7a%C3%AD."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-3.5 py-2 rounded-ds-md bg-[#25D366]/15 hover:bg-[#25D366]/25 text-white text-xs font-semibold transition-colors focus-visible:outline-white border border-[#25D366]/30 max-w-fit"
                  aria-label="Atendimento via WhatsApp Oficial (51) 99428-1252"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366] fill-current" aria-hidden="true" />
                  <span>WhatsApp: (51) 99428-1252</span>
                </a>

                <a
                  href="https://www.instagram.com/nutriacaioficial"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-ds-md bg-white/10 hover:bg-white/20 text-white text-xs font-medium transition-colors focus-visible:outline-white max-w-fit"
                  aria-label="Acompanhe o Instagram oficial da Nutri Açaí"
                >
                  <Instagram className="w-4 h-4 text-white/90" aria-hidden="true" />
                  <span>@nutriacaioficial no Instagram</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-white/60" aria-hidden="true" />
                </a>
              </div>
            </div>

            {/* Coluna 3: Soluções Comerciais */}
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-wider text-white/90">
                Soluções
              </p>
              <ul className="space-y-2 text-sm text-white/70">
                {footerNavigation.solutions.map((item) => (
                  <li key={item.href}>
                    <Link 
                      href={item.href}
                      className="hover:text-white transition-colors focus-visible:outline-white"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Coluna 4: Eixo de Distribuidores */}
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-wider text-white/90">
                Distribuidores
              </p>
              <ul className="space-y-2 text-sm text-white/70">
                {footerNavigation.distributors.map((item) => (
                  <li key={item.href}>
                    <Link 
                      href={item.href}
                      className="hover:text-white transition-colors focus-visible:outline-white"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Coluna 5: Institucional e Contato */}
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-wider text-white/90">
                A Fábrica
              </p>
              <ul className="space-y-2 text-sm text-white/70">
                {footerNavigation.company.map((item) => (
                  <li key={item.href}>
                    <Link 
                      href={item.href}
                      className="hover:text-white transition-colors focus-visible:outline-white"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </div>

      {/* Faixa Legal Inferior */}
      <div className="border-t border-white/10 py-6 bg-brand-950 text-xs text-white/50">
        <Container size="xl" className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p>
            &copy; {currentYear} Nutri Açaí. Todos os direitos reservados. Indústria em Gravataí/RS — Atuação desde 2022.
          </p>
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 sm:gap-4 text-white/60">
            <span>Padrão Industrial com Sabor Artesanal</span>
            <span className="w-1 h-1 rounded-full bg-white/30 hidden sm:inline-block" aria-hidden="true" />
            <span>Produção Própria</span>
          </div>
        </Container>
      </div>
    </footer>
  );
};
