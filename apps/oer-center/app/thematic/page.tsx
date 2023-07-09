import SectionLayout from 'components/layout/CommonSectionLayout'
import { ThematicCard } from 'components/organism/CommonResourcesCard'

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
          <ThematicCard />
          <ThematicCard />
          <ThematicCard />
          <ThematicCard />
          <ThematicCard />
          <ThematicCard />
        </div>
      </SectionLayout>
    </main>
  )
}
