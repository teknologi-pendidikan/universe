import React from 'react'

type LayoutProps = {
  children: React.ReactNode
  title: string
  subtitle: string
  className: string
  id: string
  author: string
  uploadDate: string
}

export default function LayoutCommonContent({
  title = 'Example Title',
  subtitle = 'Example Subtitle',
  className = 'container mx-auto py-48',
  children = null,
  id = 'thematic-content',
  author = 'Example Author',
  uploadDate = 'Example Date',
}: LayoutProps) {
  return (
    <section id={id} className={className}>
      <article className="flex flex-col items-start justify-start space-y-16 pb-10">
        <h1 className="mb-2 text-3xl font-bold text-gray-800 lg:max-w-screen-lg lg:text-6xl">{title}</h1>
        <div className="flex w-full flex-col items-start justify-start space-y-12 lg:flex-row lg:justify-center lg:space-x-4 lg:space-y-0">
          <div className="aspect-video w-full lg:w-2/3">{children}</div>
          <div className="flex flex-col items-start justify-start space-y-4 lg:w-full lg:max-w-screen-sm">
            <h2 className="text-4xl font-bold">Lecture Notes</h2>
            <p className="text-md lg:text-2xl">{subtitle}</p>
            <p className="text-md lg:text-2xl">Author: {author}</p>
            <p className="text-md lg:text-2xl">Date: {uploadDate}</p>
          </div>
        </div>
      </article>
    </section>
  )
}
