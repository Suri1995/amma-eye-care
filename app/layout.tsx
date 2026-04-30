import type { Metadata, Viewport } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter"
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
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="bg-white">
      <head>
        {/* Optional: Critical CSS */}
        <style
          dangerouslySetInnerHTML={{
            __html: `body{margin:0}`
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}