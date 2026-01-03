import Image from 'next/image'
import Container from '@/components/layout/Container'

export default function LocationsPage() {
  // Main surgical site
  const mainSurgicalSites = [
    { 
      name: 'Nassau University Medical Center', 
      address: '2201 Hempstead Tpke, East Meadow, NY 11554',
      phone: '(516) 572-0123',
      image: '/images/doctor/Nassau.jpg'
    }
  ]

  // Affiliated surgical sites
  const affiliatedSurgicalSites = [
    { 
      name: 'BronxCare Hospital', 
      address: '1650 Grand Concourse, Bronx, NY 10457',
      phone: '(718) 590-1800',
      image: '/images/doctor/BronxCare.jpg'
    },
    { 
      name: 'Richmond University Medical Center', 
      address: '355 Bard Ave, Staten Island, NY 10310',
      phone: '(718) 818-1234',
      image: '/images/doctor/RichmondUniversity.jpg'
    },
    { 
      name: "St. John's Riverside Hospital", 
      address: '970 North Broadway, Yonkers, NY 10701',
      phone: '(914) 964-4444',
      image: '/images/doctor/StJohns.jpg'
    }
  ]

  // Helper function to create Google Maps directions URL
  const getDirectionsUrl = (address: string) => {
    return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`
  }

  // Component to render location cards
  const LocationCard = ({ location, index }: { location: any, index: number }) => (
    <div
      className="bg-white border-2 border-blue-400 rounded-lg shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-lg hover:border-blue-500 overflow-hidden"
    >
      {/* Hospital Image */}
      <div className="relative w-full h-64">
        <Image
          src={location.image}
          alt={location.name}
          fill
          className="object-cover"
          priority={index < 2}
        />
      </div>
      
      {/* Card Content */}
      <div className="p-10 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-5">
          {location.name}
        </h2>
        <div className="mb-8">
          <p className="text-gray-700 mb-3 text-lg">{location.address}</p>
          {location.phone && (
            <p className="text-gray-700 text-lg">
              <strong>Phone:</strong> {location.phone}
            </p>
          )}
        </div>
        <a
          href={getDirectionsUrl(location.address)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-4 bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors rounded-lg text-lg"
        >
          Get Directions
        </a>
      </div>
    </div>
  )

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

        {/* Main Surgical Sites Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center" style={{ fontFamily: "'Inter', sans-serif" }}>
            Main Surgical Sites
          </h2>
          <div className="flex justify-center">
            <div className="w-full max-w-3xl">
              {mainSurgicalSites.map((location, index) => (
                <LocationCard key={index} location={location} index={index} />
              ))}
            </div>
          </div>
        </div>

        {/* Affiliated Surgical Sites Section */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center" style={{ fontFamily: "'Inter', sans-serif" }}>
            Affiliated Surgical Sites
          </h2>
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full">
              {affiliatedSurgicalSites.map((location, index) => (
                <LocationCard key={index} location={location} index={index + mainSurgicalSites.length} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

