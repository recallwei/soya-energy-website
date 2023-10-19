import Image from 'next/image'

import Button from '@/components/Button'

export default function LeadershipTeam() {
  return (
    <div className="relative mb-8 h-[36rem]">
      <div className="relative mx-auto -mt-20 h-full max-w-[960px]">
        <Image
          className="rounded-2xl"
          src="https://www.soly-energy.com/app/uploads/2023/08/BCorp2.webp"
          alt=""
          fill
          style={{
            objectFit: 'cover'
          }}
        />
        <div className="absolute inset-y-0 right-0 mx-auto h-full w-1/2">
          <div className="relative m-10 flex h-[calc(100%-80px)] w-[calc(100%-80px)] flex-col space-y-4 rounded-3xl border bg-[#ffffff40] p-8 shadow-2xl backdrop-blur-sm">
            <span className="text-2xl font-bold">Leadership Team</span>
            <span className="text-lg">Get to know the people behind Soya</span>
            <p>
              As we have included in our core values: we play and win as a team
              and support our communities. And nothing tops a global team with
              people who understand the local market and act on it. Meet up with
              our Supervisory Board, Global Management and Country Management.
            </p>
            <Button className="absolute inset-x-8 bottom-8">
              Leadership Team
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
