"use client";

import Link from "next/link";
import { useState } from "react";
import { courseCategories, courses, type CourseCategory } from "../data/courses";

export default function Courses() {
  const [activeCategory, setActiveCategory] = useState<CourseCategory>("Todos");
  const visibleCourses = activeCategory === "Todos"
    ? courses
    : courses.filter((course) => course.category === activeCategory);

  return (
    <section className="section section--courses" id="cursos">
      <div className="container">
        <div className="catalog-heading">
          <div>
            <p className="eyebrow"><span /> Oferta académica</p>
            <h2>Explore nuestros cursos.</h2>
          </div>
          <p>Seleccione un área de formación o explore todos los cursos disponibles en nuestro catálogo.</p>
        </div>

        <div className="category-list" aria-label="Categorías de cursos">
          {courseCategories.map((category) => (
            <button
              type="button"
              className={`category-button ${activeCategory === category ? "category-button--active" : ""}`}
              key={category}
              aria-pressed={activeCategory === category}
              onClick={() => setActiveCategory(category)}
            >
              {category}
              <span aria-hidden="true">{category === "Todos" ? courses.length : courses.filter((course) => course.category === category).length}</span>
            </button>
          ))}
        </div>

        <div className="course-grid" id="catalogo" aria-live="polite">
          {visibleCourses.map((course) => (
            <article className="course-card" key={course.slug}>
              <span className="course-card__accent" aria-hidden="true" />
              <div className="course-card__body">
                <span className="course-card__category">{course.category}</span>
                <h3>{course.title}</h3>
                <p className="course-card__description">{course.shortDescription}</p>
                <Link className="course-card__link" href={`/cursos/${course.slug}`}>
                  Ver detalles <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
        <p className="section-note">Para conocer horarios, precios y disponibilidad, consulte directamente con el instituto.</p>
      </div>
    </section>
  );
}
