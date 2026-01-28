import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://roastntoasthyd.com'
  
  const routes = [
    '',
    '/drinks',
    '/tasty-veggies',
    '/events',
    '/ambiance',
    '/music-and-socials',
    '/offers',
    '/bar-images',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  return routes
}
