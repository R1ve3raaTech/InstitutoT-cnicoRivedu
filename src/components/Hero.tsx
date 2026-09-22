import Link from "next/link";
import SectionLink from "./SectionLink";
import WhatsAppChooser from "./WhatsAppChooser";

const featuredCourses = [
  { title: "Excel", slug: "excel-desde-cero" },
  { title: "Inglés Conversacional", slug: "ingles-conversacional" },
  { title: "Bachillerato por Madurez", slug: "bachillerato-por-madurez" },
  { title: "CCNA", slug: "ccna" },
];

export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="container hero__grid">
        <div className="hero__copy">
          <p className="eyebrow"><span /> Formación para avanzar</p>
          <h1>Cursos y capacitaciones para seguir <em>aprendiendo.</em></h1>
          <p className="hero__intro">En Instituto Técnico Rivedu encontrará opciones de formación en tecnología, idiomas, educación y otras áreas. Explore los cursos y consulte cómo inscribirse.</p>
          <div className="hero__actions">
            <SectionLink className="button-primary" section="cursos">Explorar cursos <span aria-hidden="true">↓</span></SectionLink>
            <WhatsAppChooser label="Consultar por WhatsApp" variant="secondary" />
          </div>
        </div>
        <div className="hero-offer" aria-label="Cursos destacados de la oferta académica">
          <div className="hero-offer__header"><span>Oferta académica</span><span aria-hidden="true">↗</span></div>
          <p className="hero-offer__title">Encuentre una opción para su próximo paso.</p>
          <div className="hero-offer__courses">
            {featuredCourses.map((course, index) => (
              <Link href={`/cursos/${course.slug}`} className="hero-course" key={course.slug}>
                <span className="hero-course__index">0{index + 1}</span>
                <span>{course.title}</span>
                <span aria-hidden="true">→</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
