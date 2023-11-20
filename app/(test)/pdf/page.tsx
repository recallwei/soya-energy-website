import type { Metadata } from 'next'

import PDFDocument from './components/PDFDocument'

export const metadata: Metadata = {
  title: 'PDF'
}

export default function Page() {
  return (
    <main className="bg-[#333333] pt-28">
      <PDFDocument />
    </main>
  )
}
