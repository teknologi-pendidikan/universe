'use client'

import Content from 'data/policy.guideline.mdx'

export default function Page() {
  return (
    <main id="main-content" tabIndex={-1} className="focus:outline-1">
      <article className="container prose prose-base mx-auto max-w-screen-lg px-8 py-48 lg:prose-xl lg:px-0">
        <Content />
      </article>
    </main>
  )
}
