import Link from 'next/link'
import { notFound } from 'next/navigation'
import titoli from '@/data/titoli.json'
import articoli from '@/data/articoli.json'

export default function TitoloDettaglioPage({ 
  params 
}: { 
  params: { slug: string } 
}) {
  const titolo = titoli.find(t => t.slug === params.slug)
  
  if (!titolo) {
    notFound()
  }

  const articoliDelTitolo = articoli.filter(a => 
    titolo.articoli.includes(a.id)
  )

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-blue-900 text-white py-8">
        <div className="container mx-auto px-4">
          <Link href="/titoli" className="text-blue-200 hover:text-white mb-2 inline-block">
            ← Torna ai titoli
          </Link>
          <h1 className="text-4xl font-bold">{titolo.titolo}</h1>
          <p className="text-blue-200 mt-2">{titolo.descrizione}</p>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-6">Articoli</h2>
        
        <div className="space-y-4">
          {articoliDelTitolo.map((articolo) => (
            <Link
              key={articolo.id}
              href={`/articoli/${articolo.id}`}
              className="block bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-bold text-blue-900 mb-2">
                {articolo.numero} - {articolo.titolo}
              </h3>
              <p className="text-gray-700 line-clamp-3">
                {articolo.contenuto}
              </p>
              <span className="text-blue-600 font-medium mt-3 inline-block">
                Leggi l'articolo completo →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}