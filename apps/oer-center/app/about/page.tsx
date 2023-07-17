'use client'

import Content from 'data/about.guideline.mdx'

export default function Page() {
  return (
    <main>
      <article className="container prose prose-xl mx-auto max-w-screen-lg py-48">
        <Content />
      </article>
    </main>
  )
}
