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
  title: 'Portfolio UX/UI Designer - Luciana Dáttoli',
  description: 'Transformo ideas complejas en interfaces intuitivas y memorables. Cada proyecto es una historia por contar, cada pantalla un lienzo donde la funcionalidad y la belleza se encuentran.',
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
