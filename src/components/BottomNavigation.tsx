"use client";

import type { ReactNode } from "react";
import SectionLink, { type LandingSection } from "./SectionLink";
import WhatsAppChooser from "./WhatsAppChooser";

type IconName = "home" | "book" | "cap" | "message" | "arrow";

export function NavigationIcon({ name }: { name: IconName }) {
  const paths = {
    home: <><path d="m3 10 9-7 9 7" /><path d="M5 9.5V21h14V9.5" /><path d="M9 21v-6h6v6" /></>,
    book: <><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21.5z" /><path d="M4 5.5v16" /><path d="M8 7h8" /></>,
    cap: <><path d="m3 9 9-5 9 5-9 5z" /><path d="M7 11.2V16c2.8 2.2 7.2 2.2 10 0v-4.8" /><path d="M21 10v5" /></>,
    message: <><path d="M20 11.5a7.5 7.5 0 0 1-8 7.5 8.7 8.7 0 0 1-3.7-.8L4 20l1.4-3.6A7.3 7.3 0 0 1 4 11.5 7.5 7.5 0 0 1 12 4a7.5 7.5 0 0 1 8 7.5Z" /><path d="M8 11h.01M12 11h.01M16 11h.01" /></>,
    arrow: <><path d="M7 17 17 7" /><path d="M8 7h9v9" /></>,
  } satisfies Record<IconName, ReactNode>;

  return <svg className="bottom-nav__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>;
}

type BottomNavigationProps = {
  activeSection: LandingSection;
  onSectionSelect: (section: LandingSection) => void;
};

export default function BottomNavigation({ activeSection, onSectionSelect }: BottomNavigationProps) {
  const links: Array<{ label: string; section: LandingSection; icon: IconName }> = [
    { label: "Inicio", section: "inicio", icon: "home" },
    { label: "Cursos", section: "cursos", icon: "book" },
    { label: "Nosotros", section: "nosotros", icon: "cap" },
    { label: "Contacto", section: "contacto", icon: "message" },
  ];

  return (
    <nav className="bottom-nav" aria-label="Navegación móvil">
      {links.map((link) => (
        <SectionLink
          className={`bottom-nav__link ${activeSection === link.section ? "bottom-nav__link--active" : ""}`}
          section={link.section}
          key={link.section}
          onClick={() => onSectionSelect(link.section)}
          aria-current={activeSection === link.section ? "page" : undefined}
        >
          <NavigationIcon name={link.icon} />
          <span>{link.label}</span>
        </SectionLink>
      ))}
      <WhatsAppChooser
        label="Inscribirse"
        message="Hola, me gustaría recibir información para inscribirme en el Instituto Técnico Rivedu."
        className="bottom-nav__whatsapp"
        variant="quiet"
        icon={<NavigationIcon name="arrow" />}
      />
    </nav>
  );
}
