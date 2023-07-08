import React from 'react'

interface Props {
  children: React.ReactNode
}

export default function SectionLayout({ children, ...props }: Props) {
  return (
    <section
      {...props}
      className="container mx-auto mb-8 mt-5 max-w-screen-xl px-4"
    >
      {children}
    </section>
  )
}
