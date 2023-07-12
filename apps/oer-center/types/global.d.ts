declare global {
  interface LearningContentProperties {
    uuid: string
    contentTitle: string
    contentAuthor: string
    contentType: 'video' | 'slides' | 'image' | 'text'
    contentDescription: string
    contentUrl: string
    contentThumbnail: string
    contentUploadDate: string
  }

  interface LearningContentPageViewProps {
    params: {
      uuid: string
    }
  }

  type uuid = string
  type contentType = 'video' | 'slides' | 'image' | 'text'

  interface ThematicLearningContentProperties {
    uuid: string
    thematicTitle: string
    thematicDescription: string
    thematicThumbnail: string
    thematicLearningContents: Array<uuid>
  }

  interface ThematicLearningContentPageViewProps {
    params: {
      uuid: string
    }
  }
}

export type {
  LearningContentPageViewProps,
  LearningContentProperties,
  ThematicLearningContentPageViewProps,
  ThematicLearningContentProperties,
}
