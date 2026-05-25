import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import SEO from '../components/SEO'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import Portfolio from '../components/Portfolio'
import WhyChooseUs from '../components/WhyChooseUs'
import Testimonials from '../components/Testimonials'
import Contact from '../components/Contact'
import Map from '../components/Map'
import Footer from '../components/Footer'

gsap.registerPlugin(ScrollTrigger)

const Home = () => {
  useEffect(() => {
    // Initialize GSAP ScrollTrigger
    ScrollTrigger.refresh()
  }, [])

  return (
    <div className="App">
      <SEO 
        title="Shaha Enterprises | Best Interior Designer & Architect in Pune" 
        description="Transform your home or business with Pune's top interior design and architecture firm. Expert luxury residential design, office space planning, and premium bungalow construction."
      />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <WhyChooseUs />
      <Testimonials />
      <Contact />
      <Map />
      <Footer />
    </div>
  )
}

export default Home
