import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ArrowRight, Play } from 'lucide-react'

const Hero = () => {
  const heroRef = useRef(null)
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const buttonsRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax background effect
      gsap.to(heroRef.current, {
        backgroundPosition: '50% 100%',
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      })

      // Title animation
      gsap.fromTo(titleRef.current,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: 'power3.out',
          delay: 0.5
        }
      )

      // Subtitle animation
      gsap.fromTo(subtitleRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          delay: 0.8
        }
      )

      // Buttons animation
      gsap.fromTo(buttonsRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          delay: 1.1
        }
      )
    }, heroRef)

    return () => ctx.revert()
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  }

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: `linear-gradient(135deg, rgba(11, 11, 14, 0.6), rgba(17, 17, 20, 0.7)), url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        imageRendering: 'crisp-edges'
      }}
    >
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gold-400 rounded-full opacity-20"
            animate={{
              x: [0, Math.random() * 200 - 100],
              y: [0, Math.random() * 200 - 100],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear"
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
      >
        <motion.h1
          ref={titleRef}
          variants={itemVariants}
          className="text-5xl md:text-7xl lg:text-8xl font-montserrat font-bold mb-6"
        >
          <span className="text-white">Transforming</span>
          <br />
          <span className="text-gradient">Spaces</span>
          <br />
          <span className="text-white">into</span>
          <br />
          <span className="text-gradient">Luxury Experiences</span>
        </motion.h1>

        <motion.p
          ref={subtitleRef}
          variants={itemVariants}
          className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto font-lato leading-relaxed"
        >
          Experience premium interior design and architectural excellence with Shaha Enterprises. 
          Where innovation meets luxury in every project we create.
        </motion.p>

        <motion.div
          ref={buttonsRef}
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <motion.button
            onClick={() => {
              const portfolioSection = document.getElementById('portfolio')
              if (portfolioSection) {
                portfolioSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
              }
            }}
            whileHover={{ 
              scale: 1.05, 
              boxShadow: '0 0 30px rgba(212, 160, 23, 0.5)' 
            }}
            whileTap={{ scale: 0.95 }}
            className="gold-gradient text-dark-900 px-8 py-4 rounded-full font-montserrat font-semibold text-lg flex items-center gap-3 transition-all duration-300 hover:shadow-glow cursor-pointer"
          >
            Explore Our Work
            <ArrowRight size={20} />
          </motion.button>

          <motion.button
            onClick={() => {
              const contactSection = document.getElementById('contact')
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
              }
            }}
            whileHover={{ 
              scale: 1.05,
              borderColor: 'rgba(212, 160, 23, 1)'
            }}
            whileTap={{ scale: 0.95 }}
            className="border-2 border-gold-400 text-gold-400 px-8 py-4 rounded-full font-montserrat font-semibold text-lg flex items-center gap-3 transition-all duration-300 hover:bg-gold-400 hover:text-dark-900 cursor-pointer"
          >
            <Play size={20} />
            Get Consultation
          </motion.button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-gold-400 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-gold-400 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
