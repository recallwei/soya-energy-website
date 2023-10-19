/* cSpell:disable */

import type { Metadata } from 'next'

import Banner from './components/Banner'
import HeadingArea from './components/HeadingArea'
import LeadershipContainer from './components/LeadershipContainer'
import LeadershipItem from './components/LeadershipItem'

export const metadata: Metadata = {
  title: 'Leadership'
}

const supervisoryBoardLeaderships = [
  {
    title: 'Enrico Ferrari',
    subTitle: 'CHAIRMAN OF THE BOARD',
    desc: [
      'Enrico is since 2021 a Senior Advisor to McKinsey on Digital Growth Strategy and Venture Building.',
      'He is the former Global Chief Marketing Officer of Rocket Internet, the largest European Venture Studio, and Partner to its Venture Capital arm (2016-2020). Over the years, he advised more than 100 businesses, from early stage startups to public companies. In 2018-2019, he served HelloFresh USA as Chief Growth Officer, contributing to making it the largest meal kit delivery company worldwide. In 2015, he launched a grocery delivery company in Germany and Australia.',
      'Enrico holds a summa cum laude MSc in Finance from Bocconi University in Milan, and a MBA from Harvard Business School.'
    ],
    src: 'https://www.soly-energy.com/app/uploads/2023/03/1672090881539.jpg'
  },
  {
    title: 'Jermaine Saaltink',
    subTitle: 'MEMBER OF THE BOARD',
    desc: [
      'Jermaine loves working with founders changing the future of energy and mobility and with that contribute to global decarbonization step by step. Jermaine has been investing in the climate tech and mobility transformation space for Shell Ventures since 2013, most recently as an Investment Director covering Europe, the Middle East and Africa. Jermaine has been investing in the energy B2C space both in Europe (e.g. sonnen and Greencom), India and Africa (e.g. Husk and SolarNow).',
      'Before Shell Ventures, Jermaine worked in various Finance roles at Shell. He holds a Master’s degree in Finance, a LL.M. in International Law and a Bachelor Degree in International Relations. Jermaine is a Dutch Registered Controller.'
    ],
    src: 'https://www.soly-energy.com/app/uploads/2023/03/1663926059183.jpg',
    reverse: true
  },
  {
    title: 'Jeroen Schreur',
    subTitle: 'MEMBER OF THE BOARD',
    desc: [
      'Jeroen is since 2018 the Fund Manager Thematic Investments at APG Asset Management in the Netherlands.',
      'Before he joined APG Asset Management he supported the Board of Trustees of Stichting Pensioenfonds ABP in establishing a long term (responsible) investment policy (2010 – 2018). He was previously the CFRO of ABP investments US, Inc in New York and President of ABP Investments Asia, Ltd in Hong Kong (2003 – 2010).',
      'Jeroen holds a Master degree in Econometrics from the University of Groningen in the Netherlands.'
    ],
    src: 'https://www.soly-energy.com/app/uploads/2023/03/IMG_1850-scaled.jpg'
  },
  {
    title: 'Richard van der Meulen',
    subTitle: 'MEMBER OF THE BOARD',
    desc: [
      'Richard is a seasoned entrepreneur with extensive experience in the financial services industry. He has a strong focus on developing new business models and service concepts. In this capacity, he has been an external program manager for ABN AMRO and ANWB in the past. From his role as consultant he has completed many change management processes within multiple organizations. Richard has been involved with Soly since its founding.'
    ],
    src: 'https://www.soly-energy.com/app/uploads/2023/03/1672526288990.jpg',
    reverse: true
  }
]

const globalManagementLeaderships = [
  {
    title: 'Patrick van der Meulen',
    subTitle: 'FOUNDER AND CHIEF EXECUTIVE OFFICER',
    desc: [
      'Patrick is Chief Executive Officer and co-founder of Soly. He founded Soly together with his brother Milan in 2013.'
    ],
    src: 'https://www.soly-energy.com/app/uploads/2023/03/1607886387448.jpg'
  },
  {
    title: 'Milan van der Meulen',
    subTitle: 'FOUNDER AND CHIEF MARKETING & DIGITAL OFFICER',
    desc: [
      'Milan is Chief Marketing & Digital Officer and co-founder of Soly. He founded Soly together with his brother Patrick in 2013.'
    ],
    src: 'https://www.soly-energy.com/app/uploads/2023/03/1622712644077.jpg',
    reverse: true
  }
]

const countryManagementLeaderships = [
  {
    title: 'Alexander Brunst',
    subTitle: 'COUNTRY MANAGER GERMANY',
    desc: [
      'Alexander is the Managing Director of Soly in Germany. He is a seasoned serial entrepreneur and former top management consultant. Alexander was previously Managing Director of Gorillas Germany, of which he later became Vice President of Sustainability, Public Relations and Corporate Social Responsibility.  ',
      'He holds a PhD from RWTH Aachen and studied at the Universities of Sydney, Mannheim and Harvard.   '
    ],
    src: 'https://www.soly-energy.com/app/uploads/2023/03/alex-brunst-gorillas-01-800x531-1.jpg'
  },
  {
    title: 'Erika le Roux',
    subTitle: 'COUNTRY MANAGER SOUTH AFRICA',
    desc: [
      'Erika started her career with BDO Inc as an Audit Manager (2009-2012), whereafter she entered the Commercial Market as Head of Finance in the Financial Services Sector and worked both in South African and London (2013-2018). Her experience in the Renewable Energy Sector started as the Group Financial Director for a Wind Development Group developing Wind Farms in East Africa (2019-2020) after which she became the Managing Director for a South African EPC focusing on the Residential and Commercial Markets (2020-2023). ',
      'Erika is a qualified Chartered Accountant (SA) and registered with SAICA (The South African Institute for Chartered Accountants).'
    ],
    src: 'https://www.soly-energy.com/app/uploads/2023/03/1519737859953.jpeg',
    reverse: true
  },
  {
    title: 'Cédric Beeris',
    subTitle: 'COUNTRY MANAGER BELGIUM',
    desc: [
      'Cédric is the Country Manager of Soly Belgium. He has held several key management functions in corporate environments such as IBM and Bol.com. Cédric recently joined Soly after leading de Bijenkorf Belgium for the past 6 years as Country Manager, where he grew the organisation from a start-up to a top 3 online fashion player.  ',
      'He has a background in economics and marketing, with a specialization in digital marketing and business management.   '
    ],
    src: 'https://www.soly-energy.com/app/uploads/2023/06/Soly_InstaPost17_Cedric-Website.png'
  },
  {
    title: 'Anastasia Dellis',
    subTitle: 'COUNTRY MANAGER THE NETHERLANDS',
    desc: [
      'Hailing from Cape Town, South Africa, Anastasia Dellis grew up assisting her family’s supermarket business, fostering an entrepreneurial spirit from an early age. From a young age, she had to take on the role of owner-operator of her family business while completing her commerce degree and starting a graduate internship at The Shoprite Group of Companies, Africa’s largest retailer. In 2020, she moved to the Netherlands and consulted for international grocery companies before joining Gorillas as the Commercial Director.  ',
      'In 2023, she successfully participated in the multi-billion dollar merger and acquisition before seeking new projects aligned with her commitment to creating a positive societal impact. Joining Soly in July 2023 as the Managing Director, Anastasia looks forward to harnessing the company’s mission and vision to drive tangible change. '
    ],
    src: 'https://www.soly-energy.com/app/uploads/2023/06/Anastasia_Dellis.jpg',
    reverse: true
  }
]

export default function Page() {
  return (
    <main>
      <Banner />
      <HeadingArea
        title="Supervisory Board"
        className="my-10"
      />
      <LeadershipContainer>
        {supervisoryBoardLeaderships.map((i) => (
          <LeadershipItem
            key={i.title}
            {...i}
          />
        ))}
      </LeadershipContainer>
      <HeadingArea
        title="Global Management"
        className="my-10"
      />
      <LeadershipContainer>
        {globalManagementLeaderships.map((i) => (
          <LeadershipItem
            key={i.title}
            {...i}
          />
        ))}
      </LeadershipContainer>
      <HeadingArea
        title="Country Management"
        className="my-10"
      />
      <LeadershipContainer>
        {countryManagementLeaderships.map((i) => (
          <LeadershipItem
            key={i.title}
            {...i}
          />
        ))}
      </LeadershipContainer>
    </main>
  )
}
