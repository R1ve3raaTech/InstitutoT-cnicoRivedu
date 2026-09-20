import Link from "next/link";
import type { Course } from "../data/courses";
import { getRelatedCourses } from "../data/courses";
import WhatsAppChooser from "./WhatsAppChooser";

type CourseDetailProps = {
  course: Course;
};

const detailFields = [
  ["Modalidad", "modality"],
  ["Duración", "duration"],
  ["Horarios", "schedule"],
  ["Precio", "price"],
] as const;

export default function CourseDetail({ course }: CourseDetailProps) {
  const relatedCourses = getRelatedCourses(course);
  const { educationalContent } = course;
  const hasConfirmedDetails = course.sourceStatus === "current-reference";
  const availableDetails = hasConfirmedDetails ? detailFields.filter(([, key]) => course[key]) : [];
  const message = `Hola, me gustaría recibir información sobre el curso ${course.title} de Instituto Técnico Rivedu. ¿Podrían indicarme los horarios, el precio y los requisitos de inscripción?`;

  return (
    <>
      <div className="course-detail__topline" />
      <main className="course-detail">
        <div className="container">
          <nav className="breadcrumb" aria-label="Ruta de navegación">
            <Link href="/#inicio">Inicio</Link><span aria-hidden="true">/</span><Link href="/#cursos">Cursos</Link><span aria-hidden="true">/</span><span aria-current="page">{course.title}</span>
          </nav>
          <Link className="course-detail__back" href="/#cursos">← Volver a los cursos</Link>

          <header className="course-detail__header">
            <div className="course-detail__header-copy">
              <p className="course-detail__category">{course.category}</p>
              <h1>{course.title}</h1>
              <p className="course-detail__short-description">{course.shortDescription}</p>
            </div>
          </header>

          <div className="course-education">
            <section className="course-education__intro" aria-labelledby="course-introduction">
              <h2 id="course-introduction">{educationalContent.introductionTitle}</h2>
              <p>{educationalContent.introduction}</p>
              <p>{educationalContent.overview}</p>
            </section>
            <div className="course-education__columns">
              <section className="course-education__section" aria-labelledby="course-applications">
                <h2 id="course-applications">{educationalContent.applicationsTitle}</h2>
                <ul>{educationalContent.applications.map((item) => <li key={item}>{item}</li>)}</ul>
              </section>
              <section className="course-education__section" aria-labelledby="course-audience">
                <h2 id="course-audience">{educationalContent.audienceTitle}</h2>
                <ul>{educationalContent.audience.map((item) => <li key={item}>{item}</li>)}</ul>
              </section>
            </div>
          </div>

          {hasConfirmedDetails && (
            <section className="course-official" aria-labelledby="course-official-title">
              <p className="eyebrow"><span /> Información confirmada</p>
              <h2 id="course-official-title">Detalles del curso</h2>
              {course.description && <p>{course.description}</p>}
              {availableDetails.length > 0 && (
                <dl className="course-facts">
                  {availableDetails.map(([label, key]) => <div key={key}><dt>{label}</dt><dd>{course[key]}</dd></div>)}
                </dl>
              )}
              {course.syllabus && <><h3>Temario</h3><ul className="course-detail__list">{course.syllabus.map((item) => <li key={item}>{item}</li>)}</ul></>}
              {course.requirements && <><h3>Requisitos</h3><ul className="course-detail__list">{course.requirements.map((item) => <li key={item}>{item}</li>)}</ul></>}
            </section>
          )}

          <section className="course-inquiry" aria-labelledby="course-inquiry-title">
            <div>
              <p className="eyebrow eyebrow--light"><span /> Inscripción</p>
              <h2 id="course-inquiry-title">¿Desea información sobre este curso?</h2>
              <p>Consulte los horarios, el precio, los requisitos y la disponibilidad directamente con Instituto Técnico Rivedu.</p>
            </div>
            <WhatsAppChooser label="Consultar por WhatsApp" message={message} />
          </section>

          <section className="related-courses" aria-labelledby="related-courses-title">
            <p className="eyebrow"><span /> Más opciones</p>
            <h2 id="related-courses-title">También puede explorar estos cursos</h2>
            <div className="related-courses__grid">
              {relatedCourses.map((relatedCourse) => (
                <Link className="related-course" href={`/cursos/${relatedCourse.slug}`} key={relatedCourse.slug}>
                  <span>{relatedCourse.category}</span>
                  <strong>{relatedCourse.title}</strong>
                  <small>Ver detalles <b aria-hidden="true">→</b></small>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
