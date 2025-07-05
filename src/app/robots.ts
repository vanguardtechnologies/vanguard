import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/dashboard/',
          '/admin/',
          '/_next/',
          '/auth/error',
        ],
      },
    ],
    sitemap: 'https://vanguard.tech/sitemap.xml',
  }
}