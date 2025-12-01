import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-display' })

export const metadata: Metadata = {
  title: 'Easy Cake Couture Studio | AI-Powered Fashion Design for Kids',
  description: 'The world\'s first mini fabric printer and AI fashion atelier for kids. Transform drawings into real Barbie-sized dress panels. STEM meets fashion creativity.',
  keywords: ['toy', 'fashion', 'kids', 'STEM', 'fabric printer', 'Barbie', 'creative play', 'AI', 'design'],
  authors: [{ name: 'Easy Cake Couture Studio' }],
  openGraph: {
    title: 'Easy Cake Couture Studio | AI-Powered Fashion Design for Kids',
    description: 'Transform imagination into fashion reality. The mini fabric printer that lets kids design, print, and create real doll clothes.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Easy Cake Couture Studio',
    description: 'AI-Powered Fashion Design for Kids',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-body bg-white text-gray-900">
        {children}
      </body>
    </html>
  )
}
