import thematicContentData from 'data/thematic.content.json'

export async function getThematicContent(uuid: string) {
  const data = thematicContentData.thematiclist.find((v) => v.uuid === uuid)
  return data
}

export async function getAllThematicContent() {
  return thematicContentData.thematiclist
}
