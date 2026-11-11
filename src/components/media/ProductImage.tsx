import Image from "next/image";
import { productImages } from "@/content/productImages";
import { MediaPlaceholder } from "./MediaPlaceholder";
import styles from "./product-image.module.css";

export function ProductImage({ id, name, volume, tone }: { id: string; name: string; volume: string; tone: string }) {
  const file = productImages[id];
  if (!file) return <MediaPlaceholder tone={tone} />;
  const temporary = id === "acai-guarana-10l" || id === "acai-guarana-5l";
  return <figure className={styles.figure} data-product-image={id}>
    <div className={styles.image}><Image src={`/media/products/${file}`} alt={`${name} — ${volume}, ${temporary ? "imagem temporária, substituição pendente" : "imagem do acervo para prévia"}`} fill sizes="(max-width: 639px) 100vw, (max-width: 999px) 50vw, 33vw" /></div>
    <figcaption>{temporary ? "Imagem temporária · substituição pendente" : "Imagem do acervo · validação final pendente"}</figcaption>
  </figure>;
}
