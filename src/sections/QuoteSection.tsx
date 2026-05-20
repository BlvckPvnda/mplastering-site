import { MultiStepQuoteForm } from '../components/MultiStepQuoteForm'

export function QuoteSection() {
  return (
    <section id="quote" className="quote section section--center">
      <div className="layout">
        <h2 className="section__title">Request an estimate</h2>
        <p className="section__lead">
          Two quick steps: your details, then a short description of the job. When you submit,
          you'll see confirmation here—feel free to follow up by WhatsApp for the fastest reply.
        </p>

        <div className="quote__grid">
          <div className="quote__price-guide surface-card">
            <h3 className="quote__price-guide-label">Typical job guide prices</h3>
            
            <div className="quote__price-rows">
              <div className="quote__price-row">
                <span className="quote__price-service">Single room re-skim</span>
                <span className="quote__price-amount">from <strong>£180</strong></span>
              </div>
              <div className="quote__price-row">
                <span className="quote__price-service">Two-coat plastering (Float &amp; Set)</span>
                <span className="quote__price-amount">from <strong>£220</strong></span>
              </div>
              <div className="quote__price-row">
                <span className="quote__price-service">Artex removal &amp; smooth</span>
                <span className="quote__price-amount">from <strong>£250</strong></span>
              </div>
              <div className="quote__price-row">
                <span className="quote__price-service">Plasterboard wall installation</span>
                <span className="quote__price-amount">from <strong>£150</strong></span>
              </div>
              <div className="quote__price-row">
                <span className="quote__price-service">Plaster patching &amp; repairs</span>
                <span className="quote__price-amount">from <strong>£80</strong></span>
              </div>
              <div className="quote__price-row">
                <span className="quote__price-service">Exterior render (per m²)</span>
                <span className="quote__price-amount">from <strong>£35</strong></span>
              </div>
            </div>

            <p className="quote__price-guide-note">No obligation to proceed. Free on-site quote available.</p>
          </div>
          <MultiStepQuoteForm />
        </div>
      </div>
    </section>
  )
}
