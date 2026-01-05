import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative bg-gray-50 py-16 md:py-24 border-b-2 border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="text-left lg:col-span-3">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Trusted Expertise in Brain & Spine Health
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-10 leading-relaxed">
              Advanced neurosurgical and spine surgery care for complex conditions, delivered with precision and care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#managements"
                className="px-8 py-4 bg-blue-600 text-white border-2 border-blue-600 font-semibold hover:bg-blue-700 transition-colors text-center"
              >
                Insights on Treatment Procedures
              </Link>
            </div>
          </div>

          {/* Right Side - Doctor Image */}
          <div className="relative lg:col-span-2 flex justify-center lg:justify-end">
            <div className="relative overflow-hidden shadow-lg max-w-md w-full">
              <Image
                src="/images/doctor/murat_cosar.jpg"
                alt="Dr. Murat Cosar"
                width={500}
                height={650}
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
