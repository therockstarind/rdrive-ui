"use client"
import {NextUIProvider} from "@nextui-org/react";
import { ThemeProvider } from "®/components/ThemeProvider";
import { Theme } from '@radix-ui/themes';
import { Toaster } from "®ui/sonner";
import "®/styles/globals.css"
import "®/styles/vercel.css"
import '@radix-ui/themes/styles.css'
import Navbar from "®/components/NavBar";
import Footer from "®/components/footer";
import { TooltipProvider } from "®/components/ui/tooltip";

export function Providers({children}: { children: React.ReactNode }) {
    return (
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <NextUIProvider>
          <Theme>
          <TooltipProvider>
          <div className="flex min-h-screen flex-col items-center justify-center" vaul-drawer-wrapper="">
                  <Navbar />
                  <main className="flex w-full flex-1 flex-col overflow-x-hidden">
                    <div className="w-full max-w-7xl items-center justify-center mx-auto p-2 sm:p-4 gap-4">
                      {children}
                    </div>
                  </main>
                <Footer />
            </div>
            </TooltipProvider>
            </Theme>
            </NextUIProvider>
            <Toaster />
        </ThemeProvider>

    )
  }