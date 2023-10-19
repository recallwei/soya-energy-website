const contentList = [
  {
    no: '01.',
    title: 'Making solar energy available to everyone',
    desc: 'We do everything within our power to make solar energy widely accessible to everyone. We do this by offering a wide range of concepts. . We do this by offering a wide range of concepts.'
  },
  {
    no: '02.',
    title: 'The sun as a primary source of energy',
    desc: 'Like the earth, Soya has two types of motions: rotation and revolution. At Soya, not only do we rotate around our own axis and optimize our own business. We also revolve around the sun, and care for the world around us.'
  },
  {
    no: '03.',
    title: 'Positive, value-driven and inclusive',
    desc: 'We prefer to think in solutions. We pursue our ideals with sustainable drive, and and represent an open company, where anyone can join at any time. We play and win as a team and support our communities.'
  }
]

export default function MissionVisionValues() {
  return (
    <div className="min-h-[42.25rem] bg-gradient-to-r from-black to-[#555555] text-white">
      <div className="container">
        <div className="mx-auto h-fit w-[700px] pb-48 pt-20">
          <div className="text-center text-4xl font-bold tracking-wider">
            Mission, vision and values
          </div>

          <div className="mt-24 flex flex-col space-y-14">
            {contentList.map((c) => (
              <div
                className="flex space-x-12"
                key={c.no}
              >
                <span className="w-20 shrink-0 text-4xl font-bold tracking-wider">
                  {c.no}
                </span>
                <div className="flex flex-col">
                  <span className="mb-6 text-xl font-semibold">{c.title}</span>
                  <p>{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
