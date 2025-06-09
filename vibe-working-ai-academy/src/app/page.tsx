import Hero from '@/components/sections/Hero'
import PainSolution from '@/components/sections/PainSolution'
import Services from '@/components/sections/Services'
import VideoSection from '@/components/sections/VideoSection'
import Results from '@/components/sections/Results'
import Curriculum from '@/components/sections/Curriculum'
import Pricing from '@/components/sections/Pricing'
import SubsidySupport from '@/components/sections/SubsidySupport'
import Community from '@/components/sections/Community'
import FAQ from '@/components/sections/FAQ'
import ContactForm from '@/components/sections/ContactForm'

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Hero />
      <PainSolution />
      <Services />
      <VideoSection />
      <Results />
      <Curriculum />
      <Pricing />
      <SubsidySupport />
      <Community />
      <FAQ />
      <ContactForm />
    </main>
  )
}