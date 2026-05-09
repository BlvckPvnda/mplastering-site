import { useState } from 'react'
import { services } from '../constants/content'
import { whatsAppHref } from '../constants/contact'
import { Button } from './Button'

type FormState = {
  name: string
  email: string
  phone: string
  serviceId: string
  message: string
}

const initial: FormState = {
  name: '',
  email: '',
  phone: '',
  serviceId: services[0]?.id ?? '',
  message: '',
}

function looseEmailOk(s: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s.trim())
}

export function MultiStepQuoteForm() {
  const [step, setStep] = useState(0)
  const [data, setData] = useState<FormState>(initial)
  const [err, setErr] = useState<string | null>(null)

  const nextFrom0 = () => {
    setErr(null)
    if (!data.name.trim()) return setErr('Please add your name.')
    if (!looseEmailOk(data.email)) return setErr('Please add a valid email.')
    if (!data.phone.trim()) return setErr('Please add a phone number.')
    setStep(1)
  }

  const nextFrom1 = () => {
    setErr(null)
    if (!data.serviceId) return setErr('Please choose a service.')
    if (!data.message.trim()) return setErr('Tell us briefly what you need.')
    setStep(2)
  }

  const waMessage = `Estimate request — ${data.name}\nService: ${data.serviceId}\n${data.message}\nPhone: ${data.phone}`

  if (step === 2) {
    return (
      <div className="quote-success surface-card animate-slide" key="success">
        <h3 className="quote-success__title">Thank you</h3>
        <p className="quote-success__body">
          Thank you for the details—you’re on our list. We’ll follow up shortly to confirm the
          next steps and schedule a visit if needed.
        </p>
        <p className="quote-success__hint">
          Prefer WhatsApp? Send the same summary in one tap.
        </p>
        <div className="quote-success__actions">
          <Button href={whatsAppHref(waMessage)} variant="primary">
            Message on WhatsApp
          </Button>
          <Button href="#hero" variant="ghost">
            Back to top
          </Button>
        </div>
      </div>
    )
  }

  return (
    <form
      className="quote-form surface-card"
      onSubmit={(e) => e.preventDefault()}
      noValidate
    >
      {err ? (
        <p className="form-error" role="alert">
          {err}
        </p>
      ) : null}

      {step === 0 ? (
        <fieldset className="quote-form__fieldset" key="step-0">
          <legend className="quote-form__legend">Your contact details</legend>
          <label className="field">
            <span className="field__label">Full name</span>
            <input
              name="name"
              autoComplete="name"
              value={data.name}
              onChange={(e) => setData({ ...data, name: e.target.value })}
            />
          </label>
          <label className="field">
            <span className="field__label">Email</span>
            <input
              name="email"
              type="email"
              autoComplete="email"
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
            />
          </label>
          <label className="field">
            <span className="field__label">Phone</span>
            <input
              name="phone"
              type="tel"
              autoComplete="tel"
              value={data.phone}
              onChange={(e) => setData({ ...data, phone: e.target.value })}
            />
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
              name="service"
              value={data.serviceId}
              onChange={(e) => setData({ ...data, serviceId: e.target.value })}
            >
              {services.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.title}
                </option>
              ))}
            </select>
          </label>
          <label className="field">
            <span className="field__label">What do you need?</span>
            <textarea
              name="message"
              rows={5}
              value={data.message}
              onChange={(e) => setData({ ...data, message: e.target.value })}
            />
          </label>
          <div className="quote-form__row quote-form__row--split">
            <Button type="button" variant="secondary" onClick={() => setStep(0)}>
              Back
            </Button>
            <Button type="button" variant="primary" onClick={nextFrom1}>
              Finish
            </Button>
          </div>
        </fieldset>
      )}
    </form>
  )
}
