import ContentData from 'data/site.content.json'
import Image from 'next/image'

export default function WelcomeHero() {
  return (
    <section id="welcome-hero" className="relative">
      <Image
        src="/welcome-hero-bg.png"
        alt="Welcome Hero Background"
        className="w-full max-h-screen h-screen object-cover"
        width={1920}
        height={1080}
        quality={75}
      />
      <div id="hero-content" className="absolute bottom-10 w-full">
        <div className="p-12 flex flex-col items-start justify-start space-y-4 max-w-2xl">
          <h1 className="text-2xl font-bold  bg-brandblue text-white p-3">
            {ContentData.contentComponentWelcomeHero.title}
          </h1>
          <p className="text-2xl font-bold bg-brandyellow text-brandblue-800 p-3">
            {ContentData.contentComponentWelcomeHero.subtitle}
          </p>
          <p className="text-base bg-brandgreen text-white p-3">
            {ContentData.contentComponentWelcomeHero.description}
          </p>
        </div>
      </div>
      <div
        id="hero-bottomline"
        className="absolute bottom-0 w-full bg-brandblue-800"
      >
        <p className="p-2 text-center font-bold text-brandyellow text-lg">
          {ContentData.contentComponentWelcomeHero.actionText}
        </p>
      </div>
    </section>
  )
}
