"use client"

import { useState, useEffect } from "react"

interface WelcomeScreenProps {
  onComplete: () => void
}

const greetings = [
  "नमस्ते", // Hindi/Sanskrit
  "Hello", // English
  "Bonjour", // French
  "Hola", // Spanish
  "こんにちは", // Japanese
]

export default function WelcomeScreen({ onComplete }: WelcomeScreenProps) {
  const [currentGreeting, setCurrentGreeting] = useState(0)
  const [isAnimatingOut, setIsAnimatingOut] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentGreeting < greetings.length - 1) {
        setCurrentGreeting((prev) => prev + 1)
      } else {
        // Start exit animation after showing all greetings
        setIsAnimatingOut(true)
        // Complete the welcome screen after animation
        setTimeout(() => {
          onComplete()
        }, 500) // Match the animation duration
      }
    }, 500) // Show each greeting for 1 second

    return () => clearTimeout(timer)
  }, [currentGreeting, onComplete])

  return (
    <div
      className={`fixed inset-0 bg-[#f5f3f0] flex items-center justify-center transition-transform duration-1000 ease-in-out z-50 ${
        isAnimatingOut ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="text-center">
        <h1 key={currentGreeting} className="text-6xl font-normal text-blue-600 animate-fade-in">
          {greetings[currentGreeting]}
        </h1>
      </div>
    </div>
  )
}
