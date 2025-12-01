'use client'

import Link from 'next/link'
import { Sparkles, Mail, MapPin, Phone, Twitter, Instagram, Youtube, Linkedin } from 'lucide-react'

const footerLinks = {
  product: [
    { label: 'Features', href: '#product' },
    { label: 'Technology', href: '#technology' },
    { label: 'Roadmap', href: '#roadmap' },
    { label: 'Pricing', href: '#pricing' },
  ],
  company: [
    { label: 'About', href: '/about' },
    { label: 'Careers', href: '/careers' },
    { label: 'Press', href: '/press' },
    { label: 'Contact', href: '#contact' },
  ],
  resources: [
    { label: 'Media Kit', href: '/media-kit' },
    { label: 'Documentation', href: '/docs' },
    { label: 'Safety', href: '/safety' },
    { label: 'Support', href: '/support' },
  ],
  legal: [
    { label: 'Privacy', href: '/privacy' },
    { label: 'Terms', href: '/terms' },
    { label: 'COPPA', href: '/coppa' },
    { label: 'Patents', href: '/patents' },
  ],
}

const socialLinks = [
  { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
  { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
  { icon: Youtube, href: 'https://youtube.com', label: 'YouTube' },
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
]

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
          {/* Brand Column */}
          <div className="col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-couture-pink-400 to-couture-purple-500 flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-white">Easy Cake</span>
                <span className="text-xs font-medium text-gray-400 -mt-1">Couture Studio</span>
              </div>
            </Link>
            <p className="text-gray-400 mb-6 max-w-xs">
              The world&apos;s first AI-powered fabric printer for kids. Transform imagination into fashion reality.
            </p>
            <div className="space-y-2 text-sm text-gray-400">
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                hello@easycakecouture.com
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                San Francisco, CA
              </div>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Product</h4>
            <ul className="space-y-2">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Easy Cake Couture Studio. All rights reserved.
            </p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-gray-400" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
