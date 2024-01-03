import { ThemeProvider } from "®/components/ThemeProvider";
import { Toaster } from "®ui/sonner";
import "®/styles/globals.css"
import Navbar from "®/components/NavBar";
import Footer from "®/components/Footer";

export function Providers({children}: { children: React.ReactNode }) {
    return (
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen flex-col items-center justify-center">
                  <Navbar />
                  <main className="flex w-full flex-1 flex-col">
                    <div className="w-full flex flex-col max-w-7xl items-center justify-center mx-auto p-24 gap-4">
                      {children}
                    </div>
                  </main>
                {/* <Footer /> */}
            </div>
            <Toaster />
        </ThemeProvider>

    )
  }