import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.djassapp.com',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    // Add other routes here if there are any, e.g. /about, /contact if they are separate pages
    // Currently everything seems to be on the home page with sections
  ]
}
