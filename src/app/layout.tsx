import { Metadata, Viewport } from 'next'
import { siteConfig } from '®/config/site'
import { fontSans } from '®/lib/fonts'
import { cn } from '®/lib/utils'
import { Providers } from './providers'
import { SpeedInsights } from '@vercel/speed-insights/next'

export const metadata: Metadata = {
  title: `${siteConfig.name}`,
  description: `${siteConfig.description}`,
  applicationName: `${siteConfig.name}`,
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: `${siteConfig.name}`,
    startupImage: ['/icons/rdrive.png'],
  },
  openGraph: {
    type: 'website',
    siteName: `${siteConfig.name}`,
    title: {
      default: `${siteConfig.name}`,
      template: '',
    },
    description: '',
  },
  twitter: {
    card: 'summary',
    title: {
      default: `${siteConfig.name}`,
      template: '',
    },
    description: '',
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/icons/icon-512x512.png',
  },
  authors: [
    {
      name: 'Rock Star',
      url: 'https://rockstar.bio',
    },
  ],
  creator: 'Rock Star',
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          `element min-h-dvh bg-background antialiased ${fontSans.className}`
        )}
      >
        <Providers>
          {children}
          <SpeedInsights />
        </Providers>
      </body>
    </html>
  )
}
