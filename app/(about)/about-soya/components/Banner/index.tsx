import Image from 'next/image'

import GradientLine from '@/components/GradientLine'

export default function Banner() {
  return (
    <section className="relative text-white">
      <Image
        className="absolute left-0 top-0 -z-10"
        src="https://www.soly-energy.com/app/uploads/2023/02/silhouette-photo-of-man-doing-heart-sign-during-golden-hour-712520-e1588854144812-1200x800-1-1024x683-1-e1675080184697.jpg"
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
            <span className="text-4xl font-semibold">
              We are driven by a mission
            </span>
            <span className="text-5xl font-bold">About Soya</span>
            <GradientLine className="mt-10" />
          </div>
        </div>
      </div>
    </section>
  )
}
