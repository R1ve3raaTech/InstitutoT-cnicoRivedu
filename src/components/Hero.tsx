import Image from "next/image";
import SectionLink from "./SectionLink";
import WhatsAppChooser from "./WhatsAppChooser";
import CardSwap from "./CardSwap";
import SplitText from "./SplitText";

const featuredCourses = [
  { title: "Excel", slug: "excel-desde-cero" },
  { title: "Inglés Conversacional", slug: "ingles-conversacional" },
  { title: "Bachillerato por Madurez", slug: "bachillerato-por-madurez" },
  { title: "CCNA", slug: "ccna" },
] as const;

export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="container hero__grid">
        <div className="hero__copy">
          <p className="eyebrow"><span /> Formación para avanzar</p>
          <SplitText text="Cursos y capacitaciones para seguir aprendiendo." highlight="aprendiendo." />
          <p className="hero__intro">En Instituto Técnico Rivedu encontrará opciones de formación en tecnología, idiomas, educación y otras áreas. Explore los cursos y consulte cómo inscribirse.</p>
          <div className="hero__actions">
            <SectionLink className="button-primary" section="cursos">Explorar cursos <span aria-hidden="true">↓</span></SectionLink>
            <WhatsAppChooser label="Consultar por WhatsApp" variant="secondary" />
          </div>
        </div>
        <div className="hero-visual" aria-label="Áreas de formación del Instituto Técnico Rivedu">
          <div className="hero-visual__topline"><span>Instituto Técnico Rivedu</span><span>01—04</span></div>
          <div className="hero-visual__stage">
            <span className="hero-visual__grid" aria-hidden="true" />
            <span className="hero-visual__ring hero-visual__ring--outer" aria-hidden="true" />
            <span className="hero-visual__ring hero-visual__ring--inner" aria-hidden="true" />
            <Image className="hero-visual__logo" src="/logo-rivedu.png" alt="" width={280} height={280} priority />
            <span className="hero-visual__caption">Aprendizaje<br />con dirección.</span>
          </div>
          <CardSwap items={featuredCourses} />
        </div>
      </div>
    </section>
  );
}
