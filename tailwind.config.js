/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'primary': '#C4971C',
      },
      borderColor: {
        'primary': '#C4971C',
      },
      colors: {
        'primary': '#C4971C',
      },
    }
  },
  plugins: [],
}

