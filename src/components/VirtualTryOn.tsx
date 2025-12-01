'use client'

import { motion } from 'framer-motion'
import { Camera, Sparkles, RefreshCw, Shirt } from 'lucide-react'
import { useState } from 'react'

export function VirtualTryOn() {
  const [isTwinning, setIsTwinning] = useState(false)

  return (
    <section className="py-24 bg-gradient-to-b from-white to-couture-pink-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 bg-couture-purple-100 text-couture-purple-600 rounded-full text-sm font-semibold mb-4">
            New Feature
          </span>
          <h2 className="section-heading mb-4">
            <span className="gradient-text">Magic Twin Mode</span>
          </h2>
          <p className="section-subheading">
            Why should dolls have all the fun? Upload a photo of yourself and your doll to see how you'd both look in your custom design.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Interactive Try-On Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative mx-auto w-full max-w-2xl"
          >
            <div className="relative aspect-[16/9] bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-white ring-1 ring-gray-100">
              
              {/* Split Screen Container */}
              <div className="absolute inset-0 flex">
                {/* User Side */}
                <div className="w-1/2 relative border-r border-white/20 overflow-hidden group">
                  <img 
                    src="https://images.unsplash.com/photo-1515463138280-67d1dcbf3175?q=80&w=800&auto=format&fit=crop" 
                    alt="Girl Model"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                    <span className="text-white font-bold flex items-center">
                      <Camera className="w-4 h-4 mr-2" /> You
                    </span>
                  </div>
                  
                  {/* Augmented Reality Overlay Dress (Simplified) */}
                  {isTwinning && (
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.8 }}
                      className="absolute inset-0 mix-blend-overlay bg-gradient-to-br from-couture-pink-500 to-couture-purple-500"
                    />
                  )}
                </div>

                {/* Doll Side */}
                <div className="w-1/2 relative overflow-hidden group">
                  <img 
                    src="https://images.unsplash.com/photo-1596870230751-ebdfce98ec42?q=80&w=800&auto=format&fit=crop" 
                    alt="Doll Model"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                    <span className="text-white font-bold flex items-center">
                      <Sparkles className="w-4 h-4 mr-2" /> Your Doll
                    </span>
                  </div>

                  {/* Augmented Reality Overlay Dress (Simplified) */}
                  {isTwinning && (
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.8 }}
                      className="absolute inset-0 mix-blend-overlay bg-gradient-to-br from-couture-pink-500 to-couture-purple-500"
                    />
                  )}
                </div>
              </div>

              {/* Center Interaction Button */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                <button
                  onClick={() => setIsTwinning(!isTwinning)}
                  className="btn-primary rounded-full w-16 h-16 flex items-center justify-center shadow-[0_0_20px_rgba(236,72,153,0.5)] border-4 border-white hover:scale-110 active:scale-95 transition-all"
                >
                  {isTwinning ? (
                    <RefreshCw className="w-6 h-6" />
                  ) : (
                    <Shirt className="w-6 h-6" />
                  )}
                </button>
              </div>

              {/* Floating Labels */}
              {isTwinning && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="absolute top-6 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-md px-6 py-2 rounded-full shadow-xl border border-couture-pink-200"
                >
                  <span className="gradient-text font-bold flex items-center">
                    ✨ IT'S A MATCH! ✨
                  </span>
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* Feature Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-couture-pink-100 rounded-xl flex items-center justify-center mb-4">
                <Camera className="w-6 h-6 text-couture-pink-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Live AR Preview</h3>
              <p className="text-gray-600">
                Use your webcam or upload a photo to instantly "wear" your sketch. Our advanced body-tracking fits the fabric to you in real-time.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-couture-purple-100 rounded-xl flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6 text-couture-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Perfect Scale Matching</h3>
              <p className="text-gray-600">
                See exactly how the pattern scales down for your doll. Twin with your favorite toy for the ultimate fashion statement.
              </p>
            </div>

            <button className="btn-secondary w-full sm:w-auto justify-center">
              Try the AR Camera
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
