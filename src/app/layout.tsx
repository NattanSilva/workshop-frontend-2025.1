import { Navbar } from '@/components/Navbar'
import type { Metadata } from 'next'
import { Montserrat, Press_Start_2P } from 'next/font/google'
import './globals.css'

export const metadata: Metadata = {
  title: 'Pokemon | TCG',
  description: 'PokeTCG',
  icons: {
    icon: '/favicon.png',
  },
}

const pressStart2P = Press_Start_2P({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-press-start-2p',
})

const montserrat = Montserrat({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-montserrat',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${pressStart2P.variable} ${montserrat.variable}`}
    >
      <body className="w-full bg-[#ff9441]">
        <Navbar />
        {children}
      </body>
    </html>
  )
}
