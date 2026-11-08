/** @type {import('tailwindcss').Config} */
// All values live in src/index.css (SITE SETTINGS). Change them there, not here.
const size = (name) => `var(--size-${name})`

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: 'var(--font-serif)',
        mono: 'var(--font-mono)',
      },
      colors: {
        paper: 'var(--paper)',
        ink: 'var(--ink)',
        'ink-soft': 'var(--ink-soft)',
        'ink-mute': 'var(--ink-mute)',
        rule: 'var(--rule)',
      },
      // Use as className="text-display", "text-label", etc.
      fontSize: Object.fromEntries(
        [
          'display', 'post-title', 'project-title', 'statement', 'entry-title',
          'lede', 'body', 'entry-body', 'post-body', 'link', 'small',
          'label-lg', 'label', 'label-sm',
        ].map((n) => [n, size(n)]),
      ),
    },
  },
  plugins: [],
}
