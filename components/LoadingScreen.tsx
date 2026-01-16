'use client'

import { useState, useEffect } from 'react'

interface LoadingScreenProps {
  isLoading: boolean
  onLoadingComplete?: () => void
}

export default function LoadingScreen({ isLoading, onLoadingComplete }: LoadingScreenProps) {
  const [isVisible, setIsVisible] = useState(true)
  const [isFadingOut, setIsFadingOut] = useState(false)

  useEffect(() => {
    if (!isLoading) {
      // Start fade out animation
      setIsFadingOut(true)
      // Remove from DOM after animation completes
      const timer = setTimeout(() => {
        setIsVisible(false)
        onLoadingComplete?.()
      }, 600) // Match the CSS transition duration
      return () => clearTimeout(timer)
    }
  }, [isLoading, onLoadingComplete])

  // Fallback: hide loading screen after max time even if video doesn't load
  useEffect(() => {
    const maxTimer = setTimeout(() => {
      if (isVisible && !isFadingOut) {
        setIsFadingOut(true)
        setTimeout(() => {
          setIsVisible(false)
          onLoadingComplete?.()
        }, 600)
      }
    }, 8000) // Max 8 seconds
    return () => clearTimeout(maxTimer)
  }, [isVisible, isFadingOut, onLoadingComplete])

  if (!isVisible) return null

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-bg-dark flex items-center justify-center transition-opacity duration-600 ${
        isFadingOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      {/* Logo with thermometer animation */}
      <div className="flex flex-col items-center">
        <svg
          width="180"
          height="140"
          viewBox="0 0 180 140"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mb-4"
        >
          <defs>
            {/* Gradient for liquid fill */}
            <linearGradient id="liquid-gradient" x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#BCF000" />
              <stop offset="50%" stopColor="#F0C500" />
              <stop offset="100%" stopColor="#FF6B9D" />
            </linearGradient>
            {/* Clip path for thermometer tube */}
            <clipPath id="tube-clip">
              <rect x="78" y="10" width="24" height="70" rx="12" />
            </clipPath>
          </defs>

          {/* "3" character - bold outline */}
          <text
            x="35"
            y="68"
            textAnchor="middle"
            fill="none"
            stroke="white"
            strokeWidth="2"
            fontSize="72"
            fontWeight="900"
            fontFamily="system-ui, -apple-system, sans-serif"
            className="logo-letter"
          >
            3
          </text>

          {/* Thermometer tube (between 3 and D) */}
          <g className="thermometer">
            {/* Outer tube */}
            <rect
              x="78"
              y="10"
              width="24"
              height="70"
              rx="12"
              stroke="white"
              strokeWidth="3"
              fill="none"
            />

            {/* Animated liquid fill */}
            <g clipPath="url(#tube-clip)">
              <rect
                x="78"
                y="10"
                width="24"
                height="70"
                fill="url(#liquid-gradient)"
                className="liquid-fill"
              />
            </g>

            {/* Tube highlight */}
            <rect
              x="84"
              y="15"
              width="4"
              height="55"
              rx="2"
              fill="rgba(255,255,255,0.2)"
            />
          </g>

          {/* "D" character - bold outline */}
          <text
            x="145"
            y="68"
            textAnchor="middle"
            fill="none"
            stroke="white"
            strokeWidth="2"
            fontSize="72"
            fontWeight="900"
            fontFamily="system-ui, -apple-system, sans-serif"
            className="logo-letter"
          >
            D
          </text>

          {/* "GRYZ" text below */}
          <text
            x="90"
            y="115"
            textAnchor="middle"
            fill="white"
            fontSize="32"
            fontWeight="900"
            fontFamily="system-ui, -apple-system, sans-serif"
            letterSpacing="6"
            className="logo-text"
          >
            GRYZ
          </text>
        </svg>

        {/* Loading text */}
        <p className="text-text-muted text-sm uppercase tracking-widest mt-4 loading-dots">
          Loading
        </p>
      </div>
    </div>
  )
}
