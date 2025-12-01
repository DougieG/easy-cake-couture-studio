'use client'

import { useCallback, useRef, useEffect } from 'react'

export function useMagicSound() {
  const audioContextRef = useRef<AudioContext | null>(null)

  useEffect(() => {
    // Initialize AudioContext on user interaction to comply with autoplay policies
    const initAudio = () => {
      if (!audioContextRef.current) {
        const AudioContext = window.AudioContext || (window as any).webkitAudioContext
        if (AudioContext) {
          audioContextRef.current = new AudioContext()
        }
      }
      if (audioContextRef.current?.state === 'suspended') {
        audioContextRef.current.resume()
      }
    }

    window.addEventListener('click', initAudio, { once: true })
    window.addEventListener('touchstart', initAudio, { once: true })
    window.addEventListener('keydown', initAudio, { once: true })

    return () => {
      window.removeEventListener('click', initAudio)
      window.removeEventListener('touchstart', initAudio)
      window.removeEventListener('keydown', initAudio)
    }
  }, [])

  const playTone = useCallback((freq: number, type: OscillatorType, duration: number, startTime: number = 0, vol: number = 0.1) => {
    const ctx = audioContextRef.current
    if (!ctx) return

    const osc = ctx.createOscillator()
    const gain = ctx.createGain()

    osc.type = type
    osc.frequency.setValueAtTime(freq, ctx.currentTime + startTime)
    
    gain.gain.setValueAtTime(0, ctx.currentTime + startTime)
    gain.gain.linearRampToValueAtTime(vol, ctx.currentTime + startTime + 0.05)
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + startTime + duration)

    osc.connect(gain)
    gain.connect(ctx.destination)

    osc.start(ctx.currentTime + startTime)
    osc.stop(ctx.currentTime + startTime + duration)
  }, [])

  const playSparkle = useCallback(() => {
    // Play a sequence of high pitched sine waves to simulate a sparkle/magic sound
    const now = 0
    const notes = [523.25, 659.25, 783.99, 1046.50, 1318.51, 1567.98] // C major arpeggio
    
    notes.forEach((freq, i) => {
      playTone(freq * 2, 'sine', 0.3, i * 0.05, 0.05)
    })
    playTone(2093.00, 'sine', 0.8, 0.3, 0.03) // High C finish
  }, [playTone])

  const playHover = useCallback(() => {
    // Subtle high frequency blip
    playTone(800, 'sine', 0.1, 0, 0.02)
  }, [playTone])

  const playClick = useCallback(() => {
    // "Pop" sound
    playTone(400, 'triangle', 0.15, 0, 0.05)
  }, [playTone])

  const playSuccess = useCallback(() => {
    // Victory fanfare-ish
    playTone(523.25, 'sine', 0.2, 0, 0.1)
    playTone(659.25, 'sine', 0.2, 0.1, 0.1)
    playTone(783.99, 'sine', 0.4, 0.2, 0.1)
    playTone(1046.50, 'sine', 0.8, 0.3, 0.1)
  }, [playTone])

  return {
    playSparkle,
    playHover,
    playClick,
    playSuccess
  }
}
