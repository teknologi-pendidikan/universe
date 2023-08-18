'use client'

import SectionLayout from 'components/layout/CommonSectionLayout'
import { CommonCard } from 'components/organism/CommonResourcesCard'
import LearningContent from 'data/learning.content.json'
import React from 'react'

const ListOfCategory = ['all', 'video', 'slides']

export default function Page() {
  const videos = LearningContent.learningcontent.filter(
    (content) => content.contentType === 'video',
  )
  const slides = LearningContent.learningcontent.filter(
    (content) => content.contentType === 'slides',
  )
  // const images = LearningContent.learningcontent.filter(
  //   (content) => content.contentType === 'image',
  // )
  // const text = LearningContent.learningcontent.filter(
  //   (content) => content.contentType === 'text',
  // )

  // crate state for filter
  const [filter, setFilter] = React.useState('all')

  return (
    <main
      className="container mx-auto py-12 lg:py-48"
      id="main-content"
      tabIndex={-1}
    >
      <h1 className="px-10 text-6xl font-bold text-gray-800 lg:px-0">
        Discover Learning Content
      </h1>
      <div className="px-10 lg:px-0">
        <p className="pb-2 pt-6 text-xl text-gray-800">Filter by media type:</p>
        <div className="grid w-full grid-cols-1 gap-4 pb-6 lg:grid-cols-5">
          {ListOfCategory.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category === filter ? '' : category)}
              className={`${
                filter === category
                  ? 'bg-brandblue-800 text-white'
                  : 'bg-white text-brandblue-800'
              } border-black-1 flex flex-col items-start justify-start space-y-2 rounded-lg border p-4 hover:bg-brandblue-800 hover:text-white`}
              // className="border-black-1 flex flex-col items-start justify-start space-y-2 rounded-lg border p-4 text-brandblue-800 hover:bg-brandblue-800 hover:text-white"
            >
              <h3 className="text-xl font-semibold hover:underline">
                {category}
              </h3>
            </button>
          ))}
        </div>
      </div>
      {/* show section when state is empyt or state is VIDEO */}
      {(filter === 'all' || filter === 'video') && (
        <SectionLayout
          title="Lecture Videos"
          id="videos-content"
          subtitle="Open Educational Lecture Videos"
          className="container mx-auto px-10 py-6 lg:px-0"
        >
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {videos.map((video) => (
              <CommonCard
                key={video.uuid}
                title={video.contentTitle}
                image={video.contentUrl}
                slug={`/learning-content/${video.uuid}`}
                author={video.contentAuthor}
                type="video"
              />
            ))}
          </div>
        </SectionLayout>
      )}

      {/* SLIDES RENDER */}
      {(filter === 'all' || filter === 'slides') && (
        <SectionLayout
          title="Lecture Slides / Decks"
          id="slides-content"
          subtitle="Open Educational Lecture Slides"
          className="container mx-auto px-10 py-6 lg:px-0"
        >
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {slides.map((slide) => (
              <CommonCard
                key={slide.uuid}
                title={slide.contentTitle}
                image={slide.contentUrl}
                slug={`/learning-content/${slide.uuid}`}
                author={slide.contentAuthor}
                type="slides"
              />
            ))}
          </div>
        </SectionLayout>
      )}
      {/*
      <SectionLayout
        title="Lecture Images"
        id="images-content"
        subtitle="Open Educational Lecture Images"
        className="container mx-auto px-10 py-6 lg:px-0"
      >
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {images.map((image) => (
            <CommonCard
              key={image.uuid}
              title={image.contentTitle}
              image={image.contentUrl}
              slug={`/learning-content/${image.uuid}`}
              author={image.contentAuthor}
              type="image"
            />
          ))}
        </div>
      </SectionLayout>
      <SectionLayout
        title="Lecture Notes"
        id="text-content"
        subtitle="Open Educational Lecture Text"
        className="container mx-auto px-10 py-6 lg:px-0"
      >
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {text.map((text) => (
            <CommonCard
              key={text.uuid}
              title={text.contentTitle}
              image={text.contentUrl}
              slug={`/learning-content/${text.uuid}`}
              author={text.contentAuthor}
              type="text"
            />
          ))}
        </div>
      </SectionLayout> */}
    </main>
  )
}
