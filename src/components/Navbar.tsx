"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import SectionLink from "./SectionLink";
import WhatsAppChooser from "./WhatsAppChooser";

const links = [
  { label: "Inicio", section: "inicio" as const },
  { label: "Cursos", section: "cursos" as const },
  { label: "Nosotros", section: "nosotros" as const },
  { label: "Contacto", section: "contacto" as const },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let frameId = 0;

    const handleScroll = () => {
      if (frameId) return;
      frameId = window.requestAnimationFrame(() => {
        setIsScrolled(window.scrollY > 8);
        frameId = 0;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (frameId) window.cancelAnimationFrame(frameId);
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <header className={`site-header ${isScrolled ? "site-header--scrolled" : ""}`}>
      <nav className="container nav" aria-label="Navegación principal">
        <SectionLink className="wordmark" section="inicio" onClick={() => setMenuOpen(false)}>
          <Image className="brand-logo brand-logo--nav" src="/logo-rivedu.png" alt="Instituto Técnico Rivedu" width={52} height={52} priority />
          <span><strong>Instituto Técnico</strong><small>Rivedu</small></span>
        </SectionLink>
        <button type="button" className="menu-toggle" aria-expanded={menuOpen} aria-controls="main-menu" aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"} onClick={() => setMenuOpen((current) => !current)}>
          <span aria-hidden="true">{menuOpen ? "×" : "☰"}</span>
        </button>
        <div className={`nav-menu ${menuOpen ? "nav-menu--open" : ""}`} id="main-menu">
          <div className="nav-links">
            {links.map((link) => <SectionLink section={link.section} key={link.section} onClick={() => setMenuOpen(false)}>{link.label}</SectionLink>)}
          </div>
          <WhatsAppChooser label="Inscríbase" message="Hola, me gustaría recibir información para inscribirme en el Instituto Técnico Rivedu." className="nav-cta" />
        </div>
      </nav>
    </header>
  );
}
