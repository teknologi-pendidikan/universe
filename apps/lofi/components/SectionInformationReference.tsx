import React from 'react'

interface Props {
  children: React.ReactNode
}

export default function SectionInformationReference({ children }: Props) {
  return (
    <section
      id="referensi-informasi"
      className="mx-auto container px-4 mb-8 mt-5 max-w-screen-xl"
    >
      <div className="flex flex-col space-y-4 justify-start items-start">
        <h1 className="text-xl font-bold text-black">
          Referensi informasi terkini
        </h1>
        <div className="grid grid-cols-3 gap-4 w-full">{children}</div>
      </div>
    </section>
  )
}
