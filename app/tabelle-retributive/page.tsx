import Link from 'next/link'
import tabelle from '@/data/tabelle.json'

export default function TabelleRetributivePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-blue-900 text-white py-8">
        <div className="container mx-auto px-4">
          <Link href="/" className="text-blue-200 hover:text-white mb-2 inline-block">
            ← Torna alla home
          </Link>
          <h1 className="text-4xl font-bold">Tabelle Retributive</h1>
          <p className="text-blue-200 mt-2">Anno {tabelle.anno}</p>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <table className="w-full">
            <thead className="bg-blue-900 text-white">
              <tr>
                <th className="px-6 py-4 text-left">Livello</th>
                <th className="px-6 py-4 text-left">Descrizione</th>
                <th className="px-6 py-4 text-right">Minimo Mensile</th>
              </tr>
            </thead>
            <tbody>
              {tabelle.livelli.map((livello, index) => (
                <tr 
                  key={index}
                  className="border-b hover:bg-gray-50"
                >
                  <td className="px-6 py-4 font-semibold">
                    {livello.livello}
                  </td>
                  <td className="px-6 py-4 text-gray-700">
                    {livello.descrizione}
                  </td>
                  <td className="px-6 py-4 text-right font-bold text-blue-900">
                    € {livello.minimo.toLocaleString('it-IT', { minimumFractionDigits: 2 })}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}