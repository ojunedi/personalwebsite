const NAV = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function SiteHeader() {
  return (
    <header className="px-6 sm:px-10 md:px-14 pt-8 md:pt-10">
      <div className="max-w-[860px] mx-auto flex items-baseline justify-between">
        <a
          href="#top"
          className="font-mono-ui text-[11px] uppercase tracking-[0.18em] text-ink-soft hover:text-ink transition-colors"
        >
          Omer&nbsp;Junedi
          <span className="ml-2 text-ink-mute">/</span>
          <span className="ml-2 text-ink-mute">2026</span>
        </a>
        <nav className="flex gap-5 sm:gap-7">
          {NAV.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="font-mono-ui text-[11px] uppercase tracking-[0.18em] text-ink-soft hover:text-ink transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
