import type { Metadata } from "next";
import { canonical } from "@/config/seo";
import { ActionLink } from "@/components/ui/ActionLink";
import { Arrow } from "@/components/ui/Arrow";
import { ReferenceImage } from "@/components/media/ReferenceImage";
import { HeroCarousel } from "@/components/media/HeroCarousel";
import { site, whatsappLink } from "@/config/site";
import styles from "./home.module.css";

export const metadata: Metadata = { alternates: canonical("/") };

export default function Home() {
  return <main id="conteudo">
    <section id="inicio" className={styles.hero} aria-labelledby="hero-title" data-hero="background">
      <HeroCarousel />
      <div className={`container ${styles.heroContent}`}>
        <div className={styles.heroCopy}>
          <p className={`eyebrow ${styles.heroEyebrow}`}><span className="small-rule" />Conheça a Nutri Açaí</p>
          <h1 id="hero-title">Sabor que nutre.<br /><span>Energia que<br className="desktop-break" /> conecta.</span></h1>
          <p className={styles.heroDescription}>Açaí, cremes e congelados para o seu dia a dia e para o seu negócio.</p>
          <div className={styles.heroActions}><ActionLink href="/produtos">Explore nossas linhas</ActionLink><a className="text-link" href="#negocios">Para seu negócio<Arrow diagonal /></a></div>
          <div className={styles.heroCatalog} aria-label="Catálogo completo em PDF">
            <p>Catálogo completo · {site.catalog.sizeLabel}</p>
            <div className={styles.heroCatalogActions}><ActionLink href={site.catalog.href} target="_blank" rel="noopener noreferrer">Ver catálogo completo<span className="sr-only"> (abre em nova aba)</span></ActionLink><a className="text-link" href={site.catalog.href} download={site.catalog.filename}>Baixar catálogo PDF<Arrow /></a></div>
          </div>
          <div className={styles.heroFootnote}><span className="tiny-dot" />Varejo <span aria-hidden="true">/</span> Food Service <span aria-hidden="true">/</span> Distribuição</div>
        </div>
        <div className={styles.heroSignature}><span>Nutri Açaí · Sabores & conexões</span><span>Uma marca. <strong>Diferentes possibilidades.</strong></span></div>
      </div>
    </section>

    <section id="negocios" className="section business-section" aria-labelledby="business-title"><div className="container"><div className="section-heading"><div><p className="eyebrow">Nutri para negócios</p><h2 id="business-title">Vamos levar essa<br />conexão mais longe.</h2></div><p>Escolha como você quer conversar<br />com a nossa equipe comercial.</p></div><div className="business-grid"><article id="food-service" className="business-card"><span className="eyebrow">01 / Food Service</span><h3>Nutri no seu<br />estabelecimento.</h3><p>Conheça os formatos de açaí e cremes para a sua operação.</p><ActionLink href={whatsappLink("Food Service")}>Conversar sobre Food Service</ActionLink></article><article id="distribuidores" className="business-card business-dark"><span className="eyebrow">02 / Atacado e distribuição</span><h3>Novas conversas.<br />Novas possibilidades.</h3><p>Um espaço para distribuidores, atacadistas e revendedores conhecerem a Nutri.</p><ActionLink href={whatsappLink("distribuição e revenda")} secondary>Falar sobre distribuição</ActionLink></article></div></div></section>

    <section id="sobre" className="section about-section" aria-labelledby="about-title"><div className="container about-grid"><div><p className="eyebrow">A Nutri Açaí</p><h2 id="about-title">A conexão começa<br />com uma conversa.</h2><p className="about-description">Açaí, cremes especiais e congelados. A Nutri Açaí atende Food Service, atacado, distribuidores e revendedores.</p><a href="#contato" className="text-link">Conheça a nossa equipe comercial<Arrow diagonal /></a><div className="about-signature">Sabor que nutre.<br /><strong>Energia que conecta.</strong></div></div><ReferenceImage variant="about" /></div></section>

    <section id="trabalhe-conosco" className={`section ${styles.careers}`} aria-labelledby="careers-title">
      <div className={`container ${styles.careersGrid}`}>
        <div><p className="eyebrow">Seu próximo passo</p><h2 id="careers-title">Trabalhe Conosco</h2><p className={styles.intro}>Tem interesse em fazer parte da Nutri Açaí? Prepare seu currículo para enviar quando o canal de recrutamento estiver disponível.</p></div>
        <div className={styles.careersCard}>
          <h3>Deixe seu currículo pronto</h3>
          <p>Mantenha seu currículo atualizado, preferencialmente em PDF, e informe seu nome e a área ou vaga de interesse.</p>
          <button type="button" className={`action ${styles.unavailable}`} disabled aria-describedby="careers-status">Enviar currículo pelo WhatsApp</button>
          <p id="careers-status" className={styles.status}>Envio indisponível. O canal de recrutamento está em preparação, aguardando confirmação do contato oficial do RH.</p>
        </div>
      </div>
    </section>

    <section id="contato" className="contact-section" aria-labelledby="contact-title"><div className="container contact-inner"><div><p className="eyebrow">Vamos conversar?</p><h2 id="contact-title">Seu próximo contato<br />com a Nutri começa aqui.</h2></div><div className="contact-action"><ActionLink href={site.whatsapp}>Fale com a Nutri no WhatsApp</ActionLink><p>{site.phone}</p></div></div></section>
  </main>;
}
