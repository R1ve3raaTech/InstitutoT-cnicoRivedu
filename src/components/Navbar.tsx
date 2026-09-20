"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import WhatsAppChooser from "./WhatsAppChooser";

const links = [
  { label: "Inicio", href: "/#inicio" },
  { label: "Cursos", href: "/#cursos" },
  { label: "Nosotros", href: "/#nosotros" },
  { label: "Contacto", href: "/#contacto" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <header className="site-header">
      <nav className="container nav" aria-label="Navegación principal">
        <Link className="wordmark" href="/#inicio" onClick={() => setMenuOpen(false)}>
          <Image className="brand-logo brand-logo--nav" src="/logo-rivedu.png" alt="Instituto Técnico Rivedu" width={52} height={52} priority />
          <span><strong>Instituto Técnico</strong><small>Rivedu</small></span>
        </Link>
        <button type="button" className="menu-toggle" aria-expanded={menuOpen} aria-controls="main-menu" aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"} onClick={() => setMenuOpen((current) => !current)}>
          <span aria-hidden="true">{menuOpen ? "×" : "☰"}</span>
        </button>
        <div className={`nav-menu ${menuOpen ? "nav-menu--open" : ""}`} id="main-menu">
          <div className="nav-links">
            {links.map((link) => <a href={link.href} key={link.href} onClick={() => setMenuOpen(false)}>{link.label}</a>)}
          </div>
          <WhatsAppChooser label="Inscríbase" message="Hola, me gustaría recibir información para inscribirme en el Instituto Técnico Rivedu." className="nav-cta" />
        </div>
      </nav>
    </header>
  );
}
