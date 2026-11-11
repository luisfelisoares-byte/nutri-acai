"use client";

import { useEffect, useRef, type ReactNode } from "react";

export function ProductsLayout({ children, className }: { children: ReactNode; className: string }) {
  const main = useRef<HTMLElement>(null);

  useEffect(() => {
    const header = document.querySelector<HTMLElement>(".site-header");
    if (!header) return;

    const updateHeight = () => {
      main.current?.style.setProperty("--products-header-height", `${header.getBoundingClientRect().height}px`);
    };
    updateHeight();
    const observer = new ResizeObserver(updateHeight);
    observer.observe(header);
    return () => observer.disconnect();
  }, []);

  return <main ref={main} id="conteudo" className={className}>{children}</main>;
}
