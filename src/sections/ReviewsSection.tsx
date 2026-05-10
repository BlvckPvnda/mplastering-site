import { Button } from '../components/Button'
import { ReviewMarquee } from '../components/ReviewMarquee'
import { reviews } from '../constants/content'

export function ReviewsSection() {
  return (
    <section id="reviews" className="reviews section section--center">
      <div className="layout">
        <h2 className="section__title">Reviews from local homeowners</h2>
        <p className="section__lead">
          Verified social proof from our Facebook community across Greater Manchester.
        </p>
      </div>
      <ReviewMarquee reviews={reviews} />
      <div className="layout">
        <div style={{ marginTop: '2.5rem' }}>
          <Button 
            href="https://www.facebook.com/Mplastering/reviews" 
            variant="secondary"
            target="_blank"
            rel="noreferrer"
          >
            Read all reviews on Facebook
          </Button>
        </div>
      </div>
    </section>
  )
}
