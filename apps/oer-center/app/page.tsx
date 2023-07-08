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
        <h1>Halo JS</h1>
      </SectionLayout>
    </main>
  )
}
