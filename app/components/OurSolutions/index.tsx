'use client'

/* cSpell:disable */
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

import Button from '@/components/Button'
import HeadingText from '@/components/HeadingText'
import { cn } from '@/utils'

interface Solution {
  text: string
  src: string
  outlineText?: string
  subText: string
  desc: string[]
  productSrc: string
  infoHref: string
}

const solutionList: Solution[] = [
  {
    text: 'Solar panels',
    src: 'https://www.soly-energy.com/app/themes/international-theme/public/images/icons/Icon_Statisch_Zonnepaneel.7bc5fa.svg',
    outlineText: 'JINKO SOLAR',
    subText: 'Renewable source of energy',
    desc: [
      'Solar panels are the most visible part of your solar system. The aesthetic entity at roofside combines high yield and a short payback period. Together with our manufacturer, we invest in the best solar panels available on the market at any time.',
      'In addition, we take a critical look at the process from production to installation of the solar panels at our customers. This is what makes us distinctive from our competitors.'
    ],
    productSrc:
      'https://www.soly-energy.com/app/uploads/2023/08/Tekengebied-4@2x.png',
    infoHref: '/solar-panels'
  },
  {
    text: 'Home battery',
    src: 'https://www.soly-energy.com/app/themes/international-theme/public/images/icons/Icon_Battery.40d117.svg',
    subText: 'Grid independence',
    desc: [
      'The home battery is just another step of becoming more independent of the energy grid. While solar panels take up a large portion of the energy supply, the home battery will already be able to provide (almost) the full amount of power within households, escpecially on sunny days. A modern solution that we now offer in all the countries we operate.',
      'We have called our home battery the Soya Powercell®. It’s new, it’s modulair and it’s our own way of preparing households for the sustainable future to which we look forward.'
    ],
    productSrc:
      'https://www.soly-energy.com/app/uploads/2023/08/Tekengebied-1@2x.png',
    infoHref: '/home-battery'
  },
  {
    text: 'Wallbox',
    src: 'https://www.soly-energy.com/app/themes/international-theme/public/images/icons/Icon_Statisch_Laadpaal.0ff405.svg',
    outlineText: 'CHARGING FROM HOME',
    subText: 'Your own fast-charging station at home',
    desc: [
      'At home, in the office or on the road. With a charging station at home, you are assured of a full battery when you need it. It is a unique opportunity to combine electric driving with the solar panels on your roof.',
      'The wallbox is now being introduced in more and more countries and will eventually become an integral part of our global proposition.'
    ],
    productSrc:
      'https://www.soly-energy.com/app/uploads/2023/08/Tekengebied-2@2x.png',
    infoHref: '/wallbox'
  },
  {
    text: 'Soya Brain',
    src: 'https://www.soly-energy.com/app/themes/international-theme/public/images/icons/Icon_Connection.58e1c4.svg',
    subText: 'Home Energy Management',
    desc: [
      'An energy management system, also known as Home Energy Management (HEM), is an advanced energy system designed to monitor, manage and optimize a home’s energy consumption. Soya Brain® is our all-in-one home solution. It’s designed to make a fully sustainable solar system work together properly.',
      'The rollout of the Soya Brain® is already underway and it’s going to play an important role in the future of our company, as that of our customers.'
    ],
    productSrc:
      'https://www.soly-energy.com/app/uploads/2023/08/Tekengebied-3@2x.png',
    infoHref: '/soya-brain'
  },
  {
    text: 'Soya Energy',
    src: 'https://www.soly-energy.com/app/themes/international-theme/public/images/icons/Icon_Statisch_Kalender.07b880.svg',
    outlineText: 'DYNAMIC USAGE',
    subText: 'Take advantage of fluctuating low market prices',
    desc: [
      'In general, the price you pay with a fixed energy contract is often higher than the purchase price because energy companies work with a ‘safety margin’. Thanks to a dynamic energy contract, we give our customers the opportunity to benefit from (often) lower prices during the day.',
      'Dynamic energycontracts are becoming a part of the energy supply in various countries. Soya will be selling Soya Energy itself by the end of the year.'
    ],
    productSrc:
      'https://www.soly-energy.com/app/uploads/2023/08/Group-3101.webp',
    infoHref: '/solar-energy'
  }
]

export default function OurSolutions() {
  const [currentSolution, setCurrentSolution] = useState<Solution>(
    solutionList.at(0)!
  )
  return (
    <div className="container min-h-[42.25rem] py-8 sm:py-20">
      <div className="flex flex-col">
        <HeadingText gradient>OUR SUSTAINABLE SOLUTIONS</HeadingText>
        <span className="mt-8 text-4xl font-extrabold">
          Solar energy to all. It&#39;s possible.
        </span>

        <div className="mt-20 flex min-h-[42.25rem] rounded-sm border border-solid">
          <div className="shrink-0 select-none space-y-8 border-r p-8 text-xl font-semibold">
            {solutionList.map((solutionItem, solutionItemIndex) => (
              <div
                key={solutionItemIndex}
                className={cn(
                  'flex cursor-pointer items-center p-4 hover:bg-[#33333310] rounded-lg transition-all active:opacity-80 opacity-100',
                  currentSolution.text === solutionItem.text &&
                    'bg-[#33333310] rounded-lg active:opacity-90 opacity-100'
                )}
                onClick={() => setCurrentSolution(solutionItem)}
              >
                <Image
                  src={solutionItem.src}
                  alt=""
                  width={36}
                  height={36}
                />
                <div className="ml-6">{solutionItem.text}</div>
              </div>
            ))}
          </div>

          <div className="flex p-12">
            <div className="relative flex flex-col pe-12">
              {currentSolution.outlineText && (
                <HeadingText gradient>
                  {currentSolution.outlineText}
                </HeadingText>
              )}
              <span className="mt-4 text-4xl font-bold">
                {currentSolution.text}
              </span>
              <span className="mt-4 text-lg">{currentSolution.subText}</span>
              {currentSolution.desc.map((descItem, descItemIndex) => (
                <p
                  key={descItemIndex}
                  className="mt-6"
                >
                  {descItem}
                </p>
              ))}

              <Link href={currentSolution.infoHref}>
                <Button
                  inline
                  className="absolute bottom-0 mt-20"
                >
                  More information
                </Button>
              </Link>
            </div>

            <div className="w-[250px] shrink-0 self-center">
              <Image
                src={currentSolution.productSrc}
                alt=""
                width={246}
                height={338}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
