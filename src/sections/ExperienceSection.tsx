import FadeIn from '../components/shared/FadeIn'

const experiences = [
  {
    company: 'Accenture',
    role: 'Incoming Forward Deployed Engineer',
    date: 'May 2026 – Present',
    location: 'Chicago, IL',
    bullets: [],
  },
  {
    company: 'Cisco',
    role: 'Software Engineering Intern',
    date: 'Jun 2025 – Aug 2025',
    location: 'Research Triangle Park, NC',
    bullets: [
      'Commerce Engineering — Agentic AI in Cash Flow Applications.',
    ],
  },
  {
    company: 'Radical AI',
    role: 'Artificial Intelligence Intern',
    date: 'May 2024 – Aug 2024',
    location: 'New York, NY',
    bullets: [
      'Built an AI-powered teaching assistant using VertexAI, LangChain, ChromaDB, and FastAPI, enabling automatic quiz generation from uploaded course materials.',
      'Supported multiple file types and tailored output for various grade levels, enhancing usability for educators.',
    ],
  },
  {
    company: 'Statistical Online Computationl Resource',
    role: 'Research Assistant',
    date: 'Oct 2023 – Dec 2024',
    location: 'Ann Arbor, MI',
    bullets: [
      'Built a real-time synthetic data generator for structured Clinical/PHI data using python-sdv, enabling compliant and privacy-preserving dataset sharing.',
      'Conducted trade-off analysis between privacy protection and data utility to guide optimal parameter selection.',
    ],
  },
]

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
      style={{ background: '#FFFFFF' }}
    >
      <FadeIn y={40}>
        <h2
          className="font-black uppercase text-center mb-16 sm:mb-20 md:mb-28"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)', color: '#0C0C0C' }}
        >
          Experience
        </h2>
      </FadeIn>

      <div className="max-w-5xl mx-auto w-full flex flex-col">
        {experiences.map((exp, i) => (
          <FadeIn key={exp.company} delay={i * 0.12} y={30}>
            <div
              className="py-8 sm:py-10 md:py-12 flex flex-col sm:flex-row sm:gap-10 md:gap-16"
              style={{ borderTop: '1px solid rgba(12,12,12,0.15)' }}
            >
              {/* Left: date + location */}
              <div className="mb-3 sm:mb-0 sm:w-[200px] md:w-[240px] flex-shrink-0 flex flex-col gap-1.5">
                <span
                  className="font-light uppercase tracking-widest"
                  style={{ fontSize: 'clamp(0.75rem, 1.2vw, 0.95rem)', color: 'rgba(12,12,12,0.45)' }}
                >
                  {exp.date}
                </span>
                <span
                  className="font-light uppercase tracking-widest"
                  style={{ fontSize: 'clamp(0.7rem, 1.1vw, 0.85rem)', color: 'rgba(12,12,12,0.35)' }}
                >
                  {exp.location}
                </span>
              </div>

              {/* Right: content */}
              <div className="flex flex-col gap-3 flex-1">
                <span
                  className="font-black uppercase leading-none"
                  style={{ fontSize: 'clamp(1.4rem, 3vw, 2.8rem)', color: '#0C0C0C' }}
                >
                  {exp.company}
                </span>
                <span
                  className="font-medium uppercase tracking-wider"
                  style={{ fontSize: 'clamp(0.8rem, 1.5vw, 1.1rem)', color: 'rgba(12,12,12,0.5)' }}
                >
                  {exp.role}
                </span>
                <ul className="flex flex-col gap-2 mt-1">
                  {exp.bullets.map((b) => (
                    <li
                      key={b}
                      className="font-light leading-relaxed flex gap-3"
                      style={{ fontSize: 'clamp(0.85rem, 1.4vw, 1.1rem)', color: 'rgba(12,12,12,0.65)' }}
                    >
                      <span
                        aria-hidden
                        className="flex-shrink-0 rounded-full"
                        style={{
                          width: '0.4em',
                          height: '0.4em',
                          backgroundColor: '#0C0C0C',
                          marginTop: '0.65em',
                        }}
                      />
                      <span className="flex-1">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeIn>
        ))}

        {/* bottom border */}
        <div style={{ borderTop: '1px solid rgba(12,12,12,0.15)' }} />
      </div>
    </section>
  )
}
