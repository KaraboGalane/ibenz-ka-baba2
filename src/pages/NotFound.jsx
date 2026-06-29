import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { HiArrowRight } from 'react-icons/hi'

import StarEmblem from '../components/StarEmblem'
import GrilleDivider from '../components/GrilleDivider'
import { fadeUp } from '../utils/animations'

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>Page Not Found | iBenz ka Baba</title>
      </Helmet>

      <section className="flex min-h-screen items-center justify-center px-6 pt-24">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="max-w-md text-center"
        >
          <StarEmblem className="mx-auto h-12 w-12 text-gold" />
          <p className="mt-6 font-display text-6xl font-semibold text-cloud">404</p>
          <h1 className="heading-md mt-4 text-cloud text-balance">
            This Road Doesn't Lead Anywhere
          </h1>
          <p className="mt-4 text-cloud/65">
            The page you're looking for has taken a different route. Let's get you back on the
            road.
          </p>
          <div className="mt-8">
            <GrilleDivider />
          </div>
          <Link to="/" className="btn-gold mt-9 inline-flex">
            Back To Home <HiArrowRight />
          </Link>
        </motion.div>
      </section>
    </>
  )
}
