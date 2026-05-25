import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { Link } from 'react-router-dom'
import { Palette, Building2, Home, ArrowRight } from 'lucide-react'

const Services = () => {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = sectionRef.current.querySelectorAll('.service-card')
      
      gsap.fromTo(cards,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          stagger: 0.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          }
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

const services = [
    {
      icon: Palette,
      title: 'Interior Designer',
      description: 'Transform your space with our luxury interior design services. From concept to completion, we create personalized environments that reflect your style and enhance your lifestyle.',
      features: [
        'Custom Furniture Design',
        'Color & Material Selection',
        'Space Planning & Layout',
        'Lighting Design'
      ],
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      link: '/interior-design'
    },
    {
      icon: Building2,
      title: 'Office Design',
      description: 'Create productive and inspiring work environments with our comprehensive office design solutions. Modern, functional spaces that boost productivity and employee satisfaction.',
      features: [
        'Ergonomic Workspace Design',
        'Brand Integration',
        'Meeting Room Solutions',
        'Technology Integration'
      ],
      image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      link: '/office-design'
    },
    {
      icon: Home,
      title: 'Bungalow Design',
      description: 'Design and build your dream bungalow with our expert architectural and construction services. From foundation to finishing, we handle every aspect of your project.',
      features: [
        'Architectural Planning',
        'Structural Engineering',
        'Landscape Design',
        'Project Management'
      ],
      image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      link: '/bungalow-design'
    }
  ]

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-dark-800 to-dark-900 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border border-gold-400 rounded-full" />
        <div className="absolute bottom-20 right-10 w-24 h-24 border border-gold-400 rounded-full" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-gold-400/30 rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold mb-4">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-xl text-gray-300 font-lato max-w-3xl mx-auto">
            Comprehensive design and construction solutions tailored to your unique vision and requirements
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              transition={{ delay: index * 0.2 }}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="service-card group"
            >
              <div className="glass-effect border border-gold-400/20 rounded-2xl overflow-hidden h-full hover:border-gold-400/40 transition-all duration-500">
                {/* Service Icon & Header */}
                <div className="p-8 pb-4">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center justify-center w-16 h-16 bg-gold-400/20 rounded-full mb-6 group-hover:bg-gold-400/30 transition-all duration-300"
                  >
                    <service.icon className="text-gold-400" size={32} />
                  </motion.div>
                  
                  <h3 className="text-2xl font-montserrat font-bold text-white mb-4 group-hover:text-gradient transition-all duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-300 font-lato leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Service Image */}
                <div className="px-8 mb-6">
                  <div className="aspect-video bg-gradient-to-br from-gold-400/10 to-gold-600/5 rounded-xl border border-gold-400/20 overflow-hidden group-hover:border-gold-400/30 transition-all duration-300">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>

                {/* Features List */}
                <div className="px-8 pb-8">
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <motion.li
                        key={feature}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: (index * 0.2) + (featureIndex * 0.1) }}
                        className="flex items-center text-gray-300 font-lato"
                      >
                        <div className="w-2 h-2 bg-gold-400 rounded-full mr-3 flex-shrink-0" />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>

                  {/* Call to Action */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: (index * 0.2) + 0.5 }}
                    className="mt-8"
                  >
                  <Link to={service.link}>
                    <motion.button
                      whileHover={{ 
                        scale: 1.05,
                        boxShadow: '0 0 20px rgba(212, 160, 23, 0.3)'
                      }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-gold-400/20 to-gold-600/20 border border-gold-400/30 rounded-lg text-gold-400 font-medium transition-all duration-300 hover:from-gold-400/30 hover:to-gold-600/30 hover:border-gold-400/50"
                    >
                      Learn More
                      <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
                    </motion.button>
                  </Link>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-300 font-lato mb-8">
            Ready to transform your space? Let's discuss your vision
          </p>
          <motion.a
            href="#contact"
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 0 30px rgba(212, 160, 23, 0.5)'
            }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 gold-gradient text-dark-900 px-8 py-4 rounded-full font-montserrat font-semibold text-lg transition-all duration-300"
          >
            Get Free Consultation
            <ArrowRight size={20} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Services
