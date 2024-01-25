"use client"
import { NextUIProvider } from "@nextui-org/react";
import { Theme } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';
import { useRouter } from "next/navigation";
import AppBar from "®/components/AppBar";
import { ThemeProvider } from "®/components/ThemeProvider";
import Footer from "®/components/footer";
import useSmoothScrolling from "®/hooks/useSmoothScrolling";
import "®/styles/globals.css";
import { Toaster } from "®ui/sonner";

export function Providers({children}: { children: React.ReactNode }) {
  const router = useRouter();
  useSmoothScrolling('a[href^="#"]', []);
    return (
      <NextUIProvider navigate={router.push}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Theme>
            <div vaul-drawer-wrapper="">
              <div className="flex min-h-dvh flex-col items-center justify-center bg-background">
                  <main className="flex w-full flex-1 flex-col">
                    <div className="mx-auto w-full max-w-7xl p-2 my-2 overflow-clip">

                      {children}
                    </div>
                  </main>
                <Footer />
                <AppBar />
              </div>
            </div>
            <Toaster />
            </Theme>
        </ThemeProvider>
        </NextUIProvider>

    )
  }