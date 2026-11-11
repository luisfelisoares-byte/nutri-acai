import { navigation, site } from "@/config/site";
import { Arrow } from "@/components/ui/Arrow";
import { BrandLogo } from "./BrandLogo";
import { NavLink } from "./NavLink";

export function Footer() {
  return <footer className="site-footer">
    <div className="container footer-main">
      <div><a className="brand" href="/"><BrandLogo footer /></a><p>Sabor que nutre.<br />Energia que conecta.</p></div>
      <nav aria-label="Navegação do rodapé">{navigation.map((item) => <NavLink key={item.href} href={item.href}>{item.label}</NavLink>)}<NavLink href="/#negocios">Para seu negócio</NavLink></nav>
      <div className="footer-contact"><span className="eyebrow">Vamos conversar</span><a href={site.whatsapp}>{site.phone}<Arrow diagonal /></a><span>Contato comercial pelo WhatsApp</span></div>
    </div>
    <div className="container footer-bottom"><span>Nutri Açaí · Prévia de apresentação</span><span>Conteúdo e mídias sujeitos à validação.</span><a href="/#inicio">Voltar ao início ↑</a></div>
  </footer>;
}
