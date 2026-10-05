import type { MetadataRoute } from "next";
import { projectSlugs } from "./data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://imranhasan.vercel.app";

  const projectRoutes: MetadataRoute.Sitemap = projectSlugs.map((slug) => ({
    url: `${baseUrl}/projects/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: slug === "ezzewash" ? 0.9 : 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    ...projectRoutes,
  ];
}
