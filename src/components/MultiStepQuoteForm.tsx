import { useRef, useEffect } from 'react'
import { services } from '../constants/content'
import { Button } from './Button'
import { useQuoteForm } from '../hooks/useQuoteForm'

export function MultiStepQuoteForm() {
  const {
    step,
    data,
    errors,
    isSubmitting,
    updateField,
    nextFrom0,
    nextFrom1,
    goBack,
    whatsAppUrl,
  } = useQuoteForm()

  const firstErrorRef = useRef<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>(null)
  const errorSummaryRef = useRef<HTMLParagraphElement>(null)

  // Focus management for errors
  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      if (errorSummaryRef.current) {
        errorSummaryRef.current.focus()
      } else if (firstErrorRef.current) {
        firstErrorRef.current.focus()
      }
    }
  }, [errors])

  if (step === 2) {
    return (
      <div className="quote-success surface-card animate-slide" key="success">
        <h3 className="quote-success__title">Thank you</h3>
        <p className="quote-success__body">
          Thank you for the details—you're on our list. We'll follow up shortly to confirm the
          next steps and schedule a visit if needed.
        </p>
        <p className="quote-success__hint">
          Prefer WhatsApp? Send the same summary in one tap.
        </p>
        <div className="quote-success__actions">
          <Button href={whatsAppUrl} variant="primary">
            Message on WhatsApp
          </Button>
          <Button href="#hero" variant="ghost">
            Back to top
          </Button>
        </div>
      </div>
    )
  }

  const hasErrors = Object.keys(errors).length > 0
  const totalSteps = 2

  return (
    <form
      className="quote-form surface-card"
      onSubmit={(e) => e.preventDefault()}
      noValidate
    >
      <div className="quote-form__progress" aria-hidden="true">
        {[...Array(totalSteps)].map((_, i) => (
          <div
            key={i}
            className={`quote-form__progress-step ${i <= step ? 'is-active' : ''}`}
          />
        ))}
      </div>

      <p className="visually-hidden">
        Step {step + 1} of {totalSteps}
      </p>

      {/* Persistent error region for screen readers */}
      <div aria-live="assertive" aria-atomic="true">
        {hasErrors && (
          <p
            ref={errorSummaryRef}
            className="form-error"
            tabIndex={-1}
          >
            Please fix the errors below to continue.
          </p>
        )}
      </div>

      {step === 0 ? (
        <fieldset className="quote-form__fieldset" key="step-0">
          <legend className="quote-form__legend">Your contact details</legend>

          <label className="field">
            <span className="field__label">Full name</span>
            <input
              ref={errors.name ? (firstErrorRef as any) : null}
              name="name"
              autoComplete="name"
              value={data.name}
              onChange={(e) => updateField('name', e.target.value)}
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? 'name-error' : undefined}
            />
            {errors.name && <span id="name-error" className="field__error">{errors.name}</span>}
          </label>

          <label className="field">
            <span className="field__label">Email</span>
            <input
              ref={!errors.name && errors.email ? (firstErrorRef as any) : null}
              name="email"
              type="email"
              autoComplete="email"
              value={data.email}
              onChange={(e) => updateField('email', e.target.value)}
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? 'email-error' : undefined}
            />
            {errors.email && <span id="email-error" className="field__error">{errors.email}</span>}
          </label>

          <label className="field">
            <span className="field__label">Phone</span>
            <input
              ref={!errors.name && !errors.email && errors.phone ? (firstErrorRef as any) : null}
              name="phone"
              type="tel"
              autoComplete="tel"
              placeholder="07XXX XXXXXX"
              value={data.phone}
              onChange={(e) => updateField('phone', e.target.value)}
              aria-invalid={!!errors.phone}
              aria-describedby={errors.phone ? 'phone-error' : undefined}
            />
            {errors.phone && <span id="phone-error" className="field__error">{errors.phone}</span>}
          </label>

          {/* PP-8: postcode field for service area qualification */}
          <label className="field">
            <span className="field__label">Postcode</span>
            <input
              ref={!errors.name && !errors.email && !errors.phone && errors.postcode ? (firstErrorRef as any) : null}
              name="postcode"
              type="text"
              autoComplete="postal-code"
              placeholder="e.g. M1 1AA"
              value={data.postcode}
              onChange={(e) => updateField('postcode', e.target.value.toUpperCase())}
              aria-invalid={!!errors.postcode}
              aria-describedby={errors.postcode ? 'postcode-error' : undefined}
            />
            {errors.postcode && <span id="postcode-error" className="field__error">{errors.postcode}</span>}
          </label>

          <div className="quote-form__row">
            <Button type="button" variant="primary" onClick={nextFrom0}>
              Continue
            </Button>
          </div>
        </fieldset>
      ) : (
        <fieldset className="quote-form__fieldset" key="step-1">
          <legend className="quote-form__legend">Job details</legend>

          <label className="field">
            <span className="field__label">Service</span>
            <select
              ref={errors.serviceId ? (firstErrorRef as any) : null}
              name="service"
              value={data.serviceId}
              onChange={(e) => updateField('serviceId', e.target.value)}
              aria-invalid={!!errors.serviceId}
              aria-describedby={errors.serviceId ? 'service-error' : undefined}
            >
              {services.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.title}
                </option>
              ))}
            </select>
            {errors.serviceId && <span id="service-error" className="field__error">{errors.serviceId}</span>}
          </label>

          <label className="field">
            <span className="field__label">What do you need?</span>
            <textarea
              ref={!errors.serviceId && errors.message ? (firstErrorRef as any) : null}
              name="message"
              rows={5}
              value={data.message}
              onChange={(e) => updateField('message', e.target.value)}
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? 'message-error' : undefined}
            />
            {errors.message && <span id="message-error" className="field__error">{errors.message}</span>}
          </label>

          <div className="quote-form__row quote-form__row--split">
            <Button type="button" variant="secondary" onClick={goBack} disabled={isSubmitting}>
              Back
            </Button>
            {/* SD-5: isSubmitting now also disables + shows spinner text */}
            <Button type="button" variant="primary" onClick={nextFrom1} disabled={isSubmitting}>
              {isSubmitting ? '⏳ Sending…' : 'Submit request'}
            </Button>
          </div>
        </fieldset>
      )}
    </form>
  )
}
