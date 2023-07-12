import {
  getAllLearningContent,
  getLearningContent,
} from 'lib/fetchLearningContent'
import {
  LearningContentPageViewProps,
  LearningContentProperties,
} from 'types/global'

export const dynamicParams = false

export default async function Page({ params }: LearningContentPageViewProps) {
  const { uuid, contentTitle } = (await getLearningContent(
    params.uuid,
  )) as LearningContentProperties
  return (
    <div>
      <h1 className="bg-red-500 pt-64 text-6xl">{contentTitle}</h1>
      <h1 className="text-6xl">{uuid}</h1>
    </div>
  )
}

export async function generateStaticParams() {
  const pokes = await getAllLearningContent()
  return pokes.map((p) => ({ uuid: p.uuid }))
}
