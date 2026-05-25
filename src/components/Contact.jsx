import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { MapPin, Phone, Mail, Clock, Send, User, MessageSquare } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })
const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState('')
  
  const sectionRef = useRef(null)
  const formRef = useRef(null)
  const infoRef = useRef(null)
  const emailFormRef = useRef(null)

useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(formRef.current,
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

      gsap.fromTo(infoRef.current,
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

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('')
    
    // Add timeout to prevent infinite loading
    const timeoutId = setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('error')
      console.error('Request timed out after 30 seconds')
    }, 30000) // 30 second timeout
    
    try {
      // Get environment variables with fallbacks
      const backendUrl = import.meta.env.VITE_BACKEND_URL || '/api/contact'
      
      console.log('Sending contact request to:', backendUrl)
      
      const response = await fetch(backendUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service: formData.service,
          message: formData.message
        })
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message')
      }
      
      console.log('Message sent successfully:', data)
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      })
      
      setSubmitStatus('success')
      clearTimeout(timeoutId) // Clear timeout on success
      
    } catch (error) {
      clearTimeout(timeoutId) // Clear timeout on error
      console.error('Message submission failed:', error)
      setSubmitStatus('error')
    }
    
    setIsSubmitting(false)
  }

  const contactInfo = [
    {
      icon: User,
      label: 'Name',
      value: 'Arch Taufiq Contractor',
      subValue: 'Principal Architect & Founder'
    },
    {
      icon: Phone,
      label: 'Mobile',
      value: '+91 8874820930',
      subValue: 'Available 9 AM - 6 PM'
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'taufeeqk217@gmail.com',
      subValue: 'We respond within 24 hours'
    },
    {
      icon: MapPin,
      label: 'Address',
      value: 'Near Jupiter Hospital, Baner',
      subValue: 'Pune 411027'
    }
  ]

  const services = [
    'Interior Design',
    'Office Design', 
    'Bungalow Design',
    'Architectural Planning',
    'Consultation',
    'Other'
  ]

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-dark-800 to-dark-900 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23D4A017' fill-opacity='1'%3E%3Cpath d='M20 20c0 11.046-8.954 20-20 20v20h40V20H20z'/%3E%3C/g%3E%3C/svg%3E")`
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
            Get in <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-xl text-gray-300 font-lato max-w-3xl mx-auto">
            Ready to transform your space? Let's discuss your vision and bring your dream project to life
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            ref={formRef}
            className="glass-effect border border-gold-400/20 rounded-2xl p-8 hover:border-gold-400/30 transition-all duration-300"
          >
            <div className="mb-8">
              <h3 className="text-2xl font-montserrat font-bold text-white mb-2">
                Send us a Message
              </h3>
              <p className="text-gray-300 font-lato">
                Fill out the form below and we'll get back to you within 24 hours
              </p>
            </div>

<form ref={emailFormRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-gold-400 font-medium mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-dark-700 border border-gold-400/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-gold-400 transition-colors duration-300"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-gold-400 font-medium mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-dark-700 border border-gold-400/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-gold-400 transition-colors duration-300"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-gold-400 font-medium mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-dark-700 border border-gold-400/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-gold-400 transition-colors duration-300"
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-gold-400 font-medium mb-2">
                  Service Required *
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-dark-700 border border-gold-400/20 rounded-lg text-white focus:outline-none focus:border-gold-400 transition-colors duration-300"
                >
                  <option value="">Select a service</option>
                  {services.map((service) => (
                    <option key={service} value={service}>{service}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-gold-400 font-medium mb-2">
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-dark-700 border border-gold-400/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-gold-400 transition-colors duration-300 resize-vertical"
                  placeholder="Tell us about your project requirements..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full gold-gradient text-dark-900 py-4 rounded-lg font-montserrat font-semibold text-lg flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:shadow-glow"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-dark-900 border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
)}
              </motion.button>
              
              {/* Status Message */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 p-4 bg-green-500/20 border border-green-500/30 rounded-lg text-green-400 text-center"
                >
                  ✅ Thank you! Your message has been sent successfully. We'll get back to you within 24 hours.
                </motion.div>
              )}
              
              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 p-4 bg-red-500/20 border border-red-500/30 rounded-lg text-red-400 text-center"
                >
                  ❌ Sorry, there was an error sending your message. Please try again or contact us directly at <a href="mailto:taufeeqk217@gmail.com" className="text-red-300 underline">taufeeqk217@gmail.com</a> or call <a href="tel:+918874820930" className="text-red-300 underline">+91 8874820930</a>.
                </motion.div>
              )}
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            ref={infoRef}
            className="space-y-8"
          >
            {/* Contact Details */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass-effect border border-gold-400/20 rounded-xl p-6 hover:border-gold-400/30 transition-all duration-300"
                >
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-gold-400/20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <info.icon className="text-gold-400" size={24} />
                    </div>
                    <div>
                      <div className="text-gold-400 font-medium text-sm uppercase tracking-wide mb-1">
                        {info.label}
                      </div>
                      <div className="text-white font-montserrat font-semibold text-lg mb-1">
                        {info.value}
                      </div>
                      <div className="text-gray-300 font-lato text-sm">
                        {info.subValue}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Business Hours */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="glass-effect border border-gold-400/20 rounded-xl p-6 hover:border-gold-400/30 transition-all duration-300"
            >
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 bg-gold-400/20 rounded-lg flex items-center justify-center mr-4">
                  <Clock className="text-gold-400" size={24} />
                </div>
                <div>
                  <div className="text-gold-400 font-medium text-sm uppercase tracking-wide mb-1">
                    Business Hours
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-white">Monday - Friday</span>
                      <span className="text-gray-300">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white">Saturday</span>
                      <span className="text-gray-300">10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white">Sunday</span>
                      <span className="text-gray-300">Closed</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Google Maps Embed */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="glass-effect border border-gold-400/20 rounded-xl overflow-hidden hover:border-gold-400/30 transition-all duration-300"
            >
              <div className="aspect-video bg-gradient-to-br from-gold-400/10 to-gold-600/5 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="text-gold-400 mx-auto mb-4" size={48} />
                  <h4 className="text-white font-montserrat font-semibold text-lg mb-2">
                    Visit Our Office
                  </h4>
                  <p className="text-gray-300 font-lato">
                    Interactive map will be embedded here
                  </p>
                  <div className="mt-4">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-2 border border-gold-400/30 text-gold-400 rounded-full font-medium hover:border-gold-400 transition-all duration-300"
                    >
                      Get Directions
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
