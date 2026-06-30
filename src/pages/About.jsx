import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { HiArrowRight } from 'react-icons/hi'
import { FaHistory, FaCrown, FaHandsHelping, FaUserTie } from 'react-icons/fa'

import SectionHeading from '../components/SectionHeading'
import GrilleDivider from '../components/GrilleDivider'
import StarEmblem from '../components/StarEmblem'
import { fadeUp, fadeLeft, fadeRight, viewportOnce, staggerContainer } from '../utils/animations'

import heroPhoto from '../assets/hero-photo.png'
import aboutPhoto from '../assets/about-photo.png'
import aboutHeroPhoto from '../assets/about-hero.png'

const values = [
  {
    icon: FaHistory,
    title: 'Nostalgia',
    description:
      'The vintage Mercedes belongs to a generation that valued craftsmanship over convenience. We keep that feeling alive, one booking at a time.',
  },
  {
    icon: FaCrown,
    title: 'Dignity',
    description:
      'Whether it is a wedding morning or a funeral procession, every passenger is treated with the same quiet, unhurried respect.',
  },
  {
    icon: FaHandsHelping,
    title: 'Respect',
    description:
      'We honour culture and ceremony. From Umembeso to traditional weddings, the car carries tradition with pride, not as a prop.',
  },
  {
    icon: FaUserTie,
    title: 'Professionalism',
    description:
      'Our chauffeurs are trained to read the room — when to be invisible, when to assist, and when to simply hold the door.',
  },
]

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Us | iBenz ka Baba</title>
        <meta
          name="description"
          content="The story behind iBenz ka Baba — a vintage Mercedes-Benz chauffeur service built on nostalgia, dignity and respect."
        />
      </Helmet>

      {/* ---------- Page header ---------- */}
      <section className="relative flex min-h-[60vh] items-center overflow-hidden pt-24">
        <img
          src={aboutHeroPhoto}
          alt="Vintage cream Mercedes-Benz with chauffeur, parked among guests in formal attire"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/80 to-ink-900/40" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 sm:px-8">
          <motion.div initial="hidden" animate="show" variants={fadeUp} className="max-w-2xl">
            <span className="eyebrow">About Us</span>
            <h1 className="heading-xl mt-5 text-cloud text-balance">
              The Car We All <span className="text-gold">Admired Growing Up</span>
            </h1>
            <p className="mt-6 text-base leading-relaxed text-cloud/75 sm:text-lg">
              "My father was rich" — not in money, but in the way he arrived. iBenz ka Baba was
              built to give every family that same entrance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ---------- Story ---------- */}
      <section className="bg-ink-900 py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 sm:px-8 lg:grid-cols-2 lg:gap-20">
          <motion.div variants={fadeRight} initial="hidden" whileInView="show" viewport={viewportOnce}>
            <span className="eyebrow">Why The Old Mercedes</span>
            <h2 className="heading-lg mt-5 text-cloud text-balance">
              A Symbol Long Before It Was a Service
            </h2>
            <p className="mt-6 text-base leading-relaxed text-cloud/70">
              Long before luxury SUVs and rented limousines, there was the Mercedes parked
              outside the family home — washed every Sunday, driven slowly through the
              neighbourhood, and lent out only for the most important days. It meant the family
              had arrived, in every sense of the word.
            </p>
            <p className="mt-4 text-base leading-relaxed text-cloud/70">
              iBenz ka Baba exists to put that feeling back into reach. We restored and maintain
              our own fleet of vintage Mercedes-Benz vehicles so that the icon your parents and
              grandparents admired can still carry your own milestones — your wedding, your
              matric dance, your homecoming, your final goodbye.
            </p>
            <div className="mt-8">
              <GrilleDivider className="justify-start" />
            </div>
          </motion.div>

          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="overflow-hidden rounded-2xl shadow-deep"
          >
            <img
              src={aboutPhoto}
              alt="Chauffeur standing beside the open door of the vintage Mercedes-Benz"
              className="h-full w-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* ---------- Values ---------- */}
      <section className="bg-ink-700/40 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <SectionHeading
            eyebrow="What We Carry"
            title="Four Things That Never Change"
            subtitle="The car may be vintage, but our standards move with the times."
          />

          <motion.div
            variants={staggerContainer(0.12)}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {values.map((value) => (
              <motion.div
                key={value.title}
                variants={fadeUp}
                className="rounded-2xl border border-white/10 bg-ink-900/60 p-7 text-center"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-gold/30 text-gold">
                  <value.icon size={20} />
                </div>
                <h3 className="mt-6 font-display text-xl font-semibold text-cloud">
                  {value.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-cloud/65">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ---------- Chauffeur professionalism ---------- */}
      <section className="bg-ink-900 py-24 sm:py-32">
        <div className="mx-auto max-w-3xl px-6 text-center sm:px-8">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={viewportOnce}>
            <StarEmblem className="mx-auto h-10 w-10 text-gold" />
            <p className="heading-md mt-7 text-cloud text-balance">
              "A great chauffeur is felt, not seen. Ours know exactly when to step forward and
              when to disappear into the background of your moment."
            </p>
            <p className="mt-6 eyebrow">— The iBenz ka Baba Standard</p>
          </motion.div>
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <section className="bg-ink-700/40 py-20">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mx-auto flex max-w-3xl flex-col items-center gap-7 px-6 text-center sm:px-8"
        >
          <h2 className="heading-md text-cloud text-balance">Ready to arrive like legends?</h2>
          <Link to="/booking" className="btn-gold">
            Book Your Date <HiArrowRight />
          </Link>
        </motion.div>
      </section>
    </>
  )
}
