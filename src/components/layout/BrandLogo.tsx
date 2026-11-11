import Image from "next/image";
import styles from "./brand-logo.module.css";

export function BrandLogo({ footer = false }: { footer?: boolean }) {
  return <Image src="/media/brand/logo.png" alt="Nutri Açaí" width={1336} height={1376} unoptimized className={footer ? styles.footer : styles.header} />;
}
