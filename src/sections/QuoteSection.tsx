import { MultiStepQuoteForm } from '../components/MultiStepQuoteForm'

export function QuoteSection() {
  return (
    <section id="quote" className="quote section">
      <div className="layout quote__layout">
        <div className="quote__intro">
          <h2 className="section__title">Request an estimate</h2>
          <p className="section__lead">
            Two quick steps: your details, then a short description of the job. When you submit,
            you’ll see confirmation here—feel free to follow up by WhatsApp for the fastest reply.
          </p>
        </div>
        <MultiStepQuoteForm />
      </div>
    </section>
  )
}
