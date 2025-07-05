'use client'

import { DefaultSeo } from 'next-seo'
import SEOConfig from '@/lib/seo.config'

export function SEOProvider() {
  return <DefaultSeo {...SEOConfig} />
}