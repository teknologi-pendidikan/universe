import videoDataList from 'data/video.content.json'

export async function getVideo(uuid: string) {
  const data = videoDataList.videolist.find((v) => v.uuid === uuid)
  return data
}

export async function getAllVideo() {
  return videoDataList.videolist
}
