module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      screens: {
        '2xl': { max: '1535px' },
        // => @media (max-width: 1535px) { ... }

        'xl': { max: '1279px' },
        // => @media (max-width: 1279px) { ... }

        'lg': { max: '1023px' },
        // => @media (max-width: 1023px) { ... }

        'md': { max: '767px' },
        // => @media (max-width: 767px) { ... }

        'sm': { max: '639px' },
        // => @media (max-width: 639px) { ... }
      },

      fontFamily: {
        sans: ['"Inter"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
