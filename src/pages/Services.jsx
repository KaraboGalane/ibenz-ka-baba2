import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { HiArrowRight } from 'react-icons/hi'

import SectionHeading from '../components/SectionHeading'
import ServiceCard from '../components/ServiceCard'
import { fadeUp, viewportOnce } from '../utils/animations'
import { services } from '../data/services'

export default function Services() {
  return (
    <>
      <Helmet>
        <title>Services | iBenz ka Baba</title>
        <meta
          name="description"
          content="Vintage Mercedes-Benz chauffeur services for weddings, matric dances, funerals, traditional ceremonies, photoshoots, VIP transfers and special occasions."
        />
      </Helmet>

      <section className="pt-36 pb-20 sm:pt-44">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <SectionHeading
            eyebrow="Our Services"
            title="One Car. Every Important Day."
            subtitle="Every occasion has its own weight and tempo. Our chauffeurs and vehicles adapt to carry each one properly."
          />
        </div>
      </section>

      <section className="pb-24 sm:pb-32">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, i) => (
              <ServiceCard
                key={service.id}
                icon={service.icon}
                title={service.title}
                description={service.description}
                index={i}
              />
            ))}
          </div>
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
          <span className="eyebrow">Not Sure Which Package Fits?</span>
          <h2 className="heading-md text-cloud text-balance">
            Tell Us Your Occasion, We'll Handle The Rest
          </h2>
          <div className="mt-2 flex flex-wrap items-center justify-center gap-4">
            <Link to="/booking" className="btn-gold">
              Book Now <HiArrowRight />
            </Link>
            <Link to="/pricing" className="btn-outline">
              See Pricing
            </Link>
          </div>
        </motion.div>
      </section>
    </>
  )
}
