/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        canvas: '#FFFFFF',
        sand: '#F7F3EA',
        ink: '#22281F',
        forest: {
          DEFAULT: '#1B4A3F',
          light: '#2F6B5A',
          dark: '#0F2E27',
        },
        gold: {
          DEFAULT: '#C99A3E',
          light: '#E4C070',
          dark: '#9C7527',
        },
        sky: {
          DEFAULT: '#4A7C8C',
          light: '#7FA9B6',
        },
        clay: {
          DEFAULT: '#B9683F',
          light: '#D69370',
        },
      },
      fontFamily: {
        display: ['"Fraunces"', 'ui-serif', 'Georgia', 'serif'],
        body: ['"Inter"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        prose: '68ch',
      },
      borderRadius: {
        sm: '2px',
        DEFAULT: '4px',
        lg: '8px',
      },
    },
  },
  plugins: [],
}

