import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "TP2 app web",
  description: "Revue de code et documentation",
  base: "/appweb_trpr2_doc/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Revues', link: '/code-review' }
    ],

    sidebar: [
      {
        text: 'Revues',
        items: [
          { text: 'Revue de code', link: '/code-review' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
