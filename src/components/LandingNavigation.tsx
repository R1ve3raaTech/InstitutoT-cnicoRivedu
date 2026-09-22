"use client";

import { useEffect } from "react";
import { pendingSectionKey, scrollToSection, type LandingSection } from "./SectionLink";

const sections: LandingSection[] = ["inicio", "cursos", "nosotros", "contacto"];

function isLandingSection(value: string): value is LandingSection {
  return sections.includes(value as LandingSection);
}

export default function LandingNavigation() {
  useEffect(() => {
    let pendingSection: string | null = null;

    try {
      pendingSection = window.sessionStorage.getItem(pendingSectionKey);
      if (pendingSection) window.sessionStorage.removeItem(pendingSectionKey);
    } catch {
      // Los fragmentos antiguos siguen siendo compatibles sin almacenamiento.
    }

    const hashSection = window.location.hash.replace(/^#/, "");
    const section = pendingSection || hashSection;
    if (!isLandingSection(section)) return;

    window.requestAnimationFrame(() => {
      scrollToSection(section);

      if (window.location.hash) {
        window.history.replaceState(window.history.state, "", `${window.location.pathname}${window.location.search}`);
      }
    });
  }, []);

  return null;
}
