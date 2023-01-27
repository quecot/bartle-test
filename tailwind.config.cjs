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
        socializer: '#F1F1F1',
        explorer: '#D9D9D9',
        achiever: '#BBBBBB',
        killer: '#888888',
        neutral: '#F4F4F4',
        'answer-blue': '#008AFF',
        'emphasis-blue': '#8A8ADD',
      },
    },
  },
  plugins: [],
};
