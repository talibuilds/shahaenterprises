import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { gsap } from 'gsap'
import { Star, ChevronLeft, ChevronRight, Quote, User } from 'lucide-react'

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const sectionRef = useRef(null)
  const intervalRef = useRef(null)

  const testimonials = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      role: 'CEO, Tech Innovations',
      image: '/api/placeholder/100/100',
      rating: 5,
      text: 'Shaha Enterprises transformed our office space beyond our expectations. The attention to detail and quality of work was exceptional. Arch Taufiq\'s vision brought our ideas to life in ways we never imagined possible.',
      project: 'Corporate Office Redesign'
    },
    {
      id: 2,
      name: 'Priya Sharma',
      role: 'Homeowner',
      image: '/api/placeholder/100/100',
      rating: 5,
      text: 'Our dream home became a reality thanks to the incredible team at Shaha Enterprises. Every corner reflects luxury and functionality. The project was completed on time and within budget.',
      project: 'Luxury Villa Interior'
    },
    {
      id: 3,
      name: 'Dr. Amit Patel',
      role: 'Medical Professional',
      image: '/api/placeholder/100/100',
      rating: 5,
      text: 'The bungalow design exceeded all our expectations. The blend of modern architecture with traditional elements created a unique and beautiful home. Highly recommended for anyone seeking premium quality.',
      project: 'Custom Bungalow Design'
    },
    {
      id: 4,
      name: 'Sarah Johnson',
      role: 'Business Owner',
      image: '/api/placeholder/100/100',
      rating: 5,
      text: 'Professional, punctual, and absolutely brilliant. The interior design work for our restaurant created the perfect ambiance for our customers. The quality of materials used was top-notch.',
      project: 'Restaurant Interior'
    },
    {
      id: 5,
      name: 'Michael Chen',
      role: 'Property Developer',
      image: '/api/placeholder/100/100',
      rating: 5,
      text: 'Working with Shaha Enterprises has been a pleasure. Their innovative concepts and premium execution have made our properties stand out in the market. True professionals in every sense.',
      project: 'Residential Complex'
    }
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(sectionRef.current,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          }
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  useEffect(() => {
    startAutoplay()
    return () => stopAutoplay()
  }, [])

  const startAutoplay = () => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      )
    }, 6000)
  }

  const stopAutoplay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }
  }

  const goToSlide = (index) => {
    setCurrentIndex(index)
    stopAutoplay()
    setTimeout(startAutoplay, 3000)
  }

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)
    stopAutoplay()
    setTimeout(startAutoplay, 3000)
  }

  const goToNext = () => {
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)
    stopAutoplay()
    setTimeout(startAutoplay, 3000)
  }

  const slideVariants = {
    enter: {
      x: 300,
      opacity: 0,
    },
    center: {
      x: 0,
      opacity: 1,
    },
    exit: {
      x: -300,
      opacity: 0,
    }
  }

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-dark-900 to-dark-800 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-40 h-40 border border-gold-400 rounded-full" />
        <div className="absolute bottom-20 right-10 w-32 h-32 border border-gold-400 rounded-full" />
        <div className="absolute top-1/2 left-1/4 w-24 h-24 border border-gold-400 rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold mb-4">
            Client <span className="text-gradient">Testimonials</span>
          </h2>
          <p className="text-xl text-gray-300 font-lato max-w-3xl mx-auto">
            Hear what our satisfied clients have to say about their experience working with us
          </p>
        </motion.div>

        {/* Main Testimonial Display */}
        <div className="relative max-w-4xl mx-auto mb-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="glass-effect border border-gold-400/20 rounded-3xl p-8 md:p-12 relative overflow-hidden"
            >
              {/* Background Quote Icon */}
              <div className="absolute top-8 right-8 opacity-10">
                <Quote size={80} className="text-gold-400" />
              </div>

              {/* Content */}
              <div className="relative z-10">
                {/* Rating Stars */}
                <div className="flex justify-center mb-8">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <Star className="text-gold-400 fill-current" size={24} />
                    </motion.div>
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-xl md:text-2xl text-gray-100 font-lato leading-relaxed text-center mb-8 italic">
                  "{testimonials[currentIndex].text}"
                </blockquote>

                {/* Project Tag */}
                <div className="text-center mb-8">
                  <span className="inline-block px-4 py-2 bg-gold-400/10 text-gold-400 rounded-full text-sm font-medium border border-gold-400/20">
                    {testimonials[currentIndex].project}
                  </span>
                </div>

                {/* Client Info */}
                <div className="flex items-center justify-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-gold-400/20 to-gold-600/10 rounded-full flex items-center justify-center border border-gold-400/20 mr-4">
                    <User className="text-gold-400" size={24} />
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-montserrat font-semibold text-white">
                      {testimonials[currentIndex].name}
                    </div>
                    <div className="text-gold-400 font-lato">
                      {testimonials[currentIndex].role}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 glass-effect border border-gold-400/30 rounded-full flex items-center justify-center text-gold-400 hover:border-gold-400 transition-all duration-300"
          >
            <ChevronLeft size={24} />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={goToNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 glass-effect border border-gold-400/30 rounded-full flex items-center justify-center text-gold-400 hover:border-gold-400 transition-all duration-300"
          >
            <ChevronRight size={24} />
          </motion.button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center space-x-3 mb-12">
          {testimonials.map((_, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-gold-400 shadow-glow'
                  : 'bg-gold-400/30 hover:bg-gold-400/60'
              }`}
            />
          ))}
        </div>

        {/* All Testimonials Preview */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass-effect border border-gold-400/10 rounded-2xl p-6 hover:border-gold-400/30 transition-all duration-300"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-gold-400 fill-current" size={16} />
                ))}
              </div>
              
              <p className="text-gray-300 font-lato text-sm mb-4 line-clamp-3">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gradient-to-br from-gold-400/20 to-gold-600/10 rounded-full flex items-center justify-center border border-gold-400/20 mr-3">
                  <User className="text-gold-400" size={16} />
                </div>
                <div>
                  <div className="text-white font-medium text-sm">{testimonial.name}</div>
                  <div className="text-gold-400 text-xs">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials
