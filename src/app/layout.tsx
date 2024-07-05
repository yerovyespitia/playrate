import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Navigation } from '../components/Navigation'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Playrate | Discover. Organize. Share.',
  description:
    'Discover a vast collection of video games from all platforms and genres. With our advanced search function and customizable filters, finding your next favorite game has never been easier.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${inter.className} bg-custom-black`}>
        <Navigation />
        {children}
      </body>
    </html>
  )
}
