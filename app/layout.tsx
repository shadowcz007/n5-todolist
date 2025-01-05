import { Inter } from 'next/font/google'
import { BottomNav } from '@/components/bottom-nav'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        {children}
        <BottomNav />
      </body>
    </html>
  )
}

