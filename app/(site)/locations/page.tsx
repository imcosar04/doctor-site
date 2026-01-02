import Image from 'next/image'
import Container from '@/components/layout/Container'

export default function LocationsPage() {
  // Hospital locations with image paths
  const hospitalLocations = [
    { 
      name: 'Nassau University Medical Center', 
      address: '2201 Hempstead Tpke, East Meadow, NY 11554',
      phone: '(516) 572-0123',
      image: '/images/doctor/Nassau.jpg'
    },
    { 
      name: 'BronxCare Hospital', 
      address: '1650 Grand Concourse, Bronx, NY 10457',
      image: '/images/doctor/BronxCare.jpg'
    },
    { 
      name: 'Richmond University Medical Center', 
      address: '355 Bard Ave, Staten Island, NY 10310',
      image: '/images/doctor/RichmondUniversity.jpg'
    },
    { 
      name: "St. John's Riverside Hospital", 
      address: '970 North Broadway, Yonkers, NY 10701',
      image: '/images/doctor/StJohns.jpg'
    }
  ]

  // Helper function to create Google Maps directions URL
  const getDirectionsUrl = (address: string) => {
    return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`
  }

  return (
    <Container>
      <div className="py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Inter', sans-serif" }}>
            Locations
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Affiliated hospitals and surgical sites.
          </p>
        </div>

        {/* Hospital Location Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {hospitalLocations.map((location, index) => (
            <div
              key={index}
              className="bg-white border-2 border-blue-400 rounded-lg shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-lg hover:border-blue-500 overflow-hidden"
            >
              {/* Hospital Image */}
              <div className="relative w-full h-48">
                <Image
                  src={location.image}
                  alt={location.name}
                  fill
                  className="object-cover"
                  priority={index < 2}
                />
              </div>
              
              {/* Card Content */}
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {location.name}
                </h2>
                <div className="mb-6">
                  <p className="text-gray-700 mb-2">{location.address}</p>
                  {location.phone && (
                    <p className="text-gray-700">
                      <strong>Phone:</strong> {location.phone}
                    </p>
                  )}
                </div>
                <a
                  href={getDirectionsUrl(location.address)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors rounded-lg"
                >
                  Get Directions
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  )
}

