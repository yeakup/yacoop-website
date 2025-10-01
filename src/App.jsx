
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

    return () => {
      document.body.classList.remove('loading')
    }
  }, [isLoading])

  const handleLoadingComplete = () => {
    setIsLoading(false)
  }
  return (
    <div className="font-clash">
      {isLoading && (
        <LoadingScreen onLoadingComplete={handleLoadingComplete} />
      )}

      {/* Main App Content */}
      <Navigation />
      <main className="pt-[80px]">
        <Hero />
        <Works />
        <AboutUs />
        <Contact />
      </main>
    </div>
  )
}
export default App