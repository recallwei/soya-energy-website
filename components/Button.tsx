import type { PropsWithChildren } from 'react'
import { memo } from 'react'

import { cn } from '@/utils'

interface Props
  extends PropsWithChildren<
    React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >
  > {
  outline?: boolean
  inline?: boolean
  size?: 'sm' | 'md'
  rounded?: boolean
}

function Button(props: Props) {
  const { children, outline, inline, size = 'md', rounded, ...rest } = props
  return (
    <button
      type="button"
      {...rest}
      className={cn(
        size === 'sm' && 'text-sm px-5 py-1.5',
        size === 'md' && 'text-base py-3 px-7',
        outline ? 'bg-transparent' : 'bg-white text-black',
        inline && 'w-fit',
        rounded && 'rounded-full w-fit h-fit px-1.5',
        'active:scale-90 scale-100 text-center outline-none tracking-wide border-2 rounded-3xl transition-all shadow hover:opacity-90 opacity-100 font-semibold',
        rest.className
      )}
    >
      {children}
    </button>
  )
}

export default memo(Button)
