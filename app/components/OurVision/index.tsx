import Image from 'next/image'

import Card from '@/components/Card'
import GradientLine from '@/components/GradientLine'
import HeadingText from '@/components/HeadingText'

const cardList = [
  {
    text: '10 years of experience',
    src: 'https://www.soly-energy.com/app/themes/international-theme/public/images/icons/Icon_StatischZon_Advies.8f91e6.svg'
  },
  {
    text: 'Energy Management Solutions',
    src: 'https://www.soly-energy.com/app/themes/international-theme/public/images/icons/Icon_StatischZon_Highfive.86c93c.svg'
  },
  {
    text: 'Fully digital approach',
    src: 'https://www.soly-energy.com/app/themes/international-theme/public/images/icons/Icon_StatischZon_Prijskaartje.7c890d.svg'
  },
  {
    text: 'Our mission: carbon neutral by 2030',
    src: 'https://www.soly-energy.com/app/themes/international-theme/public/images/icons/Icon_StatischZon_Aarde.f9af21.svg'
  }
]

const checkIconSrcUrl =
  'https://www.soly-energy.com/app/themes/international-theme/public/images/icon-check.bb0e4b.svg'

export default function OurVision() {
  return (
    <div
      className="container py-8 sm:py-20"
      id="our-vision"
    >
      <div className="my-4 grid grid-cols-1 justify-between gap-8 rounded-sm border border-solid sm:grid-cols-2 md:grid-cols-4 lg:mx-20">
        {cardList.map((cardItem, cardItemIndex) => (
          <Card
            key={cardItemIndex}
            className="sm:max-w-72 h-full w-full"
          >
            <div className="flex flex-col items-center space-y-4">
              <Image
                src={cardItem.src}
                alt=""
                width={80}
                height={96}
              />
              <Image
                src={checkIconSrcUrl}
                alt=""
                width={32}
                height={32}
              />
              <p className="text-center">{cardItem.text}</p>
            </div>
          </Card>
        ))}
      </div>

      <div className="mt-24 flex flex-col lg:mx-auto lg:w-[800px]">
        <HeadingText gradient>OUR VISION</HeadingText>
        <span className="mt-4 text-3xl font-extrabold">
          Solar energy accessible to all. It&#39;s possible.
        </span>
        <p className="mt-6">
          At Soya, we make solar energy accessible to anyone who wants to
          benefit from solar savings today and help build the sustainable world
          of tomorrow. That is why we are eager to give you advice tailored to
          your situation, and supply sustainable solar solutions with the
          highest efficiency. And affordable too! We have over 10 years of
          experience, already over 30.000 satisfied customers (both residential
          and commercial) and a unique online approach. And we continue to look
          for new ways to make energy supplies clean and sustainable for all.
        </p>
        <GradientLine className="mt-10" />
      </div>
    </div>
  )
}
