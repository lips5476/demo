/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // 使用 class 而不是 media 来支持手动切换
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
