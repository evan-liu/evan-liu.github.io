import colors from 'tailwindcss/colors'
import starlightPlugin from '@astrojs/starlight-tailwind'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        accent: colors.indigo,
        gray: colors.zinc,

        'sl-white': 'var(--sl-color-white)',
        'sl-gray-1': 'var(--sl-color-gray-1)',
        'sl-gray-2': 'var(--sl-color-gray-2)',
        'sl-gray-3': 'var(--sl-color-gray-3)',
        'sl-gray-4': 'var(--sl-color-gray-4)',
        'sl-gray-5': 'var(--sl-color-gray-5)',
        'sl-gray-6': 'var(--sl-color-gray-6)',
        'sl-black': 'var(--sl-color-black)',
        'sl-accent-low': 'var(--sl-color-accent-low)',
        'sl-accent': 'var(--sl-color-accent)',
        'sl-accent-high': 'var(--sl-color-accent-high)',
      },
    },
  },
  plugins: [starlightPlugin()],
}
