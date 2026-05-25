import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ArrowLeft, Palette, Home, Star, Check, Clock, Award } from 'lucide-react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Contact from '../components/Contact'
import Map from '../components/Map'
import Footer from '../components/Footer'

const InteriorDesign = () => {
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
      icon: Palette,
      title: 'Custom Color Schemes',
      description: 'Carefully curated color palettes that reflect your personality and enhance the mood of each space.'
    },
    {
      icon: Home,
      title: 'Space Optimization',
      description: 'Maximize functionality and flow while maintaining aesthetic appeal in every room.'
    },
    {
      icon: Star,
      title: 'Premium Materials',
      description: 'Only the finest materials and finishes to ensure durability and luxury in every detail.'
    },
    {
      icon: Award,
      title: 'Award-Winning Designs',
      description: 'Recognized designs that blend contemporary trends with timeless elegance.'
    }
  ]

  const projects = [
    {
      title: 'Luxury Living Room',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Modern luxury living room with custom furniture and elegant lighting design.'
    },
    {
      title: 'Master Bedroom Suite',
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Sophisticated bedroom design with premium fabrics and built-in storage solutions.'
    },
    {
      title: 'Designer Kitchen',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Contemporary kitchen with high-end appliances and custom cabinetry.'
    }
  ]

  const process = [
    { step: '01', title: 'Consultation', description: 'Initial meeting to understand your vision and requirements' },
    { step: '02', title: 'Design Concept', description: '3D renderings and detailed design proposals' },
    { step: '03', title: 'Material Selection', description: 'Curated selection of premium materials and finishes' },
    { step: '04', title: 'Implementation', description: 'Professional execution with quality craftsmanship' },
    { step: '05', title: 'Final Touches', description: 'Styling and finishing touches to perfect your space' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-dark-900 to-dark-800">
      <Navbar />
      
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
            alt="Interior Design"
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
            <span className="text-white">Interior</span>
            <br />
            <span className="text-gradient">Design</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto font-lato leading-relaxed">
            Transform your living spaces into luxurious sanctuaries that reflect your style and enhance your lifestyle.
          </p>
          
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gold-gradient text-dark-900 px-8 py-4 rounded-full font-montserrat font-semibold text-lg transition-all duration-300 hover:shadow-glow"
          >
            Start Your Project
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
              Our <span className="text-gradient">Expertise</span>
            </h2>
            <p className="text-xl text-gray-300 font-lato max-w-3xl mx-auto">
              Comprehensive interior design services tailored to create spaces that inspire and delight
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
              Discover our latest interior design transformations
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

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-b from-dark-800 to-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold mb-4">
              Our <span className="text-gradient">Process</span>
            </h2>
            <p className="text-xl text-gray-300 font-lato max-w-3xl mx-auto">
              A systematic approach to creating your dream interior
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {process.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full flex items-center justify-center mx-auto mb-4 text-dark-900 font-montserrat font-bold text-xl">
                  {item.step}
                </div>
                <h3 className="text-lg font-montserrat font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-300 font-lato text-sm">
                  {item.description}
                </p>
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

export default InteriorDesign
