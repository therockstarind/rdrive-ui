import { Metadata, Viewport } from 'next'
import { cn } from '®/lib/utils'
import { Providers } from './providers'
import { siteConfig } from '®/config/site'
import { Inter } from 'next/font/google'
import { fontSans } from '®/lib/fonts'


const inter = Inter({ subsets: ["latin"], variable: "--font-sans",})

export const metadata: Metadata = {
  title: `${siteConfig.name}`,
  description: `${siteConfig.description}`,
  applicationName: `${siteConfig.name}`,
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: `${siteConfig.name}`,
    // startUpImage: [],
  },
  // openGraph: {
  //   type: "website",
  //   siteName: `${siteConfig.name}`,
  //   title: {
  //     default: `${siteConfig.name}`,
  //     template: '',
  //   },
  //   description: '',
  // },
  // twitter: {
  //   card: "summary",
  //   title: {
  //     default: `${siteConfig.name}`,
  //     template: '',
  //   },
  //   description: '',
  // },
  // icons: {
  //   icon: '/favicon.ico',
  //   shortcut: '',
  //   apple: "/icons/icon-512x512.png",
  // },
  // authors: [
  //   {
  //     name: "Rock Star",
  //     url: "https://rockstar.bio",
  //   },
  // ],
  // creator: "Rock Star",

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
      <body className={cn(`min-h-screen bg-background antialiased element ${fontSans.className}`)}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
