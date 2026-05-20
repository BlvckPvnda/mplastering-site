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
            <p className="quote__price-guide-label">Typical job guide prices</p>
            <ul className="quote__price-guide-list">
              <li>Single room re-skim — <strong>from £180</strong></li>
              <li>Artex removal &amp; smooth — <strong>from £250</strong></li>
              <li>Exterior render (per m²) — <strong>from £35</strong></li>
            </ul>
            <p className="quote__price-guide-note">No obligation to proceed. Free on-site quote available.</p>
          </div>
          <MultiStepQuoteForm />
        </div>
      </div>
    </section>
  )
}
