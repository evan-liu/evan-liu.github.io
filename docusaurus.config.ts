import type * as Preset from '@docusaurus/preset-classic'
import type { Config } from '@docusaurus/types'
import { themes as prismThemes } from 'prism-react-renderer'

export default {
  title: 'Evan Liu',
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
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'main',
          position: 'left',
          label: 'Evan Liu',
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
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      defaultLanguage: 'typescript',
      additionalLanguages: ['bash', 'ruby'],
    },
  } satisfies Preset.ThemeConfig,

  plugins: [
    function tailwindPlugin(context, options) {
      return {
        name: 'tailwindcss-plugin',
        configurePostCss(postcssOptions) {
          postcssOptions.plugins.push(require('tailwindcss'))
          postcssOptions.plugins.push(require('autoprefixer'))
          return postcssOptions
        },
      }
    },
  ],
} satisfies Config
