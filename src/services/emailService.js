import emailjs from '@emailjs/browser'
import { siteConfig } from '../data/siteConfig'

const { serviceId, ownerTemplateId, customerTemplateId, publicKey } = siteConfig.emailjs

let initialised = false
function ensureInit() {
  if (!initialised && publicKey) {
    emailjs.init({ publicKey })
    initialised = true
  }
}

/**
 * Sends the full booking details to the business owner.
 * Expects your EmailJS "owner" template to contain matching
 * {{variable}} placeholders, e.g. {{first_name}}, {{event_type}}, etc.
 */
export async function sendBookingToOwner(booking) {
  ensureInit()

  if (!serviceId || !ownerTemplateId || !publicKey) {
    throw new Error(
      'EmailJS is not configured yet. Add your Service ID, Template ID and Public Key to .env'
    )
  }

  const templateParams = {
    to_email: siteConfig.ownerEmail,
    first_name: booking.firstName,
    surname: booking.surname,
    customer_email: booking.email,
    phone: booking.phone,
    event_type: booking.eventType,
    pickup_address: booking.pickupAddress,
    destination: booking.destination,
    date: booking.date,
    time: booking.time,
    hours_needed: booking.hoursNeeded,
    passengers: booking.passengers,
    special_requests: booking.specialRequests || 'None',
  }

  return emailjs.send(serviceId, ownerTemplateId, templateParams)
}

/**
 * Sends a thank-you / payment-instructions email back to the customer.
 * Expects your EmailJS "customer" template to contain matching
 * {{variable}} placeholders for the booking + banking details.
 */
export async function sendConfirmationToCustomer(booking) {
  ensureInit()

  if (!serviceId || !customerTemplateId || !publicKey) {
    throw new Error(
      'EmailJS is not configured yet. Add your Service ID, Template ID and Public Key to .env'
    )
  }

  const { banking } = siteConfig

  const templateParams = {
    to_email: booking.email,
    first_name: booking.firstName,
    event_type: booking.eventType,
    date: booking.date,
    time: booking.time,
    bank_name: banking.bankName,
    account_holder: banking.accountHolder,
    account_number: banking.accountNumber,
    branch_code: banking.branchCode,
    reference: `${booking.firstName}${booking.surname}-${booking.date}`.replace(/\s+/g, ''),
    proof_of_payment_email: banking.proofOfPaymentEmail,
  }

  return emailjs.send(serviceId, customerTemplateId, templateParams)
}

/**
 * Runs both sends in sequence: notify the owner first, then confirm
 * with the customer. Used by the Booking page on submit.
 */
export async function submitBooking(booking) {
  await sendBookingToOwner(booking)
  await sendConfirmationToCustomer(booking)
}

/**
 * Sends a general enquiry from the Contact page to the owner.
 * Reuses the owner template — make sure it can also handle a
 * simple {{message}} field, or create a dedicated contact template.
 */
export async function sendContactMessage(message) {
  ensureInit()

  if (!serviceId || !ownerTemplateId || !publicKey) {
    throw new Error(
      'EmailJS is not configured yet. Add your Service ID, Template ID and Public Key to .env'
    )
  }

  const templateParams = {
    to_email: siteConfig.ownerEmail,
    first_name: message.name,
    customer_email: message.email,
    phone: message.phone || 'Not provided',
    special_requests: message.message,
    event_type: 'General Enquiry (Contact Page)',
  }

  return emailjs.send(serviceId, ownerTemplateId, templateParams)
}
