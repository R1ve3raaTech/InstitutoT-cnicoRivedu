import Image from "next/image";
import type { Course } from "../data/courses";

type CourseArtworkProps = {
  course: Course;
};

const artworkBySlug: Record<string, { mark: string; caption: string; kind: string }> = {
  "excel-desde-cero": { mark: "EXCEL", caption: "Hojas de cálculo", kind: "grid" },
  "microsoft-office": { mark: "OFFICE", caption: "Productividad digital", kind: "squares" },
  "manipulacion-de-alimentos": { mark: "HIGIENE", caption: "Manejo responsable", kind: "food" },
  "servicio-al-cliente": { mark: "ATENCIÓN", caption: "Comunicación", kind: "dialogue" },
  "ingles-conversacional": { mark: "EN / ES", caption: "Comunicación oral", kind: "language" },
  portugues: { mark: "PT", caption: "Idioma y cultura", kind: "language" },
  "secretariado-ejecutivo": { mark: "GESTIÓN", caption: "Apoyo administrativo", kind: "documents" },
  contabilidad: { mark: "₡", caption: "Registro económico", kind: "finance" },
  ccna: { mark: "NET", caption: "Conectividad", kind: "network" },
  "bachillerato-por-madurez": { mark: "ESTUDIO", caption: "Trayectoria educativa", kind: "education" },
  "tercer-ciclo": { mark: "BASE", caption: "Educación secundaria", kind: "education" },
  "desechos-hospitalarios": { mark: "BIO", caption: "Gestión sanitaria", kind: "health" },
};

export default function CourseArtwork({ course }: CourseArtworkProps) {
  const artwork = artworkBySlug[course.slug] ?? { mark: "R", caption: course.category, kind: "default" };

  return (
    <div className={`course-artwork course-artwork--${artwork.kind} course-artwork--${course.slug}`} role="img" aria-label={`${course.title}: ${artwork.caption}`}>
      <Image className="course-artwork__image" src={`/course-artwork/${course.slug}.png`} alt="" fill sizes="(max-width: 480px) 100vw, (max-width: 800px) 50vw, 33vw" />
      <div className="course-artwork__content">
        <span className="course-artwork__mark">{artwork.mark}</span>
        <strong>{course.title}</strong>
        <small>{artwork.caption}</small>
      </div>
    </div>
  );
}
