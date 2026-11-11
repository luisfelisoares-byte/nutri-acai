"use client";

import { useId, useRef, useState } from "react";
import productStyles from "../produtos/products.module.css";
import styles from "./distributors.module.css";

const normalize = (value: string) => value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLocaleLowerCase("pt-BR").trim();

export function CitySearch({ cities, initialValue }: { cities: readonly string[]; initialValue: string }) {
  const id = useId();
  const input = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState(initialValue);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(-1);
  const matches = cities.filter(city => normalize(city).includes(normalize(value)));
  const expanded = open && matches.length > 0;
  const select = (city: string) => { setValue(city); input.current?.focus(); setOpen(false); setActive(-1); };

  return <section className={styles.search} aria-labelledby={`${id}-title`}>
    <h2 id={`${id}-title`}>Encontre um distribuidor na sua região</h2>
    <form action="/distribuidores#diretorio" method="get" className={productStyles.filters}>
      <div className={styles.cityField} onBlur={event => { if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false); }}>
        <label htmlFor={id}>Município</label>
        <input ref={input} id={id} name="municipio" type="search" value={value} autoComplete="off"
          placeholder="Digite o município" role="combobox" aria-autocomplete="list"
          aria-expanded={expanded} aria-controls={expanded ? `${id}-options` : undefined}
          aria-activedescendant={expanded && active >= 0 ? `${id}-option-${active}` : undefined}
          onFocus={() => { setOpen(true); setActive(-1); }}
          onClick={() => setOpen(true)}
          onChange={event => { setValue(event.target.value); setOpen(true); setActive(-1); }}
          onKeyDown={event => {
            if (event.key === "ArrowDown" || event.key === "ArrowUp") {
              event.preventDefault(); setOpen(true);
              setActive(index => matches.length ? (event.key === "ArrowDown" ? (index + 1) % matches.length : (index <= 0 ? matches.length - 1 : index - 1)) : -1);
            } else if (event.key === "Enter" && expanded && active >= 0) {
              event.preventDefault(); select(matches[active]);
            } else if (event.key === "Escape" || event.key === "Tab") {
              if (event.key === "Escape") event.preventDefault();
              setOpen(false); setActive(-1);
            }
          }} />
        {expanded && <ul id={`${id}-options`} role="listbox" aria-label="Municípios disponíveis" className={styles.suggestions}>
          {matches.map((city, index) => <li key={city} role="presentation"><button type="button" role="option" tabIndex={-1}
            id={`${id}-option-${index}`} aria-selected={value === city} data-highlighted={active === index || undefined}
            onClick={() => select(city)}>{city}</button></li>)}
        </ul>}
      </div>
      <button type="submit" className="action action-primary">Consultar</button>
      <a href="/distribuidores#diretorio" className="text-link">Limpar pesquisa</a>
    </form>
    {open && matches.length === 0 && <p role="status" className={styles.searchStatus}>{value.trim() ? "Nenhum município cadastrado corresponde à pesquisa." : "Ainda não há municípios disponíveis para consulta."}</p>}
  </section>;
}
