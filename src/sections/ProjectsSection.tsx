import FadeIn from '../components/shared/FadeIn'

interface Project {
  index: string
  title: string
  blurb: string
  stack: string
  href: string
  year: string
}

const projects: Project[] = [
  {
    index: '01',
    title: 'Leetcode Reminder',
    blurb:
      'Spaced-repetition nudge engine for grinding interview problems without burning out — picks the next problem from your history at the right interval.',
    stack: 'React · Django · Postgres · AWS',
    year: '2025',
    href: 'https://github.com/ojunedi',
  },
  {
    index: '02',
    title: 'Game Analytics Tool',
    blurb:
      'Quiet little pipeline for streaming chess and sports data into tidy frames; surfaces tactical patterns I keep losing to.',
    stack: 'Python · Pandas · Streamlit',
    year: '2024',
    href: 'https://github.com/ojunedi',
  },
  {
    index: '03',
    title: 'Mini Raytracer',
    blurb:
      'A from-scratch CPU raytracer with reflection, refraction and soft shadows. Built mostly to feel the math at the keyboard.',
    stack: 'C++',
    year: '2023',
    href: 'https://github.com/ojunedi',
  },
]

export default function ProjectsSection() {
  return (
    <section id="projects" className="max-w-[860px] mx-auto py-20 md:py-28 border-t rule">
      <FadeIn y={20}>
        <div className="flex items-baseline justify-between mb-12 md:mb-16">
          <p
            className="font-mono-ui uppercase tracking-[0.22em] text-ink-mute"
            style={{ fontSize: '11px' }}
          >
            §3 — Selected work
          </p>
          <p
            className="font-mono-ui uppercase tracking-[0.22em] text-ink-mute"
            style={{ fontSize: '11px' }}
          >
            {projects.length} of many
          </p>
        </div>
      </FadeIn>

      <ul className="flex flex-col">
        {projects.map((p, i) => (
          <FadeIn key={p.index} delay={i * 0.08} y={18}>
            <li className="border-t rule">
              <a
                href={p.href}
                target="_blank"
                rel="noreferrer"
                className="group block py-8 md:py-10"
              >
                <div className="grid grid-cols-12 gap-x-6 md:gap-x-10 items-start">
                  <div className="col-span-12 md:col-span-2">
                    <span
                      className="font-mono-ui tracking-[0.18em] text-ink-mute group-hover:text-ink transition-colors"
                      style={{ fontSize: '11.5px' }}
                    >
                      {p.index}&nbsp;/&nbsp;{p.year}
                    </span>
                  </div>
                  <div className="col-span-12 md:col-span-10 mt-2 md:mt-0">
                    <h3
                      className="font-serif font-light leading-[1.05] tracking-[-0.015em] text-ink flex flex-wrap items-baseline gap-x-4"
                      style={{ fontSize: 'clamp(1.7rem, 3.2vw, 2.6rem)' }}
                    >
                      <span>{p.title}</span>
                      <span
                        className="font-mono-ui uppercase tracking-[0.2em] text-ink-mute group-hover:text-ink transition-colors transition-transform group-hover:translate-x-1 duration-300"
                        style={{ fontSize: '11px' }}
                      >
                        ↗ open
                      </span>
                    </h3>
                    <p
                      className="mt-4 font-serif text-ink-soft leading-[1.55] max-w-[600px]"
                      style={{ fontSize: 'clamp(1rem, 1.35vw, 1.1rem)' }}
                    >
                      {p.blurb}
                    </p>
                    <p
                      className="mt-3 font-mono-ui uppercase tracking-[0.18em] text-ink-mute"
                      style={{ fontSize: '10.5px' }}
                    >
                      {p.stack}
                    </p>
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
