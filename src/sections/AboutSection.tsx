import FadeIn from '../components/shared/FadeIn'

const NOW = [
  { label: 'Role', value: 'CS & Math, University of Michigan' },
  { label: 'Next', value: 'Forward Deployed Engineer at Accenture' },
  { label: 'Based', value: 'Ann Arbor → Chicago (May 2026)' },
  { label: 'Building', value: 'Agentic systems, ML tooling, internal infra' },
  { label: 'Reading', value: 'The Master and His Emissary — McGilchrist' },
]

export default function AboutSection() {
  return (
    <section id="about" className="max-w-[860px] mx-auto py-20 md:py-28 border-t rule">
      <FadeIn y={20}>
        <p
          className="font-mono-ui uppercase tracking-[0.22em] text-ink-mute mb-10 md:mb-14"
          style={{ fontSize: '11px' }}
        >
          §1 — On record
        </p>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-y-10 md:gap-x-10">
        <div className="md:col-span-7">
          <FadeIn delay={0.05} y={20}>
            <h2
              className="font-serif font-light leading-[1.15] tracking-[-0.01em] text-ink"
              style={{ fontSize: 'clamp(1.6rem, 2.6vw, 2.15rem)' }}
            >
              I&apos;m drawn to{' '}
              <span className="serif-italic">hard, useful problems</span> — the
              kind where the right answer isn&apos;t a guess and the wrong one is
              expensive. The closer the math sits to the keyboard, the more
              interested I am.
            </h2>
          </FadeIn>

          <FadeIn delay={0.18} y={18}>
            <p
              className="mt-8 md:mt-10 font-serif text-ink-soft leading-[1.6] max-w-[560px]"
              style={{ fontSize: 'clamp(1.05rem, 1.4vw, 1.15rem)' }}
            >
              Over the last few years I&apos;ve shipped software across ML,
              full-stack, and systems. I like clean abstractions, short feedback
              loops, and writing things that hold up under load. I&apos;d rather
              ship one careful thing than ten that are almost.
            </p>
          </FadeIn>
        </div>

        <div className="md:col-span-5 md:pt-2">
          <FadeIn delay={0.25} y={16}>
            <p
              className="font-mono-ui uppercase tracking-[0.22em] text-ink-mute mb-5"
              style={{ fontSize: '10.5px' }}
            >
              Now
            </p>
            <dl className="flex flex-col">
              {NOW.map((row, i) => (
                <div
                  key={row.label}
                  className={`flex justify-between gap-6 py-2.5 ${i === 0 ? '' : 'border-t rule'}`}
                >
                  <dt
                    className="font-mono-ui uppercase tracking-[0.18em] text-ink-mute shrink-0"
                    style={{ fontSize: '10.5px' }}
                  >
                    {row.label}
                  </dt>
                  <dd
                    className="font-serif text-ink text-right"
                    style={{ fontSize: '14px', lineHeight: 1.4 }}
                  >
                    {row.value}
                  </dd>
                </div>
              ))}
            </dl>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
