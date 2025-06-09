import Hero from '@/components/sections/Hero'
import Services from '@/components/sections/Services'
import FAQ from '@/components/sections/FAQ'
import ContactForm from '@/components/sections/ContactForm'
import Footer from '@/components/layout/Footer'

export default function HomePage() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <Services />
      <FAQ />
      <ContactForm />
      <Footer />
    </main>
  )
}