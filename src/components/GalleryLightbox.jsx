import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { HiX, HiChevronLeft, HiChevronRight } from 'react-icons/hi'
import { useLockBodyScroll } from '../hooks/useLockBodyScroll'

/**
 * Fullscreen lightbox for the Gallery page. Controlled by the parent via
 * `activeIndex` (null = closed). Supports keyboard arrows + Escape.
 */
export default function GalleryLightbox({ items, activeIndex, onClose, onNavigate }) {
  const isOpen = activeIndex !== null
  useLockBodyScroll(isOpen)

  useEffect(() => {
    if (!isOpen) return
    function handleKey(e) {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') onNavigate(1)
      if (e.key === 'ArrowLeft') onNavigate(-1)
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [isOpen, onClose, onNavigate])

  if (!isOpen) return null
  const item = items[activeIndex]

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[90] flex items-center justify-center bg-ink-900/95 backdrop-blur-md p-4 sm:p-8"
        onClick={onClose}
      >
        <button
          aria-label="Close gallery"
          onClick={onClose}
          className="absolute top-5 right-5 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-cloud transition-colors hover:border-gold hover:text-gold"
        >
          <HiX size={20} />
        </button>

        <button
          aria-label="Previous image"
          onClick={(e) => {
            e.stopPropagation()
            onNavigate(-1)
          }}
          className="absolute left-3 top-1/2 z-10 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-cloud transition-colors hover:border-gold hover:text-gold sm:left-6"
        >
          <HiChevronLeft size={22} />
        </button>

        <button
          aria-label="Next image"
          onClick={(e) => {
            e.stopPropagation()
            onNavigate(1)
          }}
          className="absolute right-3 top-1/2 z-10 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-cloud transition-colors hover:border-gold hover:text-gold sm:right-6"
        >
          <HiChevronRight size={22} />
        </button>

        <motion.figure
          key={item.id}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="max-h-full max-w-3xl"
          onClick={(e) => e.stopPropagation()}
        >
          <img
            src={item.src}
            alt={item.alt}
            className="max-h-[80vh] w-full rounded-lg object-contain shadow-deep"
          />
          <figcaption className="mt-4 text-center text-sm text-cloud/60">
            <span className="eyebrow !text-gold">{item.category}</span>
            <span className="mx-2 text-cloud/30">·</span>
            {item.alt}
          </figcaption>
        </motion.figure>
      </motion.div>
    </AnimatePresence>
  )
}
