/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx', './docs/**/*.mdx'],
  darkMode: ['class', '[data-theme="dark"]'],
  corePlugins: { preflight: false },
  theme: {
    extend: {},
  },
  plugins: [],
}
