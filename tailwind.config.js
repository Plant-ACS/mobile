/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/**/*.tsx",
    "./src/pages/**/*.tsx",
    "./App.tsx"
  ],
  theme: {
    extend: {
      colors: {
        "black-900": "#100B00",

        "gray-400": "#E3E0D9",
        "gray-500": "#C6C3BD",
        "gray-600": "#A6A39C",
        "gray-700": "#7D7B77",
        "gray-800": "#3F3D3B",
        "gray-900": "#161511",
        
        "white-900": "#FFFCF6",

        "green-200": "#D8FFFF",
        "green-300": "#B9E9E8",
        "green-400": "#99D1D1",
        "green-500": "#61AEAE",
        "green-600": "#00CCCB",
        "green-700": "#06908F",
        "green-800": "#056766",
        "green-900": "#034444",

        "blue-200": "#CCF4FF",
        "blue-300": "#A8D5E2",
        "blue-400": "#92DCF1",
        "blue-500": "#01C4FC",
        "blue-600": "#5BD0F1",
        "blue-700": "#27AACF",
        "blue-800": "#1690B2",
        "blue-900": "#14748E",

        "yellow-200": "#FFFDC7",
        "yellow-300": "#EFEED0",
        "yellow-400": "#E7E4A0",
        "yellow-500": "#E2DE78",
        "yellow-600": "#C0B90D",
        "yellow-700": "#BDB732",
        "yellow-800": "#98943A",
        "yellow-900": "#716926"
      }
    },
  },
  plugins: [],
}

