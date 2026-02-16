import type { Metadata } from 'next'
import { Nunito, Playfair_Display } from 'next/font/google'

import './globals.css'

const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-nunito',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Portfolio UX/UI Designer',
  description: 'Portfolio de una disenadora UX/UI con estilo artistico inspirado en Studio Ghibli. Casos de estudio en Skincare, Google Drive, y apps de restaurantes en Buenos Aires.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${nunito.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
