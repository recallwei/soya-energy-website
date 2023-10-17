import Link from 'next/link'

import { AppConfig } from '@/constants'

export default function Header() {
  return (
    <header className="fixed top-0 z-50 w-full text-white">
      <section className="flex items-center justify-end rounded-b-3xl bg-[#484848f2] px-14 py-3">
        <Link
          href=""
          className="-mb-0.5 pb-0.5 transition-all hover:-translate-y-0.5 active:translate-y-0"
        >
          Contact
        </Link>
      </section>

      <section className="">
        <Link
          href="/"
          className="rounded-md px-2 py-1 transition-all hover:bg-gray-600 active:opacity-90"
        >
          {AppConfig.appName}
        </Link>
      </section>
    </header>
  )
}
