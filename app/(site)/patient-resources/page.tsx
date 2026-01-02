import Image from 'next/image'
import Container from '@/components/layout/Container'
import AppointmentForm from '@/components/randezvous/AppointmentForm'

export default function PatientResourcesPage() {
  return (
    <Container>
      <div className="py-12">
        {/* Header Image */}
        <div className="relative w-full h-64 md:h-80 mb-12 overflow-hidden border-2 border-blue-200">
          <Image
            src="/images/clinic/consulting.jpg"
            alt="Medical Consultation"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Patient Resources</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Access helpful information and book your consultation online.
          </p>
        </div>

        {/* Consultation Booking Section - Centered */}
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Book a Consultation</h2>
          <div className="bg-white border-2 border-blue-200 p-8">
            <AppointmentForm />
          </div>
        </div>
      </div>
    </Container>
  )
}
