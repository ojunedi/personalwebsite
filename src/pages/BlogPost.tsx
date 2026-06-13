import FadeIn from '../components/shared/FadeIn'
import Link from '../components/shared/Link'
import MinimalFooter from '../sections/MinimalFooter'
import { getPost } from '../data/posts'

function formatDate(iso: string) {
  return new Date(iso + 'T00:00:00').toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

interface Props {
  slug: string
}

export default function BlogPost({ slug }: Props) {
  const post = getPost(slug)

  if (!post) {
    return (
      <>
        <main className="px-6 sm:px-10 md:px-14">
          <section className="max-w-[860px] mx-auto pt-24 sm:pt-32 md:pt-40 pb-24">
            <FadeIn y={20}>
              <p
                className="font-mono-ui uppercase tracking-[0.22em] text-ink-mute mb-8"
                style={{ fontSize: '11px' }}
              >
                404 — Not found
              </p>
            </FadeIn>
            <FadeIn delay={0.1} y={20}>
              <h1
                className="font-serif font-light leading-[1.05] tracking-[-0.02em]"
                style={{ fontSize: 'clamp(2rem, 5vw, 3.4rem)' }}
              >
                <span className="serif-italic">No such post.</span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.2} y={16}>
              <p className="mt-10">
                <Link
                  to="/blog"
                  className="font-mono-ui uppercase tracking-[0.18em] text-ink-soft link-underline hover:text-ink"
                  style={{ fontSize: '11px' }}
                >
                  ← Back to writing
                </Link>
              </p>
            </FadeIn>
          </section>
        </main>
        <MinimalFooter />
      </>
    )
  }

  return (
    <>
      <main className="px-6 sm:px-10 md:px-14">
        <article className="max-w-[680px] mx-auto pt-20 sm:pt-28 md:pt-36 pb-16">
          <FadeIn y={20}>
            <Link
              to="/blog"
              className="font-mono-ui uppercase tracking-[0.18em] text-ink-mute link-underline hover:text-ink"
              style={{ fontSize: '11px' }}
            >
              ← Back to writing
            </Link>
          </FadeIn>

          <FadeIn delay={0.08} y={20}>
            <p
              className="mt-12 md:mt-16 font-mono-ui uppercase tracking-[0.22em] text-ink-mute flex items-center gap-3"
              style={{ fontSize: '11px' }}
            >
              <span>{formatDate(post.date)}</span>
              <span className="text-ink-mute">·</span>
              <span>{post.readingTime}</span>
            </p>
          </FadeIn>

          <FadeIn delay={0.15} y={22}>
            <h1
              className="mt-6 md:mt-8 font-serif font-light leading-[1.08] tracking-[-0.02em]"
              style={{ fontSize: 'clamp(2.2rem, 5.5vw, 3.6rem)' }}
            >
              {post.title}
            </h1>
          </FadeIn>

          <FadeIn delay={0.25} y={18}>
            <div
              className="mt-12 md:mt-16 font-serif text-ink-soft leading-[1.7] post-body"
              style={{ fontSize: 'clamp(1.05rem, 1.4vw, 1.15rem)' }}
            >
              {post.body}
            </div>
          </FadeIn>
        </article>

        <section className="max-w-[680px] mx-auto pb-24 md:pb-32">
          <FadeIn y={14}>
            <div className="border-t rule pt-8">
              <Link
                to="/blog"
                className="font-mono-ui uppercase tracking-[0.18em] text-ink-mute link-underline hover:text-ink"
                style={{ fontSize: '11px' }}
              >
                ← Back to writing
              </Link>
            </div>
          </FadeIn>
        </section>
      </main>
      <MinimalFooter />
    </>
  )
}
