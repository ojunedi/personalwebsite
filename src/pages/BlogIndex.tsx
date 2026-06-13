import FadeIn from '../components/shared/FadeIn'
import Link from '../components/shared/Link'
import MinimalFooter from '../sections/MinimalFooter'
import { posts } from '../data/posts'

function formatDate(iso: string) {
  return new Date(iso + 'T00:00:00').toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}

export default function BlogIndex() {
  return (
    <>
      <main className="px-6 sm:px-10 md:px-14">
        <section className="max-w-[860px] mx-auto pt-24 sm:pt-32 md:pt-40 pb-12 md:pb-16">
          <FadeIn y={20}>
            <p
              className="font-mono-ui uppercase tracking-[0.22em] text-ink-mute mb-10 md:mb-14"
              style={{ fontSize: '11px' }}
            >
              §1 — Field notes
            </p>
          </FadeIn>

          <FadeIn delay={0.05} y={20}>
            <h1
              className="font-serif font-light leading-[1.05] tracking-[-0.02em]"
              style={{ fontSize: 'clamp(2.2rem, 5.5vw, 4rem)' }}
            >
              <span className="serif-italic">Writing</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.15} y={18}>
            <p
              className="mt-8 md:mt-10 max-w-[560px] font-serif text-ink-soft leading-[1.55]"
              style={{ fontSize: 'clamp(1.05rem, 1.4vw, 1.15rem)' }}
            >
              A running log of ideas and reflections
            </p>
          </FadeIn>
        </section>

        <section className="max-w-[860px] mx-auto pb-24 md:pb-32">
          {posts.length === 0 ? (
            <FadeIn y={16}>
              <div className="border-t rule py-16 md:py-20">
                <p
                  className="font-mono-ui uppercase tracking-[0.22em] text-ink-mute"
                  style={{ fontSize: '11px' }}
                >
                  Nothing here yet — soon.
                </p>
              </div>
            </FadeIn>
          ) : (
            <ul className="flex flex-col">
              {posts.map((p, i) => (
                <FadeIn key={p.slug} delay={i * 0.06} y={16}>
                  <li className="border-t rule">
                    <Link to={`/blog/${p.slug}`} className="group block py-7 md:py-9">
                      <div className="grid grid-cols-12 gap-x-6 md:gap-x-10 items-baseline">
                        <div className="col-span-12 md:col-span-3">
                          <span
                            className="font-mono-ui uppercase tracking-[0.18em] text-ink-mute group-hover:text-ink transition-colors"
                            style={{ fontSize: '11px' }}
                          >
                            {formatDate(p.date)}
                          </span>
                        </div>
                        <div className="col-span-12 md:col-span-9 mt-2 md:mt-0">
                          <h2
                            className="font-serif font-light leading-[1.15] tracking-[-0.01em] text-ink flex flex-wrap items-baseline gap-x-3"
                            style={{ fontSize: 'clamp(1.25rem, 2vw, 1.6rem)' }}
                          >
                            <span>{p.title}</span>
                            <span
                              className="font-mono-ui uppercase tracking-[0.2em] text-ink-mute group-hover:text-ink transition-colors transition-transform group-hover:translate-x-1 duration-300"
                              style={{ fontSize: '10.5px' }}
                            >
                              ↗ read
                            </span>
                          </h2>
                          <p
                            className="mt-3 font-serif text-ink-soft leading-[1.55] max-w-[560px]"
                            style={{ fontSize: 'clamp(0.98rem, 1.25vw, 1.05rem)' }}
                          >
                            {p.blurb}
                          </p>
                          <p
                            className="mt-3 font-mono-ui uppercase tracking-[0.18em] text-ink-mute"
                            style={{ fontSize: '10.5px' }}
                          >
                            {p.readingTime}
                          </p>
                        </div>
                      </div>
                    </Link>
                  </li>
                </FadeIn>
              ))}
              <li className="border-t rule" />
            </ul>
          )}
        </section>
      </main>
      <MinimalFooter />
    </>
  )
}
