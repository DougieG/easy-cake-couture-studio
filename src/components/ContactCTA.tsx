'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Check, Sparkles, ArrowRight } from 'lucide-react'

export function ContactCTA() {
  const [email, setEmail] = useState('')
  const [role, setRole] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setEmail('')
    setRole('')
  }

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-couture-pink-500 via-couture-purple-500 to-couture-purple-600 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-couture-gold-400/20 blur-3xl" />
        <Sparkles className="absolute top-1/4 right-1/4 w-8 h-8 text-white/30 animate-sparkle" />
        <Sparkles className="absolute bottom-1/3 left-1/5 w-6 h-6 text-white/20 animate-sparkle animate-delay-200" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 tracking-tight">
            Be Part of the Fashion Revolution
          </h2>
          <p className="text-xl font-body text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
            Join our waitlist for early access, exclusive updates, and the chance to shape the future of creative play.
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-2 flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-6 py-4 bg-white rounded-xl font-body text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-couture-pink-300"
              />
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="px-4 py-4 bg-white rounded-xl font-body text-gray-700 focus:outline-none focus:ring-2 focus:ring-couture-pink-300"
              >
                <option value="">I am a...</option>
                <option value="parent">Parent</option>
                <option value="educator">Educator</option>
                <option value="retailer">Retailer</option>
                <option value="investor">Investor</option>
                <option value="partner">Potential Partner</option>
                <option value="other">Other</option>
              </select>
              <button
                type="submit"
                disabled={submitted}
                className="px-8 py-4 bg-gray-900 text-white font-body font-bold rounded-xl hover:bg-gray-800 transition-colors flex items-center justify-center space-x-2 disabled:opacity-50 shadow-lg"
              >
                {submitted ? (
                  <>
                    <Check className="w-5 h-5" />
                    <span>Added!</span>
                  </>
                ) : (
                  <>
                    <span>Join Waitlist</span>
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>
            </div>
          </form>

          {/* Trust Indicators */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-8 text-white/70 text-sm">
            <div className="flex items-center">
              <Check className="w-4 h-4 mr-2" />
              No spam, ever
            </div>
            <div className="flex items-center">
              <Check className="w-4 h-4 mr-2" />
              COPPA compliant
            </div>
            <div className="flex items-center">
              <Check className="w-4 h-4 mr-2" />
              Unsubscribe anytime
            </div>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 gap-8">
            {[
              { value: '10,000+', label: 'Waitlist signups' },
              { value: '50+', label: 'Partner inquiries' },
              { value: '$2.5M', label: 'Seed funding goal' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl md:text-4xl font-display font-bold text-white tracking-tight">{stat.value}</p>
                <p className="text-white/70 font-body text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
