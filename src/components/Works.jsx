import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useState } from 'react'

function Works() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  // Carousel state
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isInitialLoad, setIsInitialLoad] = useState(true)
  const itemsPerPage = 3

  // Transform values for header animation
  const headerY = useTransform(scrollYProgress, [0, 0.25], ["0vh", "-30vh"])
  const headerScale = useTransform(scrollYProgress, [0, 0.25], [1.5, 0.6]) // Bigger final size
  const cardsOpacity = useTransform(scrollYProgress, [0.25, 0.35], [0, 1])
  const cardsY = useTransform(scrollYProgress, [0.25, 0.35], ["30px", "0px"])

  // After cards are visible, scroll everything together
  const sectionY = useTransform(scrollYProgress, [0.6, 1], ["0px", "-100vh"])
  // Sample work data with placeholder content
  const works = [
    {
      id: 1,
      title: "E-Commerce Platform",
      subtitle: "Modern online shopping experience",
      tags: ["Web Design", "Web Development", "CMS"],
      color: "bg-gradient-to-br from-gray-800 to-gray-600",
      shape: "rounded-tr-3xl rounded-br-3xl rounded-bl-3xl"
    },
    {
      id: 2,
      title: "La-Risa Personal Website",
      subtitle: "Professional business presence",
      tags: ["Web Design", "Web Development"],
      color: "bg-gradient-to-br from-gray-800 to-gray-600",
      shape: "rounded-tr-3xl rounded-br-3xl rounded-bl-3xl"
    },
    {
      id: 3,
      title: "E-shop Platform",
      subtitle: "Intuitive user experience",
      tags: ["Web Design", "Web Development", "CMS"],
      color: "bg-gradient-to-br from-gray-800 to-gray-600",
      shape: "rounded-tr-3xl rounded-br-3xl rounded-bl-3xl"
    },
    {
      id: 4,
      title: "Corporate Dashboard",
      subtitle: "Data visualization and analytics",
      tags: ["Web Development", "UI/UX", "Analytics"],
      color: "bg-gradient-to-br from-gray-800 to-gray-600",
      shape: "rounded-tr-3xl rounded-br-3xl rounded-bl-3xl"
    },
    {
      id: 5,
      title: "Mobile App Design",
      subtitle: "Cross-platform mobile solution",
      tags: ["Mobile Design", "UI/UX", "Prototyping"],
      color: "bg-gradient-to-br from-gray-800 to-gray-600",
      shape: "rounded-tr-3xl rounded-br-3xl rounded-bl-3xl"
    },
    {
      id: 6,
      title: "Restaurant Website",
      subtitle: "Online ordering and reservations",
      tags: ["Web Design", "Web Development", "E-commerce"],
      color: "bg-gradient-to-br from-gray-800 to-gray-600",
      shape: "rounded-tr-3xl rounded-br-3xl rounded-bl-3xl"
    },
  ]

  // Carousel navigation functions
  const maxIndex = Math.max(0, works.length - itemsPerPage)
  const canGoLeft = currentIndex > 0
  const canGoRight = currentIndex < maxIndex

  const goLeft = () => {
    setCurrentIndex(prev => Math.max(0, prev - 1))
    setIsInitialLoad(false)
  }

  const goRight = () => {
    setCurrentIndex(prev => Math.min(maxIndex, prev + 1))
    setIsInitialLoad(false)
  }

  // Get visible works
  const visibleWorks = works.slice(currentIndex, currentIndex + itemsPerPage)

  return (
    <section
      ref={containerRef}
      id="work"
      className="bg-white relative"
      style={{ minHeight: '150vh' }} // Reduced height to eliminate empty space
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
              Our Work
            </h2>
            <p className="text-2xl md:text-[26.67px] text-gray-600 max-w-5xl mx-auto leading-relaxed px-4">
              Discover our portfolio of innovative digital solutions. From stunning websites to powerful applications,
              we craft experiences that drive results and exceed expectations.
            </p>
          </motion.div>
        </div>

        {/* Work Items Grid */}
        <motion.div
          className="relative z-20 bg-white"
          style={{
            opacity: cardsOpacity,
            y: cardsY,
            marginTop: "-70vh" // Pull cards way up to eliminate empty space
          }}
        >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10" style={{ minHeight: '100vh' }}>
          <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 h-full">
            {/* Navigation Arrows */}
            {canGoLeft && (
              <button
                onClick={goLeft}
                className="absolute left-[-5rem] top-1/2 -translate-y-1/2 z-30 bg-black hover:bg-gray-800 shadow-lg rounded-full p-3 transition-all duration-300 hover:scale-110"
              >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            )}

            {canGoRight && (
              <button
                onClick={goRight}
                className="absolute right-[-5rem] top-1/2 -translate-y-1/2 z-30 bg-black hover:bg-gray-800 shadow-lg rounded-full p-3 transition-all duration-300 hover:scale-110"
              >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            )}
            {visibleWorks.map((work, index) => (
            <motion.div
              key={work.id}
              className={`group relative aspect-[3/2] ${work.color} ${work.shape} overflow-hidden cursor-pointer`}
              initial={isInitialLoad ? { opacity: 0, y: 80, scale: 0.8 } : { opacity: 1, y: 0, scale: 1 }}
              whileInView={isInitialLoad ? { opacity: 1, y: 0, scale: 1 } : { opacity: 1, y: 0, scale: 1 }}
              transition={isInitialLoad ? {
                duration: 0.8,
                delay: index * 0.15,
                ease: [0.25, 0.46, 0.45, 0.94]
              } : {
                duration: 0.3,
                ease: "easeOut"
              }}
              viewport={{ once: true, margin: "-50px" }}
            >
                {/* Hover Overlay */}
                <div className={`absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center p-6 ${work.shape}`}>
                  <div className="mb-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                    <img
                      src="/yacoop.png"
                      alt="Yacoop"
                      className="h-12 w-auto opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200"
                      onError={(e) => {
                        e.target.style.display = 'none'
                        e.target.nextSibling.style.display = 'flex'
                      }}
                    />
                  </div>

                  {/* Content */}
                  <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-200">
                    <h3 className="text-xl font-semibold text-white mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300">
                      {work.title}
                    </h3>

                    {/* Tags */}
                    <div className="flex flex-wrap justify-center gap-2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-400">
                      {work.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 bg-white/20 text-white text-xs font-medium rounded-full backdrop-blur-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Subtitle */}
                    <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-500">
                      {work.subtitle}
                    </p>
                  </div>
                </div>

                {/* Floating Elements for Visual Interest */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full animate-bounce" style={{ animationDelay: `${index * 200}ms` }}></div>
                <div className="absolute bottom-4 left-4 w-6 h-6 bg-white/30 rounded-full animate-pulse" style={{ animationDelay: `${index * 300}ms` }}></div>
              </motion.div>
            ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16 pb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-600 mb-8 text-lg">Ready to start your project?</p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-black text-white px-10 py-5 rounded-full font-semibold text-xl hover:bg-gray-900 transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            Let's Work Together
          </button>
        </motion.div>
        </div>
      </motion.div>
      </motion.div>
    </section>
  )
}

export default Works
