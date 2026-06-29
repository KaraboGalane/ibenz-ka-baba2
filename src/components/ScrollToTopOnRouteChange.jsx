import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Scrolls to the top of the page whenever the route changes.
 * Mount once near the top of the app, inside the Router.
 */
export default function ScrollToTopOnRouteChange() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' })
  }, [pathname])

  return null
}
