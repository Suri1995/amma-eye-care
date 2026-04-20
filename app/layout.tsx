import type { Metadata, Viewport } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter"
});

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins"
});

export const metadata: Metadata = {
  title: 'Amma Eye Care Hospital - Premium Eye Care',
  description: 'Your vision, our expertise. Trusted eye care with advanced treatments, experienced doctors, and affordable pricing. Book your appointment today.',
  keywords: ['eye hospital', 'eye care', 'cataract surgery', 'LASIK', 'glaucoma', 'retina specialist', 'eye doctor'],
}

export const viewport: Viewport = {
  themeColor: '#F22233',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-white">
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
