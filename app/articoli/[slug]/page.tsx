import Link from 'next/link'
import { notFound } from 'next/navigation'
import articoli from '@/data/articoli.json'
import titoli from '@/data/titoli.json'

export default function ArticoloPage({ 
  params 
}: { 
  params: { slug: string } 
}) {
  const articolo = articoli.find(a => a.id === parseInt(params.slug))
  
  if (!articolo) {
    notFound()
  }

  const titolo = titoli.find(t => t.id === articolo.titoloId)

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-blue-900 text-white py-8">
        <div className="container mx-auto px-4">
          <Link href="/titoli" className="text-blue-200 hover:text-white mb-2 inline-block">
            ← Torna ai titoli
          </Link>
          {titolo && (
            <Link 
              href={`/titoli/${titolo.slug}`} 
              className="text-blue-200 hover:text-white mb-2 inline-block ml-4"
            >
              {titolo.titolo}
            </Link>
          )}
          <h1 className="text-4xl font-bold mt-2">
            {articolo.numero} - {articolo.titolo}
          </h1>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="prose max-w-none">
            <p className="text-lg leading-relaxed text-gray-800">
              {articolo.contenuto}
            </p>
          </div>

          {articolo.tag && articolo.tag.length > 0 && (
            <div className="mt-8 pt-6 border-t">
              <h3 className="text-sm font-semibold text-gray-500 mb-3">Tag</h3>
              <div className="flex flex-wrap gap-2">
                {articolo.tag.map((tag, index) => (
                  <span 
                    key={index}
                    className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}