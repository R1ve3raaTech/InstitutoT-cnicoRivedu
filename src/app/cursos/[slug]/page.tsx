import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CourseDetail from "../../../components/CourseDetail";
import Footer from "../../../components/Footer";
import Navbar from "../../../components/Navbar";
import { courses, getCourseBySlug } from "../../../data/courses";

type CoursePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return courses.map((course) => ({ slug: course.slug }));
}

export async function generateMetadata({ params }: CoursePageProps): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourseBySlug(slug);

  if (!course) return {};

  return {
    title: `${course.title} | Instituto Técnico Rivedu`,
    description: `Consulte información sobre el curso ${course.title} de Instituto Técnico Rivedu.`,
  };
}

export default async function CoursePage({ params }: CoursePageProps) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);

  if (!course) notFound();

  return <><Navbar /><CourseDetail course={course} /><Footer /></>;
}
