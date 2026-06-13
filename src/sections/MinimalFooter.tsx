const TODAY = new Date().toLocaleDateString('en-US', {
  month: 'short',
  day: 'numeric',
  year: 'numeric',
})

export default function MinimalFooter() {
  return (
    <footer className="px-6 sm:px-10 md:px-14 pt-16 md:pt-24 pb-12">
      <div className="max-w-[860px] mx-auto border-t rule pt-8">
        <div
          className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3 font-mono-ui uppercase tracking-[0.18em] text-ink-mute"
          style={{ fontSize: '10.5px' }}
        >
          <span>
            © 2026&nbsp;&nbsp;·&nbsp;&nbsp;Set in Newsreader &amp; JetBrains Mono
          </span>
          <span>Last touched&nbsp;&nbsp;·&nbsp;&nbsp;{TODAY}</span>
        </div>
      </div>
    </footer>
  )
}
