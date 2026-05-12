export type QuoteFormErrors = {
  name?: string
  email?: string
  phone?: string
  postcode?: string
  serviceId?: string
  message?: string
}

export function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())
}

/** PP-8: UK mobile format — 07XXX XXXXXX or +44 7XXX XXXXXX */
export function isValidUKMobile(phone: string): boolean {
  return /^(\+44\s?7|07)\d{3}\s?\d{3}\s?\d{3}$/.test(phone.trim())
}

/** PP-8: UK postcode — e.g. M1 1AA, SK2 6EG, OL4 1AB */
export function isValidUKPostcode(pc: string): boolean {
  return /^[A-Z]{1,2}\d[A-Z\d]?\s?\d[A-Z]{2}$/i.test(pc.trim())
}

export function validateStep0(data: {
  name: string
  email: string
  phone: string
  postcode: string
}): QuoteFormErrors {
  const errors: QuoteFormErrors = {}
  if (!data.name.trim()) errors.name = 'Please add your name.'
  if (!isValidEmail(data.email)) errors.email = 'Please add a valid email address.'
  if (!isValidUKMobile(data.phone))
    errors.phone = 'Please enter a valid UK mobile number (e.g. 07XXX XXXXXX).'
  if (!isValidUKPostcode(data.postcode))
    errors.postcode = 'Please enter a valid UK postcode (e.g. M1 1AA).'
  return errors
}

export function validateStep1(data: { serviceId: string; message: string }): QuoteFormErrors {
  const errors: QuoteFormErrors = {}
  if (!data.serviceId) errors.serviceId = 'Please choose a service.'
  if (!data.message.trim()) errors.message = 'Tell us briefly what you need.'
  return errors
}
