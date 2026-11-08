import { marked } from 'marked'
import { markedSmartypants } from 'marked-smartypants'
import { codeHighlighting } from './highlight'

// Syntax highlighting for ```language code blocks (see highlight.ts).
marked.use(codeHighlighting)
// Straight quotes/apostrophes -> curly, -- -> en dash, --- -> em dash, ... -> ellipsis.
marked.use(markedSmartypants())

// Every .md file in src/posts/ becomes a post. The filename is the slug:
// src/posts/my-first-post.md  ->  #/writing/my-first-post
const files = import.meta.glob('../posts/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>

export interface Post {
  slug: string
  title: string
  date: string
  blurb: string
  readingTime: string
  html: string
}

// Parses the `---` block at the top of a post into simple key/value pairs.
function parseFrontmatter(raw: string): { meta: Record<string, string>; body: string } {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/)
  if (!match) return { meta: {}, body: raw }

  const meta: Record<string, string> = {}
  for (const line of match[1].split(/\r?\n/)) {
    const i = line.indexOf(':')
    if (i === -1) continue
    const key = line.slice(0, i).trim()
    const value = line.slice(i + 1).trim().replace(/^(['"])(.*)\1$/, '$2')
    if (key) meta[key] = value
  }
  return { meta, body: match[2] }
}

function readingTime(text: string): string {
  const words = text.trim().split(/\s+/).filter(Boolean).length
  return `${Math.max(1, Math.round(words / 230))} min`
}

export const posts: Post[] = Object.entries(files)
  // Draft files are emptied at build time (see vite.config.ts).
  .filter(([, raw]) => raw.trim() !== '')
  .map(([path, raw]) => {
    const slug = path.split('/').pop()!.replace(/\.md$/, '')
    const { meta, body } = parseFrontmatter(raw)
    return {
      slug,
      title: meta.title ?? slug,
      date: meta.date ?? '',
      blurb: meta.blurb ?? '',
      draft: meta.draft === 'true',
      readingTime: readingTime(body),
      html: marked.parse(body, { async: false }) as string,
    }
  })
  // Drafts show up in `npm run dev` but never on the live site.
  .filter((p) => !(p.draft && import.meta.env.PROD))
  .sort((a, b) => b.date.localeCompare(a.date))
  .map(({ draft: _draft, ...post }) => post)

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug)
}

export function formatDate(iso: string): string {
  if (!iso) return ''
  const d = new Date(`${iso}T00:00:00`)
  if (Number.isNaN(d.getTime())) return iso
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
}
