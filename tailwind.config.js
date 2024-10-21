/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'hero-blue': 'rgba(2, 119, 238, 0.88)',
        secondary: 'rgba(248, 249, 250, 1)',
      },
    },
  },
  plugins: [],
};
