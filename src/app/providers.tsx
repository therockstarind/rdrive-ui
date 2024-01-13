"use client"
import {NextUIProvider} from "@nextui-org/react";
import { ThemeProvider } from "®/components/ThemeProvider";
import { Theme } from '@radix-ui/themes';
import { Toaster } from "®ui/sonner";
import "®/styles/globals.css"
import "®/styles/mdx.css"
import '@radix-ui/themes/styles.css'
import AppBar from "®/components/AppBar";
import Footer from "®/components/footer";
import { TooltipProvider } from "®/components/ui/tooltip";
import useSmoothScrolling from "®/hooks/useSmoothScrolling";

export function Providers({children}: { children: React.ReactNode }) {
  useSmoothScrolling('a[href^="#"]', []);
    return (
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <NextUIProvider>
          <Theme>
          <TooltipProvider>
            <div vaul-drawer-wrapper="">
              <div className="flex min-h-screen flex-col items-center justify-center bg-background">
                  <main className="flex w-full flex-1 flex-col">
                    <div className="mx-auto w-full max-w-7xl p-2 my-2 overflow-clip">
                      {children}
                    </div>
                  </main>
                <Footer />
                <AppBar />
              </div>
            </div>
            </TooltipProvider>
            </Theme>
            </NextUIProvider>
            <Toaster />
        </ThemeProvider>

    )
  }