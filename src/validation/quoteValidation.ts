export type QuoteFormErrors = {
  name?: string
  email?: string
  phone?: string
  serviceId?: string
  message?: string
}

export function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())
}

export function validateStep0(data: { name: string; email: string; phone: string }): QuoteFormErrors {
  const errors: QuoteFormErrors = {}
  if (!data.name.trim()) errors.name = 'Please add your name.'
  if (!isValidEmail(data.email)) errors.email = 'Please add a valid email.'
  if (!data.phone.trim()) errors.phone = 'Please add a phone number.'
  return errors
}

export function validateStep1(data: { serviceId: string; message: string }): QuoteFormErrors {
  const errors: QuoteFormErrors = {}
  if (!data.serviceId) errors.serviceId = 'Please choose a service.'
  if (!data.message.trim()) errors.message = 'Tell us briefly what you need.'
  return errors
}
