import { Button } from '../components/Button'
import { reviews } from '../constants/content'

export function ReviewsSection() {
  return (
    <section id="reviews" className="reviews section section--center">
      <div className="layout">
        <h2 className="section__title">What local homeowners say about Glen</h2>
        <p className="section__lead">
          Genuine reviews from homeowners across St. Albans, Harpenden, Watford, and surrounding areas—with 50+ on Facebook.
        </p>

        <div className="reviews__grid">
          {reviews.map((review) => (
            <article key={review.name} className="review-card surface-card">
              <div className="review-card__stars" aria-hidden>
                {Array.from({ length: review.rating }).map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              <p className="review-card__quote">"{review.quote}"</p>
              <footer className="review-card__footer">
                <span className="review-card__name">{review.name}</span>
                {review.subtitle && (
                  <span className="review-card__subtitle">{review.subtitle}</span>
                )}
              </footer>
            </article>
          ))}
        </div>

        <div className="reviews__cta-wrapper">
          <Button
            href="https://www.facebook.com/mplastering1/reviews"
            variant="secondary"
            target="_blank"
            rel="noreferrer"
          >
            Read all 50+ reviews on Facebook
          </Button>
        </div>
      </div>
    </section>
  )
}
