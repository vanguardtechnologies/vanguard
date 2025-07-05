import type { Metadata } from 'next'
import { Header } from '@/components/layout/header-server'
import { Footer } from '@/components/layout/footer'
import './globals.css'

export const metadata: Metadata = {
  title: 'Vanguard Technology - Your Gateway to Bangladesh Defense Market',
  description: 'Premier technology-enabled strategic partner for international defense manufacturers seeking to enter and succeed in the Bangladesh defense procurement market.',
  keywords: 'Bangladesh defense, DGDP, defense procurement, military contracts, tender intelligence',
  authors: [{ name: 'Vanguard Technology' }],
  openGraph: {
    title: 'Vanguard Technology - Defense Market Entry Specialists',
    description: 'Transform your defense business with AI-powered market intelligence and strategic partnerships in Bangladesh.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Vanguard Technology',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vanguard Technology',
    description: 'Your Gateway to Bangladesh Defense Market',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="min-h-screen bg-background font-primary antialiased">
        <div className="relative flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}