'use client'

import { useTheme } from 'next-themes'
import { memo, useEffect, useState } from 'react'

import { Icon } from '@/components/Icon'

function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  const [mounted, setMounted] = useState(false)

  /**
   * Fix rendering issue
   *
   * @see https://www.npmjs.com/package/next-themes#avoid-hydration-mismatch
   */
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  if (theme === 'light') {
    return (
      <Icon
        name="sun"
        size="20"
        onClick={() => setTheme('dark')}
        cursor="pointer"
      />
    )
  }

  return (
    <Icon
      name="moon"
      size="20"
      onClick={() => setTheme('light')}
      cursor="pointer"
    />
  )
}

// NOTE: Avoid re-rendering
export default memo(ThemeToggle)
