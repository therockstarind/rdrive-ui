"use client"
import {NextUIProvider} from "@nextui-org/react";
import { ThemeProvider } from "®/components/ThemeProvider";
import { Toaster } from "®ui/sonner";
import "®/styles/globals.css"
import Navbar from "®/components/NavBar";
import Footer from "®/components/footer";
import { TooltipProvider } from "®/components/ui/tooltip";

export function Providers({children}: { children: React.ReactNode }) {
    return (
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <NextUIProvider>
          <TooltipProvider>
          <div className="relative flex min-h-screen flex-col items-center justify-center" vaul-drawer-wrapper="">
                  <Navbar />
                  <main className="flex w-full flex-1 flex-col overFlow_x">
                    <div className="w-full flex flex-col max-w-7xl items-center justify-center mx-auto p-2 sm:p-4 gap-4">
                      {children}
                    </div>
                  </main>
                <Footer />
            </div>
            </TooltipProvider>
            </NextUIProvider>
            <Toaster />
        </ThemeProvider>

    )
  }