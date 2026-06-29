import { useEffect, useState } from 'react'

/**
 * Returns true once the page has been scrolled past `threshold` pixels.
 * Used by the Navbar to switch from transparent to solid black.
 */
export function useScrollPosition(threshold = 40) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > threshold)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [threshold])

  return scrolled
}
