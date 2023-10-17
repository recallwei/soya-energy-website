'use client'

import { GripIcon } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'

import { AppConfig } from '@/constants'
import { Button } from '@/ui/Button'
import { cn } from '@/utils'

import ModeToggle from './ModeToggle'

export default function Header() {
  const [scrollDistance, setScrollDistance] = useState(0)
  const [prevScrollPosition, setPrevScrollPosition] = useState(0)
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('up')

  useEffect(() => {
    function handleScroll() {
      const currentScrollPosition =
        window.scrollY || document.documentElement.scrollTop
      setScrollDistance(currentScrollPosition)

      if (currentScrollPosition > prevScrollPosition) {
        setScrollDirection('down')
      } else if (currentScrollPosition < prevScrollPosition) {
        setScrollDirection('up')
      }

      setPrevScrollPosition(currentScrollPosition)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [prevScrollPosition])

  return (
    <header
      className={cn(
        'fixed top-0 z-50 w-full text-white transition-all',
        scrollDirection === 'up' && scrollDistance > 100
          ? 'bg-white'
          : 'bg-transparent',
        scrollDirection === 'down' && scrollDistance > 80
          ? 'translate-y-[-100%]'
          : 'translate-y-0'
      )}
    >
      <section className="hidden rounded-b-3xl bg-[#484848f2] sm:block">
        <div className="container flex select-none items-center justify-end space-x-4 py-2">
          <ModeToggle />
          <Link
            href="/contact"
            className="opacity-100 transition-all active:opacity-90"
          >
            Contact
          </Link>
        </div>
      </section>

      <section
        className={cn(
          scrollDirection === 'up' && scrollDistance > 100
            ? 'bg-white text-black'
            : 'text-white',
          'font-semibold'
        )}
      >
        <div className="container flex justify-between p-4">
          <div className="flex select-none items-center">
            <Link
              href="/"
              className="rounded-md bg-gradient-to-r from-[#333333] to-[#444444] bg-clip-text px-2 py-1 text-3xl font-bold tracking-wide text-transparent opacity-80 transition-all active:opacity-90"
            >
              {AppConfig.appName}
            </Link>
            <div className="ml-8 hidden items-center space-x-8 sm:flex">
              <span>Our Products</span>
              <span>Countries</span>
              <span>About</span>
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <Link
              className="hidden sm:block"
              href="/about-soya"
            >
              About Soya
            </Link>
            <Button
              className="hidden rounded-3xl text-[#333333] opacity-100 transition-all active:opacity-90 sm:block"
              variant="outline"
            >
              <span className="px-4">News</span>
            </Button>
            <div
              className={cn(
                'cursor-pointer select-none rounded-full border-2 p-1.5 opacity-100 transition-all active:opacity-80',
                scrollDirection === 'up' && scrollDistance > 100
                  ? 'border-black'
                  : 'border-white'
              )}
            >
              <GripIcon size="20" />
            </div>
          </div>
        </div>
      </section>
    </header>
  )
}
