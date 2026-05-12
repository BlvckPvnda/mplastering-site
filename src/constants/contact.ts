/** Replace placeholders with production numbers before launch. */

/** Update display text and href together for your live number */
export const PHONE_DISPLAY = '07951 049108'
export const PHONE_HREF = 'tel:+447951049108'

/** E.164 without + for wa.me links */
export const WHATSAPP_E164 = '447951049108'

export const EMAIL_DISPLAY = 'mplastering@live.co.uk'

export function whatsAppHref(prefill?: string): string {
  const base = `https://wa.me/${WHATSAPP_E164}`
  if (!prefill?.trim()) return base
  return `${base}?text=${encodeURIComponent(prefill)}`
}

export const MAP_SEARCH_URL =
  'https://www.google.com/maps/search/?api=1&query=Mplastering+St+Albans+Hertfordshire'
