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

export function Providers({children}: { children: React.ReactNode }) {
    return (
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <NextUIProvider>
          <Theme>
          <TooltipProvider>
            <div vaul-drawer-wrapper="">
              <div className="relative flex min-h-screen flex-col bg-background">
                  <main className="flex-1 overflow-x-clip p-2 sm:p-6">
                      {children}
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