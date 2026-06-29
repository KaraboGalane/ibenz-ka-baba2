import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { HiArrowUp } from 'react-icons/hi'

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    function handleScroll() {
      setVisible(window.scrollY > 500)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Scroll to top"
          className="fixed bottom-24 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-gold/50 bg-ink-900/90 text-gold shadow-deep backdrop-blur-md transition-colors hover:bg-gold hover:text-ink-900 sm:bottom-8"
        >
          <HiArrowUp size={18} />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
