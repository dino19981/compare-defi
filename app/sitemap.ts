import type { MetadataRoute } from 'next';
import { Routes } from 'shared/config';

const routes = Object.values(Routes);

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${process.env.BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.9,
    alternates: {
      languages: {
        ru: `${process.env.BASE_URL}/ru${route}`,
        en: `${process.env.BASE_URL}/en${route}`,
      },
    },
  }));
}
