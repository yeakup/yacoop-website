import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useState } from 'react'
import Footer from './Footer'

function Contact() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  // Transform values for header animation - same as Works/About
  const headerY = useTransform(scrollYProgress, [0, 0.25], ["0vh", "-30vh"])
  const headerScale = useTransform(scrollYProgress, [0, 0.25], [1.3, 0.6])
  const contentY = useTransform(scrollYProgress, [0.25, 0.35], ["100vh", "0px"])

  // After content is visible, scroll everything together
  const sectionY = useTransform(scrollYProgress, [0.6, 1], ["0px", "-100vh"])

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  // Error state
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      })
    }
  }

  const validateForm = () => {
    const newErrors = {}

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name'
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters'
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Please tell us about your project'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Please provide more details (at least 10 characters)'
    }

    return newErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const newErrors = validateForm()

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setFormData({
      name: '',
      email: '',
      message: ''
    })
    setErrors({
      name: '',
      email: '',
      message: ''
    })
  }

  return (
    <section 
      ref={containerRef}
      id="contact" 
      className="bg-black relative"
      style={{ minHeight: '150vh' }}
    >
      <motion.div
        className="sticky top-0 w-full"
        style={{ y: sectionY }}
      >
        {/* Header - starts centered, moves to top */}
        <div className="h-screen flex items-center justify-center overflow-hidden">
          <motion.div 
            className="text-center z-10"
            style={{ 
              y: headerY, 
              scale: headerScale
            }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 text-white">
              Contact Us
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed px-4">
              Let's start a conversation about your next project. 
              We're here to help you create something amazing.
            </p>
          </motion.div>
        </div>

        {/* Contact Content with rounded top */}
        <motion.div
          className="relative z-20 bg-white rounded-t-[60px] md:rounded-t-[80px]"
          style={{
            y: contentY,
            marginTop: "-70vh"
          }}
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16" style={{ minHeight: '100vh' }}>
            
            {/* Contact Form */}
            <motion.div
              className="max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-center mb-12">
                <p className="text-lg text-gray-600">
                  Tell us about your project and we'll try to get back to you within 24 hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:border-transparent transition-all duration-300 text-gray-900 placeholder-gray-500 ${
                      errors.name
                        ? 'border-red-500 focus:ring-red-500'
                        : 'border-gray-300 focus:ring-gray-900'
                    }`}
                    placeholder="Enter your full name"
                  />
                  {errors.name && (
                    <p className="mt-2 text-sm text-red-600">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:border-transparent transition-all duration-300 text-gray-900 placeholder-gray-500 ${
                      errors.email
                        ? 'border-red-500 focus:ring-red-500'
                        : 'border-gray-300 focus:ring-gray-900'
                    }`}
                    placeholder="your.email@example.com"
                  />
                  {errors.email && (
                    <p className="mt-2 text-sm text-red-600">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Project Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:border-transparent transition-all duration-300 text-gray-900 placeholder-gray-500 resize-none ${
                      errors.message
                        ? 'border-red-500 focus:ring-red-500'
                        : 'border-gray-300 focus:ring-gray-900'
                    }`}
                    placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
                  />
                  {errors.message && (
                    <p className="mt-2 text-sm text-red-600">{errors.message}</p>
                  )}
                </div>

                <div className="text-center pt-4">
                  <button
                    type="submit"
                    className="bg-black text-white px-10 py-5 rounded-full font-semibold text-xl hover:bg-gray-900 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </motion.div>

            {/* Footer */}
            <Footer />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Contact
