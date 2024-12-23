/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'serif': '"Inconsolata", serif',
      },
      backgroundImage: {
        'squiggly-line-top': "url(`pattern-squiggly-line-top.svg`)",
        'text': "url('logo-mark.svg')",
      }
    },
  },
  plugins: [],
}