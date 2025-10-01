
import { useState, useEffect } from 'react'
import Navigation from './components/Navigation'
import LoadingScreen from './components/LoadingScreen'
import Hero from './components/Hero'
import Works from './components/Works'
import AboutUs from './components/AboutUs'
import Contact from './components/Contact'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Prevent scrolling during loading
    if (isLoading) {
      document.body.classList.add('loading')
    } else {
      document.body.classList.remove('loading')
    }

    // Cleanup on unmount
    return () => {
      document.body.classList.remove('loading')
    }
  }, [isLoading])

  const handleLoadingComplete = () => {
    setIsLoading(false)
  }
  return (
    <div className="font-clash">
      {/* Loading Screen */}
      {isLoading && (
        <LoadingScreen onLoadingComplete={handleLoadingComplete} />
      )}

      {/* Main App Content */}
      <Navigation />

      {/* Main Content with padding-top to account for fixed navigation */}
      <main className="pt-[80px]">
        {/* Hero Section */}
        <Hero />

        {/* Work Section */}
        <Works />

        {/* About Section */}
        <AboutUs />

        {/* Contact Section */}
        <Contact />
      </main>
    </div>
  )
}
export default App