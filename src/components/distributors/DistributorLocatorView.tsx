'use client';

import React, { useState, useMemo, useRef, useEffect } from 'react';
import Link from 'next/link';
import { Distributor } from '@/types/distributor';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { 
  MapPin, 
  Search, 
  RotateCcw, 
  Building2, 
  ArrowRight, 
  AlertCircle, 
  CheckCircle2, 
  Store, 
  ShoppingBag, 
  Sparkles,
  Info,
  MessageCircle,
  ChevronDown,
  X
} from 'lucide-react';

interface DistributorLocatorViewProps {
  distributors: Distributor[];
}

export const DistributorLocatorView: React.FC<DistributorLocatorViewProps> = ({ distributors }) => {
  const [selectedState, setSelectedState] = useState<string>('');
  const [selectedCity, setSelectedCity] = useState<string>('');
  const [cityInput, setCityInput] = useState<string>('');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [isCityDropdownOpen, setIsCityDropdownOpen] = useState<boolean>(false);
  const cityContainerRef = useRef<HTMLDivElement>(null);

  // Fecha o dropdown ao clicar fora do componente de cidade
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (cityContainerRef.current && !cityContainerRef.current.contains(event.target as Node)) {
        setIsCityDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Lista única de Estados disponíveis na base
  const availableStates = useMemo(() => {
    const states = Array.from(new Set(distributors.map((d) => d.state)));
    return states.sort();
  }, [distributors]);

  // Diretório de cidades com seus estados (sem duplicatas)
  const cityDirectory = useMemo(() => {
    const map = new Map<string, { city: string; state: string }>();
    distributors.forEach((d) => {
      const key = `${d.city.toLowerCase()}-${d.state}`;
      if (!map.has(key)) {
        map.set(key, { city: d.city, state: d.state });
      }
    });
    return Array.from(map.values()).sort((a, b) => a.city.localeCompare(b.city));
  }, [distributors]);

  // Sugestões de cidades filtradas pelo estado selecionado e pelo texto digitado
  const suggestedCities = useMemo(() => {
    let list = cityDirectory;
    if (selectedState) {
      list = list.filter((item) => item.state === selectedState);
    }
    const q = (cityInput || selectedCity).trim().toLowerCase();
    if (q) {
      list = list.filter((item) => item.city.toLowerCase().includes(q));
    }
    return list;
  }, [cityDirectory, selectedState, cityInput, selectedCity]);

  // Filtragem dos resultados
  const filteredDistributors = useMemo(() => {
    return distributors.filter((d) => {
      // 1. Filtro por Estado
      if (selectedState && d.state !== selectedState) {
        return false;
      }
      // 2. Filtro por Cidade (compara seleção ou digitação direta)
      const activeCity = (selectedCity || cityInput).trim().toLowerCase();
      if (activeCity) {
        const distCity = d.city.toLowerCase();
        if (distCity !== activeCity && !distCity.includes(activeCity)) {
          return false;
        }
      }
      // 3. Filtro por busca textual (nome ou bairro/região)
      if (searchTerm.trim() !== '') {
        const query = searchTerm.toLowerCase();
        const matchName = d.name.toLowerCase().includes(query);
        const matchRegions = d.coverageRegions?.some((r) => r.toLowerCase().includes(query));
        if (!matchName && !matchRegions) {
          return false;
        }
      }
      return true;
    });
  }, [distributors, selectedState, selectedCity, cityInput, searchTerm]);

  const handleStateChange = (state: string) => {
    setSelectedState(state);
    // Se a cidade atual não pertencer ao novo estado selecionado, limpa a cidade
    if (state) {
      const belongs = distributors.some(
        (d) => d.state === state && (
          d.city.toLowerCase() === selectedCity.toLowerCase() ||
          d.city.toLowerCase() === cityInput.toLowerCase()
        )
      );
      if (!belongs) {
        setSelectedCity('');
        setCityInput('');
      }
    }
    setIsCityDropdownOpen(false);
  };

  const handleCityInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setCityInput(val);
    setSelectedCity(val);
    setIsCityDropdownOpen(true);
  };

  const handleSelectCityOption = (city: string, state?: string) => {
    setCityInput(city);
    setSelectedCity(city);
    if (state && !selectedState) {
      setSelectedState(state);
    }
    setIsCityDropdownOpen(false);
  };

  const handleClearCity = () => {
    setCityInput('');
    setSelectedCity('');
    setIsCityDropdownOpen(false);
  };

  const handleReset = () => {
    setSelectedState('');
    setSelectedCity('');
    setCityInput('');
    setSearchTerm('');
    setIsCityDropdownOpen(false);
  };

  const hasActiveFilters = selectedState !== '' || selectedCity !== '' || cityInput !== '' || searchTerm !== '';

  return (
    <div className="space-y-10">
      
      {/* Informação sobre a Rede de Distribuição Regional */}
      <div className="p-5 rounded-ds-2xl bg-[#EFE3C8] border border-[#DFCBA5] text-xs flex items-start gap-3.5 shadow-ds-xs">
        <Info className="w-5 h-5 text-[#8C5D19] shrink-0 mt-0.5" aria-hidden="true" />
        <div className="space-y-1">
          <p className="font-bold text-[#1E1405] text-sm">Rede de Distribuição em Expansão</p>
          <p className="text-[#3F311B] leading-relaxed">
            Nossa rede de distribuição está em constante expansão pelo Rio Grande do Sul e demais regiões. Caso não localize um distribuidor cadastrado na sua cidade,{' '}
            <a 
              href="https://wa.me/5551994281252?text=Ol%C3%A1!%20Gostaria%20de%20consultar%20distribuidores%20ou%20atendimento%20da%20Nutri%20A%C3%A7a%C3%AD%20para%20a%20minha%20cidade."
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#583c6f] hover:text-[#463057] font-semibold underline underline-offset-2"
            >
              entre em contato direto com a fábrica pelo WhatsApp
            </a>{' '}
            para verificar o atendimento ou rota logística regional.
          </p>
        </div>
      </div>

      {/* Caixa de Filtros de Localização */}
      <div className="p-6 sm:p-8 rounded-ds-2xl bg-white border border-[#E0D0B5] shadow-ds-card space-y-6">
        
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border pb-4">
          <div className="space-y-1">
            <h2 className="font-display font-semibold text-lg text-text-primary flex items-center gap-2">
              <Search className="w-5 h-5 text-primary" aria-hidden="true" />
              Consulte por Estado e Cidade
            </h2>
            <p className="text-text-muted text-xs sm:text-sm">
              Selecione o seu estado e cidade para visualizar os pontos de atendimento disponíveis.
            </p>
          </div>

          {hasActiveFilters && (
            <button
              type="button"
              onClick={handleReset}
              className="text-xs text-primary hover:text-primary-hover font-medium inline-flex items-center gap-1.5 self-start sm:self-center focus-visible:outline-primary rounded-ds-sm"
            >
              <RotateCcw className="w-3.5 h-3.5" aria-hidden="true" />
              Limpar seleção
            </button>
          )}
        </div>

        {/* Grid dos Campos de Filtro */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          
          {/* 1. Select de Estado */}
          <div className="space-y-1.5">
            <label htmlFor="select-state" className="block text-xs font-semibold text-text-secondary uppercase tracking-wider">
              1. Estado (UF)
            </label>
            <select
              id="select-state"
              value={selectedState}
              onChange={(e) => handleStateChange(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-ds-md border border-border bg-surface text-sm text-text-primary focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary min-h-[44px]"
            >
              <option value="">Todos os Estados</option>
              {availableStates.map((uf) => (
                <option key={uf} value={uf}>
                  {uf === 'RS' ? 'Rio Grande do Sul (RS)' : uf === 'SC' ? 'Santa Catarina (SC)' : uf === 'PR' ? 'Paraná (PR)' : uf}
                </option>
              ))}
            </select>
          </div>

          {/* 2. Campo Digitável com Autocomplete de Cidade */}
          <div className="space-y-1.5 relative" ref={cityContainerRef}>
            <label htmlFor="input-city" className="block text-xs font-semibold text-text-secondary uppercase tracking-wider">
              2. Cidade
            </label>
            <div className="relative">
              <input
                id="input-city"
                type="text"
                autoComplete="off"
                value={cityInput}
                onChange={handleCityInputChange}
                onFocus={() => setIsCityDropdownOpen(true)}
                onKeyDown={(e) => {
                  if (e.key === 'Escape' || e.key === 'Enter') {
                    setIsCityDropdownOpen(false);
                  }
                }}
                placeholder={
                  selectedState
                    ? `Digite ou selecione a cidade (${selectedState})...`
                    : "Digite ou selecione a cidade..."
                }
                className="w-full pl-3.5 pr-8 py-2.5 rounded-ds-md border border-border bg-surface text-sm text-text-primary placeholder:text-text-muted focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary min-h-[44px]"
              />
              {cityInput ? (
                <button
                  type="button"
                  onClick={handleClearCity}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-text-muted hover:text-text-primary p-1 rounded focus:outline-none"
                  aria-label="Limpar cidade"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => setIsCityDropdownOpen(!isCityDropdownOpen)}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-text-muted hover:text-text-primary p-1 rounded focus:outline-none"
                  aria-label="Abrir lista de cidades"
                >
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isCityDropdownOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
                </button>
              )}
            </div>

            {/* Dropdown de Sugestões de Cidades */}
            {isCityDropdownOpen && (
              <ul 
                role="listbox" 
                className="absolute z-20 top-full left-0 right-0 mt-1 max-h-56 overflow-y-auto rounded-ds-md border border-border bg-surface shadow-ds-lg py-1 text-sm divide-y divide-border/40"
              >
                <li
                  role="option"
                  aria-selected={!selectedCity && !cityInput}
                  onClick={() => handleSelectCityOption('')}
                  className="px-3.5 py-2.5 hover:bg-surface-muted cursor-pointer text-text-secondary font-medium flex items-center justify-between text-xs"
                >
                  <span>{selectedState ? `Todas as cidades de ${selectedState}` : 'Todas as cidades cadastradas'}</span>
                  {!selectedCity && !cityInput && <CheckCircle2 className="w-3.5 h-3.5 text-primary" aria-hidden="true" />}
                </li>
                {suggestedCities.map((item) => {
                  const isSelected = (selectedCity || cityInput).toLowerCase() === item.city.toLowerCase();
                  return (
                    <li
                      key={`${item.city}-${item.state}`}
                      role="option"
                      aria-selected={isSelected}
                      onClick={() => handleSelectCityOption(item.city, item.state)}
                      className="px-3.5 py-2.5 hover:bg-surface-muted cursor-pointer text-text-primary flex items-center justify-between"
                    >
                      <div className="flex items-center gap-2">
                        <MapPin className="w-3.5 h-3.5 text-primary shrink-0" aria-hidden="true" />
                        <span className="font-medium text-xs sm:text-sm">{item.city}</span>
                        <span className="text-xs text-text-muted">({item.state})</span>
                      </div>
                      {isSelected && (
                        <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" aria-hidden="true" />
                      )}
                    </li>
                  );
                })}
                {suggestedCities.length === 0 && (cityInput || selectedCity).trim() !== '' && (
                  <li className="px-3.5 py-3 text-xs text-text-muted italic bg-surface-muted/50">
                    Nenhum distribuidor cadastrado em &quot;{cityInput || selectedCity}&quot;. Você pode manter a cidade para consultar atendimento via WhatsApp abaixo.
                  </li>
                )}
              </ul>
            )}
          </div>

          {/* Campo de Busca Livre por Nome/Bairro */}
          <div className="space-y-1.5">
            <label htmlFor="input-search" className="block text-xs font-semibold text-text-secondary uppercase tracking-wider">
              3. Busca por Bairro / Nome
            </label>
            <div className="relative">
              <input
                id="input-search"
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Ex: Zona Norte, Centro..."
                className="w-full pl-3.5 pr-9 py-2.5 rounded-ds-md border border-border bg-surface text-sm text-text-primary placeholder:text-text-muted focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary min-h-[44px]"
              />
              <Search className="w-4 h-4 text-text-muted absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" aria-hidden="true" />
            </div>
          </div>

        </div>

      </div>

      {/* Exibição dos Resultados ou Fallback */}
      {filteredDistributors.length > 0 ? (
        <div className="space-y-6">
          <div className="flex items-center justify-between text-xs text-text-muted">
            <span>
              Registros encontrados: <strong>{filteredDistributors.length}</strong>
            </span>
            <span>Atendimento comercial regional</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredDistributors.map((distributor) => (
              <div
                key={distributor.id}
                className="rounded-ds-2xl border border-[#E0D0B5] bg-white p-6 flex flex-col justify-between space-y-5 shadow-ds-sm hover:border-[#D9A441] hover:shadow-ds-card-hover hover:-translate-y-1.5 transition-all duration-300"
              >
                <div className="space-y-3">
                  
                  {/* Cabeçalho do Card */}
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      {distributor.isMock && (
                        <span className="inline-block mb-1 px-2 py-0.5 rounded text-[10px] font-semibold bg-amber-100 text-amber-900 border border-amber-300">
                          Registro de Demonstração / Teste
                        </span>
                      )}
                      <h3 className="font-display font-semibold text-lg text-text-primary">
                        {distributor.name}
                      </h3>
                    </div>
                    <div className="w-9 h-9 rounded-ds-md bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <Building2 className="w-5 h-5" aria-hidden="true" />
                    </div>
                  </div>

                  {/* Localização */}
                  <div className="flex items-center gap-2 text-sm text-text-secondary">
                    <MapPin className="w-4 h-4 text-primary shrink-0" aria-hidden="true" />
                    <span>{distributor.city} / {distributor.state}</span>
                  </div>

                  {/* Regiões atendidas */}
                  {distributor.coverageRegions && distributor.coverageRegions.length > 0 && (
                    <div className="text-xs text-text-muted space-y-1">
                      <span className="font-medium text-text-secondary">Cobertura:</span>
                      <p>{distributor.coverageRegions.join(' • ')}</p>
                    </div>
                  )}

                  {/* Linhas / Categorias Atendidas */}
                  {distributor.servedCategories && distributor.servedCategories.length > 0 && (
                    <div className="pt-2 flex flex-wrap gap-1.5">
                      {distributor.servedCategories.map((cat) => (
                        <span
                          key={cat}
                          className="inline-flex items-center px-2.5 py-1 rounded-ds-full text-[11px] font-medium bg-surface-muted border border-border text-text-secondary"
                        >
                          {cat === 'food-service' ? 'Food Service' : cat === 'varejo' ? 'Varejo 1,5L' : 'Nutrinho'}
                        </span>
                      ))}
                    </div>
                  )}

                  {distributor.address && (
                    <p className="text-xs text-text-muted pt-1">
                      Endereço: {distributor.address}
                    </p>
                  )}

                </div>

                {/* Ação Comercial (Direcionando para /contato sem WhatsApp fictício) */}
                <div className="pt-4 border-t border-border flex items-center justify-between gap-3">
                  <span className="text-xs text-text-muted">
                    Atendimento intermediado
                  </span>
                  <Button
                    href="/contato?ref=distribuidor-local"
                    variant="outline"
                    size="sm"
                    rightIcon={<ArrowRight className="w-3.5 h-3.5" />}
                  >
                    Falar com Atendimento
                  </Button>
                </div>

              </div>
            ))}
          </div>
        </div>
      ) : (
        /* Fallback Conforme Requisito Exato */
        <div className="p-8 sm:p-12 text-center rounded-ds-2xl border border-dashed border-[#DFCBA5] bg-white space-y-6 shadow-ds-sm">
          <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto">
            <AlertCircle className="w-7 h-7" aria-hidden="true" />
          </div>

          <div className="space-y-2 max-w-lg mx-auto">
            <h3 className="font-display font-semibold text-xl text-text-primary">
              Não encontramos um distribuidor cadastrado para esta região.
            </h3>
            <p className="text-text-secondary text-sm leading-relaxed">
              A ausência de cadastro nesta consulta não indica que sua cidade não seja atendida pela Nutri Açaí. 
              Nossa equipe comercial pode verificar rotas de entrega, indicar o ponto de fornecimento mais próximo ou viabilizar o atendimento direto da fábrica.
            </p>
          </div>

          {/* Ações Estratégicas de Conversão no Fallback */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <a
              href={`https://wa.me/5551994281252?text=${encodeURIComponent(
                (selectedCity || cityInput).trim()
                  ? `Olá! Não localizei distribuidor em ${(selectedCity || cityInput).trim()}${selectedState ? ` - ${selectedState}` : ''} e gostaria de verificar o atendimento comercial da Nutri Açaí para a minha região.`
                  : 'Olá! Não localizei distribuidor cadastrado na minha cidade e gostaria de verificar o atendimento da Nutri Açaí para a minha região.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-ds-md font-semibold text-sm bg-[#25D366] hover:bg-[#20ba5a] text-white shadow-ds-sm hover:shadow-ds-md transition-all duration-200"
            >
              <MessageCircle className="w-4 h-4 fill-current" aria-hidden="true" />
              <span>Consultar Atendimento no WhatsApp</span>
            </a>
            <Button
              href="/seja-um-distribuidor"
              variant="outline"
              size="md"
              rightIcon={<ArrowRight className="w-4 h-4" />}
              className="w-full sm:w-auto"
            >
              Quero ser um Distribuidor
            </Button>
            <Button
              href="/contato?assunto=distribuicao"
              variant="outline"
              size="md"
              className="w-full sm:w-auto"
            >
              Falar via Formulário
            </Button>
          </div>

          {hasActiveFilters && (
            <div>
              <button
                type="button"
                onClick={handleReset}
                className="text-xs text-text-muted hover:text-text-primary underline"
              >
                Limpar filtros e ver todos os registros disponíveis
              </button>
            </div>
          )}
        </div>
      )}

      {/* Bloco Comercial de Rodapé da Página de Localização */}
      <div className="p-8 rounded-ds-2xl bg-brand-950 text-white flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center md:text-left max-w-xl">
          <h3 className="font-display font-bold text-xl text-white">
            Deseja distribuir Nutri Açaí em sua cidade?
          </h3>
          <p className="text-white/70 text-sm leading-relaxed">
            Seja o parceiro distribuidor de referência na sua região com produtos de açaí direto da fábrica e fornecimento contínuo.
          </p>
        </div>
        <div className="shrink-0">
          <Button href="/seja-um-distribuidor" variant="white" size="md" className="shadow-ds-md">
            <span className="text-brand-950 font-semibold">Cadastrar Minha Distribuidora</span>
          </Button>
        </div>
      </div>

    </div>
  );
};
