'use client'
import { NextUIProvider } from '@nextui-org/react'
import { useRouter } from 'next/navigation'
import { Suspense } from 'react'
import { ThemeProvider } from '®/components/ThemeProvider'
import HomeNav from '®/components/navbar/home'
import useSmoothScrolling from '®/hooks/useSmoothScrolling'
import '®/styles/globals.css'
import { Toaster } from '®ui/sonner'

export function Providers({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  useSmoothScrolling('a[href^="#"]', [])
  return (
    <NextUIProvider navigate={router.push}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <div
          className="flex min-h-screen flex-col items-center justify-center"
          vaul-drawer-wrapper=""
        >
          <HomeNav />
          <Suspense>
            <div className="flex w-full flex-1 flex-col overflow-clip">
              {children}
            </div>
          </Suspense>
          {/* <Footer /> */}
        </div>
        <Toaster />
      </ThemeProvider>
    </NextUIProvider>
  )
}
