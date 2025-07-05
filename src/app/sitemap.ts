import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://vanguard.tech'
  
  // Static pages
  const staticPages = [
    '',
    '/about',
    '/services',
    '/services/market-entry',
    '/services/tender-intelligence',
    '/services/bid-management',
    '/services/contract-execution',
    '/market-intelligence',
    '/success',
    '/resources',
    '/contact',
    '/get-started',
    '/auth/signin',
    '/auth/signup',
  ]

  const staticUrls = staticPages.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : route.startsWith('/services') ? 0.9 : 0.8,
  }))

  // In production, you would also fetch dynamic URLs from database
  // For example: blog posts, case studies, etc.

  return staticUrls
}