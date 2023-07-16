import SectionLayout from 'components/layout/CommonSectionLayout'

export default function DataWarehouse() {
  return (
    <SectionLayout
      title="Data Warehouse"
      subtitle="Internal OER Datacenter and Curating Progress"
      id="data-warehouse"
      className="container mx-auto h-screen w-full px-5 py-48"
    >
      <h2 className="text-4xl font-bold">OER Data Contents</h2>
      <iframe
        title="Data Warehouse"
        className="mb-12 h-full w-full"
        src="https://docs.google.com/spreadsheets/d/e/2PACX-1vT7GkhWoYDdbWDQWbPIVAOtVha9eiCounSPA9GekSuyE3lDnOZm5TfG65C9MaRPZLiRjYv5I40zdzVR/pubhtml?gid=0&amp;single=true&amp;widget=true&amp;headers=false"
      ></iframe>

      <h2 className="text-4xl font-bold">Thematic Data Content</h2>
      <iframe
        title="Data Warehouse"
        className="h-full w-full"
        src="https://docs.google.com/spreadsheets/d/e/2PACX-1vT7GkhWoYDdbWDQWbPIVAOtVha9eiCounSPA9GekSuyE3lDnOZm5TfG65C9MaRPZLiRjYv5I40zdzVR/pubhtml?gid=1169786585&amp;single=true&amp;widget=true&amp;headers=false"
      ></iframe>
    </SectionLayout>
  )
}
