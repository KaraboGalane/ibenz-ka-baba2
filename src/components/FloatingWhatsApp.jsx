import { FaWhatsapp } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { siteConfig } from '../data/siteConfig'

export default function FloatingWhatsApp() {
  const message = encodeURIComponent(
    "Hi iBenz ka Baba, I'd like to enquire about booking your Mercedes for an event."
  )
  const href = `https://wa.me/${siteConfig.whatsappNumber}?text=${message}`

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with us on WhatsApp"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.4, duration: 0.5 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-deep"
    >
      <FaWhatsapp size={26} />
    </motion.a>
  )
}
