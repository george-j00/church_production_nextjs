import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Poppins } from "next/font/google"
import Head from "next/head"

import "./globals.css"
import { Toaster } from "@/components/ui/toaster"

// const inter = Inter({ subsets: ["latin"] });
const inter = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "St.Antony's Jacobite Syrian Cathedral",
  description: "Website of St.Antony's Jacobite Syrian Cathedral",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <head>
        <link rel="icon" href="/favicon_io/favicon.ico" type="image/x-icon" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon_io/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon_io/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon_io/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon_io/site.webmanifest" />
      </head>
      <body className={inter.className}>
        <main>{children}</main>
      </body>
    </html>
  )
}
