import { siteTagline } from '../constants/content'
import { PHONE_DISPLAY, PHONE_HREF } from '../constants/contact'
import { Button } from '../components/Button'

export function HeroSection() {
  return (
    <section id="hero" className="hero section section--tight-top">
      <div className="layout hero__grid">
        <div className="hero__copy">
          <p className="hero__eyebrow animate-up">Local plastering · Clean sites · Fast replies</p>
          <h1 className="hero__title animate-up delay-1">
            Flawless finishes for homes that deserve a fresh start.
          </h1>
          <p className="hero__tagline animate-up delay-2">{siteTagline}</p>
          <div className="hero__actions animate-up delay-3">
            <Button href="#quote" variant="primary">
              Request estimate
            </Button>
            <Button href={PHONE_HREF} variant="secondary">
              Call {PHONE_DISPLAY}
            </Button>
            <Button href="#services" variant="ghost">
              View services
            </Button>
          </div>
        </div>
        <div className="hero__panel surface-card" aria-hidden>
          <div className="hero__panel-inner">
            <p className="hero__stat-label">Core focus</p>
            <p className="hero__stat">Skimming · Rendering · Restoration</p>
            <p className="hero__stat-note">Owner on the tools—clear timing, tidy handover.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
