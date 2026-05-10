import { MobileCtaBar } from './components/MobileCtaBar'
import { SiteHeader } from './components/SiteHeader'
import { ScrollReveal } from './components/ScrollReveal'
import { AboutSection } from './sections/AboutSection'
import { BeforeAfterSection } from './sections/BeforeAfterSection'
import { FooterSection } from './sections/FooterSection'
import { HeroSection } from './sections/HeroSection'
import { QuoteSection } from './sections/QuoteSection'
import { ReviewsSection } from './sections/ReviewsSection'
import { ServicesSection } from './sections/ServicesSection'
import { TrustBarSection } from './sections/TrustBarSection'

function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <SiteHeader />
      <main id="main" className="app-main">
        <HeroSection />
        <ScrollReveal delay={100}>
          <TrustBarSection />
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <ServicesSection />
        </ScrollReveal>
        <ScrollReveal>
          <BeforeAfterSection />
        </ScrollReveal>
        <ScrollReveal>
          <AboutSection />
        </ScrollReveal>
        <ScrollReveal>
          <ReviewsSection />
        </ScrollReveal>
        <ScrollReveal>
          <QuoteSection />
        </ScrollReveal>
        <FooterSection />
      </main>
      <MobileCtaBar />
    </>
  )
}

export default App
