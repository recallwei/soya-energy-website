import Button from '@/components/Button'
import HeadingText from '@/components/HeadingText'

import ScrollArea from './ScrollArea'

export default function News() {
  return (
    <div className="flex min-h-screen items-center">
      <div className="container flex">
        <div className="flex w-[500px] shrink-0 flex-col space-y-8 pe-4 pt-16">
          <HeadingText gradient>FOLLOW THE SUN</HeadingText>
          <span className="text-3xl font-bold">News</span>
          <p>
            The solar industry is growing fast. Make sure to follow the latest
            news and stay informed about new innovations and developments. We
            will also keep you updated about our latest projects in the
            countries where we are currently active.
          </p>
          <hr className="mt-10 h-3 w-24 bg-gradient-to-r from-[#333333] to-white opacity-100" />
          <Button
            inline
            className="px-12"
          >
            Visit news
          </Button>
        </div>

        <ScrollArea />
      </div>
    </div>
  )
}
