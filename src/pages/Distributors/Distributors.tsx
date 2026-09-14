import React, { useEffect } from 'react';
import {
  TrendingUp,
  Factory,
  Truck,
  Globe2,
  Layers,
  Award,
  Users,
  MessageCircle,
  ArrowRight,
  MapPin,
  Clock,
  ShieldCheck,
  CheckCircle2,
  Building2,
  UtensilsCrossed,
  Tag,
  Store
} from 'lucide-react';
import { Container } from '../../components/ui/Container/Container';
import { Section } from '../../components/ui/Section/Section';
import { Button } from '../../components/ui/Button/Button';
import { Badge } from '../../components/ui/Badge/Badge';
import { COMPANY_INFO, BRAND_SLOGAN } from '../../data/companyData';
import { buildWhatsAppUrl, WHATSAPP_NUMBERS } from '../../utils/whatsapp';
import './Distributors.css';

export const Distributors: React.FC = () => {
  // Configuração Semântica de SEO para a Rota
  useEffect(() => {
    document.title = 'Distribuidores — Nutri Açaí | Parcerias e Atendimento Nacional';

    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute(
      'content',
      'Distribua Nutri Açaí: indústria gaúcha em Gravataí/RS com capacidade superior a 9 toneladas/dia, laboratório próprio, frota própria e atendimento comercial direto no WhatsApp.'
    );

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Link WhatsApp Comercial pré-formatado conforme solicitação
  const commercialWhatsAppUrl = buildWhatsAppUrl(
    WHATSAPP_NUMBERS.COMMERCIAL,
    'Olá! Tenho interesse em ser distribuidor da Nutri Açaí e gostaria de conhecer as condições para parceria.'
  );

  return (
    <div className="distributors-page">
      {/* ===================================================================
          1. HERO DISTRIBUIDORES
          =================================================================== */}
      <section className="dist-hero" aria-labelledby="dist-hero-title">
        <Container size="default">
          <div className="dist-hero__content">
            <div className="dist-hero__badge">
              <Badge variant="accent" icon={<TrendingUp size={14} />}>
                Oportunidade Comercial
              </Badge>
            </div>

            <h1 id="dist-hero-title" className="dist-hero__title">
              Distribuição e Parcerias Comerciais
            </h1>

            <p className="dist-hero__slogan">
              "{BRAND_SLOGAN}"
            </p>

            <p className="dist-hero__lead">
              Indústria gaúcha em Gravataí/RS com capacidade produtiva superior a 9 toneladas por dia, laboratório próprio de controle de qualidade, frota própria e atendimento para todo o território nacional.
            </p>

            <div className="dist-hero__actions">
              <Button
                variant="accent"
                size="lg"
                href="/seja-um-distribuidor"
                rightIcon={<ArrowRight size={18} />}
              >
                Quero ser Distribuidor
              </Button>

              <Button
                variant="whatsapp"
                size="lg"
                href={commercialWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                leftIcon={<MessageCircle size={18} />}
              >
                Falar com o Comercial
              </Button>

              <Button
                variant="outline-white"
                size="lg"
                href="/produtos"
                rightIcon={<ArrowRight size={18} />}
              >
                Conheça nossos produtos
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* ===================================================================
          2. POR QUE SER DISTRIBUIDOR NUTRI AÇAÍ (DIFERENCIAIS COMPROVADOS)
          =================================================================== */}
      <Section as="section" padding="lg" background="surface" className="dist-why" aria-labelledby="dist-why-title">
        <Container size="default">
          <div className="dist-section-header">
            <Badge variant="primary" icon={<ShieldCheck size={14} />}>
              Estrutura Fabril
            </Badge>
            <h2 id="dist-why-title">
              Por que trabalhar com a Nutri Açaí
            </h2>
            <p>
              Diferenciais oficiais de uma indústria gaúcha de açaí, sorbets e derivados com padrão industrial de excelência.
            </p>
          </div>

          <div className="dist-why__grid">
            {/* Diferencial 1 */}
            <div className="dist-why-card">
              <div
                className="dist-why-card__icon-wrapper"
                style={{ backgroundColor: 'var(--color-purple-subtle)', color: 'var(--color-purple-primary)' }}
              >
                <Factory size={24} />
              </div>
              <h3 className="dist-why-card__title">Produção própria</h3>
              <p className="dist-why-card__desc">
                Controle total de ponta a ponta na fábrica em Gravataí/RS com laboratório técnico.
              </p>
            </div>

            {/* Diferencial 2 */}
            <div className="dist-why-card">
              <div
                className="dist-why-card__icon-wrapper"
                style={{ backgroundColor: 'var(--color-green-subtle)', color: 'var(--color-green-primary)' }}
              >
                <Truck size={24} />
              </div>
              <h3 className="dist-why-card__title">Frota própria</h3>
              <p className="dist-why-card__desc">
                Logística ágil e preservação da cadeia fria até a entrega.
              </p>
            </div>

            {/* Diferencial 3 */}
            <div className="dist-why-card">
              <div
                className="dist-why-card__icon-wrapper"
                style={{ backgroundColor: 'var(--color-blue-subtle)', color: 'var(--color-blue-primary)' }}
              >
                <Globe2 size={24} />
              </div>
              <h3 className="dist-why-card__title">Atendemos todo o Brasil</h3>
              <p className="dist-why-card__desc">
                Escala industrial com capacidade superior a 9 toneladas por dia para abastecer distribuidores de norte a sul.
              </p>
            </div>

            {/* Diferencial 4 */}
            <div className="dist-why-card">
              <div
                className="dist-why-card__icon-wrapper"
                style={{ backgroundColor: 'var(--color-orange-subtle)', color: 'var(--color-orange-primary)' }}
              >
                <Layers size={24} />
              </div>
              <h3 className="dist-why-card__title">Mix variado</h3>
              <p className="dist-why-card__desc">
                Diversidade de embalagens, tamanhos e combinações (Açaí, Cremes, Sorbets e Frozen).
              </p>
            </div>

            {/* Diferencial 5 */}
            <div className="dist-why-card">
              <div
                className="dist-why-card__icon-wrapper"
                style={{ backgroundColor: 'var(--color-yellow-subtle)', color: 'var(--color-yellow-dark)' }}
              >
                <Award size={24} />
              </div>
              <h3 className="dist-why-card__title">Qualidade</h3>
              <p className="dist-why-card__desc">
                Padrão industrial rigoroso aliado à cremosidade inconfundível.
              </p>
            </div>

            {/* Diferencial 6 */}
            <div className="dist-why-card">
              <div
                className="dist-why-card__icon-wrapper"
                style={{ backgroundColor: 'var(--color-purple-subtle)', color: 'var(--color-purple-light)' }}
              >
                <Users size={24} />
              </div>
              <h3 className="dist-why-card__title">Atendimento personalizado</h3>
              <p className="dist-why-card__desc">
                Relacionamento direto, humano e flexível para cada parceiro comercial.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* ===================================================================
          3. PERFIL DE PARCEIROS ATENDIDOS (DOCUMENTALMENTE COMPROVADOS)
          =================================================================== */}
      <Section as="section" padding="lg" background="default" className="dist-partners" aria-labelledby="dist-partners-title">
        <Container size="default">
          <div className="dist-section-header">
            <Badge variant="primary" icon={<Building2 size={14} />}>
              Segmentos Atendidos
            </Badge>
            <h2 id="dist-partners-title">
              Perfis de parceiros comerciais
            </h2>
            <p>
              A Nutri Açaí desenvolve e fornece produtos direcionados aos 4 segmentos oficiais do mercado:
            </p>
          </div>

          <div className="dist-partners__grid">
            {/* Público 1 */}
            <div className="dist-partner-card">
              <div className="dist-partner-card__icon">
                <Building2 size={22} />
              </div>
              <h3 className="dist-partner-card__title">Distribuidores</h3>
              <p className="dist-partner-card__desc">
                Parceiros de distribuição regional com escala de fornecimento contínuo e logística direta da fábrica.
              </p>
            </div>

            {/* Público 2 */}
            <div className="dist-partner-card">
              <div className="dist-partner-card__icon">
                <UtensilsCrossed size={22} />
              </div>
              <h3 className="dist-partner-card__title">Food Service</h3>
              <p className="dist-partner-card__desc">
                Açaiterias, sorveterias e lanchonetes com embalagens de alto rendimento de 5L a 12L.
              </p>
            </div>

            {/* Público 3 */}
            <div className="dist-partner-card">
              <div className="dist-partner-card__icon">
                <Tag size={22} />
              </div>
              <h3 className="dist-partner-card__title">Marcas Próprias (Private Label)</h3>
              <p className="dist-partner-card__desc">
                Desenvolvimento e envase de açaí, sorbets e derivados com padrão industrial de excelência e equipe técnica especializada.
              </p>
            </div>

            {/* Público 4 */}
            <div className="dist-partner-card">
              <div className="dist-partner-card__icon">
                <Store size={22} />
              </div>
              <h3 className="dist-partner-card__title">Varejo</h3>
              <p className="dist-partner-card__desc">
                Mercados, empórios e conveniências com potes de 1,5L e copos Nutrinho com sobretampa para consumo diário.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* ===================================================================
          4. ORIENTAÇÃO COMERCIAL (FLUXO DE CONTATO)
          =================================================================== */}
      <Section as="section" padding="lg" background="surface" className="dist-flow" aria-labelledby="dist-flow-title">
        <Container size="default">
          <div className="dist-section-header">
            <Badge variant="primary" icon={<CheckCircle2 size={14} />}>
              Atendimento Comercial
            </Badge>
            <h2 id="dist-flow-title">
              Como funciona o atendimento a novos distribuidores
            </h2>
            <p>
              Orientação simples e direta para contato com a nossa equipe comercial:
            </p>
          </div>

          <div className="dist-flow__grid">
            <div className="dist-flow-card">
              <span className="dist-flow-card__step">PASSO 01</span>
              <h3 className="dist-flow-card__title">Preencha o formulário ou envie WhatsApp</h3>
              <p className="dist-flow-card__desc">
                Envie suas informações pela página de cadastro ou mande uma mensagem direta para o WhatsApp Comercial: (51) 99428-1252.
              </p>
            </div>

            <div className="dist-flow-card">
              <span className="dist-flow-card__step">PASSO 02</span>
              <h3 className="dist-flow-card__title">Alinhamento de região e volume</h3>
              <p className="dist-flow-card__desc">
                Nossa equipe técnica e comercial avalia a localidade e apresenta o mix de produtos mais adequado para sua operação.
              </p>
            </div>

            <div className="dist-flow-card">
              <span className="dist-flow-card__step">PASSO 03</span>
              <h3 className="dist-flow-card__title">Atendimento e logística direta</h3>
              <p className="dist-flow-card__desc">
                Fornecimento direto da fábrica gaúcha em Gravataí/RS com frota própria e atendimento para todo o território nacional.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* ===================================================================
          5. LINHAS DE PRODUTOS PARA DISTRIBUIÇÃO
          =================================================================== */}
      <Section as="section" padding="lg" background="default" className="dist-products" aria-labelledby="dist-products-title">
        <Container size="default">
          <div className="dist-section-header">
            <Badge variant="primary" icon={<Layers size={14} />}>
              Portfólio para Distribuidores
            </Badge>
            <h2 id="dist-products-title">
              Mix oficial de produtos
            </h2>
            <p>
              Conheça as linhas completas fabricadas pela Nutri Açaí para distribuição comercial:
            </p>
          </div>

          <div className="dist-products__grid">
            {/* Linha Food Service */}
            <div className="dist-product-line-card dist-product-line-card--fs">
              <span className="dist-product-line-card__badge">Food Service</span>
              <h3 className="dist-product-line-card__title">Linha Food Service</h3>
              <span className="dist-product-line-card__volumes">Caixas 5L, 10L e Baldes 3,6L / 12L</span>
              <p className="dist-product-line-card__desc">
                Açaí tradicional e sabores, Linha Cremes e Sorbets (Leitinho, Cupuaçu e Pitaya) e Linha Frozen para açaiterias e food service.
              </p>
            </div>

            {/* Linha Varejo */}
            <div className="dist-product-line-card dist-product-line-card--vr">
              <span className="dist-product-line-card__badge">Varejo</span>
              <h3 className="dist-product-line-card__title">Linha Varejo</h3>
              <span className="dist-product-line-card__volumes">Potes de 1,5 Litros</span>
              <p className="dist-product-line-card__desc">
                Potes de 1,5L de Açaí Natural, Trufados, Zero Açúcar, Sabores, Cremes, Sorbets e Frozen para freezers de mercados e empórios.
              </p>
            </div>

            {/* Linha Nutrinho */}
            <div className="dist-product-line-card dist-product-line-card--nt">
              <span className="dist-product-line-card__badge">Nutrinho</span>
              <h3 className="dist-product-line-card__title">Linha Nutrinho</h3>
              <span className="dist-product-line-card__volumes">Copos 200ml e 220ml com sobretampa</span>
              <p className="dist-product-line-card__desc">
                Copos individuais de 220ml com sobretampa de paçoca ou leite em pó, além de opções Zero Açúcar, Pitaya e Cupuaçu de 200ml.
              </p>
            </div>
          </div>

          <div style={{ textAlign: 'center' }}>
            <Button
              variant="primary"
              size="lg"
              href="/produtos"
              rightIcon={<ArrowRight size={18} />}
            >
              Conheça nossa linha completa de produtos
            </Button>
          </div>
        </Container>
      </Section>

      {/* ===================================================================
          6. LOCALIZADOR / PLACEHOLDER DE DISTRIBUIDORES HOMOLOGADOS
          =================================================================== */}
      <Section as="section" padding="lg" background="surface" className="dist-network" aria-labelledby="dist-network-title">
        <Container size="default">
          <div className="dist-section-header">
            <Badge variant="neutral" icon={<MapPin size={14} />}>
              Onde Encontrar
            </Badge>
            <h2 id="dist-network-title">
              Rede de Distribuidores Autorizados
            </h2>
            <p>
              Consulte a presença da Nutri Açaí ou torne-se o distribuidor de referência na sua cidade.
            </p>
          </div>

          <div className="dist-network__placeholder-box">
            <div className="dist-network__placeholder-badge">
              <Clock size={14} />
              Informação em Validação Oficial
            </div>
            <h3>Relação de Distribuidores Homologados</h3>
            <p>
              A lista completa de parceiros comerciais, cidades atendidas e pontos autorizados está em fase final de homologação cadastral pela diretoria comercial da Nutri Açaí.
            </p>
            <p style={{ fontWeight: 600, color: 'var(--color-purple-primary)' }}>
              Deseja representar a Nutri Açaí ou consultar distribuidores na sua região?
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap', marginTop: '16px' }}>
              <Button
                variant="primary"
                size="md"
                href="/onde-encontrar"
                rightIcon={<ArrowRight size={16} />}
              >
                Ver Rede / Onde Encontrar
              </Button>
              <Button
                variant="accent"
                size="md"
                href="/seja-um-distribuidor"
              >
                Cadastre-se como Distribuidor
              </Button>
              <Button
                variant="whatsapp"
                size="md"
                href={commercialWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                leftIcon={<MessageCircle size={16} />}
              >
                Consultar Comercial
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* ===================================================================
          7. CTA FINAL PARA COMERCIAL
          =================================================================== */}
      <section className="dist-cta-final" aria-labelledby="dist-cta-final-title">
        <Container size="default">
          <div className="dist-cta-final__content">
            <h2 id="dist-cta-final-title">
              Seja um Distribuidor Nutri Açaí
            </h2>
            <p>
              Atendemos distribuidores, food services e marcas próprias que buscam produtos confiáveis, consistentes e com qualidade diferenciada direto da nossa fábrica gaúcha para todo o Brasil.
            </p>

            <div className="dist-cta-final__channel-info">
              <span>Canal Exclusivo para Distribuidores e Comercial B2B:</span>
              <strong>WhatsApp: {COMPANY_INFO.commercialPhone}</strong>
            </div>

            <div className="dist-cta-final__actions">
              <Button
                variant="accent"
                size="lg"
                href="/seja-um-distribuidor"
                rightIcon={<ArrowRight size={18} />}
              >
                SEJA UM DISTRIBUIDOR
              </Button>

              <Button
                variant="whatsapp"
                size="lg"
                href={commercialWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                leftIcon={<MessageCircle size={18} />}
              >
                Falar no WhatsApp Comercial
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Distributors;
