import { motion } from 'framer-motion'
import { fadeUp } from '../utils/animations'

/**
 * A single service offering. Used on the Home preview grid and the
 * full Services page. The icon sits in a ringed badge that lights up
 * gold on hover, echoing the StarEmblem ring treatment elsewhere.
 */
export default function ServiceCard({ icon: Icon, title, description, index = 0 }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delay: (index % 4) * 0.08 }}
      whileHover={{ y: -6 }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-ink-700/60 p-7 transition-colors duration-300 hover:border-gold/40"
    >
      <div
        className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gold/0 blur-2xl transition-all duration-500 group-hover:bg-gold/10"
        aria-hidden="true"
      />
      <div className="relative flex h-14 w-14 items-center justify-center rounded-full border border-gold/30 text-gold transition-all duration-300 group-hover:border-gold group-hover:bg-gold/10">
        <Icon size={22} />
      </div>
      <h3 className="relative mt-6 font-display text-xl font-semibold text-cloud">{title}</h3>
      <p className="relative mt-3 text-sm leading-relaxed text-cloud/65">{description}</p>
    </motion.div>
  )
}
