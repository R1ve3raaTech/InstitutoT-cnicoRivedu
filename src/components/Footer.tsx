import Image from "next/image";
import SectionLink from "./SectionLink";

const footerLinks = [
  { label: "Inicio", section: "inicio" as const },
  { label: "Cursos", section: "cursos" as const },
  { label: "Nosotros", section: "nosotros" as const },
  { label: "Contacto", section: "contacto" as const },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer__top">
        <div><SectionLink className="wordmark wordmark--footer" section="inicio"><Image className="brand-logo brand-logo--footer" src="/logo-rivedu.png" alt="Instituto Técnico Rivedu" width={64} height={64} /><span><strong>Instituto Técnico</strong><small>Rivedu</small></span></SectionLink><p className="footer-motto">Tu futuro, nuestra misión.</p></div>
        <div className="footer-links" aria-label="Enlaces del pie de página">{footerLinks.map((link) => <SectionLink section={link.section} key={link.section}>{link.label}</SectionLink>)}</div>
        <div className="footer-contact"><a href="tel:+50660118430">+506 6011-8430</a><a href="tel:+50672634928">+506 7263-4928</a><a href="mailto:direccionrivedu@gmail.com">direccionrivedu@gmail.com</a></div>
      </div>
      <div className="container footer__bottom"><span>© {new Date().getFullYear()} Instituto Técnico Rivedu</span><span>Costa Rica</span></div>
    </footer>
  );
}
