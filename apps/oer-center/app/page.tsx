import WelcomeHero from 'components/common/WelcomeHero'
import Banner from 'components/organism/CommonBanner'

export default function Page() {
  return (
    <main>
      <WelcomeHero />
      <Banner
        title="Are you a teacher in a disadvantaged, frontier, and outermost area?"
        description="We have a special collection of learning materials for your students!"
        ctaLink="/thematic/outermost-area"
        ctaText="Explore the collection"
      />
    </main>
  )
}
