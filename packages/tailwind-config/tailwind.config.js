/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
   
      // Or if using `src` directory:
      "./src/**/*.{js,ts,jsx,tsx,mdx}",

      // packages content
      '../../packages/ui/**/*.{js,ts,jsx,tsx,mdx}'
    ],
    theme: {
      extend: {
        colors: {
          primary: {
            solid: 'var(--tw-color-primary-solid)',
            light: 'var(--tw-color-primary-light)',
            dark: 'var(--tw-color-primary-dark)',
          },
          dark: '#222222',
        },
      },
    },
    plugins: [],
  }