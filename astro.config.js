import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'
import react from '@astrojs/react'
import tailwindcss from '@tailwindcss/vite'

// https://astro.build/config
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
        {
          label: 'Programming',
          autogenerate: { directory: 'programming' },
        },
        {
          label: 'Stories',
          autogenerate: { directory: 'stories' },
        },
      ],
      customCss: ['./src/tailwind.css'],
    }),
    react(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
})
