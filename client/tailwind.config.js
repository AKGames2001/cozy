/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'adBanner': "url('./assets/images/ad-banner.jpg')",
        'discover': "url('./assets/images/discover-1.jpg')"
      }
    },
  },
  plugins: [],
}

