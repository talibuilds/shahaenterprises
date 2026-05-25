import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { Award, Users, Clock, Target } from 'lucide-react'

const About = () => {
  const sectionRef = useRef(null)
  const imageRef = useRef(null)
  const textRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(imageRef.current,
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          }
        }
      )

      gsap.fromTo(textRef.current,
        { x: 100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
          delay: 0.3
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

const stats = [
    { icon: Award, number: '5+', label: 'Years Experience' },
    { icon: Users, number: '100+', label: 'Happy Clients' },
    { icon: Clock, number: '100+', label: 'Projects Completed' },
    { icon: Target, number: '100%', label: 'Client Satisfaction' }
  ]

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-dark-900 to-dark-800 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23D4A017' fill-opacity='1'%3E%3Cpath d='M20 20c0 11.046-8.954 20-20 20v20h40V20H20zM0 20v20h20c-11.046 0-20-8.954-20-20z'/%3E%3C/g%3E%3C/svg%3E")`
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
            Meet Our <span className="text-gradient">Visionary</span>
          </h2>
          <p className="text-xl text-gray-300 font-lato max-w-3xl mx-auto">
            Leading architectural excellence with passion, precision, and uncompromising quality
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Section */}
          <motion.div
            ref={imageRef}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl">
              {/* Professional architect photo */}
              <div className="aspect-[4/5] rounded-2xl border border-gold-400/30 overflow-hidden">
                <img 
                  src="https://raw.githubusercontent.com/talibuilds/git-basic/main/MainPage.png"
                  alt="Arch Taufiq Contractor - Professional Portrait"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  style={{ 
                    objectPosition: 'center center',
                    imageRendering: 'crisp-edges',
                    filter: 'contrast(1.1) brightness(1.05)'
                  }}
                />
              </div>
              
              {/* Floating Award Badge */}
              <motion.div
                animate={{ 
                  rotate: [0, 5, -5, 0],
                  scale: [1, 1.05, 1]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -top-4 -right-4 glass-effect p-4 rounded-full border border-gold-400/30"
              >
                <Award className="text-gold-400" size={32} />
              </motion.div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            ref={textRef}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl md:text-4xl font-montserrat font-bold text-gradient mb-4">
                Arch Taufiq Contractor
              </h3>
              <p className="text-gold-400 font-medium mb-6 text-lg">
                Principal Architect & Founder
              </p>
              <div className="space-y-4 text-gray-300 font-lato leading-relaxed">
                <p>
                  With over 5 years of architectural excellence, Arch Taufiq Contractor has been 
                  transforming visions into breathtaking realities. His expertise spans luxury 
                  residential projects, commercial spaces, and bespoke interior designs.
                </p>
                <p>
                  Known for his meticulous attention to detail and innovative design philosophy, 
                  he combines traditional craftsmanship with contemporary aesthetics to create 
                  spaces that are not just beautiful, but functional and timeless.
                </p>
                <p>
                  Every project under his guidance reflects a commitment to excellence, 
                  sustainability, and client satisfaction that has earned Shaha Enterprises 
                  its prestigious reputation in the industry.
                </p>
              </div>
            </div>

            {/* Expertise Areas */}
            <div className="grid grid-cols-2 gap-4">
              {[
                'Luxury Interior Design',
                'Architectural Planning',
                'Commercial Spaces',
                'Residential Projects'
              ].map((expertise, index) => (
                <motion.div
                  key={expertise}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass-effect p-4 rounded-lg border border-gold-400/20 hover:border-gold-400/40 transition-all duration-300"
                >
                  <p className="text-white font-medium text-center">{expertise}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-20"
        >
          {stats.map(({ icon: Icon, number, label }, index) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="text-center glass-effect p-6 rounded-xl border border-gold-400/20 hover:border-gold-400/40 transition-all duration-300"
            >
              <Icon className="text-gold-400 mx-auto mb-4" size={32} />
              <div className="text-3xl md:text-4xl font-montserrat font-bold text-gradient mb-2">
                {number}
              </div>
              <div className="text-gray-300 font-lato">{label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default About
