import Image from 'next/image'

export function Future() {
  return (
    <div className="relative bg-gradient-to-r from-black to-[#555555] text-white">
      <div className="container relative min-h-[42.25rem]">
        <div className="absolute inset-y-0 my-auto flex h-fit w-1/2 flex-col space-y-6 pe-16">
          <span className="font-semibold">FUTURE</span>
          <span className="text-3xl font-semibold">
            Using the sun to our advantage
          </span>
          <p className="leading-8">
            As much as the earth revolves around the sun, as well does
            everything at soly revolve around the sun. We are on a mission to
            make solar energy accessible to all. Which seemed like a mission
            impossible years ago, is getting closer today. And we enjoy every
            part of it. Because the sun is in fact one of the few natural
            sources of energy. One from which all of us should be able to
            benefit. We at Soly are determined to make it come true. Solar
            energy for all. Are you with us?
          </p>
        </div>
        <Image
          className="absolute -bottom-20 left-1/2 right-0 m-auto rounded-3xl"
          src="https://www.soly-energy.com/app/uploads/2023/02/OverOns_PatrickMilan-e1676038259618.jpg"
          alt=""
          height={500}
          width={500}
        />
      </div>
    </div>
  )
}
