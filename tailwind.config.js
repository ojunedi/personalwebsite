/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Newsreader', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      colors: {
        paper: '#FFFFFF',
        ink: '#0A0A0A',
        'ink-soft': '#555555',
        'ink-mute': '#999999',
        rule: '#E5E5E5',
      },
    },
  },
  plugins: [],
}
