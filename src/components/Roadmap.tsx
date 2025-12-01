'use client'

import { motion } from 'framer-motion'
import { Rocket, Scissors, Sparkles, Zap, Star, Crown, Package, Gamepad } from 'lucide-react'

const roadmapPhases = [
  {
    version: 'V1',
    name: 'Mini Fabric Printer Studio',
    timeline: 'Q4 2025',
    status: 'current',
    icon: Sparkles,
    color: 'from-couture-pink-400 to-couture-pink-600',
    features: [
      'Compact sublimation printer',
      'AI sketch-to-pattern conversion',
      'Pre-scored fabric panels',
      'Snap-together assembly',
      '50+ starter templates',
      'iOS & Android app',
    ],
    price: '$149',
  },
  {
    version: 'V2',
    name: 'Auto-Cut Couture Lab',
    timeline: 'Q3 2026',
    status: 'upcoming',
    icon: Scissors,
    color: 'from-couture-purple-400 to-couture-purple-600',
    features: [
      'Precision auto-cutting',
      'Heat-seal seam system',
      'Expanded size range (12" dolls)',
      'Fabric pattern library',
      'AR runway preview',
      'Social sharing features',
    ],
    price: '$199',
  },
  {
    version: 'V3',
    name: 'Micro-Knit Maker',
    timeline: '2027',
    status: 'future',
    icon: Zap,
    color: 'from-couture-gold-400 to-couture-gold-600',
    features: [
      'Mini knitting capability',
      'Sweater & accessory patterns',
      '3D texture printing',
      'Multi-color yarn system',
      'Fashion show mode',
      'Creator marketplace',
    ],
    price: '$249',
  },
]

const boyVersions = [
  {
    name: 'Streetwear Forge',
    tagline: 'Design epic action figure gear',
    icon: Gamepad,
    color: 'from-forge-blue-500 to-forge-blue-700',
    features: ['Jerseys', 'Sneaker designs', 'Hoodies', 'Camo patterns'],
  },
  {
    name: 'Hero Cape Printer',
    tagline: 'Create superhero costumes',
    icon: Crown,
    color: 'from-forge-orange-500 to-red-600',
    features: ['Capes', 'Masks', 'Emblems', 'Battle armor'],
  },
  {
    name: 'Mini Sneaker Lab',
    tagline: 'Design collectible kicks',
    icon: Star,
    color: 'from-green-500 to-teal-600',
    features: ['Sneaker skins', 'Custom laces', 'Shoe boxes', 'Limited editions'],
  },
]

export function Roadmap() {
  return (
    <section id="roadmap" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 bg-couture-gold-100 text-couture-gold-700 rounded-full text-sm font-semibold mb-4">
            Product Roadmap
          </span>
          <h2 className="section-heading mb-4">
            <span className="text-gray-900">Building the Future of</span>
            <br />
            <span className="gradient-text">Creative Play</span>
          </h2>
          <p className="section-subheading">
            A multi-year vision to transform how children design, create, and express themselves through fashion.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative mb-24">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-couture-pink-200 via-couture-purple-200 to-couture-gold-200 hidden lg:block" />

          <div className="space-y-12 lg:space-y-24">
            {roadmapPhases.map((phase, index) => (
              <motion.div
                key={phase.version}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`relative flex flex-col lg:flex-row items-center ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Content Card */}
                <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-16' : 'lg:pl-16'}`}>
                  <div className={`card-base relative overflow-hidden ${phase.status === 'current' ? 'ring-2 ring-couture-pink-400' : ''}`}>
                    {/* Status Badge */}
                    {phase.status === 'current' && (
                      <div className="absolute top-4 right-4">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-couture-pink-100 text-couture-pink-700">
                          <span className="w-2 h-2 rounded-full bg-couture-pink-500 mr-2 animate-pulse" />
                          In Development
                        </span>
                      </div>
                    )}

                    {/* Header */}
                    <div className="flex items-center space-x-4 mb-6">
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${phase.color} flex items-center justify-center shadow-lg`}>
                        <phase.icon className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <span className="text-sm font-bold text-gray-500">{phase.version}</span>
                        <h3 className="text-xl font-bold text-gray-900">{phase.name}</h3>
                      </div>
                    </div>

                    {/* Features */}
                    <ul className="space-y-2 mb-6">
                      {phase.features.map((feature) => (
                        <li key={feature} className="flex items-center text-gray-600">
                          <span className="w-1.5 h-1.5 rounded-full bg-couture-pink-400 mr-3" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <span className="text-sm text-gray-500">{phase.timeline}</span>
                      <span className="text-2xl font-bold gradient-text">{phase.price}</span>
                    </div>
                  </div>
                </div>

                {/* Timeline Point */}
                <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-white shadow-xl items-center justify-center z-10">
                  <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${phase.color}`} />
                </div>

                {/* Spacer */}
                <div className="hidden lg:block w-5/12" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Visual Roadmap Evolution */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden p-2">
             <div className="relative aspect-[16/9] md:aspect-[21/9] overflow-hidden rounded-2xl">
              <img 
                src="/images/v1v2v3.jpeg" 
                alt="Product Evolution: V1, V2, and V3" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent text-white">
                <h3 className="text-2xl font-bold mb-2">Hardware Evolution</h3>
                <p className="opacity-90">From single-function printing to a complete textile fabrication lab.</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Boy Versions Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Coming Soon: <span className="gradient-text-forge">Boy-Focused Product Lines</span>
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Expanding the creative universe with action-oriented design experiences for all kids.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {boyVersions.map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="bg-gray-900 rounded-3xl p-8 text-white relative overflow-hidden group"
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent" />
                </div>

                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${product.color} flex items-center justify-center shadow-lg mb-6`}>
                  <product.icon className="w-7 h-7 text-white" />
                </div>

                <h4 className="text-xl font-bold mb-2">{product.name}</h4>
                <p className="text-gray-400 mb-6">{product.tagline}</p>

                <div className="flex flex-wrap gap-2">
                  {product.features.map((feature) => (
                    <span key={feature} className="px-3 py-1 bg-white/10 rounded-full text-sm">
                      {feature}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Licensing Section Teaser */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-couture-pink-50 via-couture-purple-50 to-couture-gold-50 rounded-3xl p-12 text-center"
        >
          <Package className="w-12 h-12 text-couture-purple-500 mx-auto mb-6" />
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Licensing & Brand Partnerships
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
            Official pattern packs featuring Barbie™, LOL Surprise™, Bratz™, Disney Princess™, and more. 
            Premium template subscriptions launching alongside V1.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {['Barbie™', 'LOL Surprise™', 'Bratz™', 'Disney™', 'Hasbro™'].map((brand) => (
              <span key={brand} className="px-4 py-2 bg-white rounded-full shadow-md text-sm font-medium text-gray-700">
                {brand}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
