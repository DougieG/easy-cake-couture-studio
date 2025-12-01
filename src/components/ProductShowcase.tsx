'use client'

import { motion } from 'framer-motion'
import { Palette, Printer, Scissors, Sparkles, Wand2, Camera, Mic, Star } from 'lucide-react'
import { Device3D } from './Device3D'

const features = [
  {
    icon: Palette,
    title: 'Draw Your Design',
    description: 'Sketch on paper or tablet. Our AI understands childlike creativity and transforms it into fashion.',
    color: 'from-couture-pink-400 to-couture-pink-600',
    bgColor: 'bg-couture-pink-50',
  },
  {
    icon: Wand2,
    title: 'AI Pattern Magic',
    description: 'Watch as your drawing becomes a professional dress pattern with seam allowances and fold lines.',
    color: 'from-couture-purple-400 to-couture-purple-600',
    bgColor: 'bg-couture-purple-50',
  },
  {
    icon: Printer,
    title: 'Print on Real Fabric',
    description: 'Mini sublimation printer creates vibrant, washable fabric panels sized for dolls.',
    color: 'from-couture-gold-400 to-couture-gold-600',
    bgColor: 'bg-couture-gold-50',
  },
  {
    icon: Scissors,
    title: 'Cut & Assemble',
    description: 'Pre-scored fold lines make assembly easy. Snap-together seams mean no sewing required.',
    color: 'from-couture-mint-400 to-couture-mint-600',
    bgColor: 'bg-couture-mint-50',
  },
]

const productSpecs = [
  { label: 'Print Size', value: 'Up to 6" x 8"' },
  { label: 'Fabric Types', value: '5 included rolls' },
  { label: 'Print Time', value: '< 3 minutes' },
  { label: 'Age Range', value: '6-12 years' },
  { label: 'WiFi', value: 'Built-in' },
  { label: 'App', value: 'iOS & Android' },
]

export function ProductShowcase() {
  return (
    <section id="product" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 bg-couture-pink-100 text-couture-pink-600 rounded-full text-sm font-semibold mb-4">
            The Product
          </span>
          <h2 className="section-heading mb-4">
            <span className="gradient-text">From Imagination to Fashion</span>
          </h2>
          <p className="section-subheading">
            A complete fashion design studio that fits on any desk. Draw, design, print, and create real wearable doll clothes.
          </p>
        </motion.div>

        {/* How It Works - Step by Step */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              {/* Step Number */}
              <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center z-10">
                <span className="text-lg font-bold gradient-text">{index + 1}</span>
              </div>

              {/* Card */}
              <div className={`${feature.bgColor} rounded-3xl p-8 h-full transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-2`}>
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 shadow-lg`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>

              {/* Connector Line */}
              {index < features.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-gray-200 to-gray-300" />
              )}
            </motion.div>
          ))}
        </div>

        {/* Product Visual Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Product Image/3D View */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-couture-pink-50 via-white to-couture-purple-50 rounded-3xl shadow-2xl overflow-hidden border border-white/50">
              <div className="absolute top-4 left-4 z-10 bg-white/80 backdrop-blur px-3 py-1 rounded-full">
                 <span className="text-xs font-bold text-couture-purple-600 flex items-center gap-1">
                   <Sparkles className="w-3 h-3" />
                   Interactive 3D
                 </span>
              </div>
              
              {/* 3D Device Component */}
              <Device3D />

              {/* Dimension Labels */}
              <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-lg shadow-lg px-3 py-2 z-10 hidden md:block">
                <span className="text-xs font-mono text-gray-600">12" × 10" × 8"</span>
              </div>
            </div>
          </motion.div>

          {/* Specs & Details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Professional Design Tools,<br />
              <span className="gradient-text">Kid-Friendly Experience</span>
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              We&apos;ve combined real textile printing technology with intuitive design software that&apos;s as easy to use as a coloring app. Safety-first engineering means parents can feel confident letting kids explore independently.
            </p>

            {/* Specs Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
              {productSpecs.map((spec) => (
                <div key={spec.label} className="bg-gray-50 rounded-xl p-4 text-center">
                  <p className="text-sm text-gray-500 mb-1">{spec.label}</p>
                  <p className="font-bold text-gray-900">{spec.value}</p>
                </div>
              ))}
            </div>

            {/* Key Differentiators */}
            <div className="space-y-4">
              {[
                { icon: Camera, text: 'Scan drawings with tablet camera' },
                { icon: Mic, text: 'Voice commands for hands-free design' },
                { icon: Star, text: 'AI style suggestions & tutorials' },
              ].map((item) => (
                <div key={item.text} className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-couture-purple-100 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-couture-purple-600" />
                  </div>
                  <span className="text-gray-700 font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
