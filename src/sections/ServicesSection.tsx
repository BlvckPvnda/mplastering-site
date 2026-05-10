import { services } from '../constants/content'
import { Button } from '../components/Button'

export function ServicesSection() {
  return (
    <section id="services" className="services section section--center">
      <div className="layout">
        <h2 className="section__title">Services built around clean results</h2>
        <p className="section__lead">
          From glass-smooth internal skims to weatherproof render systems and honest wall
          restoration—we focus on battered walls, crisp lines, and respectful site habits.
        </p>
        <div className="services__grid">
          {services.map((s) => (
            <article
              key={s.id}
              className={`service-card service-card--${s.id} surface-card${s.id === 'skimming' ? ' service-card--featured' : ''}`}
            >
              <div className={`service-card__accent service-card__accent--${s.id}`} aria-hidden />
              <h3 className="service-card__title">{s.title}</h3>
              <p className="service-card__tagline">{s.tagline}</p>
              <ul className="service-card__bullets">
                {s.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
              <div className="service-card__actions">
                <Button href="#quote" variant="ghost">
                  Get a quote →
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
