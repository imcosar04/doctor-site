'use client'

import { useState } from 'react'
import Image from 'next/image'
import Container from '@/components/layout/Container'
import managementsData from '@/content/managements.json'

export default function ManagementsPage() {
  const managements = managementsData.managements || []
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const getCategoryImage = (category: string) => {
    if (category === 'brain') return '/images/clinic/brain.jpg'
    if (category === 'spine') return '/images/clinic/spine.avif'
    return null
  }

  return (
    <Container>
      <div className="py-12">
        {/* Header Image */}
        <div className="relative w-full h-64 md:h-80 mb-12 overflow-hidden border-2 border-blue-400">
          <Image
            src="/images/clinic/consulting.jpg"
            alt="Medical Consultation"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Title and Description on White Background */}
        <div className="text-center mb-16 bg-white py-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Inter', sans-serif" }}>
            Treatments
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive medical treatment services tailored to meet your healthcare needs.
          </p>
        </div>

        {managements.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {managements.map((management: any, index: number) => {
              const categoryImage = getCategoryImage(management.category)
              
              return (
                <div
                  key={index}
                  className={`relative bg-white border-2 border-blue-400 p-6 transition-all duration-300 cursor-pointer min-h-[280px] flex flex-col overflow-hidden ${
                    hoveredIndex === index 
                      ? 'border-blue-600 shadow-lg' 
                      : 'hover:border-blue-500'
                  }`}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {/* Background Image with Transparency - Only on Hover */}
                  {hoveredIndex === index && categoryImage && (
                    <div className="absolute inset-0 z-0">
                      <Image
                        src={categoryImage}
                        alt={management.category}
                        fill
                        className="object-cover opacity-30"
                      />
                    </div>
                  )}

                  {/* Content with relative positioning */}
                  <div className="relative z-10 flex flex-col h-full">
                    {/* Icon/Brain Symbol */}
                    <div className="mb-4">
                      <svg
                        className="w-12 h-12 text-blue-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                        />
                      </svg>
                    </div>

                    {/* Title */}
                    <h2 className="text-lg font-semibold mb-3 text-gray-900">
                      {management.title || `Treatment ${index + 1}`}
                    </h2>

                    {/* Description */}
                    <p className="text-sm leading-relaxed flex-grow text-gray-700">
                      {management.description || 'Professional medical treatment service.'}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div 
                key={i} 
                className="bg-white border-2 border-blue-400 p-6 min-h-[280px] flex flex-col"
              >
                <div className="mb-4">
                  <svg
                    className="w-12 h-12 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
                <h2 className="text-lg font-semibold text-gray-900 mb-3">
                  Condition {i}
                </h2>
                <p className="text-sm text-gray-600 leading-relaxed flex-grow">
                  Description of condition and treatment approach.
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </Container>
  )
}
