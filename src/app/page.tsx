import FeaturesPage from '@/components/card-layout/features'
import EcommercePage from '@/components/card-layout/features-two'
import FeaturesSection from '@/components/card-layout/new-feature'
import Footer from '@/components/common/footer'
import ContactSection from '@/components/contact/page'
import Hero from '@/components/hero'
import PricingCards from '@/components/pricing/page'
import QueriesPage from '@/components/queries/page'
import React from 'react'

const page = () => {
  return (
        <div>
          <Hero />
          <FeaturesSection />
          <FeaturesPage />
          <EcommercePage />
          <PricingCards />
          <QueriesPage />
          <ContactSection />
          <Footer />
        </div>
  )
}

export default page;