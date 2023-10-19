import Image from 'next/image'
import { memo } from 'react'

interface Props {
  title: string
  subTitle: string
  desc: string[]
  src: string
  reverse?: boolean
}

function LeadershipItem(props: Props) {
  const { title, subTitle, desc, src, reverse } = props

  const renderImage = () => (
    <div className="relative h-[480px] w-1/2">
      <Image
        src={src}
        alt=""
        fill
        style={{ objectFit: 'cover' }}
      />
    </div>
  )

  const renderProfile = () => (
    <div className="w-1/2 p-8">
      <div className="flex flex-col space-y-4">
        <span className="font-semibold">{subTitle}</span>
        <span className="text-2xl font-bold">{title} </span>
        {desc.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
    </div>
  )

  const renderResult = (isReversed?: boolean) =>
    isReversed ? (
      <>
        {renderProfile()}
        {renderImage()}
      </>
    ) : (
      <>
        {renderImage()}
        {renderProfile()}
      </>
    )

  return <div className="flex">{renderResult(reverse)}</div>
}

export default memo(LeadershipItem)
