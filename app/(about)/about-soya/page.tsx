import type { Metadata } from 'next'

import Banner from './components/Banner'

export const metadata: Metadata = {
  title: 'About Soya'
}

export default function Page() {
  return (
    <main>
      <Banner />
    </main>
  )
}
