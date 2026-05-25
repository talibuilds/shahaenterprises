import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ArrowLeft, Home, Ruler, TreePine, Shield } from 'lucide-react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Contact from '../components/Contact'
import Map from '../components/Map'
import Footer from '../components/Footer'

const BungalowDesign = () => {
  const heroRef = useRef(null)
  const servicesRef = useRef(null)

  useEffect(() => {
    window.scrollTo(0, 0)
    
    const ctx = gsap.context(() => {
      gsap.fromTo(heroRef.current,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: 'power3.out'
        }
      )

      gsap.fromTo('.service-feature',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: servicesRef.current,
            start: 'top 80%'
          }
        }
      )
    })

    return () => ctx.revert()
  }, [])

  const features = [
    {
      icon: Home,
      title: 'Architectural Planning',
      description: 'Complete architectural design from concept to construction drawings with regulatory approvals.'
    },
    {
      icon: Ruler,
      title: 'Structural Engineering',
      description: 'Professional structural design ensuring safety, durability, and compliance with building codes.'
    },
    {
      icon: TreePine,
      title: 'Landscape Design',
      description: 'Beautiful outdoor spaces that complement your bungalow with gardens, pathways, and water features.'
    },
    {
      icon: Shield,
      title: 'Project Management',
      description: 'End-to-end project coordination from permits to final inspection with quality assurance.'
    }
  ]

  const projects = [
    {
      title: 'Modern Villa Design',
      image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Contemporary bungalow design with clean lines and sustainable features.'
    },
    {
      title: 'Traditional Heritage Home',
      image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Classic bungalow restoration preserving architectural character while adding modern amenities.'
    },
    {
      title: 'Luxury Estate Design',
      image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Expansive luxury bungalow with premium finishes and state-of-the-art facilities.'
    }
  ]

  const phases = [
    {
      phase: 'Planning & Design',
      duration: '4-6 weeks',
      description: 'Site analysis, architectural design, and obtaining necessary approvals',
      activities: ['Site Survey', 'Concept Design', 'Detailed Drawings', 'Permit Applications']
    },
    {
      phase: 'Foundation & Structure',
      duration: '8-12 weeks',
      description: 'Excavation, foundation work, and structural framework construction',
      activities: ['Excavation', 'Foundation', 'Structural Frame', 'Roofing']
    },
    {
      phase: 'Interiors & Finishes',
      duration: '12-16 weeks',
      description: 'Interior design, electrical, plumbing, and finishing work',
      activities: ['Interior Design', 'MEP Installation', 'Flooring', 'Final Finishes']
    },
    {
      phase: 'Landscaping & Handover',
      duration: '3-4 weeks',
      description: 'Landscape development and final project handover',
      activities: ['Garden Design', 'Outdoor Features', 'Final Inspection', 'Handover']
    }
  ]

  const designStyles = [
    { name: 'Contemporary Modern', description: 'Clean lines, open spaces, and innovative materials' },
    { name: 'Traditional Colonial', description: 'Classic architecture with period-appropriate details' },
    { name: 'Mediterranean Style', description: 'Warm colors, arched openings, and tile roofing' },
    { name: 'Minimalist Design', description: 'Simple forms focusing on functionality and space' },
    { name: 'Eco-Friendly Homes', description: 'Sustainable materials and energy-efficient systems' },
    { name: 'Luxury Estates', description: 'Premium finishes and high-end architectural features' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-dark-900 to-dark-800">
      <Navbar />
      
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
            alt="Bungalow Design"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-60" />
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto"
        >
          <Link to="/" className="inline-flex items-center text-gold-400 hover:text-gold-300 mb-6 transition-colors duration-300">
            <ArrowLeft size={20} className="mr-2" />
            Back to Home
          </Link>
          
          <h1 className="text-5xl md:text-7xl font-montserrat font-bold mb-6">
            <span className="text-white">Bungalow</span>
            <br />
            <span className="text-gradient">Design</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto font-lato leading-relaxed">
            Design and build your dream home with our comprehensive bungalow design and construction services. From concept to completion.
          </p>
          
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gold-gradient text-dark-900 px-8 py-4 rounded-full font-montserrat font-semibold text-lg transition-all duration-300 hover:shadow-glow"
          >
            Build Your Dream Home
          </motion.a>
        </motion.div>
      </section>

      {/* Features Section */}
      <section ref={servicesRef} className="py-20 bg-gradient-to-b from-dark-800 to-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold mb-4">
              Complete <span className="text-gradient">Solutions</span>
            </h2>
            <p className="text-xl text-gray-300 font-lato max-w-3xl mx-auto">
              From initial design to final construction, we manage every aspect of your bungalow project
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="service-feature glass-effect border border-gold-400/20 rounded-2xl p-8 hover:border-gold-400/40 transition-all duration-500 text-center"
                whileHover={{ y: -10 }}
              >
                <div className="w-16 h-16 bg-gold-400/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="text-gold-400" size={32} />
                </div>
                <h3 className="text-xl font-montserrat font-bold text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-300 font-lato leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Styles */}
      <section className="py-20 bg-gradient-to-b from-dark-900 to-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold mb-4">
              Design <span className="text-gradient">Styles</span>
            </h2>
            <p className="text-xl text-gray-300 font-lato max-w-3xl mx-auto">
              Choose from a variety of architectural styles to match your vision and lifestyle
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {designStyles.map((style, index) => (
              <motion.div
                key={style.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="glass-effect border border-gold-400/20 rounded-2xl p-6 hover:border-gold-400/40 transition-all duration-500"
              >
                <h3 className="text-lg font-montserrat font-bold text-gold-400 mb-3">
                  {style.name}
                </h3>
                <p className="text-gray-300 font-lato">
                  {style.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Construction Phases */}
      <section className="py-20 bg-gradient-to-b from-dark-800 to-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold mb-4">
              Construction <span className="text-gradient">Process</span>
            </h2>
            <p className="text-xl text-gray-300 font-lato max-w-3xl mx-auto">
              A transparent and systematic approach to building your dream home
            </p>
          </motion.div>

          <div className="space-y-12">
            {phases.map((phase, index) => (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full flex items-center justify-center mr-4 text-dark-900 font-montserrat font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-2xl font-montserrat font-bold text-white">
                        {phase.phase}
                      </h3>
                      <p className="text-gold-400 font-medium">
                        Duration: {phase.duration}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-300 font-lato mb-6 leading-relaxed">
                    {phase.description}
                  </p>
                  <div className="grid md:grid-cols-2 gap-3">
                    {phase.activities.map((activity) => (
                      <div key={activity} className="flex items-center text-gray-300 font-lato">
                        <div className="w-2 h-2 bg-gold-400 rounded-full mr-3 flex-shrink-0" />
                        {activity}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className={`glass-effect border border-gold-400/20 rounded-2xl p-8 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div className="text-center">
                    <div className="text-6xl font-montserrat font-bold text-gradient mb-4">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                    <h4 className="text-xl font-montserrat font-bold text-white mb-2">
                      Phase {index + 1}
                    </h4>
                    <p className="text-gold-400 font-medium">
                      {phase.phase}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Gallery */}
      <section className="py-20 bg-gradient-to-b from-dark-900 to-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold mb-4">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-xl text-gray-300 font-lato max-w-3xl mx-auto">
              Explore our completed bungalow designs and constructions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="glass-effect border border-gold-400/20 rounded-2xl overflow-hidden hover:border-gold-400/40 transition-all duration-500"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-montserrat font-bold text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 font-lato">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <Contact />
      
      {/* Map Section */}
      <Map />
      
      {/* Footer */}
      <Footer />
    </div>
  )
}

export default BungalowDesign
