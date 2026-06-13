import { useEffect, useState } from 'react'

export function useRoute() {
  const [path, setPath] = useState(() => window.location.pathname)

  useEffect(() => {
    const onPop = () => setPath(window.location.pathname)
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [])

  return path
}

function scrollToHash(hash: string) {
  let tries = 0
  const tryScroll = () => {
    const el = document.querySelector(hash)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
      return
    }
    if (tries++ < 20) requestAnimationFrame(tryScroll)
  }
  requestAnimationFrame(tryScroll)
}

export function navigate(to: string) {
  const url = new URL(to, window.location.origin)
  const samePath = url.pathname === window.location.pathname

  window.history.pushState({}, '', to)
  if (!samePath) {
    window.dispatchEvent(new PopStateEvent('popstate'))
  }

  if (url.hash) {
    scrollToHash(url.hash)
  } else {
    requestAnimationFrame(() => window.scrollTo(0, 0))
  }
}
