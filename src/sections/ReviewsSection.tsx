import { ReviewCarousel } from '../components/ReviewCarousel'
import { reviews } from '../constants/content'

export function ReviewsSection() {
  return (
    <section id="reviews" className="reviews section">
      <div className="layout">
        <h2 className="section__title">Reviews from local homeowners</h2>
        <p className="section__lead">
          Placeholder quotes styled as a carousel—swap in your Facebook reviews or embed when
          you’re ready.
        </p>
        <ReviewCarousel reviews={reviews} />
      </div>
    </section>
  )
}
