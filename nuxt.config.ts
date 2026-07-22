const siteUrl = 'https://slukehart.github.io/portfolio'
const siteTitle = 'Spencer Lukehart'
const siteDescription =
  'Spencer Lukehart — senior full-stack software engineer. Full-stack product engineering and AI: production LLM agents, code knowledge graphs, and generative UI.'

export default defineNuxtConfig({
  compatibilityDate: '2026-07-21',
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      title: siteTitle,
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: siteDescription },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: siteTitle },
        { property: 'og:description', content: siteDescription },
        { property: 'og:url', content: `${siteUrl}/` },
        { property: 'og:image', content: `${siteUrl}/og-image.png` },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: siteTitle },
        { name: 'twitter:description', content: siteDescription },
        { name: 'twitter:image', content: `${siteUrl}/og-image.png` }
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/svg+xml',
          href: `${process.env.NUXT_APP_BASE_URL ?? '/'}favicon.svg`
        }
      ]
    }
  }
})
