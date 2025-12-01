import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { Download, FileText, Image, Video, Palette, FileArchive, Mail, ExternalLink } from 'lucide-react'
import Link from 'next/link'

const brandColors = [
  { name: 'Couture Pink', hex: '#ec4899', rgb: '236, 72, 153' },
  { name: 'Couture Purple', hex: '#a855f7', rgb: '168, 85, 247' },
  { name: 'Couture Gold', hex: '#f59e0b', rgb: '245, 158, 11' },
  { name: 'Couture Mint', hex: '#10b981', rgb: '16, 185, 129' },
  { name: 'Forge Blue', hex: '#3b82f6', rgb: '59, 130, 246' },
  { name: 'Forge Orange', hex: '#f97316', rgb: '249, 115, 22' },
]

const downloadableAssets = [
  {
    category: 'Logos',
    icon: Image,
    items: [
      { name: 'Primary Logo (Color)', format: 'SVG, PNG', size: '2.4 MB' },
      { name: 'Primary Logo (White)', format: 'SVG, PNG', size: '2.4 MB' },
      { name: 'Primary Logo (Black)', format: 'SVG, PNG', size: '2.4 MB' },
      { name: 'Icon Only', format: 'SVG, PNG, ICO', size: '1.2 MB' },
      { name: 'Horizontal Lockup', format: 'SVG, PNG', size: '2.8 MB' },
    ],
  },
  {
    category: 'Product Images',
    icon: Image,
    items: [
      { name: 'Device Hero Shot', format: 'PNG, JPG', size: '8.4 MB' },
      { name: 'Device 360° Views', format: 'PNG', size: '24 MB' },
      { name: 'App Screenshots', format: 'PNG', size: '12 MB' },
      { name: 'Lifestyle Photography', format: 'JPG', size: '45 MB' },
      { name: 'Product in Use', format: 'JPG', size: '32 MB' },
    ],
  },
  {
    category: 'Videos',
    icon: Video,
    items: [
      { name: 'Product Demo (60s)', format: 'MP4', size: '120 MB' },
      { name: 'How It Works (2min)', format: 'MP4', size: '240 MB' },
      { name: 'Brand Anthem', format: 'MP4', size: '180 MB' },
      { name: 'B-Roll Package', format: 'MP4', size: '500 MB' },
    ],
  },
  {
    category: 'Documents',
    icon: FileText,
    items: [
      { name: 'Brand Guidelines', format: 'PDF', size: '8.2 MB' },
      { name: 'Press Release', format: 'PDF, DOCX', size: '245 KB' },
      { name: 'Fact Sheet', format: 'PDF', size: '1.2 MB' },
      { name: 'Technical Specs', format: 'PDF', size: '3.4 MB' },
      { name: 'Partnership Deck', format: 'PDF', size: '12 MB' },
    ],
  },
]

const pressReleases = [
  {
    date: 'November 2025',
    title: 'Easy Cake Couture Studio Announces Revolutionary AI-Powered Fabric Printer for Kids',
    excerpt: 'The world\'s first mini fabric printer transforms children\'s fashion dreams into reality...',
  },
  {
    date: 'October 2025',
    title: 'Easy Cake Couture Studio Closes $2.5M Seed Round Led by Top Toy Industry Investors',
    excerpt: 'Funding will accelerate product development and strategic partnerships...',
  },
  {
    date: 'September 2025',
    title: 'New Research Shows Children\'s Interest in Fashion Design at All-Time High',
    excerpt: 'Survey of 5,000 families reveals strong demand for creative fashion toys...',
  },
]

export default function MediaKitPage() {
  return (
    <main className="relative">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-couture-pink-50 via-white to-couture-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1 bg-couture-pink-100 text-couture-pink-600 rounded-full text-sm font-semibold mb-4">
              Media Kit
            </span>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Press & Media Resources
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Everything you need to tell the Easy Cake Couture Studio story. Download logos, images, videos, and brand guidelines.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="btn-primary">
                <FileArchive className="w-5 h-5 mr-2" />
                Download All Assets (1.2 GB)
              </button>
              <Link href="mailto:press@easycakecouture.com" className="btn-secondary">
                <Mail className="w-5 h-5 mr-2" />
                Contact Press Team
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Colors */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-3 mb-8">
            <Palette className="w-6 h-6 text-couture-purple-500" />
            <h2 className="text-2xl font-bold text-gray-900">Brand Colors</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {brandColors.map((color) => (
              <div key={color.name} className="group">
                <div
                  className="aspect-square rounded-2xl shadow-lg mb-3 group-hover:scale-105 transition-transform cursor-pointer"
                  style={{ backgroundColor: color.hex }}
                />
                <p className="font-semibold text-gray-900 text-sm">{color.name}</p>
                <p className="text-xs text-gray-500">{color.hex}</p>
                <p className="text-xs text-gray-400">RGB: {color.rgb}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Downloadable Assets */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Downloadable Assets</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {downloadableAssets.map((category) => (
              <div key={category.category} className="bg-white rounded-2xl shadow-lg p-6">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-couture-pink-100 flex items-center justify-center">
                    <category.icon className="w-5 h-5 text-couture-pink-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{category.category}</h3>
                </div>
                <div className="space-y-3">
                  {category.items.map((item) => (
                    <div
                      key={item.name}
                      className="flex items-center justify-between p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer group"
                    >
                      <div>
                        <p className="font-medium text-gray-900">{item.name}</p>
                        <p className="text-xs text-gray-500">{item.format} • {item.size}</p>
                      </div>
                      <Download className="w-5 h-5 text-gray-400 group-hover:text-couture-pink-500 transition-colors" />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Press Releases */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Press Releases</h2>
          <div className="space-y-6">
            {pressReleases.map((release) => (
              <div
                key={release.title}
                className="bg-gray-50 rounded-2xl p-6 hover:bg-gray-100 transition-colors cursor-pointer group"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <span className="text-sm text-couture-pink-600 font-medium">{release.date}</span>
                    <h3 className="text-xl font-bold text-gray-900 mt-1 mb-2 group-hover:text-couture-pink-600 transition-colors">
                      {release.title}
                    </h3>
                    <p className="text-gray-600">{release.excerpt}</p>
                  </div>
                  <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-couture-pink-500 transition-colors ml-4 flex-shrink-0" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Boilerplate */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-6">About Easy Cake Couture Studio</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-couture-pink-400 mb-3">Company Description (Short)</h3>
              <p className="text-gray-300 mb-6">
                Easy Cake Couture Studio is the world&apos;s first AI-powered mini fabric printer for kids, 
                transforming drawings into real, wearable doll clothes through innovative sublimation technology 
                and intelligent pattern generation.
              </p>
              <h3 className="text-lg font-semibold text-couture-pink-400 mb-3">Company Description (Long)</h3>
              <p className="text-gray-300">
                Founded in 2024, Easy Cake Couture Studio is pioneering a new category of creative play that 
                bridges digital design with physical creation. Our flagship product combines AI-powered sketch 
                recognition, professional pattern generation, and compact sublimation printing to enable children 
                ages 6-12 to design, print, and assemble real fabric garments for their dolls. Backed by leading 
                toy industry investors, we&apos;re on a mission to inspire the next generation of fashion designers, 
                makers, and creative thinkers.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-couture-pink-400 mb-3">Key Facts</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• <strong>Founded:</strong> 2024</li>
                <li>• <strong>Headquarters:</strong> San Francisco, CA</li>
                <li>• <strong>Funding:</strong> $2.5M Seed</li>
                <li>• <strong>Team Size:</strong> 15 employees</li>
                <li>• <strong>Target Age:</strong> 6-12 years</li>
                <li>• <strong>Launch Date:</strong> Q4 2025</li>
                <li>• <strong>MSRP:</strong> $149</li>
              </ul>
              <h3 className="text-lg font-semibold text-couture-pink-400 mt-6 mb-3">Media Contact</h3>
              <p className="text-gray-300">
                <strong>Press Inquiries:</strong> press@easycakecouture.com<br />
                <strong>Partnership Inquiries:</strong> partners@easycakecouture.com
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
