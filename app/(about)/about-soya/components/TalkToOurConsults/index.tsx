import Image from 'next/image'

import Button from '@/components/Button'
import GradientLine from '@/components/GradientLine'

export default function TalkToOurConsults() {
  return (
    <div className="container py-8 sm:py-20">
      <div className="mx-auto flex w-fit rounded-sm border">
        <div className="flex w-[500px] flex-col space-y-6 py-8 pl-8">
          <span className="text-4xl font-bold">Talk to our consultants</span>
          <p className="text-xl">
            We are ready to set sail and let you get the most out of the sun.
            Have any questions regarding our products or company? Feel free to
            contact Soly.
          </p>
          <GradientLine />
          <Button inline>Contact</Button>
        </div>
        <div className="relative mx-8 h-[280px] w-[350px] self-end">
          <Image
            src="https://www.soly-energy.com/app/uploads/2022/11/Afbeelding_CTA-1.png"
            alt=""
            fill
          />
        </div>
      </div>
    </div>
  )
}
