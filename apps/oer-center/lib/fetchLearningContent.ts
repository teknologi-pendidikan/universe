import learningContentData from 'data/learning.content.json'

export async function getLearningContent(uuid: string) {
  const data = learningContentData.learningcontent.find((v) => v.uuid === uuid)
  return data
}

export async function getAllLearningContent() {
  return learningContentData.learningcontent
}
