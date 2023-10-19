import Image from 'next/image'

import Button from '@/components/Button'

export default function WeHaveABrightFutureAhead() {
  return (
    <div className="relative mb-8 h-[32rem]">
      <div className="relative mx-auto h-full max-w-[1080px]">
        <Image
          className="rounded-2xl"
          src="https://www.soly-energy.com/app/uploads/2023/02/DSC_3719_ENIE-Werkvloer_Bart-Lindenhovius_HR-1-min-scaled.jpg"
          alt=""
          fill
          style={{
            objectFit: 'cover'
          }}
        />
        <div className="absolute inset-y-0 right-0 mx-auto h-full w-1/2">
          <div className="relative m-10 flex h-[calc(100%-80px)] w-[calc(100%-80px)] flex-col space-y-4 rounded-3xl border bg-[#ffffff40] p-8 shadow-2xl backdrop-blur-sm">
            <span className="text-2xl font-bold">
              We Have A Bright Future Ahead
            </span>
            <p>
              Are you looking for a sunny job? Get ready for Soly. We are a
              rapidly growing, multinational company. We are looking for new
              talent, experience and inspired employees every day.
            </p>
            <Button className="absolute inset-x-8 bottom-8">Vacancies</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
