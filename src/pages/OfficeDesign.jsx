import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ArrowLeft, Building2, Users, Lightbulb, TrendingUp } from 'lucide-react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Contact from '../components/Contact'
import Map from '../components/Map'
import Footer from '../components/Footer'

const OfficeDesign = () => {
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
      icon: Building2,
      title: 'Space Planning',
      description: 'Efficient layout design that maximizes productivity and promotes collaboration among teams.'
    },
    {
      icon: Users,
      title: 'Employee Wellbeing',
      description: 'Ergonomic furniture and healthy work environments that boost morale and productivity.'
    },
    {
      icon: Lightbulb,
      title: 'Smart Technology',
      description: 'Integration of modern technology and automation for seamless business operations.'
    },
    {
      icon: TrendingUp,
      title: 'Brand Integration',
      description: 'Designs that reflect your company culture and strengthen your brand identity.'
    }
  ]

  const projects = [
    {
      title: 'Modern Corporate Office',
      image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Contemporary corporate office with open workspace and private meeting areas.'
    },
    {
      title: 'Tech Startup Workspace',
      image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Creative and flexible workspace designed for innovation and collaboration.'
    },
    {
      title: 'Executive Conference Room',
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Professional conference room with state-of-the-art AV equipment and elegant finishes.'
    }
  ]

  const services = [
    'Space Planning & Layout Design',
    'Workstation & Furniture Selection',
    'Meeting Room Design',
    'Reception Area Design',
    'Break Room & Kitchen Areas',
    'Technology Integration',
    'Lighting & Acoustics',
    'Branding & Color Schemes',
    'Storage Solutions',
    'Wellness & Ergonomics'
  ]

  const benefits = [
    { title: 'Increased Productivity', description: 'Well-designed spaces boost employee efficiency by 20-25%' },
    { title: 'Enhanced Collaboration', description: 'Strategic layouts improve team communication and workflow' },
    { title: 'Better Employee Retention', description: 'Attractive workspaces reduce turnover and attract top talent' },
    { title: 'Professional Image', description: 'Impressive office design enhances your company\'s reputation' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-dark-900 to-dark-800">
      <Navbar />
      
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
            alt="Office Design"
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
            <span className="text-white">Office</span>
            <br />
            <span className="text-gradient">Design</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto font-lato leading-relaxed">
            Create inspiring work environments that boost productivity, enhance collaboration, and reflect your company's values.
          </p>
          
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gold-gradient text-dark-900 px-8 py-4 rounded-full font-montserrat font-semibold text-lg transition-all duration-300 hover:shadow-glow"
          >
            Transform Your Workspace
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
              Our <span className="text-gradient">Approach</span>
            </h2>
            <p className="text-xl text-gray-300 font-lato max-w-3xl mx-auto">
              Strategic office design solutions that align with your business objectives
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

      {/* Services List */}
      <section className="py-20 bg-gradient-to-b from-dark-900 to-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-montserrat font-bold mb-6">
                Comprehensive <span className="text-gradient">Services</span>
              </h2>
              <p className="text-xl text-gray-300 font-lato mb-8">
                From initial planning to final implementation, we handle every aspect of your office transformation.
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                {services.map((service, index) => (
                  <motion.div
                    key={service}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center text-gray-300 font-lato"
                  >
                    <div className="w-2 h-2 bg-gold-400 rounded-full mr-3 flex-shrink-0" />
                    {service}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="glass-effect border border-gold-400/20 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-montserrat font-bold text-white mb-6">
                Why Choose Professional Office Design?
              </h3>
              
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="border-l-2 border-gold-400 pl-4"
                  >
                    <h4 className="text-lg font-montserrat font-semibold text-gold-400 mb-2">
                      {benefit.title}
                    </h4>
                    <p className="text-gray-300 font-lato">
                      {benefit.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Gallery */}
      <section className="py-20 bg-gradient-to-b from-dark-800 to-dark-900">
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
              Explore our successful office transformations across various industries
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

export default OfficeDesign
