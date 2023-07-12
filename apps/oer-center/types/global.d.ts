declare global {
  interface LearningContentProperties {
    uuid: string
    contentTitle: string
    contentAuthor: string
    contentType: 'video' | 'slides' | 'image' | 'text' | 'audio'
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
}

export type { LearningContentPageViewProps, LearningContentProperties }
