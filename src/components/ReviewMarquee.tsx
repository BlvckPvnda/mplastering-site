import type { Review } from '../constants/content'

type Props = {
  reviews: Review[]
}

export function ReviewMarquee({ reviews }: Props) {
  // Double the reviews to create a seamless loop
  const duplicatedReviews = [...reviews, ...reviews]

  return (
    <div className="marquee-container" role="region" aria-label="Customer reviews conveyor belt">
      <div className="marquee-content">
        {duplicatedReviews.map((review, idx) => (
          <article key={idx} className="review-card surface-card">
            <div className="review-card__stars" aria-hidden>
              {Array.from({ length: review.rating }).map((_, i) => (
                <span key={i}>★</span>
              ))}
            </div>
            <p className="review-card__quote">“{review.quote}”</p>
            <footer className="review-card__footer">
              <span className="review-card__name">{review.name}</span>
              {review.subtitle && (
                <span className="review-card__subtitle">{review.subtitle}</span>
              )}
            </footer>
          </article>
        ))}
      </div>
    </div>
  )
}
