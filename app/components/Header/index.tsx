'use client'

import { GripIcon } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

import Button from '@/components/Button'
import Dropdown from '@/components/Dropdown'
import { AppConfig, headerNavData } from '@/constants'
import { cn } from '@/utils'

import ModeToggle from './ModeToggle'

export default function Header() {
  const pathname = usePathname()

  const [loaded, setLoaded] = useState(false)
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
    setLoaded(true)
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [prevScrollPosition, loaded])

  if (!loaded) return null

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
          {false && <ModeToggle />}
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
            ? 'bg-white text-black shadow'
            : 'text-white',
          'font-semibold'
        )}
      >
        <div className="container flex justify-between p-4">
          <div className="flex select-none items-center">
            <Link
              href="/"
              className={cn(
                'rounded-md bg-gradient-to-r from-[#333333] to-[#444444] bg-clip-text px-2 py-1 text-3xl font-bold tracking-wide text-transparent opacity-80 transition-all active:opacity-90',
                pathname === '/about-soya' && 'text-white',
                scrollDirection === 'up' && scrollDistance > 100 && 'text-black'
              )}
            >
              {AppConfig.appName}
            </Link>
            <div className="ml-8 hidden items-center space-x-8 md:flex">
              {Object.keys(headerNavData).map((k) => (
                <Dropdown
                  key={k}
                  text={headerNavData[k]?.title}
                  list={headerNavData[k]?.children.map((item) => ({
                    href: item.href,
                    text: item.title
                  }))}
                />
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <Link
              className="hidden lg:block"
              href="/about-soya"
            >
              About Soya
            </Link>
            <Button size="sm">News</Button>
            <Button
              size="sm"
              rounded
            >
              <GripIcon />
            </Button>
          </div>
        </div>
      </section>
    </header>
  )
}
