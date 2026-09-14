import React, { useState, useEffect, useMemo } from 'react';
import {
  MapPin,
  Search,
  MessageCircle,
  ArrowRight,
  TrendingUp,
  Building2,
  Info,
  X,
  FileText
} from 'lucide-react';
import { Container } from '../../components/ui/Container/Container';
import { Section } from '../../components/ui/Section/Section';
import { Button } from '../../components/ui/Button/Button';
import { Badge } from '../../components/ui/Badge/Badge';
import { BRAND_SLOGAN } from '../../data/companyData';
import { OFFICIAL_DISTRIBUTORS, DEMO_PARTNERS, DEMO_DISTRIBUTORS } from '../../data/distributorsData';
import { buildWhatsAppUrl, WHATSAPP_NUMBERS } from '../../utils/whatsapp';
import './WhereToFind.css';

// Lista de estados presentes nos dados demonstrativos e opção geral
const FILTER_STATES = [
  'Todos os Estados',
  'RS',
  'SC',
  'PR',
  'SP',
  'MG',
  'RJ'
];

export const WhereToFind: React.FC = () => {
  // Configuração Semântica de SEO
  useEffect(() => {
    document.title = 'Encontre um Distribuidor | Nutri Açaí';

    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute(
      'content',
      'Saiba como encontrar os produtos da Nutri Açaí ou consulte o atendimento comercial para verificar o fornecimento na sua cidade e estado.'
    );

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Filtros de busca operando sobre os dados demonstrativos
  const [selectedState, setSelectedState] = useState('Todos os Estados');
  const [searchCity, setSearchCity] = useState('');
  const [appliedState, setAppliedState] = useState('Todos os Estados');
  const [appliedCity, setAppliedCity] = useState('');

  // Estado do Modal de Informação Demonstrativa
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [modalDistributorName, setModalDistributorName] = useState('');

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setAppliedState(selectedState);
    setAppliedCity(searchCity);
  };

  const handleOpenDemoModal = (distributorName: string) => {
    setModalDistributorName(distributorName);
    setIsDemoModalOpen(true);
  };

  const handleCloseDemoModal = () => {
    setIsDemoModalOpen(false);
  };

  // Filtragem dos dados demonstrativos
  const filteredDistributors = useMemo(() => {
    return DEMO_DISTRIBUTORS.filter((dist) => {
      const matchState =
        appliedState === 'Todos os Estados' || dist.state === appliedState;
      const matchCity =
        !appliedCity.trim() ||
        dist.city.toLowerCase().includes(appliedCity.toLowerCase().trim());
      return matchState && matchCity;
    });
  }, [appliedState, appliedCity]);

  // Mensagem contextualizada para quem quer encontrar produtos na sua região via canal oficial
  const commercialFindWhatsAppUrl = buildWhatsAppUrl(
    WHATSAPP_NUMBERS.COMMERCIAL,
    'Olá! Gostaria de saber onde encontrar os produtos da Nutri Açaí na minha região ou consultar o distribuidor mais próximo.'
  );

  const scrollToSearch = (e: React.MouseEvent) => {
    e.preventDefault();
    const searchElem = document.getElementById('procure-um-distribuidor');
    if (searchElem) {
      searchElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="where-to-find-page">
      {/* ===================================================================
          1. HERO
          =================================================================== */}
      <section className="where-hero" aria-labelledby="where-hero-title">
        <Container size="default">
          <div className="where-hero__content">
            <div className="where-hero__badge">
              <Badge variant="accent" icon={<MapPin size={14} />}>
                Rede de Atendimento
              </Badge>
            </div>

            <h1 id="where-hero-title" className="where-hero__title">
              Encontre um Distribuidor
            </h1>

            <p className="where-hero__slogan">
              "{BRAND_SLOGAN}"
            </p>

            <p className="where-hero__lead">
              A Nutri Açaí está estruturando sua rede de distribuidores homologados em todo o Brasil. A busca oficial por região será disponibilizada conforme os parceiros forem credenciados.
            </p>
          </div>
        </Container>
      </section>

      {/* ===================================================================
          2. SEÇÃO "NOSSOS DISTRIBUIDORES PARCEIROS"
          =================================================================== */}
      <Section as="section" padding="lg" background="default" className="where-partners-section" aria-labelledby="where-partners-title">
        <Container size="default">
          <div className="where-partners-header">
            <Badge variant="primary" icon={<Building2 size={14} />}>
              REDE DE PARCEIROS
            </Badge>

            <h2 id="where-partners-title" className="where-partners-title">
              Nossos Distribuidores Parceiros
            </h2>

            <p className="where-partners-subtitle">
              Conte com nossa rede de parceiros para encontrar a Nutri Açaí em diferentes regiões.
            </p>
          </div>

          {/* Lógica Oficial:
              1. Se OFFICIAL_DISTRIBUTORS.length > 0 -> exibe os parceiros oficiais homologados.
              2. Se OFFICIAL_DISTRIBUTORS.length === 0 -> exibe o status de atualização cadastral
                 e logo abaixo a PRÉVIA VISUAL dos 6 parceiros demonstrativos (DEMO_PARTNERS). */}
          {OFFICIAL_DISTRIBUTORS.length > 0 ? (
            <div className="where-partners-grid">
              {OFFICIAL_DISTRIBUTORS.map((dist) => (
                <article key={dist.id} className="where-partner-card">
                  {dist.logo ? (
                    <img src={dist.logo} alt={`Logo de ${dist.name}`} className="where-partner-card__logo" />
                  ) : (
                    <div className="where-partner-card__logo-placeholder">
                      <Building2 size={32} />
                    </div>
                  )}
                  <h3 className="where-partner-card__name">{dist.name}</h3>
                  <div className="where-partner-card__location">
                    <MapPin size={16} />
                    <span>{dist.city} — {dist.state}</span>
                  </div>
                  <span className="where-partner-card__region">{dist.region}</span>
                  {dist.description && (
                    <p className="where-partner-card__desc">{dist.description}</p>
                  )}
                  <div className="where-partner-card__actions">
                    {dist.whatsapp && (
                      <Button
                        variant="whatsapp"
                        size="sm"
                        href={buildWhatsAppUrl(dist.whatsapp, 'Olá! Gostaria de informações sobre os produtos Nutri Açaí.')}
                        target="_blank"
                        rel="noopener noreferrer"
                        leftIcon={<MessageCircle size={16} />}
                      >
                        WhatsApp
                      </Button>
                    )}
                    {dist.catalogWhatsappUrl && (
                      <Button
                        variant="outline"
                        size="sm"
                        href={dist.catalogWhatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        leftIcon={<FileText size={16} />}
                      >
                        Catálogo
                      </Button>
                    )}
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="where-partners-empty-flow">
              {/* Aviso Oficial de Atualização */}
              <div className="where-partners-status-card">
                <div className="where-partners-status-card__icon-wrap">
                  <Building2 size={32} />
                </div>

                <h3 className="where-partners-status-card__title">
                  Rede oficial em atualização cadastral
                </h3>

                <p className="where-partners-status-card__text">
                  A rede de distribuidores parceiros da Nutri Açaí está em processo de atualização cadastral. Em breve, você poderá consultar aqui os parceiros homologados por região.
                </p>

                <div className="where-partners-status-card__actions">
                  <Button
                    variant="primary"
                    size="md"
                    href="#procure-um-distribuidor"
                    onClick={scrollToSearch}
                    rightIcon={<ArrowRight size={16} />}
                  >
                    Procurar um Distribuidor
                  </Button>

                  <Button
                    variant="whatsapp"
                    size="md"
                    href={commercialFindWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    leftIcon={<MessageCircle size={16} />}
                  >
                    Falar com o Comercial
                  </Button>
                </div>
              </div>

              {/* Prévia Visual com 6 Cards Demonstrativos de Parceiros (DEMO_PARTNERS) */}
              <div className="where-partners-preview">
                <div className="where-partners-preview__header">
                  <span className="demo-indicator-pill">
                    EXEMPLO DE COMO FUNCIONARÁ
                  </span>
                  <p className="where-partners-preview__notice">
                    Os cards abaixo são apenas uma demonstração visual da futura rede de parceiros. Os distribuidores oficiais serão publicados após a confirmação e homologação cadastral da Nutri Açaí.
                  </p>
                </div>

                <div className="where-partners-demo-grid">
                  {DEMO_PARTNERS.map((partner) => (
                    <article key={partner.id} className="where-partner-card where-partner-card--demo">
                      <div className="where-partner-card__header-top">
                        <span className="where-distributor-card__tag">
                          DEMONSTRAÇÃO
                        </span>
                        <span className="where-partner-card__region">
                          {partner.region}
                        </span>
                      </div>

                      {/* Logo Placeholder Visual */}
                      <div className="where-partner-card__logo-placeholder">
                        <Building2 size={28} />
                        <span className="where-partner-card__logo-subtext">Logo do Parceiro</span>
                      </div>

                      <h4 className="where-partner-card__name">
                        {partner.name}
                      </h4>

                      <div className="where-partner-card__location">
                        <MapPin size={16} className="where-distributor-card__pin-icon" />
                        <span>{partner.city} — {partner.state}</span>
                      </div>

                      <p className="where-partner-card__desc">
                        {partner.description}
                      </p>

                      <div className="where-partner-card__actions">
                        <button
                          type="button"
                          className="where-btn-demo where-btn-demo--whatsapp"
                          onClick={() => handleOpenDemoModal(partner.name)}
                          aria-label={`Ver canal WhatsApp de ${partner.name} (Demonstração)`}
                        >
                          <MessageCircle size={16} />
                          WhatsApp (Em breve)
                        </button>

                        <button
                          type="button"
                          className="where-btn-demo where-btn-demo--catalog"
                          onClick={() => handleOpenDemoModal(partner.name)}
                          aria-label={`Ver catálogo de ${partner.name} (Demonstração)`}
                        >
                          <FileText size={16} />
                          Catálogo (Em breve)
                        </button>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          )}
        </Container>
      </Section>

      {/* ===================================================================
          3. SEÇÃO "PROCURE UM DISTRIBUIDOR" (ESTRUTURA DEMONSTRATIVA)
          =================================================================== */}
      <Section as="section" padding="lg" background="surface" className="where-search-section" id="procure-um-distribuidor" aria-labelledby="where-section-title">
        <Container size="default">
          {/* Cabeçalho da Seção com Identificação Clara */}
          <div className="where-section-header">
            <div className="where-section-badges">
              <Badge variant="primary" icon={<Building2 size={14} />}>
                Procure um Distribuidor
              </Badge>
              <span className="demo-indicator-pill">
                EXEMPLO DE COMO FUNCIONARÁ
              </span>
            </div>

            <h2 id="where-section-title" className="where-section-title">
              Encontre a Nutri Açaí perto de você
            </h2>

            <p className="where-section-desc">
              Estamos estruturando nossa rede de distribuidores homologados. Abaixo você pode visualizar como funcionará a busca por região.
            </p>

            {/* Aviso de Transparência */}
            <div className="where-notice-box" role="note">
              <Info size={18} className="where-notice-icon" />
              <p className="where-notice-text">
                <strong>Atenção:</strong> Os distribuidores exibidos nesta seção são exemplos de demonstração para pré-visualização da arquitetura. A rede oficial será publicada após a homologação e atualização cadastral dos parceiros.
              </p>
            </div>
          </div>

          {/* Área de Filtros Funcional */}
          <form className="where-search-box" onSubmit={handleSearchSubmit}>
            <div className="where-search-title">
              <Search size={20} color="var(--color-purple-primary)" />
              <span>Filtrar por Estado e Cidade (Demonstração)</span>
            </div>

            <div className="where-search-grid">
              {/* Filtro por Estado */}
              <div className="form-select-group">
                <label htmlFor="filter-state" className="form-select-label">
                  Estado
                </label>
                <select
                  id="filter-state"
                  value={selectedState}
                  onChange={(e) => setSelectedState(e.target.value)}
                  className="form-select-control"
                >
                  {FILTER_STATES.map((st) => (
                    <option key={st} value={st}>
                      {st}
                    </option>
                  ))}
                </select>
              </div>

              {/* Filtro por Cidade */}
              <div className="form-input-group">
                <label htmlFor="filter-city" className="form-select-label">
                  Cidade
                </label>
                <input
                  id="filter-city"
                  type="text"
                  placeholder="Ex: Cidade Demonstrativa..."
                  value={searchCity}
                  onChange={(e) => setSearchCity(e.target.value)}
                  className="form-input-control"
                />
              </div>

              {/* Botão de Busca */}
              <Button
                type="submit"
                variant="primary"
                size="md"
                leftIcon={<Search size={18} />}
              >
                Buscar
              </Button>
            </div>
          </form>

          {/* Grid de Cards Demonstrativos (Exatamente 6 ou filtrados) */}
          {filteredDistributors.length > 0 ? (
            <div className="where-demo-grid">
              {filteredDistributors.map((dist) => (
                <article key={dist.id} className="where-distributor-card">
                  <div className="where-distributor-card__top">
                    <span className="where-distributor-card__tag">
                      DEMONSTRAÇÃO
                    </span>
                    <span className="where-distributor-card__region">
                      {dist.region}
                    </span>
                  </div>

                  {/* Logo Placeholder */}
                  <div className="where-distributor-card__logo-placeholder">
                    <Building2 size={32} className="where-distributor-card__logo-icon" />
                    <span className="where-distributor-card__logo-text">Espaço Reservado para Logo Oficial</span>
                  </div>

                  <h3 className="where-distributor-card__name">
                    {dist.name}
                  </h3>

                  <div className="where-distributor-card__location">
                    <MapPin size={16} className="where-distributor-card__pin-icon" />
                    <span>{dist.city} — {dist.state}</span>
                  </div>

                  <p className="where-distributor-card__desc">
                    {dist.description}
                  </p>

                  <div className="where-distributor-card__status-badge">
                    <span className="where-distributor-card__status-dot" />
                    Cadastro demonstrativo
                  </div>

                  {/* Botões Visuais com Modal Informativo */}
                  <div className="where-distributor-card__actions">
                    <button
                      type="button"
                      className="where-btn-demo where-btn-demo--whatsapp"
                      onClick={() => handleOpenDemoModal(dist.name)}
                      aria-label={`Ver canal WhatsApp de ${dist.name} (Demonstração)`}
                    >
                      <MessageCircle size={16} />
                      WhatsApp (Em breve)
                    </button>

                    <button
                      type="button"
                      className="where-btn-demo where-btn-demo--catalog"
                      onClick={() => handleOpenDemoModal(dist.name)}
                      aria-label={`Ver catálogo de ${dist.name} (Demonstração)`}
                    >
                      <FileText size={16} />
                      Catálogo (Em breve)
                    </button>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="where-no-results">
              <p>Nenhum distribuidor demonstrativo encontrado para os filtros selecionados.</p>
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  setSelectedState('Todos os Estados');
                  setSearchCity('');
                  setAppliedState('Todos os Estados');
                  setAppliedCity('');
                }}
              >
                Limpar Filtros
              </Button>
            </div>
          )}

          {/* Atendimento Comercial Real via Canal Oficial Homologado */}
          <div className="where-official-contact-banner">
            <div className="where-official-contact-banner__content">
              <h3>Precisa de açaí para o seu negócio agora?</h3>
              <p>
                Enquanto os parceiros regionais concluem o credenciamento, consulte diretamente a nossa equipe comercial da fábrica.
              </p>
            </div>
            <div className="where-official-contact-banner__actions">
              <Button
                variant="whatsapp"
                size="md"
                href={commercialFindWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                leftIcon={<MessageCircle size={18} />}
              >
                Consultar Comercial: (51) 99428-1252
              </Button>

              <Button
                variant="accent"
                size="md"
                href="/seja-um-distribuidor"
                rightIcon={<ArrowRight size={18} />}
              >
                Quero ser um Distribuidor
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Modal Demonstrativo Acessível */}
      {isDemoModalOpen && (
        <div
          className="demo-modal-overlay"
          role="dialog"
          aria-modal="true"
          aria-labelledby="demo-modal-title"
          onClick={handleCloseDemoModal}
        >
          <div
            className="demo-modal-container"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="demo-modal-header">
              <div className="demo-modal-icon-wrap">
                <Info size={24} />
              </div>
              <h3 id="demo-modal-title" className="demo-modal-title">
                Cadastro Demonstrativo
              </h3>
              <button
                type="button"
                className="demo-modal-close"
                onClick={handleCloseDemoModal}
                aria-label="Fechar janela"
              >
                <X size={20} />
              </button>
            </div>

            <p className="demo-modal-text">
              O card <strong>{modalDistributorName}</strong> é apenas um exemplo visual demonstrando a futura integração da nossa rede parceira.
            </p>
            <p className="demo-modal-text">
              Os canais oficiais de WhatsApp e catálogo direto serão disponibilizados após a homologação formal de cada distribuidor.
            </p>

            <div className="demo-modal-footer">
              <Button
                variant="primary"
                size="md"
                onClick={handleCloseDemoModal}
              >
                Entendi
              </Button>

              <Button
                variant="whatsapp"
                size="md"
                href={commercialFindWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                leftIcon={<MessageCircle size={16} />}
              >
                Falar com a Fábrica
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* ===================================================================
          3. CONEXÃO COM A LINHA DE PRODUTOS
          =================================================================== */}
      <section className="where-products-connect" aria-labelledby="where-products-title">
        <Container size="default">
          <div className="where-products-card">
            <h2 id="where-products-title">
              Conheça nosso catálogo oficial de produtos
            </h2>

            <p>
              Consulte nossa linha completa: Food Service (5L a 12L), Potes de Varejo de 1,5L e copos Nutrinho com sobretampa de paçoca ou leite em pó.
            </p>

            <div className="where-products-card__actions">
              <Button
                variant="outline-white"
                size="lg"
                href="/produtos"
                rightIcon={<ArrowRight size={18} />}
              >
                Ver Catálogo de Produtos
              </Button>

              <Button
                variant="accent"
                size="lg"
                href="/seja-um-distribuidor"
                leftIcon={<TrendingUp size={18} />}
              >
                SEJA UM DISTRIBUIDOR
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default WhereToFind;
