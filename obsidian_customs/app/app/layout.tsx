
import type { Metadata } from 'next'
import { Inter, Orbitron } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from 'sonner'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const orbitron = Orbitron({ subsets: ['latin'], variable: '--font-orbitron' })

export const metadata: Metadata = {
  title: 'Obsidian Customs | Premium Automotive Modifications',
  description: 'Professional automotive modification services specializing in carbon fiber fabrication and 3D printed performance parts. Custom car modifications for all vehicle types.',
  keywords: 'automotive modifications, carbon fiber, 3D printing, performance parts, custom fabrication, car tuning',
  authors: [{ name: 'Obsidian Customs' }],
  openGraph: {
    title: 'Obsidian Customs | Premium Automotive Modifications',
    description: 'Professional automotive modification services specializing in carbon fiber fabrication and 3D printed performance parts.',
    type: 'website',
    locale: 'en_US',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.variable} ${orbitron.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
          <Toaster position="top-right" />
        </ThemeProvider>
      </body>
    </html>
  )
}
