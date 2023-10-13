import './globals.css'

import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import Link from 'next/link'

import { AppConfig } from '@/constants'
import { cn } from '@/utils'

import ClientInit from './components/ClientInit.client'
import Footer from './components/Footer'

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
          'w-screen min-h-screen scroll-smooth'
        )}
      >
        <header className="flex h-14 items-center justify-center bg-[#222222] text-xl font-semibold text-white">
          <Link href="/">{AppConfig.appName}</Link>
        </header>
        <div className="relative min-h-[calc(100vh-56px)]">{children}</div>
        <Footer />
        <ClientInit />
      </body>
    </html>
  )
}
