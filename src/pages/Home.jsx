import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { HiArrowRight } from 'react-icons/hi'

import SectionHeading from '../components/SectionHeading'
import ServiceCard from '../components/ServiceCard'
import StatBlock from '../components/StatBlock'
import GrilleDivider from '../components/GrilleDivider'
import { fadeUp, fadeLeft, fadeRight, viewportOnce } from '../utils/animations'
import { services } from '../data/services'
import { siteConfig } from '../data/siteConfig'

import heroPhoto from '../assets/hero-photo.jpg'
import heroVideo from '../assets/hero-video.mp4'
import aboutPhoto from '../assets/about-photo.png'

export default function Home() {
  return (
    <>
      <Helmet>
        <title>iBenz ka Baba | The Legendary Mercedes Experience</title>
        <meta
          name="description"
          content="Premium vintage Mercedes-Benz chauffeur service for weddings, matric dances, traditional ceremonies and special occasions across South Africa."
        />
      </Helmet>

      {/* ---------- Hero ---------- */}
      <section className="relative flex min-h-screen items-center overflow-hidden pb-24 pt-24 sm:pb-0">
        <video
  autoPlay
  muted
  loop
  playsInline
  poster={heroPhoto}
  className="absolute inset-0 h-full w-full object-cover"
>
  <source src={heroVideo} type="video/mp4" />
</video>
        <div className="absolute inset-0 bg-gradient-to-r from-ink-900 via-ink-900/85 to-ink-900/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-transparent to-ink-900/30" />

        <div className="relative mx-auto w-full max-w-7xl px-6 sm:px-8">
          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="max-w-xl"
          >
            <span className="eyebrow">The Legendary Mercedes Experience</span>
            <h1 className="heading-xl mt-5 text-cloud text-balance">
              Arrive <span className="text-gold">Like Legends</span>
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-cloud/75 sm:text-lg">
              Old school prestige. Timeless respect. Your special day, carried in a car with a
              story of its own.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link to="/booking" className="btn-gold">
                Book Now <HiArrowRight />
              </Link>
              <Link to="/pricing" className="btn-outline">
                View Packages
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeUp}
            transition={{ delay: 0.3 }}
            className="mt-20 max-w-2xl border-t border-white/10 pt-10"
          >
            <StatBlock />
          </motion.div>
        </div>
      </section>

      {/* ---------- Services preview ---------- */}
      <section className="bg-ink-900 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <SectionHeading
            eyebrow="What We Offer"
            title="An Occasion for Every Kind of Legend"
            subtitle="From the procession to the final farewell, the vintage Mercedes carries every moment with dignity."
          />

          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.slice(0, 4).map((service, i) => (
              <ServiceCard
                key={service.id}
                icon={service.icon}
                title={service.title}
                description={service.description}
                index={i}
              />
            ))}
          </div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="mt-12 flex justify-center"
          >
            <Link
              to="/services"
              className="inline-flex items-center gap-2 font-body text-sm uppercase tracking-wider text-gold transition-colors hover:text-gold-light"
            >
              View All Services <HiArrowRight />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ---------- About teaser ---------- */}
      <section className="bg-ink-700/40 py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 sm:px-8 lg:grid-cols-2 lg:gap-20">
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="relative"
          >
            <div className="overflow-hidden rounded-2xl shadow-deep">
              <img
                src={aboutPhoto}
                alt="Chauffeur holding open the door of the vintage Mercedes-Benz"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 hidden rounded-2xl border border-gold/30 bg-ink-900/90 px-7 py-5 backdrop-blur-md sm:block">
              <p className="font-display text-2xl font-semibold text-gold">15+ Years</p>
              <p className="text-xs uppercase tracking-wider text-cloud/60">On The Road</p>
            </div>
          </motion.div>

          <motion.div variants={fadeLeft} initial="hidden" whileInView="show" viewport={viewportOnce}>
            <span className="eyebrow">Our Story</span>
            <h2 className="heading-lg mt-5 text-cloud text-balance">
              The Car We All Admired Growing Up
            </h2>
            <p className="mt-6 text-base leading-relaxed text-cloud/70">
              Every family has a memory of a car like ours — parked outside a church, a school
              hall, or a homestead, polished and patient, waiting to carry someone important. We
              kept that memory alive. Every booking is driven with the same nostalgia, dignity
              and respect that made the old Mercedes a symbol of arrival in the first place.
            </p>
            <p className="mt-4 text-base leading-relaxed text-cloud/70">
              Our chauffeurs are trained in more than driving — they understand the weight of a
              wedding morning, the stillness of a funeral, and the pride of a matric dance entrance.
            </p>
            <Link to="/about" className="mt-8 inline-flex items-center gap-2 btn-outline">
              Read Our Story <HiArrowRight />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ---------- CTA banner ---------- */}
      <section className="relative overflow-hidden bg-ink-900 py-20 sm:py-28">
        <div className="absolute inset-0 bg-grille-lines opacity-40" aria-hidden="true" />
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="relative mx-auto max-w-3xl px-6 text-center sm:px-8"
        >
          <GrilleDivider className="mb-8" />
          <h2 className="heading-lg text-cloud text-balance">
            Your Day Deserves an Entrance Worth Remembering
          </h2>
          <p className="mt-5 text-base text-cloud/70 sm:text-lg">
            Reserve the Mercedes for your date before it's gone. Booking takes less than two
            minutes.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <Link to="/booking" className="btn-gold">
              Book Now <HiArrowRight />
            </Link>
            <a href={`tel:${siteConfig.phone}`} className="btn-outline">
              Call {siteConfig.phone}
            </a>
          </div>
        </motion.div>
      </section>
    </>
  )
}
