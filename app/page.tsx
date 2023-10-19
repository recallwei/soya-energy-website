import Banner from './components/Banner'
import Countries from './components/Countries'
import LeadershipTeam from './components/LeadershipTeam'
import MissionVisionValues from './components/MissionVisionValues'
import News from './components/News'
import OurSolutions from './components/OurSolutions'
import OurVision from './components/OurVision'

export default function Page() {
  return (
    <main>
      <Banner />
      <OurVision />
      <OurSolutions />
      <MissionVisionValues />
      <LeadershipTeam />
      <Countries />
      <News />
    </main>
  )
}
