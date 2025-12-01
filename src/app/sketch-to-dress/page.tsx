'use client'

import { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Upload, 
  Sparkles, 
  Wand2, 
  Download, 
  RefreshCw, 
  Image as ImageIcon,
  ArrowLeft,
  Loader2,
  Star
} from 'lucide-react'
import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'

const styleOptions = [
  { id: 'haute-couture', label: 'Haute Couture', description: 'Luxurious runway-ready elegance' },
  { id: 'red-carpet', label: 'Red Carpet', description: 'Celebrity glamour and sparkle' },
  { id: 'fairy-tale', label: 'Fairy Tale', description: 'Whimsical princess dreams' },
  { id: 'modern-chic', label: 'Modern Chic', description: 'Contemporary sophistication' },
  { id: 'vintage-glam', label: 'Vintage Glam', description: 'Timeless retro elegance' },
]

export default function SketchToDressPage() {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null)
  const [uploadedFile, setUploadedFile] = useState<File | null>(null)
  const [generatedImage, setGeneratedImage] = useState<string | null>(null)
  const [selectedStyle, setSelectedStyle] = useState('haute-couture')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [isDragging, setIsDragging] = useState(false)

  const handleFileSelect = useCallback((file: File) => {
    if (!file.type.startsWith('image/')) {
      setError('Please upload an image file')
      return
    }
    
    setError(null)
    setUploadedFile(file)
    setGeneratedImage(null)
    
    const reader = new FileReader()
    reader.onload = (e) => {
      setUploadedImage(e.target?.result as string)
    }
    reader.readAsDataURL(file)
  }, [])

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
    
    const file = e.dataTransfer.files[0]
    if (file) {
      handleFileSelect(file)
    }
  }, [handleFileSelect])

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }, [])

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
  }, [])

  const handleTransform = async () => {
    if (!uploadedFile) return
    
    setIsLoading(true)
    setError(null)
    
    try {
      const formData = new FormData()
      formData.append('image', uploadedFile)
      formData.append('style', styleOptions.find(s => s.id === selectedStyle)?.label || 'haute couture')
      
      const response = await fetch('/api/transform-sketch', {
        method: 'POST',
        body: formData
      })
      
      const data = await response.json()
      
      if (!response.ok) {
        throw new Error(data.error || 'Failed to transform image')
      }
      
      if (data.success && data.image) {
        setGeneratedImage(data.image)
      } else {
        setError(data.message || 'Could not generate image. Please try again.')
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong')
    } finally {
      setIsLoading(false)
    }
  }

  const handleDownload = () => {
    if (!generatedImage) return
    
    const link = document.createElement('a')
    link.href = generatedImage
    link.download = 'glamorous-dress.png'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleReset = () => {
    setUploadedImage(null)
    setUploadedFile(null)
    setGeneratedImage(null)
    setError(null)
  }

  return (
    <main className="relative min-h-screen bg-hero-pattern">
      <Navigation />
      
      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <Link 
              href="/" 
              className="inline-flex items-center text-gray-600 hover:text-couture-pink-500 mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
            
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-md mb-6">
              <Wand2 className="w-4 h-4 text-couture-purple-500" />
              <span className="text-sm font-medium text-gray-700">AI-Powered Fashion Magic</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Sketch to Glamour</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Upload your hand-drawn dress design and watch AI transform it into a stunning photorealistic garment
            </p>
          </motion.div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left: Upload Area */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="bg-white rounded-3xl shadow-xl p-8">
                <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                  <Upload className="w-5 h-5 mr-2 text-couture-pink-500" />
                  Your Sketch
                </h2>

                {/* Upload Zone */}
                <div
                  onDrop={handleDrop}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  className={`
                    relative border-2 border-dashed rounded-2xl transition-all duration-300 overflow-hidden
                    ${isDragging 
                      ? 'border-couture-pink-400 bg-couture-pink-50' 
                      : 'border-gray-300 hover:border-couture-pink-300 bg-gray-50'
                    }
                    ${uploadedImage ? 'p-2' : 'p-12'}
                  `}
                >
                  {uploadedImage ? (
                    <div className="relative aspect-square">
                      <img
                        src={uploadedImage}
                        alt="Uploaded sketch"
                        className="w-full h-full object-contain rounded-xl"
                      />
                      <button
                        onClick={handleReset}
                        className="absolute top-2 right-2 p-2 bg-white/80 rounded-full shadow-md hover:bg-white transition-colors"
                      >
                        <RefreshCw className="w-4 h-4 text-gray-600" />
                      </button>
                    </div>
                  ) : (
                    <label className="flex flex-col items-center cursor-pointer">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-couture-pink-100 to-couture-purple-100 flex items-center justify-center mb-4">
                        <ImageIcon className="w-10 h-10 text-couture-pink-500" />
                      </div>
                      <span className="text-lg font-medium text-gray-700 mb-2">
                        Drop your sketch here
                      </span>
                      <span className="text-sm text-gray-500 mb-4">
                        or click to browse
                      </span>
                      <span className="text-xs text-gray-400">
                        Supports PNG, JPG, WEBP
                      </span>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => e.target.files?.[0] && handleFileSelect(e.target.files[0])}
                        className="hidden"
                      />
                    </label>
                  )}
                </div>

                {/* Style Selection */}
                <div className="mt-8">
                  <h3 className="text-sm font-semibold text-gray-700 mb-3">Choose Style</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {styleOptions.map((style) => (
                      <button
                        key={style.id}
                        onClick={() => setSelectedStyle(style.id)}
                        className={`
                          p-3 rounded-xl text-left transition-all duration-200
                          ${selectedStyle === style.id
                            ? 'bg-gradient-to-br from-couture-pink-100 to-couture-purple-100 border-2 border-couture-pink-400'
                            : 'bg-gray-50 border-2 border-transparent hover:bg-gray-100'
                          }
                        `}
                      >
                        <span className="text-sm font-medium text-gray-800 block">{style.label}</span>
                        <span className="text-xs text-gray-500">{style.description}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Transform Button */}
                <button
                  onClick={handleTransform}
                  disabled={!uploadedImage || isLoading}
                  className={`
                    w-full mt-8 py-4 px-6 rounded-xl font-semibold text-white
                    flex items-center justify-center space-x-2 transition-all duration-300
                    ${!uploadedImage || isLoading
                      ? 'bg-gray-300 cursor-not-allowed'
                      : 'bg-gradient-to-r from-couture-pink-500 to-couture-purple-500 hover:shadow-lg hover:scale-[1.02]'
                    }
                  `}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Creating Magic...</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-5 h-5" />
                      <span>Transform to Glamour</span>
                    </>
                  )}
                </button>

                {error && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mt-4 text-red-500 text-sm text-center"
                  >
                    {error}
                  </motion.p>
                )}
              </div>
            </motion.div>

            {/* Right: Result Area */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="bg-white rounded-3xl shadow-xl p-8 h-full">
                <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                  <Star className="w-5 h-5 mr-2 text-couture-gold-500" />
                  Glamorous Result
                </h2>

                <div className="relative aspect-square bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl overflow-hidden">
                  <AnimatePresence mode="wait">
                    {isLoading ? (
                      <motion.div
                        key="loading"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 flex flex-col items-center justify-center"
                      >
                        <div className="relative">
                          <div className="w-24 h-24 rounded-full border-4 border-couture-pink-200 border-t-couture-pink-500 animate-spin" />
                          <Sparkles className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 text-couture-purple-500" />
                        </div>
                        <p className="mt-6 text-gray-600 font-medium">AI is crafting your design...</p>
                        <p className="text-sm text-gray-400 mt-2">This may take a moment</p>
                      </motion.div>
                    ) : generatedImage ? (
                      <motion.img
                        key="result"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        src={generatedImage}
                        alt="Generated glamorous dress"
                        className="w-full h-full object-contain"
                      />
                    ) : (
                      <motion.div
                        key="placeholder"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 flex flex-col items-center justify-center text-center p-8"
                      >
                        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-couture-gold-100 to-couture-pink-100 flex items-center justify-center mb-4">
                          <Wand2 className="w-10 h-10 text-couture-gold-500" />
                        </div>
                        <p className="text-gray-500 font-medium">
                          Your glamorous creation will appear here
                        </p>
                        <p className="text-sm text-gray-400 mt-2">
                          Upload a sketch and click &quot;Transform&quot;
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Download Button */}
                {generatedImage && (
                  <motion.button
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    onClick={handleDownload}
                    className="w-full mt-6 py-4 px-6 rounded-xl font-semibold text-couture-purple-600 bg-couture-purple-50 hover:bg-couture-purple-100 flex items-center justify-center space-x-2 transition-all duration-300"
                  >
                    <Download className="w-5 h-5" />
                    <span>Download Creation</span>
                  </motion.button>
                )}
              </div>
            </motion.div>
          </div>

          {/* Tips Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-12 bg-white/60 backdrop-blur-sm rounded-2xl p-8"
          >
            <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
              <Sparkles className="w-5 h-5 mr-2 text-couture-gold-500" />
              Tips for Best Results
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { title: 'Clear Lines', desc: 'Use bold, clear outlines in your sketch' },
                { title: 'Show Details', desc: 'Include sleeves, neckline, and hem details' },
                { title: 'White Background', desc: 'Draw on plain white paper for best results' },
                { title: 'Good Lighting', desc: 'Take a well-lit photo of your sketch' },
              ].map((tip, i) => (
                <div key={i} className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-couture-pink-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-couture-pink-600">{i + 1}</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">{tip.title}</p>
                    <p className="text-sm text-gray-500">{tip.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
