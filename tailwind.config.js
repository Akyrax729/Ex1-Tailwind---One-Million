/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["src/**/*.{html,js}","*.html"],
  theme: {
    extend: {
      colors: {
        primarycolor: "#F74C3C"
      }
    },
    fontFamily: {
      'titre': "arvo",
      'corp': "Helvetica, arial",
    },
  },
  plugins: [],
}

