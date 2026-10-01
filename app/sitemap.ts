import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://infocyle.com';

  return [
    {
      url: baseUrl,
      lastModified: new Date('2026-09-30T00:00:00.000Z'),
      changeFrequency: 'monthly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date('2026-08-10T00:00:00.000Z'),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date('2026-08-10T00:00:00.000Z'),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
  ];
}
