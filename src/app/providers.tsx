"use client"
import {NextUIProvider} from "@nextui-org/react";
import { ThemeProvider } from "®/components/ThemeProvider";
import { Theme } from '@radix-ui/themes';
import { Toaster } from "®ui/sonner";
import "®/styles/globals.css"
import "®/styles/mdx.css"
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
            <div vaul-drawer-wrapper="">
              <div className="relative flex min-h-screen flex-col bg-background">
                  <Navbar />
                  <main className="flex-1 max-w-7xl overflow-x-clip mx-auto p-2 sm:p-4 gap-4">
                      {children}
                  </main>
                <Footer />
              </div>
            </div>
            </TooltipProvider>
            </Theme>
            </NextUIProvider>
            <Toaster />
        </ThemeProvider>

    )
  }