import Image from 'next/image'

import Card from '@/components/Card'

const cardList = [
  {
    text: '30000 +',
    desc: 'Happy customers',
    src: 'https://www.soly-energy.com/app/themes/international-theme/public/images/icons/Icon_StatischZon_Highfive.86c93c.svg'
  },
  {
    text: '5 +',
    desc: 'Countries where Soly initiates sustainable steps',
    src: 'https://www.soly-energy.com/app/themes/international-theme/public/images/icons/Icon_StatischZon_Aarde.f9af21.svg'
  },
  {
    text: '10 +',
    desc: 'Years of experience within the solar market',
    src: 'https://www.soly-energy.com/app/themes/international-theme/public/images/icons/Icon_StatischZon_Zonnepaneel.d991cf.svg'
  },
  {
    text: '8.6 +',
    desc: 'People rate us',
    src: 'https://www.soly-energy.com/app/themes/international-theme/public/images/icons/Icon_StatischZon_Medaille.ec18ac.svg'
  }
]

export default function Statistics() {
  return (
    <div className="container py-8 sm:py-20">
      <div className="mt-20 grid grid-cols-1 justify-between gap-8 rounded-sm border border-solid sm:grid-cols-2 md:grid-cols-4">
        {cardList.map((cardItem, cardItemIndex) => (
          <Card
            key={cardItemIndex}
            className="sm:max-w-72 h-[280px] w-full"
          >
            <div className="flex flex-col items-center space-y-4">
              <Image
                src={cardItem.src}
                alt=""
                width={80}
                height={96}
              />
              <span className="text-3xl font-bold">{cardItem.text}</span>
              <p
                className="text-center text-lg"
                title={cardItem.text}
              >
                {cardItem.desc}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
