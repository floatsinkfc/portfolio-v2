import { Inter } from 'next/font/google'
import './globals.css'
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Zi Jun Wang - Portfolio',
  description: 'Welcome to my portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className=' scroll-smooth '>
      
      <body className={`${inter.className} !overflow-x-hidden w-full h-full `}>
        <div>
          {children}
        </div>
        
        <Analytics />
      </body>
    </html>
  )
}
