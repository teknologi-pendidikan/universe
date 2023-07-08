import { ThematicCard } from 'components/ResourcesCard'
import SectionLayout from 'components/SectionLayout'
import WelcomeHero from 'components/WelcomeHero'

export default function Page() {
  return (
    <main>
      <WelcomeHero />
      <SectionLayout
        id="thematic-resources"
        className="py-16"
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
