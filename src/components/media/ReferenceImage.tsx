import Image from "next/image";
import styles from "./reference-image.module.css";
import production from "../../../assets/produção.jpg";
import hero from "../../../assets/imagem para hero.png";

export function ReferenceImage({ variant }: { variant: "hero" | "about" }) {
  if (variant === "about") return <figure className={`${styles.figure} ${styles.about}`} data-reference-image="about">
    <Image src={production} alt="Produção da Nutri Açaí" width={3468} height={4624} sizes="(max-width: 899px) 100vw, 50vw" />
  </figure>;
  return <figure className={styles.hero} data-reference-image="hero">
    <Image src={hero} alt="Açaí com Guaraná Nutri Açaí — embalagem de 5 litros"
      fill sizes="100vw" preload />
  </figure>;
}
