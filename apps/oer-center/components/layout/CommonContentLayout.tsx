import React from 'react'

type LayoutProps = {
  children: React.ReactNode
  title: string
  subtitle: string
  className: string
  id: string
}

export default function LayoutCommonContent({
  title = 'Example Title',
  subtitle = 'Example Subtitle',
  className = 'container mx-auto py-48',
  children = null,
  id = 'thematic-content',
}: LayoutProps) {
  return (
    <section id={id} className={className}>
      <article className="flex flex-col items-start justify-start space-y-16 pb-10">
        <h1 className="mb-2 max-w-screen-lg text-6xl font-bold text-gray-800">
          {title}
        </h1>
        <div className="flex w-full flex-row items-start justify-center space-x-4">
          <div className="aspect-video w-2/3">{children}</div>
          <div className="flex w-full max-w-screen-sm flex-col items-start justify-start space-y-4">
            <h2 className="text-4xl font-bold">Lecture Notes</h2>
            <p className="text-2xl">{subtitle}</p>
          </div>
        </div>
      </article>
    </section>
  )
}
