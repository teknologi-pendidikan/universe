type SectionLayoutProps = {
  children: React.ReactNode
  title: string
  subtitle: string
  className: string
  id: string
}

export default function SectionLayout({
  children,
  title = 'Example Title',
  subtitle,
  className,
  id,
}: SectionLayoutProps) {
  return (
    <section id={id} className={className}>
      <div className="container mx-auto">
        <div className="flex flex-col items-start justify-start pb-10">
          <h2
            className="mb-2 text-center text-6xl
            font-bold text-gray-800"
          >
            {title}
          </h2>
          <p className="text-center text-xl text-gray-600">{subtitle}</p>
        </div>
        {children}
      </div>
    </section>
  )
}
