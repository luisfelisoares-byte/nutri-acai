import Image from "next/image";
import styles from "./preview-logo.module.css";

// Candidato autorizado somente para teste local; não representa aprovação da marca.
export function PreviewLogo({ footer = false }: { footer?: boolean }) {
  return <Image src="/media/logo-trial/logo.png" alt="Nutri Açaí" width={1336} height={1376} unoptimized className={footer ? styles.footer : styles.header} />;
}
