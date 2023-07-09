import SectionLayout from 'components/layout/CommonSectionLayout'
import { ThematicCard } from 'components/organism/CommonResourcesCard'
import ThematicData from 'data/thematic.content.json'

export default function ThematicBrowserPage() {
  return (
    <main>
      <SectionLayout
        id="thematic-resources"
        className="container mx-auto py-48"
        title="Sumber Belajar"
        subtitle="Sumber belajar yang tersedia di EDTECH-ID"
      >
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
          {ThematicData.thematiclist.map((thematic) => (
            <ThematicCard
              key={thematic.slug}
              title={thematic.title}
              author={thematic.author}
              description={thematic.description}
              date={thematic.date}
              image={`/${thematic.image}`}
              slug={thematic.slug}
            />
          ))}
        </div>
      </SectionLayout>
    </main>
  )
}
