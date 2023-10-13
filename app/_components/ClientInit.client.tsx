'use client'

import { useEffect } from 'react'

import { mobileAdaptor } from '@/utils'

export default function ClientInit() {
  useEffect(() => {
    mobileAdaptor()
  }, [])
  return null
}
