import { motion } from 'framer-motion'
import { fadeUp, staggerContainer } from '../utils/animations'

const stats = [
  { value: '100+', label: 'Events Driven' },
  { value: '100%', label: 'On-Time Arrivals' },
  { value: '5★', label: 'Chauffeur Service' },
  { value: '15+', label: 'Years on the Road' },
]

export default function StatBlock() {
  return (
    <motion.div
      variants={staggerContainer(0.1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.4 }}
      className="grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-8"
    >
      {stats.map((stat) => (
        <motion.div key={stat.label} variants={fadeUp} className="text-center sm:text-left">
          <p className="font-display text-3xl font-semibold text-gold sm:text-4xl">
            {stat.value}
          </p>
          <p className="mt-1.5 text-xs uppercase tracking-wider text-cloud/60 sm:text-sm">
            {stat.label}
          </p>
        </motion.div>
      ))}
    </motion.div>
  )
}
