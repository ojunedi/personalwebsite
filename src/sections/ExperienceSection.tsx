import FadeIn from '../components/shared/FadeIn'

interface Experience {
  year: string
  company: string
  role: string
  location: string
  note?: string
}

const experiences: Experience[] = [
  {
    year: '2026 →',
    company: 'Accenture',
    role: 'Incoming Forward Deployed Engineer',
    location: 'Chicago, IL',
    note: 'Embedded with clients to ship AI systems where they actually live.',
  },
  {
    year: '2025',
    company: 'Cisco',
    role: 'Software Engineering Intern',
    location: 'Research Triangle Park, NC',
    note: 'Commerce Engineering — agentic AI for cash flow applications.',
  },
  {
    year: '2024',
    company: 'Radical AI',
    role: 'Artificial Intelligence Intern',
    location: 'New York, NY',
    note: 'Built an AI teaching assistant with VertexAI, LangChain, ChromaDB and FastAPI.',
  },
  {
    year: '2023–24',
    company: 'University of Michigan — SOCR',
    role: 'Research Assistant',
    location: 'Ann Arbor, MI',
    note: 'Privacy-preserving synthetic data generation for clinical / PHI datasets.',
  },
]

export default function ExperienceSection() {
  return (
    <section id="work" className="max-w-[860px] mx-auto py-20 md:py-28 border-t rule">
      <FadeIn y={20}>
        <p
          className="font-mono-ui uppercase tracking-[0.22em] text-ink-mute mb-12 md:mb-16"
          style={{ fontSize: '11px' }}
        >
          §2 — Work, in order
        </p>
      </FadeIn>

      <ol className="flex flex-col">
        {experiences.map((exp, i) => (
          <FadeIn key={exp.company} delay={i * 0.08} y={18}>
            <li className="group grid grid-cols-12 gap-x-6 md:gap-x-10 py-8 md:py-10 border-t rule">
              <div className="col-span-12 md:col-span-3">
                <span
                  className="font-mono-ui uppercase tracking-[0.18em] text-ink-mute group-hover:text-ink transition-colors"
                  style={{ fontSize: '11.5px' }}
                >
                  {exp.year}
                </span>
              </div>
              <div className="col-span-12 md:col-span-9 mt-2 md:mt-0">
                <h3
                  className="font-serif leading-[1.1] tracking-[-0.01em] text-ink"
                  style={{ fontSize: 'clamp(1.5rem, 2.6vw, 2rem)' }}
                >
                  <span className="font-light">{exp.company}</span>{' '}
                  <span className="serif-italic font-light text-ink-soft">
                    — {exp.role}
                  </span>
                </h3>
                <p
                  className="mt-2 font-mono-ui uppercase tracking-[0.18em] text-ink-mute"
                  style={{ fontSize: '11px' }}
                >
                  {exp.location}
                </p>
                {exp.note && (
                  <p
                    className="mt-4 font-serif text-ink-soft leading-[1.55] max-w-[540px]"
                    style={{ fontSize: 'clamp(1rem, 1.3vw, 1.075rem)' }}
                  >
                    {exp.note}
                  </p>
                )}
              </div>
            </li>
          </FadeIn>
        ))}
      </ol>
      <div className="border-t rule" />
    </section>
  )
}
