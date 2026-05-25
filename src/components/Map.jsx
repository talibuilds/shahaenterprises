import { motion } from 'framer-motion'
import { MapPin, Navigation, Phone, Mail } from 'lucide-react'

const Map = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-dark-800 to-dark-900 relative overflow-hidden">
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
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold mb-4">
            Visit Our <span className="text-gradient">Office</span>
          </h2>
          <p className="text-xl text-gray-300 font-lato max-w-3xl mx-auto">
            Located conveniently near Jupiter Hospital in Baner, Pune. Easy to reach and plenty of parking available.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Map Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="glass-effect border border-gold-400/20 rounded-2xl p-6 hover:border-gold-400/30 transition-all duration-300"
          >
            <h3 className="text-2xl font-montserrat font-bold text-white mb-6 flex items-center">
              <MapPin className="text-gold-400 mr-3" size={28} />
              Our Location
            </h3>
            
            {/* Embedded Google Map */}
            <div className="relative w-full h-80 rounded-xl overflow-hidden border border-gold-400/20">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.046234951308!2d73.7759594!3d18.5629818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf3b3b2d8b0f%3A0x6fcf0e0c5b8e8b8e!2sJupiter%20Hospital%2C%20Baner%2C%20Pune!5e0!3m2!1sen!2sin!4v1694234567890!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Jupiter Hospital, Baner, Pune Location"
              />
            </div>
            
            <div className="mt-6 p-4 bg-gold-400/10 rounded-lg border border-gold-400/20">
              <p className="text-gold-400 font-medium mb-2 flex items-center">
                <Navigation size={16} className="mr-2" />
                Easy Navigation
              </p>
              <p className="text-gray-300 text-sm">
                Our office is conveniently located near the main Jupiter Hospital entrance. 
                Use GPS navigation to "Jupiter Hospital, Baner" and we're right nearby.
              </p>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="glass-effect border border-gold-400/20 rounded-2xl p-8 hover:border-gold-400/30 transition-all duration-300">
              <h3 className="text-2xl font-montserrat font-bold text-white mb-6">
                Contact Details
              </h3>
              
              <div className="space-y-6">
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-start"
                >
                  <div className="w-12 h-12 bg-gold-400/20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <MapPin className="text-gold-400" size={24} />
                  </div>
                  <div>
                    <div className="text-gold-400 font-medium text-sm uppercase tracking-wide mb-1">
                      Address
                    </div>
                    <div className="text-white font-montserrat font-semibold text-lg mb-1">
                      Near Jupiter Hospital, Baner
                    </div>
                    <div className="text-gray-300 font-lato text-sm">
                      Pune 411027, Maharashtra, India
                    </div>
                  </div>
                </motion.div>

                <motion.a
                  href="tel:+918874820930"
                  whileHover={{ x: 5 }}
                  className="flex items-start group cursor-pointer"
                >
                  <div className="w-12 h-12 bg-gold-400/20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 group-hover:bg-gold-400/30 transition-colors duration-300">
                    <Phone className="text-gold-400" size={24} />
                  </div>
                  <div>
                    <div className="text-gold-400 font-medium text-sm uppercase tracking-wide mb-1">
                      Phone
                    </div>
                    <div className="text-white font-montserrat font-semibold text-lg mb-1 group-hover:text-gold-400 transition-colors duration-300">
                      +91 8874820930
                    </div>
                    <div className="text-gray-300 font-lato text-sm">
                      Available 9 AM - 6 PM
                    </div>
                  </div>
                </motion.a>

                <motion.a
                  href="mailto:taufeeqk217@gmail.com"
                  whileHover={{ x: 5 }}
                  className="flex items-start group cursor-pointer"
                >
                  <div className="w-12 h-12 bg-gold-400/20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 group-hover:bg-gold-400/30 transition-colors duration-300">
                    <Mail className="text-gold-400" size={24} />
                  </div>
                  <div>
                    <div className="text-gold-400 font-medium text-sm uppercase tracking-wide mb-1">
                      Email
                    </div>
                    <div className="text-white font-montserrat font-semibold text-lg mb-1 group-hover:text-gold-400 transition-colors duration-300">
                      taufeeqk217@gmail.com
                    </div>
                    <div className="text-gray-300 font-lato text-sm">
                      We respond within 24 hours
                    </div>
                  </div>
                </motion.a>
              </div>
            </div>

            {/* Directions */}
            <div className="glass-effect border border-gold-400/20 rounded-2xl p-8 hover:border-gold-400/30 transition-all duration-300">
              <h4 className="text-xl font-montserrat font-bold text-white mb-4">
                Directions
              </h4>
              <ul className="space-y-3 text-gray-300 font-lato">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-gold-400 rounded-full mr-3 mt-2 flex-shrink-0" />
                  From Pune Station: Take the Pune-Mumbai Highway towards Baner (30 mins)
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-gold-400 rounded-full mr-3 mt-2 flex-shrink-0" />
                  From Airport: Direct route via NH48 to Baner (45 mins)
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-gold-400 rounded-full mr-3 mt-2 flex-shrink-0" />
                  Public Transport: Local buses available to Jupiter Hospital
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-gold-400 rounded-full mr-3 mt-2 flex-shrink-0" />
                  Parking: Ample parking space available on-site
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Map
