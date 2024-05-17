import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'
import Cookies from './components/alerts/cookies'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Tuneo',
  description: 'Your go to Music Curator',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
<html lang="en" data-theme="forest">
    <body className={inter.className}>
        <div className="flex flex-col justify-between min-h-screen">
            <NavBar />
            <Cookies />
            <div className="flex-grow">
                {children}
            </div>
            <Footer />
        </div>
    </body>
</html>
  )
}
