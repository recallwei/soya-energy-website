'use client'

import { useTheme } from 'next-themes'
import { useEffect } from 'react'

import { mobileAdaptor } from '@/utils'

export default function ClientInit() {
  const { setTheme, systemTheme } = useTheme()

  useEffect(() => {
    setTheme(systemTheme ?? 'light')

    mobileAdaptor()
  }, [])
  return null
}
