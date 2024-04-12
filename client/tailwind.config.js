/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'buda': ['buda'],
        'roboto': ['roboto']
      },
      backgroundImage: {
        'adBanner': "url('./assets/images/ad-banner.jpg')",
        'discover-1': "url('./assets/images/discover-1.jpg')",
        'discover-2': "url('./assets/images/discover-2.jpg')",
        'discover-3': "url('./assets/images/discover-3.jpg')",
        'discover-4': "url('./assets/images/discover-4.jpg')",
        'discover-5': "url('./assets/images/discover-5.jpg')",
        'discover-6': "url('./assets/images/discover-6.jpg')",
      }
    },
  },
  plugins: [],
}

