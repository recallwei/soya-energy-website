import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  StarHalfIcon,
  StarIcon
} from 'lucide-react'
import Link from 'next/link'
import type { ReactNode } from 'react'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/Accordion'
import { AppConfig, footerData } from '@/constants'
import { cn } from '@/utils'

interface SocialIconProps {
  icon: ReactNode
  href: string
}

function SocialIcon(props: SocialIconProps) {
  return (
    <Link
      href={props.href}
      className="mb-1 w-fit cursor-pointer rounded-full bg-white p-1.5 transition-all hover:-translate-y-0.5 hover:scale-105 active:translate-y-0 active:scale-100"
    >
      {props.icon}
    </Link>
  )
}

function SubFooter() {
  return (
    <div className="bg-[#222222] py-10 text-sm">
      <div className="container m-auto flex flex-col items-center justify-between space-y-8 sm:flex-row sm:space-y-0">
        <div className="flex flex-col items-center space-x-0 space-y-4 sm:flex-row sm:space-x-1 sm:space-y-0">
          <div className="flex items-center space-x-1">
            {Array.from({ length: 4 }).map((_, index) => (
              <StarIcon
                key={index}
                size={16}
                color="#ffcc01"
                fill="#ffcc01"
              />
            ))}
            <StarHalfIcon
              size={16}
              color="#ffcc01"
              fill="#ffcc01"
            />
          </div>
          <span>4.8 Rating</span>
        </div>

        <div className="flex flex-col space-x-0 space-y-4 sm:flex-row sm:space-x-8 sm:space-y-0">
          <div>Privacy statement</div>
          <div>Cookie statement</div>
        </div>
      </div>
    </div>
  )
}

export default function Footer() {
  return (
    <footer className="w-full overflow-hidden text-white">
      <div className="bg-black">
        <div className="container m-auto flex flex-col justify-between py-16 sm:flex-row">
          <section className="flex w-full shrink-0 flex-col items-center justify-center space-y-8 sm:w-auto sm:items-start sm:justify-between sm:space-y-0">
            <span className="text-4xl font-semibold">
              <Link href="/">{AppConfig.appName}</Link>
            </span>

            <div className="mt-4 flex flex-col space-y-2 text-center sm:text-start">
              <span>Reach us</span>
              <span className="text-xl font-medium underline underline-offset-4">
                (+31) 123 442 8888
              </span>
            </div>

            <div className="mt-4 flex flex-col space-y-2 text-center sm:mt-0 sm:text-start">
              <span>Social Media</span>
              <div className="flex space-x-3">
                <SocialIcon
                  href="/"
                  icon={
                    <FacebookIcon
                      fill="black"
                      color="black"
                      strokeWidth={0.5}
                      size={16}
                    />
                  }
                />
                <SocialIcon
                  href="/"
                  icon={
                    <InstagramIcon
                      color="black"
                      size={16}
                    />
                  }
                />
                <SocialIcon
                  href="/"
                  icon={
                    <LinkedinIcon
                      fill="black"
                      color="black"
                      strokeWidth={0.5}
                      size={16}
                    />
                  }
                />
              </div>
            </div>
          </section>

          {/* Web Only */}
          {Object.keys(footerData).map((key, index) => (
            <ul
              key={footerData[key]!.title}
              className={cn(
                'hidden w-0 space-y-4 sm:block sm:w-auto',
                index + 1 === Object.keys(footerData).length && 'me-20'
              )}
            >
              <li className="mb-8 text-lg font-semibold">
                {footerData[key]!.title}
              </li>
              {footerData[key]!.children.map((linkItem, linkItemIndex) => (
                <li
                  key={linkItemIndex}
                  className="text-sm transition-all hover:-translate-y-0.5 hover:translate-x-1 hover:scale-110 active:translate-x-0 active:translate-y-0 active:scale-100"
                >
                  <Link href={linkItem.href}>{linkItem.title}</Link>
                </li>
              ))}
            </ul>
          ))}

          {/* Mobile Only */}
          <section className="mt-8 sm:hidden">
            <Accordion
              type="single"
              collapsible
            >
              {Object.keys(footerData).map((key) => (
                <AccordionItem
                  value={key}
                  key={key}
                >
                  <AccordionTrigger>{footerData[key]!.title}</AccordionTrigger>
                  <AccordionContent>
                    <div className="flex w-full select-none flex-col space-y-3">
                      {footerData[key]!.children.map(
                        (linkItem, linkItemIndex) => (
                          <Link
                            href={linkItem.href}
                            key={linkItemIndex}
                          >
                            {linkItem.title}
                          </Link>
                        )
                      )}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>
        </div>
      </div>

      <SubFooter />
    </footer>
  )
}
