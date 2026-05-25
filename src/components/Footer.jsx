import { motion } from 'framer-motion'
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Heart
} from 'lucide-react'

const Footer = () => {
  // Smooth scroll function
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }
  const quickLinks = [
    { name: 'Home', sectionId: 'home' },
    { name: 'About', sectionId: 'about' },
    { name: 'Services', sectionId: 'services' },
    { name: 'Portfolio', sectionId: 'portfolio' },
    { name: 'Why Choose Us', sectionId: 'why-choose-us' },
    { name: 'Testimonials', sectionId: 'testimonials' },
    { name: 'Contact', sectionId: 'contact' }
  ]

  const services = [
    { name: 'Interior Design', sectionId: 'services' },
    { name: 'Office Design', sectionId: 'services' },
    { name: 'Bungalow Design', sectionId: 'services' },
    { name: 'Architectural Planning', sectionId: 'services' },
    { name: 'Project Consultation', sectionId: 'contact' },
    { name: 'Design Services', sectionId: 'services' }
  ]

  const socialLinks = [
    {
      name: 'Facebook',
      icon: Facebook,
      href: 'https://www.facebook.com/SHAHAINTERIOR#',
      color: '#1877F2'
    },
    {
      name: 'Instagram',
      icon: Instagram,
      href: 'https://www.instagram.com/shaha_interior',
      color: '#E4405F'
    },
    {
      name: 'YouTube',
      icon: Youtube,
      href: 'https://www.youtube.com/@MTKVLOGS490',
      color: '#FF0000'
    }
  ]


  const contactInfo = [
    {
      icon: Phone,
      text: '+91 8874820930',
      href: 'tel:+918874820930'
    },
    {
      icon: Mail,
      text: 'taufeeqk217@gmail.com',
      href: 'mailto:taufeeqk217@gmail.com'
    },
    {
      icon: MapPin,
      text: 'Near Jupiter Hospital, Baner, Pune',
      href: '/#contact'
    }
  ]

  return (
    <footer className="bg-gradient-to-b from-dark-900 to-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4A017' fill-opacity='0.4'%3E%3Cpath d='M30 30c0-16.569-13.431-30-30-30v60c16.569 0 30-13.431 30-30zm15-15c0-8.284-6.716-15-15-15v30c8.284 0 15-6.716 15-15z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-1"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="mb-6"
              >
                <h3 className="text-3xl font-montserrat font-bold text-gradient">
                  Shaha Enterprises
                </h3>
              </motion.div>

              <p className="text-gray-300 font-lato leading-relaxed mb-6">
                Transforming spaces into luxury experiences with premium interior design,
                architectural planning, and construction services. Your vision, our expertise.
              </p>

              <div className="space-y-3">
                {contactInfo.map((contact, index) => (
                  <motion.a
                    key={contact.text}
                    href={contact.href}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ x: 5 }}
                    className="flex items-center text-gray-300 hover:text-gold-400 transition-colors duration-300"
                  >
                    <contact.icon size={16} className="mr-3 text-gold-400" />
                    <span className="text-sm">{contact.text}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h4 className="text-xl font-montserrat font-bold text-white mb-6">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                  >
                    <motion.button
                      onClick={() => scrollToSection(link.sectionId)}
                      whileHover={{ x: 5 }}
                      className="text-gray-300 hover:text-gold-400 transition-all duration-300 flex items-center group text-sm cursor-pointer bg-transparent border-none p-0"
                    >
                      <ArrowRight
                        size={14}
                        className="mr-2 text-gold-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      />
                      {link.name}
                    </motion.button>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="text-xl font-montserrat font-bold text-white mb-6">
                Our Services
              </h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <motion.li
                    key={service.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                  >
                    <motion.button
                      onClick={() => scrollToSection(service.sectionId)}
                      whileHover={{ x: 5 }}
                      className="text-gray-300 hover:text-gold-400 transition-all duration-300 flex items-center group text-sm cursor-pointer bg-transparent border-none p-0"
                    >
                      <ArrowRight
                        size={14}
                        className="mr-2 text-gold-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      />
                      {service.name}
                    </motion.button>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Newsletter & Social */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h4 className="text-xl font-montserrat font-bold text-white mb-6">
                Stay Connected
              </h4>

              <p className="text-gray-300 text-sm mb-6 font-lato">
                Follow us on social media for the latest updates and design inspiration.
              </p>

              {/* Social Media Icons */}
              <div className="flex space-x-4 mb-8">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{
                      scale: 1.2,
                      boxShadow: `0 0 20px ${social.color}40`
                    }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 glass-effect border border-gold-400/20 rounded-full flex items-center justify-center text-gray-300 hover:text-gold-400 hover:border-gold-400/40 transition-all duration-300"
                  >
                    <social.icon size={18} />
                  </motion.a>
                ))}
              </div>

              {/* Newsletter Signup */}
              <div className="space-y-4">
                <h5 className="text-lg font-montserrat font-semibold text-white">
                  Newsletter
                </h5>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="flex-1 px-4 py-2 bg-dark-800 border border-gold-400/20 rounded-l-lg text-white placeholder-gray-400 focus:outline-none focus:border-gold-400 transition-colors duration-300 text-sm"
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 gold-gradient text-dark-900 rounded-r-lg font-medium transition-all duration-300 hover:shadow-glow"
                  >
                    <ArrowRight size={18} />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-gold-400/20 py-8"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex items-center space-x-2 text-gray-300 text-sm font-lato">
                <span>© 2025 Shaha Enterprises. All rights reserved.</span>
              </div>

              <div className="flex items-center space-x-2 text-gray-300 text-sm font-lato">
                <span>Made with</span>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  <Heart size={16} className="text-red-500 fill-current" />
                </motion.div>
                <span>by Shaha Enterprises</span>
              </div>

              <div className="flex space-x-6 text-sm">
                <motion.a
                  href="#"
                  whileHover={{ color: '#D4A017' }}
                  className="text-gray-300 hover:text-gold-400 transition-colors duration-300"
                >
                  Privacy Policy
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ color: '#D4A017' }}
                  className="text-gray-300 hover:text-gold-400 transition-colors duration-300"
                >
                  Terms of Service
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
