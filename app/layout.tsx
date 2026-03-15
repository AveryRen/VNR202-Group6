import type { Metadata, Viewport } from 'next'
import { Be_Vietnam_Pro, Merriweather } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import 'leaflet/dist/leaflet.css'
import './globals.css'

const sans = Be_Vietnam_Pro({
  subsets: ["latin", "vietnamese"],
  variable: "--font-be-vietnam",
  weight: ["300", "400", "500", "600", "700", "800"],
})

const serif = Merriweather({
  subsets: ["latin", "vietnamese"],
  variable: "--font-merriweather",
  weight: ["300", "400", "700", "900"],
})

export const metadata: Metadata = {
  title: 'Cuộc Kháng Chiến Chống Mỹ Cứu Nước (1954-1975) | Thuyết Trình Học Thuật',
  description:
    'Thuyết trình học thuật về bản chất cuộc kháng chiến chống Mỹ cứu nước: Chỉ là cuộc chiến của riêng Việt Nam hay là một phần của phong trào cách mạng thế giới?',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f8fafc' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
  ],
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body className={`${sans.variable} ${serif.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
