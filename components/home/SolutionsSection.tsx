import Image from 'next/image'
import Link from 'next/link'

export default function SolutionsSection() {
  return (
    <section id="managements" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="bg-gray-50 p-10 lg:p-12 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-200/50 cursor-pointer">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Expert Treatment for Complex Spinal Conditions
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Dr. Murat Cosar, MD, PhD, is a neurosurgeon and complex spine surgery specialist. After completing his neurosurgery residency, he pursued advanced spine training at UCLA, Yale University Spine Center, and Weill Cornell Medicine. A former Full Professor of Neurosurgery who founded the Department of Neurosurgery at Çanakkale 18 March University, Dr. Cosar now practices at Nassau University Medical Center, specializing in complex spinal conditions including severe degeneration, tumors, infections, traumatic fractures, and deformities such as kyphosis and scoliosis. With over 25 years of experience, he combines innovative surgical techniques with compassionate, patient-centered care.
            </p>
            <Link
              href="/managements"
              className="inline-block px-8 py-3 bg-blue-600 text-white border-2 border-blue-600 font-semibold hover:bg-blue-700 transition-colors"
            >
              View All Treatments
            </Link>
          </div>

          {/* Right Side - Doctor Image */}
          <div className="relative">
            <div className="relative overflow-hidden">
              <Image
                src="/images/doctor/doctor_working_with_spine.jpg"
                alt="Dr. Murat Cosar working with spine model"
                width={600}
                height={800}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
