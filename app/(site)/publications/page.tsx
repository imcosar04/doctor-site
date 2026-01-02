import publicationsData from '@/content/publications.json'
import Container from '@/components/layout/Container'

export default function PublicationsPage() {
  const publications = publicationsData.publications || []

  return (
    <Container>
      <div className="py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Publications</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Research articles, medical insights, and educational content from our practice.
          </p>
        </div>

        {publications.length > 0 ? (
          <div className="space-y-6">
            {publications.map((publication: any, index: number) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow border border-gray-200"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                      {publication.title || `Publication ${index + 1}`}
                    </h2>
                    {publication.authors && (
                      <p className="text-gray-600 mb-2">
                        <strong>Authors:</strong> {Array.isArray(publication.authors) ? publication.authors.join(', ') : publication.authors}
                      </p>
                    )}
                    {publication.journal && (
                      <p className="text-gray-600 mb-2">
                        <strong>Journal:</strong> {publication.journal}
                      </p>
                    )}
                    {publication.date && (
                      <p className="text-gray-600 mb-4">
                        <strong>Date:</strong> {publication.date}
                      </p>
                    )}
                    {publication.abstract && (
                      <p className="text-gray-700 mb-4">{publication.abstract}</p>
                    )}
                    {publication.link && (
                      <a
                        href={publication.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
                      >
                        Read Full Article →
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600 mb-8">Publications will be listed here as they become available.</p>
            <div className="bg-white rounded-lg shadow-md p-8 max-w-2xl mx-auto text-left">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Sample Publication</h2>
              <p className="text-gray-600 mb-2">
                <strong>Authors:</strong> Dr. John Doe, Dr. Jane Smith
              </p>
              <p className="text-gray-600 mb-2">
                <strong>Journal:</strong> Medical Research Journal
              </p>
              <p className="text-gray-600 mb-4">
                <strong>Date:</strong> 2024
              </p>
              <p className="text-gray-700">
                This is a placeholder for future publications. Research articles and medical insights will be published here.
              </p>
            </div>
          </div>
        )}
      </div>
    </Container>
  )
}

