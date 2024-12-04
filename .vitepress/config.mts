import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Ut!lz",
  description: "My own store for my small UI components",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Components', link: '/components/status-badge.md' },
    ],

    sidebar: [
      {
        text: 'Introduction',
        link: "introduction"
      },
      {
        text: 'Components',
        items: [
          { text: 'Password Show/Hide Toggle', link: '/components/password-toggle' },
          { text: 'Status Badge', link: '/components/status-badge' },
          { text: 'Social Share', link: '/components/social-share' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/kshetritej/utils.kshetritej.com.np'}
    ]
  }
})
