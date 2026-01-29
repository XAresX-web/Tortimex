import React from "react"
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL("https://tortimex.com.mx"),
  title: 'Tortimex | Productos de Maíz de Alta Calidad | Jalisco, México',
  description:
    'Tortimex es líder en la producción y distribución de tortillas, masa y totopos de alta calidad en Jalisco.',
  keywords: [
    'tortillas',
    'masa',
    'totopos',
    'maíz',
    'Jalisco',
    'México',
    'Guadalajara',
    'Tlaquepaque',
    'tortillería',
    'molino',
    'insumos para tortillería',
    'distribución',
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'TORTIMEX | Productos de Maíz de Alta Calidad',
    description:
      'Producción y distribución de tortillas, masa y totopos en Jalisco, México.',
    url: 'https://tortimex.com.mx',
    siteName: 'Tortimex',
    locale: 'es_MX',
    type: 'website',
  },
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
