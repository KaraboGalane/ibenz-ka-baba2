import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import StarEmblem from './StarEmblem'

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-5 bg-ink-900"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2.4, repeat: Infinity, ease: 'linear' }}
          >
            <StarEmblem className="w-14 h-14 text-gold" />
          </motion.div>
          <p className="font-wordmark text-sm tracking-[0.3em] text-cloud/70 uppercase">
            iBenz ka Baba
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
