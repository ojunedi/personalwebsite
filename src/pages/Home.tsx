import IntroSection from '../sections/IntroSection'
import AboutSection from '../sections/AboutSection'
import ExperienceSection from '../sections/ExperienceSection'
import ProjectsSection from '../sections/ProjectsSection'
import SiteFooter from '../sections/SiteFooter'

export default function Home() {
  return (
    <>
      <main className="px-6 sm:px-10 md:px-14">
        <IntroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
      </main>
      <SiteFooter />
    </>
  )
}
