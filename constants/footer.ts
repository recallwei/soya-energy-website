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
      { title: 'Solar panels', href: '/solutions/solar-panels' },
      { title: 'Home battery', href: '/solutions/home-battery' },
      { title: 'Wallbox', href: '/solutions/wallbox' },
      { title: 'Soya Energy', href: '/solutions/soya-energy' },
      { title: 'Soya Brain', href: '/solutions/soya-brain' }
    ]
  },
  countries: {
    title: 'Countries',
    children: [
      { title: 'The Netherlands', href: '/countries/netherlands' },
      { title: 'Belgium', href: '/countries/belgium' },
      { title: 'South Africa', href: '/countries/south-africa' },
      { title: 'Germany', href: '/countries/germany' }
    ]
  },
  partners: {
    title: 'Partners',
    children: [{ title: 'Our Products', href: '/partners/our-products' }]
  },
  about: {
    title: 'About',
    children: [
      { title: 'About Soya', href: '/about/soya' },
      { title: 'Our approach', href: '/about/our-approach' },
      { title: 'B-Corp', href: '/about/b-corp' },
      { title: 'Jobs', href: '/about/jobs' },
      { title: 'News', href: '/about/news' }
    ]
  }
}
