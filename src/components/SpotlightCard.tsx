"use client";

import type { CSSProperties, MouseEvent, ReactNode } from "react";

type SpotlightCardProps = {
  children: ReactNode;
  className?: string;
};

/**
 * Lightweight local adaptation of React Bits' Spotlight Card pattern.
 * It only tracks the pointer position and uses a CSS custom property, so it
 * adds no runtime dependency and remains inert for keyboard/touch users.
 */
export default function SpotlightCard({ children, className = "" }: SpotlightCardProps) {
  const handlePointerMove = (event: MouseEvent<HTMLElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty("--spotlight-x", `${event.clientX - bounds.left}px`);
    event.currentTarget.style.setProperty("--spotlight-y", `${event.clientY - bounds.top}px`);
  };

  const style = {
    "--spotlight-x": "50%",
    "--spotlight-y": "50%",
  } as CSSProperties;

  return (
    <article className={`spotlight-card ${className}`.trim()} onMouseMove={handlePointerMove} style={style}>
      {children}
    </article>
  );
}
