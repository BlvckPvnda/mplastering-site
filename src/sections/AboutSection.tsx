import { aboutCopy, glenPortraitUrl } from '../constants/content'

export function AboutSection() {
  return (
    <section id="about" className="about section">
      <div className="layout about__grid">
        <div className="about__media surface-card">
          <img
            src={glenPortraitUrl}
            alt="Portrait of Glen, owner of Mplastering"
            width={560}
            height={560}
            loading="lazy"
            className="about__img"
          />
        </div>
        <div className="about__copy">
          <h2 className="section__title">{aboutCopy.title}</h2>
          <p className="about__lead">{aboutCopy.lead}</p>
          <ul className="about__pillars">
            {aboutCopy.pillars.map((p) => (
              <li key={p.title} className="about__pillar surface-card">
                <h3 className="about__pillar-title">{p.title}</h3>
                <p className="about__pillar-body">{p.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
