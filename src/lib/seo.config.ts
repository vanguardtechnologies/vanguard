import type { DefaultSeoProps } from 'next-seo'

const config: DefaultSeoProps = {
  titleTemplate: '%s | Vanguard Technology',
  defaultTitle: 'Vanguard Technology - Your Gateway to Bangladesh Defense Market',
  description: 'Premier technology-enabled strategic partner for international defense manufacturers seeking to enter and succeed in the Bangladesh defense procurement market.',
  canonical: 'https://vanguard.tech',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://vanguard.tech',
    siteName: 'Vanguard Technology',
    title: 'Vanguard Technology - Defense Market Entry Specialists',
    description: 'Transform your defense business with AI-powered market intelligence and strategic partnerships in Bangladesh.',
    images: [
      {
        url: 'https://vanguard.tech/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Vanguard Technology - Bangladesh Defense Market Gateway',
      },
    ],
  },
  twitter: {
    handle: '@vanguardtech',
    site: '@vanguardtech',
    cardType: 'summary_large_image',
  },
  additionalMetaTags: [
    {
      name: 'keywords',
      content: 'Bangladesh defense, DGDP, defense procurement, military contracts, tender intelligence, defense market entry, Bangladesh military, strategic partnerships',
    },
    {
      name: 'author',
      content: 'Vanguard Technology',
    },
    {
      property: 'og:locale:alternate',
      content: 'bn_BD',
    },
  ],
  additionalLinkTags: [
    {
      rel: 'icon',
      href: '/favicon.ico',
    },
    {
      rel: 'apple-touch-icon',
      href: '/apple-touch-icon.png',
      sizes: '180x180',
    },
    {
      rel: 'manifest',
      href: '/manifest.json',
    },
  ],
}

export default config