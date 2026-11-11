import type { Metadata } from "next";
import { ActionLink } from "@/components/ui/ActionLink";
import { site } from "@/config/site";
import { publishedSupplierGroups, confirmedSupplierUrl } from "@/content/suppliers";
import { CitySearch } from "./CitySearch";
import styles from "./distributors.module.css";

export const metadata: Metadata = {
  title: "Distribuidores | Nutri Açaí",
  description: "Consulte o diretório de distribuidores Nutri Açaí por município. Dados em preparação.",
  robots: { index: false, follow: false },
};

export default async function DistributorsPage({ searchParams }: { searchParams: Promise<{ municipio?: string | string[] }> }) {
  const query = await searchParams;
  const city = typeof query.municipio === "string" ? query.municipio.trim() : "";
  const published = publishedSupplierGroups();
  const cities = [...new Set(published.map(group => `${group.city} / ${group.state}`))].sort((a, b) => a.localeCompare(b, "pt-BR"));
  const groups = published.filter(group => !city || [group.city, `${group.city} / ${group.state}`]
    .some(name => name.localeCompare(city, "pt-BR", { sensitivity: "base" }) === 0));
  return <main id="conteudo" className={`container ${styles.page}`}>
    <header className={styles.intro}>
      <p className="eyebrow">Distribuidores</p>
      <h1>Encontre a Nutri Açaí<br /><span>mais perto de você.</span></h1>
      <p>Consulte os contatos por município e UF. Enquanto o diretório é preparado, fale com a equipe Nutri Açaí para informações sobre atendimento na sua região.</p>
      {published.length === 0 && <div className={styles.notice}><strong>Diretório em preparação</strong><p>Estamos organizando os dados dos distribuidores. Os municípios serão disponibilizados para consulta após a confirmação das informações.</p></div>}
    </header>
    <CitySearch cities={cities} initialValue={city} />
    <section id="diretorio" tabIndex={-1} className={styles.directory} aria-labelledby="directory-title">
      <div className={styles.sectionTitle}><h2 id="directory-title">Diretório por município</h2><span>Dados em confirmação</span></div>
      {groups.length === 0 && <p className={styles.empty}>{city ? "Não há distribuidores cadastrados para o município informado." : "Ainda não há distribuidores cadastrados para consulta."}</p>}
      {groups.map(group => <section key={group.id} className={styles.group} aria-labelledby={group.id}>
        <header className={styles.groupHeader}><span className={styles.state}>{group.state}</span><div><h3 id={group.id}>{group.city} / {group.state}</h3>{group.illustrative && <p>Agrupamento ilustrativo. Não indica distribuidor confirmado no município.</p>}</div></header>
        <div className={styles.grid}>{group.suppliers.filter(supplier => supplier.publicationStatus !== "draft").map(supplier => {
          const whatsapp = confirmedSupplierUrl(supplier, "whatsapp");
          const catalog = confirmedSupplierUrl(supplier, "catalog");
          const confirmed = supplier.confirmationStatus === "confirmed" && supplier.publicationStatus === "approved";
          return <article key={supplier.id} className={styles.card} data-supplier-id={supplier.id}>
            {!confirmed && <p className={styles.badge}>EXEMPLO — DADOS PENDENTES DE CONFIRMAÇÃO</p>}
            <h4>{confirmed && supplier.tradeName ? supplier.tradeName : "Nome comercial a confirmar"}</h4>
            <dl>
              <div><dt>Cidade / UF</dt><dd>{confirmed && supplier.city && supplier.state ? `${supplier.city} / ${supplier.state}` : "Localização a confirmar"}</dd></div>
              <div><dt>Telefone / WhatsApp</dt><dd>{confirmed && supplier.phone ? supplier.phone : "Contato a confirmar"}</dd></div>
              <div><dt>Regiões atendidas</dt><dd>{confirmed && supplier.servedRegions.length ? supplier.servedRegions.join(", ") : "Área de atendimento a confirmar"}</dd></div>
              <div><dt>Catálogo próprio</dt><dd>{catalog ? "Disponível para consulta" : "Disponibilidade a confirmar"}</dd></div>
            </dl>
            <div className={styles.actions}>
              {whatsapp ? <ActionLink href={whatsapp}>Falar com distribuidor</ActionLink> : <span className={styles.pending}>WhatsApp pendente</span>}
              {catalog ? <ActionLink href={catalog} secondary>Ver catálogo do distribuidor</ActionLink> : <span className={styles.pending}>Catálogo pendente</span>}
            </div>
          </article>;
        })}</div>
      </section>)}
    </section>
    <aside className={styles.contact} aria-labelledby="institutional-title">
      <div><p className="eyebrow">Contato institucional · Nutri Açaí</p><h2 id="institutional-title">Converse com a nossa equipe.</h2><p>Para informações sobre atendimento, entre em contato diretamente com a Nutri Açaí.</p><p className={styles.phone}>{site.phone}</p></div>
      <ActionLink href={site.whatsapp}>Falar com a Nutri Açaí</ActionLink>
    </aside>
  </main>;
}

