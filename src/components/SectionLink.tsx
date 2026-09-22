"use client";

import Link from "next/link";
import type { MouseEvent, ReactNode } from "react";

export type LandingSection = "inicio" | "cursos" | "nosotros" | "contacto";

export const pendingSectionKey = "rivedu:pending-section";

function scrollToSection(section: LandingSection) {
  const target = document.getElementById(section);
  if (!target) return;

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const header = document.querySelector<HTMLElement>(".site-header");
  const headerOffset = Math.ceil(header?.getBoundingClientRect().height ?? 0) + 16;
  const top = Math.max(0, target.getBoundingClientRect().top + window.scrollY - headerOffset);
  window.scrollTo({ top, behavior: prefersReducedMotion ? "auto" : "smooth" });
}

type SectionLinkProps = {
  section: LandingSection;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  "aria-current"?: "page" | undefined;
};

export default function SectionLink({ section, children, className, onClick, "aria-current": ariaCurrent }: SectionLinkProps) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.();

    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

    if (window.location.pathname === "/") {
      event.preventDefault();
      scrollToSection(section);
      return;
    }

    try {
      window.sessionStorage.setItem(pendingSectionKey, section);
    } catch {
      // La navegación sigue funcionando aunque el almacenamiento no esté disponible.
    }
  };

  return <Link className={className} href="/" onClick={handleClick} aria-current={ariaCurrent}>{children}</Link>;
}

export { scrollToSection };
