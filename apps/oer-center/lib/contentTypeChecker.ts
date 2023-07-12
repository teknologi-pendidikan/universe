// get youtube video id from url
export const getYoutubeVideoId = (url: string) => {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&\?]*).*/
  const match = url.match(regExp)
  return match && match[2].length === 11 ? match[2] : null
}

// get google drive file id from url
export const getGoogleDriveFileId = (url: string) => {
  const regExp = /[-\w]{25,}/
  const match = url.match(regExp)
  return match ? match[0] : null
}
