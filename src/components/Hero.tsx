'use client'

import { ArrowRight, Play, Sparkles, Star, Zap } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-hero-pattern">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating fabric swatches */}
        <div className="absolute top-20 left-10 w-32 h-32 rounded-2xl bg-gradient-to-br from-couture-pink-200 to-couture-pink-300 opacity-40 animate-float" />
        <div className="absolute top-40 right-20 w-24 h-24 rounded-full bg-gradient-to-br from-couture-purple-200 to-couture-purple-300 opacity-40 animate-float animate-delay-200" />
        <div className="absolute bottom-40 left-1/4 w-20 h-20 rounded-xl bg-gradient-to-br from-couture-gold-200 to-couture-gold-300 opacity-40 animate-float animate-delay-300" />
        <div className="absolute bottom-20 right-1/3 w-28 h-28 rounded-2xl bg-gradient-to-br from-couture-mint-200 to-couture-mint-300 opacity-40 animate-float animate-delay-500" />
        
        {/* Sparkle effects */}
        <Sparkles className="absolute top-1/4 right-1/4 w-8 h-8 text-couture-gold-400 animate-sparkle" />
        <Star className="absolute bottom-1/3 left-1/5 w-6 h-6 text-couture-pink-400 animate-sparkle animate-delay-200" />
        <Sparkles className="absolute top-1/3 left-1/3 w-5 h-5 text-couture-purple-400 animate-sparkle animate-delay-300" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-md mb-6"
            >
              <Zap className="w-4 h-4 text-couture-gold-500" />
              <span className="text-sm font-medium text-gray-700">World&apos;s First AI Fashion Studio for Kids</span>
            </motion.div>

            {/* Main Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              <span className="text-gray-900">Turn</span>{' '}
              <span className="gradient-text">Imagination</span>
              <br />
              <span className="text-gray-900">Into</span>{' '}
              <span className="gradient-text">Fashion</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0">
              The mini fabric printer that lets kids design, print, and assemble real doll clothes. From sketch to runway in minutes.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="#contact" className="btn-primary group">
                <span>Reserve Your Studio</span>
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <button className="btn-secondary group">
                <Play className="mr-2 w-5 h-5 text-couture-purple-500" />
                <span>Watch the Magic</span>
              </button>
            </div>

            {/* Social Proof */}
            <div className="mt-10 flex items-center justify-center lg:justify-start space-x-6">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-couture-pink-300 to-couture-purple-300 border-2 border-white flex items-center justify-center"
                  >
                    <span className="text-xs font-bold text-white">{String.fromCharCode(64 + i)}</span>
                  </div>
                ))}
              </div>
              <div className="text-left">
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 text-couture-gold-400 fill-couture-gold-400" />
                  ))}
                </div>
                <p className="text-sm text-gray-600">Join 10,000+ families on the waitlist</p>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Product Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            {/* Device Mockup */}
            <div className="relative mx-auto max-w-lg">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-couture-pink-400/30 to-couture-purple-400/30 rounded-3xl blur-3xl transform scale-110" />
              
              {/* Main Device Frame */}
              <div className="relative bg-white rounded-3xl shadow-2xl p-8 transform hover:scale-105 transition-transform duration-500">
                {/* Device Top - Screen Area */}
                <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-6 mb-6">
                  <div className="aspect-square bg-white rounded-xl shadow-inner flex items-center justify-center overflow-hidden">
                    {/* Animated Pattern Preview */}
                    <div className="w-full h-full bg-gradient-to-br from-couture-pink-50 to-couture-purple-50 flex items-center justify-center">
                      <div className="relative">
                        {/* Dress Pattern Silhouette */}
                        <svg
                          viewBox="0 0 100 120"
                          className="w-32 h-40"
                        >
                          <defs>
                            <linearGradient id="dressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor="#f9a8d4" />
                              <stop offset="50%" stopColor="#c084fc" />
                              <stop offset="100%" stopColor="#fbbf24" />
                            </linearGradient>
                          </defs>
                          {/* Simple dress silhouette */}
                          <path
                            d="M50 10 L35 30 L20 30 L15 35 L25 40 L20 110 L80 110 L75 40 L85 35 L80 30 L65 30 Z"
                            fill="url(#dressGradient)"
                            className="animate-pulse-glow"
                          />
                          {/* Neckline */}
                          <ellipse cx="50" cy="15" rx="8" ry="5" fill="#fff" fillOpacity="0.5" />
                        </svg>
                        {/* Sparkle overlay */}
                        <Sparkles className="absolute -top-2 -right-2 w-6 h-6 text-couture-gold-400 animate-sparkle" />
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 flex justify-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-couture-pink-400" />
                    <div className="w-3 h-3 rounded-full bg-couture-purple-400" />
                    <div className="w-3 h-3 rounded-full bg-couture-gold-400" />
                    <div className="w-3 h-3 rounded-full bg-couture-mint-400" />
                  </div>
                </div>

                {/* Printer Output Slot */}
                <div className="relative">
                  <div className="h-3 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 rounded-full" />
                  <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-32 h-8 bg-gradient-to-r from-couture-pink-200 via-couture-purple-200 to-couture-gold-200 rounded-b-lg shadow-md flex items-end justify-center pb-1">
                    <span className="text-[8px] font-medium text-gray-600">FABRIC OUTPUT</span>
                  </div>
                </div>

                {/* Control Buttons */}
                <div className="mt-8 flex justify-center space-x-4">
                  <button className="w-12 h-12 rounded-full bg-gradient-to-br from-couture-pink-400 to-couture-pink-500 shadow-lg flex items-center justify-center hover:scale-110 transition-transform">
                    <Play className="w-5 h-5 text-white ml-0.5" />
                  </button>
                  <button className="w-12 h-12 rounded-full bg-gray-200 shadow-lg flex items-center justify-center hover:scale-110 transition-transform">
                    <Sparkles className="w-5 h-5 text-couture-purple-500" />
                  </button>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-6 -left-6 bg-white rounded-2xl shadow-xl p-3 animate-float">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-lg bg-couture-mint-100 flex items-center justify-center">
                    <Zap className="w-4 h-4 text-couture-mint-600" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-800">AI Designing</p>
                    <p className="text-[10px] text-gray-500">Pattern ready!</p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-xl p-3 animate-float animate-delay-300">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-lg bg-couture-gold-100 flex items-center justify-center">
                    <Star className="w-4 h-4 text-couture-gold-600" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-800">Runway Ready</p>
                    <p className="text-[10px] text-gray-500">3 designs today</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center space-y-2 animate-bounce">
          <span className="text-xs text-gray-500">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-couture-pink-400 rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  )
}
