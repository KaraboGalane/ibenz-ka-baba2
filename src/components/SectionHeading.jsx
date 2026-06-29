import { motion } from 'framer-motion'
import { fadeUp, viewportOnce } from '../utils/animations'
import GrilleDivider from './GrilleDivider'

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  light = false,
}) {
  const alignClass = align === 'left' ? 'text-left items-start' : 'text-center items-center'

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      className={`flex flex-col ${alignClass} max-w-2xl ${align === 'center' ? 'mx-auto' : ''}`}
    >
      {eyebrow && <span className="eyebrow mb-4">{eyebrow}</span>}
      <h2 className={`heading-lg text-balance ${light ? 'text-ink-900' : 'text-cloud'}`}>
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-5 text-base sm:text-lg leading-relaxed ${
            light ? 'text-ink-900/70' : 'text-cloud/70'
          }`}
        >
          {subtitle}
        </p>
      )}
      <div className="mt-6">
        <GrilleDivider />
      </div>
    </motion.div>
  )
}
