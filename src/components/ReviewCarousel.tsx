import { useEffect, useId, useMemo, useRef, useState } from 'react'
import type { Review } from '../constants/content'

type Props = {
  reviews: Review[]
}

export function ReviewCarousel({ reviews }: Props) {
  const [i, setI] = useState(0)
  const id = useId()
  const reduceMotion = useRef(false)

  const count = reviews.length
  const safeIndex = ((i % count) + count) % count
  const active = reviews[safeIndex]

  useEffect(() => {
    reduceMotion.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  }, [])

  useEffect(() => {
    if (reduceMotion.current || count <= 1) return
    const t = window.setInterval(() => setI((x) => x + 1), 7000)
    return () => window.clearInterval(t)
  }, [count])

  const stars = useMemo(
    () =>
      Array.from({ length: 5 }, (_, s) => (
        <span key={s} className={s < active.rating ? 'star is-on' : 'star'} aria-hidden>
          ★
        </span>
      )),
    [active.rating],
  )

  return (
    <div className="review-carousel">
      <div
        className="review-carousel__viewport surface-card"
        role="region"
        aria-roledescription="carousel"
        aria-label="Customer reviews"
      >
        <div className="review-carousel__stars" aria-hidden>
          {stars}
        </div>
        <blockquote className="review-carousel__quote animate-fade" key={safeIndex}>
          <p id={`${id}-quote`}>“{active.quote}”</p>
          <footer>
            <cite className="review-carousel__cite">
              {active.name}
              {active.subtitle ? (
                <span className="review-carousel__sub"> · {active.subtitle}</span>
              ) : null}
            </cite>
          </footer>
        </blockquote>

        <div className="review-carousel__controls">
          <button
            type="button"
            className="review-carousel__arrow"
            aria-controls={`${id}-quote`}
            onClick={() => setI((x) => x - 1)}
          >
            Previous review
          </button>
          <button
            type="button"
            className="review-carousel__arrow"
            aria-controls={`${id}-quote`}
            onClick={() => setI((x) => x + 1)}
          >
            Next review
          </button>
        </div>

        <div className="review-carousel__dots" role="tablist" aria-label="Reviews">
          {reviews.map((_, idx) => (
            <button
              key={idx}
              type="button"
              role="tab"
              aria-selected={idx === safeIndex}
              className={`review-carousel__dot ${idx === safeIndex ? 'is-active' : ''}`}
              aria-label={`Show review ${idx + 1}`}
              onClick={() => setI(idx)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
