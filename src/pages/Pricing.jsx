import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { HiArrowRight } from 'react-icons/hi'

import SectionHeading from '../components/SectionHeading'
import PricingCard from '../components/PricingCard'
import { fadeUp, viewportOnce } from '../utils/animations'
import { pricingPackages } from '../data/pricing'

export default function Pricing() {
  return (
    <>
      <Helmet>
        <title>Pricing | iBenz ka Baba</title>
        <meta
          name="description"
          content="Vintage Mercedes-Benz chauffeur packages — hourly, half day, full day, wedding and photoshoot rates. Request a personalised quote."
        />
      </Helmet>

      <section className="pt-36 pb-20 sm:pt-44">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <SectionHeading
            eyebrow="Pricing"
            title="Packages Built Around Your Day"
            subtitle="Every event is different, so every quote is personal. These packages are a starting point — tell us your details and we'll tailor the rest."
          />
        </div>
      </section>

      <section className="pb-24 sm:pb-32">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3 lg:items-stretch">
            {pricingPackages.map((pkg, i) => (
              <PricingCard key={pkg.id} pkg={pkg} index={i} />
            ))}
          </div>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="mt-12 text-center text-sm text-cloud/50"
          >
            Rates vary by location, date and event duration. Final pricing is confirmed once we
            review your booking details.
          </motion.p>
        </div>
      </section>

      <section className="border-t border-white/5 bg-ink-700/40 py-20">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mx-auto flex max-w-3xl flex-col items-center gap-7 px-6 text-center sm:px-8"
        >
          <h2 className="heading-md text-cloud text-balance">
            Need a Custom Quote for a Bigger Event?
          </h2>
          <p className="max-w-xl text-cloud/65">
            Multi-vehicle convoys, multi-day coverage or out-of-town travel — get in touch and
            we'll put a plan together.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link to="/contact" className="btn-gold">
              Request Quote <HiArrowRight />
            </Link>
            <Link to="/booking" className="btn-outline">
              Book Directly
            </Link>
          </div>
        </motion.div>
      </section>
    </>
  )
}
