'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sparkles, Wand2, ArrowRight, Star } from 'lucide-react'
import Link from 'next/link'
import { useMagicSound } from '@/lib/useMagicSound'

// Example data - using Unsplash images for demo
const DEMO_ITEMS = [
  {
    id: 1,
    title: 'Princess Dream',
    sketch: 'https://images.unsplash.com/photo-1605289355680-e6f7e89855bc?q=80&w=400&auto=format&fit=crop', 
    result: 'https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?q=80&w=600&auto=format&fit=crop',
    color: 'from-pink-400 to-purple-400'
  },
  {
    id: 2,
    title: 'Summer Breeze',
    sketch: 'https://images.unsplash.com/photo-1589384267710-7a170981ca78?q=80&w=400&auto=format&fit=crop',
    result: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?q=80&w=600&auto=format&fit=crop',
    color: 'from-blue-400 to-teal-400'
  },
  {
    id: 3,
    title: 'Gala Night',
    sketch: 'https://images.unsplash.com/photo-1568218018084-62568ce099d4?q=80&w=400&auto=format&fit=crop',
    result: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=600&auto=format&fit=crop',
    color: 'from-amber-400 to-orange-400'
  }
]

export function MagicDemo() {
  const [activeDemo, setActiveDemo] = useState<number | null>(null)
  const [isTransforming, setIsTransforming] = useState(false)
  const [showResult, setShowResult] = useState(false)
  const { playSparkle, playClick, playSuccess } = useMagicSound()

  const handleDemoClick = (id: number) => {
    if (activeDemo === id) return
    playClick()
    setActiveDemo(id)
    setIsTransforming(true)
    setShowResult(false)
    
    // Simulate AI processing time
    setTimeout(() => {
      setIsTransforming(false)
      setShowResult(true)
      playSuccess()
    }, 2500)
  }

  return (
    <section className="py-24 bg-white overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-30">
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-couture-pink-100 blur-3xl" />
        <div className="absolute top-40 -left-20 w-72 h-72 rounded-full bg-couture-purple-100 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-couture-pink-50 to-couture-purple-50 rounded-full px-4 py-2 mb-6 border border-couture-pink-100"
          >
            <Wand2 className="w-4 h-4 text-couture-purple-500" />
            <span className="text-sm font-bold text-couture-purple-700 uppercase tracking-wide">Experience the Magic</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-gray-900">
            See Sketches Come to Life
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Watch how our AI engine instantly transforms simple children's drawings into stunning, wearable fashion designs.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left: Selector */}
          <div className="lg:col-span-4 space-y-6">
            {DEMO_ITEMS.map((item) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                onClick={() => handleDemoClick(item.id)}
                className={`w-full text-left p-6 rounded-2xl transition-all duration-300 border-2 group relative overflow-hidden ${
                  activeDemo === item.id 
                    ? 'border-couture-pink-400 bg-white shadow-xl scale-105' 
                    : 'border-transparent bg-gray-50 hover:bg-gray-100'
                }`}
              >
                <div className="relative z-10 flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center text-white font-bold text-lg shadow-md`}>
                      {item.id}
                    </div>
                    <div>
                      <h3 className={`font-bold text-lg ${activeDemo === item.id ? 'text-gray-900' : 'text-gray-600'}`}>
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-500">Tap to transform</p>
                    </div>
                  </div>
                  {activeDemo === item.id && (
                    <Sparkles className="w-5 h-5 text-couture-gold-400 animate-pulse" />
                  )}
                </div>
                
                {/* Active Background Gradient */}
                {activeDemo === item.id && (
                  <motion.div 
                    layoutId="activeGradient"
                    className="absolute inset-0 bg-gradient-to-r from-couture-pink-50 to-transparent opacity-50"
                  />
                )}
              </motion.button>
            ))}

            <div className="pt-8">
              <Link href="/sketch-to-dress" className="btn-primary w-full justify-center group">
                <span>Try Your Own Sketch</span>
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right: The Magic Mirror */}
          <div className="lg:col-span-8">
            <div className="relative aspect-[4/3] bg-gray-900 rounded-3xl shadow-2xl overflow-hidden border-8 border-gray-900">
              {/* Stage Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-black" />
              
              {/* Content Container */}
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <AnimatePresence mode="wait">
                  {!activeDemo ? (
                    <motion.div 
                      key="empty"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="text-center"
                    >
                      <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-md">
                        <Wand2 className="w-12 h-12 text-white/50" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">Ready for Magic?</h3>
                      <p className="text-gray-400">Select a style on the left to begin</p>
                    </motion.div>
                  ) : (
                    <div className="relative w-full h-full flex items-center justify-center">
                      {/* The Sketch (Left) */}
                      <motion.div 
                        className="absolute inset-y-0 left-0 w-1/2 bg-white rounded-l-xl overflow-hidden"
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                      >
                        <img 
                          src={DEMO_ITEMS.find(i => i.id === activeDemo)?.sketch} 
                          alt="Sketch" 
                          className="w-full h-full object-cover opacity-80 grayscale hover:grayscale-0 transition-all duration-500"
                        />
                        <div className="absolute bottom-4 left-4 px-3 py-1 bg-black/10 backdrop-blur-sm rounded-full">
                          <span className="text-xs font-bold text-gray-800">INPUT</span>
                        </div>
                      </motion.div>

                      {/* The Result (Right) */}
                      <motion.div 
                        className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-br from-gray-800 to-gray-900 rounded-r-xl overflow-hidden"
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                      >
                        {showResult ? (
                          <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="w-full h-full relative"
                          >
                            <img 
                              src={DEMO_ITEMS.find(i => i.id === activeDemo)?.result} 
                              alt="Result" 
                              className="w-full h-full object-cover"
                            />
                            {/* Particle Effects Overlay */}
                            <div className="absolute inset-0 pointer-events-none">
                              <Sparkles className="absolute top-10 right-10 w-6 h-6 text-yellow-300 animate-bounce" />
                              <Star className="absolute bottom-20 left-10 w-4 h-4 text-pink-300 animate-pulse" />
                            </div>
                            <div className="absolute bottom-4 right-4 px-3 py-1 bg-white/10 backdrop-blur-md rounded-full">
                              <span className="text-xs font-bold text-white">AI GENERATED</span>
                            </div>
                          </motion.div>
                        ) : (
                          <div className="w-full h-full flex items-center justify-center">
                             {/* Loading State */}
                             {isTransforming && (
                               <div className="text-center">
                                 <div className="w-12 h-12 border-4 border-couture-pink-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
                                 <p className="text-sm text-white/70 font-medium animate-pulse">Weaving fabric...</p>
                               </div>
                             )}
                          </div>
                        )}
                      </motion.div>

                      {/* The "Scanner" Beam */}
                      {isTransforming && (
                        <motion.div
                          className="absolute top-0 bottom-0 w-2 bg-gradient-to-r from-transparent via-white to-transparent z-20 shadow-[0_0_20px_10px_rgba(255,255,255,0.5)]"
                          initial={{ left: '0%' }}
                          animate={{ left: '100%' }}
                          transition={{ duration: 2, ease: "easeInOut", repeat: Infinity }}
                        />
                      )}
                    </div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
