import type * as Preset from '@docusaurus/preset-classic'
import type { Config } from '@docusaurus/types'
import { themes as prismThemes } from 'prism-react-renderer'

export default {
  title: "Evan's Garden",
  favicon: 'img/favicon.ico',

  url: 'https://evan-liu.github.io',
  baseUrl: '/',

  organizationName: 'evan-liu',
  projectName: 'evan-liu.github.io',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          sidebarCollapsed: false,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    navbar: {
      title: '',
      logo: {
        alt: 'Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'garden',
          position: 'left',
          label: "🌱 Evan's Digital Garden",
        },
        {
          type: 'html',
          value: `<a href="https://github.com/evan-liu/evan-liu.github.io" style="display: flex">
            <img src="https://img.shields.io/github/stars/evan-liu/evan-liu.github.io" alt="GitHub Stars">
          </a>`,
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [],
      copyright: `Copyright © ${new Date().getFullYear()} Evan Liu. \
        Built with <a href="https://docusaurus.io/" target="_blank">Docusaurus</a>.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'ruby'],
    },
  } satisfies Preset.ThemeConfig,
} satisfies Config
