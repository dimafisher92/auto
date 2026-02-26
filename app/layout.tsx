import type { Metadata } from 'next'
import { Inter, Oswald } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ subsets: ['latin', 'cyrillic'], variable: '--font-inter' })
const oswald = Oswald({ subsets: ['latin', 'cyrillic'], variable: '--font-oswald' })

export const metadata: Metadata = {
  title: '4GEAR - Автосервіс в Одесі | Професійний ремонт та обслуговування авто',
  description: '4GEAR - професійний автосервіс в Одесі. Діагностика, ремонт двигунів, ходової частини, електрики, заміна масла та технічне обслуговування автомобілів. Якість та надійність.',
  keywords: 'автосервіс Одеса, ремонт авто Одеса, діагностика авто, ходова частина, заміна масла, 4GEAR, автомайстерня Одеса',
  openGraph: {
    title: '4GEAR - Автосервіс в Одесі',
    description: 'Професійний ремонт та обслуговування автомобілів в Одесі. Досвідчені майстри, сучасне обладнання, гарантія якості.',
    type: 'website',
    locale: 'uk_UA',
  },
}

export const viewport = {
  themeColor: '#0a0a0a',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="uk">
      <body className={`${inter.variable} ${oswald.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
