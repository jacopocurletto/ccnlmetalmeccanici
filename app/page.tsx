import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="bg-blue-900 text-white py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-2">
            CCNL Metalmeccanici
          </h1>
          <p className="text-blue-200">
            Contratto Collettivo Nazionale di Lavoro - Industria Metalmeccanica e Installazione
          </p>
        </div>
      </header>

      {/* Contenuto principale */}
      <div className="container mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">
            Benvenuto
          </h2>
          <p className="text-gray-700 mb-4">
            Questo sito fornisce accesso completo al Contratto Collettivo Nazionale 
            di Lavoro del settore metalmeccanico, aggiornato al 5 febbraio 2021.
          </p>
        </div>

        {/* Sezioni principali */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold mb-3">Titoli e Sezioni</h3>
            <p className="text-gray-600 mb-4">
              Esplora tutti i titoli del contratto organizzati per argomento
            </p>
            <Link 
              href="/titoli" 
              className="text-blue-600 hover:underline font-medium"
            >
              Vai ai Titoli →
            </Link>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold mb-3">Tabelle Retributive</h3>
            <p className="text-gray-600 mb-4">
              Consulta i minimi contrattuali per livello e categoria
            </p>
            <Link 
              href="/tabelle-retributive" 
              className="text-blue-600 hover:underline font-medium"
            >
              Vai alle Tabelle →
            </Link>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold mb-3">Ricerca Articoli</h3>
            <p className="text-gray-600 mb-4">
              Cerca tra tutti gli articoli del contratto
            </p>
            <Link 
              href="/articoli" 
              className="text-blue-600 hover:underline font-medium"
            >
              Cerca Articoli →
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            CCNL Metalmeccanici - Federmeccanica 2021
          </p>
        </div>
      </footer>
    </main>
  )
}