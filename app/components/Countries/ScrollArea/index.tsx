'use client'

/* cSpell:disable */
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'
import Image from 'next/image'
import { useRef } from 'react'

import Button from '@/components/Button'
import Card from '@/components/Card'

const countryList = [
  {
    country: 'The Netherlands',
    src: 'https://www.soly-energy.com/app/uploads/2023/03/Vlag_NL.png',
    desc: 'The Netherlands is where we started our journey. Have a look at our sustainable proposition for the Dutch market.'
  },
  {
    country: 'Belgium',
    src: 'https://www.soly-energy.com/app/uploads/2023/03/Vlag_BE.png',
    desc: 'In 2022, Soya entered the Belgian market, starting off in Flanders. Recently, we also launched in Wallonia.'
  },
  {
    country: 'Germany',
    src: 'https://www.soly-energy.com/app/uploads/2023/03/Vlag_DE.png',
    desc: 'Germany is one of the European leaders in solar energy. Soya launched her proposition over there in spring 2023.'
  },
  {
    country: 'South Africa',
    src: 'https://www.soly-energy.com/app/uploads/2023/03/Vlag_NL.png',
    desc: 'Next country the followed suit was South Africa. An interesting market with huge potential for solar energy..'
  },
  {
    country: 'United Kingdom',
    src: 'https://www.soly-energy.com/app/uploads/2023/09/Untitled-design-copy-High-Quality.jpg',
    // eslint-disable-next-line quotes
    desc: "Solar energy company Soya enters the UK market. UK is on the brink of solar energy breakthrough. Let's find out."
  }
]
export default function ScrollArea() {
  const scrollBarRef = useRef<HTMLDivElement>(null)

  const handleScroll = (distance: number) => {
    scrollBarRef.current!.scrollLeft += distance
  }

  return (
    <div className="flex flex-col overflow-x-hidden">
      <div
        className="flex snap-x snap-normal space-x-6 overflow-x-scroll scroll-smooth pb-12 pt-16"
        ref={scrollBarRef}
      >
        {countryList.map((c) => (
          <Card
            key={c.country}
            className="group relative h-[400px] w-[360px] snap-start p-10"
          >
            <div className="flex flex-col">
              <Image
                className="rounded-full"
                src={c.src}
                alt=""
                width={64}
                height={64}
              />
              <span className="mt-8 text-lg font-bold">{c.country}</span>
              <p className="mt-2">{c.desc}</p>
            </div>
            <Button className="invisible absolute inset-x-0 bottom-0 mx-auto w-fit translate-y-1/2 border-[#333333] bg-[#333333] text-white opacity-0 transition-all group-hover:visible group-hover:opacity-100">
              {c.country}
            </Button>
          </Card>
        ))}
      </div>
      <div className="mt-6 flex self-end">
        <ChevronLeftIcon
          className="cursor-pointer"
          onClick={() => handleScroll(-360)}
        />
        <ChevronRightIcon
          className="cursor-pointer"
          onClick={() => handleScroll(360)}
        />
      </div>
    </div>
  )
}
