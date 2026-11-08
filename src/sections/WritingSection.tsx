import FadeIn from '../components/shared/FadeIn'
import { posts, formatDate } from '../data/posts'

export default function WritingSection() {
  if (posts.length === 0) return null

  return (
    <section id="writing" className="max-w-[860px] mx-auto py-20 md:py-28 border-t rule">
      <FadeIn y={20}>
        <p
          className="font-mono-ui uppercase tracking-[0.22em] text-ink-mute mb-12 md:mb-16 text-label"
        >
          §4 — Writing
        </p>
      </FadeIn>

      <ul className="flex flex-col">
        {posts.map((post, i) => (
          <FadeIn key={post.slug} delay={i * 0.08} y={18}>
            <li className="border-t rule">
              <a href={`#/writing/${post.slug}`} className="group block py-8 md:py-10">
                <div className="grid grid-cols-12 gap-x-6 md:gap-x-10 items-start">
                  <div className="col-span-12 md:col-span-3">
                    <span
                      className="font-mono-ui uppercase tracking-[0.18em] text-ink-mute group-hover:text-ink transition-colors text-label-lg"
                    >
                      {formatDate(post.date)}
                    </span>
                  </div>
                  <div className="col-span-12 md:col-span-9 mt-2 md:mt-0">
                    <h3
                      className="font-serif font-light leading-[1.1] tracking-[-0.01em] text-ink flex flex-wrap items-baseline gap-x-4 text-entry-title"
                    >
                      <span>{post.title}</span>
                      <span
                        className="font-mono-ui uppercase tracking-[0.2em] text-ink-mute group-hover:text-ink transition-colors text-label"
                      >
                        {post.readingTime}
                      </span>
                    </h3>
                    {post.blurb && (
                      <p
                        className="mt-4 font-serif text-ink-soft leading-[1.55] max-w-[540px] text-entry-body"
                      >
                        {post.blurb}
                      </p>
                    )}
                  </div>
                </div>
              </a>
            </li>
          </FadeIn>
        ))}
      </ul>
      <div className="border-t rule" />
    </section>
  )
}
