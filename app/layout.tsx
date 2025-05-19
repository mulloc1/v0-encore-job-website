import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { primaryFont, secondaryFont, cardFont, cardHeadingFont } from "./fonts"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata: Metadata = {
  title: "ENCORE - 클래식 음악 구인구직 플랫폼",
  description: "클래식 음악인을 위한 구인구직 플랫폼",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body
        className={`${primaryFont.variable} ${secondaryFont.variable} ${cardFont.variable} ${cardHeadingFont.variable} font-serif`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
