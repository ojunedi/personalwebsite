import FadeIn from '../components/shared/FadeIn'

export default function IntroSection() {
  return (
    <section id="top" className="max-w-[860px] mx-auto pt-24 sm:pt-32 md:pt-40 pb-24 sm:pb-32">
      <FadeIn y={20} duration={0.9}>
        <p
          className="font-mono-ui uppercase tracking-[0.22em] text-ink-mute mb-12 md:mb-16 flex items-center gap-3"
          style={{ fontSize: '11px' }}
        >
          <span
            className="inline-block"
            style={{ width: 6, height: 6, borderRadius: 999, background: 'var(--ink)' }}
          />
          Currently — Ann Arbor, Michigan
        </p>
      </FadeIn>

      <FadeIn delay={0.1} y={24} duration={1}>
        <h1
          className="font-serif leading-[1.02] tracking-[-0.02em]"
          style={{ fontSize: 'clamp(2.5rem, 7.2vw, 5.4rem)' }}
        >
          <span className="serif-italic font-light">Omer Junedi</span>
          <span className="block mt-2 text-ink-soft font-light">
            engineer at the intersection of math,
          </span>
          <span className="block text-ink-soft font-light">
            machine learning, and software.
          </span>
        </h1>
      </FadeIn>

      <FadeIn delay={0.25} y={18} duration={1}>
        <p
          className="mt-12 md:mt-16 max-w-[560px] font-serif text-ink-soft leading-[1.55]"
          style={{ fontSize: 'clamp(1.05rem, 1.45vw, 1.2rem)' }}
        >
          I study Computer Science and Mathematics at the University of Michigan.
          I build AI tooling, synthetic data systems, and quiet little pieces of
          software that try to solve real problems carefully. This is a record of
          the work — and a place to be reached.
        </p>
      </FadeIn>

      <FadeIn delay={0.4} y={14} duration={0.9}>
        <div
          className="mt-10 md:mt-12 flex flex-wrap items-center gap-x-6 gap-y-3 font-mono-ui uppercase tracking-[0.18em] text-ink-soft"
          style={{ fontSize: '11px' }}
        >
          <a
            href="mailto:ojunedi@umich.edu"
            className="link-static-underline hover:text-ink transition-colors"
          >
            ojunedi@umich.edu
          </a>
          <span className="text-ink-mute">·</span>
          <a
            href="https://github.com/ojunedi"
            target="_blank"
            rel="noreferrer"
            className="link-underline hover:text-ink transition-colors"
          >
            github
          </a>
          <span className="text-ink-mute">·</span>
          <a
            href="https://linkedin.com/in/ojunedi"
            target="_blank"
            rel="noreferrer"
            className="link-underline hover:text-ink transition-colors"
          >
            linkedin
          </a>
          <span className="text-ink-mute">·</span>
          <span>cv<span className="blink">_</span></span>
        </div>
      </FadeIn>
    </section>
  )
}
