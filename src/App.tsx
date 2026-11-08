import { useEffect, useState } from 'react'
import SiteHeader from './sections/SiteHeader'
import IntroSection from './sections/IntroSection'
import AboutSection from './sections/AboutSection'
import ExperienceSection from './sections/ExperienceSection'
import ProjectsSection from './sections/ProjectsSection'
import WritingSection from './sections/WritingSection'
import PostPage from './sections/PostPage'
import SiteFooter from './sections/SiteFooter'
import { getPost } from './data/posts'

const POST_ROUTE = /^#\/writing\/([^/?#]+)/

function useHash() {
  const [hash, setHash] = useState(() => window.location.hash)
  useEffect(() => {
    const onChange = () => setHash(window.location.hash)
    window.addEventListener('hashchange', onChange)
    return () => window.removeEventListener('hashchange', onChange)
  }, [])
  return hash
}

export default function App() {
  const hash = useHash()
  const slug = hash.match(POST_ROUTE)?.[1]

  // Post pages open at the top; section links (#about, #writing…) scroll to
  // their section, even when coming back from a post page.
  useEffect(() => {
    if (slug) {
      window.scrollTo(0, 0)
    } else if (hash.length > 1) {
      document.getElementById(hash.slice(1))?.scrollIntoView()
    }
  }, [hash, slug])

  return (
    <div className="min-h-screen text-ink" style={{ background: 'var(--paper)' }}>
      <SiteHeader />
      <main className="px-6 sm:px-10 md:px-14">
        {slug ? (
          <PostPage post={getPost(decodeURIComponent(slug))} />
        ) : (
          <>
            <IntroSection />
            <AboutSection />
            <ExperienceSection />
            <ProjectsSection />
            <WritingSection />
          </>
        )}
      </main>
      <SiteFooter />
    </div>
  )
}
