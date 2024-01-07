import { Metadata, Viewport } from 'next'
import { cn } from '®/lib/utils'
import { Providers } from './providers'
import { siteConfig } from '®/config/site'
import { fontSans } from '®/lib/fonts'

export const metadata: Metadata = {
  title: `${siteConfig.name}`,
  description: 'Tota Tola',
  applicationName: `${siteConfig.name}`,
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: `${siteConfig.name}`,
    // startUpImage: [],
  },
  openGraph: {
    type: "website",
    siteName: `${siteConfig.name}`,
    title: {
      default: `${siteConfig.name}`,
      template: '',
    },
    description: '',
  },
  twitter: {
    card: "summary",
    title: {
      default: `${siteConfig.name}`,
      template: '',
    },
    description: '',
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: '',
    apple: "/icons/icon-512x512.png",
  },
  authors: [
    {
      name: "shadcn",
      url: "https://shadcn.com",
    },
  ],
  creator: "shadcn",

}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
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
          "min-h-screen bg-background font-sans antialiased element",
          fontSans.className
        )}
      >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
