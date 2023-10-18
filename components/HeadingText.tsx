import { memo, type PropsWithChildren } from 'react'

import { cn } from '@/utils'

interface Props
  extends PropsWithChildren<
    React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLSpanElement>,
      HTMLSpanElement
    >
  > {
  gradient?: boolean
}

function HeadingText(props: Props) {
  const { gradient, children, ...rest } = props
  return (
    <span
      {...rest}
      className={cn(
        gradient &&
          'bg-gradient-to-r from-[#333333] to-[#999999] bg-clip-text text-transparent',
        'font-bold',
        rest.className
      )}
    >
      {children}
    </span>
  )
}

export default memo(HeadingText)
