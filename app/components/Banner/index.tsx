import Image from 'next/image'
import Link from 'next/link'

import Button from '@/components/Button'
import { AppConfig } from '@/constants'

interface FlagItemProps {
  src: string
  country: string
}

const flagList = [
  {
    country: 'The Netherlands',
    src: 'https://www.soly-energy.com/app/uploads/2023/03/Vlag_NL.png'
  },
  {
    country: 'Belgium',
    src: 'https://www.soly-energy.com/app/uploads/2023/03/Vlag_BE.png'
  },
  {
    country: 'Germany',
    src: 'https://www.soly-energy.com/app/uploads/2023/03/Vlag_DE.png'
  },
  {
    country: 'South-Africa',
    src: 'https://www.soly-energy.com/app/uploads/2023/03/Vlag_NL.png'
  },
  {
    country: 'United Kingdom',
    src: 'https://www.soly-energy.com/app/uploads/2023/09/Untitled-design-copy-High-Quality.jpg'
  }
]

function FlagItem(flagItemProps: FlagItemProps) {
  return (
    <Link
      className="group flex items-center gap-4"
      href="/"
    >
      <div className="rounded-full border-2 border-transparent p-1.5 transition-all group-hover:border-[#333333]">
        <Image
          className="rounded-full"
          src={flagItemProps.src}
          alt=""
          width={40}
          height={40}
        />
      </div>
      <span className="opacity-100 transition-all group-hover:text-[#333333] group-active:opacity-80">
        {flagItemProps.country}
      </span>
    </Link>
  )
}

export default function Banner() {
  return (
    <section className="relative min-h-screen pb-14 pt-28 text-white">
      <Image
        className="absolute left-0 top-0"
        src="https://www.soly-energy.com/app/uploads/2022/11/Industrie_PaneelMensen-scaled.jpg"
        alt=""
        fill
        sizes="100vw"
        priority
        style={{
          objectFit: 'cover'
        }}
      />

      <div className="container">
        <div className="flex min-h-[42.25rem] space-x-4 rounded-3xl border bg-[#ffffff40] p-6 shadow-2xl backdrop-blur-sm sm:p-10">
          <div className="flex flex-col space-y-8">
            <span className="text-5xl font-bold tracking-wide lg:mt-20">
              {AppConfig.appName}
            </span>
            <span className="text-2xl font-semibold">
              The utility of the future is here
            </span>
            <p className="leading-7">
              We only have one mission: make solar energy accessible to all. By
              letting you produce, store and drive solar energy we cut you loose
              from the fossil world. With our energy management solution we
              connect all the dots to, and become the utility of the future. We
              already have more than 30.000 satisfied customers across 4
              countries. And we have only just begun.
            </p>
            <Button
              inline
              className="w-full sm:w-[300px]"
            >
              Soya Global
            </Button>

            <div className="grid select-none grid-cols-1 gap-6 font-semibold sm:grid-cols-2 sm:gap-3">
              {flagList.map((f) => (
                <FlagItem
                  key={f.country}
                  {...f}
                />
              ))}
            </div>
          </div>

          <Image
            className="hidden h-[500px] w-[500px] lg:block"
            src="https://www.soly-energy.com/app/uploads/2023/09/Kaart.webp"
            alt=""
            width={500}
            height={500}
          />
        </div>
      </div>
    </section>
  )
}
