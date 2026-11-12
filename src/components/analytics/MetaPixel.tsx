"use client";

import { usePathname, useSearchParams } from "next/navigation";
import Script from "next/script";
import { useEffect, useRef, Suspense } from "react";

export const META_PIXEL_ID = "1117023507589158";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    _fbq?: unknown;
  }
}

function MetaPixelTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const searchString = searchParams?.toString();
  const currentUrl = `${pathname}${searchString ? `?${searchString}` : ""}`;
  const isFirstRender = useRef(true);
  const lastTrackedUrl = useRef(currentUrl);

  useEffect(() => {
    // Na montagem inicial, o script inline do Pixel já dispara fbq('track', 'PageView').
    // Ignoramos a primeira renderização para evitar PageView duplicado.
    if (isFirstRender.current) {
      isFirstRender.current = false;
      lastTrackedUrl.current = currentUrl;
      return;
    }

    // Se a rota/query não mudou de fato, evita chamadas desnecessárias ou duplicadas
    if (lastTrackedUrl.current === currentUrl) {
      return;
    }
    lastTrackedUrl.current = currentUrl;

    if (typeof window !== "undefined") {
      if (typeof window.fbq === "function") {
        window.fbq("track", "PageView");
      } else {
        // Fallback resiliente: se fbevents.js ainda estiver baixando e fbq ainda não tiver sido
        // injetado no window, enfileiramos na fila nativa do Pixel (window._fbq / fbq.queue)
        window._fbq = window._fbq || [];
        (window._fbq as unknown[]).push(["track", "PageView"]);
      }
    }
  }, [currentUrl]);

  return null;
}

export function MetaPixel() {
  return (
    <>
      <Script
        id="meta-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${META_PIXEL_ID}');
            fbq('track', 'PageView');
          `,
        }}
      />
      <Suspense fallback={null}>
        <MetaPixelTracker />
      </Suspense>
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
          alt=""
        />
      </noscript>
    </>
  );
}
