import GradientLine from '@/components/GradientLine'
import HeadingText from '@/components/HeadingText'

import ScrollArea from './ScrollArea'

export default function Countries() {
  return (
    <div className="flex min-h-[55rem] items-center bg-[#eeeeee]">
      <div className="container flex">
        <div className="flex w-[500px] shrink-0 flex-col space-y-8 pe-4 pt-16">
          <HeadingText gradient>
            SOLAR ENERGY FOR ALL. IT&#39;S POSSIBLE.
          </HeadingText>
          <span className="text-3xl font-bold">
            Countries in which you will find Soya
          </span>
          <p>
            We are expanding our proposition to more and more countries.
            However, our mission, vision and key values remain the same. We want
            to make solar energy accessible to all. Find out more about our
            country-based proposition.
          </p>
          <GradientLine className="mt-10" />
        </div>

        <ScrollArea />
      </div>
    </div>
  )
}
