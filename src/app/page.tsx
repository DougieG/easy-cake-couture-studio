import { Navigation } from '@/components/Navigation'
import { Hero } from '@/components/Hero'
import { MagicDemo } from '@/components/MagicDemo'
import { ProductShowcase } from '@/components/ProductShowcase'
import { VirtualTryOn } from '@/components/VirtualTryOn'
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
      <MagicDemo />
      <ProductShowcase />
      <VirtualTryOn />
      <Technology />
      <Roadmap />
      <Partnership />
      <ContactCTA />
      <Footer />
    </main>
  )
}
