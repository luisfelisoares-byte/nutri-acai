"use client";

import { useEffect, useReducer, useRef, useState, useSyncExternalStore, type KeyboardEvent, type PointerEvent } from "react";
import Image from "next/image";
import hero1 from "../../../assets/imagens hero/hero1.jpg";
import hero2 from "../../../assets/imagens hero/hero2.jpg";
import hero3 from "../../../assets/imagens hero/hero3.png";
import styles from "./hero-carousel.module.css";

const slides = [
  { image: hero3, label: "Açaí com Guaraná — embalagem de 5 litros" },
  { image: hero2, label: "Seleção de açaís, cremes e frozen" },
  { image: hero1, label: "Seleção de copos de açaí" },
];

type State = { active: number; failed: number[]; revision: number };
type Action = { type: "move"; direction: number } | { type: "select" | "error"; index: number };
function nextAvailable(current: number, direction: number, failed: number[]) {
  for (let step = 1; step <= slides.length; step++) {
    const index = (current + direction * step + slides.length) % slides.length;
    if (!failed.includes(index)) return index;
  }
  return current;
}
function reducer(state: State, action: Action): State {
  if (action.type === "error") {
    if (state.failed.includes(action.index)) return state;
    const failed = [...state.failed, action.index];
    return { failed, active: state.active === action.index ? nextAvailable(state.active, 1, failed) : state.active, revision: state.revision + 1 };
  }
  const active = action.type === "move" ? nextAvailable(state.active, action.direction, state.failed)
    : state.failed.includes(action.index) ? state.active : action.index;
  return { ...state, active, revision: state.revision + 1 };
}
function subscribeMotion(callback: () => void) {
  const query = window.matchMedia("(prefers-reduced-motion: reduce)");
  query.addEventListener("change", callback);
  return () => query.removeEventListener("change", callback);
}
function subscribeVisibility(callback: () => void) {
  document.addEventListener("visibilitychange", callback);
  return () => document.removeEventListener("visibilitychange", callback);
}
const motionSnapshot = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const visibilitySnapshot = () => document.visibilityState === "visible";

export function HeroCarousel() {
  const [state, dispatch] = useReducer(reducer, { active: 0, failed: [], revision: 0 });
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [interacting, setInteracting] = useState(false);
  const pointer = useRef<{ id: number; x: number; y: number } | null>(null);
  const reducedMotion = useSyncExternalStore(subscribeMotion, motionSnapshot, () => true);
  const visible = useSyncExternalStore(subscribeVisibility, visibilitySnapshot, () => false);
  const canPlay = !reducedMotion && state.failed.length < slides.length - 1;
  const running = canPlay && !paused && !hovered && !focused && !interacting && visible;

  useEffect(() => {
    if (!running || state.failed.length >= slides.length - 1) return;
    const timer = window.setTimeout(() => dispatch({ type: "move", direction: 1 }), 3500);
    return () => window.clearTimeout(timer);
  }, [running, state]);

  function onKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      event.preventDefault();
      dispatch({ type: "move", direction: event.key === "ArrowLeft" ? -1 : 1 });
    } else if (event.key === "Home" || event.key === "End") {
      event.preventDefault();
      const order = event.key === "Home" ? [0, 1, 2] : [2, 1, 0];
      const index = order.find(index => !state.failed.includes(index));
      if (index !== undefined) dispatch({ type: "select", index });
    }
  }
  function onPointerDown(event: PointerEvent<HTMLDivElement>) {
    if (!event.isPrimary || event.button !== 0) return;
    pointer.current = { id: event.pointerId, x: event.clientX, y: event.clientY };
    setInteracting(true);
    if (event.pointerType === "mouse") {
      event.preventDefault();
      event.currentTarget.setPointerCapture(event.pointerId);
    }
  }
  function cancelPointer() {
    pointer.current = null;
    setInteracting(false);
  }
  function onPointerUp(event: PointerEvent<HTMLDivElement>) {
    const start = pointer.current;
    if (start?.id === event.pointerId) {
      const dx = event.clientX - start.x, dy = event.clientY - start.y;
      if (Math.abs(dx) >= 40 && Math.abs(dx) > Math.abs(dy) * 1.4) {
        dispatch({ type: "move", direction: dx < 0 ? 1 : -1 });
      }
    }
    cancelPointer();
  }

  return <div className={styles.carousel} role="region" aria-roledescription="carrossel" aria-label="Destaques de produtos"
    onPointerEnter={event => { if (event.pointerType === "mouse") setHovered(true); }}
    onPointerLeave={() => setHovered(false)}
    onFocusCapture={() => setFocused(true)}
    onBlurCapture={event => { if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false); }}
    onKeyDown={onKeyDown} data-playing={running}>
    <div className={styles.viewport} id="hero-slides">
      {slides.map((slide, index) => <div key={slide.label}
        className={styles.slide}
        data-active={state.active === index} aria-hidden={state.active !== index}
        role="group" aria-roledescription="slide" aria-label={`${index + 1} de ${slides.length}`}>
        {state.failed.includes(index) ? <p className={styles.unavailable}>As imagens estão indisponíveis no momento.</p>
          : <Image src={slide.image} alt={`Nutri Açaí: ${slide.label}`} fill draggable={false}
            sizes="(min-width: 900px) 100vw, (max-width: 899px) 100vw, 54vw"
            preload={index === 0} onError={() => dispatch({ type: "error", index })} />}
      </div>)}
      <div className={styles.gesture} aria-hidden="true" data-dragging={interacting}
        onPointerDown={onPointerDown} onPointerUp={onPointerUp}
        onPointerCancel={cancelPointer} onLostPointerCapture={cancelPointer} />
    </div>
    <button type="button" className={`${styles.control} ${styles.previous}`} onClick={() => dispatch({ type: "move", direction: -1 })}
      aria-label="Slide anterior" aria-controls="hero-slides"><span aria-hidden="true">‹</span></button>
    <div className={styles.indicators} role="group" aria-label="Escolher destaque">
      {slides.map((slide, index) => <button type="button" key={slide.label}
        className={styles.indicator} aria-label={`Mostrar slide ${index + 1}: ${slide.label}`}
        aria-pressed={state.active === index} aria-controls="hero-slides" disabled={state.failed.includes(index)}
        onClick={() => dispatch({ type: "select", index })}><span aria-hidden="true" /></button>)}
    </div>
    <button type="button" className={`${styles.control} ${styles.next}`} onClick={() => dispatch({ type: "move", direction: 1 })}
      aria-label="Próximo slide" aria-controls="hero-slides"><span aria-hidden="true">›</span></button>
    <button type="button" className={`${styles.control} ${styles.playback}`} onClick={() => setPaused(current => !current)} disabled={!canPlay}
      aria-label={!canPlay ? "Reprodução automática desativada" : paused ? "Reproduzir apresentação automática" : "Pausar apresentação automática"}>
      <svg aria-hidden="true" width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
        {paused || !canPlay ? <path d="M4 2v10l8-5z" /> : <path d="M3 2h3v10H3zm5 0h3v10H8z" />}
      </svg>
    </button>
    <span className="sr-only" role="status" aria-live={running ? "off" : "polite"} aria-atomic="true">Slide {state.active + 1} de {slides.length}: {slides[state.active].label}</span>
  </div>;
}
