import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { Lightbulb, Award, Clock, Palette } from 'lucide-react'

const WhyChooseUs = () => {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = sectionRef.current.querySelectorAll('.feature-card')
      
      gsap.fromTo(cards,
        { y: 80, opacity: 0 },
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

  const features = [
    {
      icon: Lightbulb,
      title: 'Innovative Concepts',
      description: 'We bring fresh, creative ideas to every project, incorporating the latest design trends and innovative solutions that set your space apart from the rest.',
      highlights: ['Cutting-edge Design', 'Creative Solutions', 'Trend-forward Approach']
    },
    {
      icon: Award,
      title: 'Premium Quality Materials',
      description: 'We source only the finest materials and work with trusted suppliers to ensure every element of your project meets our exacting standards of quality and durability.',
      highlights: ['Finest Materials', 'Trusted Suppliers', 'Quality Assurance']
    },
    {
      icon: Clock,
      title: 'On-Time Project Delivery',
      description: 'Punctuality and reliability are at the core of our service. We respect your time and ensure every project milestone is met according to the agreed schedule.',
      highlights: ['Timely Completion', 'Milestone Tracking', 'Reliable Service']
    },
    {
      icon: Palette,
      title: 'Tailor-Made Designs',
      description: 'Every project is unique, just like our clients. We create bespoke designs that reflect your personal style, preferences, and functional requirements.',
      highlights: ['Custom Solutions', 'Personal Style', 'Unique Designs']
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <section
      id="why-choose-us"
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-dark-800 to-dark-900 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-24 h-24 border border-gold-400 rounded-lg transform rotate-45"
            animate={{
              rotate: [45, 225, 45],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 8 + (i * 0.5),
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold mb-4">
            Why <span className="text-gradient">Choose Us</span>
          </h2>
          <p className="text-xl text-gray-300 font-lato max-w-3xl mx-auto">
            Discover what makes us the preferred choice for discerning clients who demand excellence in every detail
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="feature-card group"
            >
              <div className="glass-effect border border-gold-400/20 rounded-2xl p-8 h-full hover:border-gold-400/40 transition-all duration-500 relative overflow-hidden">
                {/* Background glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-gold-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ 
                      rotate: 360,
                      scale: 1.1
                    }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-gold-400/20 to-gold-600/10 rounded-2xl mb-8 group-hover:shadow-glow transition-all duration-300"
                  >
                    <feature.icon className="text-gold-400" size={40} />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-2xl md:text-3xl font-montserrat font-bold text-white mb-4 group-hover:text-gradient transition-all duration-300">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-300 font-lato leading-relaxed mb-6 text-lg">
                    {feature.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-3">
                    {feature.highlights.map((highlight, highlightIndex) => (
                      <motion.div
                        key={highlight}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: (index * 0.2) + (highlightIndex * 0.1) }}
                        className="flex items-center text-gold-400 font-medium"
                      >
                        <motion.div 
                          className="w-3 h-3 bg-gold-400 rounded-full mr-4 flex-shrink-0"
                          whileHover={{ scale: 1.3 }}
                        />
                        {highlight}
                      </motion.div>
                    ))}
                  </div>

                  {/* Number indicator */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: index * 0.3 }}
                    className="absolute top-6 right-6 text-6xl font-montserrat font-bold text-gold-400/10 group-hover:text-gold-400/20 transition-all duration-300"
                  >
                    {String(index + 1).padStart(2, '0')}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 text-center"
        >
          <div className="glass-effect border border-gold-400/20 rounded-2xl p-8 md:p-12">
            <h3 className="text-3xl font-montserrat font-bold text-gradient mb-8">
              Our Track Record Speaks
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: '5+', label: 'Years Experience' },
                { number: '100+', label: 'Happy Clients' },
                { number: '100+', label: 'Projects Delivered' },
                { number: '100%', label: 'Client Satisfaction' }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-montserrat font-bold text-gradient mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 font-lato">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-300 font-lato mb-8">
            Experience the difference that true craftsmanship makes
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
            Start Your Journey
            <Lightbulb size={20} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default WhyChooseUs
