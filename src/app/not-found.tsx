import { ActionLink } from "@/components/ui/ActionLink";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Página não encontrada | Nutri Açaí", robots: { index: false, follow: false } };

export default function NotFound() {
  return <main id="conteudo" className="container not-found"><p className="eyebrow">Página não encontrada</p><h1>Vamos voltar ao início?</h1><p>Não encontramos esta página. Volte ao início ou conheça nossos produtos.</p><div className="flex flex-wrap gap-4"><ActionLink href="/">Voltar ao início</ActionLink><ActionLink href="/produtos" secondary>Ver produtos</ActionLink></div></main>;
}
