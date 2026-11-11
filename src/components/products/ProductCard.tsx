import type { ProductPreview } from "@/content/home";
import { ProductImage } from "@/components/media/ProductImage";
import { Arrow } from "@/components/ui/Arrow";
import { whatsappLink } from "@/config/site";

export function ProductCard({ product, tone }: { product: ProductPreview; tone: string }) {
  return <article className="product-card">
    <div className="product-media"><ProductImage id={product.id} name={product.name} volume={product.volume} tone={tone} /><span className="volume-tag">{product.volume}</span></div>
    <div className="product-info"><span className="eyebrow">{product.category}</span><h3>{product.name}</h3><a className="text-link" href={whatsappLink(`${product.name} ${product.volume}`)}>Consultar produto<span className="sr-only">: {product.name} {product.volume}</span><Arrow diagonal /></a></div>
  </article>;
}
