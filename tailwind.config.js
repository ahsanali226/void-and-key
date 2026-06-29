/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: '#0c0c0c',
        surface: '#141414',
        line: '#303030',
        cream: '#fff7c9',
        sand: '#ffe7ca',
        amber: {
          DEFAULT: '#dd7900',
          light: '#ffc47b',
          deep: '#ff8c00',
        },
      },
      fontFamily: {
        display: ['var(--font-franie)', 'sans-serif'],
        body: ['var(--font-aeonik)', 'sans-serif'],
      },
      backgroundImage: {
        'cta-gradient': 'linear-gradient(to left, #fff0de 0%, #dd7900 100%)',
        'cta-gradient-light': 'linear-gradient(to left, #ffecca 0%, #ff8c00 100%)',
        'headline-gradient': 'linear-gradient(to right, #dd7900 0%, #ffc47b 100%)',
      },
      borderRadius: {
        pill: '106.667px',
      },
      maxWidth: {
        content: '1600px',
      },
    },
  },
  plugins: [],
};
