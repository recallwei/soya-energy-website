import { memo } from 'react'

import { cn } from '@/utils'

interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  title: string
}

function HeadingArea(props: Props) {
  const { title, className, ...rest } = props
  return (
    <div
      {...rest}
      className={cn(
        'bg-gradient-to-r from-[#333333] to-[#999999] h-[260px] flex items-center p-20',
        className
      )}
    >
      <span className="text-2xl font-bold text-white">{title}</span>
    </div>
  )
}

export default memo(HeadingArea)
