import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { useForm, Controller } from 'react-hook-form'
import DatePicker from 'react-datepicker'
import { toast } from 'react-toastify'
import {
  HiArrowRight,
  HiOutlineCalendar,
  HiOutlineClock,
  HiOutlineLocationMarker,
} from 'react-icons/hi'
import 'react-datepicker/dist/react-datepicker.css'

import GrilleDivider from '../components/GrilleDivider'
import { fadeUp, fadeRight } from '../utils/animations'
import { eventTypes } from '../data/eventTypes'
import { siteConfig } from '../data/siteConfig'
import { submitBooking } from '../services/emailService'

const steps = [
  { title: 'Submit Your Details', description: 'Fill in your event and contact information below.' },
  { title: 'We Confirm Availability', description: "We'll reply within 24 hours with confirmation and a quote." },
  { title: 'Secure Your Date', description: 'A deposit confirms your booking — banking details follow by email.' },
  { title: 'Arrive Like Legends', description: 'Your chauffeur and Mercedes arrive on the day, on time, every time.' },
]

export default function Booking() {
  const [submitting, setSubmitting] = useState(false)
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: '',
      surname: '',
      email: '',
      phone: '',
      eventType: '',
      pickupAddress: '',
      destination: '',
      date: null,
      time: '',
      hoursNeeded: 2,
      passengers: 1,
      specialRequests: '',
      agreeTerms: false,
    },
  })

  async function onSubmit(data) {
    setSubmitting(true)
    try {
      const formattedDate = data.date
        ? data.date.toLocaleDateString('en-ZA', { year: 'numeric', month: 'long', day: 'numeric' })
        : ''

      await submitBooking({ ...data, date: formattedDate })

      toast.success(
        "Booking received! Check your email for payment details to secure your date."
      )
      reset()
    } catch (error) {
      toast.error(
        error?.message?.includes('EmailJS is not configured')
          ? 'Booking form is not fully configured yet — add your EmailJS keys to .env (see README).'
          : 'Something went wrong sending your booking. Please call or WhatsApp us directly.'
      )
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <>
      <Helmet>
        <title>Book Now | iBenz ka Baba</title>
        <meta
          name="description"
          content="Book the vintage Mercedes-Benz chauffeur service for your wedding, matric dance, traditional ceremony or special occasion."
        />
      </Helmet>

      <section className="pt-36 pb-20 sm:pt-44">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            {/* ---------- Left: intro + process ---------- */}
            <motion.div variants={fadeRight} initial="hidden" animate="show">
              <span className="eyebrow">Book Now</span>
              <h1 className="heading-lg mt-5 text-cloud text-balance">
                Reserve Your Date in Under Two Minutes
              </h1>
              <p className="mt-6 text-base leading-relaxed text-cloud/70">
                Tell us about your event and we'll take it from there. You'll receive a
                confirmation email immediately, followed by a personal reply from our team.
              </p>

              <div className="mt-12">
                <GrilleDivider className="mb-10 justify-start" />
                <ol className="space-y-8">
                  {steps.map((step, i) => (
                    <li key={step.title} className="flex gap-5">
                      <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border border-gold/40 font-display text-sm text-gold">
                        {i + 1}
                      </span>
                      <div>
                        <p className="font-display text-lg font-semibold text-cloud">
                          {step.title}
                        </p>
                        <p className="mt-1 text-sm text-cloud/60">{step.description}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="mt-12 rounded-2xl border border-white/10 bg-ink-700/50 p-6">
                <p className="eyebrow">Prefer to Talk First?</p>
                <p className="mt-3 text-sm text-cloud/70">
                  Call or WhatsApp us directly and we'll guide you through it.
                </p>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="mt-4 inline-block font-display text-xl text-gold"
                >
                  {siteConfig.phone}
                </a>
              </div>
            </motion.div>

            {/* ---------- Right: form ---------- */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              transition={{ delay: 0.15 }}
              className="glass-panel p-6 sm:p-9"
            >
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-7">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label className="label-field" htmlFor="firstName">
                      First Name
                    </label>
                    <input
                      id="firstName"
                      className="input-field"
                      placeholder="Thandiwe"
                      {...register('firstName', { required: true })}
                    />
                    {errors.firstName && <FieldError />}
                  </div>
                  <div>
                    <label className="label-field" htmlFor="surname">
                      Surname
                    </label>
                    <input
                      id="surname"
                      className="input-field"
                      placeholder="Khumalo"
                      {...register('surname', { required: true })}
                    />
                    {errors.surname && <FieldError />}
                  </div>
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
                      placeholder="082 000 0000"
                      {...register('phone', { required: true })}
                    />
                    {errors.phone && <FieldError />}
                  </div>
                </div>

                <div>
                  <label className="label-field" htmlFor="eventType">
                    Event Type
                  </label>
                  <select
                    id="eventType"
                    className="input-field"
                    defaultValue=""
                    {...register('eventType', { required: true })}
                  >
                    <option value="" disabled>
                      Select your occasion
                    </option>
                    {eventTypes.map((type) => (
                      <option key={type} value={type} className="bg-ink-700">
                        {type}
                      </option>
                    ))}
                  </select>
                  {errors.eventType && <FieldError message="Select an event type" />}
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label className="label-field" htmlFor="pickupAddress">
                      <HiOutlineLocationMarker className="mr-1 inline" />
                      Pickup Address
                    </label>
                    <input
                      id="pickupAddress"
                      className="input-field"
                      placeholder="Street, suburb, city"
                      {...register('pickupAddress', { required: true })}
                    />
                    {errors.pickupAddress && <FieldError />}
                  </div>
                  <div>
                    <label className="label-field" htmlFor="destination">
                      <HiOutlineLocationMarker className="mr-1 inline" />
                      Destination
                    </label>
                    <input
                      id="destination"
                      className="input-field"
                      placeholder="Venue name or address"
                      {...register('destination', { required: true })}
                    />
                    {errors.destination && <FieldError />}
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label className="label-field" htmlFor="date">
                      <HiOutlineCalendar className="mr-1 inline" />
                      Date
                    </label>
                    <Controller
                      name="date"
                      control={control}
                      rules={{ required: true }}
                      render={({ field }) => (
                        <DatePicker
                          id="date"
                          selected={field.value}
                          onChange={field.onChange}
                          minDate={new Date()}
                          placeholderText="Select a date"
                          dateFormat="d MMMM yyyy"
                          className="input-field w-full"
                          calendarClassName="ibenz-datepicker"
                          autoComplete="off"
                        />
                      )}
                    />
                    {errors.date && <FieldError message="Select your event date" />}
                  </div>
                  <div>
                    <label className="label-field" htmlFor="time">
                      <HiOutlineClock className="mr-1 inline" />
                      Time
                    </label>
                    <input
                      id="time"
                      type="time"
                      className="input-field"
                      {...register('time', { required: true })}
                    />
                    {errors.time && <FieldError />}
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label className="label-field" htmlFor="hoursNeeded">
                      Hours Needed
                    </label>
                    <input
                      id="hoursNeeded"
                      type="number"
                      min={1}
                      className="input-field"
                      {...register('hoursNeeded', { required: true, min: 1 })}
                    />
                    {errors.hoursNeeded && <FieldError message="Enter at least 1 hour" />}
                  </div>
                  <div>
                    <label className="label-field" htmlFor="passengers">
                      Number of Passengers
                    </label>
                    <input
                      id="passengers"
                      type="number"
                      min={1}
                      className="input-field"
                      {...register('passengers', { required: true, min: 1 })}
                    />
                    {errors.passengers && <FieldError message="Enter at least 1 passenger" />}
                  </div>
                </div>

                <div>
                  <label className="label-field" htmlFor="specialRequests">
                    Special Requests
                  </label>
                  <textarea
                    id="specialRequests"
                    rows={4}
                    className="input-field resize-none"
                    placeholder="Car decoration, specific routes, accessibility needs..."
                    {...register('specialRequests')}
                  />
                </div>

                <details className="rounded-lg border border-white/10 bg-white/[0.02] px-4 py-3 text-xs text-cloud/60">
                  <summary className="cursor-pointer select-none font-medium text-cloud/80">
                    Booking Terms (tap to read)
                  </summary>
                  <ul className="mt-3 list-disc space-y-1.5 pl-4">
                    <li>A deposit is required within 48 hours to secure your date.</li>
                    <li>Your date is only confirmed once payment reflects in our account.</li>
                    <li>Cancellations within 7 days of the event are non-refundable.</li>
                    <li>Hours beyond your booked package are billed at the standard hourly rate.</li>
                  </ul>
                </details>

                <div className="flex items-start gap-3">
                  <input
                    id="agreeTerms"
                    type="checkbox"
                    className="mt-1 h-4 w-4 flex-shrink-0 rounded border-white/30 bg-white/5 text-gold accent-gold"
                    {...register('agreeTerms', { required: true })}
                  />
                  <label htmlFor="agreeTerms" className="text-sm text-cloud/70">
                    I agree to the Terms above and understand my date is confirmed only once
                    payment is received.
                  </label>
                </div>
                {errors.agreeTerms && <FieldError message="Please accept the terms to continue" />}

                <button type="submit" disabled={submitting} className="btn-gold w-full">
                  {submitting ? 'Sending…' : 'Book Now'} <HiArrowRight />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}

function FieldError({ message = 'This field is required' }) {
  return <p className="mt-1.5 text-xs text-red-400/90">{message}</p>
}
