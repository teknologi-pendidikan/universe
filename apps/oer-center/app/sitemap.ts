import LearningContents from 'data/learning.content.json'
import ThematicContents from 'data/thematic.content.json'
import { MetadataRoute } from 'next'
import {
  LearningContentProperties,
  ThematicLearningContentProperties,
} from 'types/global'

export default function sitemap(): MetadataRoute.Sitemap {
  // Learning Content
  const routesLearningContent = LearningContents.learningcontent.map(
    (learningContent: LearningContentProperties) => ({
      url: `https://sumberbelajar.teknologipendidikan.sch.id/learning-content/${learningContent.uuid}`,
      lastModified: new Date().toISOString(),
    }),
  )

  // Thematic Content
  const routesThematicContent = ThematicContents.thematiclist.map(
    (thematicContent: ThematicLearningContentProperties) => ({
      url: `https://sumberbelajar.teknologipendidikan.sch.id/thematic/${thematicContent.uuid}`,
      lastModified: new Date().toISOString(),
    }),
  )

  const routes = [
    '',
    '/learning-content',
    '/contributors',
    '/support-us',
    '/policy',
    '/guidelines',
    '/about',
  ].map((route) => ({
    url: `https://sumberbelajar.teknologipendidikan.sch.id${route}`,
    lastModified: new Date().toISOString(),
  }))

  return [...routes, ...routesLearningContent, ...routesThematicContent]
}
