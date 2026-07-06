import { MetadataRoute } from 'next';
import { tourPackages } from '@/data/packages';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://bodhitreejourneysnepal.com';

  const packagesUrls = tourPackages.map((pkg) => ({
    url: `${baseUrl}/packages/${pkg.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  const corePages = [
    '',
    '/about',
    '/packages',
    '/pilgrimages',
    '/treks',
    '/cultural-tours',
    '/monastery-retreats',
    '/gallery',
    '/contact',
    '/travel-prep',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.9,
  }));

  return [...corePages, ...packagesUrls];
}
