'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

const testimonials = [
  {
    quote: "When I first met Dr. Cosar, I was experiencing severe neurological symptoms that had been misdiagnosed for months. His comprehensive evaluation quickly identified the root cause, and his surgical expertise made all the difference in my recovery.",
    author: "D.W.",
    date: "Dec 18, 2024"
  },
  {
    quote: "Dr. Cosar provided exceptional care during my treatment. His expertise and compassionate approach made all the difference in my recovery.",
    author: "S.M.",
    date: "Nov 22, 2024"
  },
  {
    quote: "I've been a patient here for several years, and I continue to be impressed by the quality of care. Dr. Cosar truly listens and provides personalized treatment plans that work.",
    author: "R.K.",
    date: "Oct 15, 2024"
  }
]

export default function ThirdSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const currentTestimonial = testimonials[currentIndex]

  // Auto-advance testimonials every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative py-20 border-t-2 border-blue-200 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/doctor/Spine-Demonstration.webp"
          alt="Spine Demonstration"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-blue-900/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 drop-shadow-lg">
            Patient Testimonials
          </h2>
        </div>

        {/* Large Quote Icon */}
        <div className="text-center mb-8">
          <svg
            className="w-20 h-20 text-white mx-auto drop-shadow-lg"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.984zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.432.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
        </div>

        {/* Author and Date */}
        <div className="text-center mb-8">
          <p className="text-lg font-bold text-white drop-shadow-lg">
            {currentTestimonial.author} - {currentTestimonial.date}
          </p>
        </div>

        {/* Testimonial Text */}
        <div className="mb-12">
          <p className="text-white leading-relaxed text-left drop-shadow">
            {currentTestimonial.quote}
          </p>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center items-center gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-white w-8'
                  : 'bg-white/50 hover:bg-white/70'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
