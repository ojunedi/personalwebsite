import SiteHeader from './sections/SiteHeader'
import IntroSection from './sections/IntroSection'
import AboutSection from './sections/AboutSection'
import ExperienceSection from './sections/ExperienceSection'
import ProjectsSection from './sections/ProjectsSection'
import SiteFooter from './sections/SiteFooter'

export default function App() {
  return (
    <div className="min-h-screen text-ink" style={{ background: 'var(--paper)' }}>
      <SiteHeader />
      <main className="px-6 sm:px-10 md:px-14">
        <IntroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
      </main>
      <SiteFooter />
    </div>
  )
}
