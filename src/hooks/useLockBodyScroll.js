import { useEffect } from 'react'

/**
 * Locks page scrolling while `active` is true.
 * Used for the mobile nav drawer and the gallery lightbox.
 */
export function useLockBodyScroll(active) {
  useEffect(() => {
    if (!active) return
    const original = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = original
    }
  }, [active])
}
