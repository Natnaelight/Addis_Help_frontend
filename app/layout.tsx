'use client'
import type React from "react"
import type { Metadata } from "next/types"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { SidebarProvider } from "@/components/ui/sidebar"
import { useEffect } from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Addis Helper | Trusted Services in Addis Ababa",
  description: "Connect with pre-vetted service providers in Addis Ababa",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  useEffect(() => {
    // Load the Telegram Web App SDK script dynamically
    const script = document.createElement('script')
    script.src = 'https://telegram.org/js/telegram-web-app.js'
    script.async = true
    document.body.appendChild(script)

    // Once the script is loaded, initialize the Telegram Web App
    script.onload = () => {
      if (typeof window !== 'undefined' && window.Telegram?.WebApp) {
        const tg = window.Telegram.WebApp
        tg.ready() // Initialize the WebApp
        tg.expand() // Optional: Expand the WebApp to full screen
        console.log("Telegram WebApp initialized", tg.initDataUnsafe?.user)
      }
    }

    // Cleanup: Remove the script when component unmounts
    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <SidebarProvider>{children}</SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
