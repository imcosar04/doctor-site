'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

export default function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Dr. Cosar' },
    { href: '/locations', label: 'Locations' },
    { href: '/managements', label: 'Treatments' },
    { href: '/patient-resources', label: 'Patient Resources' },
  ]

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/'
    }
    return pathname?.startsWith(href)
  }

  return (
    <>
      {/* Top Bar - Logo and Schedule Button (Static) */}
      <div className="bg-gray-50 border-b-2 border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-5">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="flex items-center">
                <Image
                  src="/images/logos/MuratCosarPhysician.png"
                  alt="Dr. Murat Cosar Physician Logo"
                  width={220}
                  height={80}
                  className="h-16 w-auto"
                  priority
                  unoptimized
                />
              </Link>
            </div>

            {/* Schedule Consultation Button */}
            <div className="flex items-center">
              <Link
                href="#booking"
                className="px-8 py-3 bg-yellow-400 text-gray-900 border-2 border-yellow-400 font-semibold hover:bg-yellow-500 transition-colors text-base"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Bar - Links (Sticky) */}
      <nav className="bg-white border-b-2 border-blue-200 sticky top-0 z-50 shadow-sm">
        <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center h-16">
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center">
              <div className="flex items-baseline space-x-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-4 py-2 text-base font-medium transition-colors border-b-2 ${
                      isActive(link.href)
                        ? 'text-blue-600 border-blue-600'
                        : 'text-gray-700 border-transparent hover:text-blue-600 hover:border-blue-400'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 focus:outline-none"
              >
                <svg
                  className="h-6 w-6"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  {isOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-gray-50 border-t-2 border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 text-base font-medium border-l-2 ${
                  isActive(link.href)
                    ? 'text-blue-600 border-blue-600 bg-blue-100'
                    : 'text-gray-700 border-transparent hover:text-blue-600 hover:border-blue-400'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#booking"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 bg-yellow-400 text-gray-900 border-2 border-yellow-400 font-semibold hover:bg-yellow-500 transition-colors mt-2"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      )}
      </nav>
    </>
  )
}
