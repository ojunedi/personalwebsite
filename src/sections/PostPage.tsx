import FadeIn from '../components/shared/FadeIn'
import { formatDate, type Post } from '../data/posts'

export default function PostPage({ post }: { post: Post | undefined }) {
  return (
    <article className="max-w-[680px] mx-auto pt-20 sm:pt-28 pb-12">
      <FadeIn y={12} duration={0.6}>
        <a
          href="#writing"
          className="font-mono-ui uppercase tracking-[0.18em] text-ink-mute hover:text-ink transition-colors text-label"
        >
          ← All writing
        </a>
      </FadeIn>

      {post ? (
        <>
          <FadeIn delay={0.05} y={20} duration={0.9}>
            <header className="mt-12 md:mt-16 mb-12 md:mb-16">
              <p
                className="font-mono-ui uppercase tracking-[0.18em] text-ink-mute text-label"
              >
                {formatDate(post.date)}&nbsp;&nbsp;·&nbsp;&nbsp;{post.readingTime}
              </p>
              <h1
                className="mt-6 font-serif font-light leading-[1.05] tracking-[-0.02em] text-post-title"
              >
                {post.title}
              </h1>
            </header>
          </FadeIn>

          <FadeIn delay={0.15} y={16} duration={0.9}>
            <div className="post-body" dangerouslySetInnerHTML={{ __html: post.html }} />
          </FadeIn>
        </>
      ) : (
        <p className="mt-16 font-serif text-ink-soft text-body">
          That post doesn&apos;t exist (or hasn&apos;t been published yet).
        </p>
      )}
    </article>
  )
}
