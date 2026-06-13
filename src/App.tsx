import SiteHeader from './sections/SiteHeader'
import Home from './pages/Home'
import BlogIndex from './pages/BlogIndex'
import BlogPost from './pages/BlogPost'
import { useRoute } from './router'

function renderRoute(path: string) {
  if (path === '/' || path === '') return <Home />
  if (path === '/blog' || path === '/blog/') return <BlogIndex />
  if (path.startsWith('/blog/')) {
    const slug = path.replace(/^\/blog\//, '').replace(/\/$/, '')
    return <BlogPost slug={slug} />
  }
  return <BlogPost slug="__not_found__" />
}

export default function App() {
  const path = useRoute()
  return (
    <div className="min-h-screen text-ink" style={{ background: 'var(--paper)' }}>
      <SiteHeader />
      {renderRoute(path)}
    </div>
  )
}
