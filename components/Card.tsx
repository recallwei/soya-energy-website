import { memo, type PropsWithChildren } from 'react'

import { cn } from '@/utils'

interface Props
  extends PropsWithChildren<
    React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLDivElement>,
      HTMLDivElement
    >
  > {
  animated?: boolean
}

function Card(props: Props) {
  const { animated = true, children, ...rest } = props

  return (
    <div
      {...rest}
      className={cn(
        animated &&
          'hover:-translate-y-16 hover:pb-16 hover:-mb-16 transition-all duration-500 group'
      )}
    >
      <div
        className={cn(
          'p-8 bg-white',
          animated &&
            'rounded-3xl group-hover:border group-hover:shadow-2xl p-[31px]',
          props.className
        )}
      >
        {children}
      </div>
    </div>
  )
}

export default memo(Card)
