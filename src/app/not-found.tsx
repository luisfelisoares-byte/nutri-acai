import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { 
  Home, 
  Package, 
  MessageCircle, 
  ArrowRight, 
  FileQuestion,
  Store,
  Factory,
  Mail
} from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] py-16 md:py-24 bg-surface text-text-primary flex items-center">
      <Container size="lg" className="text-center space-y-8">
        
        {/* Badge Institucional */}
        <div className="inline-flex justify-center">
          <Badge variant="primary" size="md" icon={<FileQuestion className="w-3.5 h-3.5 text-primary" />}>
            Erro 404 • Página não encontrada
          </Badge>
        </div>

        {/* Título e Texto Amigável */}
        <div className="space-y-4 max-w-2xl mx-auto">
          <div className="text-7xl sm:text-9xl font-display font-black text-primary/15 select-none leading-none tracking-tighter">
            404
          </div>

          <h1 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-text-primary tracking-tight -mt-6 sm:-mt-8">
            Ops! Conteúdo não encontrado
          </h1>

          <p className="text-text-secondary text-base sm:text-lg leading-relaxed max-w-xl mx-auto">
            O endereço que você tentou acessar não existe, foi movido ou está temporariamente indisponível. 
            Não se preocupe: utilize os atalhos abaixo para explorar nosso catálogo industrial ou fale diretamente com a nossa equipe comercial.
          </p>
        </div>

        {/* CTAs Principais de Retenção */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-xl mx-auto pt-2">
          <Button
            href="/"
            variant="primary"
            size="lg"
            fullWidth
            className="sm:w-auto"
            leftIcon={<Home className="w-4 h-4" aria-hidden="true" />}
          >
            Voltar para o Início
          </Button>

          <Button
            href="/produtos"
            variant="outline"
            size="lg"
            fullWidth
            className="sm:w-auto"
            leftIcon={<Package className="w-4 h-4 text-primary" aria-hidden="true" />}
          >
            Explorar Catálogo
          </Button>

          <a
            href="https://wa.me/5551994281252?text=Ol%C3%A1%2C%20estava%20navegando%20no%20site%20da%20Nutri%20A%C3%A7a%C3%AD%20e%20gostaria%20de%20informa%C3%A7%C3%B5es."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 min-h-[48px] rounded-ds-md font-medium text-sm bg-emerald-600 hover:bg-emerald-700 text-white shadow-ds-sm hover:shadow-ds-md transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 select-none active:scale-[0.98]"
          >
            <MessageCircle className="w-4 h-4" aria-hidden="true" />
            <span>Falar no WhatsApp</span>
          </a>
        </div>

        {/* Navegação Rápida Adicional */}
        <div className="pt-8 border-t border-border max-w-2xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-wider text-text-muted mb-4">
            Ou navegue pelas seções institucionais
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-left">
            <Link 
              href="/a-fabrica"
              className="p-3 rounded-ds-md bg-surface-muted/60 hover:bg-surface-muted border border-border/80 text-xs text-text-secondary hover:text-text-primary transition-colors flex items-center justify-between group"
            >
              <span>A Fábrica</span>
              <ArrowRight className="w-3 h-3 opacity-60 group-hover:opacity-100 transition-opacity" />
            </Link>

            <Link 
              href="/seja-um-distribuidor"
              className="p-3 rounded-ds-md bg-surface-muted/60 hover:bg-surface-muted border border-border/80 text-xs text-text-secondary hover:text-text-primary transition-colors flex items-center justify-between group"
            >
              <span>Distribuidores</span>
              <Store className="w-3 h-3 opacity-60 group-hover:opacity-100 transition-opacity" />
            </Link>

            <Link 
              href="/marca-propria"
              className="p-3 rounded-ds-md bg-surface-muted/60 hover:bg-surface-muted border border-border/80 text-xs text-text-secondary hover:text-text-primary transition-colors flex items-center justify-between group"
            >
              <span>Marca Própria</span>
              <Factory className="w-3 h-3 opacity-60 group-hover:opacity-100 transition-opacity" />
            </Link>

            <Link 
              href="/contato"
              className="p-3 rounded-ds-md bg-surface-muted/60 hover:bg-surface-muted border border-border/80 text-xs text-text-secondary hover:text-text-primary transition-colors flex items-center justify-between group"
            >
              <span>Contato</span>
              <Mail className="w-3 h-3 opacity-60 group-hover:opacity-100 transition-opacity" />
            </Link>
          </div>
        </div>

      </Container>
    </div>
  );
}
