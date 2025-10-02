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
  const headerScale = useTransform(scrollYProgress, [0, 0.25], [1.5, 0.6])
  const cardsOpacity = useTransform(scrollYProgress, [0.25, 0.35], [0, 1])
  const cardsY = useTransform(scrollYProgress, [0.25, 0.35], ["30px", "0px"])

  // After cards are visible, scroll everything together
  const sectionY = useTransform(scrollYProgress, [0.6, 1], ["0px", "-100vh"])

  // Services content data
  const servicesContent = [
    {
      id: 1,
      title: "Web Design",
      description: "Bringing your ideas to life with stunning, interactive designs. Our focus is on eye-catching visuals, smooth user journeys, and layouts that make your website shine on all devices.",
      icon: "design",
      color: "bg-gradient-to-br from-gray-600 to-gray-500",
      shape: "rounded-tr-3xl rounded-br-3xl rounded-bl-3xl",
      accent: "border-l-4 border-white"
    },
    {
      id: 2,
      title: "Web Development",
      description: "Building robust, scalable, and high-performance websites using cutting-edge technologies. From frontend frameworks to backend solutions, we deliver code that's clean, efficient, and maintainable.",
      icon: "code",
      color: "bg-gradient-to-br from-gray-800 to-gray-700",
      shape: "rounded-tr-3xl rounded-br-3xl rounded-bl-3xl",
      accent: "border-l-4 border-white"
    },
    {
      id: 3,
      title: "CMS",
      description: "Implementing powerful content management systems that give you full control over your website. Easy-to-use interfaces that allow you to update content, manage media, and maintain your site effortlessly.",
      icon: "settings",
      color: "bg-gradient-to-br from-gray-900 to-black",
      shape: "rounded-tr-3xl rounded-br-3xl rounded-bl-3xl",
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
            <p className="text-2xl md:text-[26.67px] text-gray-600 max-w-none md:max-w-5xl mx-auto leading-relaxed px-2 md:px-4">
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
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      {service.icon === 'design' && (
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                        </svg>
                      )}
                      {service.icon === 'code' && (
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                      )}
                      {service.icon === 'settings' && (
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-white flex-grow">
                    <h3 className="text-2xl font-semibold mb-4 text-white">{service.title}</h3>
                    <p className="text-base leading-relaxed text-gray-200 mb-6">
                      {service.description}
                    </p>
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

