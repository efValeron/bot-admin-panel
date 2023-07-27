/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'none',
  content: ["./node_modules/flowbite-react/**/*.js", './pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    colors: {
      "primary": "#22c55e",
      "primary-hover": "#16a34a",
      "dark": "#0f172a",
      "dark-hover": "#020617",
      "bg-white": "#f3f4f6",
      "bg-white-lighter": "#f9fafb",
      "bg-white-darker": "#e5e7eb",
      "text-gray": "#27272a",
      "icon-gray": "#52525b",
      "icon-hover": "#71717a",
      "error": "#dc2626",
      "error-bg": "#ef4444",
      "warning": "#ea580c",
      "warning-bg": "#f97316",
    }
  },
  plugins: [
    require("flowbite/plugin"),
    require("daisyui"),
  ],
  daisyui: {
    themes: ["light"],
  },
}
