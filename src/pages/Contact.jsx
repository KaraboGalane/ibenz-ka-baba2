import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { HiArrowRight, HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from 'react-icons/hi'
import { FaWhatsapp } from 'react-icons/fa'

import SectionHeading from '../components/SectionHeading'
import { fadeUp, fadeRight, viewportOnce } from '../utils/animations'
import { siteConfig } from '../data/siteConfig'
import { sendContactMessage } from '../services/emailService'

export default function Contact() {
  const [submitting, setSubmitting] = useState(false)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  const whatsappHref = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    "Hi iBenz ka Baba, I'd like to ask about your chauffeur service."
  )}`

  async function onSubmit(data) {
    setSubmitting(true)
    try {
      await sendContactMessage(data)
      toast.success("Message sent — we'll get back to you soon.")
      reset()
    } catch (error) {
      toast.error(
        error?.message?.includes('EmailJS is not configured')
          ? 'Contact form is not fully configured yet — add your EmailJS keys to .env (see README).'
          : 'Something went wrong sending your message. Please call or WhatsApp us directly.'
      )
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <>
      <Helmet>
        <title>Contact Us | iBenz ka Baba</title>
        <meta
          name="description"
          content="Get in touch with iBenz ka Baba — call, WhatsApp, or send an enquiry about our vintage Mercedes-Benz chauffeur service."
        />
      </Helmet>

      <section className="pt-36 pb-16 sm:pt-44">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <SectionHeading
            eyebrow="Contact"
            title="Let's Talk About Your Day"
            subtitle="Reach out directly, or send a message and we'll reply within 24 hours."
          />
        </div>
      </section>

      <section className="pb-20 sm:pb-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            {/* ---------- Info cards ---------- */}
            <motion.div
              variants={fadeRight}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              className="space-y-5"
            >
              <a
                href={`tel:${siteConfig.phone}`}
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-ink-700/50 p-6 transition-colors hover:border-gold/40"
              >
                <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-gold/30 text-gold">
                  <HiOutlinePhone size={20} />
                </span>
                <div>
                  <p className="eyebrow !text-cloud/50">Call Us</p>
                  <p className="mt-1 font-display text-lg text-cloud">{siteConfig.phone}</p>
                </div>
              </a>

              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-ink-700/50 p-6 transition-colors hover:border-gold/40"
              >
                <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-gold/30 text-gold">
                  <FaWhatsapp size={20} />
                </span>
                <div>
                  <p className="eyebrow !text-cloud/50">WhatsApp</p>
                  <p className="mt-1 font-display text-lg text-cloud">Message Us Directly</p>
                </div>
              </a>

              <a
                href={`mailto:${siteConfig.ownerEmail}`}
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-ink-700/50 p-6 transition-colors hover:border-gold/40"
              >
                <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-gold/30 text-gold">
                  <HiOutlineMail size={20} />
                </span>
                <div>
                  <p className="eyebrow !text-cloud/50">Email</p>
                  <p className="mt-1 break-all font-display text-lg text-cloud">
                    {siteConfig.ownerEmail}
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-ink-700/50 p-6">
                <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-gold/30 text-gold">
                  <HiOutlineLocationMarker size={20} />
                </span>
                <div>
                  <p className="eyebrow !text-cloud/50">Based In</p>
                  <p className="mt-1 font-display text-lg text-cloud">{siteConfig.address}</p>
                </div>
              </div>
            </motion.div>

            {/* ---------- Form ---------- */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              className="glass-panel p-6 sm:p-9"
            >
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label className="label-field" htmlFor="name">
                    Full Name
                  </label>
                  <input
                    id="name"
                    className="input-field"
                    placeholder="Your name"
                    {...register('name', { required: true })}
                  />
                  {errors.name && <FieldError />}
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label className="label-field" htmlFor="email">
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="input-field"
                      placeholder="you@email.com"
                      {...register('email', {
                        required: true,
                        pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      })}
                    />
                    {errors.email && <FieldError message="Enter a valid email address" />}
                  </div>
                  <div>
                    <label className="label-field" htmlFor="phone">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      className="input-field"
                      placeholder="Optional"
                      {...register('phone')}
                    />
                  </div>
                </div>

                <div>
                  <label className="label-field" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="input-field resize-none"
                    placeholder="Tell us about your event..."
                    {...register('message', { required: true })}
                  />
                  {errors.message && <FieldError />}
                </div>

                <button type="submit" disabled={submitting} className="btn-gold w-full">
                  {submitting ? 'Sending…' : 'Send Message'} <HiArrowRight />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ---------- Map ---------- */}
      <section className="border-t border-white/5">
        <iframe
          title="iBenz ka Baba location"
          src={siteConfig.mapEmbedSrc}
          width="100%"
          height="420"
          style={{ border: 0, filter: 'grayscale(0.3) contrast(1.1)' }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </>
  )
}

function FieldError({ message = 'This field is required' }) {
  return <p className="mt-1.5 text-xs text-red-400/90">{message}</p>
}
