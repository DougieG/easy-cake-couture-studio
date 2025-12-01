import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { FileText, Cpu, Layers, Shield, Palette, Package, Users, Book } from 'lucide-react'
import Link from 'next/link'

const docCategories = [
  {
    icon: Cpu,
    title: 'Hardware Specifications',
    description: 'Complete technical specifications for the Couture Studio device',
    href: '/docs/hardware',
    items: ['Dimensions & Weight', 'Print Specifications', 'Power Requirements', 'Safety Features'],
  },
  {
    icon: Layers,
    title: 'Software Architecture',
    description: 'System design, API documentation, and integration guides',
    href: '/docs/software',
    items: ['AI Pipeline', 'Mobile App', 'Cloud Services', 'Device Firmware'],
  },
  {
    icon: Palette,
    title: 'Design System',
    description: 'Brand guidelines, UI components, and visual standards',
    href: '/docs/design',
    items: ['Brand Colors', 'Typography', 'Iconography', 'UI Components'],
  },
  {
    icon: Shield,
    title: 'Safety & Compliance',
    description: 'Safety standards, certifications, and regulatory compliance',
    href: '/docs/safety',
    items: ['CPSC Compliance', 'COPPA Guidelines', 'Thermal Safety', 'Materials Safety'],
  },
  {
    icon: Package,
    title: 'Manufacturing',
    description: 'BOM, supply chain, and production specifications',
    href: '/docs/manufacturing',
    items: ['Bill of Materials', 'Assembly Guide', 'QC Procedures', 'Packaging'],
  },
  {
    icon: Users,
    title: 'User Research',
    description: 'Play testing results, user personas, and market research',
    href: '/docs/research',
    items: ['User Personas', 'Play Test Results', 'Market Analysis', 'Competitor Review'],
  },
]

export default function DocsPage() {
  return (
    <main className="relative">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center space-x-3 mb-6">
              <Book className="w-8 h-8 text-couture-purple-500" />
              <span className="text-sm font-semibold text-couture-purple-600">DOCUMENTATION</span>
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Technical Documentation
            </h1>
            <p className="text-xl text-gray-600">
              Comprehensive technical specifications, architecture documentation, and development guides 
              for the Easy Cake Couture Studio platform.
            </p>
          </div>
        </div>
      </section>

      {/* Documentation Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {docCategories.map((category) => (
              <Link
                key={category.title}
                href={category.href}
                className="group bg-gray-50 rounded-2xl p-6 hover:bg-gradient-to-br hover:from-couture-pink-50 hover:to-couture-purple-50 transition-all hover:shadow-lg"
              >
                <div className="w-12 h-12 rounded-xl bg-white shadow-md flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <category.icon className="w-6 h-6 text-couture-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-couture-purple-700">
                  {category.title}
                </h3>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <ul className="space-y-1">
                  {category.items.map((item) => (
                    <li key={item} className="text-sm text-gray-500 flex items-center">
                      <span className="w-1 h-1 rounded-full bg-couture-pink-400 mr-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Reference */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8">Quick Reference</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Hardware Specs Summary */}
            <div className="bg-white/5 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-couture-pink-400 mb-4">Hardware Overview</h3>
              <table className="w-full text-sm">
                <tbody className="divide-y divide-white/10">
                  <tr><td className="py-2 text-gray-400">Dimensions</td><td className="py-2 text-right">12&quot; × 10&quot; × 8&quot;</td></tr>
                  <tr><td className="py-2 text-gray-400">Weight</td><td className="py-2 text-right">4.2 lbs</td></tr>
                  <tr><td className="py-2 text-gray-400">Print Area</td><td className="py-2 text-right">6&quot; × 8&quot; max</td></tr>
                  <tr><td className="py-2 text-gray-400">Resolution</td><td className="py-2 text-right">300 DPI</td></tr>
                  <tr><td className="py-2 text-gray-400">Print Speed</td><td className="py-2 text-right">&lt;3 min/panel</td></tr>
                  <tr><td className="py-2 text-gray-400">Connectivity</td><td className="py-2 text-right">WiFi, BLE 5.0</td></tr>
                  <tr><td className="py-2 text-gray-400">Power</td><td className="py-2 text-right">120V AC, 60W</td></tr>
                </tbody>
              </table>
            </div>

            {/* Software Stack */}
            <div className="bg-white/5 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-couture-pink-400 mb-4">Software Stack</h3>
              <table className="w-full text-sm">
                <tbody className="divide-y divide-white/10">
                  <tr><td className="py-2 text-gray-400">Mobile App</td><td className="py-2 text-right">React Native</td></tr>
                  <tr><td className="py-2 text-gray-400">Backend</td><td className="py-2 text-right">Node.js / FastAPI</td></tr>
                  <tr><td className="py-2 text-gray-400">AI Models</td><td className="py-2 text-right">PyTorch / ONNX</td></tr>
                  <tr><td className="py-2 text-gray-400">Cloud</td><td className="py-2 text-right">AWS / GCP</td></tr>
                  <tr><td className="py-2 text-gray-400">Database</td><td className="py-2 text-right">PostgreSQL</td></tr>
                  <tr><td className="py-2 text-gray-400">Firmware</td><td className="py-2 text-right">ESP32 / C++</td></tr>
                  <tr><td className="py-2 text-gray-400">3D Rendering</td><td className="py-2 text-right">Three.js / WebGL</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
