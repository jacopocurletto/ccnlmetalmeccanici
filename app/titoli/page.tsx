import Link from 'next/link'
import titoli from '@/data/titoli.json'

export default function TitoliPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-blue-900 text-white py-8">
        <div className="container mx-auto px-4">
          <Link href="/" className="text-blue-200 hover:text-white mb-2 inline-block">
            ← Torna alla home
          </Link>
          <h1 className="text-4xl font-bold">Titoli del CCNL</h1>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-6">
          {titoli.map((titolo) => (
            <Link 
              key={titolo.id}
              href={`/titoli/${titolo.slug}`}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <h2 className="text-2xl font-bold mb-3 text-blue-900">
                {titolo.titolo}
              </h2>
              <p className="text-gray-600 mb-4">
                {titolo.descrizione}
              </p>
              <p className="text-sm text-gray-500">
                {titolo.articoli.length} articoli
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}