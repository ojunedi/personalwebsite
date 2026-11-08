# omerjunedi.com

Personal site. Minimal, editorial, set in Newsreader & JetBrains Mono.

## Stack

React · TypeScript · Vite · Tailwind · Framer Motion

## Local

```bash
npm install
npm run dev
```

## Writing a post

Add a Markdown file to `src/posts/`. The filename becomes the URL, so
`src/posts/my-post.md` lives at `omerjunedi.com/#/writing/my-post`.

```md
---
title: My Post
date: 2026-11-08
blurb: one line shown in the list on the home page
draft: true
---

Regular Markdown from here on. Apostrophes, "quotes", -- and --- just work.
```

- `draft: true` shows the post in `npm run dev` but hides it on the live site. Delete the line to publish.
- Posts are sorted newest first by `date`.
- The Writing section and nav link only appear once at least one post is published.

## Reach

ojunedi@umich.edu
