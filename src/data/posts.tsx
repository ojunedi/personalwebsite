import type { ReactNode } from 'react'

export interface Post {
  slug: string
  title: string
  date: string
  blurb: string
  readingTime: string
  body: ReactNode
}

export const posts: Post[] = [
  {
    slug: 'notes-from-a-concurrent-file-system',
    title: 'Operating Systems Reflection',
    date: '2026-03-14',
    blurb:
      'my thoughts after taking eecs482 (operating systems) at the university of michigan',
    readingTime: '4 min',
    body: (
      <>
        <p>
          [&hellip; placeholder paragraph &mdash; this post exists to test the
          layout. Real writing will replace it.]
        </p>
      </>
    ),
  },
]

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug)
}
