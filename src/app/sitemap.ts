import type { MetadataRoute } from "next";
import { courses } from "../data/courses";
import { siteConfig } from "../lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.url,
    },
    ...courses.map((course) => ({
      url: `${siteConfig.url}/cursos/${course.slug}`,
    })),
  ];
}
