'use client'
import { NextUIProvider } from '@nextui-org/react'
import { Theme } from '@radix-ui/themes'
import '@radix-ui/themes/styles.css'
import { useRouter } from 'next/navigation'
import AppBar from '®/components/AppBar'
import { ThemeProvider } from '®/components/ThemeProvider'
import Footer from '®/components/footer'
import useSmoothScrolling from '®/hooks/useSmoothScrolling'
import '®/styles/globals.css'
import { Toaster } from '®ui/sonner'

export function Providers({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  useSmoothScrolling('a[href^="#"]', [])
  return (
    <NextUIProvider navigate={router.push}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <Theme>
          <div className="flex min-h-dvh flex-col items-center justify-center bg-background" vaul-drawer-wrapper="">
            <main className="flex w-full flex-1 flex-col overflow-clip">
              {children}
            </main>
            <Footer />
            <AppBar />
          </div>
          <Toaster />
        </Theme>
      </ThemeProvider>
    </NextUIProvider>
  )
}
