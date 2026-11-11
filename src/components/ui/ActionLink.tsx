import type { ComponentPropsWithoutRef } from "react";
import { Arrow } from "./Arrow";

export function ActionLink({ href, children, secondary = false, ...props }: Omit<ComponentPropsWithoutRef<"a">, "className"> & { href: string; secondary?: boolean }) {
  return <a {...props} className={`action ${secondary ? "action-secondary" : "action-primary"}`} href={href}>{children}<Arrow /></a>;
}
