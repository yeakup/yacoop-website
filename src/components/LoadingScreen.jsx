import { useEffect, useState } from 'react'

function LoadingScreen({ onLoadingComplete }) {
  const [isVisible, setIsVisible] = useState(true)
  const [logoLoaded, setLogoLoaded] = useState(false)

  useEffect(() => {
    // Set loading duration to 2 seconds
    const timer = setTimeout(() => {
      setIsVisible(false)
      // Wait for fade out animation to complete before calling onLoadingComplete
      setTimeout(() => {
        onLoadingComplete()
      }, 500) // 500ms for fade out animation
    }, 2000)

    return () => clearTimeout(timer)
  }, [onLoadingComplete])

  const handleLogoLoad = () => {
    setLogoLoaded(true)
  }

  const handleLogoError = () => {
    // If loading.png doesn't exist, still show the placeholder and continue
    setLogoLoaded(true)
  }

  if (!isVisible) {
    return (
      <div className="fixed inset-0 bg-black z-[100] flex items-center justify-center transition-opacity duration-500 opacity-0 pointer-events-none">
        {/* This div will fade out */}
      </div>
    )
  }

  return (
    <div className="fixed inset-0 bg-black z-[100] flex items-center justify-center transition-opacity duration-500">
      <div className="flex flex-col items-center justify-center">
        {/* Loading Logo */}
        <div className="relative">
          <img
            src="/loading.png"
            alt="Loading"
            className={`h-10 w-auto transition-all duration-1000 ${
              logoLoaded
                ? 'opacity-100 scale-100 animate-pulse'
                : 'opacity-0 scale-95'
            }`}
            onLoad={handleLogoLoad}
            onError={handleLogoError}
            style={{
              animation: logoLoaded ? 'logoFloat 2s ease-in-out infinite' : 'none'
            }}
          />
        </div>

        {/* Loading Animation Dots */}
        <div className="flex space-x-2 mt-2">
          <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
          <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
          <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
        </div>
      </div>

      {/* Custom CSS for logo float animation */}
      <style jsx>{`
        @keyframes logoFloat {
          0%, 100% {
            transform: translateY(0px) scale(1);
          }
          50% {
            transform: translateY(-10px) scale(1.05);
          }
        }
        
        @keyframes logoRotate {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        
        .animate-logo-rotate {
          animation: logoRotate 2s linear infinite;
        }
      `}</style>
    </div>
  )
}

export default LoadingScreen
