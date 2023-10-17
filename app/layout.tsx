import './globals.css'

import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'

import { cn } from '@/utils'

import ClientInit from './components/ClientInit.client'
import Footer from './components/Footer'
import Header from './components/Header'

const montserrat = Montserrat({ subsets: ['latin'], display: 'swap' })

export const metadata: Metadata = {
  title: 'Soya Energy',
  description: 'Soya Energy',
  viewport:
    'width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-US">
      <body
        className={cn(
          montserrat.className,
          'w-screen min-h-screen scroll-smooth relative'
        )}
      >
        <Header />
        <div className="relative min-h-[calc(100vh-56px)]">{children}</div>
        <Footer />
        <ClientInit />
      </body>
    </html>
  )
}
