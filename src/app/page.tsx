
import Advice from '@/components/Advice'
import Blogs from '@/components/Blogs'
import Calculator from '@/components/Calculator'
import Contact from '@/components/Contact'
import Experience from '@/components/Experience'
import FAQ from '@/components/FAQ'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import ServicesTwo from '@/components/ServicesTwo'
import Sponsor from '@/components/Sponsor'
import React from 'react'

export default function page() {
  return (
    <>
      <Hero />
      <Sponsor/>
      {/* <About /> */}
      <Services/>
      <Experience/>
      <ServicesTwo/>
      <Advice/>
      <Calculator/>
      <Blogs/>
      <FAQ/>
      <Contact/>
    </>
  )
}
