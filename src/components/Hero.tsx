import WhatsAppChooser from "./WhatsAppChooser";

const featuredCourses = [
  "Excel",
  "Inglés Conversacional",
  "Bachillerato por Madurez",
  "CCNA",
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
            <a className="button-primary" href="#cursos">Explorar cursos <span aria-hidden="true">↓</span></a>
            <WhatsAppChooser label="Consultar por WhatsApp" variant="secondary" />
          </div>
        </div>
        <div className="hero-offer" aria-label="Cursos destacados de la oferta académica">
          <div className="hero-offer__header"><span>Oferta académica</span><span aria-hidden="true">↗</span></div>
          <p className="hero-offer__title">Encuentre una opción para su próximo paso.</p>
          <div className="hero-offer__courses">
            {featuredCourses.map((course, index) => (
              <a href="#cursos" className="hero-course" key={course}>
                <span className="hero-course__index">0{index + 1}</span>
                <span>{course}</span>
                <span aria-hidden="true">→</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
