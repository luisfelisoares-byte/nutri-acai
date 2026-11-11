import type { Metadata } from "next";
import { canonical } from "@/config/seo";
import { products, productCategories as lines, volumeInMilliliters } from "@/content/products";
import { site, whatsappLink } from "@/config/site";
import { ProductImage } from "@/components/media/ProductImage";
import { ActionLink } from "@/components/ui/ActionLink";
import styles from "./products.module.css";
import { ProductsLayout } from "./ProductsLayout";

export const metadata: Metadata = { title: "Produtos | Nutri Açaí", description: "Conheça as linhas e os formatos da Nutri Açaí e consulte a equipe comercial.", alternates: canonical("/produtos") };

type Query = { categoria?: string | string[]; volume?: string | string[] };
export default async function ProductsPage({ searchParams }: { searchParams: Promise<Query> }) {
  const query = await searchParams;
  // Compatibilidade com links anteriores à mudança de nomenclatura.
  const requestedCategory = typeof query.categoria === "string" ? query.categoria : "";
  const category = ["Linha Saudável", "Linha Zero"].includes(requestedCategory) ? "Linha Zero Açúcar" : requestedCategory;
  const volume = typeof query.volume === "string" ? query.volume : "";
  const volumes = [...new Set(products.map(product => product.volume))].sort((a, b) => volumeInMilliliters(a) - volumeInMilliliters(b));
  const invalid = (category !== "" && !lines.some(line => line.name === category)) || (volume !== "" && !volumes.includes(volume));
  const filtered = invalid ? [] : products.filter(product => (!category || product.category === category) && (!volume || product.volume === volume)).sort((a, b) => volumeInMilliliters(b.volume) - volumeInMilliliters(a.volume));

  return <ProductsLayout className={`container ${styles.page}`}>
    <header className={styles.intro}>
      <p className="eyebrow">Linhas e formatos</p>
      <h1>Conheça nossos produtos.</h1>
      <p>Explore 25 opções em seis categorias e converse com a equipe sobre os formatos para você ou seu negócio.</p>
      <aside className={styles.catalog} aria-label="Catálogo oficial em PDF">
        <div><h2>Catálogo oficial em PDF</h2><p>Esta página é uma listagem para consulta. O catálogo completo está disponível em um documento separado. {site.catalog.sizeLabel}.</p></div>
        <div className={styles.actions}><ActionLink href={site.catalog.href} target="_blank" rel="noopener noreferrer">Ver catálogo completo<span className="sr-only"> (abre em nova aba)</span></ActionLink><a className="text-link" href={site.catalog.href} download={site.catalog.filename}>Baixar catálogo PDF</a></div>
      </aside>
    </header>

    <form action="/produtos#resultados" method="get" className={styles.filters} aria-label="Filtrar produtos">
      <div><label htmlFor="categoria">Categoria</label><select id="categoria" name="categoria" defaultValue={category}>
        <option value="">Todas as categorias</option>
        {category && !lines.some(line => line.name === category) && <option value={category}>Categoria não encontrada</option>}
        {lines.map(line => <option key={line.name} value={line.name}>{line.name}</option>)}
      </select></div>
      <div><label htmlFor="volume">Volume</label><select id="volume" name="volume" defaultValue={volume}>
        <option value="">Todos os volumes</option>
        {volume && !volumes.includes(volume) && <option value={volume}>Volume não encontrado</option>}
        {volumes.map(value => <option key={value} value={value}>{value}</option>)}
      </select></div>
      <button className="action action-primary" type="submit">Aplicar filtros</button>
      <a className="text-link" href="/produtos#resultados">Limpar filtros</a>
    </form>

    <section id="resultados" tabIndex={-1} className={styles.results} aria-labelledby="results-title">
      <h2 id="results-title">{filtered.length} {filtered.length === 1 ? "produto encontrado" : "produtos encontrados"}</h2>
      {filtered.length === 0 ? <div className={styles.empty}><p>{invalid ? "Não reconhecemos os filtros deste endereço." : "Nenhum produto corresponde a essa combinação de categoria e volume."}</p><a className="text-link" href="/produtos#resultados">Ver todos os produtos</a></div> : lines.map(line => {
        const group = filtered.filter(product => product.category === line.name);
        return group.length > 0 && <section key={line.name} className={styles.group} aria-label={line.name}>
          <h3>{line.name} <span>({group.length})</span></h3>
          <div className={styles.grid}>{group.map(product => <article key={product.id} className={styles.card} data-product-id={product.id}>
            <div className={styles.media}><ProductImage id={product.id} name={product.name} volume={product.volume} tone={line.tone === "green" ? "green" : line.tone === "cream" ? "cream" : "purple"} /><span className="volume-tag">{product.volume}</span></div>
            <h4>{product.name}</h4>
            <dl><div><dt>Volume</dt><dd>{product.volume}</dd></div><div><dt>Embalagem</dt><dd>{product.packaging}</dd></div>{product.weight && <div><dt>Peso líquido</dt><dd>{product.weight}</dd></div>}</dl>
            <a className="text-link" href={whatsappLink(`${product.name} ${product.volume}`)}>Consultar pelo WhatsApp<span className="sr-only">: {product.name} {product.volume}</span></a>
          </article>)}</div>
        </section>;
      })}
    </section>
    <aside className={styles.contact}><h2>Vamos conversar?</h2><p>Fale com a equipe comercial sobre os produtos e formatos disponíveis.</p><ActionLink href={site.whatsapp}>Fale com a Nutri no WhatsApp</ActionLink></aside>
  </ProductsLayout>;
}
