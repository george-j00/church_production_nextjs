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
  title: "St.Antony's Jacobite Syrian Cathedral, Mangalore | Since 1937",
  description: "St.Antony's Jacobite Syrian Cathedral in Mangalore, established in 1937, is a historic church dedicated to spiritual growth, community service, and faith. Join our vibrant community led by Rev. Fr. Eldhose.",
  keywords: ["Jacobite Syrian Church", "Mangalore Church", "St Antony's Cathedral", "Christian Community Mangalore", "Syrian Orthodox Church"],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://your-domain.com",
    siteName: "St.Antony's Jacobite Syrian Cathedral",
    title: "St.Antony's Jacobite Syrian Cathedral, Mangalore | Since 1937",
    description: "Historic Jacobite Syrian Cathedral in Mangalore serving the community since 1937. Experience spiritual growth, community service, and rich Christian heritage.",
    images: [
      {
        url: "/assets/carousel/2.jpg",
        width: 800,
        height: 600,
        alt: "St.Antony's Jacobite Syrian Cathedral, Mangalore",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "St.Antony's Jacobite Syrian Cathedral, Mangalore",
    description: "Historic Jacobite Syrian Cathedral in Mangalore serving the community since 1937. Experience spiritual growth, community service, and rich Christian heritage.",
    images: ["/assets/carousel/2.jpg"],
  },
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
