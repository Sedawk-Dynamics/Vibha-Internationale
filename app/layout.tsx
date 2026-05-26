import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { ThemeProvider } from "@/components/theme-provider"
import { TopProgress } from "@/components/top-progress"

export const metadata: Metadata = {
  title: "Vibha Internationale - Premier Industrial Brazing Solutions",
  description:
    "Leading supplier of aluminum brazing, copper brazing, and industrial cleaning chemicals. Trusted by industries worldwide for quality brazing materials and equipment.",
  keywords: "aluminum brazing, copper brazing, industrial chemicals, brazing rods, brazing wire, export",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/vibha-logo.png",
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased bg-background text-foreground transition-colors duration-300">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange={false}
        >
          <TopProgress />
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <WhatsAppButton />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
