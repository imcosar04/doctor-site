import Image from 'next/image'
import Container from '@/components/layout/Container'

export default function AboutPage() {
  return (
    <Container>
      <div className="py-12">
        {/* Header Image */}
        <div className="relative w-full h-64 md:h-80 mb-12 overflow-hidden border-2 border-blue-400 rounded-lg">
          <Image
            src="/images/clinic/consulting.jpg"
            alt="Medical Consultation"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Main Content - Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Left Side - Picture and Bio */}
          <div className="lg:col-span-1">
            <div className="bg-white border-2 border-blue-400 p-6 sticky top-24 rounded-lg shadow-sm">
              <div className="relative mb-6">
                <Image
                  src="/images/doctor/murat_cosar.jpg"
                  alt="Dr. Murat Cosar"
                  width={400}
                  height={500}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
              <div className="text-center">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Murat Cosar, MD PhD
                </h2>
                <p className="text-lg text-gray-700 mb-4">Neurosurgeon</p>
                <p className="text-gray-700 leading-relaxed text-sm mb-6">
                  Dr. Murat Cosar is a neurosurgeon with more than twenty years of experience. He is board-certified to practice medicine in Turkey, New York, and New Mexico, and holds a PhD in neuroanatomy.
                </p>
                
                {/* Specialties */}
                <div className="text-left">
                  <h3 className="font-semibold text-gray-900 mb-3">Specialties</h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <p className="text-gray-700 text-sm">Spine</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <p className="text-gray-700 text-sm">Brain Tumors</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <p className="text-gray-700 text-sm">Cerebrovascular</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <p className="text-gray-700 text-sm">Peripheral Nerve</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <p className="text-gray-700 text-sm">Trauma (Spine / Cranial)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Full Biography */}
          <div className="lg:col-span-2">
            <div className="bg-white border-2 border-blue-400 p-8 rounded-lg shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6" style={{ fontFamily: "'Inter', sans-serif" }}>
                Dr. Murat Cosar, MD, PhD
              </h2>
              <div className="text-gray-700 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                <p className="mb-4">
                  Murat Coşar is a Turkish-American physician born in Giresun, Turkey. He graduated from Istanbul University Medical School in 1999 and completed his neurosurgery residency in 2005. Following residency, he joined the UCLA Neurosurgery and Spine Program for a six-month postdoctoral research fellowship.
                </p>
                <p className="mb-4">
                  After completing his postdoctoral training, Dr. Coşar returned to Turkey and began his academic career as an Assistant Professor in the Department of Neurosurgery at Afyon Kocatepe University. After two years in Afyonkarahisar, he moved to Çanakkale 18 March University, where he founded the Department of Neurosurgery in 2007. He successfully passed the national clinical and oral board examinations and was promoted to Associate Professor of Neurosurgery in 2008.
                </p>
                <p className="mb-4">
                  In 2009, Dr. Coşar earned his PhD in Neuroanatomy after completing a five-year neuroanatomy program jointly conducted by Afyon Kocatepe University and Marmara University. He was appointed Full Professor of Neurosurgery at Çanakkale 18 March University in 2013.
                </p>
                <p className="mb-4">
                  In 2014, Dr. Coşar relocated to the United States and began working as a visiting scholar at the Yale University Spine Center. He passed the USMLE examinations and obtained ECFMG certification in 2017. He subsequently completed a one-year Neuro ICU fellowship at the University of New Mexico in 2018, followed by a one-year spine fellowship at Weill Cornell Medicine in 2019.
                </p>
                <p className="mb-4">
                  Since 2022, Dr. Coşar has been practicing at Nassau University Medical Center in the Department of Neurosciences, specializing in neurosurgery and spine surgery. He became a Fellow of the American College of Surgeons (FACS) in 2023. In addition to his primary appointment, he holds surgical privileges at four neurosurgery programs across the New York area.
                </p>
                <p>
                  Dr. Coşar resides in Nassau County with his wife and three children. He has authored three editions of books on neurosurgical spine surgery and has published more than 100 international scientific articles over the past 25 years.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}
