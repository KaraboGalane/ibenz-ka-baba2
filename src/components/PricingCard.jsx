import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { HiCheck } from 'react-icons/hi'
import { fadeUp } from '../utils/animations'

/**
 * A single package card. The `featured` package (the Wedding Package by
 * default — see src/data/pricing.js) is lifted and outlined in gold so it
 * reads as the recommended choice without needing a "Most Popular" ribbon.
 */
export default function PricingCard({ pkg, index = 0 }) {
  const { name, blurb, features, featured } = pkg

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delay: (index % 3) * 0.1 }}
      className={`relative flex h-full flex-col rounded-2xl p-8 ${
        featured
          ? 'border border-gold/50 bg-ink-700 shadow-gold lg:-translate-y-3'
          : 'border border-white/10 bg-ink-700/50'
      }`}
    >
      {featured && (
        <span className="eyebrow absolute -top-3 left-8 rounded-full bg-ink-900 px-3 py-1">
          Most Requested
        </span>
      )}

      <h3 className="font-display text-2xl font-semibold text-cloud">{name}</h3>
      <p className="mt-1.5 text-sm text-cloud/60">{blurb}</p>

      <ul className="mt-7 flex-1 space-y-3.5">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-3 text-sm text-cloud/80">
            <HiCheck className="mt-0.5 flex-shrink-0 text-gold" size={16} />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <Link
        to="/contact"
        className={`mt-8 w-full text-center ${featured ? 'btn-gold' : 'btn-outline'}`}
      >
        Request Quote
      </Link>
    </motion.div>
  )
}
