/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      gridTemplateColumns:{
        'flow': 'repeat(auto-fit, minmax(250px, 1fr))'
      },
    },
  },
  plugins: [],
}

