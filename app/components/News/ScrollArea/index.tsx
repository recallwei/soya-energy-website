'use client'

/* cSpell:disable */
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'
import Image from 'next/image'
import { useRef } from 'react'

import Button from '@/components/Button'
import Card from '@/components/Card'

const newList = [
  {
    title: 'Erika le Roux Country Manager Soya South Africa',
    src: 'https://www.soly-energy.com/app/uploads/2023/08/DSC_6874-Verbeterd-NR-3-150x150.png',
    desc: 'Soya, a prominent solar energy company from the Netherlands, is excited to announce the launch of its new residential solar division in South Africa.'
  },
  {
    title: 'Soya expands to German market',
    src: 'https://www.soly-energy.com/app/uploads/2023/03/Robert-Freund-XQ4A3106-150x150.jpg',
    desc: 'Soya expands to the German market and appoints prominent German entrepreneur Alexander Brunst as country manager.'
  },
  {
    title: 'Soya starts selling dynamic energy',
    src: 'https://www.soly-energy.com/app/uploads/2023/08/2163-eb6eab74aca31be3635d3c3a033230b8-150x150.jpg',
    desc: 'Dutch solar energy company Soya will start selling dynamic energy contracts by the end of this year.'
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
        {newList.map((c) => (
          <Card
            key={c.title}
            className="group relative h-[400px] w-[360px] snap-start p-10"
            bordered
            shadow
          >
            <div className="flex flex-col">
              <Image
                className="rounded-full"
                src={c.src}
                alt=""
                width={64}
                height={64}
              />
              <span className="mt-8 text-lg font-bold">{c.title}</span>
              <p className="mt-2">{c.desc}</p>
            </div>
            <Button className="invisible absolute inset-x-0 bottom-0 mx-auto w-fit translate-y-1/2 border-[#333333] bg-[#333333] text-white opacity-0 transition-all group-hover:visible group-hover:opacity-100">
              Read more
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
