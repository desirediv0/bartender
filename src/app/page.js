import PremiumHero from '@/components/PremiumHero'
import PremiumServices from '@/components/PremiumServices'
import PremiumAbout from '@/components/PremiumAbout'
import PremiumGallery from '@/components/PremiumGallery'
import WhyChoose from '@/components/WhyChoose'
import PremiumCTA from '@/components/PremiumCTA'

export default function Home() {
  return (
    <>
      <PremiumHero />
      <PremiumServices />
      <PremiumAbout />
      <PremiumGallery />
      <WhyChoose />
      <PremiumCTA />

    </>
  );
}
