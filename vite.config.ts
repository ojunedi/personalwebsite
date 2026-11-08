import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import { readFileSync } from 'node:fs'

// In production builds, posts marked `draft: true` are replaced with an empty
// string so their text never ships in the public JS bundle.
function stripDraftPosts(): Plugin {
  return {
    name: 'strip-draft-posts',
    apply: 'build',
    enforce: 'pre',
    load(id) {
      if (!/\/src\/posts\/[^/]+\.md\?raw$/.test(id)) return
      const source = readFileSync(id.replace(/\?raw$/, ''), 'utf8')
      const frontmatter = source.match(/^---\r?\n([\s\S]*?)\r?\n---/)?.[1] ?? ''
      if (/^draft:\s*['"]?true['"]?\s*$/m.test(frontmatter)) return 'export default ""'
    },
  }
}

export default defineConfig({
  plugins: [stripDraftPosts(), react()],
  base: '/',
})
