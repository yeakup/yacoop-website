import { useEffect, useState } from 'react'

function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Trigger animations after loading screen is complete (2.5 seconds total)
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 2000) // Loading screen (2000ms) + fade out (500ms) + small buffer (100ms)

    return () => clearTimeout(timer)
  }, [])

  const handleCTAClick = () => {
    // Scroll to contact section when CTA is clicked
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return (
    <section id="home" className="min-h-screen bg-gray-50 flex items-center justify-center pt-0 md:pt-0 pb-8 md:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[calc(100vh-160px)] md:min-h-[calc(100vh-120px)]">
          
          {/* Left Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left relative">
            {/* Badge */}
            <div className={`inline-flex items-center px-4 py-2 bg-white rounded-full shadow-sm border border-gray-200 mb-6 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
              <span className="text-sm font-medium text-gray-700">
                Available for new projects
              </span>
            </div>

            {/* Headline */}
            <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <span className={`block transition-all duration-1000 delay-300 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
              }`}>
                Let's Build Something
              </span>
              <span className={`block text-black transition-all duration-1000 delay-500 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
              }`}>
                Amazing Together
              </span>
            </h1>

            {/* Text */}
            <p className={`text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed transition-all duration-1000 delay-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}>
              We create exceptional digital experiences that help your business grow.
              From concept to launch, we're here to bring your vision to life with
              cutting-edge design and development.
            </p>

            {/* Arrow Image - positioned on left side */}
            <div className={`hidden lg:block absolute left-[-60px] top-[200px] transition-all duration-1000 delay-[2000ms] ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
            }`}>
              <img
                src="/arrow.png"
                alt="Arrow pointing to CTA"
                className="w-16 h-auto transform rotate-12"
              />
            </div>

            {/* CTA Button */}
            <div className={`flex flex-col sm:flex-row gap-4 justify-center lg:justify-start transition-all duration-1000 delay-900 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <button
                onClick={handleCTAClick}
                className="bg-black text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-900 transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                Start Your Project
              </button>

              {/* Secondary CTA (optional) */}
              <button
                onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-black text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-black hover:text-white transition-all duration-300 hover:scale-105"
              >
                View Our Work
              </button>
            </div>

            {/* Stats or Social Proof (optional) */}
            <div className={`flex flex-wrap justify-center lg:justify-start gap-8 mt-12 pt-8 border-t border-gray-200 transition-all duration-1000 delay-1100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}>
              <div className={`text-center lg:text-left transition-all duration-700 delay-1200 ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}>
                <div className="text-2xl font-bold text-gray-900">10+</div>
                <div className="text-sm text-gray-600">Projects Completed</div>
              </div>
              <div className={`text-center lg:text-left transition-all duration-700 delay-1300 ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}>
                <div className="text-2xl font-bold text-gray-900">5+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className={`text-center lg:text-left transition-all duration-700 delay-1400 ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}>
                <div className="text-2xl font-bold text-gray-900">100%</div>
                <div className="text-sm text-gray-600">Client Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end mt-8 md:mt-0">
            <div className={`relative w-full max-w-xs sm:max-w-sm lg:max-w-xl xl:max-w-2xl transition-all duration-1200 delay-400 ${
              isVisible ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-8 scale-95'
            }`}>
              <img
                src="/01.png"
                alt="Hero Image"
                className="w-full h-auto rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
              />

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-black rounded-full opacity-10 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gray-400 rounded-full opacity-20 animate-bounce"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero
