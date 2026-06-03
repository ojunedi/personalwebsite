import FadeIn from '../components/shared/FadeIn'

const LINKS = [
  { label: 'Email', href: 'mailto:ojunedi@umich.edu', value: 'ojunedi@umich.edu' },
  { label: 'GitHub', href: 'https://github.com/ojunedi', value: 'github.com/ojunedi' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/omer-junedi', value: 'linkedin.com/in/omer-junedi' },
  // { label: 'Twitter', href: 'https://x.com/ojunedi', value: 'x.com/ojunedi' },
]

export default function SiteFooter() {
  return (
    <footer id="contact" className="px-6 sm:px-10 md:px-14 pt-20 md:pt-28 pb-12">
      <div className="max-w-[860px] mx-auto border-t rule">
        <FadeIn y={20}>
          <p
            className="font-mono-ui uppercase tracking-[0.22em] text-ink-mute pt-16 md:pt-24 mb-8 md:mb-12"
            style={{ fontSize: '11px' }}
          >
            §4 — Reach
          </p>
        </FadeIn>

        <FadeIn delay={0.1} y={20}>
          <h2
            className="font-serif font-light leading-[1.05] tracking-[-0.02em] mb-12 md:mb-16"
            style={{ fontSize: 'clamp(2.4rem, 6vw, 4.6rem)' }}
          >
            Let&apos;s build something{' '}
            <span className="serif-italic">that holds up.</span>
          </h2>
        </FadeIn>

        <FadeIn delay={0.2} y={16}>
          <ul className="flex flex-col">
            {LINKS.map((link, i) => (
              <li
                key={link.label}
                className={`flex items-baseline justify-between gap-6 py-4 ${i === 0 ? 'border-t rule' : 'border-t rule'}`}
              >
                <span
                  className="font-mono-ui uppercase tracking-[0.18em] text-ink-mute"
                  style={{ fontSize: '11px' }}
                >
                  {link.label}
                </span>
                <a
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                  className="font-serif text-ink link-static-underline hover:text-ink"
                  style={{ fontSize: 'clamp(1rem, 1.5vw, 1.2rem)' }}
                >
                  {link.value}
                </a>
              </li>
            ))}
            <li className="border-t rule" />
          </ul>
        </FadeIn>

        <FadeIn delay={0.3} y={10}>
          <div
            className="mt-16 md:mt-24 flex flex-col sm:flex-row sm:items-baseline justify-between gap-3 font-mono-ui uppercase tracking-[0.18em] text-ink-mute"
            style={{ fontSize: '10.5px' }}
          >
            <span>
              © 2026&nbsp;&nbsp;·&nbsp;&nbsp;Set in Newsreader &amp; JetBrains Mono
            </span>
            <span>Last touched&nbsp;&nbsp;·&nbsp;&nbsp;{TODAY}</span>
          </div>
        </FadeIn>
      </div>
    </footer>
  )
}

const TODAY = new Date().toLocaleDateString('en-US', {
  month: 'short',
  day: 'numeric',
  year: 'numeric',
})
