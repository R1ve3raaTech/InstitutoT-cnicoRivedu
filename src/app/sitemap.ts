import type { MetadataRoute } from "next";
import { courses } from "../data/courses";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://rivedu.com",
    },
    ...courses.map((course) => ({
      url: `https://rivedu.com/cursos/${course.slug}`,
    })),
  ];
}
