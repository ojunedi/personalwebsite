import Link from '../components/shared/Link'

const NAV = [
  { label: 'About', href: '/#about' },
  { label: 'Work', href: '/#work' },
  { label: 'Projects', href: '/#projects' },
  { label: 'Writing', href: '/blog' },
  { label: 'Contact', href: '/#contact' },
]

export default function SiteHeader() {
  return (
    <header className="px-6 sm:px-10 md:px-14 pt-8 md:pt-10">
      <div className="max-w-[860px] mx-auto flex flex-col gap-3 sm:flex-row sm:items-baseline sm:justify-between sm:gap-0">
        <Link
          to="/"
          className="font-mono-ui text-[11px] uppercase tracking-[0.18em] text-ink-soft hover:text-ink transition-colors"
        >
          Omer&nbsp;Junedi
          <span className="ml-2 text-ink-mute">/</span>
          <span className="ml-2 text-ink-mute">2026</span>
        </Link>
        <nav className="flex flex-wrap gap-x-4 gap-y-2 sm:gap-x-7">
          {NAV.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className="font-mono-ui text-[11px] uppercase tracking-[0.18em] text-ink-soft hover:text-ink transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
