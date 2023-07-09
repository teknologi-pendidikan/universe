import React from 'react'

type LayoutProps = {
  children: React.ReactNode
  title: string
  subtitle: string
  className: string
  id: string
}

export default function LayoutThematicContent({
  title = 'Example Title',
  subtitle = 'Example Subtitle',
  className = 'container mx-auto py-48',
  children = null,
  id = 'thematic-content',
}: LayoutProps) {
  return (
    <section id={id} className={className}>
      <div className="flex flex-col items-start justify-start space-y-16 pb-10">
        <h1
          className="mb-2 text-center text-6xl
            font-bold text-gray-800"
        >
          {title}
        </h1>
        <div className="flex w-full max-w-screen-md flex-col items-start justify-start space-y-4">
          <h2 className="text-2xl font-bold">Quickstart: What is {title}</h2>
          <p className="text-xl">{subtitle}</p>
        </div>
      </div>
      {children}
    </section>
  )
}
