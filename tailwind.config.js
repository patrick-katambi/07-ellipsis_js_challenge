module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'laptopSmall': '1024px',
      // => @media (min-width: 1024px) { ... }
      
      'laptopLarge': '1640px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '2560px',
      // => @media (min-width: 1280px) { ... }
    }
  },
  plugins: [],
}