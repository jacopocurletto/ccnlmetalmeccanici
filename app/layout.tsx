import './globals.css'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'CCNL Metalmeccanici - Contratto Nazionale',
  description: 'Contratto Collettivo Nazionale Metalmeccanici - Federmeccanica 2021',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it">
      <body className="bg-gray-50">{children}</body>
    </html>
  )
}