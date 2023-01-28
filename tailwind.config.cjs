/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        socializer: '#2C74B3',
        explorer: '#205295',
        achiever: '#144272',
        killer: '#0A2647',
        neutral: '#2C74B3',
        emphasis: '#fffafa',
      },
    },
  },
  plugins: [],
};
