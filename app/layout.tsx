import './global.scss'

import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'

import { cn } from '@/utils'

import ClientInit from './components/ClientInit'
import Footer from './components/Footer'
import Header from './components/Header'
import { ThemeProvider } from './components/ThemeProvider'

const montserrat = Montserrat({ subsets: ['latin'], display: 'auto' })

export const metadata: Metadata = {
  generator: 'Soya Energy',
  applicationName: 'Soya Energy',
  title: {
    template: '%s | Soya Energy',
    default: 'Soya Energy'
  },
  description: 'The utility of the future is here',
  keywords: ['Soya Energy', 'Solar', 'Energy'],
  authors: [
    {
      name: 'Bruce Song'
    }
  ],
  creator: 'Bruce Song',
  publisher: 'Bruce Song'
}

export const viewport =
  'width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-US">
      <body className={cn(montserrat.className, 'w-full overflow-x-hidden scroll-smooth relative')}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          storageKey="theme"
        >
          <Header />
          <div className="relative min-h-screen">{children}</div>
          <Footer />
          <ClientInit />
        </ThemeProvider>
      </body>
    </html>
  )
}
