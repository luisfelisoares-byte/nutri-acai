type Props = { variant?: "hero" | "product" | "video"; label?: string; tone?: string };

export function MediaPlaceholder({ variant = "product", label = "Imagem do produto em breve", tone = "purple" }: Props) {
  return <div className={`media-placeholder media-${variant} tone-${tone}`}>
    <div className="placeholder-art" aria-hidden="true"><span /><span /><span /></div>
    <div className="placeholder-caption">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="3" y="4" width="18" height="16" rx="3" stroke="currentColor" strokeWidth="1.3" /><circle cx="8" cy="9" r="1.5" stroke="currentColor" strokeWidth="1.3" /><path d="m4 18 5-5 3 3 4-5 4 5" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" /></svg>
      <span>{label}</span><small>Espaço reservado nesta prévia</small>
    </div>
  </div>;
}
