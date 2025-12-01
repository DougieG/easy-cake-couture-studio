'use client'

import { motion } from 'framer-motion'
import { Cpu, Cloud, Smartphone, Layers, Shield, Zap, Database, Globe2 } from 'lucide-react'

const techStack = [
  {
    category: 'AI & Vision',
    items: [
      { name: 'Sketch Recognition CNN', description: 'Custom neural network trained on 500K+ child drawings' },
      { name: 'Style Transfer AI', description: 'Transforms crude sketches into professional patterns' },
      { name: 'Pattern Generation', description: 'Auto-generates seam allowances, fold lines, and assembly guides' },
    ]
  },
  {
    category: 'Hardware',
    items: [
      { name: 'Compact Sublimation', description: 'Modified dye-sub tech optimized for small-format fabric' },
      { name: 'Auto-Score Cutter', description: 'Precision scoring for easy fold-and-snap assembly' },
      { name: 'Safety Systems', description: 'Cool-touch surfaces, auto-shutoff, child-safe mechanisms' },
    ]
  },
  {
    category: 'Software',
    items: [
      { name: 'Native iOS/Android App', description: 'React Native for cross-platform consistency' },
      { name: 'Cloud Processing', description: 'Heavy AI inference offloaded to AWS/GCP' },
      { name: 'Real-time Preview', description: 'WebGL-powered 3D garment visualization' },
    ]
  },
]

const architectureDiagram = `
┌─────────────────────────────────────────────────────────────────┐
│                        USER INTERFACE                           │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────────────────┐ │
│  │  Mobile App │  │  Tablet App │  │  Parent Dashboard (Web) │ │
│  └──────┬──────┘  └──────┬──────┘  └────────────┬────────────┘ │
└─────────┼────────────────┼──────────────────────┼───────────────┘
          │                │                      │
          ▼                ▼                      ▼
┌─────────────────────────────────────────────────────────────────┐
│                      API GATEWAY (REST + WebSocket)             │
└─────────────────────────────┬───────────────────────────────────┘
                              │
          ┌───────────────────┼───────────────────┐
          ▼                   ▼                   ▼
┌─────────────────┐ ┌─────────────────┐ ┌─────────────────────────┐
│  AI PIPELINE    │ │  USER SERVICE   │ │  SUBSCRIPTION SERVICE   │
│ ┌─────────────┐ │ │ ┌─────────────┐ │ │ ┌─────────────────────┐ │
│ │Sketch→Vector│ │ │ │   Auth      │ │ │ │  Stripe Integration │ │
│ │Pattern Gen  │ │ │ │   Profile   │ │ │ │  Template Library   │ │
│ │Style AI     │ │ │ │   Designs   │ │ │ │  Premium Patterns   │ │
│ └─────────────┘ │ │ └─────────────┘ │ │ └─────────────────────┘ │
└────────┬────────┘ └────────┬────────┘ └───────────┬─────────────┘
         │                   │                      │
         ▼                   ▼                      ▼
┌─────────────────────────────────────────────────────────────────┐
│                    DEVICE COMMUNICATION LAYER                    │
│              (BLE + WiFi Direct + Cloud Relay)                   │
└─────────────────────────────────┬───────────────────────────────┘
                                  │
                                  ▼
┌─────────────────────────────────────────────────────────────────┐
│                     COUTURE STUDIO DEVICE                        │
│  ┌──────────────┐ ┌──────────────┐ ┌──────────────────────────┐ │
│  │ Print Engine │ │ Score/Cut    │ │ Onboard Microcontroller  │ │
│  │ (Sublimation)│ │ Module       │ │ (ESP32 + Safety Logic)   │ │
│  └──────────────┘ └──────────────┘ └──────────────────────────┘ │
└─────────────────────────────────────────────────────────────────┘
`

export function Technology() {
  return (
    <section id="technology" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 bg-couture-purple-100 text-couture-purple-600 rounded-full text-sm font-semibold mb-4">
            Under the Hood
          </span>
          <h2 className="section-heading mb-4">
            <span className="text-gray-900">Real Technology,</span>{' '}
            <span className="gradient-text">Magical Results</span>
          </h2>
          <p className="section-subheading">
            Enterprise-grade AI and precision hardware engineering, designed for the hands of a child.
          </p>
        </motion.div>

        {/* Tech Categories */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {techStack.map((category, catIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.15 }}
              className="card-base"
            >
              <div className="flex items-center space-x-3 mb-6">
                {catIndex === 0 && <Cpu className="w-8 h-8 text-couture-pink-500" />}
                {catIndex === 1 && <Layers className="w-8 h-8 text-couture-purple-500" />}
                {catIndex === 2 && <Cloud className="w-8 h-8 text-couture-mint-500" />}
                <h3 className="text-xl font-bold text-gray-900">{category.category}</h3>
              </div>
              <div className="space-y-4">
                {category.items.map((item) => (
                  <div key={item.name} className="border-l-2 border-couture-pink-200 pl-4">
                    <p className="font-semibold text-gray-800">{item.name}</p>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Visual Tech Deep Dive */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-2 shadow-xl overflow-hidden group"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <img 
                src="/images/DeviceExplo.jpeg" 
                alt="Device Exploded View" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6">
                <div>
                  <span className="px-3 py-1 bg-couture-purple-500 text-white text-xs font-bold rounded-full mb-2 inline-block">HARDWARE</span>
                  <h3 className="text-white text-xl font-bold">Precision Engineering</h3>
                  <p className="text-gray-200 text-sm mt-1">Exploded view of our custom print engine and safety mechanisms.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-2 shadow-xl overflow-hidden group"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <img 
                src="/images/ManufacturingBreakDown.jpeg" 
                alt="Manufacturing Breakdown" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6">
                <div>
                  <span className="px-3 py-1 bg-couture-pink-500 text-white text-xs font-bold rounded-full mb-2 inline-block">PROCESS</span>
                  <h3 className="text-white text-xl font-bold">Sustainable Manufacturing</h3>
                  <p className="text-gray-200 text-sm mt-1">Eco-friendly materials and simplified assembly process.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Key Technology Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Shield, title: 'COPPA Compliant', desc: 'Full child privacy protection' },
            { icon: Zap, title: 'Edge AI', desc: 'On-device processing for speed' },
            { icon: Globe2, title: 'Multi-language', desc: '12+ languages at launch' },
            { icon: Smartphone, title: 'Offline Mode', desc: 'Core features work without WiFi' },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-couture-pink-100 to-couture-purple-100 flex items-center justify-center">
                <item.icon className="w-7 h-7 text-couture-purple-600" />
              </div>
              <h4 className="font-bold text-gray-900 mb-1">{item.title}</h4>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
