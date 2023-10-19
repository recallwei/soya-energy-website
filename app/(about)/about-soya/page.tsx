import type { Metadata } from 'next'

import Banner from './components/Banner'
import { Future } from './components/Future'
import ListView from './components/ListView'
import MeetOurLeadershipTeam from './components/MeetOurLeadershipTeam'
import Statistics from './components/Statistics'
import TalkToOurConsults from './components/TalkToOurConsults'
import WeHaveABrightFutureAhead from './components/WeHaveABrightFutureAhead'

export const metadata: Metadata = {
  title: 'About Soya'
}

export default function Page() {
  return (
    <main>
      <Banner />
      <Future />
      <Statistics />
      <ListView />
      <MeetOurLeadershipTeam />
      <WeHaveABrightFutureAhead />
      <TalkToOurConsults />
    </main>
  )
}
