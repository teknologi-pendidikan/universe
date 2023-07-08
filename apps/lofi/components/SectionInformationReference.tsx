import React from 'react'

interface Props {
  children: React.ReactNode
}

export default function SectionInformationReference({ children }: Props) {
  return (
    <section
      id="referensi-informasi"
      className="container mx-auto mb-8 mt-5 max-w-screen-xl px-4"
    >
      <div className="flex flex-col items-start justify-start space-y-4">
        <h2 className="text-xl font-bold text-black">
          Referensi informasi terkini
        </h2>
        <div className="grid w-full grid-cols-1 gap-4 lg:grid-cols-3">
          {children}
        </div>
      </div>
    </section>
  )
}
