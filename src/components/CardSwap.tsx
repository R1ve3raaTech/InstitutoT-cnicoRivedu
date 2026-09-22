"use client";

import Link from "next/link";
import { useState } from "react";
import type { CSSProperties } from "react";

type CardSwapItem = { title: string; slug: string };

type CardSwapProps = {
  items: readonly CardSwapItem[];
};

/** Controlled, keyboard-friendly local adaptation of React Bits Card Swap. */
export default function CardSwap({ items }: CardSwapProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const move = (direction: 1 | -1) => {
    setActiveIndex((current) => (current + direction + items.length) % items.length);
  };

  return (
    <div className="card-swap" aria-label="Cursos destacados">
      <div className="card-swap__stack" aria-live="polite">
        {items.map((item, index) => {
          const offset = (index - activeIndex + items.length) % items.length;
          const isActive = index === activeIndex;
          return (
            <Link
              className={`card-swap__card ${isActive ? "card-swap__card--active" : ""}`}
              href={`/cursos/${item.slug}`}
              key={item.slug}
              aria-hidden={!isActive}
              tabIndex={isActive ? 0 : -1}
              style={{ "--card-offset": offset, "--card-x": `${offset * 10}px`, "--card-y": `${offset * -6}px` } as CSSProperties}
            >
              <span className="card-swap__number">0{index + 1}</span>
              <strong>{item.title}</strong>
              <span className="card-swap__arrow" aria-hidden="true">↗</span>
            </Link>
          );
        })}
      </div>
      <div className="card-swap__controls">
        <span>{activeIndex + 1} / {items.length}</span>
        <button type="button" onClick={() => move(-1)} aria-label="Curso destacado anterior">←</button>
        <button type="button" onClick={() => move(1)} aria-label="Siguiente curso destacado">→</button>
      </div>
    </div>
  );
}
