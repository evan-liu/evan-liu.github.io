/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx', './docs/**/*.mdx', './docusaurus.config.ts'],
  darkMode: ['class', '[data-theme="dark"]'],
  corePlugins: { preflight: false },
  theme: {
    extend: {},
  },
  plugins: [],
}
