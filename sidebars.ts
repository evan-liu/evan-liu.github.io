import type { SidebarsConfig } from '@docusaurus/plugin-content-docs'

export default {
  main: [
    'home',
    {
      type: 'category',
      label: 'Productivity',
      link: { type: 'generated-index' },
      items: [
        'productivity/lazy-developer',
        {
          type: 'category',
          label: '🛠 Mac',
          collapsed: true,
          link: {
            type: 'generated-index',
            title: '🛠 Tools I use on Mac',
          },
          items: [
            'productivity/mac/homebrew',
            'productivity/mac/karabiner-elements',
            'productivity/mac/raycast',
            'productivity/mac/homerow',
            'productivity/mac/shottr',
            'productivity/mac/finicky',
            'productivity/mac/squirrel',
            'productivity/mac/stats',
            'productivity/mac/hidden-bar',
          ],
        },
      ],
    },
  ],
} satisfies SidebarsConfig
