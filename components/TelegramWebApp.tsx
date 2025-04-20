'use client'

import { useEffect } from "react"

export default function TelegramWebApp() {
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

  return null // This component doesn't render anything, it just loads the script
}
