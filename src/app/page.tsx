import { Navigation } from '@/components/Navigation'
import { Hero } from '@/components/Hero'
import { ProductShowcase } from '@/components/ProductShowcase'
import { Technology } from '@/components/Technology'
import { Roadmap } from '@/components/Roadmap'
import { Partnership } from '@/components/Partnership'
import { ContactCTA } from '@/components/ContactCTA'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <main className="relative">
      <Navigation />
      <Hero />
      <ProductShowcase />
      <Technology />
      <Roadmap />
      <Partnership />
      <ContactCTA />
      <Footer />
    </main>
  )
}
