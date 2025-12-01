'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Sparkles } from 'lucide-react'
import { cn } from '@/lib/utils'

const navLinks = [
  { href: '#product', label: 'Product' },
  { href: '#technology', label: 'Technology' },
  { href: '#roadmap', label: 'Roadmap' },
  { href: '#partnership', label: 'Partners' },
  { href: '/sketch-to-dress', label: 'AI Studio ✨' },
  { href: '/media-kit', label: 'Media Kit' },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white/90 backdrop-blur-lg shadow-lg py-3'
          : 'bg-transparent py-6'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="relative">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-couture-pink-400 to-couture-purple-500 flex items-center justify-center transform group-hover:rotate-12 transition-transform">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-couture-gold-400 rounded-full animate-pulse" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold gradient-text">Easy Cake</span>
              <span className="text-xs font-medium text-couture-purple-600 -mt-1">Couture Studio</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-couture-pink-500 font-medium transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-couture-pink-500 to-couture-purple-500 group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
            <Link href="#contact" className="btn-primary text-sm py-2 px-6">
              Get Early Access
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-xl border-t animate-slide-up">
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-gray-700 hover:text-couture-pink-500 font-medium py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="#contact"
                className="btn-primary w-full text-center text-sm py-3"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get Early Access
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
