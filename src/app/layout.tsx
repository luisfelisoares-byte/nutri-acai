import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MetaPixel } from "@/components/analytics/MetaPixel";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Nutri Açaí | Açaí, cremes e congelados",
  description: "Conheça as linhas e os formatos da Nutri Açaí para o seu dia a dia e para o seu negócio. Sabor que nutre. Energia que conecta.",
  robots: { index: false, follow: false },
  icons: { icon: [
    { url: "/media/brand/favicon-16.png", sizes: "16x16", type: "image/png" },
    { url: "/media/brand/favicon-32.png", sizes: "32x32", type: "image/png" },
  ] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>
        <MetaPixel />
        <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
        <div className="preview-notice">Prévia para avaliação <span aria-hidden="true">·</span> Imagens e identidade visual em validação</div>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
