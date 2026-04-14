/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        navy: {
          800: "#1e293b",
          900: "#0f172a",
        },
        gold: {
          600: "#d97706",
        },
      },
    },
  },
  plugins: [],
};
