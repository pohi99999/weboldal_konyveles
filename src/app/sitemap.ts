import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://konyveles.pohankaestarsa.com'
  
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    // Ha lesznek aloldalak (pl. /szolgaltatasok, /blog), ide kerülnek
  ]
}
