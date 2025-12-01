'use client'

import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { GripVertical } from 'lucide-react'

interface BeforeAfterSliderProps {
  beforeImage: string
  afterImage: string
  className?: string
}

export function BeforeAfterSlider({ beforeImage, afterImage, className = '' }: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMove = (event: MouseEvent | TouchEvent) => {
    if (!containerRef.current) return

    const containerRect = containerRef.current.getBoundingClientRect()
    const clientX = 'touches' in event ? event.touches[0].clientX : event.clientX
    
    const relativeX = clientX - containerRect.left
    const percentage = Math.min(Math.max((relativeX / containerRect.width) * 100, 0), 100)
    
    setSliderPosition(percentage)
  }

  const handleMouseDown = () => setIsDragging(true)
  const handleMouseUp = () => setIsDragging(false)

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMove)
      window.addEventListener('touchmove', handleMove)
      window.addEventListener('mouseup', handleMouseUp)
      window.addEventListener('touchend', handleMouseUp)
    }

    return () => {
      window.removeEventListener('mousemove', handleMove)
      window.removeEventListener('touchmove', handleMove)
      window.removeEventListener('mouseup', handleMouseUp)
      window.removeEventListener('touchend', handleMouseUp)
    }
  }, [isDragging])

  return (
    <div 
      ref={containerRef}
      className={`relative w-full h-full select-none overflow-hidden cursor-ew-resize ${className}`}
    >
      {/* Before Image (Background) */}
      <div className="absolute inset-0 bg-white">
        <img 
          src={beforeImage} 
          alt="Before" 
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 left-4 bg-white/90 text-gray-800 px-3 py-1 rounded-full text-xs font-bold shadow-sm border border-gray-200 flex items-center">
          ✏️ YOUR SKETCH
        </div>
      </div>

      {/* After Image (Foreground, clipped) */}
      <div 
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <img 
          src={afterImage} 
          alt="After" 
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4 bg-gradient-to-r from-couture-pink-500 to-couture-purple-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg flex items-center">
          ✨ REALITY
        </div>
      </div>

      {/* Slider Handle */}
      <div 
        className="absolute top-0 bottom-0 w-1 bg-white shadow-lg z-10 flex items-center justify-center"
        style={{ left: `${sliderPosition}%` }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleMouseDown}
      >
        <div className="w-8 h-8 bg-white rounded-full shadow-xl flex items-center justify-center transform -translate-x-1/2 border-2 border-couture-pink-200">
          <GripVertical className="w-4 h-4 text-gray-400" />
        </div>
      </div>
    </div>
  )
}
