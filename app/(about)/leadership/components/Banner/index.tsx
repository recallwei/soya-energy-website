import Image from 'next/image'

import GradientLine from '@/components/GradientLine'

export default function Banner() {
  return (
    <section className="relative text-white">
      <Image
        className="absolute left-0 top-0 -z-10"
        src="https://www.soly-energy.com/app/uploads/2023/08/BCorp2-1.webp"
        alt=""
        fill
        sizes="100vw"
        priority
        style={{
          objectFit: 'cover'
        }}
      />

      <div className="h-[620px] bg-gradient-to-r from-black to-transparent pb-14 pt-44">
        <div className="container">
          <div className="flex flex-col space-y-8">
            <span className="text-4xl font-semibold">Soya</span>
            <span className="text-5xl font-bold">Our Leadership Team</span>
            <GradientLine className="mt-10" />
          </div>
        </div>
      </div>
    </section>
  )
}
