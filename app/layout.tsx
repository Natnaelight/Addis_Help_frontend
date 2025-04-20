import type React from "react"
import type { Metadata } from "next/types"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { SidebarProvider } from "@/components/ui/sidebar"
import TelegramWebApp from "@/components/TelegramWebApp" // Import the new client component

const inter = Inter({ subsets: ["latin"] })

// Define metadata here for SEO
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
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <SidebarProvider>
            {children}
            {/* Add the Telegram WebApp component */}
            <TelegramWebApp />
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
