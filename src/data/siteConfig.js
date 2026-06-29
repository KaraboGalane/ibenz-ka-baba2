// Central place for editable business details.
// Values come from environment variables (.env) so they can be changed
// without touching component code. See .env.example for the full list.

export const siteConfig = {
  businessName: 'iBenz ka Baba',
  tagline: 'The Legendary Mercedes Experience',
  subTagline: 'Old School Prestige. Timeless Respect. Your Special Day.',

  ownerEmail: import.meta.env.VITE_OWNER_EMAIL || 'bookings@ibenzkababa.co.za',
  phone: import.meta.env.VITE_BUSINESS_PHONE || '+27 00 000 0000',
  whatsappNumber: import.meta.env.VITE_WHATSAPP_NUMBER || '27000000000',
  address: import.meta.env.VITE_BUSINESS_ADDRESS || 'Pretoria, Gauteng, South Africa',

  emailjs: {
    serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || '',
    ownerTemplateId: import.meta.env.VITE_EMAILJS_OWNER_TEMPLATE_ID || '',
    customerTemplateId: import.meta.env.VITE_EMAILJS_CUSTOMER_TEMPLATE_ID || '',
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '',
  },

  banking: {
    bankName: import.meta.env.VITE_BANK_NAME || 'Your Bank',
    accountHolder: import.meta.env.VITE_BANK_ACCOUNT_HOLDER || 'iBenz ka Baba (Pty) Ltd',
    accountNumber: import.meta.env.VITE_BANK_ACCOUNT_NUMBER || '0000000000',
    branchCode: import.meta.env.VITE_BANK_BRANCH_CODE || '000000',
    proofOfPaymentEmail:
      import.meta.env.VITE_BANK_PROOF_OF_PAYMENT_EMAIL || 'payments@ibenzkababa.co.za',
  },

  social: {
    instagram: 'https://instagram.com',
    facebook: 'https://facebook.com',
    tiktok: 'https://tiktok.com',
  },

  mapEmbedSrc:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57180.99!2d28.1879!3d-25.7479!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sPretoria!5e0!3m2!1sen!2sza!4v1700000000000',
}
