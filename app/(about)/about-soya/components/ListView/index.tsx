import Image from 'next/image'

import Button from '@/components/Button'

export default function ListView() {
  return (
    <div className="container mb-20">
      <div className="flex flex-col overflow-hidden rounded-3xl border shadow">
        <div className="flex">
          <div className="relative h-[480px] w-1/2">
            <Image
              src="https://www.soly-energy.com/app/uploads/2023/02/ml_190809_0043-1200x800-1-e1676039513972.jpg"
              alt=""
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className="w-1/2 p-8">
            <div className="flex flex-col space-y-4">
              <span className="font-semibold">B-CORP</span>
              <span className="text-2xl font-bold">
                Not just the best in the world, but also for the world
              </span>
              <p>
                As a B-Corp we at Soly are doing everything within our powers to
                deliver a positive contribution to the world, climate and
                environment. We call it: Business as a force for good. B-Corp is
                more then just a certificate. It’s our everyday practises that
                make a difference. We take extra steps for the environment,
                social equity, our employees and are transparent in our
                policies. This is what made us a B-Corp for several years now.
                Learn more.
              </p>
              <Button inline>Soya B-Corp</Button>
            </div>
          </div>
        </div>

        <div className="flex">
          <div className="h-[480px] w-1/2 p-8">
            <div className="flex flex-col space-y-4">
              <span className="font-semibold">MISSION</span>
              <span className="text-2xl font-bold">
                We aim to be carbon-neutral by 2030
              </span>
              <p>
                We have set the target: carbon-neutral by no later then 2030.
                And that’s not easy, because in all honesty: the production of
                solar panels, carports, charging stations and inverters is not
                free of CO2 emissions. In addition: transporting all these
                products also doesn’t make us carbon-neutral at this moment.
                However, once our products are installed, together we are
                starting to save on carbon emissions. And the more products we
                install, the more our total carbon emissions are reducing.
                Making a real difference with business. It’s possible.
              </p>
            </div>
          </div>
          <div className="relative w-1/2">
            <Image
              src="https://www.soly-energy.com/app/uploads/2023/02/mother-and-daughter-on-grass-1683975-1200x800-1.jpg"
              alt=""
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>

        <div className="flex">
          <div className="relative h-[480px] w-1/2">
            <Image
              src="https://www.soly-energy.com/app/uploads/2023/08/Tekengebied-11_1.png"
              alt=""
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className="w-1/2 p-8">
            <div className="flex flex-col space-y-4">
              <span className="font-semibold">Soya throughout the years</span>
              <span className="text-2xl font-bold">
                OUR SUSTAINABLE JOURNEY
              </span>
              <p>
                From a dot on the horizon to a mission-driven organisation,
                every step brings us closer to a greener future. Soly’s journey
                over the years has been sunny. From a clear vision, we have
                grown to become a leading player in the solar industry. And with
                determination and innovation, we reach countless milestones,
                always keeping one mission in mind: Solar energy for all. It is
                possible.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
