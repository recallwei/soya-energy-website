export const headerNavData: Record<
  string,
  {
    title: string
    children: {
      title: string
      href: string
    }[]
  }
> = {
  ourProducts: {
    title: 'Our Products',
    children: [
      { title: 'Solar panels', href: '/solar-panels' },
      { title: 'Home battery', href: '/home-battery' },
      { title: 'Wallbox', href: '/wallbox' },
      { title: 'Soya Energy', href: '/soya-energy' },
      { title: 'Soya Brain', href: '/soya-brain' }
    ]
  },
  countries: {
    title: 'Countries',
    children: [
      { title: 'The Netherlands', href: '/the-netherlands' },
      { title: 'Belgium', href: '/belgium' },
      { title: 'South Africa', href: '/south-africa' },
      { title: 'Germany', href: '/germany' },
      { title: 'United Kingdom', href: '/united-kingdom' }
    ]
  },
  about: {
    title: 'About',
    children: [
      { title: 'Soya Global', href: '/about-soya' },
      { title: 'Press', href: '/press' },
      { title: 'Leadership Team', href: '/leadership' }
    ]
  }
}
