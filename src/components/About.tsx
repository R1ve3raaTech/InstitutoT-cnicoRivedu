import AnimatedContent from "./AnimatedContent";

export default function About() {
  return (
    <section className="section section--about" id="nosotros">
      <AnimatedContent className="container about-grid">
        <div>
          <p className="eyebrow"><span /> Sobre Rivedu</p>
          <h2>Conozca Rivedu.</h2>
        </div>
        <div className="about-copy">
          <p>En Instituto Técnico Rivedu ofrecemos cursos en áreas como tecnología, idiomas y formación académica, además de capacitaciones profesionales.</p>
          <p>Conozca nuestra oferta y comuníquese con nosotros para recibir información sobre cada programa.</p>
        </div>
      </AnimatedContent>
    </section>
  );
}
