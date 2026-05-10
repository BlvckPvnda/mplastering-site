import { BeforeAfterSlider } from '../components/BeforeAfterSlider'
import { beforeAfter } from '../constants/content'

export function BeforeAfterSection() {
  return (
    <section id="before-after" className="before-after section section--center">
      <div className="layout">
        <h2 className="section__title">Before &amp; after</h2>
        <p className="section__lead">
          Artex removal, smoothing, and making good—see how a tired surface can read like a
          brand-new room. Drag the slider to compare.
        </p>
        <BeforeAfterSlider
          beforeSrc={beforeAfter.before}
          afterSrc={beforeAfter.after}
          beforeAlt="Original lath and plaster wall showing aging and texture"
          afterAlt="Same wall perfectly skimmed and smoothed with modern plaster"
        />
      </div>
    </section>
  )
}
