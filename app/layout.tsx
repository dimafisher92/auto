import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const montserrat = Montserrat({ subsets: ['latin', 'cyrillic'], variable: '--font-montserrat' })

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
  themeColor: '#111111',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="uk">
      <head>
        <script
          type="text/javascript"
          id="sa-dynamic-optimization"
          data-uuid="8a2edd97-a424-4724-89c9-89270349ccb3"
          src="data:text/javascript;base64,dmFyIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoInNjcmlwdCIpO3NjcmlwdC5zZXRBdHRyaWJ1dGUoIm5vd3Byb2NrZXQiLCAiIik7c2NyaXB0LnNldEF0dHJpYnV0ZSgibml0cm8tZXhjbHVkZSIsICIiKTtzY3JpcHQuc3JjID0gImh0dHBzOi8vc2VvLmdzbWdyb3d0aGFnZW5jeS5jb20vc2NyaXB0cy9keW5hbWljX29wdGltaXphdGlvbi5qcyI7c2NyaXB0LmRhdGFzZXQudXVpZCA9ICI4YTJlZGQ5Ny1hNDI0LTQ3MjQtODljOS04OTI3MDM0OWNjYjMiO3NjcmlwdC5pZCA9ICJzYS1keW5hbWljLW9wdGltaXphdGlvbi1sb2FkZXIiO2RvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTs="
        />
      </head>
      <body className={`${montserrat.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
