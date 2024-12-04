import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Ut!lz",
  description: "My own store for my small UI components",
  srcDir: "src",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Functions', link: '/functions/status-badge.md' },
      { text: 'Components', link: '/components/password-toggle.md' },
    ],

    sidebar: [
      {
        text: 'Introduction',
        link: "introduction"
      },
      {
        text: 'Functions',
        items: [
          { text: 'Social Share', link: '/functions/social-share' },
          { text: 'Status Badge', link: '/functions/status-badge', },
        ]
      },
      {
        text: 'Components',
        items: [
          { text: 'Password Show/Hide Toggle', link: '/components/password-toggle' },
          { text: 'Dynamic Breadcrumb', link: '/components/dynamic-breadcrumb' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/kshetritej/utils.kshetritej.com.np'}
    ]
  }
})
