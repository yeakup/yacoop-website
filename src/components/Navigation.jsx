import { useState } from 'react'

function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
    // Close mobile menu after clicking a link
    setIsMobileMenuOpen(false)
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <nav className="bg-white fixed top-0 left-0 right-0 z-50">
      <div className="h-[80px] max-w-[1800px] mx-auto px-6 sm:px-8 lg:px-8">
        <div className="flex justify-between md:justify-between items-center h-full">
          {/* Logo Section */}
          <div className="flex-shrink-0 md:flex-shrink-0">
            <img
              src="/logo.png"
              alt="Yacoop Logo"
              className="h-8 sm:h-10 lg:h-8 w-auto cursor-pointer hover:opacity-80 transition-opacity duration-200"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
            />
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8 text-lg">
            <button
              onClick={() => scrollToSection('home')}
              className="text-black hover:text-gray-600 transition-colors duration-200"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('work')}
              className="text-black hover:text-gray-600 transition-colors duration-200"
            >
              Work
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-black hover:text-gray-600 transition-colors duration-200"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-black text-white px-6 py-3 font-medium rounded-full hover:bg-gray-900 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Contact Us
            </button>


          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-black hover:text-gray-600 focus:outline-none focus:text-gray-600 p-2"
              aria-label="Toggle mobile menu"
            >
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 pt-2 pb-4 space-y-2">
            <button
              onClick={() => scrollToSection('home')}
              className="block w-full text-left px-3 py-2 text-black hover:bg-gray-50  rounded-md transition-colors duration-200"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('work')}
              className="block w-full text-left px-3 py-2 text-black hover:bg-gray-50 rounded-md transition-colors duration-200"
            >
              Work
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left px-3 py-2 text-black hover:bg-gray-50 rounded-md transition-colors duration-200"
            >
              About Us
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-center mt-4 bg-black text-white px-6 py-3 rounded-full hover:bg-gray-900 transition-all duration-300 hover:scale-105"
            >
              Contact Us
            </button>


          </div>
        </div>
      )}
    </nav>
  )
}

export default Navigation