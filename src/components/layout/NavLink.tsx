"use client";

import { useSyncExternalStore, type ComponentPropsWithoutRef } from "react";
import { usePathname } from "next/navigation";

function subscribe(callback: () => void) {
  window.addEventListener("hashchange", callback);
  return () => window.removeEventListener("hashchange", callback);
}

export function NavLink({ href, ...props }: ComponentPropsWithoutRef<"a"> & { href: string }) {
  const pathname = usePathname();
  const hash = useSyncExternalStore(subscribe, () => window.location.hash, () => "");
  const [path, fragment] = href.split("#");
  const active = pathname === path && (!fragment || hash === `#${fragment}`);

  return <a {...props} href={href} className="nav-item" aria-current={active ? (fragment ? "location" : "page") : undefined} />;
}
