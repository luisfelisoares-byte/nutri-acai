"use client";

import { useEffect, useRef, useState } from "react";
import { navigation, site } from "@/config/site";
import { Arrow } from "@/components/ui/Arrow";
import { BrandLogo } from "./BrandLogo";
import { NavLink } from "./NavLink";

export function Header() {
  const [open, setOpen] = useState(false);
  const trigger = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const wide = window.matchMedia("(min-width: 1100px)");
    const closeOnDesktop = () => { if (wide.matches) setOpen(false); };
    wide.addEventListener("change", closeOnDesktop);
    return () => wide.removeEventListener("change", closeOnDesktop);
  }, []);

  return <header className="site-header" onKeyDown={(event) => {
    if (event.key === "Escape" && open) { setOpen(false); trigger.current?.focus(); }
  }}>
    <div className="container header-inner">
      <a className="brand" href="/" aria-label="Nutri Açaí — início"><BrandLogo /></a>
      <button ref={trigger} className="menu-toggle" aria-expanded={open} aria-controls="main-navigation" onClick={() => setOpen(!open)}>
        {open ? "Fechar" : "Menu"}<span aria-hidden="true">{open ? "×" : "+"}</span>
      </button>
      <nav id="main-navigation" aria-label="Navegação principal" className={`navigation ${open ? "is-open" : ""}`}>
        {navigation.map((item) => <NavLink key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</NavLink>)}
        <a href={site.whatsapp} className="header-cta" onClick={() => setOpen(false)}>Fale com a Nutri<Arrow diagonal /></a>
      </nav>
    </div>
  </header>;
}
