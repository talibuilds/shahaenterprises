import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { gsap } from 'gsap'
import { ExternalLink, ZoomIn, Filter } from 'lucide-react'

const Portfolio = () => {
  const [filter, setFilter] = useState('all')
  const [selectedProject, setSelectedProject] = useState(null)
  const sectionRef = useRef(null)
  const gridRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = gridRef.current?.querySelectorAll('.portfolio-item')
      
      if (items) {
        gsap.fromTo(items,
          { y: 100, opacity: 0, scale: 0.8 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            ease: 'power3.out',
            stagger: 0.1,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 80%',
            }
          }
        )
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [filter])

  const projects = [
    {
      id: 1,
      title: 'Luxury Villa Interior',
      category: 'interior',
      description: 'Complete interior transformation of a modern villa with contemporary aesthetics and luxury finishes.',
image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
      tags: ['Interior Design', 'Luxury', 'Modern']
    },
    {
      id: 2,
      title: 'Corporate Office Space',
      category: 'office',
description: 'Modern corporate office design focusing on productivity and employee wellbeing.',
      image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
      tags: ['Office Design', 'Corporate', 'Modern']
    },
    {
      id: 3,
      title: 'Custom Bungalow',
      category: 'bungalow',
      description: 'Architectural design and construction of a custom bungalow with traditional and modern elements.',
      image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
      tags: ['Architecture', 'Residential', 'Custom']
    },
    {
      id: 4,
      title: 'Penthouse Interior',
      category: 'interior',
      description: 'Sophisticated penthouse interior design with panoramic city views and premium materials.',
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
      tags: ['Interior Design', 'Penthouse', 'Luxury']
    },
    {
      id: 5,
      title: 'Tech Startup Office',
      category: 'office',
description: 'Creative workspace design for a tech startup with collaborative areas and modern amenities.',
      image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
      tags: ['Office Design', 'Startup', 'Creative']
    },
    {
      id: 6,
      title: 'Heritage Bungalow',
      category: 'bungalow',
      description: 'Restoration and modernization of a heritage bungalow preserving its architectural character.',
      image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
      tags: ['Heritage', 'Restoration', 'Architecture']
    }
  ]

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'interior', label: 'Interior Design' },
    { id: 'office', label: 'Office Design' },
    { id: 'bungalow', label: 'Bungalow Design' }
  ]

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section
      id="portfolio"
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-dark-900 to-dark-800 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4A017' fill-opacity='0.4'%3E%3Cpath d='M36 30c0-6.627-5.373-12-12-12s-12 5.373-12 12 5.373 12 12 12 12-5.373 12-12zm-12-6a6 6 0 1 1 0 12 6 6 0 0 1 0-12z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold mb-4">
            Our <span className="text-gradient">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-300 font-lato max-w-3xl mx-auto">
            Discover our latest projects showcasing innovative design and exceptional craftsmanship
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                filter === category.id
                  ? 'gold-gradient text-dark-900 shadow-glow'
                  : 'glass-effect text-white border border-gold-400/20 hover:border-gold-400/40'
              }`}
            >
              <Filter size={18} />
              {category.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div
          ref={gridRef}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -10 }}
                className="portfolio-item group cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="glass-effect border border-gold-400/20 rounded-2xl overflow-hidden hover:border-gold-400/40 transition-all duration-500">
                  {/* Project Image */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    
                    {/* Overlay */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center"
                    >
                      <div className="flex gap-4">
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="w-12 h-12 bg-gold-400 rounded-full flex items-center justify-center text-dark-900 hover:shadow-glow transition-all duration-300"
                        >
                          <ZoomIn size={20} />
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="w-12 h-12 glass-effect border border-gold-400/30 rounded-full flex items-center justify-center text-gold-400 hover:border-gold-400 transition-all duration-300"
                        >
                          <ExternalLink size={20} />
                        </motion.button>
                      </div>
                    </motion.div>
                  </div>

                  {/* Project Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-montserrat font-bold text-white mb-2 group-hover:text-gradient transition-all duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 font-lato text-sm mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-gold-400/10 text-gold-400 rounded-full text-xs font-medium border border-gold-400/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-300 font-lato mb-8">
            Like what you see? Let's create something amazing together
          </p>
          <motion.a
            href="#contact"
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 0 30px rgba(212, 160, 23, 0.5)'
            }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 border-2 border-gold-400 text-gold-400 px-8 py-4 rounded-full font-montserrat font-semibold text-lg transition-all duration-300 hover:bg-gold-400 hover:text-dark-900"
          >
            Start Your Project
            <ExternalLink size={20} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Portfolio
