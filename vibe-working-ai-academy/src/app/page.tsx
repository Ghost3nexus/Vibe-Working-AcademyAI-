import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import PainSolution from '@/components/sections/PainSolution'
import Services from '@/components/sections/Services'
import VideoSection from '@/components/sections/VideoSection'

import Pricing from '@/components/sections/Pricing'
import SubsidySupport from '@/components/sections/SubsidySupport'

import FAQ from '@/components/sections/FAQ'
import ContactForm from '@/components/sections/ContactForm'

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
      <Hero />
      <PainSolution />
      <Services />
      <VideoSection />

      <Pricing />
      <SubsidySupport />
      
      <FAQ />
      <ContactForm />
      </main>
      <Footer />
    </>
  )
}