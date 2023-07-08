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
        <div className="flex flex-col items-start justify-start py-16">
          <h2
            className="text-6xl font-bold text-center
            text-gray-800 mb-2"
          >
            {title}
          </h2>
          <p className="text-xl text-gray-600 text-center">{subtitle}</p>
        </div>
        {children}
      </div>
    </section>
  )
}
