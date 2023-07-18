import SectionLayout from 'components/layout/CommonSectionLayout'

export default function ThematicBrowserPage() {
  return (
    <main id="main-content" tabIndex={-1} className="focus:outline-1">
      <SectionLayout
        id="thematic-resources"
        className="container mx-auto py-48"
        title="Sumber Belajar"
        subtitle="Sumber belajar yang tersedia di EDTECH-ID"
      >
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3"></div>
      </SectionLayout>
    </main>
  )
}
