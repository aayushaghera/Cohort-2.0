/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

//   This tells Tailwind:
// “Hey Tailwind, look inside these files only. Keep only the CSS classes I actually use in them. Remove the rest.”

  theme: {
    extend: {},
  },
  plugins: [],
}

// 💡 What is "purging" in Tailwind?
// Purging = removing unused CSS

// Tailwind gives you thousands of CSS classes like bg-red-500, text-center, p-4, etc.

// But in your project, you only use a few of them.

// If Tailwind includes everything, your website becomes big and slow 🚫