// tailwind.config.js
module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    theme: {
      extend: {
        colors: {
          pokemon: {
            primary: '#FFCB05',
            secondary: '#3B4CCA',
            accent: '#E3350D',
            bg: '#F6F8FC',
            text: '#1E1E1E',
          },
        },
        fontFamily: {
          poppins: ['Poppins', 'sans-serif'],
          quicksand: ['Quicksand', 'sans-serif'],
        },
      },
    },
    plugins: [],
  }
  