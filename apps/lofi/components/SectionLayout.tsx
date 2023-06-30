import React from 'react'

interface Props {
  children: React.ReactNode
}

export default function SectionLayout({
  children,
  ...props
}: Props) {
  return (
    <section
      {...props}
      className="mx-auto container px-4 mb-8 mt-5 max-w-screen-xl"
    >
      {children}
    </section>
  )
}
