import ContentData from 'data/site.content.json'
import Image from 'next/image'

export default function WelcomeHero() {
  return (
    <section id="welcome-hero" className="relative hidden lg:block">
      <Image
        src="/welcome-hero-bg.png"
        alt="Welcome Hero Background"
        className="h-screen max-h-screen w-full object-cover"
        width={1920}
        height={1080}
        quality={75}
      />
      <div id="hero-content" className="absolute bottom-10 w-full">
        <div className="flex max-w-2xl flex-col items-start justify-start space-y-4 pt-32 lg:p-12">
          <h1 className="bg-brandblue p-3  text-2xl font-bold text-white">
            {ContentData.contentComponentWelcomeHero.title}
          </h1>
          <p className="bg-brandyellow p-3 text-2xl font-bold text-brandblue-800">
            {ContentData.contentComponentWelcomeHero.subtitle}
          </p>
          <p className="line-clamp-4 hidden bg-brandgreen p-3 text-base text-white lg:line-clamp-none lg:block">
            {ContentData.contentComponentWelcomeHero.description}
          </p>
        </div>
      </div>
      <div id="hero-bottomline" className="absolute bottom-0 w-full bg-brandblue-800">
        <p className="p-2 text-center text-lg font-bold text-brandyellow">
          {ContentData.contentComponentWelcomeHero.actionText}
        </p>
      </div>
    </section>
  )
}
