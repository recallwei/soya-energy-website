import { cn } from '@/utils'

type Props = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLHRElement>,
  HTMLHRElement
>

export default function GradientLine(props: Props) {
  const { className, ...rest } = props
  return (
    <hr
      {...rest}
      className={cn(
        'border-t-0 h-3 w-24 bg-gradient-to-r from-[#333333] to-[#999999]',
        className
      )}
    />
  )
}
