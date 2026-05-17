import type { APIRoute } from 'astro'

const site = import.meta.env.SITE_URL || 'https://codex.aieania.tech'

export const GET: APIRoute = () => {
  const body = `User-agent: *\nAllow: /\n\nSitemap: ${site.replace(/\/$/, '')}/sitemap-index.xml\n`

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8'
    }
  })
}
