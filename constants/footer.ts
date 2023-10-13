export const footerData: Record<
  string,
  {
    title: string
    children: {
      title: string
      href: string
    }[]
  }
> = {
  solutions: {
    title: 'Solutions',
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
      { title: 'Germany', href: '/germany' }
    ]
  },
  partners: {
    title: 'Partners',
    children: [{ title: 'Our Products', href: '/our-products' }]
  },
  about: {
    title: 'About',
    children: [
      { title: 'About Soya', href: '/about-soya' },
      { title: 'Our approach', href: '/our-approach' },
      { title: 'B-Corp', href: '/b-corp' },
      { title: 'Jobs', href: '/jobs' },
      { title: 'News', href: '/news' }
    ]
  }
}
