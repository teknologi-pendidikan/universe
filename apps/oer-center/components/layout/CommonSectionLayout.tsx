import React from 'react'

type SectionLayoutProps = {
  children: React.ReactNode
  title: string
  subtitle: string
  className?: string
  id: string
}

export default function SectionLayout({
  children,
  title = 'Example Title',
  subtitle,
  className,
  id,
}: SectionLayoutProps) {
  return (
    <section id={id} className={className}>
      <div className="flex flex-col items-start justify-start pb-10">
        <h2
          className="mb-2 text-5xl font-bold text-gray-800
            lg:text-center lg:text-6xl"
        >
          {title}
        </h2>
        <p className="text-lg text-gray-600 lg:text-center lg:text-xl">{subtitle}</p>
      </div>
      {children}
    </section>
  )
}
