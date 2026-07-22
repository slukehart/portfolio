export default defineNuxtConfig({
  compatibilityDate: '2026-07-21',
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      title: 'Spencer Lukehart',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'Spencer Lukehart — senior full-stack software engineer. Full-stack product engineering and AI: production LLM agents, code knowledge graphs, and generative UI.'
        }
      ],
      link: [{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }]
    }
  }
})
