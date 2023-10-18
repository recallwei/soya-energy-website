'use client'

import { MoonIcon, SunIcon } from 'lucide-react'
import { useTheme } from 'next-themes'
import { memo, useEffect, useState } from 'react'

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
      <SunIcon
        name="sun"
        size="20"
        onClick={() => setTheme('dark')}
        cursor="pointer"
      />
    )
  }

  return (
    <MoonIcon
      size="20"
      onClick={() => setTheme('light')}
      cursor="pointer"
    />
  )
}

// NOTE: Use React memo to avoid re-rendering
export default memo(ThemeToggle)
