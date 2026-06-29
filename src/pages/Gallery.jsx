import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'

import SectionHeading from '../components/SectionHeading'
import GalleryLightbox from '../components/GalleryLightbox'
import { fadeUp, staggerContainer, viewportOnce } from '../utils/animations'
import { galleryItems, galleryCategories } from '../data/gallery'

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [activeIndex, setActiveIndex] = useState(null)

  const filtered =
    activeCategory === 'All'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory)

  function handleNavigate(direction) {
    setActiveIndex((current) => {
      if (current === null) return current
      const next = (current + direction + filtered.length) % filtered.length
      return next
    })
  }

  return (
    <>
      <Helmet>
        <title>Gallery | iBenz ka Baba</title>
        <meta
          name="description"
          content="A look at the vintage Mercedes-Benz in action — weddings, matric dances, traditional ceremonies and editorial photoshoots."
        />
      </Helmet>

      <section className="pt-36 pb-16 sm:pt-44">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <SectionHeading
            eyebrow="Gallery"
            title="Moments Carried With Us"
            subtitle="A glimpse of the Mercedes at work. Replace these placeholders with your own event photography as it comes in."
          />

          <motion.div
            variants={staggerContainer(0.06)}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="mt-12 flex flex-wrap justify-center gap-3"
          >
            {galleryCategories.map((category) => (
              <motion.button
                key={category}
                variants={fadeUp}
                onClick={() => setActiveCategory(category)}
                className={`rounded-full border px-5 py-2 text-xs font-body uppercase tracking-wider transition-all duration-300 ${
                  activeCategory === category
                    ? 'border-gold bg-gold text-ink-900'
                    : 'border-white/15 text-cloud/70 hover:border-gold/50 hover:text-gold'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="pb-24 sm:pb-32">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <motion.div
            layout
            className="columns-1 gap-5 sm:columns-2 lg:columns-3"
          >
            {filtered.map((item, i) => (
              <motion.button
                layout
                key={item.id}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={viewportOnce}
                onClick={() => setActiveIndex(i)}
                className="group mb-5 block w-full break-inside-avoid overflow-hidden rounded-2xl border border-white/10"
              >
                <div className="relative">
                  <img
                    src={item.src}
                    alt={item.alt}
                    loading="lazy"
                    className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex items-end bg-gradient-to-t from-ink-900/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span className="eyebrow !text-gold-light p-5 text-left">
                      {item.category}
                    </span>
                  </div>
                </div>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      <GalleryLightbox
        items={filtered}
        activeIndex={activeIndex}
        onClose={() => setActiveIndex(null)}
        onNavigate={handleNavigate}
      />
    </>
  )
}
