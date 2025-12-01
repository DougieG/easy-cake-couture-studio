'use client'

import { motion } from 'framer-motion'
import { Building, TrendingUp, Users, Target, Award, Heart, ChevronRight, DollarSign, Globe2 } from 'lucide-react'

const partnerBenefits = [
  {
    icon: Target,
    title: 'Market Expansion',
    description: 'Enter the $35B creative toys market with differentiated technology.',
  },
  {
    icon: Users,
    title: 'Engaged Demographics',
    description: 'Reach 6-12 year olds and their millennial parents with premium creative experiences.',
  },
  {
    icon: TrendingUp,
    title: 'Recurring Revenue',
    description: 'Subscription fabric rolls, pattern packs, and premium templates drive LTV.',
  },
  {
    icon: Award,
    title: 'STEM Positioning',
    description: 'Educational alignment with design thinking, technology, and creativity.',
  },
]

const mattelAlignment = [
  { metric: 'Barbie Synergy', value: '100%', desc: 'Perfect fit with existing Barbie fashion play' },
  { metric: 'New Category', value: '1st', desc: 'First-to-market AI fabric printing for kids' },
  { metric: 'Digital Extension', value: '∞', desc: 'Bridges physical play with digital creativity' },
  { metric: 'Margin Expansion', value: '+40%', desc: 'Consumables model vs. one-time toy purchase' },
]

const investorMetrics = [
  { label: 'TAM', value: '$35B', desc: 'Global creative toys market' },
  { label: 'SAM', value: '$8B', desc: 'Fashion/design toys segment' },
  { label: 'SOM', value: '$500M', desc: 'Achievable market share Y5' },
  { label: 'CAGR', value: '12%', desc: 'Category growth rate' },
]

const unitEconomics = [
  { item: 'Device MSRP', value: '$149' },
  { item: 'Device COGS', value: '$58' },
  { item: 'Gross Margin', value: '61%' },
  { item: 'Fabric Pack MSRP', value: '$19.99' },
  { item: 'Fabric Pack COGS', value: '$4.20' },
  { item: 'Consumables Margin', value: '79%' },
  { item: 'Subscription (Annual)', value: '$49.99' },
  { item: 'Blended LTV', value: '$340' },
]

export function Partnership() {
  return (
    <section id="partnership" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
            Strategic Partnerships
          </span>
          <h2 className="section-heading mb-4">
            <span className="text-gray-900">Built for</span>{' '}
            <span className="gradient-text">Industry Leaders</span>
          </h2>
          <p className="section-subheading">
            We&apos;re seeking strategic partnerships with established toy, entertainment, and retail brands to accelerate market entry.
          </p>
        </motion.div>

        {/* Partner Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {partnerBenefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-50 rounded-2xl p-6 hover:bg-gray-100 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-couture-pink-100 to-couture-purple-100 flex items-center justify-center mb-4">
                <benefit.icon className="w-6 h-6 text-couture-purple-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{benefit.title}</h3>
              <p className="text-sm text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Mattel Partnership Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-pink-50 via-white to-purple-50 rounded-3xl p-8 md:p-12 mb-20 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-couture-pink-200/30 to-transparent rounded-full blur-3xl" />
          
          <div className="relative z-10">
            <div className="flex items-center space-x-3 mb-8">
              <Heart className="w-8 h-8 text-couture-pink-500" />
              <h3 className="text-2xl font-bold text-gray-900">The Mattel Opportunity</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-lg text-gray-700 mb-6">
                  Easy Cake Couture Studio represents a natural evolution of the Barbie fashion play experience. 
                  By combining AI-powered design tools with real fabric printing, we create an entirely new category 
                  of creative play that extends the Barbie universe into the maker movement.
                </p>
                <ul className="space-y-3">
                  {[
                    'Official Barbie pattern templates',
                    'Co-branded packaging & retail placement',
                    'Integration with Barbie digital experiences',
                    'Exclusive fabric designs & colorways',
                  ].map((item) => (
                    <li key={item} className="flex items-center text-gray-700">
                      <ChevronRight className="w-4 h-4 text-couture-pink-500 mr-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {mattelAlignment.map((item) => (
                  <div key={item.metric} className="bg-white rounded-2xl p-5 shadow-lg">
                    <p className="text-3xl font-bold gradient-text mb-1">{item.value}</p>
                    <p className="font-semibold text-gray-900 text-sm mb-1">{item.metric}</p>
                    <p className="text-xs text-gray-500">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Investor Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gray-900 rounded-3xl p-8 md:p-12 text-white"
        >
          <div className="flex items-center space-x-3 mb-8">
            <Building className="w-8 h-8 text-couture-gold-400" />
            <h3 className="text-2xl font-bold">Investment Opportunity</h3>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Market Size */}
            <div>
              <h4 className="text-lg font-semibold text-gray-300 mb-6 flex items-center">
                <Globe2 className="w-5 h-5 mr-2 text-couture-mint-400" />
                Market Opportunity
              </h4>
              <div className="grid grid-cols-2 gap-4">
                {investorMetrics.map((metric) => (
                  <div key={metric.label} className="bg-white/5 rounded-xl p-4 backdrop-blur-sm">
                    <p className="text-2xl font-bold text-couture-gold-400">{metric.value}</p>
                    <p className="font-semibold text-white text-sm">{metric.label}</p>
                    <p className="text-xs text-gray-400">{metric.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Unit Economics */}
            <div>
              <h4 className="text-lg font-semibold text-gray-300 mb-6 flex items-center">
                <DollarSign className="w-5 h-5 mr-2 text-couture-mint-400" />
                Unit Economics
              </h4>
              <div className="bg-white/5 rounded-xl p-6 backdrop-blur-sm">
                <table className="w-full">
                  <tbody>
                    {unitEconomics.map((row, index) => (
                      <tr key={row.item} className={index !== unitEconomics.length - 1 ? 'border-b border-white/10' : ''}>
                        <td className="py-2 text-gray-300">{row.item}</td>
                        <td className="py-2 text-right font-semibold text-white">{row.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-10 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between">
            <div>
              <p className="text-lg font-semibold text-white">Interested in partnership or investment?</p>
              <p className="text-gray-400">Let&apos;s discuss how we can work together.</p>
            </div>
            <button className="mt-4 sm:mt-0 btn-primary">
              Request Partnership Deck
              <ChevronRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
