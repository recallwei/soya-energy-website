import Button from '@/components/Button'

export default function MeetOurLeadershipTeam() {
  return (
    <div className="m-auto mb-20 flex w-fit space-x-8 rounded-3xl border bg-[#333333] p-6 text-white shadow">
      <div className="flex w-[500px] flex-col space-y-4">
        <span className="text-2xl font-semibold">Meet our Leadership Team</span>
        <span className="text-lg">
          Global commitment. Solar energy accessible to all. It&#39;s possible.
        </span>
      </div>
      <div className="self-center">
        <Button>Leadership Team</Button>
      </div>
    </div>
  )
}
