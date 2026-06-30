import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'

import SectionHeading from '../components/SectionHeading'
import GalleryLightbox from '../components/GalleryLightbox'
import { fadeUp, staggerContainer, viewportOnce } from '../utils/animations'
import { galleryItems, galleryCategories } from '../data/gallery'

import wedding1 from '../assets/gallery/wedding-01.png'
import wedding2 from '../assets/gallery/wedding-02.png'
import matric1 from '../assets/gallery/matric-01.png'

export const galleryItems = [
  {
    id: 1,
    src: wedding1,
    alt: 'Vintage Mercedes-Benz at a wedding entrance',
    category: 'Weddings',
  },
  {
    id: 2,
    src: wedding2,
    alt: 'Bride and groom with the vintage Mercedes-Benz',
    category: 'Weddings',
  },
  {
    id: 3,
    src: matric1,
    alt: 'Matric dance couple beside the vintage Mercedes-Benz',
    category: 'Matric Dance',
  },
]

export const galleryCategories = [
  'All',
  ...Array.from(new Set(galleryItems.map((item) => item.category))),
]