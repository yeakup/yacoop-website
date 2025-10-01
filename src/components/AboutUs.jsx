import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

function AboutUs() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  // Transform values for header animation - same as Works
  const headerY = useTransform(scrollYProgress, [0, 0.25], ["0vh", "-30vh"])
  const headerScale = useTransform(scrollYProgress, [0, 0.25], [1.3, 0.6])
  const cardsOpacity = useTransform(scrollYProgress, [0.25, 0.35], [0, 1])
  const cardsY = useTransform(scrollYProgress, [0.25, 0.35], ["30px", "0px"])

  // After cards are visible, scroll everything together
  const sectionY = useTransform(scrollYProgress, [0.6, 1], ["0px", "-100vh"])

  // Services content data
  const servicesContent = [
    {
      id: 1,
      title: "Web Design",
      description: "Creating visually stunning and user-friendly interfaces that captivate your audience. We focus on modern aesthetics, intuitive navigation, and responsive design that works perfectly across all devices.",
      icon: "🎨",
      color: "bg-gradient-to-br from-gray-900 to-gray-700",
      shape: "rounded-2xl",
      accent: "border-l-4 border-white"
    },
    {
      id: 2,
      title: "Web Development",
      description: "Building robust, scalable, and high-performance websites using cutting-edge technologies. From frontend frameworks to backend solutions, we deliver code that's clean, efficient, and maintainable.",
      icon: "💻",
      color: "bg-gradient-to-br from-gray-800 to-black",
      shape: "rounded-3xl",
      accent: "border-t-4 border-gray-300"
    },
    {
      id: 3,
      title: "CMS",
      description: "Implementing powerful content management systems that give you full control over your website. Easy-to-use interfaces that allow you to update content, manage media, and maintain your site effortlessly.",
      icon: "⚙️",
      color: "bg-gradient-to-br from-gray-600 to-gray-800",
      shape: "rounded-2xl",
      accent: "border-r-4 border-gray-200"
    }
  ]

  return (
    <section 
      ref={containerRef}
      id="about" 
      className="bg-gray-50 relative"
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
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6">
              Our Services
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
              We specialize in creating comprehensive digital solutions that drive your business forward.
              From stunning designs to powerful development and seamless content management.
            </p>
          </motion.div>
        </div>

        {/* Content Grid */}
        <motion.div
          className="relative z-20 bg-gray-50"
          style={{
            opacity: cardsOpacity,
            y: cardsY,
            marginTop: "-70vh"
          }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10" style={{ minHeight: '100vh' }}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 h-full">
              {servicesContent.map((service, index) => (
                <motion.div
                  key={service.id}
                  className={`group relative ${service.color} ${service.shape} ${service.accent} overflow-hidden cursor-pointer p-8 flex flex-col justify-between shadow-2xl`}
                  initial={{ opacity: 0, y: 80, scale: 0.8 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.15,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                  viewport={{ once: true, margin: "-50px" }}
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  {/* Header with Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="text-4xl">{service.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-white flex-grow">
                    <h3 className="text-2xl font-semibold mb-4 text-white">{service.title}</h3>
                    <p className="text-base leading-relaxed text-gray-200 mb-6">
                      {service.description}
                    </p>
                  </div>

                  {/* Bottom section */}
                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <span className="text-sm text-gray-300 font-medium">Learn More</span>
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>

                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Decorative corner elements */}
                <div className="absolute top-8 right-8 w-8 h-8 bg-white/20 rounded-full animate-bounce" style={{ animationDelay: `${index * 200}ms` }}></div>
                </motion.div>
              ))}
            </div>

            {/* Stats Section */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="text-center">
                <div className="text-4xl font-bold text-gray-800 mb-2">10+</div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-gray-800 mb-2">5+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-gray-800 mb-2">100%</div>
                <div className="text-gray-600">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-gray-800 mb-2">24/7</div>
                <div className="text-gray-600">Support Available</div>
              </div>
            </motion.div>

          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default AboutUs
