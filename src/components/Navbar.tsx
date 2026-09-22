"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import SectionLink, { type LandingSection } from "./SectionLink";
import WhatsAppChooser from "./WhatsAppChooser";
import BottomNavigation, { NavigationIcon } from "./BottomNavigation";

const links: Array<{ label: string; section: LandingSection; icon: "home" | "book" | "cap" | "message" }> = [
  { label: "Inicio", section: "inicio", icon: "home" },
  { label: "Cursos", section: "cursos", icon: "book" },
  { label: "Nosotros", section: "nosotros", icon: "cap" },
  { label: "Contacto", section: "contacto", icon: "message" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<LandingSection>(pathname === "/" ? "inicio" : "cursos");

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
    if (pathname !== "/") return;

    const observedSections = links.map(({ section }) => document.getElementById(section)).filter((section): section is HTMLElement => Boolean(section));
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) setActiveSection(visible.target.id as LandingSection);
    }, { rootMargin: "-18% 0px -62% 0px", threshold: [0, .25, .5, .75] });

    observedSections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [pathname]);

  const selectSection = (section: LandingSection) => setActiveSection(section);
  const visibleActiveSection = pathname === "/" ? activeSection : "cursos";

  return (
    <>
      <header className={`site-header ${isScrolled ? "site-header--scrolled" : ""}`}>
        <nav className="container nav" aria-label="Navegación principal">
          <SectionLink className="wordmark" section="inicio" onClick={() => selectSection("inicio")}>
            <Image className="brand-logo brand-logo--nav" src="/logo-rivedu.png" alt="Instituto Técnico Rivedu" width={52} height={52} priority />
            <span><strong>Instituto Técnico</strong><small>Rivedu</small></span>
          </SectionLink>
          <div className="nav-menu" id="main-menu">
            <div className="nav-links">
              {links.map((link) => <SectionLink className={`nav-link ${visibleActiveSection === link.section ? "nav-link--active" : ""}`} section={link.section} key={link.section} onClick={() => selectSection(link.section)} aria-current={visibleActiveSection === link.section ? "page" : undefined}><NavigationIcon name={link.icon} /><span>{link.label}</span></SectionLink>)}
            </div>
            <WhatsAppChooser label="Inscríbase" message="Hola, me gustaría recibir información para inscribirme en el Instituto Técnico Rivedu." className="nav-cta" icon={<NavigationIcon name="arrow" />} />
          </div>
        </nav>
      </header>
      <BottomNavigation activeSection={visibleActiveSection} onSectionSelect={selectSection} />
    </>
  );
}
