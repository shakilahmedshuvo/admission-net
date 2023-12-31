import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/Components/HomePage/Navbar/Navbar'
import Footer from '@/Components/HomePage/Footer/Footer'
import AuthProvider from '@/Components/Utilities/AuthProvider/AuthProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Admission Net | Home',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AuthProvider>
        <body className={inter.className}>
          <Navbar />
          {children}
          <Footer />
        </body>
      </AuthProvider>
    </html>
  )
}
