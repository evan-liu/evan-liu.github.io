import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'
import tailwind from '@astrojs/tailwind'

export default defineConfig({
  site: 'https://evanliu.dev',
  integrations: [
    starlight({
      title: 'EvanLiu.dev',
      social: { github: 'https://github.com/evan-liu/evan-liu.github.io' },
      sidebar: [
        {
          label: 'Productivity',
          items: [
            'productivity/lazy-developer',
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
      ],
      customCss: ['./src/tailwind.css'],
      components: {
        Footer: './src/components/Footer.astro',
      },
    }),
    tailwind({ applyBaseStyles: false }),
  ],
})
