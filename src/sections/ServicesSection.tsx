import { services } from '../constants/content'

export function ServicesSection() {
  return (
    <section id="services" className="services section">
      <div className="layout">
        <h2 className="section__title">Services built around clean results</h2>
        <p className="section__lead">
          From glass-smooth internal skims to weatherproof render systems and honest wall
          restoration—we focus on battered walls, crisp lines, and respectful site habits.
        </p>
        <div className="services__grid">
          {services.map((s) => (
            <article key={s.id} className="service-card surface-card">
              <div className={`service-card__accent service-card__accent--${s.id}`} aria-hidden />
              <h3 className="service-card__title">{s.title}</h3>
              <p className="service-card__tagline">{s.tagline}</p>
              <ul className="service-card__bullets">
                {s.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
