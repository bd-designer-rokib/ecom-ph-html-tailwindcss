/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      colors: {
        primary: "#FC6320",
        secondary: "#0F0E0E",
        tertiary: "#0f0e0e99",
        quaternary: "#FC63201A",
        quinary: "#FC632026",
        senary: "#ffffff33",
        septenary: "#0F0E0EB2",
        octonary: "#0F0E0E1A",
        nonary: "#0F0E0E33",
        decenary: "#0F0E0E33",
        undecenary: "#F3F3F3",
        duodecenary: "#0F0E0E66",
        tredecenary: "#0F0E0E0D",
        quattuordecenary: "#FC631433",
        quindecenary: "#FC63141A",
        sexdecenary: "#0F0E0E19",
        septendecenary: "#0F0E0E08",
        octodecenary: "#0F0E0EE6",
        novendecenary: "#0F0E0E96",
      },
      fontFamily: {
        primary: ["Inter", "serif"],
        secondary: ["Urbanist", "sans-serif"],
      },
      backgroundImage: {
        "banner-img": "url('assets/images/banner.jpg')",
      },
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
};


