/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        green: {
          950: '#052e19',
          900: '#064e3b',
          700: '#059669',
          500: '#34d399'
        }
      }
    },
  },
  plugins: [],
};
