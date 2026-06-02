import FadeIn from '../components/shared/FadeIn'
import ContactButton from '../components/shared/ContactButton'
import PortraitReveal from '../components/shared/PortraitReveal'
import MouseTilt from '../components/shared/MouseTilt'

const NAV_LINKS = ['About', 'Experience', 'Projects', 'Contact']

export default function HeroSection() {
  return (
    <section
      className="h-screen flex flex-col"
      style={{ position: 'relative', overflowX: 'clip' }}
    >
      <nav className="flex justify-between items-center px-6 md:px-10 pt-6 md:pt-8">
        <FadeIn delay={0} y={-20} className="flex justify-between items-center w-full">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200 no-underline"
            >
              {link}
            </a>
          ))}
        </FadeIn>
      </nav>

      <div className="overflow-hidden px-6 md:px-10">
        <FadeIn delay={0.15} y={40}>
          <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[14vw] sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw] mt-6 sm:mt-4 md:-mt-5">
            Hi, I&apos;m Omer
          </h1>
        </FadeIn>
      </div>

      <div className="flex justify-between items-end pb-7 sm:pb-8 md:pb-10 mt-auto px-6 md:px-10">
        <FadeIn delay={0.35} y={20}>
          <p
            className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[160px] sm:max-w-[220px] md:max-w-[260px]"
            style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
          >
            cs & math @ umich — building things that matter
          </p>
        </FadeIn>

        <FadeIn delay={0.5} y={20}>
          <ContactButton />
        </FadeIn>
      </div>

      <div className="absolute left-1/2 -translate-x-1/2 z-10 top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0">
        <FadeIn delay={0.6} y={30}>
          <MouseTilt maxTilt={7}>
            <PortraitReveal />
          </MouseTilt>
        </FadeIn>
      </div>
    </section>
  )
}
