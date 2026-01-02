'use client'

import { useState } from 'react'
import Image from 'next/image'
import AppointmentForm from '@/components/randezvous/AppointmentForm'

export default function BookingSection() {
  const [showForm, setShowForm] = useState(false)

  return (
    <section id="booking" className="py-20 bg-gray-50 border-y-2 border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Side - Image */}
          <div className="relative h-full min-h-[400px] lg:min-h-[500px]">
            <Image
              src="/images/doctor/consulting_doctor.jpg"
              alt="Medical Consultation"
              fill
              className="object-cover rounded-lg"
              priority
            />
          </div>

          {/* Right Side - Booking Content */}
          <div className="flex flex-col justify-center">
            <div className="text-center lg:text-left mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Book Your Consultation
              </h2>
              <p className="text-lg text-gray-600">
                Schedule your visit with us today. We're here to help you on your health journey.
              </p>
            </div>

            {!showForm ? (
              <div className="bg-white border-2 border-blue-200 p-10 text-center lg:text-left">
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Click the button below to fill out our consultation form.
                </p>
                <button
                  onClick={() => setShowForm(true)}
                  className="px-8 py-3 bg-blue-600 text-white border-2 border-blue-600 font-semibold hover:bg-blue-700 transition-colors"
                >
                  Schedule a Consultation
                </button>
              </div>
            ) : (
              <div className="bg-white border-2 border-blue-200 p-10">
                <div className="mb-6 flex justify-between items-center">
                  <h3 className="text-2xl font-semibold text-gray-900">
                    Consultation Form
                  </h3>
                  <button
                    onClick={() => setShowForm(false)}
                    className="text-gray-600 hover:text-gray-800"
                  >
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <AppointmentForm />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
