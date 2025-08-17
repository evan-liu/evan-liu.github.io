import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'
import react from '@astrojs/react'
import tailwindcss from '@tailwindcss/vite'
import mermaidToSvg from './src/plugins/mermaid-to-svg.js'

export default defineConfig({
  site: 'https://evanliu.dev',
  integrations: [
    starlight({
      title: 'EvanLiu.dev',
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/evan-liu/',
        },
      ],
      sidebar: [
        {
          label: 'Productivity',
          items: [
            'productivity/lazy-developer',
            'productivity/editor-keymaps',
            {
              label: '🛠️ Tools I use on Mac',
              collapsed: true,
              autogenerate: { directory: 'productivity/mac' },
            },
          ],
        },
        {
          label: 'Software Engineering',
          autogenerate: { directory: 'software-engineering' },
        },
        // {
        //   label: 'Domain-Driven Design',
        //   items: [
        //     'ddd/ddd',
        //     'ddd/flashcards',
        //     {
        //       label: 'Strategic Design',
        //       collapsed: true,
        //     },
        //     {
        //       label: 'Tactical Design',
        //       collapsed: true,
        //     },
        //   ],
        // },
        {
          label: 'Programming',
          autogenerate: { directory: 'programming' },
        },
        {
          label: 'Stories',
          autogenerate: { directory: 'stories' },
        },
      ],
      customCss: [
        './src/styles/tailwind.css',
        './src/styles/starlight.css',
        './src/styles/mermaid.css',
      ],
    }),
    react(),
  ],
  markdown: {
    remarkPlugins: [mermaidToSvg],
  },
  vite: {
    plugins: [tailwindcss()],
  },
})
