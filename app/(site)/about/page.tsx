'use client'

import Image from 'next/image'
import Container from '@/components/layout/Container'
import { useState } from 'react'

export default function AboutPage() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const publications = [
    {
      authors: 'Marotta N, Cosar M, Pimenta L, Khoo LT',
      title: 'A Novel Minimally-Invasive Presacral Approach and Instrumentation Technique for L5-S1 Interbody Arthrodesis',
      description: 'Technical note describing a new minimally invasive approach for lumbar fusion surgery.',
      journal: 'Journal of Neurosurgery: Spine'
    },
    {
      authors: 'Cosar M, Iplikcioglu AC, Bek S, Gokduman CA',
      title: 'Intracranial Falcine and Convexity Chondromas',
      description: 'Case series and review of rare intracranial chondromas with clinical and radiological features.',
      journal: 'British Journal of Neurosurgery, 2005'
    },
    {
      authors: 'Bikmaz K, Cosar M, Iplikcioglu AC, Dinc C, Hatiboglu MA',
      title: 'Spontaneous Cerebrospinal Fluid Rhinorrhoea Due to Temporosphenoidal Encephalocele',
      description: 'Clinical case report of spontaneous CSF leak management and surgical repair.',
      journal: 'Journal of Clinical Neuroscience, 2005'
    },
    {
      authors: 'Hatiboglu MA, Cosar M, Iplikcioglu AC, Ozcan D',
      title: 'Brain Metastasis from Adenoid Cystic Carcinoma of Bartholin\'s Gland',
      description: 'Rare case report of metastatic brain tumor with clinical presentation and management.',
      journal: 'Journal of Neurosurgery, 2005'
    },
    {
      authors: 'Bikmaz K, Cosar M, Bek S, Gokduman CA, Arslan M, Iplikcioglu AC',
      title: 'Intradiploic Epidermoid Cysts of the Skull: A Report of Four Cases',
      description: 'Case series of rare skull lesions with imaging characteristics and surgical outcomes.',
      journal: 'Clinical Neurology and Neurosurgery, 2005'
    },
    {
      authors: 'Erdal M, Iplikcioglu AC, Bikmaz K, Cosar M',
      title: 'Dandy-Walker Complex and Syringomyelia in an Adult: Case Report and Discussion',
      description: 'Complex case of congenital malformation with associated syringomyelia and management approach.',
      journal: 'Neurosurgery, 2003'
    },
    {
      authors: 'Bikmaz K, Cosar M, Iplikcioglu AC',
      title: 'Non-traumatic Multisegmental Intraspinal and Infratentorial Haemorrhage in a Haemophilia-A Patient',
      description: 'Case report of rare bleeding complications in hemophilia patient with spinal and intracranial involvement.',
      journal: 'British Journal of Neurosurgery, 2005'
    },
    {
      authors: 'Bikmaz K, Cosar M, Kurtkaya-Yapicier O, Iplikcioglu AC, Gokduman CA',
      title: 'Recurrence of Solitary Fibrous Tumor in Cerebellopontine Angle',
      description: 'Case report of recurrent rare tumor in posterior fossa with surgical management and follow-up.',
      journal: 'Journal of Clinical Neuroscience, 2005'
    },
    {
      authors: 'Gokduman CA, Iplikcioglu AC, Kuzdere M, Bek S, Cosar M',
      title: 'Primary Meningioma of the Paranasal Sinus',
      description: 'Rare case of primary meningioma in paranasal sinus with clinical presentation and surgical approach.',
      journal: 'Journal of Clinical Neuroscience, 2005'
    },
    {
      authors: 'Cosar M, Iplikcioglu AC, Ozer-Kartal N, Aytan N, San T, Deniz O, Ozer AF',
      title: 'The Effect of Temporary Aneurysm Clip on the Common Carotid Artery of Atherosclerotic Rabbits',
      description: 'Experimental study examining the effects of temporary clipping on atherosclerotic vessels.',
      journal: 'Turkish Neurosurgery Society 20th Scientific Congress, 2006'
    },
    {
      authors: 'Cosar M, Ozen OA, Sahin O, Fidan H, Eser O, Mollaoglu H, Alkoc O, Yaman M, Songur A',
      title: 'Protective Effect of Fish n-3 Free Fatty Acids on Cerebral Ischemia in Rat Prefrontal Cortex',
      description: 'Experimental research on neuroprotective effects of omega-3 fatty acids in cerebral ischemia models.',
      journal: 'Turkish Neurosurgery Society 22nd Scientific Congress, 2008'
    },
    {
      authors: 'Cosar M, Erdogan M, Eser O, Eser B, Aslan A, Handan Y, Korkmaz S, Yavas GF, Solak M',
      title: 'Analysis of C677T MTHFR, A1298C MTHFR and Factor V Leiden Gene Polymorphisms in Pseudotumor Cerebri Patients',
      description: 'Genetic association study examining polymorphisms in patients with idiopathic intracranial hypertension.',
      journal: 'Turkish Neurosurgery Society 22nd Scientific Congress, 2008'
    },
    {
      authors: 'Eser O, Fidan H, Sahin O, Cosar M, Yaman M, Mollaoglu H, Songur A, Buyukbas S',
      title: 'Effect of Dexmedetomidine on Ischemic Rat Hippocampus',
      description: 'Experimental study investigating the neuroprotective properties of dexmedetomidine in hippocampal ischemia.',
      journal: 'Turkish Neurosurgery Society 22nd Scientific Congress, 2008'
    },
    {
      authors: 'Yuksel Y, Guven M, Kaymaz B, Cosar M',
      title: 'The Effect of Aloe Vera on Spinal Cord Ischemia-Reperfusion Injury in Rats',
      description: 'Experimental research on potential therapeutic effects of aloe vera in spinal cord injury models.',
      journal: 'Turkish Neurosurgery Society 30th Scientific Congress, 2015'
    },
    {
      authors: 'Sehitoglu MH, Guven M, Yuksel M, Cosar M',
      title: 'The Effect of Glycyrrhizic Acid on Traumatic Spinal Cord Injury in Rats',
      description: 'Preclinical study examining neuroprotective effects of glycyrrhizic acid in spinal cord trauma.',
      journal: 'Turkish Neurosurgery Society 30th Scientific Congress, 2015'
    }
  ]

  const slidesPerView = 3
  const totalSlides = Math.ceil(publications.length / slidesPerView)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }
  return (
    <>
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
                <h2 className="text-2xl font-bold text-gray-900 mb-2" style={{ fontFamily: "'Inter', sans-serif", letterSpacing: '-0.01em' }}>
                  Murat Cosar, MD PhD FACS
                </h2>
                <p className="text-lg text-gray-700 mb-4" style={{ fontFamily: "'Inter', sans-serif" }}>Neurosurgeon</p>
                <p className="text-gray-700 leading-relaxed text-sm mb-6" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Dr. Murat Cosar is a neurosurgeon with more than twenty years of experience. He is board-certified to practice medicine in Turkey, New York, and New Mexico, and holds a PhD in neuroanatomy.
                </p>
                
                {/* Specialties */}
                <div className="text-left">
                  <h3 className="font-semibold text-gray-900 mb-3" style={{ fontFamily: "'Inter', sans-serif" }}>Specialties</h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <p className="text-gray-700 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>Spine</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <p className="text-gray-700 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>Brain Tumors</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <p className="text-gray-700 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>Cerebrovascular</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <p className="text-gray-700 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>Peripheral Nerve</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <p className="text-gray-700 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>Trauma (Spine / Cranial)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Full Biography */}
          <div className="lg:col-span-2">
            <div className="bg-white border-2 border-blue-400 p-8 rounded-lg shadow-sm">
              <h2 className="text-3xl font-bold text-gray-900 mb-6" style={{ fontFamily: "'Inter', sans-serif", letterSpacing: '-0.02em' }}>
                Dr. Murat Cosar, MD, PhD, FACS
              </h2>
              <div className="text-gray-700 leading-relaxed text-lg" style={{ fontFamily: "'Crimson Text', serif" }}>
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

    {/* Publications Section - Outside Container for Full Width */}
    <div className="mt-20 relative w-full pt-16 pb-0 px-4 overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/doctor/doctor_writing_something_down.jpg"
              alt="Doctor writing"
              fill
              className="object-cover"
              priority
            />
          </div>
          {/* Purple Overlay */}
          <div 
            className="absolute inset-0 z-0"
            style={{ 
              backgroundColor: 'rgba(139, 92, 246, 0.5)',
              background: 'linear-gradient(135deg, rgba(167, 139, 250, 0.6) 0%, rgba(139, 92, 246, 0.6) 100%)'
            }}
          />
          {/* Content */}
          <div className="relative z-10 w-full px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center uppercase tracking-wide" style={{ fontFamily: "'Inter', sans-serif", letterSpacing: '0.05em' }}>
              Publications in Internationally Assessed Journals
            </h2>
            
            {/* Carousel Container */}
            <div className="relative max-w-7xl mx-auto">
              {/* Navigation Arrow - Left */}
              <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 transition-colors"
                aria-label="Previous slide"
              >
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Carousel */}
              <div className="overflow-hidden px-12">
                <div 
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ width: `${totalSlides * 100}%`, transform: `translateX(-${currentSlide * (100 / totalSlides)}%)` }}
                >
                  {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                    <div key={slideIndex} className="flex w-full" style={{ width: `${100 / totalSlides}%` }}>
                      {publications.slice(slideIndex * slidesPerView, slideIndex * slidesPerView + slidesPerView).map((pub, pubIndex) => (
                        <div
                          key={slideIndex * slidesPerView + pubIndex}
                          className="flex-shrink-0 w-1/3 px-3"
                        >
                          <div className="bg-white rounded-lg p-8 h-[450px] shadow-lg flex flex-col transition-transform duration-300 hover:scale-105 cursor-pointer">
                            <p className="text-sm text-gray-600 font-medium mb-3" style={{ fontFamily: "'Inter', sans-serif" }}>
                              {pub.authors}
                            </p>
                            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex-grow" style={{ fontFamily: "'Inter', sans-serif" }}>
                              {pub.title}
                            </h3>
                            <p className="text-sm text-gray-700 mb-4" style={{ fontFamily: "'Crimson Text', serif" }}>
                              {pub.description}
                            </p>
                            <p className="text-xs text-gray-500 italic mt-auto" style={{ fontFamily: "'Inter', sans-serif" }}>
                              {pub.journal}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Arrow - Right */}
              <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 transition-colors"
                aria-label="Next slide"
              >
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center items-center gap-2 mt-8">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    currentSlide === index
                      ? 'bg-white w-8'
                      : 'bg-white/50 hover:bg-white/75'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            
            <div className="text-center mt-12 mb-8">
              <p className="text-white/90" style={{ fontFamily: "'Inter', sans-serif" }}>
                Dr. Cosar has published over 100 international scientific articles and authored three editions of books on neurosurgical spine surgery.
              </p>
            </div>
          </div>
        </div>
    </>
  )
}
