import type { PropsWithChildren } from 'react'

import { cn } from '@/utils'

type Props = PropsWithChildren<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>

export default function LeadershipContainer(props: Props) {
  const { children, className, ...rest } = props
  return (
    <div
      {...rest}
      className={cn('container mb-20', className)}
    >
      <div className="flex flex-col overflow-hidden rounded-3xl border shadow">
        {children}
      </div>
    </div>
  )
}
