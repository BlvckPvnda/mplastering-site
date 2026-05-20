import { useState, useCallback } from 'react'
import { services } from '../constants/content'
import { whatsAppHref } from '../constants/contact'
import { validateStep0, validateStep1, type QuoteFormErrors } from '../validation/quoteValidation'

export type FormState = {
  name: string
  email: string
  phone: string
  postcode: string
  serviceId: string
  message: string
}

const initial: FormState = {
  name: '',
  email: '',
  phone: '',
  postcode: '',
  serviceId: services[0]?.id ?? '',
  message: '',
}

export function useQuoteForm() {
  const [step, setStep] = useState(0)
  const [data, setData] = useState<FormState>(initial)
  const [errors, setErrors] = useState<QuoteFormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errorFocusTrigger, setErrorFocusTrigger] = useState(0)

  const updateField = useCallback((field: keyof FormState, value: string) => {
    setData((prev) => ({ ...prev, [field]: value }))
    // Clear error for this field when user types
    setErrors((prev) => ({ ...prev, [field]: undefined }))
  }, [])

  const nextFrom0 = useCallback(() => {
    const stepErrors = validateStep0(data)
    if (Object.keys(stepErrors).length > 0) {
      setErrors(stepErrors)
      setErrorFocusTrigger((prev) => prev + 1)
      return false
    }
    setStep(1)
    return true
  }, [data])

  const getWhatsAppMessage = useCallback((formData: FormState) => {
    const selectedService = services.find((s) => s.id === formData.serviceId)?.title ?? formData.serviceId
    return (
      `Estimate request — ${formData.name}\n` +
      `Postcode: ${formData.postcode}\n` +
      `Phone: ${formData.phone}\n` +
      `Service: ${selectedService}\n\n` +
      `Details: ${formData.message}`
    )
  }, [])

  const nextFrom1 = useCallback(async () => {
    const stepErrors = validateStep1(data)
    if (Object.keys(stepErrors).length > 0) {
      setErrors(stepErrors)
      setErrorFocusTrigger((prev) => prev + 1)
      return false
    }

    setIsSubmitting(true)

    // Mock submission — log to console
    console.log('Submitting quote request:', data)
    await new Promise((resolve) => setTimeout(resolve, 1000))

    const url = whatsAppHref(getWhatsAppMessage(data))
    window.open(url, '_blank')

    setIsSubmitting(false)
    setStep(2)
    return true
  }, [data, getWhatsAppMessage])

  const goBack = useCallback(() => {
    setStep(0)
    setErrors({})
  }, [])

  return {
    step,
    data,
    errors,
    isSubmitting,
    updateField,
    nextFrom0,
    nextFrom1,
    goBack,
    whatsAppUrl: whatsAppHref(getWhatsAppMessage(data)),
    errorFocusTrigger,
  }
}
