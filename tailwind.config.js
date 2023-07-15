/** @type {import('tailwindcss').Config} */
module.exports = {  
  content: [
    './src/**/*.{html,js}',
    './public/**/*.{html,js}',
    './dist/**/*.{html,js}',
    './index.html',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}

